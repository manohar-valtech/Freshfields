const displayOptions = (wrapperClass = 'container') => {
    const options = {
        full: '--full',
        wide: '--two-third',
        half: '--half',
        narrow: '--one-third',
    };

    const getDisplayOption = (value: string) => {
        const keys = Object.keys(options);
        const values = Object.values(options);

        for (let i = 0; i < keys.length; i += 1) {
            if (value === keys[i]) {
                return wrapperClass + values[i];
            }
        }

        return '';
    };

    return {
        options,
        getDisplayOption,
    };
};

export default displayOptions;
