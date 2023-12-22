import React from "react";
import "../style/PostalManagementCompleted.css";
import barCode from "../assets/icon/barcode-solid.svg";
import User from "../assets/icon/user-solid.svg";
import Phone from "../assets/icon/phone-solid.svg";

function PostalManagementCompleted() {
  return (
    <div className="main">
      <div className="row">
        <div className="pannel">
          <div className="title">
            <h2>
              {" "}
              <i className=""></i> Quản lý bưu gửi{" "}
            </h2>
          </div>

          <div className="content text-info">
            <div className="row">
              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> Mã đơn hàng</label>
                  </div>
                  <div className="input-group">
                    <div className="bar-code">
                      <img src={barCode} alt="" />
                    </div>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      value=""
                      class="form-control has-feedback-left"
                      placeholder="Nhập mã"
                    />
                  </div>
                </div>

                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> Tên người gửi</label>
                  </div>
                  <div className="input-group">
                    <div className="user-icon">
                      <img src={User} alt="" />
                    </div>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      value=""
                      class="form-control has-feedback-left"
                      placeholder="Tên người gửi"
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> SĐT người gửi</label>
                  </div>
                  <div className="input-group">
                    <div className="phone-icon">
                      <img src={Phone} alt="" />
                    </div>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      value=""
                      class="form-control has-feedback-left"
                      placeholder="SĐT người gửi"
                    />
                  </div>
                </div>

                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> Tên người nhận</label>
                  </div>
                  <div className="input-group">
                    <div className="user-icon">
                      <img src={User} alt="" />
                    </div>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      value=""
                      class="form-control has-feedback-left"
                      placeholder="Tên người nhận"
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> SĐT người nhận</label>
                  </div>
                  <div className="input-group">
                    <div className="phone-icon">
                      <img src={Phone} alt="" />
                    </div>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      value=""
                      class="form-control has-feedback-left"
                      placeholder="SĐT người nhận"
                    />
                  </div>
                </div>
                <div className="has-feedback">
                  <label className="control-label">Ngày gửi</label>
                  <input type="text" className="time_date_picker" />
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <label className="control-label">Trạng thái</label>
                  <select
                    id="status"
                    name="status"
                    class="form-control"
                    autocomplete="off"
                  >
                    <option value>Tất cả</option>
                    <option value="created">Chờ bưu cục xác nhận</option>
                    <option value="accepted">Bưu cục đã xác nhận</option>
                    <option value="canceled">Đã huỷ</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <div className="btn-search">
                  <button type="submit" class="btn">
                    <i class="fa fa-search"></i>
                    <p>Tìm Kiếm</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostalManagementCompleted;
