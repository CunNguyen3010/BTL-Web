import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Menu from "./components/menu/Menu";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
