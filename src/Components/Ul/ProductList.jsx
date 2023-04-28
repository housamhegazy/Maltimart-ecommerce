import React from 'react'
import Productcard from './Productcard'
export default function ProductList({data}) {
  return (
    <>
        {data?.map((item)=>{return(
            <Productcard key={item.id}
            id={item.id}
            productName = {item.productName}
            imgUrl={item.imgUrl}
            price={item.price}
            category={item.category}
            shortDesc={item.shortDesc}

            />
        )})}
    </>
  )
}
