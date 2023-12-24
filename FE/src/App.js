import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
// test
import Menu from "./components/menu/Menu";
import ShippingOrder from "./components/functions/transactionStaff/ShippingOrder";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />} />
      <Route path="/shipping" element={<ShippingOrder />} />
    </Routes>
  );
}

export default App;
