import {ComedyMovieResultResponse} from "~/typings";

export interface ComedySlice {
    comedyMovieData: ComedyMovieResultResponse[] | null;
    comedyMovieDataLoading: boolean;
}