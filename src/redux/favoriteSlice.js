import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
   favoriteList: [],
}

const favoriteSlice = createSlice({
   name: 'favorite',
   initialState,
   reducers: {
      addFavorite: (state, action) => {
         state.favoriteList = action.payload
      },
      removeFavorite: (state, action) => {
         state.favoriteList = action.payload
      },
      getFavorite: (state, action) => {
         state.favoriteList = action.payload
      },
   },
})

export const { addFavorite, removeFavorite, getFavorite } =
   favoriteSlice.actions
export default favoriteSlice.reducer
