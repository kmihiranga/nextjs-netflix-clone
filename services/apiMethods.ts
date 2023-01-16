import {API} from "./apiBuild";
import {
    HorrorMovieResponse,
    TrendingListResponse,
    NetflixOriginalsResponse,
    TopRatedListResponse,
    ActionMovieResponse,
    ComedyMovieResponse,
    RomanceMovieResponse,
    DocumentaryMovieResponse
} from '~/typings';
import {
    NetflixOriginals,
    TopRated,
    TrendingList,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries
} from '~/constants/API';

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

export const HorrorMoviesAPI = (apiKey: string) => {
    const HorrorMoviesAPIUrl = HorrorMovies(apiKey);
    return API.get<HorrorMovieResponse>(HorrorMoviesAPIUrl);
}

export const RomanceMoviesAPI = (apiKey: string) => {
    const RomanceMoviesAPIUrl = RomanceMovies(apiKey);
    return API.get<RomanceMovieResponse>(RomanceMoviesAPIUrl);
}

export const DocumentaryMoviesAPI = (apikey: string) => {
    const DocumentaryMoviesAPIUrl = Documentaries(apikey);
    return API.get<DocumentaryMovieResponse>(DocumentaryMoviesAPIUrl);
}