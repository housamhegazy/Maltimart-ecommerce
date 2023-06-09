import React from 'react'
import './Footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3' md='4' className='mb-4'>
            <div className="logo">
              <div>
                <h1 className='text-white'>MultiMart</h1>
              </div>
            </div>
            <p className="footer-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero a nemo iure ut eaque fuga qui exercitationem excepturi amet, placeat illo dignissimos laborum ipsum vitae distinctio! Impedit nihil consequatur molestiae.
              </p>
          </Col>
          <Col lg='3' md='4' className='mb-4'>
            <div className="footer-quick-links">
              <h4 className="quick-links-title">Top Catogeries</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to={'#'}>Mobile phone</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to={'#'}>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to={'#'}>Arm Chairs</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to={'#'}>Smart watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4' className='mb-4'>
            <div className="footer-quick-links">
                <h4 className="quick-links-title">Usefull Links</h4>
                <ListGroup>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to={'/shope'}>shope</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to={'/cart'}>Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to={'/login'}>log in</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to={'#'}>privacy policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
          </Col>
          <Col lg='3' md='4'>
            <div className="footer-contact">
                  <h4 className="footer-contact-title">Contact</h4>
                  <ListGroup>
                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                      <span><i className="ri-map-pin-line"></i></span>
                      <p>1323 Jazan,Saudi Arabia</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                      <span><i className="ri-phone-fill"></i></span>
                      <p>+966558412127</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                      <span><i className="ri-mail-line"></i></span>
                      <p>geohousamd@gmail.com</p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
          </Col>
          <Col lg='12'>
            <p className="footer-copyright">
              Copyright {year} developed by Housam Hegazy, All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
