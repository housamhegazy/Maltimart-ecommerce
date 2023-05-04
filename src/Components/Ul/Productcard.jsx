import React from "react";
import "../../styles/product.card.css";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddItem } from "../../Redux/productsSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Productcard({ item }) {
  const dispatch = useDispatch();

  const addTocart = (item) => {
    dispatch(AddItem(item));
    toast.success(`${item.data().productName} added succesfully`);
  };
  return (
    <Col lg="3" md="4">
      <div className="product__item">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.data().imgUrl}
            alt="productImg"
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/productDetails/${item.data().id}`}>
              {item.data().productName}
            </Link>
          </h3>
          <span className="text-center d-block">{item.data().category}</span>
        </div>

        <div className="product__card__btn d-flex align-items-center justify-content-between">
          <span className="price">${item.price}</span>
          <motion.span
            whileTap={{ scale: 1.1 }}
            onClick={() => {
              addTocart(item.data());
            }}
          >
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
}
