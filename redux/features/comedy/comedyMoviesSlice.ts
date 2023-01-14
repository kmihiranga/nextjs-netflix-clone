import {createSlice} from "@reduxjs/toolkit";
import {ComedySlice} from "~/typings/interfaces/comedy";

const initialState: ComedySlice = {
    comedyMovieData: [],
    comedyMovieDataLoading: false,
}
export const ComedyMovieListSlice = createSlice({
    name: 'comedy',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})