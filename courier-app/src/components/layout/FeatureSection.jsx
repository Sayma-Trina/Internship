import React from "react";
import { COLORS, SPACING } from "../../constants/colors";
import { QuickFeatureCard } from "../common/QuickFeatureCard";

export const FeatureSection = () => {
  const features = [
    {
      icon: "🌍",
      title: "Nationwide Coverage",
      description: "We deliver to every corner of Bangladesh, from city centers to rural villages."
    },
    {
      icon: "⏱️",
      title: "Express Delivery",
      description: "Our express delivery option ensures your package reaches its destination in record time."
    },
    {
      icon: "📈",
      title: "Real-time Tracking",
      description: "Stay updated with real-time tracking for every step of your parcel's journey."
    },
    {
      icon: "💼",
      title: "Business Solutions",
      description: "Tailored logistics solutions for small and large businesses to optimize supply chains."
    },
    {
      icon: "🤝",
      title: "Reliable Support",
      description: "Our customer support team is available 24/7 to help you with any questions or issues."
    },
    {
      icon: "🔒",
      title: "Secure Handling",
      description: "Your parcels are handled with care and protected by our comprehensive insurance policy."
    }
  ];

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: SPACING?.large || "24px",
    marginTop: SPACING?.xlarge || "48px",
  };

  return (
    <div style={gridStyle}>
      {features.map((feature, index) => (
        <QuickFeatureCard 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};
