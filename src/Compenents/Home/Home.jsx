import React, { useEffect } from "react";
import "./Home.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    // Add a class to trigger entrance animation when component mounts
    const content = document.querySelector('.home-content');
    if (content) {
      setTimeout(() => {
        content.classList.add('animate-in');
      }, 100);
    }
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 className="fade-in">WELCOME TO MAANIKYA</h1>
        <h3><span className="fade-in">YOUR PERSONAL GEMSTONE ASSISTANT</span></h3>
        <p className="slide-up">Transforming the way gemstones are managed with innovative technology that ensures accuracy, security, and transparency</p>

        <div className="social-icons">
          <a href="https://www.instagram.com/maanikya_lk?igsh=bHU0aHZrcTI1cmJh" target="_blank" rel="noopener noreferrer" className="icon-hover">
            <FaInstagram className="instaIcon" />
          </a>
          <a href="https://www.facebook.com/share/1XjPD8bZsr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="icon-hover">
            <FaFacebook className="facebookIcon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;