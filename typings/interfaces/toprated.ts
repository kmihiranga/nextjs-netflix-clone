import { TopRatedResultDetailsResponse } from "./api";

export interface TopRatedSlice {
    topRatedMovieData: TopRatedResultDetailsResponse[];
    topRatedMovieDataLoading: boolean;
}