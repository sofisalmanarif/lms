import { configureStore } from "@reduxjs/toolkit";
import { myUserAPI } from "../api/userAPI";
import { counterSlice } from "../reducers/user.reducer";
import { myLibraryAPI } from "../api/LibraryApi";

export const store = configureStore({
    reducer: {
        [myUserAPI.reducerPath]: myUserAPI.reducer,
        [myLibraryAPI.reducerPath]: myLibraryAPI.reducer,
        [counterSlice.name]: counterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(myUserAPI.middleware)
            .concat(myLibraryAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
