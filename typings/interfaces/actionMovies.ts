import {ActionMovieResultResponse} from "~/typings";

export interface ActionMoviesSlice {
    actionMoviesData: ActionMovieResultResponse[];
    actionMoviesDataLoading: boolean;
}