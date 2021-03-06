import React from "react";
import Container from "react-bootstrap/Container";
import info from "../css/info.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import american from "../pics/American-Energy-Logo.png";

function Info() {
  return (
    <div>
      <div className="benefits">
        <h1>Solar Energy Benefits</h1>
      </div>
      <Container className="info-sct">
        <ol>
          {" "}
          <li>
            {" "}
            <span>Zero energy-production costs</span> As we mentioned before,
            solar energy doesn’t require any outside supply to work, so its
            maintenance and energy production costs are practically zero. The
            only cost associated with the use of solar energy is the manufacture
            and installation of the components. This means that despite the
            large initial investment, there are{" "}
            <span>no additional costs associated</span>
            with its use, so the installation is recovered quickly.
          </li>
          <li>
            {" "}
            <span> Less energy lost</span> during long-distance transport Losses
            during transport and distribution of energy increase with the
            distance between the production and supply points. Although these
            losses are not very large, they do affect the performance of the
            installation in densely-populated areas. On the other hand, with the
            individual installation of photovoltaic panels on rooftops, the
            distances are drastically reduced, increasing the efficiency of the
            electrical system.
          </li>
          <li>
            <span>Versatile installation</span> The easy and simplicity of the
            installation means that it can be installed almost anywhere, taking
            advantage of both vertical and horizontal spaces with no specific
            use. This aspect, along with the modularity and flexibility of the
            system, facilitates the installation of small-scale solar projects
            with the added advantage that the installation can be expanded
            depending on the needs at any given time. But the most interesting
            advantage is the possibility of providing electricity in remote
            locations, where the cost of installing electrical distribution
            lines is too high or unfeasible.
          </li>
          <li>
            <span>Energy production </span>coincides with the times of maximum
            demand The periods with the highest energy demand are concentrated
            in the time slots between 11:00 and 16:00 and to a lesser extent,
            from 20:00 to 23:00. In systems based on the constant production of
            energy by power plants, the price of energy increases sharply during
            times of peak demand. With solar energy, on the other hand, energy
            production reaches its maximum during the period of the day when
            demand is highest. In fact, in electricity markets with large-scale
            solar energy production, the additional supply of energy during peak
            times may reduce electricity prices during the mid-day time periods
            to levels similar to those of the night-time hours.
          </li>
          <li>
            The production of solar energy doesn’t generate noise pollution,
            which is an important aspect to take into account for installations
            in urban areas. It also <span>doesn’t generate any waste </span>
            because it <span>doesn’t need maintenance</span> and its lifetime is
            far longer than other energy-production systems. In fact, solar
            panels are designed to withstand the impact of the environment in
            extreme weather situations.
          </li>
          <li>
            This is an important indirect benefit that has a direct impact on
            the efficiency of the power grid in the case of the common problems
            of blackouts and voltage dips. The possibility of introducing solar
            power from thousands or even millions of individual
            energy-production centres{" "}
            <span>improves the security on the power grid</span>
            against overloads or fires in transformer substations.
          </li>
          <li>
            The production of clean energy from the sun
            <span>significantly reduces costs</span>, because it is an
            inexhaustible source of energy that isn’t subject to market
            fluctuations or the effects generated by speculation. As mentioned
            before, it requires a significant initial investment that is offset
            by the rapid amortisation of the investment. And most importantly,
            it is an <span>unlimited and continuous source of energy </span>that
            doesn’t require any additional maintenance or usage costs.
            Nevertheless, the latest technological advances point towards a
            significant drop in the prices of the components required to
            manufacture the panels, which will translate into more efficient and
            affordable solar cells.
          </li>
        </ol>
      </Container>
      {/* 1 long container red bkg */}
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

export default Info;
