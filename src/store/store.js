import { configureStore } from '@reduxjs/toolkit'
import netflixReducer from './netflixSlice'

export const store = configureStore({
  reducer: {
    netflixData : netflixReducer
  },
})