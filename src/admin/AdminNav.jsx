import React from 'react'
import { Container,Row,Col } from 'reactstrap'
export default function AdminNav() {
  return (
    <header className='admin-header'>
      <div className="admin-nav-top">
        <Container>
          <div className="admin-nav-wrapper-top">
            <div className="logo">
              <h2>MultiMart</h2>
            </div>
            <div className="search-box">
              <input type="text" placeholder='Search....' />
              <span><i className="ri-search-line"></i></span>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
