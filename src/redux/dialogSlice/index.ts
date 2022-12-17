import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { createDialog, getDialogs } from "@utils/api/requests/dialog";




interface DialogSlice {
    isLoading: boolean;
    dialogs: Dialog[];
    isError: string | null;
}

export const fetchCreateDialog = createAsyncThunk<Response<Dialog>, createDialogProps, { rejectValue: any }>("dialogSlice/fetchCreateDialog", async (action, { rejectWithValue }) => {
    try {
        return await createDialog(action)
    } catch (error) {
        const err = error as AxiosError;
        return rejectWithValue(err.response?.data);
    }
});


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
        addMessage: (state, action: PayloadAction<{ dialogId: Dialog["_id"]; message: string }>) => {
            const payload = action.payload;
            const dialog = state.dialogs.find(item => item._id === payload.dialogId);
            dialog?.messages.push(payload.message);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCreateDialog.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchCreateDialog.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload.message;
        })
        builder.addCase(fetchCreateDialog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.dialogs.push(action.payload.data);
        })
        //////////////////////////////////////
        builder.addCase(fetchDialogs.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchDialogs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload.message;
        })
        builder.addCase(fetchDialogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.dialogs = action.payload.data;
        })
    }
});

const { actions, reducer } = dialogSlice;
export const { addMessage } = actions;
export default reducer;
