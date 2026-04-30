import React from "react";
import { PricingCard } from "../components/common/PricingCard";
import { FAQItem } from "../components/common/FAQItem";
import { COLORS, SPACING } from "../constants/colors";
import { QuickFeatureCard } from "../components/common/QuickFeatureCard";
import { Footer } from "../components/layout/Footer";
import Navbar from "../components/layout/NavBar";
import { useCalculateChargeController } from "../controllers/useCalculateChargeController";

const pricingPlans = [
  {
    title: "Standard",
    price: "50",
    features: ["5-7 Days", "Within City", "SMS Updates"],
  },
  {
    title: "Express",
    price: "120",
    features: ["2-3 Days", "All Districts", "Real-time Tracking"],
    isPopular: true,
  },
  {
    title: "Overnight",
    price: "200",
    features: ["Next Day", "Priority Handling", "Call Updates"],
  },
];

const features = [
  {
    icon: "💡",
    title: "Transparent Pricing",
    description: "See exactly what you'll pay, no surprises",
  },
  {
    icon: "⚡",
    title: "Instant Calculation",
    description: "Get charges in just seconds",
  },
  {
    icon: "💰",
    title: "Best Rates",
    description: "Competitive pricing for all cities",
  },
  {
    icon: "🎯",
    title: "Accurate Results",
    description: "Precise charges based on distance & weight",
  },
];

const faqs = [
  {
    question: "How is the charge calculated?",
    answer: "Charges are based on the weight of the parcel, the distance between cities, and the delivery speed you choose.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, the price you see is the final price. All taxes and surcharges are included in the calculated amount.",
  },
];

