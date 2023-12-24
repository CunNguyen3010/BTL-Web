import React from "react";
import "../style/PostalManagementConfirmed.css";
import barCode from "../assets/icon/barcode-solid.svg";
import User from "../assets/icon/user-solid.svg";
import Phone from "../assets/icon/phone-solid.svg";

function PostalManagementConfirmed() {
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
                  <label className="control-label">Tỉnh/Thành phố nhận</label>
                  <select
                    name="to_province"
                    class="form-control select2_group"
                    autocomplete="off"
                  >
                    <option value>Tỉnh/Thành Phố</option>
                    <option value="20">Quảng Ninh</option>
                    <option value="17">Hải Dương</option>
                    <option value="18">Hải Phòng</option>
                    <option value="41">Thái Bình</option>
                    <option value="42">Nam Định</option>
                    <option value="43">Ninh Bình</option>
                    <option value="10">Hà Nội</option>
                    <option value="28">Vĩnh Phúc</option>
                    <option value="22">Bắc Ninh</option>
                    <option value="16">Hưng Yên</option>
                    <option value="40">Hà Nam</option>
                    <option value="31">Hà Giang</option>
                    <option value="27">Cao Bằng</option>
                    <option value="30">Tuyên Quang</option>
                    <option value="26">Bắc Kạn</option>
                    <option value="25">Thái Nguyên</option>
                    <option value="24">Lạng Sơn</option>
                    <option value="23">Bắc Giang</option>
                    <option value="39">Lai Châu</option>
                    <option value="33">Lào Cai</option>
                    <option value="38">Điện Biên</option>
                    <option value="32">Yên Bái</option>
                    <option value="36">Sơn La</option>
                    <option value="29">Phú Thọ</option>
                    <option value="35">Hòa Bình</option>
                    <option value="44">Thanh Hóa</option>
                    <option value="46">Nghệ An</option>
                    <option value="48">Hà Tĩnh</option>
                    <option value="51">Quảng Bình</option>
                    <option value="52">Quảng Trị</option>
                    <option value="53">Thừa Thiên Huế</option>
                    <option value="55">Đà Nẵng</option>
                    <option value="56">Quảng Nam</option>
                    <option value="57">Quảng Ngãi</option>
                    <option value="59">Bình Định</option>
                    <option value="62">Phú Yên</option>
                    <option value="65">Khánh Hòa</option>
                    <option value="66">Ninh Thuận</option>
                    <option value="58">Kon Tum</option>
                    <option value="60">Gia Lai</option>
                    <option value="63">Đắk Lắk</option>
                    <option value="64">Đắk Nông</option>
                    <option value="67">Lâm Đồng</option>
                    <option value="83">Bình Phước</option>
                    <option value="70">Hồ Chí Minh</option>
                    <option value="82">Bình Dương</option>
                    <option value="81">Đồng Nai</option>
                    <option value="80">Bình Thuận</option>
                    <option value="79">Bà Rịa Vũng Tàu</option>
                    <option value="84">Tây Ninh</option>
                    <option value="87">Đồng Tháp</option>
                    <option value="85">Long An</option>
                    <option value="86">Tiền Giang</option>
                    <option value="89">Vĩnh Long</option>
                    <option value="93">Bến Tre</option>
                    <option value="94">Trà Vinh</option>
                    <option value="88">An Giang</option>
                    <option value="92">Kiên Giang</option>
                    <option value="90">Cần Thơ</option>
                    <option value="91">Hậu Giang</option>
                    <option value="95">Sóc Trăng</option>
                    <option value="96">Bạc Liêu</option>
                    <option value="97">Cà Mau</option>
                  </select>
                </div>

                <div className="has-feedback">
                  <label className="control-label">Sắp xếp theo</label>
                  <select
                    name="order_by"
                    class="form-control"
                    autocomplete="off"
                  >
                    <option value="ordercode">Mã đơn hàng</option>
                    <option value="created_at" selected="selected">
                      Thời gian tạo
                    </option>
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

export default PostalManagementConfirmed;
