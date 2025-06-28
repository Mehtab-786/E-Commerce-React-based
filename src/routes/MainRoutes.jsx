import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import CreateProuduct from "../pages/admin/CreateProuduct";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfile";
import PageNotFound from "../pages/PageNotFound";
import ProductDetails from "../pages/ProductDetails";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/create-product" element={<CreateProuduct />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default MainRoutes;
