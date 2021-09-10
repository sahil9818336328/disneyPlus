import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../features/movie/movieSlice'
import userReducer from '../features/user/userSlide'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
})
