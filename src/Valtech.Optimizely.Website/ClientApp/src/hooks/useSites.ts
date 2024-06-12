import {
    ContentData,
    ResolvedContent,
    SiteLoader,
} from '@episerver/content-delivery';

const useSites = (): {
    pending: boolean;
    resolvedSites: ResolvedContent<ContentData>;
} => {
    let resolvedSites = {} as ResolvedContent<ContentData>;
    let pending = true;
    const siteLoader = new SiteLoader();

    siteLoader
        .getSites()
        .then((sites) => Object.assign(resolvedSites, sites))
        .catch((siteLoaderError) => {
            console.error('Sites not loaded', siteLoaderError.errorMessage);
        })
        .finally(() => {
            pending = false;
        });

    return {
        pending,
        resolvedSites,
    };
};

export default useSites;