export const CalculateCharge = () => {
  const {
    fromCity, setFromCity,
    toCity, setToCity,
    deliveryType, setDeliveryType,
    productType, setProductType,
    weight, setWeight,
    cities, deliveryTypes, productTypes, weights,
    handleCalculate,
    isLoading,
    calculationResult
  } = useCalculateChargeController();

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "100px", color: COLORS.primary }}>
        <h2>Loading calculation data...</h2>
        <p>Fetching cities and rates from database...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
        minHeight: "100vh",
        color: "#333"
      }}
    >
      <Navbar />
      
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center", color: "#1a1a1a", marginBottom: "10px" }}>
          Calculate Delivery Charge
        </h1>

        <p style={{ color: "#666", textAlign: "center", marginBottom: "40px", fontSize: "18px" }}>
          Get an instant quote for your shipment across Bangladesh
        </p>

        <div
          style={{
            background: "#ffffff",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            marginBottom: "40px",
            border: "1px solid #e0e0e0"
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "30px" }}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>From City</label>
              <select
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                style={selectStyle}
              >
                <option value="" style={{ color: "#999" }}>Select City</option>
                {cities.map((city) => {
                  const val = typeof city === 'string' ? city : (city.name || city.label || city.id);
                  return <option key={val} value={val} style={{ color: "#333" }}>{val}</option>;
                })}
              </select>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>To City</label>
              <select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                style={selectStyle}
              >
                <option value="" style={{ color: "#999" }}>Select City</option>
                {cities.map((city) => {
                  const val = typeof city === 'string' ? city : (city.name || city.label || city.id);
                  return <option key={val} value={val} style={{ color: "#333" }}>{val}</option>;
                })}
              </select>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>Delivery Type</label>
              <select
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
                style={selectStyle}
              >
                <option value="" style={{ color: "#999" }}>Select Type</option>
                {deliveryTypes.map((type) => {
                  const val = typeof type === 'string' ? type : (type.name || type.label || type.id);
                  return <option key={val} value={val} style={{ color: "#333" }}>{val}</option>;
                })}
              </select>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", alignItems: "flex-end" }}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Product Type</label>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                style={selectStyle}
              >
                <option value="" style={{ color: "#999" }}>Select Type</option>
                {productTypes.map((type) => {
                  const val = typeof type === 'string' ? type : (type.name || type.label || type.id);
                  return <option key={val} value={val} style={{ color: "#333" }}>{val}</option>;
                })}
              </select>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>Weight Category</label>
              <select
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                style={selectStyle}
              >
                <option value="" style={{ color: "#999" }}>Select Weight</option>
                {weights.map((w) => {
                  const val = typeof w === 'string' ? w : (w.name || w.label || w.id);
                  return <option key={val} value={val} style={{ color: "#333" }}>{val}</option>;
                })}
              </select>
            </div>

            <button
              onClick={handleCalculate}
              style={{
                height: "45px",
                backgroundColor: COLORS.primary,
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.3s"
              }}
            >
              Calculate Charge
            </button>
          </div>
        </div>

        {calculationResult && (
          <div style={resultPanelStyle}>
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: 0, fontSize: "24px", color: COLORS.primary }}>Calculation Result</h2>
              <p style={{ color: "#666", marginTop: "5px" }}>Based on your selected parameters</p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px", marginTop: "20px" }}>
                <div>
                  <span style={resultLabelStyle}>Route:</span>
                  <span style={resultValueStyle}>{calculationResult.from} → {calculationResult.to}</span>
                </div>
                <div>
                  <span style={resultLabelStyle}>Service:</span>
                  <span style={resultValueStyle}>{calculationResult.type}</span>
                </div>
                <div>
                  <span style={resultLabelStyle}>Weight:</span>
                  <span style={resultValueStyle}>{calculationResult.weight}</span>
                </div>
                <div>
                  <span style={resultLabelStyle}>Estimated Time:</span>
                  <span style={resultValueStyle}>{calculationResult.estimatedDays || "2-3 Days"}</span>
                </div>
              </div>
            </div>
            
            <div style={amountBoxStyle}>
              <span style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>Total Charge</span>
              <div style={{ fontSize: "42px", fontWeight: "bold", margin: "5px 0" }}>৳{calculationResult.amount}</div>
              <span style={{ fontSize: "12px", opacity: 0.8 }}>Incl. all taxes</span>
            </div>
          </div>
        )}

        <div style={{
          backgroundColor: "white",
          padding: `${SPACING.xlarge} ${SPACING.large}`,
          marginTop: SPACING.xlarge,
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
        }}>
          <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: SPACING.large }}>Why Calculate With Us?</h2>
          <div style={{
            display: "flex",
            justifyContent: "space-around",
            gap: SPACING.large,
            flexWrap: "wrap",
          }}>
            {features.map((feature, index) => (
              <QuickFeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        <div style={{
          padding: `${SPACING.xlarge} ${SPACING.large}`,
          backgroundColor: "transparent",
          marginTop: SPACING.xlarge,
          textAlign: "center",
        }}>
          <h2 style={{ fontSize: "28px", marginBottom: SPACING.large }}>Our Pricing Plans</h2>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: SPACING.large,
            flexWrap: "wrap",
          }}>
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                isPopular={plan.isPopular}
              />
            ))}
          </div>
        </div>

        <div style={{
          backgroundColor: "white",
          padding: `${SPACING.xlarge} ${SPACING.large}`,
          maxWidth: "800px",
          margin: `${SPACING.xlarge} auto`,
          borderRadius: "16px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
        }}>
          <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: SPACING.large, color: COLORS.primary }}>Charge Calculation FAQs</h2>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#333",
  display: "block",
  marginBottom: "5px"
};

const selectStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "2px solid #e0e0e0",
  fontSize: "15px",
  backgroundColor: "#ffffff",
  color: "#333333",
  outline: "none",
  width: "100%",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  appearance: "none",
  backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22/%3E%3C/svg%3E')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 15px top 50%",
  backgroundSize: "12px auto"
};

const inputGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "15px"
};

const resultPanelStyle = {
  display: "flex",
  flexWrap: "wrap",
  background: "white",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
  border: `1px solid ${COLORS.primary}20`,
  padding: "30px",
  gap: "30px",
  alignItems: "center",
  animation: "fadeIn 0.5s ease-out"
};

const amountBoxStyle = {
  backgroundColor: COLORS.primary,
  color: "white",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "center",
  minWidth: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const resultLabelStyle = {
  display: "block",
  fontSize: "12px",
  color: "#888",
  textTransform: "uppercase",
  marginBottom: "2px"
};

const resultValueStyle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#333"
};
