import React from "react";
import "../css/about.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../images/11.jpg";

import american from "../pics/American-Energy-Logo.png";

function About() {
  return (
    <div
      className="about"
      style={{ backgroundColor: "white", overFlow: "hidden" }}
    >
      <div>
        <div className="home-multibox-banner aboutBanner">
          <h2 className="">About Us</h2>
          <p>
            {" "}
            American Energy is a local, full-service solar company that was
            established in California in 2000. Since the beginning, our main
            objective has been to share the financial and environmental
            advantages of solar renewable energy with both residential and
            commercial clients. Our solar professionals use the best quality
            solar arrays from Sun Power to provide energy systems that are
            designed for durability and provide results. We also use Sun Power
            and Tesla for battery storage to provide maximum energy storage for
            your home, business, or electric vehicles! We are committed to
            customer satisfaction and provide top-tier support to all of our
            customers. We specialize in turn-key implementation of money-saving
            alternatives to utility power that includes design, installation,
            and monitoring.
          </p>
        </div>
      </div>

      {/* 1 long container red bkg */}
      <div className="one-row-container">
        <Row>
          <Col>
            <img alt="#" src={american} style={{ backgroundcolor: "white" }} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
