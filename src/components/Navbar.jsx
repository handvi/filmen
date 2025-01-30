/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Search, Bell } from "react-feather";
import "../assets/styles/Navbar.css";

const NavbarUp = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timer;
    const handleScroll = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setScrolled(window.scrollY > 50);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`custom-navbar ${scrolled ? "scrolled" : ""}`} fixed="top">
      <Container>
        <Navbar.Brand href="#" className="text-white fs-4 logo-text">FILMEN</Navbar.Brand>
        <Nav className="mx-auto d-flex gap-4">
          <Nav.Link href="#" className="text-white fs-5 nav-link-custom">Home</Nav.Link>
          <Nav.Link href="#" className="text-white fs-5 nav-link-custom">Movies</Nav.Link>
          <Nav.Link href="#" className="text-white fs-5 nav-link-custom">Series</Nav.Link>
          <Nav.Link href="#" className="text-white fs-5 nav-link-custom">Trending</Nav.Link>
        </Nav>
        <div className="d-flex align-items-center gap-4">
          <Search color="white" size={20} className="nav-icon"/>
          <Bell color="white" size={20} className="nav-icon"/>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarUp;
