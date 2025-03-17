// Features.js
import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBrain, // AI Auto Filling
  faChartLine, // Real-Time Gem Tracking
  faDatabase, // Maintain Gem Inventory
  faQrcode, // QR Code Identification
  faComments, // Chat Feature
  faStore, // Marketplace (changed from faMarket to faStore)
} from "@fortawesome/free-solid-svg-icons";

library.add(faBrain, faChartLine, faDatabase, faQrcode, faComments, faStore);

const features = [
  {
    title: "AI Auto Filling",
    content:
      "AI-powered data generation of color and other characteristics reduces human errors in recordkeeping and ensures more accurate data management.",
    icon: faBrain,
  },
  {
    title: "Real-Time Gem Tracking",
    content:
      "Users can receive real-time updates on their gems, providing detailed information about their condition, location, and any significant status changes.",
    icon: faChartLine,
  },
  {
    title: "Maintain Gem Inventory",
    content:
      "Securely store gem records online to prevent data loss. Access your inventory anytime through a protected database with real-time updates.",
    icon: faDatabase,
  },
  {
    title: "QR Code Identification",
    content:
      "Easily access gem details by scanning a QR code. Retrieve comprehensive information instantly, improving efficiency and accuracy.",
    icon: faQrcode,
  },
  {
    title: "Chat Feature",
    content:
      "Connect with successful business owners, exchange insights, and learn strategies to elevate your business to the next level.",
    icon: faComments,
  },
  {
    title: "Marketplace",
    content:
      "An integrated marketplace allows users to easily connect with sellers, facilitating seamless transactions between gem owners and buyers.",
    icon: faStore, // Changed from 'markets' to 'faStore' (valid FontAwesome icon)
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
            EleEYE uses AI-powered detection and real-time community updates to
            prevent elephant-vehicle collisions.
          </p>
        </div>
        <div className="right">
          {features.map((feature, index) => (
            <div className="cardFeature" key={index}>
              <div className="icon-container">
                <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                {index < features.length - 1 && (
                  <div className="connecting-line"></div>
                )}
              </div>
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
