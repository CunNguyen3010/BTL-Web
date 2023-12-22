import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="wrap-header">
        <div className="left-header">
          <h3>Hotline: 0979 216 519</h3>
        </div>
        <div className="right-header">
          <Link to="/login" className="header-login-btn">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
