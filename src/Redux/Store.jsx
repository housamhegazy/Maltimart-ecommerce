import { configureStore } from '@reduxjs/toolkit'
import productsreducer from './productsSlice'

export const store = configureStore({
  reducer: {
    counter: productsreducer,
  },
})