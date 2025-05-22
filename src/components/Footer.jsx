import {
  Facebook,
  Youtube,
  ShoppingBag,
  Phone,
  MapPin,
  MessageCircleMore,
} from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#171717",
        color: "white",
        padding: "1.5rem 2.5rem",
      }}
    >
      <div
        style={{     
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              marginBottom: "1rem",
              borderBottom: "1px solid white",
              width: "fit-content",
              paddingBottom: "0.25rem",
            }}
          >
            VỀ CHÚNG TÔI
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <Facebook color="#3b82f6" />
            <ShoppingBag color="#f97316" />
            <Youtube color="#dc2626" />
            <MessageCircleMore color="#0ea5e9" />
          </div>
        </div>

        {/* THÔNG TIN */}
        <div >
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              marginBottom: "1rem",
              borderBottom: "1px solid white",
              width: "fit-content",
              paddingBottom: "0.25rem",
            }}
          >
            THÔNG TIN
          </h3>
          <div style={{ color: "#9ca3af", lineHeight: "1.75rem" }}>
            <li>Chính sách thanh toán</li>
            <li>Chính sách giao nhận</li>
            <li>Chính sách đổi trả</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách bảo mật</li>
          </div>
        </div>

        {/* BẢN ĐỒ */}
        <div>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              marginBottom: "1rem",
              borderBottom: "1px solid white",
              width: "fit-content",
              paddingBottom: "0.25rem",
            }}
          >
            BẢN ĐỒ
          </h3>
          <div style={{ marginTop: "1rem", marginTop:"150px"  }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
              }}
            >
              ĐĂNG KÝ NHẬN TIN
            </label>
            <div style={{ position: "relative", width: "100%"}}>
              <input
                type="email"
                placeholder="Email của bạn"
                style={{
                  width: "100%",
                  padding: "0.5rem  0.5rem 0.5rem", // chừa khoảng bên phải cho nút
                  borderRadius: "0.25rem",
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                }}
              />
              <button
                style={{
                  position: "absolute",
                  right: "0.25rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "#2563eb", // màu xanh dương nổi bật
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.25rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                ĐĂNG KÝ
              </button>
            </div>
          </div>
        </div>

        {/* LIÊN HỆ */}
        <div>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              marginBottom: "1rem",
              borderBottom: "1px solid white",
              width: "fit-content",
              paddingBottom: "0.25rem",
            }}
          >
            LIÊN HỆ
          </h3>
          <div
            style={{
              color: "#9ca3af",
              fontSize: "0.875rem",
              lineHeight: "1.5rem",
            }}
          >
            <li
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "flex-start",
              }}
            >
              <MapPin size={16} style={{ marginTop: "0.25rem" }} />
              Bờ hồ Dương Thanh, xã Dương Phúc, huyện Thái Thụy, Thái Bình
            </li>
            <li
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "flex-start",
              }}
            >
              <Phone size={16} style={{ marginTop: "0.25rem" }} /> Call/Zalo bán
              lẻ: 0904.691.888
            </li>
            <li
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "flex-start",
              }}
            >
              <Phone size={16} style={{ marginTop: "0.25rem" }} /> Call/Zalo bán
              sỉ: 0904.691.888
            </li>
            <li
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "flex-start",
              }}
            >
              <Phone size={16} style={{ marginTop: "0.25rem" }} /> CSKH:
              0904.691.888
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
