import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ITags {
    tags: string[];
    loadingStatus: boolean;
}
const initialState: ITags = {
    tags: [],
    loadingStatus: false,
};

const tags = createSlice({
    name: "tags",
    initialState,
    reducers: {
        changePaginateCount: (state, action: PayloadAction<boolean>) => {
            state.loadingStatus = action.payload;
        },
    },
});

const { actions, reducer } = tags;
export default reducer;
