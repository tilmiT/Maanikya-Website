import React from "react";
import {FaFacebook, FaInstagram } from "react-icons/fa";

import "./Contact.css";


const Contact = () => {
  return (
    <section id="contact" className="contactSection">
      <div className="contactContainer">
        <h2>Contact Us</h2>
        <p>Feel free to reach out via the form below or connect on social platforms.</p>

        <form
          action="https://formsubmit.co/maanikya.app@gmail.com"
          method="POST"
          className="contactForm"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message"  placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="socialLinks">
         
          <a href="https://www.instagram.com/maanikya_lk?igsh=bHU0aHZrcTI1cmJh" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="instaIcon" />
        </a>
        <a href="https://www.facebook.com/share/1XjPD8bZsr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="facebookIcon" />
        </a>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;
