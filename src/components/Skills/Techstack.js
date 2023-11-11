import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVisualstudio,
  SiPycharm,
  SiIntellijidea,
  SiAndroidstudio,
  SiGit,
  SiGithub,
  SiWindows,
  SiLinux,
  SiMicrosoftsqlserver,
  SiSwagger,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      <Row>
        <h1 className="project-heading">
          <span className="purple">Programming Languages</span>
        </h1>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-c-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-cplusplus-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-csharp-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-java-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-php-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-python-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-javascript-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-typescript-plain"></i>
        </Col>
      </Row>
      <Row>
        <h1 className="project-heading">
          <span className="purple">Frameworks</span>
        </h1>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-bootstrap-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-react-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-angularjs-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-nodejs-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-dotnetcore-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-spring-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-laravel-plain"></i>
        </Col>
      </Row>
      <Row>
        <h1 className="project-heading">
          <span className="purple">Database</span>
        </h1>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-mysql-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-sqlite-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-firebase-plain"></i>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <i class="devicon-mongodb-plain"></i>
        </Col>
      </Row>
      <Row>
        <h1 className="project-heading">
          <span className="purple">Tools</span>
        </h1>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPycharm />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiIntellijidea />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAndroidstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMicrosoftsqlserver />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSwagger />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithub />
        </Col>
      </Row>
      <Row>
        <h1 className="project-heading">
          <span className="purple">Operating Systems</span>
        </h1>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiWindows />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiLinux />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
