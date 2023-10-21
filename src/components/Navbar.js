import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import pdf from "../Assets/CV-SGHIOURI_EL_IDRISSI_Mohammed.pdf";
import logo from "../Assets/logo.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollToSection(section) {
    updateExpanded(false);
    const Section = document.getElementById(section);
    if (Section) {
      window.scrollTo({
        top: Section.offsetTop,
        behavior: "smooth",
      });
    }
  }

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* <Navbar.Brand href="/" className="d-flex">
          <span className="logo">MSI</span>
        </Navbar.Brand> */}
        <Navbar.Brand href="/" style={{ padding: 0 }}>
          <img src={logo} alt="" style={{ height: 42 }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("home")}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("about")}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("formation")}>
                <FaGraduationCap style={{ marginBottom: "2px" }} /> Formation
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => scrollToSection("projects")}>
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={pdf} onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/IdrissiSM"
                target="_blank"
                className="nav-btn-inner"
              >
                <AiFillGithub style={{ fontSize: "1.2em" }} />
              </Button>
              <Button
                href="https://www.linkedin.com/in/sghiouri-el-idrissi-mohammed-42a77a1b2/"
                target="_blank"
                className="nav-btn-inner"
              >
                <AiFillLinkedin style={{ fontSize: "1.2em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
