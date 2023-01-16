import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {HorrorMovieResultResponse, HorrorSlice} from "~/typings";
import {getHorrorMoviesList} from "~/redux/features/horror/horrorMoviesThunk";
import {HorrorMovieResponse} from "~/typings";

const initialState: HorrorSlice = {
    horrorMovieData: [],
    horrorMovieDataLoading: false,
};

export const HorrorMovieListSlice = createSlice({
    name: 'horror',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHorrorMoviesList.pending, (state) => {
            state.horrorMovieDataLoading = true;
        })
        .addCase(getHorrorMoviesList.fulfilled, (state, action) => {
            const actionData = action.payload as HorrorMovieResponse;
            state.horrorMovieData = actionData.results;
            state.horrorMovieDataLoading = false;
        }).addCase(getHorrorMoviesList.rejected, (state) => {
            state.horrorMovieDataLoading = false;
        })
    }
});

export const HorrorMovieListAction = HorrorMovieListSlice.actions;
export default HorrorMovieListSlice.reducer;