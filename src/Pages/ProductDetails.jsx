import CommonSection from "Components/Ul/CommonSection";
import Productcard from "Components/Ul/Productcard";
import Helmet from "Components/helmet/Helmet";
import products from "assets/data/products";
import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductList from "Components/Ul/ProductList";
export default function ProductDetails() {
  const [tabClass, setTabClass] = useState("desc");
  const [Rating,setrating] = useState(null)
  const param = useParams();
  const reviewUser = useRef(null)
  const reviewMSG = useRef(null)
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
    category
  } = product;

  const submitHandler = (e)=>{
    e.preventDefault()
    const reviewUserName = reviewUser.current.value;
    const reviewmessage = reviewMSG.current.value;
    console.log(reviewUserName,reviewmessage)
  }
const relatedProducts = products.filter((item)=>item.category === category)
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
                <div className="d-flex align-items-center gap-5">
                  
                  <span className="product-price">${price}</span>
                  <span>category : {category}</span>

                </div>
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
                        <form action="" onSubmit={submitHandler}>
                          <div className="form-group">
                            <input ref = {reviewUser} type="text" placeholder="Enter Name"/>
                          </div>
                          <div className="form-group d-flex align-items-center gap-4">
                            <span onClick={()=>{setrating(1)}}>1<i className="ri-star-s-line"></i></span>
                            <span onClick={()=>{setrating(2)}}>2<i className="ri-star-s-line"></i></span>
                            <span onClick={()=>{setrating(3)}}>3<i className="ri-star-s-line"></i></span>
                            <span onClick={()=>{setrating(4)}}>4<i className="ri-star-s-line"></i></span>
                            <span onClick={()=>{setrating(5)}}>5<i className="ri-star-s-line"></i></span>
                          </div>
                          <div className="form-group">
                            <textarea ref={reviewMSG} rows={4} placeholder="review message"/>
                          </div>
                          <motion.button whileTap={{scale:1.1}} type="submit" className="buy__btn">submit</motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Col>
            <Col lg='12'className="mt-5">
                <h2 className="related-title">You May Also Like </h2>  
            </Col>
            <ProductList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
