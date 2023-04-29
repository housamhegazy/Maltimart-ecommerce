import React from 'react'
import Productcard from './Productcard'
export default function ProductList({data}) {
  return (
    <>
        {data?.map((item)=>{return(
            <Productcard key={item.id}
            item={item}
            />
        )})}
    </>
  )
}
