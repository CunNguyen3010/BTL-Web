import React, { useState } from "react";
import "../../../style/Confirm.css";

function Confirm() {
  const [orderCode, setOrderCode] = useState("");
  const [orderCodeError, setOrderCodeError] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [employeeCodeError, setEmployeeCodeError] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [position, setPosition] = useState("");
  const [positionError, setPositionError] = useState("");
  // const [showTable, setShowTable] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    // Kiểm tra các trường bắt buộc
    if (!orderCode) {
      setOrderCodeError("Vui lòng nhập mã đơn hàng!");
    }
    if (!employeeCode) {
      setEmployeeCodeError("Vui lòng nhập mã nhân viên!");
    }
    if (!date) {
      setDateError("Vui lòng chọn ngày!");
    }

    // Xử lý logic khi người dùng tìm kiếm nếu không có lỗi
    if (orderCode && employeeCode && date) {
      console.log("Search data:", {
        orderCode,
        employeeCode,
        date,
        position,
      });

      // Reset form sau khi tìm kiếm thành công
      setOrderCode("");
      setEmployeeCode("");
      setDate("");
      setPosition("");
      // setShowTable(true);
    }
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSearch} className="registration-form w90">
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
            <label htmlFor="employeeCode">
              <span className="required-field">*</span> Mã nhân viên:
            </label>
            <input
              type="text"
              id="employeeCode"
              value={employeeCode}
              onChange={(e) => {
                setEmployeeCode(e.target.value);
                setEmployeeCodeError("");
              }}
              className={employeeCodeError ? "error-input" : ""}
            />
            {employeeCodeError && (
              <p className="error-message">{employeeCodeError}</p>
            )}
          </div>
        </div>
        <div className="one-row box">
          <div className="form-group has-feedback">
            <label htmlFor="date">
              <span className="required-field">*</span> Ngày:
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                setDateError("");
              }}
              className={dateError ? "error-input" : ""}
            />
            {dateError && <p className="error-message">{dateError}</p>}
          </div>
          <div className="form-group has-feedback">
            <label htmlFor="position">
              <span className="required-field">*</span> Trạng thái:
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
              <option value="Trưởng điểm giao dịch">Đã giao</option>
              <option value="Trưởng điểm tập kết">Chưa giao</option>
            </select>
            {positionError && <p className="error-message">{positionError}</p>}
          </div>
        </div>

        <button type="submit">Tìm kiếm</button>
      </form>

      <div class="row">
        <div class="x_panel no-pd">
          <div class="x_content no-pd no-mg">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="x_content">
                <table class="table table-hover table-condensed table-striped text-info">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>
                        <i class="fa fa-barcode"></i> Mã đơn hàng
                      </th>
                      <th>Trạng thái</th>
                      <th>Nơi gửi</th>
                      <th>Nơi nhận</th>
                      <th>Sản phẩm</th>
                      <th>Phí</th>
                      <th>Tiền thu hộ</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="30" class="text-center">
                        Không có dữ liệu
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="clearfix"></div>
                <div class="pull-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {showTable && (
        <div>
          <table className="shipping-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã đơn hàng</th>
                <th>Trạng thái</th>
                <th>Nơi gửi</th>
                <th>Nơi nhận</th>
                <th>Phí</th>
                <th>Tiền thu hộ</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      )} */}
    </div>
  );
}

export default Confirm;
