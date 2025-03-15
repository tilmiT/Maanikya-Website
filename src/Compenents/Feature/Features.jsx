import React from "react";
import"./Features.css"; 

const features = [
  {
    title: "Real-Time Detection",
    content: "AI-powered system continuously scans for elephants near roadways, providing instant location updates."
  },
  {
    title: "Community Reporting",
    content: "Users can report and verify elephant sightings, ensuring real-time accuracy through crowd-sourced data."
  },
  {
    title: "Automatic Warnings",
    content: "Smart warning lights activate on-site when an elephant is detected nearby, reducing the risk of collisions."
  },
  {
    title: "Mobile Notifications",
    content: "Receive instant alerts on your phone when approaching elephant zones, allowing you to take precautions in advance."
  },
  {
    title: "Offline Support",
    content: "EleEYE stores critical updates so you can access recent elephant sightings even in low-connectivity areas."
  },
  {
    title: "24/7 Monitoring",
    content: "AI-powered surveillance works round the clock, ensuring continuous tracking of elephant movements."
  }
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
