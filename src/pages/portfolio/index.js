// pages/projects/index.js
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => (
  <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Projects</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>

      <div className="po_items_ho">
        {dataportfolio.map((proj, idx) => (
          <div key={idx} className="po_item">
            {/* Optional screenshot:
            <img src={proj.img} alt={proj.title} /> */}

            <div className="content">
              <h3>{proj.title}</h3>

              <p>{proj.description}</p>

              <div className="stack">
                {proj.stack.map((tech, i) => (
                  <button key={i}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </button>
                ))}
              </div>

              <a
                href={proj.link}
                className="view-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </HelmetProvider>
);
