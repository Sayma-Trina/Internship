

import React from "react";
import { useNavigate } from "react-router-dom";
import { CallToAction } from "../components/common/CallToAction";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/common/Button";
import { COLORS, SPACING } from "../constants/colors";

export const StaffDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
   
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `${SPACING.medium} ${SPACING.large}`,
        backgroundColor: COLORS.dark,
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}>
        <div style={{ fontSize: "24px", fontWeight: "bold", color: COLORS.danger }}>
          🚚 TRI Courier
        </div>
        <ul style={{
          display: "flex",
          gap: SPACING.large,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}>
          <li><a href="#features" style={{ color: "white", textDecoration: "none" }}>Features</a></li>
          <li><a href="#why-us" style={{ color: "white", textDecoration: "none" }}>Why Us</a></li>
          <li><a href="#testimonials" style={{ color: "white", textDecoration: "none" }}>Testimonials</a></li>
        </ul>
        <div style={{ display: "flex", gap: SPACING.medium }}>
          <Button onClick={() => navigate("/login")} variant="primary">Login</Button>
          <Button onClick={() => navigate("/register")} variant="danger">Sign Up</Button>
        </div>
      </nav>

     
      <section style={{
        background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.danger} 100%)`,
        color: "white",
        padding: `${SPACING.xlarge} ${SPACING.large}`,
        textAlign: "center",
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: SPACING.large, fontWeight: "bold" }}>
          Fast, Secure & Reliable Delivery
        </h1>
        <p style={{ fontSize: "20px", marginBottom: SPACING.xlarge, maxWidth: "600px", lineHeight: "1.6" }}>
          Send your parcels anywhere in Bangladesh with trusted courier service. Track in real-time and get 24/7 support.
        </p>
        <div style={{ display: "flex", gap: SPACING.medium }}>
        <Button onClick={() => navigate("/assign-parcels")} variant="danger">
        View Assign Parcels
       </Button>

        </div>
      </section>

   
      

     
      <CallToAction />

   
      <Footer />
    </div>
  );
};






