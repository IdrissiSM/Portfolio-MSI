import React from "react";
import { Container } from "react-bootstrap";
import { FaUserGraduate } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Formation() {
  return (
    <Container fluid className="formation-section" id="formation">
      <h1 className="section-heading">
        <strong>Formation</strong>
      </h1>
      <VerticalTimeline>
        {/* Formation 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2d1950", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(178, 121, 216, 0.959)",
          }}
          date="2021 - present"
          iconStyle={{
            background: "rgb(178, 121, 216)",
            color: "#fff",
          }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">
            Engineering Cycle - Computer Science.
          </h3>
          <p style={{ marginTop: 5 }}>National School of Applied Sciences.</p>
          <p className="location">
            <ImLocation2 style={{ marginBottom: 3 }} /> Oujda
          </p>
        </VerticalTimelineElement>
        {/* Formation 2 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2d1950", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(178, 121, 216, 0.959)",
          }}
          date="2019 - 2021"
          iconStyle={{
            background: "rgb(178, 121, 216)",
            color: "#fff",
          }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">
            Preparatory Cycle - Sciences and Techniques for engineers.
          </h3>
          <p>National School of Applied Sciences.</p>
          <p className="location">
            <ImLocation2 style={{ marginBottom: 3 }} /> Oujda
          </p>
        </VerticalTimelineElement>
        {/* Formation 3 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#2d1950", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  rgba(178, 121, 216, 0.959)",
          }}
          date="2019 - 2021"
          iconStyle={{
            background: "rgb(178, 121, 216)",
            color: "#fff",
          }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of science physics.
          </h3>
          <p>El Kindi High School.</p>
          <p className="location">
            <ImLocation2 style={{ marginBottom: 3 }} /> Berkane
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}

export default Formation;
