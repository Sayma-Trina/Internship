import React from "react";
import { COLORS, SPACING } from "../../constants/colors";
import { Button } from "./Button";

export const PricingCard = ({ title, price, features = [], isPopular = false }) => {
  const cardStyle = {
    flex: 1,
    minWidth: "280px",
    maxWidth: "350px",
    padding: SPACING?.xlarge || "48px",
    backgroundColor: isPopular ? (COLORS?.primary || "#26b9d6") : "white",
    color: isPopular ? "white" : ("#333"),
    borderRadius: "16px",
    boxShadow: isPopular ? "0 20px 40px rgba(112, 170, 221, 0.3)" : "0 10px 30px rgba(200, 159, 159, 0.05)",
    textAlign: "center",
    position: "relative",
    transform: isPopular ? "scale(1.05)" : "scale(1)",
    zIndex: isPopular ? 1 : 0,
    border: isPopular ? "none" : "1px solid #eee",
  };

  const priceStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    margin: `${SPACING?.medium || "12px"} 0`,
  };

  return (
    <div style={cardStyle}>
      {isPopular && (
        <div style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: COLORS?.danger || "#ff4d4f",
          color: "white",
          padding: "4px 12px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "bold",
        }}>POPULAR</div>
      )}
      <h3 style={{ fontSize: "24px", marginBottom: SPACING?.small || "8px" }}>{title}</h3>
      <div style={priceStyle}>৳{price}<span style={{ fontSize: "16px", fontWeight: "normal" }}>/parcel</span></div>
      <ul style={{ listStyle: "none", padding: 0, margin: `${SPACING?.large || "24px"} 0`, textAlign: "left" }}>
        {features.map((feature, index) => (
          <li key={index} style={{ marginBottom: SPACING?.small || "8px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>✓</span> {feature}
          </li>
        ))}
      </ul>
      <Button 
        variant={isPopular ? "danger" : "primary"} 
        style={{ width: "100%", marginTop: SPACING?.medium || "12px" }}
      >
        Choose Plan
      </Button>
    </div>
  );
};
