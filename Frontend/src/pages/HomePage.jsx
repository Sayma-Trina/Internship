import React from "react";
import '../styles/index.css';

export const Home = (props) => {
  return (
    <div className='card'>
      <img src={props.image} className="foodimg"/>
      <p style={{ color: "#ebe3e3", fontSize: "20px", fontWeight: "bold" }}>
        {props.title}
      </p>
      <button>
        View Details
      </button>
    </div>
  );
};

export const FeatureCard = ({ image, title, description }) => {
  const cardStyle = {
    flex: 1,
    margin: "0 20px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "400px",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "15px",
    color:"black",
  };

  const descStyle = {
    fontSize: "16px",
    color: "#3f15d8",
    lineHeight: "1.6",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <h2 style={titleStyle}>{title}</h2>
      <p style={descStyle}>{description}</p>
    </div>
  );
};

export const track=()=>{
return(
      <h1 style={{ marginBottom: "10px", color: "#1a1dca" }}>
        Track Your Order
      </h1>
);

};