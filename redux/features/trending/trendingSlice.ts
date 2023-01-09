import {createSlice} from "@reduxjs/toolkit";
import {TrendingSlice} from "~/typings";
import {getTrendingMovieListByWeek} from "~/redux/features/trending/trendingThunk";

const initialState: TrendingSlice = {
    trendingMovieData: [],
    trendingMovieDataLoading: false,
}

export const TrendingMovieListSlice = createSlice({
    name: 'trending',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTrendingMovieListByWeek.pending, (state) => {
            state.trendingMovieDataLoading = true;
        });
        builder.addCase(getTrendingMovieListByWeek.fulfilled, (state, action) => {
            state.trendingMovieData = action.payload?.results ?? null;
            state.trendingMovieDataLoading = false;
        });
        builder.addCase(getTrendingMovieListByWeek.rejected, (state) => {
            state.trendingMovieDataLoading = false;
        })
    }
});

export const TrendingMovieListAction = TrendingMovieListSlice.actions;
export default TrendingMovieListSlice.reducer;