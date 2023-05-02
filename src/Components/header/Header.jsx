import React, { useRef, useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/images/eco-logo.png";
import user__icon from "../../assets/images/user-icon.png";
import { Link, NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

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
  const [user] = useAuthState(auth);

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [openMenu, setopenMenu] = useState(false);
  // @ts-ignore
  const { cartItems } = useSelector((state) => state.cart);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      setopenMenu(false);
      if (window.scrollY > 80) {
        headerRef.current.classList.add("stcky-header");
      } else {
        headerRef.current.classList.remove("stcky-header");
      }
    });
  };
  const menuToggleFunc = () => menuRef.current.classList.toggle("active-menu");
  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        toast.success("sign out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
        // An error happened.
      });
  };
  const totalProducts = cartItems.length;
  return (
    <div className="header" ref={headerRef}>
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
            <div className="navigation" ref={menuRef} onClick={menuToggleFunc}>
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
              <span
                className="cart__icon"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalProducts}</span>
              </span>
              <span className="profile">
                <motion.img
                  onClick={() => {
                    setopenMenu(!openMenu);
                  }}
                  className="profile-img"
                  whileTap={{ scale: 1.1 }}
                  src={user ? user.photoURL : user__icon}
                  alt="user-icon"
                />
                {/* login and logout icon */}
                {openMenu && (
                  <div className="profile-actions">
                    <ul className="menu d-flex flex-column justify-content-center align-items-center">
                      {user && (
            
                          <li
                            onClick={() => {
                              logOut();
                              setopenMenu(false);
                            }}
                          >
                            {" "}
                            Signout
                          </li>
                      )}
                      {!user && (
                        <>
                         <li>
                            <Link
                              onClick={() => {
                                setopenMenu(false);
                              }}
                              to={"/signup"}
                            >
                              SignUp
                            </Link>
                          </li>
                          <li>
                          <Link
                            to="/login"
                            onClick={() => {
                              setopenMenu(false);
                            }}
                          >
                            signin
                          </Link>
                        </li>
                        </>
                        
                      )}
                    </ul>
                  </div>
                )}
              </span>

              {/* mobile menu */}
              <div className="mobile__menu">
                <span onClick={menuToggleFunc}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
