import { createSlice } from "@reduxjs/toolkit";
import { RomanceSlice } from "~/typings";
import { getRomanceMoviesList } from "./romanceMoviesThunk";
import { RomanceMovieResponse } from "~/typings";

const initialState: RomanceSlice = {
    romanceMovieData: [],
    romanceMovieDataLoading: false,
};

export const RomanceMovieListSlice = createSlice