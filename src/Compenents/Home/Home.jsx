import React from "react";
import "./Home.css";
import {FaFacebook, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 id="typing-effect">WELCOME TO MAANIKYA</h1>
        <h3><span>Your Personal Gemstone Assistant</span></h3>
        <p>Transforming the way gemstones are managed with innovative technology that ensures accuracy, security, and transparency</p>

        <div className="social-icons">
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="instaIcon" />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="facebookIcon" />
          </a>
         {/* <a href="https://www.linkedin.com/company/eleeye/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin-square"></i>
          </a>*/}
        </div>
      </div>
{/*
      <div className="home-img">
        <img src="static/ele1.jpg" alt="Elephant" />
      </div>*/}
    </section>
  );
};

export default Home;
