import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "~/redux/store/store";
import { TopRatedAPI } from "~/services/apiMethods";

export const getTopRatedList = createAsyncThunk("toprated/getTopRated", async (_, { getState }) => {
    try {
        const state = getState() as RootState;
        const res = await TopRatedAPI(state.master.apiKey);
        return res.data;
    } catch(error) {
        console.log(error);
    }
});