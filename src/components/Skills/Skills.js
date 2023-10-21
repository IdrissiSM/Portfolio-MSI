import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";

function Skills() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <h1 className="section-heading">
          <strong>Skills</strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default Skills;
