import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "./Data.js";

export const Projects = () => {
  const projects = data;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="project project-section" id="projects">
      <Container style={{ margin: 0 }}>
        <Row>
          <Col size={12} styele={{ paddingRight: 0 }}>
            <div>
              <h1 className="section-heading">
                <strong>Projects</strong>
              </h1>
              <Carousel responsive={responsive}>
                {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
