import React, { useState } from "react";
import "../../../style/admin/CreateAccount.css";

export default function CreateAccount() {
  const [useName, setUseName] = useState("");
  const [useNameError, setUseNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [position, setPosition] = useState("");
  const [positionError, setPositionError] = useState("");
  const [cccd, setCccd] = useState("");
  const [cccdError, setCccdError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [birthdateError, setBirthdateError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Kiểm tra các trường bắt buộc
    if (!useName) {
      setUseName("Vui lòng nhập tên đăng nhập!");
    }
    if (!password) {
      setPassword("vui lòng nhập mật khẩu!");
    }
    if (!name) {
      setNameError("Vui lòng nhập tên nhân viên!");
    }
    if (!cccd) {
      setCccdError("Vui lòng nhập CCCD!");
    }
    // if (!position) {
    //   setPositionError("Vui lòng chọn chức vụ!");
    // }
    if (!phone) {
      setPhoneError("Vui lòng nhập số điện thoại!");
    }
    if (!email) {
      setEmailError("Vui lòng nhập Gmail!");
    }
    if (!birthdate) {
      setBirthdateError("Vui lòng chọn ngày sinh!");
    }

    // Xử lý logic khi người dùng submit form nếu không có lỗi
    if (name && cccd && phone && email && birthdate) {
      console.log("Submitted data:", {
        useName,
        password,
        name,
        position,
        cccd,
        phone,
        email,
        birthdate,
      });

      // Reset form sau khi submit thành công
      setUseName("");
      setPassword("");
      setName("");
      setPosition("");
      setCccd("");
      setPhone("");
      setEmail("");
      setBirthdate("");
    }
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="useName">
            <span className="required-field">*</span> Tên đăng nhập:
          </label>
          <input
            type="text"
            id="useName"
            value={name}
            onChange={(e) => {
              setUseName(e.target.value);
              setUseNameError("");
            }}
            className={useNameError ? "error-input" : ""}
          />
          {nameError && <p className="error-message">{useNameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <span className="required-field">*</span> Mật khẩu:
          </label>
          <input
            type="text"
            id="password"
            value={name}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            className={passwordError ? "error-input" : ""}
          />
          {nameError && <p className="error-message">{passwordError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="name">
            <span className="required-field">*</span> Tên nhân viên:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
            className={nameError ? "error-input" : ""}
          />
          {nameError && <p className="error-message">{nameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="position">
            <span className="required-field">*</span> Chức vụ:
          </label>
          <select
            id="position"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
              setPositionError("");
            }}
            className={positionError ? "error-input" : ""}
            // style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          >
            {/* <option value="">-- Chọn chức vụ --</option> */}
            <option value="Trưởng điểm giao dịch">Trưởng điểm giao dịch</option>
            <option value="Trưởng điểm tập kết">Trưởng điểm tập kết</option>
          </select>
          {positionError && <p className="error-message">{positionError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="cccd">
            <span className="required-field">*</span> CCCD:
          </label>
          <input
            type="text"
            id="cccd"
            value={cccd}
            onChange={(e) => {
              setCccd(e.target.value);
              setCccdError("");
            }}
            className={cccdError ? "error-input" : ""}
          />
          {cccdError && <p className="error-message">{cccdError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            <span className="required-field">*</span> Số điện thoại:
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setPhoneError("");
            }}
            className={phoneError ? "error-input" : ""}
          />
          {phoneError && <p className="error-message">{phoneError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <span className="required-field">*</span> Gmail:
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            className={emailError ? "error-input" : ""}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">
            <span className="required-field">*</span> Ngày sinh:
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => {
              setBirthdate(e.target.value);
              setBirthdateError("");
            }}
            className={birthdateError ? "error-input" : ""}
          />
          {birthdateError && <p className="error-message">{birthdateError}</p>}
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}

// export default CreateAccount;
