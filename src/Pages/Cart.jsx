import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Cart() {
   // @ts-ignore
   const {cartItems} = useSelector((state) => state.cart)
   console.log(cartItems);
  return (
    <div>{cartItems.map((item)=>{
      return <h1>{item.Quantity}</h1>
    })}</div>
  )
}
