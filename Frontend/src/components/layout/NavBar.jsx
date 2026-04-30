import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS, SPACING } from "../../constants/colors";
import { Button } from "../common/Button";

const Navbar = ({ role, setRole }) => {
  const navigate = useNavigate();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${SPACING?.medium || "12px"} ${SPACING?.large || "24px"}`,
    backgroundColor: COLORS?.dark || "#333",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: COLORS?.danger || "#ff4d4f",
    cursor: "pointer",
  };

  const menuStyle = {
    display: "flex",
    gap: SPACING?.large || "24px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
  };

  const handleLogout = () => {
    if (setRole) setRole(null);
    navigate("/login");
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle} onClick={() => navigate("/")}>
        🚚 TRI Courier
      </div>
      <ul style={menuStyle}>
        <li><a href="#features" style={linkStyle}>Features</a></li>
        <li><a href="#why-us" style={linkStyle}>Why Us</a></li>
        <li><a href="#testimonials" style={linkStyle}>Testimonials</a></li>
      </ul>
      <div style={{ display: "flex", gap: SPACING?.medium || "12px" }}>
        {!role ? (
          <>
            <Button onClick={() => navigate("/login")} variant="primary">Login</Button>
            <Button onClick={() => navigate("/register")} variant="danger">Sign Up</Button>
          </>
        ) : (
          <Button onClick={handleLogout} variant="danger">Logout</Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
