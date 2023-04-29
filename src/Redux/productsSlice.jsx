import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:JSON.parse(localStorage.getItem("cart")) || [],
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
        localStorage.setItem("cart",JSON.stringify(state.cartItems))
      }else{
        existingItem.Quantity++
        localStorage.setItem("cart",JSON.stringify(state.cartItems))
      }
      
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { AddItem } = cartSlice.actions

export default cartSlice.reducer