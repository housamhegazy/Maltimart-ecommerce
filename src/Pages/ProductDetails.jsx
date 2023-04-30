import CommonSection from "Components/Ul/CommonSection";
import Productcard from "Components/Ul/Productcard";
import Helmet from "Components/helmet/Helmet";
import products from "assets/data/products";
import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import '../styles/product-details.css'
export default function ProductDetails() {
  const param = useParams();
  const id = param.productId;
const product = products.find((item)=>item.id === id)
const {imgUrl,productName,price,shortDesc,description,reviews,avgRating} = product
  return (
    <Helmet title={"product details"}>
      <CommonSection title={"product details"}/>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="img"/>
            </Col>
            <Col lg="6">
              <div className="product-details">
                <h2>{productName}</h2>
                <div className="product-rating">
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-half-line"></i></span>
                  <span><i className="ri-star-s-line"></i></span>
                  <p>{avgRating} Rating</p>
                </div>
                <span>{price}</span>
                <p>{shortDesc}</p>
                <button className="buy__btn">Add To Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
