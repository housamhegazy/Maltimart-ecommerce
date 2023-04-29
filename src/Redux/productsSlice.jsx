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
      const newItem = action.payload;
      const existingItem =  state.cartItems.find(item=> item.id === newItem.id)
      if(!existingItem){
        state.cartItems.push()
      }
      const newCartitems = [...state.cartItems,{...action.payload,Quantity:1}]
      state.cartItems = newCartitems
      console.log(state.cartItems)
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { AddItem } = productsSlice.actions

export default productsSlice.reducer