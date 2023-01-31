import { AxiosError } from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { getDialogs } from "@utils/api/requests/dialog";

interface DialogSlice {
    isLoading: boolean;
    dialogs: Dialog[];
    isError: string | null;
}

export const fetchDialogs = createAsyncThunk<Response<Dialog[]>, void, { rejectValue: any }>("dialogSlice/fetchDialogs", async (action, { rejectWithValue }) => {
    try {
        return await getDialogs();
    } catch (error) {
        const err = error as AxiosError;
        return rejectWithValue(err.response?.data);
    }
});

const initialState: DialogSlice = {
    dialogs: [],
    isLoading: false,
    isError: null,

}

const dialogSlice = createSlice({
    name: "dialogSlice",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<{ dialogId: Dialog["_id"]; message: Message }>) => {
            const payload = action.payload;
            const dialog = state.dialogs.find(item => item._id === payload.dialogId);
            dialog?.messages.push(payload.message);
        },
        clearDialogsError: (state) => {
            state.isError = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDialogs.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchDialogs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload.message;
        })
        builder.addCase(fetchDialogs.fulfilled, (state, action) => {
            state.isError = null;
            state.isLoading = false;
            state.dialogs = action.payload.data;
        })
    }
});

const { actions, reducer } = dialogSlice;
export const { addMessage, clearDialogsError } = actions;
export default reducer;
