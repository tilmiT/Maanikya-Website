import React from 'react';
import './Vision.css'; 

const Vision = () => {
  return (
    <section className="gem-registration">
      <h2 className="title">How It Workers</h2>
      <p className="subtitle">Effortlessly register your gemstones with our intuitive platform.</p>

      <div className="cards-container">
        <div className="card">
          <h3>User-Friendly Interface</h3>
          <p>
            Our platform features a straightforward user interface that guides you through the registration process. You can easily input gemstone details including type, color, and carat weight, ensuring accurate and complete records with minimal effort.
          </p>
        </div>

        <div className="card">
          <h3>Comprehensive Data Input</h3>
          <p>
            Each gemstone can be documented with essential specifications, such as origin and certification details. This comprehensive data collection not only enhances the value of your inventory but also ensures that every gem is tracked with precision.
          </p>
        </div>

        <div className="card">
          <h3>Instant Confirmation</h3>
          <p>
            Once the registration is completed, you receive an instant confirmation with a unique ID for each gemstone. This feature allows for immediate access to your registered gemstones, facilitating easy management and verification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;