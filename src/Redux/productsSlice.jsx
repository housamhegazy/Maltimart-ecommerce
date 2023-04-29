import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[],
  totalAmount:0,
  totalQuantity:0
}

export const productsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddItem: (state, action) => {
      
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { AddItem } = productsSlice.actions

export default productsSlice.reducer