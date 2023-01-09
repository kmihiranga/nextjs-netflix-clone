import axios, { AxiosError, AxiosRequestConfig } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

if(!baseURL) {
    console.warn(`NEXT_PUBLIC_API_BASE_URL has not defined!`);
}

export const API = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// export const setAuthHeader = (token: string) => {
//     API.defaults.headers.common.Authorization = `Bearer ${token}`;
// }
//
// const UN_AUTHENTICATED_HTTP_STATUSES = [401, 403];