import {API} from "./apiBuild";
import {TrendingListResponse} from '~/typings';
import {NetflixOriginals, TopRated, TrendingList, ActionMovies, ComedyMovies} from '~/constants/API';
import {NetflixOriginalsResponse} from "~/typings/interfaces/api/response/NetflixOriginals";
import { TopRatedListResponse } from "~/typings/interfaces/api/response/TopRated";
import {ActionMovieResponse} from "~/typings/interfaces/api/response/ActionMovies";
import {ComedyMovieResponse} from "~/typings/interfaces/api/response/ComedyMovies";

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

export const ActionMoviesAPI = (apiKey: string) => {
    const ActionMoviesAPIUrl = ActionMovies(apiKey);
    return API.get<ActionMovieResponse>(ActionMoviesAPIUrl);
}

export const ComedyMoviesAPI = (apiKey: string) => {
    const ComedyMoviesAPIUrl = ComedyMovies(apiKey);
    return API.get<ComedyMovieResponse>(ComedyMoviesAPIUrl);
}