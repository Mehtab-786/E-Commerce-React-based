import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../pages/Home"));
const Product = lazy(() => import("../pages/Product"));
const CreateProuduct = lazy(() => import("../pages/admin/CreateProuduct"));
const Login = lazy(() => import("../pages/Login"));
const Cart = lazy(() => import("../pages/Cart"));
const Register = lazy(() => import("../pages/Register"));
const UserProfile = lazy(() => import("../pages/UserProfile"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));

function MainRoutes() {
  return (
    <Suspense fallback={ <div>Loading...</div> }>
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
    </Suspense>
  );
}

export default MainRoutes;
