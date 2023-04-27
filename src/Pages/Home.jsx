import React from 'react'
import Helmet from 'Components/helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import HeroImage from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServicesComp from '../services/Servicess'

export default function Home() {
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
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
