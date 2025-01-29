/* eslint-disable no-unused-vars */
import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "../assets/styles/FAQ.css";

function ForAnswer() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Filmen?</Accordion.Header>
            <Accordion.Body>
              Filmen is a streaming platform where you can enjoy movies and TV shows anytime, anywhere. It provides high-quality content for your entertainment.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I sign up for Filmen?</Accordion.Header>
            <Accordion.Body>
              Signing up for Filmen is easy. Simply visit our website and click the "Sign Up" button. Fill in your details and start watching!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I use Filmen on multiple devices?</Accordion.Header>
            <Accordion.Body>
              Yes, you can use Filmen on multiple devices including smartphones, tablets, laptops, smart TVs, and more.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>What devices are supported by Filmen?</Accordion.Header>
            <Accordion.Body>
              Filmen is compatible with a wide range of devices including iOS, Android, Smart TVs, and most modern web browsers.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>How do I cancel my subscription?</Accordion.Header>
            <Accordion.Body>
              You can cancel your Filmen subscription through your account settings under the "Subscription" section.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default ForAnswer;
