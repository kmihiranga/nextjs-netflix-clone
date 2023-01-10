import {createSlice} from "@reduxjs/toolkit";
import {NetflixOriginalsSlice} from '~/typings';
import {getNetflixOriginalsList} from "~/redux/features/netflix_originals/netflixOriginalsThunk";
import { NetflixOriginalsResponse } from "~/typings/interfaces/api/response/NetflixOriginals";

const initialState: NetflixOriginalsSlice = {
    netflixOriginalsMovieData: [],
    netflixOriginalsMovieDataLoading: false,
};

export const NetflixOriginalsMovieListSlice = createSlice({
   name: 'netflix_originals',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
       builder.addCase(getNetflixOriginalsList.pending, (state) => {
           state.netflixOriginalsMovieDataLoading = true;
       }).addCase(getNetflixOriginalsList.fulfilled, (state, action) => {
           const actionData: NetflixOriginalsResponse = action.payload as NetflixOriginalsResponse;
           state.netflixOriginalsMovieData = actionData.results;
           state.netflixOriginalsMovieDataLoading = false;
       }).addCase(getNetflixOriginalsList.rejected, (state) => {
           state.netflixOriginalsMovieDataLoading = false;
       });
   }
});

export const NetflixOriginalsMovieListAction = NetflixOriginalsMovieListSlice.actions;
export default NetflixOriginalsMovieListSlice.reducer;