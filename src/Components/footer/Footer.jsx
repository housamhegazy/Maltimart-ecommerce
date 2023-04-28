import React from 'react'
import './Footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/eco-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>MultiMart</h1>
              </div>
            </div>
            <p className="footer-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero a nemo iure ut eaque fuga qui exercitationem excepturi amet, placeat illo dignissimos laborum ipsum vitae distinctio! Impedit nihil consequatur molestiae.
              </p>
          </Col>
          <Col lg='3'>
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
          <Col lg='2'>
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
          <Col lg='3'>
            <div className="footer-quick-links">
                  <h4 className="quick-links-title">Contact</h4>
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
        </Row>
      </Container>
    </footer>
  )
}
