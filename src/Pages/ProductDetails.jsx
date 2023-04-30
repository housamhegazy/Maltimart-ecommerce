import CommonSection from "Components/Ul/CommonSection";
import Productcard from "Components/Ul/Productcard";
import Helmet from "Components/helmet/Helmet";
import products from "assets/data/products";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../styles/product-details.css";
import { motion } from "framer-motion";
export default function ProductDetails() {
  const param = useParams();
  const id = param.productId;
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    shortDesc,
    description,
    reviews,
    avgRating,
  } = product;

  const [tabClass, setTabClass] = useState("desc");
  const [Rating,setrating] = useState(null)
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="img" />
            </Col>
            <Col lg="6">
              <div className="product-details">
                <h2>{productName}</h2>
                <div className="product-rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-line"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-line"></i>
                    </span>
                  </div>
                  <p>
                    <span>{avgRating}</span> Rating
                  </p>
                </div>
                <span className="product-price">${price}</span>
                <p>{shortDesc}</p>
                <motion.button whileTap={{ scale: 0.9 }} className="buy__btn">
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tap-wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tabClass === "desc" ? "active-tap" : ""}`}
                  onClick={() => {
                    setTabClass("desc");
                  }}
                >
                  description
                </h6>
                <h6
                  onClick={() => {
                    setTabClass("review");
                  }}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>
              <div className={`tab-content mt-4`}>
                {tabClass === "desc" ? (
                  <p className={`description`}>{description}</p>
                ) : (
                  <div className="product-review mt-4">
                    <div className="review-wrapper">
                      <ul>
                        {reviews.map((item,index) => {
                          return(
                          <li key={index}>
                            <h6>john deo</h6>
                            <span>{item.rating} rating</span>
                            <p>{item.text}</p>
                          </li>);
                        })}
                      </ul>
                      <div className="review-form">
                        <h5 className="mb-3">Leave Your Experience</h5>
                        <form action="">
                          <div className="form-group">
                            <input type="text" placeholder="Enter Name"/>
                          </div>
                          <div className="form-group d-flex align-items-center">
                            <span>1<i className="ri-star-s-line"></i></span>
                            <span>2<i className="ri-star-s-line"></i></span>
                            <span>3<i className="ri-star-s-line"></i></span>
                            <span>4<i className="ri-star-s-line"></i></span>
                            <span>5<i className="ri-star-s-line"></i></span>
                          </div>
                          <div className="form-group">
                            <textarea rows={4} placeholder="review message"/>
                          </div>
                          <button type="submit" className="buy-btn">submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
