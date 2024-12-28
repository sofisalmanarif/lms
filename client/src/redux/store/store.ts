import { configureStore } from '@reduxjs/toolkit'
import { myUserAPI } from '../api/userAPI'
import { counterSlice } from '../reducers/user.reducer'

export const store = configureStore({
  reducer: {
    [myUserAPI.reducerPath]:myUserAPI.reducer,
    [counterSlice.name]:counterSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myUserAPI.middleware),
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch