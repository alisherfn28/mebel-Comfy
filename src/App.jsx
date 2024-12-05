import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import ProductDetails from "./pages/productDetails";
import Products from "./pages/products";

function App() {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <Home></Home>
            </MainLayout>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <MainLayout>
              <About></About>
            </MainLayout>
          }
        ></Route>

        <Route
          path="*"
          element={
            <MainLayout>
              <ErrorPage></ErrorPage>
            </MainLayout>
          }
        ></Route>

        <Route
          path="/products"
          element={
            <MainLayout>
              <Products></Products>
            </MainLayout>
          }
        ></Route>

        <Route
          path="/products/:id"
          element={
            <MainLayout>
              <ProductDetails></ProductDetails>
            </MainLayout>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/regiter" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
