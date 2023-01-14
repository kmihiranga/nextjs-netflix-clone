import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "~/redux/store/store";
import {ActionMoviesAPI} from "~/services/apiMethods";

export const getActionMoviesList = createAsyncThunk("actions/getActionMovies", async(_, { getState }) => {
    try {
        const state = getState() as RootState;
        const res = await ActionMoviesAPI(state.master.apiKey);
        return res.data;
    } catch(error) {
        console.error(error);
    }
});