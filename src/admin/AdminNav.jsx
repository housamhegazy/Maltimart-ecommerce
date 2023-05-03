
import "../styles/admin.nav.css";
import { Container, Row } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";
import UserIcon from '../assets/images/user-icon.png'
const adminNav = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "All Products",
    path: "/dashboard/all-products",
  },
  {
    name: "Orders",
    path: "/dashboard/orders",
  },
  {
    name: "Users",
    path: "/dashboard/users",
  },
];
export default function AdminNav({ user }) {
  const location = useLocation()
  return (
    <>
      <header className="admin-header">
        <div className="admin-nav-top">
          <Container>
            <div className="admin-nav-wrapper-top">
              <div className="logo">
                <h2>MultiMart</h2>
              </div>
              <div className="search-box">
                <input type="text" placeholder="Search...." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <div className="admin-nav-top-right">
                <span>
                  <i className="ri-notification-line"></i>
                </span>
                <span>
                  <i className="ri-settings-2-line"></i>
                </span>
                <img src={user ? user.photoURL : UserIcon } alt="" />
              </div>
            </div>
          </Container>
        </div>
      </header>
      <section className="admin-menu p-0">
        <Container>
          <Row>
            <div className="admin-navigation">
              <ul className="admin-menu-list">
                {adminNav.map((item, index) => {
                  return (
                    <li key={index} className="admin-menu-item">
                      <NavLink
                        to={item.path}
                        className={location.pathname === item.path ? "active-admin-item" : ""}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
