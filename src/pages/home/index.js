import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => (
  <HelmetProvider>
    <section id="home" className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <div className="intro_sec d-block d-lg-flex align-items-center">
        <div
          className="h_bg-image order-1 order-lg-2 h-100"
          style={{ backgroundImage: `url(${introdata.your_img_url})` }}
        />

        <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
          <div className="align-self-center">
            <div className="intro mx-auto">
              <h2 className="mb-1x">{introdata.title}</h2>
              <h1 className="fluidz-48 mb-1x">
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                      introdata.animated.third,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </h1>
              <p className="mb-1x">{introdata.description}</p>

              <div className="intro_btn-action pb-5">
                {/* <-- Change this: */}
                <a
                  href="/Mohammed_Shaheed_Afridi_Resume_Updated_ (2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text_2"
                >
                  <div id="button_p" className="ac_btn btn">
                    MY Resume
                    <div className="ring one" />
                    <div className="ring two" />
                    <div className="ring three" />
                  </div>
                </a>

                {/* Contact can stay */}
                <Link to="/contact" className="text_2">
                  <div id="button_h" className="ac_btn btn">
                    Contact Me
                    <div className="ring one" />
                    <div className="ring two" />
                    <div className="ring three" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </HelmetProvider>
);
