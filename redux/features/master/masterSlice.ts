import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

export interface MasterState {
    apiKey: string;
}

const initialState: MasterState = {
    apiKey: process.env.NEXT_PUBLIC_TMDB_API_KEY ?? "",
}

export const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {},
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.master
            }
        }
    }
});

export default masterSlice.reducer;