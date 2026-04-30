import React, { useState } from "react";
import { COLORS, SPACING } from "../../constants/colors";

export const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerStyle = {
    backgroundColor: "#f9fafb",
    padding: `${SPACING?.medium || "12px"} ${SPACING?.large || "24px"}`,
    borderRadius: "8px",
    marginBottom: SPACING?.medium || "12px",
    border: "1px solid #eef2ff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "left",
  };

  const questionStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: COLORS?.dark || "#333",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const answerStyle = {
    marginTop: SPACING?.medium || "12px",
    color: COLORS?.textMuted || "#666",
    lineHeight: "1.6",
    maxHeight: isOpen ? "200px" : "0",
    overflow: "hidden",
    transition: "all 0.4s ease-in-out",
  };

  return (
    <div style={containerStyle} onClick={() => setIsOpen(!isOpen)}>
      <div style={questionStyle}>
        {question}
        <span style={{ fontSize: "24px", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>
          ▾
        </span>
      </div>
      <div style={answerStyle}>
        {answer}
      </div>
    </div>
  );
};
