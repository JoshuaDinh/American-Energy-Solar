import React from "react";
import testimonials from "./testimonials.css";
import user1 from "../../pics/user1.png";
import user2 from "../../pics/user2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Testimonials() {
  return (
    <div className="test-container">
      <div className="testimonialBox">
        {" "}
        <img className="test-img" src={user1} alt="user testimonial picture" />
        <p className="test-p">
          {" "}
          "Very nice staff they were able to awnser all of my questions and the
          install was completed ahead of schedule. Thanks again!"
        </p>
        <figcaption className="test-img">-Jess</figcaption>
      </div>
      <div className="testimonialBox">
        <img className="test-img" src={user2} alt="user testimonial picture" />
        <p className="test-p">
          {" "}
          "Customer Service was amazing! Thank you for you all of your help."
        </p>
        <figcaption className="test-img">-Adam R.</figcaption>
      </div>
    </div>
  );
}

export default Testimonials;
