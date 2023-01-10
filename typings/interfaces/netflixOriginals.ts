import {NetflixOriginalsResultResponse} from "~/typings/interfaces/api/response/NetflixOriginals";

export interface NetflixOriginalsSlice {
    netflixOriginalsMovieData: NetflixOriginalsResultResponse[],
    netflixOriginalsMovieDataLoading: boolean;
}