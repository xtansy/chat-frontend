import { RootState } from "@store";

export const userSliceSelector = (state: RootState) => state.userSlice;

export const userIsAuthSelector = (state: RootState) => state.userSlice.isAuth;

export const userSelector = (state: RootState) => state.userSlice.user;

export const userIdSelector = (state: RootState) => state.userSlice.user?._id;

export const userLoadingSelector = (state: RootState) => state.userSlice.isLoading;
