import React, { useState } from "react";
import "../../../style/transactionStaff/Confirm.css";
import axios from "axios";
export default function Confirm() {
  const [orderCode, setOrderCode] = useState("");
  const [orderCodeError, setOrderCodeError] = useState("");

  const [status, setStatus] = useState("");
  const [statusError, setStatusError] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    // Kiểm tra các trường bắt buộc
    if (!orderCode) {
      setOrderCodeError("Vui lòng nhập mã đơn hàng!");
    }
    // Xử lý logic khi người dùng tìm kiếm nếu không có lỗi
    if ((orderCode, status)) {
      console.log("Search data:", {
        orderCode,
        status,
      });

      // Reset form sau khi tìm kiếm thành công
      setOrderCode("");
      setStatus("");
      // setShowTable(true);
    }
  };

  async function getOrder() {
    const baseUrl = "http://localhost:3001/information/search";
    const params = {
      // 'id': {orderCode}
      id: "658a935e273bcac2f690c281",
    };

    axios
      .get(baseUrl, { params })
      .then((response) => {
        console.log("Data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSearch} className="registration-form w100">
        <div className="one-row box">
          <div className="form-group has-feedback">
            <label htmlFor="orderCode">
              <span className="required-field">*</span> Mã đơn hàng:
            </label>
            <input
              type="text"
              id="orderCode"
              value={orderCode}
              onChange={(e) => {
                setOrderCode(e.target.value);
                setOrderCodeError("");
              }}
              className={orderCodeError ? "error-input" : ""}
            />
            {orderCodeError && (
              <p className="error-message">{orderCodeError}</p>
            )}
          </div>

          <div className="form-group has-feedback">
            <label htmlFor="status">
              <span className="required-field">*</span> Trạng thái:
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              className={statusError ? "error-input" : ""}
            >
              <option value="Trưởng điểm giao dịch">Thành công</option>
              <option value="Trưởng điểm tập kết">Chưa thành công</option>
            </select>
            {statusError && <p className="error-message">{statusError}</p>}
          </div>
        </div>

        <button className="btn-search" type="submit" onClick={getOrder}>
          Tìm kiếm
        </button>
      </form>
    </div>
  );
}
