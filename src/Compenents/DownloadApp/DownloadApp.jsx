import React from "react";
import "./DownloadApp.css";

const DownloadApp = () => {
  return (
    <section className="download-app" id="download">
      <h2>Download Our App</h2>
      <p>Get the Maanikya app for the best gemstone management experience.</p>
      <div className="download-buttons">
        {/* <a href="https://play.google.com/store/apps/details?id=com.maanikya" target="_blank" rel="noopener noreferrer" className="download-button">
          Download on Google Play
        </a>
        <a href="https://apps.apple.com/us/app/maanikya/id123456789" target="_blank" rel="noopener noreferrer" className="download-button">
          Download on the App Store
        </a> */}
        <a href="#" rel="noopener noreferrer" className="download-button">
          Coming Soon on AppGallery
        </a>
      </div>
    </section>
  );
};

export default DownloadApp;