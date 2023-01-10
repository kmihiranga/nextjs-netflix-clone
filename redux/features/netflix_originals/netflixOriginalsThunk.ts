import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "~/redux/store/store";
import {NetflixOriginalsAPI} from "~/services/apiMethods";

export const getNetflixOriginalsList = createAsyncThunk("originals/getNetflixOriginals", async(_, { getState }) => {
    try {
        const state = getState() as RootState;
        const res = await NetflixOriginalsAPI(state.master.apiKey);
        return res.data;
    } catch (error) {
        console.error(error);
    }
});