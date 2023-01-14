import {createSlice} from "@reduxjs/toolkit";
import {ActionMovieResponse, ActionMoviesSlice} from "~/typings";
import {getActionMoviesList} from "~/redux/features/action_movies/actionMoviesThunk";

const initialState: ActionMoviesSlice = {
    actionMoviesData: [],
    actionMoviesDataLoading: false,
}

export const ActionMovieListSlice = createSlice({
    name: 'action_movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getActionMoviesList.pending, (state) => {
            state.actionMoviesDataLoading = true;
        }).addCase(getActionMoviesList.fulfilled, (state, action) => {
            const actionData: ActionMovieResponse = action.payload as ActionMovieResponse;
            state.actionMoviesData = actionData.results;
            state.actionMoviesDataLoading = false;
        }).addCase(getActionMoviesList.rejected, (state) => {
            state.actionMoviesDataLoading = false;
        })
    }
});

export const ActionMoviesListAction = ActionMovieListSlice.actions;
export default ActionMovieListSlice.reducer;