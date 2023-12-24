import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
import logo from "../assets/image/logo.png";
// import "./Navigation.css";
function Navigation() {
  return (
    <Nav>
      <NavMenu>
        <a href="https://google.com">
          <img src={logo} alt="logo" />
        </a>
        <NavLink to="/">Trang chủ</NavLink>
        <NavLink to="/tracking">Tra cứu</NavLink>
        <NavLink to="/createPostalItems">Tạo đơn</NavLink>
        <NavLink to="/postalManagementCompleted">Quản lý bưu gửi đã tạo</NavLink>
        <NavLink to="/postalManagementConfirmed">Quản lý bưu gửi đã xác nhận</NavLink>
      </NavMenu>
    </Nav>
  );
}

export default Navigation;
