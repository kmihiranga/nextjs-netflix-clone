import {createSlice} from "@reduxjs/toolkit";
import { TopRatedSlice } from "~/typings";
import { getTopRatedList } from "~/redux/features/top_rated/topRatedThunk";
import { TopRatedListResponse } from "~/typings";

const initialState: TopRatedSlice = {
    topRatedMovieData: [],
    topRatedMovieDataLoading: false,
}

export const TopRatedMovieListSlice = createSlice({
    name: 'toprated',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTopRatedList.pending, (state) => {
            state.topRatedMovieDataLoading = true;
        }).addCase(getTopRatedList.fulfilled, (state, action) => {
            const actionData: TopRatedListResponse = action.payload as TopRatedListResponse;
            state.topRatedMovieData = actionData.results;
            state.topRatedMovieDataLoading = false;
        }).addCase(getTopRatedList.rejected, (state) => {
            state.topRatedMovieDataLoading = false;    
        });
    }
});

export const TopRatedMovieListAction = TopRatedMovieListSlice.actions;
export default TopRatedMovieListSlice.reducer;