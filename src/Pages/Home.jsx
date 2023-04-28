import React , {useState,useEffect} from 'react'
import Helmet from 'Components/helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import HeroImage from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServicesComp from '../services/Servicess'
import ProductList from 'Components/Ul/ProductList'
import products from 'assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from 'Components/Ul/Clock'
export default function Home() {
const [trendingProducts,settrendingProducts] = useState([])
const [bestSalesProducts,setbestSalesProducts] = useState([])
useEffect(()=>{
  const filteredtrendingProducts = products.filter((item)=>{return item.category === "chair"});
  const filteredbestSalesProducts = products.filter((item)=>{return item.category === "sofa"});
  settrendingProducts(filteredtrendingProducts)
  setbestSalesProducts(filteredbestSalesProducts)
},[])
  const Year = new Date().getFullYear()
  return (
    <Helmet title={"Home"}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">
                  trending produc in {Year}
                </p>
                <h2>Make your Interior More Minimalistic and Modern </h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita modi earum dolores quasi aliquid id, dolore ad nulla est ipsum?</p>
                <motion.button whileTap={{scale:1.2}} className="buy__btn">
                  <Link to={'shope'}>SHOPE NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={HeroImage} alt="heroimage" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ServicesComp/>
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts}/>
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>
      <section className="timer-count">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="clock__top-content ">
                <h4 className='text-white fs-6 mb-2'>Limited offer</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <motion.button whileTap={{scale:1.1}} className="buy__btn store__btn">
                <Link to={'/shope'}>Visit Store</Link>
              </motion.button>
              <Clock/>
            </Col>
            <Col lg='6' md='6' className='text-end'>
              <img src={counterImg} alt='counterimg'/>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
