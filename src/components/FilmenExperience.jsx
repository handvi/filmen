/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../assets/styles/FilmenDevice.css";

function FilmenExperience() {
  return (
    <section className="filmen-experience">
      <Container className="text-center">
        <h2>We Provide You Streaming Experience Across Various Devices</h2>
        <p>With Filmen, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
        
        <Row className="mt-4">
          <Col xs={12} sm={6} md={4}>
            <div className="device-icon">
              <i className="fas fa-desktop"></i>
              <h5>Desktop</h5>
              <p>Filmen provides the best viewing experience on your desktop, allowing you to enjoy your favorite movies and TV shows in crisp, clear quality on a large screen. Whether you"re lounging at home or enjoying a movie marathon, desktop is the ideal platform for maximum comfort.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="device-icon">
              <i className="fas fa-tablet-alt"></i>
              <h5>Tablet</h5>
              <p>Watching movies and TV shows on Filmen via tablet gives you the ultimate convenience in a portable form. With a larger screen than a phone but still compact, you can watch comfortably at home, on the go, or even outside while enjoying crisp visuals and seamless streaming.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="device-icon">
              <i className="fas fa-mobile-alt"></i>
              <h5>Phone</h5>
              <p>Filmen brings entertainment to your fingertips with mobile streaming. No matter where you are, enjoy your favorite films and TV shows on your phone anytime, anywhere, with optimized streaming quality and a user-friendly interface for seamless viewing on the go.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="device-icon">
              <i className="fas fa-laptop"></i>
              <h5>Laptop</h5>
              <p>Filmen offers a perfect balance between portability and screen size on laptops. Enjoy detailed and immersive visuals with a larger display, whether you"re watching at home, in a café, or during work breaks, ensuring a pleasant and flexible streaming experience.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="device-icon">
              <i className="fas fa-tv"></i>
              <h5>TV</h5>
              <p>With Filmen on your TV, you can immerse yourself in a true cinematic experience. Enjoy high-resolution visuals on a large screen in your living room, offering a more engaging and enjoyable way to watch movies and TV shows with family or friends.</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="device-icon">
              <i className="fas fa-vr-cardboard"></i>
              <h5>VR</h5>
              <p>Step into a whole new world of entertainment with Filmen on VR devices. With fully immersive viewing experiences, you"ll feel like you"re inside your favorite movies or TV shows, taking your entertainment to the next level with cutting-edge virtual reality technology.</p>
            </div>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
}

export default FilmenExperience;
