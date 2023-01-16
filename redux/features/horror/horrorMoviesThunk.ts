import {createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "~/redux/store/store";
import {HorrorMoviesAPI} from "~/services/apiMethods";

export const getHorrorMoviesList = createAsyncThunk("horror/getHorrors", async (_, { getState }) => {
    try {
        const state = getState() as RootState;
        const res = await HorrorMoviesAPI(state.master.apiKey);
        return res.data;
    } catch (error) {
        console.error(error);
    }
});