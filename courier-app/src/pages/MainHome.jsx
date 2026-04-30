import courier from '../assets/images/test.png';
import { CalculateCharge } from "./CalculateCharge";
import { FeatureCard } from "./HomePage";
import { useNavigate } from "react-router-dom";
import React from "react";
import { FeatureSection } from "../components/layout/FeatureSection";
import { StatsSection } from "../components/common/StatsSection";
import { CallToAction } from "../components/common/CallToAction";
import { TestimonialSection } from "../components/common/TestimonialSection";
import { Button } from "../components/common/Button";
import { WhyChooseUs } from "../components/common/WhyChooseUs";
import { QuickFeatureCard } from "../components/common/QuickFeatureCard";
import { PricingCard } from "../components/common/PricingCard";
import { FAQItem } from "../components/common/FAQItem";
import { COLORS, SPACING } from "../constants/colors";
import { Footer } from "../components/layout/Footer";

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

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Standard delivery takes 5-7 days. Express takes 2-3 days. Overnight delivery available for premium clients.",
  },
  {
    question: "Can I track my parcel?",
    answer: "Yes! You can track your parcel in real-time using your tracking number on our website or mobile app.",
  },
  {
    question: "What if my parcel gets lost?",
    answer: "We insure all parcels. In case of loss, we provide full compensation based on declared value.",
  },
  {
    question: "Do you deliver outside Dhaka?",
    answer: "Yes, we deliver to 64+ districts across Bangladesh including remote areas.",
  },
];

const MainHome = () => {
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
        <div style={{ fontSize: "24px", fontWeight: "bold", color: COLORS.primary }}>
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
        background: `linear-gradient(135deg, #4A90E2 10%, #50E3C2 100%)`,
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
          <Button onClick={() => navigate("/calculate")} variant="danger">
            Calculate Charge
          </Button>
          <Button onClick={() => navigate("/track")} variant="primary">
            Track Order
          </Button>
        </div>
      </section>

      <section style={{
        display: "flex",
        justifyContent: "space-around",
        padding: `${SPACING.xlarge} ${SPACING.large}`,
        backgroundColor: "white",
        gap: SPACING.large,
        flexWrap: "wrap",
      }}>
        <QuickFeatureCard
          icon="📦"
          title="Easy Shipping"
          description="Book your shipment in just 2 minutes"
        />
        <QuickFeatureCard
          icon="🔍"
          title="Real-Time Tracking"
          description="Track every step of delivery journey"
        />
        <QuickFeatureCard
          icon="💰"
          title="Best Prices"
          description="Competitive rates without hidden charges"
        />
        <QuickFeatureCard
          icon="🛡️"
          title="Safe & Secure"
          description="Your parcels insured & protected"
        />
      </section>

      <StatsSection />

      <section id="features" style={{ padding: `${SPACING.xlarge} ${SPACING.large}`, backgroundColor: "white" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: SPACING.large }}>Our Features</h2>
        <FeatureSection />
      </section>

      <section id="why-us">
        <WhyChooseUs />
      </section>

      <section id="testimonials" style={{ padding: `${SPACING.xlarge} ${SPACING.large}`, backgroundColor: "white" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: SPACING.large }}>What Our Customers Say</h2>
        <TestimonialSection />
      </section>

      <section style={{
        padding: `${SPACING.xlarge} ${SPACING.large}`,
        backgroundColor: "#0a0909",
        textAlign: "center",
        color: "blacks"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: SPACING.large }}>Simple, Transparent Pricing</h2>
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
      </section>

      <section style={{
        padding: `${SPACING.xlarge} ${SPACING.large}`,
        backgroundColor: "white",
        maxWidth: "800px",
        margin: "0 auto",
        color: "black",
      }}>
        <h2 style={{ fontSize: "36px", textAlign: "center", marginBottom: SPACING.large, color: "blue" }}>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </section>

      <CallToAction />

      <Footer />
    </div>
  );
};





export default MainHome;
