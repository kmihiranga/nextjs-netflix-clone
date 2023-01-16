import {DocumentaryMovieResultResponse} from "~/typings";

export interface DocumentarySlice {
    documentaryMovieData: DocumentaryMovieResultResponse[];
    documentaryMovieDataLoading: boolean;
}