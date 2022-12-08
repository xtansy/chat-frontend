import { RootState } from "@store";

export const userSliceSelector = (state: RootState) => state.userSlice;

export const userIsAuthSelector = (state: RootState) => state.userSlice.isAuth;
