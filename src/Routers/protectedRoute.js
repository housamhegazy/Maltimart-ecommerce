// import React, { useEffect } from "react";
// import UseAuth from "../custom-hooks/useAuth";
// import { Navigate, useNavigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const { currentUser } = UseAuth();
//   const navigate=useNavigate()
//   useEffect(()=>{
//     if(!currentUser){
//         navigate("/login")
//     }
//   })
//   if(currentUser){
//     return children
//   }
// //   return currentUser ? children : <Navigate to={"/login"} />;
// }
