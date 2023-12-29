import React, { useState } from "react";
import "../../../style/admin/AccountManagement.css";
import axios from "axios";

export default function AccountManagement() {
  const [useName, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [id_workplace, setID_workplace] = useState("");

  // cái này chỉ để lưu res
  const [userData, setUserData] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    // Xử lý logic khi người dùng tìm kiếm nếu không có lỗi
    try {
      const searchParams = new URLSearchParams();

      // Thêm các tham số tìm kiếm nếu có giá trị
      if (useName) searchParams.append("useName", useName);
      if (password) searchParams.append("password", password);
      if (name) searchParams.append("name", name);
      if (phone) searchParams.append("phone", phone);
      if (id_workplace) searchParams.append("id_workplace", id_workplace);

      // Kiểm tra giá trị của role
      if (role === "all" || role === "") {
        // Nếu role là "all", thì thêm cả hai vai trò
        const transactionAdminURL = `http://localhost:3001/auth/search?${searchParams.toString()}&role=transactionAdmin`;
        const gatheringAdminURL = `http://localhost:3001/auth/search?${searchParams.toString()}&role=gatheringAdmin`;

        console.log(transactionAdminURL);
        // Gửi yêu cầu tìm kiếm sử dụng axios hoặc fetch cho cả hai vai trò
        const [transactionAdminResponse, gatheringAdminResponse] =
          await Promise.all([
            axios.get(transactionAdminURL),
            axios.get(gatheringAdminURL),
          ]);
        console.log(
          "transactionAdminResponse.data.result:",
          transactionAdminResponse.data.result
        );
        console.log(
          "gatheringAdminResponse.data.result:",
          gatheringAdminResponse.data.result
        );
        // Xử lý kết quả, có thể nối hoặc thực hiện các thao tác khác với kết quả của cả hai
        const mergedResults = [
          ...transactionAdminResponse.data.result,
          ...gatheringAdminResponse.data.result,
        ];
        console.log("Search data:", mergedResults);
        setUserData(mergedResults);
      } else {
        // Nếu role không phải là "all", thì thêm giá trị role vào tham số tìm kiếm
        searchParams.append("role", role);

        // Xây dựng URL với các tham số tìm kiếm
        const searchURL = `http://localhost:3001/auth/search?${searchParams.toString()}`;
        console.log("searchURL:", searchURL);
        // Gửi yêu cầu tìm kiếm sử dụng axios hoặc fetch cho một vai trò
        const response = await axios.get(searchURL);

        // Xử lý kết quả
        console.log("Search data:", response.data.result);
        setUserData(response.data.result);
      }
    } catch (error) {
      console.error("Error:", error);
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
            <label htmlFor="role">Chức vụ:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="all">Tất cả</option>
              <option value="transactionAdmin">Trưởng điểm giao dịch</option>
              <option value="gatheringAdmin">Trưởng điểm tập kết</option>
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
                    {userData.length === 0 ? (
                      <tr>
                        <td colSpan="8" className="text-center">
                          Không có dữ liệu
                        </td>
                      </tr>
                    ) : (
                      userData.map((user, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.password}</td>
                          <td>{user.phone}</td>
                          <td>{user.role}</td>
                          <td>{user.id_workplace}</td>
                          <td>{/* Nút hoặc thao tác khác nếu cần */}</td>
                        </tr>
                      ))
                    )}
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
