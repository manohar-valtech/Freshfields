import EpiEditorAttributes from '@/types/EpiEditorAttributes';

export const addEditAttributes = (
    propertyName: string
): EpiEditorAttributes => {
    return {
        'data-epi-property-name': propertyName,
        'data-epi-property-render': 'none',
    };
};

export const addFullRefreshPropertiesAttributes = (
    propertyNames: string[]
): EpiEditorAttributes => {
    return {
        'data-epi-full-refresh-property-names': propertyNames.join(','),
    };
};

export const addEditAttributesBlockLevel = (
    contentId?: string
): EpiEditorAttributes => {
    return contentId
        ? {
              'data-epi-block-id': contentId,
          }
        : {};
};
