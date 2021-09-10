import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  photo: '',
}

const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.photo = action.payload.photo
    },
    userLogout: (state) => {
      state.name = ''
      state.email = ''
      state.photo = ''
    },
  },
})

export const { userLogin, userLogout } = userSlide.actions

export const selectUserName = (state) => state.user.name
export const selectUserEmail = (state) => state.user.email
export const selectUserPhoto = (state) => state.user.photo

export default userSlide.reducer
