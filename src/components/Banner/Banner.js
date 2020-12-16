import React from "react";
import { Link } from "react-router-dom";
import banner from "./banner.css";
import Container from "react-bootstrap/Container";

function Banner() {
  return (
    <div className="banner-img2">
      <div className="banner-box2">
        <Container className="banner-hdr">
          <h1 className=" animate__animated animate__bounceInLeft">
            American Energy
          </h1>
          <p className=" animate__animated animate__bounceInLeft">
            {" "}
            Powering The World With Solar Technology
          </p>
        </Container>
      </div>
      <Container style={{ textAlign: "center", marginTop: 50 }}>
        <Link style={{ textDecoration: "none" }} to="/Services">
          <div className=" main-button2 animate__animated animate__bounceInLeft ">
            Learn more
          </div>
        </Link>
      </Container>
    </div>
  );
}

export default Banner;
