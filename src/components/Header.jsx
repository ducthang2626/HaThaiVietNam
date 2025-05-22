import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div
      className=""
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Logo"
        style={{ width: "100px", height: "auto" }}
      />

      {/* Search box */}
      <input
        type="text"
        placeholder="Nhập thông tin tìm kiếm"
        style={{
          width: "300px",
          height: "40px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          padding: "10px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      {/* Auth link */}
      <div className="text-sm mr-6">
        <a href="#" className="text-black hover:underline">
          Đăng nhập / Đăng ký
        </a>
      </div>

      {/* Cart section */}
      <div className="relative flex items-center mr-6">
        <div className="text-sm font-bold">
          GIỎ HÀNG
          <br />
          <span className="text-xs font-normal">(0) sản phẩm</span>
        </div>
      </div>

      {/* Check order button */}
      <div>
        <button
          onClick={() => navigate("/kiemtradonhang")}
          style={{
            backgroundColor: "blue",
            borderRadius: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
            color: "black",
            fontWeight: "bold",
          }}
        >
          KIỂM TRA ĐƠN HÀNG
        </button>
      </div>
    </div>
  );
}

export default Header;
