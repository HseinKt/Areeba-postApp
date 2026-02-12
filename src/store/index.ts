// Store configuration file

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

// Infer the `RootState` & `AppDispatch` type from the store itsel
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;