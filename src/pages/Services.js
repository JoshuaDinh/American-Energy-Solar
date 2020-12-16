import React from "react";
import "../css/service.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "../pics/ratings.png";
import Testimonials from "../components/testimonials/Testimonials";
import ScrollAnimation from "react-animate-on-scroll";
import american from "../pics/American-Energy-Logo.png";
import service1 from "../pics/service1.jpg";
import service2 from "../pics/service2.jpg";
import service3 from "../pics/service3.jpg";
import service4 from "../pics/service4.jpg";

function Service() {
  return (
    <div>
      <div className="mini-div-holder2">
        <div className="multi-box">
          <div className="home-multibox-banner serviceMultiBox">
            <h2 className="">American Energy</h2>
            <h4 style={{ color: "white", marginTop: 7 }}>
              We deliver a full spectrum of solar services
            </h4>
            <Link
              style={{ textDecoration: "none", marginTop: 35 }}
              to="/Contact"
            >
              <div className=" main-button2 animate__animated animate__bounceInLeft ">
                Contact Us
              </div>
            </Link>{" "}
          </div>
        </div>
      </div>
      {/* service 6 box */}

      <Container className="service-sect">
        <div>
          <Container>
            <h1 className="service-sect-main-hdr">
              Service you can<span> Trust!</span> !
            </h1>

            <hr className="break3"></hr>
          </Container>
        </div>
      </Container>
      <div className="service__residential">
        <h1 className="service__residential-title">
          Residential<p style={{ fontSize: 16, marginLeft: 5 }}>Installation</p>
        </h1>
        <div className="service__residential-img">
          {" "}
          <img src={service1} />
        </div>
      </div>
      <div className="service__commercial">
        <div className="service__residential-img">
          {" "}
          <img src={service2} />
        </div>
        <h1 className="service__residential-title">
          Commercial<p style={{ fontSize: 16, marginLeft: 5 }}>Installation</p>
        </h1>
      </div>
      <div className="service__commercial"></div>
      <div className="service__residential">
        <h1 className="service__residential-title">
          Solar Energy<p style={{ fontSize: 16, marginLeft: 5 }}>Storage</p>
        </h1>
        <div className="service__residential-img">
          {" "}
          <img src={service3} />
        </div>
      </div>
      <div className="service__commercial">
        <div className="service__residential-img">
          {" "}
          <img src={service4} />
        </div>
        <h1 className="service__residential-title">
          Service<p style={{ fontSize: 16, marginLeft: 5 }}>& Maintenenance</p>
        </h1>
      </div>
      <h2 className="rating-hdr">Customer Feedback</h2>
      <Testimonials />

      <div className="one-row-container">
        <Row className="one-container">
          <Col>
            <img alt="#" src={american} style={{ backgroundcolor: "white" }} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Service;
