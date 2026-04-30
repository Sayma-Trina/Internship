import React from "react";
import { COLORS, SPACING } from "../../constants/colors";

export const Button = ({ children, onClick, variant = "primary", type = "button", disabled = false, style = {} }) => {
  const baseStyle = {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.3s ease",
    opacity: disabled ? 0.6 : 1,
    ...style,
  };

  const variants = {
    primary: {
      backgroundColor: COLORS.primary || "#1877ca",
      color: "white",
    },
    danger: {
      backgroundColor: COLORS.danger || "#dc3545",
      color: "white",
    },
    secondary: {
      backgroundColor: COLORS.secondary || "#6c757d",
      color: "white",
    },
    outline: {
      backgroundColor: "transparent",
      border: `2px solid ${COLORS.primary || "#1877ca"}`,
      color: COLORS.primary || "#1877ca",
    },
  };

  const currentStyle = { ...baseStyle, ...(variants[variant] || variants.primary) };

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={currentStyle}>
      {children}
    </button>
  );
};
