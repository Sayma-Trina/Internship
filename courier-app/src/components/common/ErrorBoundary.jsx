import React, { Component } from "react";
import { COLORS, SPACING } from "../../constants/colors";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: SPACING?.xlarge || "48px",
          textAlign: "center",
          backgroundColor: "#f9fafb",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <h1 style={{ color: COLORS?.danger || "#ff4d4f", fontSize: "36px" }}>Oops! Something went wrong.</h1>
          <p style={{ color: COLORS?.textMuted || "#666", fontSize: "18px", maxWidth: "500px", margin: `${SPACING?.medium || "12px"} auto` }}>
            We're sorry for the inconvenience. Our team has been notified of the issue.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "12px 24px",
              backgroundColor: COLORS?.primary || "#1877ca",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: SPACING?.large || "24px",
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
