import {
    ContextMode,
    ResolvedContentStatus,
} from '@episerver/content-delivery';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import BlockComponentSelector from '@/components/BlockComponentSelector';

import { default as getContent } from '@/utils/getContent';

const Page = async () => {
    const headersList = headers();
    const pathname = headersList.get('x-pathname') || '';

    const { getContentByUrl } = getContent();

    let pageContent = await getContentByUrl(pathname);

    switch (pageContent.status) {
        case ResolvedContentStatus.NotFound:
        case ResolvedContentStatus.AccessDenied:
            notFound();
        case ResolvedContentStatus.Unauthorized:
            if (typeof window !== 'undefined')
                window.location.href = `/util/login?ReturnUrl=${pathname}`;

            break;
        default:
            break;
    }

    var renderPreviewWrapper: boolean =
        pageContent.mode == ContextMode.Preview &&
        pageContent.content?.contentType[0] === 'Block';

    //TODO: Workaround for issues with edit mode // preview mode, so force edit mode even in preview
    pageContent.mode =
        pageContent.mode === ContextMode.Default
            ? ContextMode.Default
            : ContextMode.Edit;

    return (
        <>
            {pageContent.status === ResolvedContentStatus.Resolved && (
                <>
                    {pageContent.mode == ContextMode.Edit && (
                        <>
                            <Script
                                src="/episerver/cms/latest/clientresources/communicationinjector.js"
                                strategy="afterInteractive"
                            />
                        </>
                    )}

                    <BlockComponentSelector
                        content={pageContent.content}
                        mode={pageContent.mode}
                        previewWrapper={renderPreviewWrapper}
                    />
                </>
            )}
        </>
    );
};

export default Page;
