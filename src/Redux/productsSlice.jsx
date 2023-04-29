import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[],
  totalAmount:0,
  totalQuantity:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddItem: (state, action) => {
      const newItem = action.payload;
      const existingItem =  state.cartItems.find(item=> item.id === newItem.id)
      if(!existingItem){
        state.cartItems = [...state.cartItems,{...newItem,Quantity:1}]
        
      }else{
        existingItem.Quantity++
      }
      
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { AddItem } = cartSlice.actions

export default cartSlice.reducer