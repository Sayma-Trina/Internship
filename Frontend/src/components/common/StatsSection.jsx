import React from "react";
import { COLORS, SPACING } from "../../constants/colors";

export const StatsSection = () => {
  const statsStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: `${SPACING?.xlarge || "48px"} ${SPACING?.large || "24px"}`,
    backgroundColor: "#39cedc",
    color: "white",
    borderRadius: "12px",
    margin: `${SPACING?.xlarge || "48px"} 0`,
    flexWrap: "wrap",
    gap: SPACING?.large || "24px",
  };

  const statItemStyle = {
    textAlign: "center",
    flex: 1,
    minWidth: "150px",
  };

  const valueStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: SPACING?.small || "8px",
  };

  const labelStyle = {
    fontSize: "16px",
    opacity: 0.9,
  };

  return (
    <div style={statsStyle}>
      <div style={statItemStyle}>
        <div style={valueStyle}>10K+</div>
        <div style={labelStyle}>Parcels Delivered</div>
      </div>
      <div style={statItemStyle}>
        <div style={valueStyle}>5K+</div>
        <div style={labelStyle}>Happy Customers</div>
      </div>
      <div style={statItemStyle}>
        <div style={valueStyle}>64+</div>
        <div style={labelStyle}>Districts Covered</div>
      </div>
      <div style={statItemStyle}>
        <div style={valueStyle}>24/7</div>
        <div style={labelStyle}>Customer Support</div>
      </div>
    </div>
  );
};
