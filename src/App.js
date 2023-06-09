import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Roote from "./Routers/Roote";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Shope from "./Pages/Shope";
import Checkout from "./Pages/Checkout";
import Error404 from "./Pages/Error404";
import { ToastContainer } from "react-toastify";
import AddProduct from "admin/AddProduct";
import AllProducts from "admin/AllProducts";
import Dashboard from "admin/Dashboard";
import Users from "admin/Users";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Roote />}>
      <Route index element={<Home />} />
      <Route path="/shope" element={<Shope />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/productDetails/:productId" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/all-products" element={<AllProducts />} />
      <Route path="/dashboard/add-product" element={<AddProduct />} />
      <Route path="/dashboard/users" element={<Users />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <ToastContainer
      // position="top-right"
      // autoClose={3000}
      // closeOnClick
      // pauseOnHover={false}
      // theme="dark"
      />
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
