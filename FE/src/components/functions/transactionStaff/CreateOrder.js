<<<<<<< HEAD
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 2170d2ee061f2ff2bc7338b3c16520652f199fc2
import User from "../../../assets/icon/user-solid.svg";
import Phone from "../../../assets/icon/phone-solid.svg";
import "../../../style/transactionStaff/CreateOrder.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import axios from "axios";
export default function CreateOrder() {
  // Người gửi
  const [senderInformation, setSenderInformation] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderNameError, setSenderNameError] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderPhoneError, setSenderPhoneError] = useState("");
  const [senderProvince, setSenderProvince] = useState("");
  const [senderDistrict, setSenderDistrict] = useState("");
  const [senderWard, setSenderWard] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [senderAddressError, setSenderAddressError] = useState("");

  // Người nhận
  const [receiverInformation, setReceiverInformation] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverNameError, setReceiverNameError] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [receiverPhoneError, setReceiverPhoneError] = useState("");
  const [receiverProvince, setReceiverProvince] = useState("");
  const [receiverDistrict, setReceiverDistrict] = useState("");
  const [receiverWard, setReceiverWard] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [receiverAddressError, setReceiverAddressError] = useState("");

  // const [showSuccess, setShowSuccess] = useState(false);

  const handleCreatePostalItems = async () => {
    if (!senderName) {
      setSenderNameError("Vui lòng nhập tên người gửi!");
    }

    if (!senderPhone) {
      setSenderPhoneError("Vui lòng nhập sđt người gửi!");
    }

    if (!senderAddress) {
      setSenderAddressError("Vui lòng nhập địa chỉ cụ thể của người gửi!");
    }

    if (!receiverName) {
      setReceiverNameError("Vui lòng nhập tên người nhận!");
    }

    if (!receiverPhone) {
      setReceiverPhoneError("Vui lòng nhập sđt người nhận!");
    }

    if (!receiverPhone) {
      setReceiverAddressError("Vui lòng nhập địa chỉ cụ thể người nhận!");
    }

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
            ward: senderWard,
            address: senderAddress,
          },
          receiver: {
            information: receiverInformation,
            name: receiverName,
            phone: receiverPhone,
            province: receiverProvince,
            district: receiverDistrict,
            ward: receiverWard,
            address: receiverAddress,
          },
        }),
      });
      const data = await response.json();
      console.log("Response từ backend:", data);

      let idcode = data.newInformation._id;
      // console.log(idcode);

      let btn = document.getElementById("noti");
      let stack = document.getElementById("stack");
      btn.appendChild(stack);
      // let p = document.createElement("p");
      // let p2 = document.createElement("p");
      // let notification = document.createTextNode("Tạo đơn thành công");
      // let notification2 = document.createTextNode("Mã đơn hàng là: ");
      // let spanIdCode = document.createElement("span"); // Tạo một phần tử span mới
      // let idCodeText = document.createTextNode(idcode);
      // spanIdCode.appendChild(idCodeText);
      // p.appendChild(notification);
      // p.style.backgroundColor = "#1565C0";
      // p.style.padding = "10px";
      // p.style.color = "white";
      // p2.appendChild(notification2);
      // p2.style.backgroundColor = "#1565C0";
      // p2.style.padding = "10px";
      // p2.style.color = "white";
      // p2.appendChild(spanIdCode);
      // btn.appendChild(p);
      // btn.appendChild(p2);
      <div id="stack">
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert onClose={() => {}} severity="success">
            Tạo đơn thành công
          </Alert>
          <Alert onClose={() => {}} severity="info">
            Mã đơn hàng là:{" "}
          </Alert>
        </Stack>
      </div>;
      // Thực hiện các hành động khác sau khi gửi thành công
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
    }
  };

  // const api = "https://provinces.open-api.vn/api/";
  let callAPI = async (api) => {
    return axios.get(api).then((response) => {
      renderData(response.data, "province");
      renderData(response.data, "provinces");
    });
  };
  useEffect(() => {
    callAPI("https://provinces.open-api.vn/api/?depth=1");
  }, []);

  let renderData = (array, select) => {
    let row = ' <option disable value="">Chọn</option>';
    array.forEach((element) => {
      row += `<option data-id="${element.code}" value="${element.name}">${element.name}</option>`;
    });
    // document.querySelector("#" + select).innerHTML = row;
    const selectElement = document.querySelector("." + select);
    if (selectElement) {
      selectElement.innerHTML = row;
    } else {
      console.error("Element with id '" + select + "' not found.");
    }
  };

  const handleProvinceChange = async (e, className) => {
    const selectedProvinceName = e.target.value;

    let api = "https://provinces.open-api.vn/api/?depth=2";
    const callApiDistrict = async (api) => {
      let data = await axios.get(api).then((response) => {
        return response.data;
      });
      return data;
    };
    let responses = await callApiDistrict(api);
    let i = 0;
    for (; i < responses.length; i++) {
      if (responses[i].name === selectedProvinceName) {
        break;
      }
    }
    renderData(responses[i].districts, className);
  };

  const handleDistrictChange = async (e, className) => {
    const selectedDistrictName = e.target.value;
    let api = "https://provinces.open-api.vn/api/?depth=3";
    const callApiWard = async (api) => {
      let data = await axios.get(api).then((response) => {
        return response.data;
      });
      return data;
    };
    let responses = await callApiWard(api);
    let i = 0,
      j = 0;
    for (; i < responses.length; i++) {
      let flag = true;
      let k = 0;
      for (; k < responses[i].districts.length; k++) {
        if (responses[i].districts[k].name === selectedDistrictName) {
          flag = false;
          j = k;
          break;
        }
      }
      if (flag === false) {
        break;
      }
    }
    renderData(responses[i].districts[j].wards, className);
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
                      id="senderInformation"
                      name="senderInformation"
                      // value=""
                      className="form-control has-feedback-left"
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
                      id="senderName"
                      name="senderName"
                      // value=""
                      // className="form-control has-feedback-left"
                      placeholder="Tên người gửi"
                      onChange={(e) => {
                        setSenderName(e.target.value);
                        setSenderNameError("");
                      }}
                      className={senderNameError ? "error-input" : ""}
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
                      id="senderPhone"
                      name="senderPhone"
                      // className="form-control has-feedback-left"
                      placeholder="SĐT người gửi"
                      onChange={(e) => {
                        setSenderPhone(e.target.value);
                        setSenderPhoneError("");
                      }}
                      className={senderPhoneError ? "error-input" : ""}
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label">TỈNH/THÀNH PHỐ</label>
                  </div>
                  <div className="input-group">
                    <select
                      id="province"
                      name="province"
                      className="form-control has-feedback-left province"
                      // value={senderProvince}
                      onChange={(event) => {
                        // alert(event.target.value);
                        // alert(senderProvince)
                        setSenderProvince(event.target.value);
                        handleProvinceChange(event, "district");
                      }}
                    >
                      <option value="abc">Chọn Tỉnh/Thành phố</option>
                    </select>
                  </div>
                </div>
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label">HUYỆN/QUẬN</label>
                  </div>
                  <div className="input-group">
                    <select
                      id="district"
                      name="district"
                      className="form-control has-feedback-left district"
                      onChange={(event) => {
                        setSenderDistrict(event.target.value);
                        handleDistrictChange(event, "ward");
                      }}
                    >
                      <option value="">Chọn Huyện/Quận</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label">XÃ/PHƯỜNG</label>
                  </div>
                  <div className="input-group">
                    <select
                      id="ward"
                      name="ward"
                      className="form-control has-feedback-left ward"
                      onChange={(event) => setSenderWard(event.target.value)}
                    >
                      <option value="">Chọn Xã/Phường</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label"> ĐỊA CHỈ CỤ THỂ</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="senderAddress"
                      // name="senderInformation"
                      value={senderAddress}
                      // className="form-control has-feedback-left"
                      placeholder="Số nhà, xóm, thôn"
                      onChange={(e) => {
                        setSenderAddress(e.target.value);
                        setSenderAddressError("");
                      }}
                      className={senderAddressError ? "error-input" : ""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Người NHẬN */}
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
                      THÔNG TIN NGƯỜI NHẬN
                    </label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="receiverInformation"
                      name="receiverInformation"
                      // value=""
                      className="form-control has-feedback-left"
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
                      id="receiverName"
                      name="receiverName"
                      // value=""
                      // className="form-control has-feedback-left"
                      placeholder="Tên người nhận"
                      onChange={(e) => {
                        setReceiverName(e.target.value);
                        setReceiverNameError("");
                      }}
                      className={receiverNameError ? "error-input" : ""}
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
                      id="receiverPhone"
                      name="receiverPhone"
                      // value=""
                      // className="form-control has-feedback-left"
                      placeholder="SĐT người nhận"
                      onChange={(e) => {
                        setReceiverPhone(e.target.value);
                        setReceiverPhoneError("");
                      }}
                      className={receiverPhoneError ? "error-input" : ""}
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label">TỈNH/THÀNH PHỐ</label>
                  </div>
                  <div className="input-group">
                    <select
                      id="provinces"
                      name="provinces"
                      className="form-control has-feedback-left provinces"
                      onChange={(event) => {
                        setReceiverProvince(event.target.value);
                        handleProvinceChange(event, "districts");
                      }}
                    >
                      <option value="">Chọn Tỉnh/Thành phố</option>
                    </select>
                  </div>
                </div>

                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label">HUYỆN/QUẬN</label>
                  </div>
                  <div className="input-group">
                    <select
                      id="districts"
                      name="districts"
                      className="form-control has-feedback-left districts"
                      onChange={(event) => {
                        setReceiverDistrict(event.target.value);
                        handleDistrictChange(event, "wards");
                      }}
                    >
                      <option value="">Chọn Huyện/Quận</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback">
                  <div className="name">
                    <label className="control-label">XÃ/PHƯỜNG</label>
                  </div>
                  <div className="input-group">
                    <select
                      id="wards"
                      name="wards"
                      className="form-control has-feedback-left wards"
                      onChange={(event) => setReceiverWard(event.target.value)}
                    >
                      <option value="">Chọn Xã/Phường</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="has-feedback w100">
                  <div className="name">
                    <label className="control-label"> ĐỊA CHỈ CỤ THỂ</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      id="receiverAddress"
                      // name="senderInformation"
                      // value=""
                      // className="form-control has-feedback-left"
                      placeholder="Số nhà, xóm, thôn"
                      onChange={(e) => {
                        setReceiverAddress(e.target.value);
                        setReceiverAddressError("");
                      }}
                      className={receiverAddressError ? "error-input" : ""}
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
                        id="document"
                        name="code"
                        // value=""
                        className="custom-control-input"
                        placeholder=""
                      />
                      <label className="custom-control-lable">Tài liệu</label>
                    </div>

                    <div className="input-group ">
                      <input
                        type="radio"
                        id="type"
                        name="code"
                        // value=""
                        className="custom-control-input"
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
                      id="productName"
                      name="code"
                      // value=""
                      className="form-control has-feedback-left"
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
                      id="value"
                      name="code"
                      // value=""
                      className="form-control has-feedback-left"
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
                      id="weight"
                      name="code"
                      // value=""
                      className="form-control has-feedback-left"
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
                      id="quantity"
                      name="code"
                      // value=""
                      className="form-control has-feedback-left"
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
                        id="length"
                        name="code"
                        // value=""
                        className="form-control has-feedback-left"
                        placeholder="Dài (cm)"
                      />
                    </div>

                    <div className="input-group pr10 pl10">
                      <input
                        type="number"
                        id="width"
                        name="code"
                        // value=""
                        className="form-control has-feedback-left"
                        placeholder="Rộng (cm)"
                      />
                    </div>

                    <div className="input-group pl10">
                      <input
                        type="number"
                        id="height"
                        name="code"
                        // value=""
                        className="form-control has-feedback-left"
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
                        id="highValue"
                        // name="heightValue"
                        value="HGC"
                        className="mat-checkbox-input"
                        tabIndex={0}
                        aria-checked="false"
                      />

                      <label className="mat-checkbox-label">Giá trị cao</label>
                    </div>

                    <div className="input-group f1">
                      <input
                        type="checkbox"
                        id="fragile"
                        // name="code"
                        value="HGC"
                        className="mat-checkbox-input"
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
                        id="entireBlock"
                        // name="code"
                        value="HGC"
                        className="mat-checkbox-input"
                        tabIndex={0}
                        aria-checked="false"
                      />

                      <label className="mat-checkbox-label">Nguyên khối</label>
                    </div>

                    <div className="input-group f1">
                      <input
                        type="checkbox"
                        id="bulky"
                        // name="code"
                        value="HGC"
                        className="mat-checkbox-input"
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
                        id="liquid"
                        // name="code"
                        value="HGC"
                        className="mat-checkbox-input"
                        tabIndex={0}
                        aria-checked="false"
                      />

                      <label className="mat-checkbox-label">Chất lỏng</label>
                    </div>

                    <div className="input-group f1">
                      <input
                        type="checkbox"
                        id="coldGoods"
                        // name="code"
                        value="HGC"
                        className="mat-checkbox-input"
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
                      // id="checkbox-input"
                      // name="code"
                      value="HGC"
                      className="mat-checkbox-input"
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
                      // id="cod"
                      maxLength={11}
                      // formcontrolname="cod"
                      className="form-control has-feedback-left"
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
                        // id="code"
                        name="code"
                        value=""
                        className="custom-control-input"
                        placeholder=""
                      />
                      <label className="custom-control-lable">Người gửi</label>
                    </div>

                    <div className="input-group ">
                      <input
                        type="radio"
                        // id="code"
                        name="code"
                        value=""
                        className="custom-control-input"
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
                        // id="code"
                        name="code"
                        value=""
                        className="custom-control-input"
                        placeholder=""
                      />
                      <label className="custom-control-lable">
                        Gửi tại bưu cục
                      </label>
                    </div>

                    <div className="input-group ">
                      <input
                        type="radio"
                        // id="code"
                        name="code"
                        value=""
                        className="custom-control-input"
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
                      // id="checkbox-input"
                      // name="code"
                      value="HGC"
                      className="mat-checkbox-input"
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
                    className="btn"
                    onClick={handleCreatePostalItems}
                  >
                    TẠO BƯU GỬI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="noti"></div>
      </div>
    </div>
  );
}
