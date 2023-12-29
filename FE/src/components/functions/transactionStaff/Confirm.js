import React, { useState, useEffect } from "react";
import "../../../style/transactionStaff/Confirm.css";
import axios from "axios";

export default function Confirm() {
  const [orderCode, setOrderCode] = useState("");
  const [orderCodeError, setOrderCodeError] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [employeeCodeError, setEmployeeCodeError] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [status, setStatus] = useState("");
  const [statusError, setStatusError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedItem, setSelectedItem] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  let data = [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleConfirm = (item) => {
    setSelectedItem(item);
    setSuccessMessage(`Đã xác nhận đơn hàng ${item.column2}`);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    // Kiểm tra các trường bắt buộc
    if (!orderCode) {
      setOrderCodeError("Vui lòng nhập mã đơn hàng!");
    }
    // Xử lý logic khi người dùng tìm kiếm nếu không có lỗi
    if (orderCode) {
      console.log("Search data:", {
        orderCode,
        status,
      });
<<<<<<< HEAD
      // Reset form sau khi tìm kiếm thành công
      setOrderCode("");
      setStatus("");
      // setShowTable(true);
=======

      try {
        // Gửi dữ liệu tìm kiếm lên backend
        const response = await fetch("https://localhost:3001/confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderCode,
            status,
          }),
        });

        if (response.ok) {
          // Xử lý response nếu yêu cầu thành công
          const data = await response.json();
          console.log("Response data:", data);

          // Reset form sau khi tìm kiếm thành công
          setOrderCode("");
          setStatus("");
          setSuccessMessage("Dữ liệu đã được gửi thành công!");
        } else {
          // Xử lý response nếu yêu cầu thất bại
          throw new Error("Lỗi khi gửi yêu cầu!");
        }
      } catch (error) {
        // Xử lý lỗi khi fetch gặp vấn đề
        console.error(error);
        setSuccessMessage("Đã xảy ra lỗi khi gửi yêu cầu!");
      }
>>>>>>> 6d26b41aaffcc7aba20380ffc3307ff2428a4728
    }
  };
  // console.log(orderCode);
  const [order, setOrder] = useState({});

  async function handleGetOrder() {
    const baseUrl = "http://localhost:3001/information/search";
    const params = {
      id: orderCode,
    };

    axios
      .get(baseUrl, { params })
      .then((response) => {
        setOrder(response.data.result);
        renderOrder();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  // // console.log(order);
  useEffect(() => {
    handleGetOrder();
  }, []);
  const [index, setIndex] = useState(0);
  function renderOrder() {
    let element = `<tr>
    <th>STT</th>
    <th>Mã đơn hàng</th>
    <th>Trạng thái</th>
    <th>Nơi gửi</th>
    <th>Nơi nhận</th>
    <th>Sản phẩm</th>
    <th>Phí</th>
    <th>Tiền thu hộ</th>
    <th>Xác nhận</th>
  </tr>`;
    element += `<tr>
          <td>${index}</td>
          <td>${order._id}</td>
          <td>${order.postalInformation.status}</td>
          <td>${order.postalInformation.source}</td>
          <td>${order.postalInformation.destination}</td>
          <td>${order.postalInformation.name}</td>
          <td>${order.postalInformation.price}</td>
          <td>${order.postalInformation.price}</td>
          <td><button>Xác nhận</button></td>
      </tr>`;
    document.getElementById("tabledata").innerHTML = element;
    setIndex(index + 1);
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
                setStatusError("");
              }}
              className={statusError ? "error-input" : ""}
            >
              <option value="Trưởng điểm giao dịch">Đã giao</option>
              <option value="Trưởng điểm tập kết">Chưa giao</option>
            </select>
            {statusError && <p className="error-message">{statusError}</p>}
          </div>
        </div>

        <button className="btn-search" type="submit">
          Tìm kiếm
        </button>
      </form>

      <div className="row">
        <div className="x_panel no-pd">
          <div className="x_content no-pd no-mg">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="x_content">
                <div className="table-responsive">
                  <table
                    id="tabledata"
                    className="table table-hover table-condensed table-striped text-info table-width-auto"
                  >
                    {/* <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mã đơn hàng</th>
                        <th>Trạng thái</th>
                        <th>Nơi gửi</th>
                        <th>Nơi nhận</th>
                        <th>Sản phẩm</th>
                        <th>Phí</th>
                        <th>Tiền thu hộ</th>
                        <th>Xác nhận</th>
                      </tr>
                    </thead>
                    <tbody id="tablebody"></tbody> */}
                  </table>
                </div>
                <div className="pagination">
                  {data.length > itemsPerPage && (
                    <ul className="pagination-list">
                      {Array.from(
                        { length: Math.ceil(data.length / itemsPerPage) },
                        (_, index) => (
                          <li
                            key={index}
                            className={`pagination-item ${
                              index + 1 === currentPage ? "active" : ""
                            }`}
                            onClick={() => handlePageChange(index + 1)}
                          >
                            {index + 1}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
