import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import CreateOrder from "./components/functions/transactionStaff/CreateOrder";
// test
import Menu from "./components/menu/Menu";
import Confirm from "./components/functions/transactionStaff/Confirm";
import ShippingOrder from "./components/functions/transactionStaff/ShippingOrder";
import Statistics from "./components/functions/transactionStaff/Statistics";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

export default function App() {
  const auth = useAuthUser();
  const role = auth()?.data.role;
  const PrivateRoute = () => {
    const isAuthenticated = useIsAuthenticated();
    const auth = isAuthenticated();
    return auth ? <Menu /> : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/menu" element={<PrivateRoute />} />
      <Route index element={role && <Home />} />
      <Route path="createOrder" element={<CreateOrder />} />
      <Route path="shippingOrder" element={<ShippingOrder />} />
      <Route path="confirm" element={<Confirm />} />
      <Route path="statistics" element={<Statistics />} />
    </Routes>
  );
}
