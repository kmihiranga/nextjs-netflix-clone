import {createSlice} from "@reduxjs/toolkit";
import {DocumentarySlice} from "~/typings";
import {getDocumentaryMovieList} from "~/redux/features/documentary/documentaryThunk";
import {DocumentaryMovieResponse} from "~/typings";

const initialState: DocumentarySlice = {
    documentaryMovieData: [],
    documentaryMovieDataLoading: false,
};

export const DocumentaryMovieListSlice = createSlice({
    name: 'documentary',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDocumentaryMovieList.pending, (state) => {
            state.documentaryMovieDataLoading = true;
        }).addCase(getDocumentaryMovieList.fulfilled, (state, action) => {
            const actionData = action.payload as DocumentaryMovieResponse;
            state.documentaryMovieData = actionData.results;
            state.documentaryMovieDataLoading = false;
        }).addCase(getDocumentaryMovieList.rejected, (state) => {
            state.documentaryMovieDataLoading = false;
        })
    }
});

export const DocumentaryMovieListAction = DocumentaryMovieListSlice.actions;
export default DocumentaryMovieListSlice.reducer;