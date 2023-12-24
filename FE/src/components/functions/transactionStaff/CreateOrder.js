import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import User from "../../../assets/icon/user-solid.svg";
import Phone from "../../../assets/icon/phone-solid.svg";
import "../../../style/CreateOrder.css";

function CreateOrder() {
  // Người gửi
  const [senderInformation, setSenderInformation] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderProvince, setSenderProvince] = useState("");
  const [senderDistrict, setSenderDistrict] = useState("");
  const [senderAddress, setSenderAddress] = useState("");

  // Người nhận
  const [receiverInformation, setReceiverInformation] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [receiverProvince, setReceiverProvince] = useState("");
  const [receiverDistrict, setReceiverDistrict] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");

  // const [showSuccess, setShowSuccess] = useState(false);

  const handleCreatePostalItems = async () => {
    try {
      // Gửi dữ liệu đến backend
      const response = await fetch("http://localhost:3001/information/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: {
            information: senderInformation,
            name: senderName,
            phone: senderPhone,
            province: senderProvince,
            district: senderDistrict,
            address: senderAddress,
          },
          receiver: {
            information: receiverInformation,
            name: receiverName,
            phone: receiverPhone,
            province: receiverProvince,
            district: receiverDistrict,
            address: receiverAddress,
          },
        }),
      });

      // Xử lý response từ backend (nếu cần)
      const data = await response.json();
      console.log("Response từ backend:", data);

      // Thực hiện các hành động khác sau khi gửi thành công
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
    }

    // Hiển thị thông báo thành công
    // setShowSuccess(true);
  };

  return (
    <div className="body">
      <div className="main-create">
        <div className="pannel-create">
          <div className="title">
            <h2>
              {" "}
              <i className=""></i> NGƯỜI GỬI{" "}
            </h2>
          </div>

          <div className="text-info">
            <div className="column">
              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label">
                      {" "}
                      THÔNG TIN NGƯỜI GỬI
                    </label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="Tên thông tin (nếu có)"
                      onChange={(e) => setSenderInformation(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> HỌ VÀ TÊN</label>
                  </div>
                  <div className="input-group">
                    <div className="user-icon">
                      <img src={User} alt="" />
                    </div>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="Tên người gửi"
                      onChange={(e) => setSenderName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> SỐ ĐIỆN THOẠI</label>
                  </div>
                  <div className="input-group">
                    <div className="phone-icon">
                      <img src={Phone} alt="" />
                    </div>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="SĐT người gửi"
                      onChange={(e) => setSenderPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> TỈNH/THÀNH PHỐ</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="Tỉnh/Thành phố"
                      onChange={(e) => setSenderProvince(e.target.value)}
                    />
                  </div>
                </div>
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> HUYỆN/QUẬN</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="Huyện/Quận"
                      onChange={(e) => setSenderDistrict(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pannel-create">
          <div className="title">
            <h2>
              {" "}
              <i className=""></i> NGƯỜI NHẬN{" "}
            </h2>
          </div>

          <div className="text-info">
            <div className="column">
              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label">
                      {" "}
                      THÔNG TIN NGƯỜI NHẬN
                    </label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="Tên thông tin (nếu có)"
                      onChange={(e) => setReceiverInformation(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> HỌ VÀ TÊN</label>
                  </div>
                  <div className="input-group">
                    <div className="user-icon">
                      <img src={User} alt="" />
                    </div>
                    <input
                      type="text"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="Tên người nhận"
                      onChange={(e) => setReceiverName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> SỐ ĐIỆN THOẠI</label>
                  </div>
                  <div className="input-group">
                    <div className="phone-icon">
                      <img src={Phone} alt="" />
                    </div>
                    <input
                      type="number"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="SĐT người nhận"
                      onChange={(e) => setReceiverPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> TỈNH/THÀNH PHỐ</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="Tỉnh/Thành phố"
                      onChange={(e) => setReceiverProvince(e.target.value)}
                    />
                  </div>
                </div>
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> HUYỆN/QUẬN</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="Huyện/Quận"
                      onChange={(e) => setReceiverDistrict(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-create">
        <div className="pannel-create">
          <div className="title">
            <h2>
              {" "}
              <i className=""></i> THÔNG TIN BƯU GỬI{" "}
            </h2>
          </div>

          <div className="text-info">
            <div className="column">
              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label"> LOẠI HÀNG GỬI</label>
                  </div>
                  <div className="one-row">
                    <div className="input-group">
                      <input
                        type="radio"
                        id="code"
                        name="code"
                        // value=""
                        class="custom-control-input"
                        placeholder=""
                      />
                      <label className="custom-control-lable">Tài liệu</label>
                    </div>

                    <div className="input-group ">
                      <input
                        type="radio"
                        id="code"
                        name="code"
                        // value=""
                        class="custom-control-input"
                        placeholder=""
                      />
                      <label className="custom-control-lable">Hàng hoá</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label"> TÊN SẢN PHẨM</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="Tên sản phẩm "
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> GIÁ TRỊ</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="number"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="vnd "
                    />
                  </div>
                </div>

                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> KHỐI LƯỢNG</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="number"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder="gam"
                    />
                  </div>
                </div>

                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label"> SỐ LƯỢNG</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="number"
                      id="code"
                      name="code"
                      // value=""
                      class="form-control has-feedback-left"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label">
                      {" "}
                      KÍCH THƯỚC (nếu có)
                    </label>
                  </div>

                  <div className="one-row">
                    <div className="input-group pr10">
                      <input
                        type="number"
                        id="code"
                        name="code"
                        // value=""
                        class="form-control has-feedback-left"
                        placeholder="Dài (cm)"
                      />
                    </div>

                    <div className="input-group pr10 pl10">
                      <input
                        type="number"
                        id="code"
                        name="code"
                        // value=""
                        class="form-control has-feedback-left"
                        placeholder="Rộng (cm)"
                      />
                    </div>

                    <div className="input-group pl10">
                      <input
                        type="number"
                        id="code"
                        name="code"
                        // value=""
                        class="form-control has-feedback-left"
                        placeholder="Cao (cm)"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label">
                      {" "}
                      TÍNH CHẤT HÀNG HOÁ ĐẶC BIỆT
                    </label>
                  </div>

                  <div className="one-row">
                    <div className="input-group f1">
                      <input
                        type="checkbox"
                        id="checkbox-input"
                        // name="code"
                        value="HGC"
                        class="mat-checkbox-input"
                        tabIndex={0}
                        aria-checked="false"
                      />

                      <label className="mat-checkbox-label">Giá trị cao</label>
                    </div>

                    <div className="input-group f1">
                      <input
                        type="checkbox"
                        id="checkbox-input"
                        // name="code"
                        value="HGC"
                        class="mat-checkbox-input"
                        tabIndex={0}
                        aria-checked="false"
                      />

                      <label className="mat-checkbox-label">Dễ vỡ</label>
                    </div>
                  </div>

                  <div className="one-row">
                    <div className="input-group f1">
                      <input
                        type="checkbox"
                        id="checkbox-input"
                        // name="code"
                        value="HGC"
                        class="mat-checkbox-input"
                        tabIndex={0}
                        aria-checked="false"
                      />

                      <label className="mat-checkbox-label">Nguyên khối</label>
                    </div>

                    <div className="input-group f1">
                      <input
                        type="checkbox"
                        id="checkbox-input"
                        // name="code"
                        value="HGC"
                        class="mat-checkbox-input"
                        tabIndex={0}
                        aria-checked="false"
                      />

                      <label className="mat-checkbox-label">Quá khổ</label>
                    </div>
                  </div>

                  <div className="one-row">
                    <div className="input-group f1">
                      <input
                        type="checkbox"
                        id="checkbox-input"
                        // name="code"
                        value="HGC"
                        class="mat-checkbox-input"
                        tabIndex={0}
                        aria-checked="false"
                      />

                      <label className="mat-checkbox-label">Chất lỏng</label>
                    </div>

                    <div className="input-group f1">
                      <input
                        type="checkbox"
                        id="checkbox-input"
                        // name="code"
                        value="HGC"
                        class="mat-checkbox-input"
                        tabIndex={0}
                        aria-checked="false"
                      />

                      <label className="mat-checkbox-label">Hàng lạnh</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-create">
        <div className="pannel-create">
          <div className="title">
            <h2>
              {" "}
              <i className=""></i> Bưu gửi{" "}
            </h2>
          </div>
          <div className="text-info">
            <div className="column">
              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label"> TIỀN THU HỘ</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="checkbox"
                      id="checkbox-input"
                      // name="code"
                      value="HGC"
                      class="mat-checkbox-input"
                      tabIndex={0}
                      aria-checked="false"
                    />
                    <label className="mat-checkbox-label">
                      Thu hộ bằng tiền hàng
                    </label>
                  </div>

                  <div className="input-group">
                    <input
                      type="number"
                      id="cod"
                      maxLength={11}
                      // formcontrolname="cod"
                      class="form-control has-feedback-left"
                      placeholder="0đ"
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label"> NGƯỜI TRẢ CƯỚC</label>
                  </div>
                  <div className="one-row">
                    <div className="input-group">
                      <input
                        type="radio"
                        id="code"
                        name="code"
                        value=""
                        class="custom-control-input"
                        placeholder=""
                      />
                      <label className="custom-control-lable">Người gửi</label>
                    </div>

                    <div className="input-group ">
                      <input
                        type="radio"
                        id="code"
                        name="code"
                        value=""
                        class="custom-control-input"
                        placeholder=""
                      />
                      <label className="custom-control-lable">Người nhận</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label"> Ghi chú</label>
                  </div>
                  <div className="input-group ">
                    {/* <input
                      type="text"
                      id="code"
                      name="code"
                      value=""
                      class="form-control has-feedback-left h100"
                      placeholder=""
                    /> */}
                    <textarea
                      className="form-control "
                      placeholder="Nhập ghi chú"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label"> YÊU CẦU LẤY HÀNG</label>
                  </div>
                  <div className="one-row">
                    <div className="input-group">
                      <input
                        type="radio"
                        id="code"
                        name="code"
                        value=""
                        class="custom-control-input"
                        placeholder=""
                      />
                      <label className="custom-control-lable">
                        Gửi tại bưu cục
                      </label>
                    </div>

                    <div className="input-group ">
                      <input
                        type="radio"
                        id="code"
                        name="code"
                        value=""
                        class="custom-control-input"
                        placeholder=""
                      />
                      <label className="custom-control-lable">
                        Gửi đến nhà người nhận
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback w100">
                  <div className="input-group">
                    <input
                      type="checkbox"
                      id="checkbox-input"
                      // name="code"
                      value="HGC"
                      class="mat-checkbox-input"
                      tabIndex={0}
                      aria-checked="false"
                    />

                    <label className="mat-checkbox-label">
                      Lưu thông tin đơn hàng
                    </label>
                  </div>
                </div>
              </div>

              {/* {showSuccess && (
                <div className="success-message" style={{ color: "green" }}>
                  Đã tạo đơn hàng thành công!
                </div>
              )} */}
              <div className="text-center">
                <div className="btn-search">
                  <button
                    type="submit"
                    class="btn"
                    onClick={handleCreatePostalItems}
                  >
                    <i class="fa fa-search"></i>
                    <p>TẠO BƯU GỬI</p>
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

export default CreateOrder;
