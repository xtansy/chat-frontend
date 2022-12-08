import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import userSlice from "./userSlice/userSlice";

const store = configureStore({
    reducer: { userSlice },
});

type AppDispatch = typeof store.dispatch;

type RootState = ReturnType<typeof store.getState>;

const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, useAppDispatch };
export type { AppDispatch, RootState };
