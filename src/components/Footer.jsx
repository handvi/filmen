/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-section">
          <h3>Home</h3>
          <ul>
            <li>Categories</li>
            <li>Devices</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Movies</h3>
          <ul>
            <li>Genre</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Shows</h3>
          <ul>
            <li>Genre</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Subscription</h3>
          <ul>
            <li>Plans</li>
            <li>Features</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <span>&copy; 2023 Filmen, All Rights Reserved</span>
        </div>
        <div className="footer-right">
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
