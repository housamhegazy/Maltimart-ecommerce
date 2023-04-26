import React from 'react'
import './Header.css'
import logo from '../../assets/images/eco-logo.png'
import user__icon from '../../assets/images/user-icon.png'
import { NavLink } from 'react-router-dom'
import { Container,Row } from 'reactstrap' 
export default function Header() {
  return (
    <Container>
    <Row>
      <div className='nav-wrapper'>
        <div className="logo">
          <img src={logo} alt='logo'/>
          <div>
            <h1>MultiMart</h1>
            <p>since 1995</p>
          </div>
        </div>
        <div className="navigation">
          <ul className="menu">
            <li className="nav__item">
              <NavLink to={'/'} >Home</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to={'/shope'} >Shope</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to={'/cart'} >Cart</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav__icons">
          <span className='fav__icon'>
            <i className="ri-home-heart-line"></i>
          </span>
          <span className="cart__icon">
          <i className="ri-shopping-bag-line"></i>
          </span>
          <span><img src={user__icon} alt=''/></span>
        </div>
      </div>
    </Row>
  </Container>
  )
}
