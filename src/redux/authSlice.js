import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
   currentUser: JSON.parse(Cookies.get('user') || null),
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, action) => {
         state.currentUser = action.payload
      },
      logout: (state) => {
         state.currentUser = null
      },
   },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
