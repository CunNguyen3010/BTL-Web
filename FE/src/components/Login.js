import React, { useState } from "react";
import "../style/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Xử lý khi đăng nhập thành công
        console.log("Đăng nhập thành công!");
      } else {
        // Xử lý khi đăng nhập thất bại
        console.log("Đăng nhập thất bại!");
      }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu đăng nhập:", error);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-body">
          <div className="login-form-header">
            <h2>Login</h2>
          </div>

          <div className="login-form">
            <input
              type="text"
              className="login-form-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="login-form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-form-btn" onClick={handleSignIn}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
