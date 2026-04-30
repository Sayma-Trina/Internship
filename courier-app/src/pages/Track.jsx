import React from "react";
import { useNavigate } from "react-router-dom";
import { FAQItem } from "../components/common/FAQItem";
import { COLORS, SPACING } from "../constants/colors";
import { Button } from "../components/common/Button";
import { QuickFeatureCard } from "../components/common/QuickFeatureCard";
import { Footer } from "../components/layout/Footer";
import Navbar from "../components/layout/NavBar";
import { useTrackController } from "../controllers/useTrackController";

const trackingFeatures = [
  { icon: "📍", title: "Live Location", description: "See your package location in real-time" },
  { icon: "🔔", title: "Instant Notifications", description: "Get updates at every delivery stage" },
  { icon: "📱", title: "Mobile Friendly", description: "Track from any device, anytime" },
  { icon: "🛡️", title: "Secure Tracking", description: "Your tracking info is fully protected" },
];

const faqs = [
  {
    question: "How often is my tracking information updated?",
    answer: "Your tracking information is updated every time your package moves through our system, typically every 2-4 hours.",
  },
  {
    question: "Can I modify my delivery address after tracking starts?",
    answer: "Yes, you can contact our support team within 24 hours of placing your order to modify the delivery address.",
  },
  {
    question: "What does each status mean?",
    answer: "Order Placed, Picked Up, In Transit, Out for Delivery, Delivered.",
  },
  {
    question: "Can I request a specific delivery time?",
    answer: "You can set delivery preferences in your account.",
  },
];

const Track = () => {
  const navigate = useNavigate();

  const {
    tracknumber,
    handleChange,
    handleTrack,
    trackingResult,
    isLoading,
    error
  } = useTrackController();

  return (
    <div style={{ textAlign: "center", minHeight: "100vh", backgroundColor: "#c3d4e5" }}>
      
      <Navbar />

  
      <div style={{ padding: `${SPACING.xlarge} ${SPACING.large}` }}>
        <h1>Track Your Order</h1>
        <p>Enter your tracking number</p>

     
        <div style={{ maxWidth: 600, margin: "auto", background: "#fff", padding: 30, borderRadius: 12 }}>
          
          <input
            type="text"
            placeholder="e.g. TRI123456"
            value={tracknumber}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: 15,
              border: `2px solid ${error ? "red" : "#ccc"}`,
              borderRadius: 8
            }}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
            <Button onClick={handleTrack} disabled={isLoading}>
              {isLoading ? "Searching..." : "Track"}
            </Button>

            <Button onClick={() => navigate("/")}>Back</Button>
          </div>
        </div>
      </div>

 
      {trackingResult && (
        <div style={{ maxWidth: 800, margin: "40px auto", background: "#4b98c1", padding: 30, borderRadius: 12 }}>
          
          <h2>Tracking Result</h2>

          <p><strong>Status:</strong> {trackingResult.status}</p>
          <p><strong>Sender:</strong> {trackingResult.sender}</p>
          <p><strong>Receiver:</strong> {trackingResult.receiver}</p>
          <p><strong>Location:</strong> {trackingResult.location}</p>
          <p><strong>Estimated Delivery:</strong> {trackingResult.estimatedDelivery}</p>

          <h3>History</h3>

          {(trackingResult.history || []).map((h, i) => (
            <div key={i}>
              <p>{h.date} - {h.status} - {h.location}</p>
            </div>
          ))}

        </div>
      )}


      <div style={{ padding: 40 }}>
        <h2>Why Track With Us?</h2>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
          {trackingFeatures.map((f, i) => (
            <QuickFeatureCard key={i} {...f} />
          ))}
        </div>
      </div>

   
      <div style={{ padding: 40, maxWidth: 800, margin: "auto" }}>
        <h2>FAQs</h2>
        {faqs.map((f, i) => (
          <FAQItem key={i} {...f} />
        ))}
      </div>

      <Footer />

    </div>
  );
};

export default Track;