import {HorrorMovieResultResponse} from "~/typings";

export interface HorrorSlice {
    horrorMovieData: HorrorMovieResultResponse[];
    horrorMovieDataLoading: boolean;
}