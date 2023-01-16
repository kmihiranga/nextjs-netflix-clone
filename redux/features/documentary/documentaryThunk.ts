import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "~/redux/store/store";
import {DocumentaryMoviesAPI} from "~/services/apiMethods";

export const getDocumentaryMovieList = createAsyncThunk("documentary/getDocumentaryMovies", async(_, { getState }) => {
    try {
        const state = getState() as RootState;
        const res = await DocumentaryMoviesAPI(state.master.apiKey);
        return res.data;
    } catch (error) {
        console.error(error);
    }
});