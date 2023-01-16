import {createSlice} from "@reduxjs/toolkit";
import {ComedySlice} from "~/typings/interfaces/comedy";
import {getComedyMoviesList} from "~/redux/features/comedy/comedyMoviesThunk";
import {ComedyMovieResponse} from "~/typings";

const initialState: ComedySlice = {
    comedyMovieData: [],
    comedyMovieDataLoading: false,
}
export const ComedyMovieListSlice = createSlice({
    name: 'comedy',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getComedyMoviesList.pending, (state) => {
            state.comedyMovieDataLoading = true;
        }).addCase(getComedyMoviesList.fulfilled, (state, action) => {
            const actionData: ComedyMovieResponse = action.payload as ComedyMovieResponse;
            state.comedyMovieData = actionData.results;
            state.comedyMovieDataLoading = false;
        }).addCase(getComedyMoviesList.rejected, (state) => {
            state.comedyMovieDataLoading = false;
        })
    }
});

export const ComedyMovieListAction = ComedyMovieListSlice.actions;
export default ComedyMovieListSlice.reducer;