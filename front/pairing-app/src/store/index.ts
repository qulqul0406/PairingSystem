import { configureStore } from '@reduxjs/toolkit'
// import todoReducer from '../slice/todoSlice'

export const store = configureStore({
  reducer: {
    // init: initSlice
    // todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
