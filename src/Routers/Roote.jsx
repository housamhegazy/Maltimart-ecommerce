import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import AdminNav from "admin/AdminNav";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
export default function Roote() {
  const [user] = useAuthState(auth);
  const location = useLocation()
  return (
    <div>
      {
      location.pathname.startsWith('/dashboard')? <AdminNav user={user}/> : <Header user={user} />
      }

      <Outlet />

      <Footer />
    </div>
  );
}
