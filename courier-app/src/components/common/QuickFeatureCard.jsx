import React from "react";
import { COLORS, SPACING } from "../../constants/colors";

export const QuickFeatureCard = ({ icon, title, description }) => {
  return (
    <div style={{
      flex: 1,
      minWidth: "200px",
      textAlign: "center",
      padding: SPACING?.large || "24px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    }}>
      <div style={{ fontSize: "40px", marginBottom: SPACING?.medium || "12px" }}>{icon}</div>
      <h3 style={{ fontSize: "20px", marginBottom: SPACING?.small || "8px", color: COLORS?.dark || "#333" }}>{title}</h3>
      <p style={{ color: COLORS?.textMuted || "#666", lineHeight: "1.5" }}>{description}</p>
    </div>
  );
};
