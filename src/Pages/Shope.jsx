import React from 'react'
import CommonSection from 'Components/Ul/CommonSection'
import Helmet from 'Components/helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
export default function Shope() {
  return (
    <Helmet title={'shop'}>
      <CommonSection title={'products'}/>
      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter-widget">
                <select >
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
            <div className="filter-widget">
                <select >
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="search-box">
                <input type="text" placeholder='search .....' />
                <span><i className="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>

      </section>
      
    </Helmet>
  )
}
