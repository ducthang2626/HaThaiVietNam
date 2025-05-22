import React, { useState } from "react";
import {
  ChevronDown,
  Search,
  PaintBucket,
  CircuitBoard,
  Toilet,
  DoorOpen,
  Droplets,
  ChartColumnStacked,
} from "lucide-react";

function NavItem({ label, icon, children }) {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navItemStyle = {
    position: "relative",
    padding: "15px 10px",
    cursor: "pointer",
    backgroundColor: isHovered ? "#000" : "inherit",
    color: isHovered ? "#00f" : "#000", 
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div
      style={navItemStyle}
      onMouseEnter={() => {
        setOpen(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setIsHovered(false);
      }}
    >
      {icon}
      <span>{label}</span>
      <ChevronDown size={16} />

      {open && children && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "white",
            color: "blue",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 1000,
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            minWidth: "100%",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <NavItem label="Tìm kiếm nhanh" icon={<Search size={24} />}>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>
          Theo thương hiệu
        </a>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>
          Theo kích cỡ
        </a>
      </NavItem>
      <NavItem label="Sơn Nội - Ngoại thất cao cấp" icon={<PaintBucket size={24} />}>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>
          Theo thương hiệu
        </a>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>
          Theo kích cỡ
        </a>
      </NavItem>
      <NavItem label="Thiết bị điện - Dây cáp điện" icon={<CircuitBoard size={24} />}>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>Nike Air</a>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>Adidas Neo</a>
      </NavItem>
      <NavItem label="Thiết bị Vệ sinh cao cấp" icon={<Toilet size={24} />}>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>Ba sọc đen</a>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>Ba sọc trắng</a>
      </NavItem>
      <NavItem label="Cửa chống cháy - Cửa thép" icon={<DoorOpen size={24} />}>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>Ba sọc đen</a>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>Ba sọc trắng</a>
      </NavItem>
      <NavItem label="Thiết bị nước - Vật liệu" icon={<Droplets size={24} />}>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>Ba sọc đen</a>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>Ba sọc trắng</a>
      </NavItem>
      <NavItem label="Danh mục khác" icon={<ChartColumnStacked size={24} />}>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>Ba sọc đen</a>
        <a href="#" style={{ display: "block", padding: "5px 0" }}>Ba sọc trắng</a>
      </NavItem>
    </div>
  );
}

export default NavBar;
