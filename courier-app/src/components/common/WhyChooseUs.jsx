import React from "react";
import { COLORS, SPACING } from "../../constants/colors";

export const WhyChooseUs = () => {
  const containerStyle = {
    padding: `${SPACING?.xlarge || "48px"} ${SPACING?.large || "24px"}`,
    backgroundColor: "#75b3f1",
    textAlign: "center",
    borderRadius: "12px",
    margin: `${SPACING?.xlarge || "48px"} 0`,
  };

  const gridStyle = {
    display: "flex",
    justifyContent: "space-around",
    gap: SPACING?.xlarge || "48px",
    flexWrap: "wrap",
    marginTop: SPACING?.xlarge || "48px",
  };

  const itemStyle = {
    flex: 1,
    minWidth: "250px",
    textAlign: "center",
  };

  const iconStyle = {
    fontSize: "48px",
    marginBottom: SPACING?.medium || "12px",
    color: COLORS?.primary || "#1877ca",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: SPACING?.small || "8px",
    color: COLORS?.dark || "#333",
  };

  const descStyle = {
    color: COLORS?.textMuted || "#262626",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle} id="why-us">
      <h2 style={{ fontSize: "36px", marginBottom: SPACING?.large || "24px" }}>Why Choose TRI Courier?</h2>
      <p style={{ maxWidth: "700px", margin: "0 auto", color: COLORS?.textMuted || "#666", fontSize: "18px" }}>
        We provide the most reliable and fastest delivery service in the country with advanced tracking and 24/7 support.
      </p>
      <div style={gridStyle}>
        <div style={itemStyle}>
          <div style={iconStyle}>🚀</div>
          <h3 style={titleStyle}>Fastest Delivery</h3>
          <p style={descStyle}>Get your parcels delivered within 24-48 hours across major cities in Bangladesh.</p>
        </div>
        <div style={itemStyle}>
          <div style={iconStyle}>🛡️</div>
          <h3 style={titleStyle}>Safe & Insured</h3>
          <p style={descStyle}>All your parcels are insured and handled with extreme care by our professional staff.</p>
        </div>
        <div style={itemStyle}>
          <div style={iconStyle}>💰</div>
          <h3 style={titleStyle}>Best Pricing</h3>
          <p style={descStyle}>Enjoy competitive and transparent rates without any hidden charges or surprises.</p>
        </div>
      </div>
    </div>
  );
};
