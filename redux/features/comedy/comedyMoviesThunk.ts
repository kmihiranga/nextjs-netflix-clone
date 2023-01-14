import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "~/redux/store/store";
import {ComedyMoviesAPI} from "~/services/apiMethods";

export const getComedyMoviesList = createAsyncThunk("comedy/getComedyMovies", async(_, { getState }) => {
    try {
        const state = getState() as RootState;
        const res = await ComedyMoviesAPI(state.master.apiKey);
        return res.data;
    } catch (error) {
        console.error(error);
    }
});