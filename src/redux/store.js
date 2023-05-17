import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import favoriteReducer from './favoriteSlice'

export const store = configureStore({
   reducer: {
      auth: authReducer,
      favorite: favoriteReducer,
   },
})
