import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import tags from "./testSlice/testSlice";

const store = configureStore({
    reducer: { tags },
});

type AppDispatch = typeof store.dispatch;

type RootState = ReturnType<typeof store.getState>;

const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, useAppDispatch };
export type { AppDispatch, RootState };
