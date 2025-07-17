import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* — Intro */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className="about-text">{dataabout.aboutme}</div>
          </Col>
        </Row>

        {/* — Work Experience */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Company</th>
                  <th>Date</th>
                  <th>Stack</th>
                </tr>
              </thead>
              <tbody>
                {worktimeline.map((job, i) => (
                  <tr key={i}>
                    <th scope="row">{job.jobtitle}</th>
                    <td>{job.where}</td>
                    <td>{job.date}</td>
                    <td className="stack-cell">
                      {job.Stack.map((tech, j) => (
                        <div className="stack-item" key={j}>
                          <span className="stack-icon">{tech.icon}</span>
                          <span className="stack-name">{tech.name}</span>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>

        {/* — Skills */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => (
              <div key={i}>
                <h3 className="progress-title">{data.name}</h3>
                <span className="skill-icon">{data.icon}</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${data.value}%` }}
                  >
                    <div className="progress-value">{data.value}%</div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        {/* — Services */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{data.title}</h5>
                <p className="service_desc">{data.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
