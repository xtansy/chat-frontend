import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { signIn } from "@utils/api/requests/auth";
import { AxiosError } from "axios";

interface UserSliceProps {
    user: User | null;
    isAuth: boolean;
    isLoading: boolean;
    isError: string | null;
}
const initialState: UserSliceProps = {
    user: null,
    isAuth: false,
    isLoading: false,
    isError: null,
};

export const fetchSignIn = createAsyncThunk<signInResult, signInProps, { rejectValue: any }>("userSlice/fetchSignIn", async (action, { rejectWithValue }) => {
    try {
        return await signIn(action);
    } catch (error) {
        const err = error as AxiosError;
        return rejectWithValue(err.response?.data);
    }
});


const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        // changePaginateCount: (state, action: PayloadAction<boolean>) => {
        //     state.loadingStatus = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSignIn.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchSignIn.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload.message;
            state.user = null;
        })
        builder.addCase(fetchSignIn.fulfilled, (state, action) => {
            state.isError = null;
            state.isAuth = true;
            state.isLoading = false;
            const { password, ...user } = action.payload.user;
            state.user = user;
        })
    }
});

const { actions, reducer } = userSlice;
export default reducer;
