import React from "react";
import { COLORS, SPACING } from "../../constants/colors";

export const Footer = () => {
  const footerStyle = {
    backgroundColor: COLORS?.dark || "#333",
    color: "white",
    padding: `${SPACING?.xlarge || "48px"} ${SPACING?.large || "24px"}`,
    marginTop: "auto",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: SPACING?.xlarge || "48px",
  };

  const sectionStyle = {
    flex: 1,
    minWidth: "250px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: SPACING?.medium || "12px",
    color: COLORS?.danger || "#ff4d4f",
  };

  const linkStyle = {
    color: "#ccc",
    textDecoration: "none",
    display: "block",
    marginBottom: SPACING?.small || "8px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <div style={titleStyle}>🚚 TRI Courier</div>
          <p style={{ color: "#ccc", lineHeight: "1.6" }}>
            Fast, secure, and reliable courier services across Bangladesh. 
            Track your parcels in real-time and get them delivered with care.
          </p>
        </div>
        
        <div style={sectionStyle}>
          <h3 style={{ marginBottom: SPACING?.medium || "12px" }}>Quick Links</h3>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/track" style={linkStyle}>Track Order</a>
          <a href="/calculate" style={linkStyle}>Calculate Charge</a>
          <a href="/login" style={linkStyle}>Login</a>
        </div>
        
        <div style={sectionStyle}>
          <h3 style={{ marginBottom: SPACING?.medium || "12px" }}>Support</h3>
          <p style={{ color: "#ccc" }}>Email: support@tricourier.com</p>
          <p style={{ color: "#ccc" }}>Phone: +880 1234 567890</p>
          <p style={{ color: "#ccc" }}>Address: Dhaka, Bangladesh</p>
        </div>
      </div>
      
      <div style={{
        textAlign: "center",
        marginTop: SPACING?.xlarge || "48px",
        paddingTop: SPACING?.medium || "12px",
        borderTop: "1px solid #444",
        color: "#888",
      }}>
        &copy; {new Date().getFullYear()} TRI Courier. All rights reserved.
      </div>
    </footer>
  );
};
