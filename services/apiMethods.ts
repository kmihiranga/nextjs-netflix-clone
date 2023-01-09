import axios, { AxiosRequestConfig } from "axios";
import {API} from "./apiBuild";
import {TrendingListResponse} from '~/typings';
import { TrendingList } from '~/constants/API';

export const TrendingListAPI = (apikey: string) => {
    const TrendingListAPIUrl = TrendingList(apikey);
    return API.get<TrendingListResponse>(TrendingListAPIUrl);
}