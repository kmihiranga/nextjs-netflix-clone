import {ComedyMovieResultResponse} from "~/typings";

export interface ComedySlice {
    comedyMovieData: ComedyMovieResultResponse[];
    comedyMovieDataLoading: boolean;
}