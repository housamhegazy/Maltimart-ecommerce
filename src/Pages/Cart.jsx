import React, { useEffect } from "react";
import "../styles/cart.css";
import Helmet from "Components/helmet/Helmet";
import CommonSection from "Components/Ul/CommonSection";
import { useSelector, useDispatch } from "react-redux";
import { DeleteIte } from "Redux/productsSlice";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Cart() {
  // @ts-ignore
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let CartQuantity = 0;
  let Itemprice = 0;
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Helmet title={"cart"}>
      <CommonSection title={"cart"} />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems?.length === 0 ? (
                <h4 className="fs-4 text-center w-100">
                  {" "}
                  No Item Added To the Cart
                </h4>
              ) : (
                <>
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th className="text-center">Image</th>
                        <th className="text-center">Title</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Delete</th>
                      </tr>
                    </thead>
                    <tbody className="w-100">
                      {cartItems.map((item, index) => {
                        CartQuantity += item.Quantity;
                        Itemprice += item.Quantity * item.price;
                        return (
                          <tr key={index}>
                            <td className="">
                              <img src={item.imgUrl} alt="img" />
                            </td>
                            <td>
                              <p>{item.productName}</p>
                            </td>
                            <td>
                              <p>$ {item.price}</p>
                            </td>
                            <td>
                              <p>{item.Quantity}</p>
                            </td>
                            <td>
                              <motion.i
                                whileTap={{ scale: 1.1 }}
                                onClick={() => {
                                  dispatch(DeleteIte(item));
                                }}
                                className="ri-delete-bin-line text-danger"
                              ></motion.i>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                 
                </>
              )}
            </Col>
            <Col lg='3'>
              <div className="">
                    <div className="d-flex justify-content-between align-tems-center">
                      <h6 className="fw-bold mb-2">Subtotal</h6>
                      <h6 className="fw-bold fs-4">${Itemprice}</h6>
                    </div>
                    <span>
                        Quantity: ({CartQuantity}){" "}
                        {CartQuantity === 1 ? "product" : "products"}
                      </span>
                    
                    <p className="mt-2 fs-6">Taxes and Shipping Will Calculate in Checkout</p>
                    <button className="buy__btn w-100"><Link to='/shope'>continue shopping</Link></button>
                    <button className="buy__btn w-100"><Link to='/checkout'>Checkout</Link></button>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
