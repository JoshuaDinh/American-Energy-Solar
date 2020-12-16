import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import home from "../css/home.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ScrollAnimation from "react-animate-on-scroll";
import american from "../pics/American-Energy-Logo.png";
import img1 from "../images/1.jpg";
import img5 from "../images/5.jpg";

const Home = () => {
  const [contact, setContact] = useState(false);
  const [button, setButton] = useState(true);

  const setter = () => {
    setButton(false);
    setContact(true);
  };

  const options = () => {};
  return (
    <div>
      <Banner />

      <div style={{ width: "100%" }} className="home-sect">
        <h1
          style={{
            textAlign: "center",
            color: "rgb(143, 16, 16)",
            margin: "1.5em 0 0",
            letterSpacing: 1,
          }}
        >
          How Solar Energy Works?
        </h1>
        <hr className="break"></hr>
        <div className="home-container">
          {" "}
          <div className="home-sect-box">
            <h1> 1</h1>
            <p>
              Sunlight hits the solar panels and generates an electric DC
              current.
            </p>
          </div>
          <div className="home-sect-box">
            <h1>2</h1>
            <p>
              That current flows to the inverter, which converts it to an AC
              current for use in the home.
            </p>
          </div>
          <div className="home-sect-box">
            <h1> 3</h1>
            <p>
              The electrical panel then distributes this electricity throughout
              your home.
            </p>
          </div>
          <div className="home-sect-box">
            <h1>4</h1>
            <p>
              Unused electricity flows back to the grid through the utility
              meter, adding credit to your bill.
            </p>
          </div>
        </div>
      </div>
      {/* side by side image  */}
      <div className="home-core">
        <div className="home-coreTxt">
          {" "}
          <h2>Reduced Cost</h2>
          <h5> Solar Service</h5>
          <p>
            Looking for the perfect solution to reduce your monthly utility
            bills, increase your property value, and take a proactive stance
            toward environmental responsibility? Solar panel installation is the
            answer! Residential solar panels are an affordable, clean and green
            source of energy for homes large and small.
          </p>
        </div>
        <div className="home-coreImg"></div>
      </div>
      <div className="home-core reverse">
        <div className="home-coreTxt">
          {" "}
          <h2> The Benefits of Solar Energy</h2>
          <h5> Custom Solutions</h5>
          <p>
            Solar or photovoltaic panels decrease your home’s dependency on the
            main energy grid, and in turn your power bill. In fact, panels can
            produce more energy than your house needs. There’s no waste, though.
            When that happens, the excess electricity is sent back into the
            power grid. In many states, you are allowed to sell this extra power
            back to the utility company in a process called net metering,
            decreasing your bill even more.
          </p>
        </div>
        <div className="home-coreImg-reverse"></div>
      </div>

      {/* multibox container 3rd section */}
      <div className="mini-div-holder2">
        <div className="home-multibox-banner">
          <h2 className="">American Energy</h2>
          <h4>Our solutions for you</h4>
          <p>
            {" "}
            Getting the most from your solar investment starts with choosing the
            right installer. And at American Energy, we want you to be 100%
            satisfied. That's why it's no wonder 85% of our business comes from
            referrals. Our service approach is simple and straight-forward. We
            take the time to evaluate your energy consumption needs and
            expectations, provide honest transparent quotes, apply for all
            available incentives, secure all permits and HOA approvals — and
            build a top quality solar system engineered specifically for your
            home. You can count on Sunline to deliver solar at competitive
            pricing all backed by our exclusive Energy Performance Guarantee.
          </p>
        </div>
      </div>

      {/* ae service you can trust */}
      <Container>
        <h3 className="mini-home-hdr">
          <span style={{ color: "black" }}> American</span> Energy
        </h3>
        <p className="mini-home-p"> Service You Can Trust</p>
        <hr className="break3"></hr>
      </Container>
      <div className="home__advantages">
        {" "}
        <h4>
          <span style={{ color: "#8f1010" }}>Advantages</span> of Solar Power
        </h4>
      </div>
      <div className="home-advantage-box">
        <div className="home__advantage-item"> Lower electric bills</div>
        <div className="home__advantage-item">
          {" "}
          Net metering: Sell your excess electricity to the utility company for
          even lower energy bills
        </div>
        <div className="home__advantage-item">
          Environmental benefits: Reduce your carbon footprint, and run your
        </div>
        <div className="home__advantage-item">
          Increase your home’s resale value{" "}
        </div>
        <div className="home__advantage-item">
          {" "}
          Take advantage of tax credits from the federal and state government
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
};

export default Home;
