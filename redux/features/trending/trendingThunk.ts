import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "~/redux/store/store";
import {TrendingListAPI} from "~/services/apiMethods";

export const getTrendingMovieListByWeek = createAsyncThunk("trending/getTrendingMovieList", async(_, { getState }) => {
    try {
        const state = getState() as RootState;
        if(!state.master.apiKey !== null) {
            const res = await TrendingListAPI(state.master.apiKey);
            return res.data;
        }
        return null;
    } catch(error) {
        console.error(error);
    }
});