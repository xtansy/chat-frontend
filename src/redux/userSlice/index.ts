import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { signIn } from "@utils/api/requests/auth";
import { getMe } from "@utils/api/requests/user";
import { AxiosError } from "axios";

interface UserSliceProps {
    user: User | null;
    isAuth: boolean;
    isLoading: boolean;
    errorMessage: string | null;
}
const initialState: UserSliceProps = {
    user: null,
    isAuth: false,
    isLoading: false,
    errorMessage: null,
};

export const fetchSignIn = createAsyncThunk<signInResult, signInProps, { rejectValue: any }>("userSlice/fetchSignIn", async (action, { rejectWithValue }) => {
    try {
        return await signIn(action);
    } catch (error) {
        const err = error as AxiosError;
        return rejectWithValue(err.response?.data);
    }
});

export const fetchGetMe = createAsyncThunk<Response<User>, void, { rejectValue: any }>("userSlice/fetchGetMe", async (_, { rejectWithValue }) => {
    try {
        return await getMe();
    } catch (error) {
        const err = error as AxiosError;
        return rejectWithValue(err.response?.data);
    }
});
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuth = false;
            state.user = null;
            state.isLoading = false;
            state.errorMessage = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {

        builder.addCase(fetchGetMe.pending, (state) => {
            state.isLoading = true;

        })
        builder.addCase(fetchGetMe.rejected, (state, action) => {
            state.isAuth = false;
            state.isLoading = false;
            state.errorMessage = action.payload.message;
            state.user = null;
        })
        builder.addCase(fetchGetMe.fulfilled, (state, action) => {
            state.errorMessage = null;
            state.isAuth = true;
            state.isLoading = false;
            state.user = action.payload.data;
        })



        ////////////////////////////////////
        builder.addCase(fetchSignIn.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchSignIn.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload.message;
            state.user = null;
        })
        builder.addCase(fetchSignIn.fulfilled, (state, action) => {
            state.errorMessage = null;
            state.isAuth = true;
            state.isLoading = false;
            state.user = action.payload.data;
        })
    }
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
