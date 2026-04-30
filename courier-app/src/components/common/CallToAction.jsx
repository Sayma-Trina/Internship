import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS, SPACING } from "../../constants/colors";
import { Button } from "./Button";

export const CallToAction = () => {
  const navigate = useNavigate();

  const ctaStyle = {
    padding: `${SPACING?.xlarge || "64px"} ${SPACING?.large || "24px"}`,
    backgroundColor: COLORS?.dark || "#111",
    color: "white",
    textAlign: "center",
    borderRadius: "16px",
    margin: `${SPACING?.xlarge || "64px"} 0`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: SPACING?.medium || "12px",
  };

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: SPACING?.small || "8px",
  };

  const descStyle = {
    fontSize: "18px",
    maxWidth: "600px",
    marginBottom: SPACING?.large || "24px",
    opacity: 0.9,
    lineHeight: "1.6",
  };

  return (
    <div style={ctaStyle}>
      <h2 style={titleStyle}>Ready to Start Shipping?</h2>
      <p style={descStyle}>Join thousands of happy customers who trust TRI Courier for their daily logistics needs. Fast, secure, and always reliable.</p>
      <div style={{ display: "flex", gap: SPACING?.medium || "12px" }}>
        <Button onClick={() => navigate("/register")} variant="danger" style={{ padding: "12px 32px" }}>Get Started Now</Button>
        <Button onClick={() => navigate("/calculate")} variant="outline" style={{ padding: "12px 32px" }}>Calculate Shipping</Button>
      </div>
    </div>
  );
};
