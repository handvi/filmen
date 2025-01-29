/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Experience Filmen</h1> 
        <p>
          Immerse yourself in a world of cinematic wonders. Explore the latest
          blockbusters, discover hidden gems.
          With Filmen, you’re just a click away from the best movies and TV
          shows. Join us and start your adventure now.
        </p> <br />
        <a href="#watch-now" className="btn-watch">
          <i className="fas fa-play"></i> 
          <span> Watch Now</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

