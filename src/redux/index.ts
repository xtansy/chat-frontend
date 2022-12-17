import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import userSlice from "./userSlice";
import dialogSlice from "./dialogSlice";

const store = configureStore({
    reducer: { userSlice, dialogSlice },
});

//@ts-ignore
window.store = store;

type AppDispatch = typeof store.dispatch;

type RootState = ReturnType<typeof store.getState>;

const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, useAppDispatch };
export type { AppDispatch, RootState };
