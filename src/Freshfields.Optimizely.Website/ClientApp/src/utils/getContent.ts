import {
    ContentData,
    ContentLoader,
    ContentRequest,
    ContentResolver,
    ResolveContentRequest,
    ResolvedContent,
    defaultConfig,
} from '@episerver/content-delivery';

const getContent = (): {
    contentLoader: ContentLoader;
    contentResolver: ContentResolver;
    pending: boolean;
    getContentByUrl: (
        url: string,
        request?: ResolveContentRequest
    ) => Promise<ResolvedContent<ContentData>>;
    getContentByGuid: (
        id: string,
        request?: ContentRequest
    ) => Promise<ContentData>;
} => {
    /**
     * Setup the api
     */
    defaultConfig.apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    defaultConfig.selectAllProperties = true;
    defaultConfig.expandAllProperties = true;

    let pending = false;

    /**
     * The contentResolver configured
     */
    const contentResolver = new ContentResolver();

    /**
     * The contentLoader configured
     */
    const contentLoader = new ContentLoader();

    /**
     * getContentByUrl returns the result
     */
    const getContentByUrl = async (
        url: string,
        request?: ResolveContentRequest
    ) => {
        pending = true;

        const result = await contentResolver.resolveContent(url, true, request);

        pending = false;

        return result;
    };

    /**
     * getContentByGuid returns the result
     */
    const getContentByGuid = async (id: string, request?: ContentRequest) => {
        pending = true;

        const result = await contentLoader.getContent(id, request);

        pending = false;

        return result;
    };

    return {
        contentLoader,
        contentResolver,
        pending,
        getContentByUrl,
        getContentByGuid,
    };
};

export default getContent;
