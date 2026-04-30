import React from "react";
import { COLORS, SPACING } from "../../constants/colors";

export const Input = ({ type = "text", placeholder, value, onChange, error, style = {} }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: SPACING?.xsmall || "4px",
    width: "100%",
    marginBottom: SPACING?.small || "12px",
    ...style,
  };

  const inputStyle = {
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: `1px solid ${error ? (COLORS?.danger || "#dc3545") : (COLORS?.border || "#ccc")}`,
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease",
    color: "#333333",
    backgroundColor: "#ffffff",
  };

  const errorStyle = {
    color: COLORS?.danger || "#dc3545",
    fontSize: "12px",
    marginTop: "2px",
  };

  return (
    <div style={containerStyle}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
      />
      {error && <span style={errorStyle}>{error}</span>}
    </div>
  );
};
