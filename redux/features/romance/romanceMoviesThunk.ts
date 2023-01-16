import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "~/redux/store/store";
import { RomanceMoviesAPI } from "~/services/apiMethods";

export const getRomanceMoviesList = createAsyncThunk("romance/getRomanceMovies", async(_, { getState}) => {
    try {
        const state = getState() as RootState;
        const res = await RomanceMoviesAPI(state.master.apiKey);
        return res.data;
    } catch(error) {
        console.error(error);
    }
});