import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:JSON.parse(localStorage.getItem("cart")) || [],
  totalPrice:JSON.parse(localStorage.getItem("totalprice")) || 0,
  totalQuantity:JSON.parse(localStorage.getItem("totalQty")) || 0
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
      // total quantity
      state.totalQuantity = state.cartItems.reduce((a,b)=> +(a) + +(b.Quantity),0)
      localStorage.setItem("totalQty",JSON.stringify(state.totalQuantity))
      //total price
      state.totalPrice = state.cartItems.reduce((a,b)=> +(a) + +(b.price*b.Quantity),0)
      localStorage.setItem("totalprice",JSON.stringify(state.totalPrice))
    },
    DeleteIte: (state,action)=>{
      const itemTodelete = action.payload;
      state.cartItems = state.cartItems.filter((item)=>item.id !== itemTodelete.id)
      localStorage.setItem("cart",JSON.stringify(state.cartItems))
      // total quantity
      state.totalQuantity = state.cartItems.reduce((a,b)=> +(a) + +(b.Quantity),0)
      localStorage.setItem("totalQty",JSON.stringify(state.totalQuantity))
      //total price
      state.totalPrice = state.cartItems.reduce((a,b)=> +(a) + +(b.price*b.Quantity),0)
      localStorage.setItem("totalprice",JSON.stringify(state.totalPrice))
    }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { AddItem,DeleteIte } = cartSlice.actions

export default cartSlice.reducer