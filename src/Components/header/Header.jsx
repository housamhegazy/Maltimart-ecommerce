import React from "react";
import "./Header.css";
import logo from "../../assets/images/eco-logo.png";
import user__icon from "../../assets/images/user-icon.png";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/shope",
    name: "Shope",
  },
  {
    path: "/cart",
    name: "Cart",
  },
];
export default function Header() {
  return (
    <div className="header">
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>MultiMart</h1>
                <p>since 1995</p>
              </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                {navLinks.map((item, index) => {
                  return (
                    <li key={index} className="nav__item">
                      <NavLink to={item.path}>{item.name}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
              <i className="ri-heart-3-fill"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img whileTap={{scale:1.1}} src={user__icon} alt="" />
              </span>
            </div>
            <div className="mobile__menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
