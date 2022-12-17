import { RootState } from "@store";

export const dialogsSliceSelector = (state: RootState) => state.dialogSlice;
export const dialogsSelector = (state: RootState) => state.dialogSlice.dialogs;

