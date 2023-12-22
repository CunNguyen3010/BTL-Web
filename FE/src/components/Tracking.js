import React from "react";
import "../style/Tracking.css";
import ordersearch from "../assets/icon/order-search.png";
function Tracking() {
  return (
    <div>
      <div className="search-container">
        <div className="search-label">
          <img src={ordersearch} alt="icon post search" />
          <div>Nhập mã bưu gửi</div>
        </div>
        <div className="search-input">
          <form class="inputform">
            <div className="input-code">
              <input
                className="input"
                type="text"
                placeholder="Nhập mã bưu gửi"
                value=""
                autocomplete="off"
              />
              <i className="note">Ghi chú: Tra cứu tối đa 100 bưu gửi</i>
            </div>
            <button class="track-btn">Tra cứu</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tracking;
