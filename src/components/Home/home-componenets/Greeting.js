import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import photo from "../../../Assets/photo_cv_2.jpg";
import Type from "./Type";
import Aboutcard from "./AboutCard";

const Greeting = () => {
  return (
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          {/* Greeting */}
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              I'M{" "}
              <strong className="main-name">
                SGHIOURI EL IDRISSI <br /> Mohammed
              </strong>
            </h1>
            <div className="type">
              <Type />
            </div>
            <div className="about-card">
              <Aboutcard />
            </div>
          </Col>
          {/* Profil Image */}
          <Col
            md={5}
            className="img-container"
            style={{ paddingBottom: 20, paddingTop: 0 }}
          >
            <img
              src={photo}
              className="banner-img"
              alt="Profil img"
              style={{ maxWidth: "90%" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Greeting;
