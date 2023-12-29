import React, { useState, useEffect } from "react";
import "../../../style/transactionStaff/Confirm.css";
import axios from "axios";

export default function Confirm() {
  const [orderCode, setOrderCode] = useState("");
  const [orderCodeError, setOrderCodeError] = useState("");
  const [statusError, setStatusError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    setSuccessMessage("Đã xác nhận đơn hàng");
    if (!orderCode) {
      setOrderCodeError("Vui lòng nhập mã đơn hàng!");
    }
    deleteOrder();
  };

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

  async function deleteOrder() {
    const baseUrl = "http://localhost:3001/information/";
    axios
      .delete(baseUrl, { data: { _id: orderCode } })
      .then((response) => {
        console.log(response);
        console.log(`Deleted post with ID ${orderCode}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="registration-form-container">
      <div className="registration-form w100">
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
        </div>

        <button className="btn-search" onClick={handleConfirm}>
          Xác nhận
        </button>
      </div>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
