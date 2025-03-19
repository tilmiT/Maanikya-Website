import React from "react";
//import "./App.css";
import Header from "./Compenents/Header/Header";
import Home from "./Compenents/Home/Home";
import Vision from "./Compenents/Vision/Vision";
import Features from "./Compenents/Feature/Features";
import Team from "./Compenents/Team/Team";
import Footer from "./Compenents/Footer/Footer";
import Contact from "./Compenents/Contact/Contact";
import DownloadApp from "./Compenents/DownloadApp/DownloadApp";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Vision />
      <Features />
      <Team />
      <DownloadApp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
