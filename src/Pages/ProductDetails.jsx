import CommonSection from "Components/Ul/CommonSection";
import Helmet from "Components/helmet/Helmet";
// import products from "assets/data/products";
// @ts-ignore
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductList from "Components/Ul/ProductList";
import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/productsSlice";
import { toast } from "react-toastify";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase/config";
import useGetdata from "../Custom-hook/useGetdata";
import Loader from "Components/Loader/Loader";
import Error404 from "./Error404";
export default function ProductDetails() {
  const param = useParams();
  const id = param.productId;

  const [value, loading, error] = useDocument(doc(db,'products', id));
  const [item,setItem] = useState({});
  const { data: products } = useGetdata("products");

  useEffect(()=>{
    if(value){
      setItem(value.data())
    }
  },[value])

  const [tabClass, setTabClass] = useState("desc");
  const [Rating,setrating] = useState(null)

  const reviewUser = useRef(null)
  const reviewMSG = useRef(null)
 
  const dispatch =useDispatch()
  // const product = products.find((item) => item.id === id);
  const {
    // @ts-ignore
    imgUrl,
    // @ts-ignore
    productName,
    // @ts-ignore
    price,
    // @ts-ignore
    shortDesc,
    // @ts-ignore
    description,
    // reviews,
    // avgRating,
    // @ts-ignore
    category
  } = item;

  const submitHandler = (e)=>{
    e.preventDefault()
    const reviewUserName = reviewUser.current.value;
    const reviewmessage = reviewMSG.current.value;
    
    const reviewObj = {
      userName:reviewUserName,
      text:reviewmessage,
      Rating
    }
    toast.success('review addd')
    console.log(reviewObj)
  }

  const AddToCart = ()=>{
    dispatch(AddItem(item))
    toast.success(`${productName} added succesfully`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
const relatedProducts = products.filter((item)=>item.category === category)
useEffect(()=>{
  window.scrollTo(0,0)
},[item])

if(loading){
  return(
    <Loader/>
  )
}
if(error){
  return(
    <Error404/>
  )
}

if(value){
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
                    {/* <span>{avgRating}</span> Rating */}
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  
                  <span className="product-price">${price}</span>
                  <span>category : {category}</span>

                </div>
                <p>{shortDesc}</p>
                <motion.button whileTap={{ scale: 0.9 }} className="buy__btn"
                onClick={()=>{
                  AddToCart()
                }}
                >
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
                  Reviews 
                </h6>
              </div>
              <div className={`tab-content mt-4`}>
                {tabClass === "desc" ? (
                  <p className={`description`}>{description}</p>
                ) : (
                  <div className="product-review mt-4">
                    <div className="review-wrapper">
                      <ul>
                        {/* {reviews.map((item,index) => {
                          return(
                          <li key={index}>
                            <h6>john deo</h6>
                            <span>{item.rating} rating</span>
                            <p>{item.text}</p>
                          </li>);
                        })} */}
                      </ul>
                      <div className="review-form">
                        <h5 className="mb-3">Leave Your Experience</h5>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form-group">
                            <input required ref = {reviewUser} type="text" placeholder="Enter Name"/>
                          </div>
                          <div className="form-group d-flex align-items-center gap-4 rating-group">
                            <motion.span whileTap={{scale:1.1}} onClick={()=>{setrating(1)}}>1<i className="ri-star-s-line"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={()=>{setrating(2)}}>2<i className="ri-star-s-line"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={()=>{setrating(3)}}>3<i className="ri-star-s-line"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={()=>{setrating(4)}}>4<i className="ri-star-s-line"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={()=>{setrating(5)}}>5<i className="ri-star-s-line"></i></motion.span>
                          </div>
                          <div className="form-group">
                            <textarea required ref={reviewMSG} rows={4} placeholder="review message"/>
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
            {relatedProducts.length === 0 ? <h4 className="mt-5">no related products </h4>:<ProductList data={relatedProducts}/>}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
}
