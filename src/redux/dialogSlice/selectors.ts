import { RootState } from "@store";

export const dialogsSliceSelector = (state: RootState) => state.dialogSlice;

export const dialogsSelector = (state: RootState) => state.dialogSlice.dialogs;

export const dialogsLoadingSelector = (state: RootState) => state.dialogSlice.isLoading;

export const dialogsErrorSelector = (state: RootState) => state.dialogSlice.isError;


