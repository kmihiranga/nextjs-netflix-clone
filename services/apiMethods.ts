import axios, { AxiosRequestConfig } from "axios";
import {API} from "./apiBuild";
import {TrendingListResponse} from '~/typings';
import {NetflixOriginals, TopRated, TrendingList} from '~/constants/API';
import {NetflixOriginalsResponse} from "~/typings/interfaces/api/response/NetflixOriginals";
import { TopRatedListResponse } from "~/typings/interfaces/api/response/TopRated";

export const TrendingListAPI = (apikey: string) => {
    const TrendingListAPIUrl = TrendingList(apikey);
    return API.get<TrendingListResponse>(TrendingListAPIUrl);
}

export const NetflixOriginalsAPI = (apiKey: string) => {
    const NetflixOriginalsAPIUrl = NetflixOriginals(apiKey);
    return API.get<NetflixOriginalsResponse>(NetflixOriginalsAPIUrl);
}

export const TopRatedAPI = (apiKey: string) => {
    const TopRatedAPIUrl = TopRated(apiKey);
    return API.get<TopRatedListResponse>(TopRatedAPIUrl);
}