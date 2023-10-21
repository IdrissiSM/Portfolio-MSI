import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I blend technical expertise with a passion for innovation to create
            user-centric digital solutions, With a commitment to staying current
            in the ever-evolving tech landscape.
            <br /> I'm dedicated to transforming ideas into seamless digital
            experiences.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
