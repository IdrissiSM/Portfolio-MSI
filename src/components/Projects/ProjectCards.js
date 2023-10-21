import { Col } from "react-bootstrap";
import { ImageCarousel } from "./ImageCarousel.js";
import {
  AiFillChrome,
  AiFillGithub,
  AiOutlineVideoCamera,
} from "react-icons/ai";

export const ProjectCard = ({
  title,
  description,
  githubRepo,
  demo,
  link,
  imgUrls,
}) => {
  return (
    <Col style={{ padding: 20 }}>
      <div className="proj-imgbx">
        <ImageCarousel imgUrls={imgUrls} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {/* GitHub Reposiory */}
          <ul className="home-about-social-links">
            {githubRepo ? (
              <li className="social-icons">
                <a
                  href={githubRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            ) : (
              <></>
            )}
            {/* Demo */}
            {demo ? (
              <li className="social-icons">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineVideoCamera />
                </a>
              </li>
            ) : (
              <></>
            )}
            {/* Preview Link */}
            {link ? (
              <li className="social-icons">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillChrome />
                </a>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </Col>
  );
};
