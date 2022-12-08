import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
    username: string;
    email: string;
    role: string;
}
interface UserSliceProps {
    user: User | null;
    isAuth: boolean;
    isLoading: boolean;
    isError: {
        error: Error;
        message: string;
    } | null;
}
const initialState: UserSliceProps = {
    user: null,
    isAuth: false,
    isLoading: false,
    isError: null,
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        // changePaginateCount: (state, action: PayloadAction<boolean>) => {
        //     state.loadingStatus = action.payload;
        // },
    },
    // extraReducers:
});

const { actions, reducer } = userSlice;
export default reducer;
