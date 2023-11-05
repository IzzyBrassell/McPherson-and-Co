import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import Logo from "./logo";

const topOfPage = () => {
    return(
        <Navbar bg="transparent" expand="lg" className="bg-dark">
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-light">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">"A Step Above Others"</Nav.Link>
            <Nav.Link href="#services">Shop</Nav.Link>
            <Nav.Link href="#Commisions">Custom Orders</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default topOfPage;