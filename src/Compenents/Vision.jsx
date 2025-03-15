import React from "react";
//import "../styles/WhyEleEYE.css";

const stats = [
  { target: 470, text: "Elephants killed in 2023" },
  { target: 70, text: "Elephants met with accidents or natural causes" },
  { target: 23, text: "Elephants run over by trains" },
  { target: 184, text: "People killed by elephants in 2023" },
  { target: 45, text: "People killed in 2024" },
  { target: 150, text: "Elephants killed in first 5 months of 2024" }
];

const Vision = () => {
  return (
    <section className="why" id="why">
      <h2 className="section-title">Why <span>EleEYE?</span></h2>
      <div className="counter-container">
        {stats.map((item, index) => (
          <div className="counter-box" key={index}>
            <span className="counter">{item.target}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <p>These numbers highlight the urgent need for a solution...</p>
    </section>
  );
};

export default Vision;
