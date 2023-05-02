import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import AdminNav from "admin/AdminNav";

export default function Roote() {
  const location = useLocation()
  return (
    <div>
      {
      location.pathname.startsWith('/dashboard')? <AdminNav/> : <Header />
      }

      <Outlet />

      <Footer />
    </div>
  );
}
