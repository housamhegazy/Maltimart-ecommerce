import React from 'react'
import '../styles/admin.nav.css'
import { Container,Row,Col } from 'reactstrap'
export default function AdminNav({user}) {
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
            <div className="admin-nav-top-right">
              <span><i className="ri-notification-line"></i></span>
              <span><i className="ri-settings-2-line"></i></span>
              <img src={user ? user.photoURL:''} alt=''/>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
