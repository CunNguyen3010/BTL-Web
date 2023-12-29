import React, { useState, useEffect } from "react";
import "../../../style/gatheringStaff/ConfirmGathering.css";
import axios from "axios";
export default function ConfirmGathering() {
  const [orderCode, setOrderCode] = useState("");
  const [orderCodeError, setOrderCodeError] = useState("");

  const [sendAddress, setSendAddress] = useState("");
  const [sendAddressError, setSendAddressError] = useState("");
  //thêm
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedItem, setSelectedItem] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
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
    }
  };
  //thêm
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

  //thêm
  const [order, setOrder] = useState([]);

  useEffect(() => {
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
      order.forEach((item, index) => {
        element += `<tr>
           <td>${index + 1}</td>
           <td>${item._id}</td>
           <td>${item.postalInformation?.status}</td>
           <td>${item.postalInformation?.source}</td>
           <td>${item.postalInformation?.destination}</td>
           <td>${item.postalInformation?.name}</td>
           <td>${item.postalInformation?.price}</td>
           <td>${item.postalInformation?.price}</td>
           <td><button>Xác nhận</button></td>
           </tr>`;
      });
      document.getElementById("tabledata").innerHTML = element;
    }
    async function handleGetOrder() {
      const baseUrl = "http://localhost:3001/information/";
      axios
        .get(baseUrl)
        .then((response) => {
          setOrder(response.data);
          renderOrder();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    handleGetOrder();
  }, [order]);

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
                  <table
                    id="tabledata"
                    className="table table-hover table-condensed table-striped text-info table-width-auto"
                  ></table>
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
