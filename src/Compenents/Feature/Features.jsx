import React from "react";
import"./Features.css"; 

const features = [
  {
    title: "AI Auto Filling",
    content: "AI-powered data generation of colour and other characteristics reduces human errors in recordkeeping and allows for more appropriate data accuracy."
  },
  {
    title: "Real Time Gem Tracking",
    content: "Users can get real time updates on gems about there currewnt statusUsers can receive real-time updates about the status of gems, including detailed information on their availability, quality, and current condition. These updates provide users with immediate insights, ensuring they are always informed about the latest developments and can make timely decisions regarding the gems they are tracking or interested inUsers can receive real-time updates on the status of their gems, providing them with detailed information about their current condition, location, and any significant changes or alerts"
  },
  {
    title: "Maintain Gem Inventory",
    content: "Storing records online will reduce the possibility of misplacement or loss of data. One can securely log into an online database at any given time to get recorded information about the gem"
  },
  {
    title: "QR Code Indentification",
    content: "Accessing gem information has never been easier simply scan the QR code to retrieve comprehensive details at your fingertips."
  },
  
];

const Features = () => {
  return (
    <section id="features">
      <div className="stack-area">
        <div className="left">
          <h2 className="title">
            Our <span>Features</span>
          </h2>
          <p className="sub-title">
            EleEYE uses AI-powered detection and real-time community updates to prevent elephant-vehicle collisions.
          </p>
        </div>
        <div className="right">
          {features.map((feature, index) => (
            <div className="card" key={index}>
              <h3 className="sub">{feature.title}</h3>
              <p className="content">{feature.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
