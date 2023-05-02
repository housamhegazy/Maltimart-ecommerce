import React, { useEffect } from "react";
import "../styles/checkout.css";
import Helmet from "Components/helmet/Helmet";
import { Col, Container, FormGroup, Row } from "reactstrap";
import CommonSection from "Components/Ul/CommonSection";
import { useSelector } from "react-redux";
import { auth } from "../firebase/config";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
export default function Checkout() {
  // @ts-ignore
  const { totalPrice,totalQuantity } = useSelector((state) => state.cart);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
useEffect(()=>{
  window.scrollTo(0,0)
  if(!user && !loading){
    navigate("/login")
  } 
},[user,loading])
  if(user){
    return (
      <Helmet title={"Checkout"}>
        <CommonSection title={"Checkout"} />
        <section>
          <Container>
            <Row>
              <Col lg="8">
                <h6 className="billing-info mb-4 fw-bold">Billing Information</h6>
                <form className="billing-form">
                  <FormGroup className="form-group">
                    <input type="text" placeholder="Enter Your Name" />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input type="email" placeholder="Enter Your Email" />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input type="number" placeholder="phone Number" />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input type="text" placeholder="Street Address" />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input type="text" placeholder="City" />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input type="text" placeholder="Postal Code" />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <input type="text" placeholder="Country" />
                  </FormGroup>
                </form>
              </Col>
              <Col lg="4">
                <div className="checkout-cart">
                  <h6>
                    Total Qty: <span>{totalQuantity}</span>
                  </h6>
                  <h6>
                    SubTotal: <span>${totalPrice}</span>
                  </h6>
                  <h6>
                    <span>
                      Shipping:
                      <br />
                      Free Shipping
                    </span>
                    <span>$0</span>
                  </h6>
                  <h4>
                    Total Cost: <span>${totalPrice}</span>
                  </h4>
                  <button className="buy__btn auth-btn w-100">
                    Place an order
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    );
  }
}
