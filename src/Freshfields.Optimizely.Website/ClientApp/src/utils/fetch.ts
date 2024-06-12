import axios, { AxiosResponse } from 'axios';

if (typeof document !== 'undefined' && document?.documentElement?.lang) {
    axios.defaults.params = {};
}

export const getData = async (path: string): Promise<AxiosResponse> => {
    //console.log("fetch getData", path); // eslint-disable-line no-console
    return await axios.get(path);
};

export const postData = async (
    path: string,
    data: Record<string, any>
): Promise<AxiosResponse> => {
    //console.log("fetch postData", path, data); // eslint-disable-line no-console
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        // Do not submit the undefined data
        if (data[key] !== undefined)
            if (data[key] instanceof FileList)
                Array.from(data[key]).forEach((file) => {
                    formData.append(key, file as File);
                });
            else formData.append(key, data[key]);
    });

    return await axios.post(path, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
        },
    });
};
export const postJsonData = async (
    path: string,
    data: object
): Promise<AxiosResponse> => {
    return await axios.post(path, data, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
};
