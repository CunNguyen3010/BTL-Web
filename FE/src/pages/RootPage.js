import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import "../style/App.css";

const RootPage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
};
export default RootPage;
