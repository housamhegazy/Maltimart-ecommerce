import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";

export default function Roote() {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
