import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './productsSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
})