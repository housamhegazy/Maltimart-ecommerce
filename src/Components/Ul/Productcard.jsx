import React from "react";
import "../../styles/product.card.css";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { AddItem } from '../../Redux/productsSlice'
export default function Productcard({
  item
}) {

  // @ts-ignore
  const {cartItems} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  
  return (
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt="productImg"
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shope/${item.id}`}>{item.productName}</Link>
          </h3>
          <span className="text-center d-block">{item.category}</span>
        </div>

        <div className="product__card__btn d-flex align-items-center justify-content-between">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.1 }}
            onClick={()=>{
              dispatch(AddItem(item))
              
            }}
          >
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
}
