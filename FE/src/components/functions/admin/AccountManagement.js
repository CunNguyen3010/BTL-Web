import React, { useState } from "react";
import "../../../style/admin/AccountManagement.css";

export default function AccountManagement() {
  const [useName, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [id_workplace, setID_workplace] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    // Xử lý logic khi người dùng tìm kiếm nếu không có lỗi
    if (useName && password && name && phone && id_workplace && position) {
      console.log("Search data:", {
        useName,
        password,
        name,
        phone,
        id_workplace,
        position,
      });

      // Reset form sau khi tìm kiếm thành công
      setUseName("");
      setPassword("");
      setName("");
      setPhone("");
      setID_workplace("");
      setPosition("");
    }
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSearch} className="registration-form w100 h270">
        <div className="one-row box">
          <div className="form-group has-feedback">
            <label htmlFor="name">Họ và tên:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group has-feedback">
            <label htmlFor="useName">Tên đăng nhập:</label>
            <input
              type="text"
              id="useName"
              value={useName}
              onChange={(e) => {
                setUseName(e.target.value);
                // setOrderCodeError("");
              }}
            />
          </div>
          <div className="form-group has-feedback">
            <label htmlFor="password">Mật khẩu:</label>
            <input
              type="text"
              id="passwork"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="one-row box">
          <div className="form-group has-feedback">
            <label htmlFor="phone">Số điện thoại:</label>
            <input
              type="number"
              id="pone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="form-group has-feedback">
            <label htmlFor="position">Chức vụ:</label>
            <select
              id="position"
              value={position}
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            >
              <option value="Trưởng điểm giao dịch">
                Trưởng điểm giao dịch
              </option>
              <option value="Trưởng điểm tập kết">Trưởng điểm tập kết</option>
            </select>
          </div>
          <div className="form-group has-feedback">
            <label htmlFor="id_workplace">Mã nơi làm:</label>
            <input
              type="text"
              id="id_workplace"
              value={id_workplace}
              onChange={(e) => {
                setID_workplace(e.target.value);
              }}
            />
          </div>
        </div>

        <button className="btn-search" type="submit">
          Tìm kiếm
        </button>
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
                        <i class="fa fa-barcode"></i> Họ và tên
                      </th>
                      <th>Tên đăng nhập</th>
                      <th>Mật khẩu</th>
                      <th>Số điện thoại</th>
                      <th>Chức vụ</th>
                      <th>Nơi làm việc</th>
                      {/* <th>Tiền thu hộ</th> */}
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
