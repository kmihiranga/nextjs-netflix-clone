import { RomanceMovieResultResponse } from "./api";

export interface RomanceSlice {
    romanceMovieData: RomanceMovieResultResponse[];
    romanceMovieDataLoading: boolean;
}