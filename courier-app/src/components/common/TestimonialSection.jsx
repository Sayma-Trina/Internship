import React from "react";
import { COLORS, SPACING } from "../../constants/colors";

export const TestimonialSection = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: `${SPACING?.xlarge || "48px"} ${SPACING?.large || "24px"}`,
    gap: SPACING?.large || "24px",
    flexWrap: "wrap",
    backgroundColor: "white",
    borderRadius: "12px",
    margin: `${SPACING?.xlarge || "48px"} 0`,
  };

  const testimonialStyle = {
    flex: 1,
    minWidth: "300px",
    maxWidth: "400px",
    padding: SPACING?.large || "24px",
    backgroundColor: "#a9c9e9",
    borderRadius: "16px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    textAlign: "left",
  };

  const quoteStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: COLORS?.textMuted || "#666",
    fontStyle: "italic",
    marginBottom: SPACING?.medium || "12px",
  };

  const authorStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const avatarStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: COLORS?.primary || "#1877ca",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
  };

  const nameStyle = {
    fontWeight: "bold",
    color: COLORS?.dark || "#333",
  };

  const roleStyle = {
    fontSize: "12px",
    color: COLORS?.textMuted || "#888",
  };

  return (
    <div style={containerStyle} id="testimonials">
      <div style={testimonialStyle}>
        <div style={quoteStyle}>
          "TRI Courier has changed how I do business. My customers are happy with the fast and reliable delivery service. Highly recommended!"
        </div>
        <div style={authorStyle}>
          <div style={avatarStyle}>SH</div>
          <div>
            <div style={nameStyle}>Sarah H.</div>
            <div style={roleStyle}>E-commerce Entrepreneur</div>
          </div>
        </div>
      </div>
      <div style={testimonialStyle}>
        <div style={quoteStyle}>
          "The best courier service I've ever used. The tracking system is so accurate, and the support team is always ready to help."
        </div>
        <div style={authorStyle}>
          <div style={avatarStyle}>RM</div>
          <div>
            <div style={nameStyle}>RRR M.</div>
            <div style={roleStyle}>Small Business Owner</div>
          </div>
        </div>
      </div>
      <div style={testimonialStyle}>
        <div style={quoteStyle}>
          "I've been using TRI Courier for months now, and they've never missed a deadline. Truly the most reliable partner for my logistics."
        </div>
        <div style={authorStyle}>
          <div style={avatarStyle}>AS</div>
          <div>
            <div style={nameStyle}>Anika S.</div>
            <div style={roleStyle}>Online Shop Owner</div>
          </div>
        </div>
      </div>
    </div>
  );
};
