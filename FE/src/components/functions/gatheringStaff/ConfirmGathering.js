import React, { useState } from "react";
import "../../../style/gatheringStaff/ConfirmGathering.css";

export default function ConfirmGathering() {
  const [orderCode, setOrderCode] = useState("");
  const [orderCodeError, setOrderCodeError] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [employeeCodeError, setEmployeeCodeError] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [sendAddress, setSendAddress] = useState("");
  const [sendAddressError, setSendAddressError] = useState("");
  //thêm
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedItem, setSelectedItem] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  //thêm
  const data = [
    // Dữ liệu của bạn
    {
      column1: 1,
      column2: "ABC123",
      column3: "Nơi gửi 1",
      column4: "Nơi nhận 1",
      column5: "Túi",
      column6: "10.000",
      column7: "2.000.000",

      // Các trường dữ liệu khác
    },
    {
      column1: 2,
      column2: "XYZ456",
      column3: "Nơi gửi 2",
      column4: "Nơi nhận 2",
      column5: "Balo",
      column6: "10.000",
      column7: "20.000",
      // Các trường dữ liệu khác
    },
    // Thêm các đối tượng dữ liệu khác
  ];
  //thêm

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
        sendAddress,
      });

      try {
        // Gửi dữ liệu tìm kiếm lên backend
        const response = await fetch(
          "https://localhost:3001/confirmGathering",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderCode,
              sendAddress,
            }),
          }
        );

        if (response.ok) {
          // Xử lý response nếu yêu cầu thành công
          const data = await response.json();
          console.log("Response data:", data);

          // Reset form sau khi tìm kiếm thành công
          setOrderCode("");
          setSendAddress("");
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
    }
  };

  //thêm
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

  //thêm

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
            <label htmlFor="sendAddress">
              <span className="required-field">*</span> Điểm gửi đến:
            </label>
            <select
              id="sendAddress"
              value={sendAddress}
              onChange={(e) => {
                setSendAddress(e.target.value);
                setSendAddressError("");
              }}
              className={sendAddressError ? "error-input" : ""}
            >
              <option value="Trưởng điểm giao dịch">Điểm giao dịch</option>
              <option value="Trưởng điểm tập kết">Điểm tập kết</option>
            </select>
            {sendAddressError && (
              <p className="error-message">{sendAddressError}</p>
            )}
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
                  <table className="table table-hover table-condensed table-striped text-info table-width-auto">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mã đơn hàng</th>
                        <th>Nơi gửi</th>
                        <th>Nơi nhận</th>
                        <th>Sản phẩm</th>
                        <th>Phí</th>
                        <th>Tiền thu hộ</th>
                        <th>Xác nhận</th>

                        {/* Thêm các đề mục cột khác */}
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((item, index) => (
                        <tr key={index}>
                          {/* Hiển thị dữ liệu của từng dòng */}
                          <td>{item.column1}</td>
                          <td>{item.column2}</td>
                          <td>{item.column3}</td>
                          <td>{item.column4}</td>
                          <td>{item.column5}</td>
                          <td>{item.column6}</td>
                          <td>{item.column7}</td>
                          {/* Hiển thị các cột dữ liệu khác */}
                          <td>
                            <button
                              onClick={() => handleConfirm(item)}
                              className="btn btn-success"
                            >
                              Xác nhận
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
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

      {selectedItem && <div className="success-message">{successMessage}</div>}
    </div>
  );
}
