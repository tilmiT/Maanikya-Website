import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1 id="typing-effect">EleEYE</h1>
        <h3><span>Navigate with Confidence</span></h3>
        <p>Monitor elephant movements, mark high-risk zones, and help create safer roads for all...</p>

        <div className="social-icons">
          <a href="https://www.instagram.com/ele_eye" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
         {/* <a href="https://www.linkedin.com/company/eleeye/" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin-square"></i>
          </a>*/}
        </div>
      </div>

      <div className="home-img">
        <img src="static/ele1.jpg" alt="Elephant" />
      </div>
    </section>
  );
};

export default Home;
