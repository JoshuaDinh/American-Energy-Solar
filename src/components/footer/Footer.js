import React from "react";
import footer from "./footer.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
function Footer() {
  return (
    <div>
      <footer style={{ padding: 110 }} class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>Evironmentally Friendly</h6>
              <p className="text-justify">
                Phone: (760) 876-3022
                <br></br>
                Address: 711 Center Drive Suite 105-501, San Marcos, CA 92069
              </p>
            </div>
            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <Link to="./About" href="http://scanfcode.com/about/">
                  About Us
                </Link>
                <br></br>
                <Link to="./Contact" href="http://scanfcode.com/contact/">
                  Contact Us
                </Link>
                <br></br>
                <Link
                  to="./Services"
                  href="http://scanfcode.com/contribute-at-scanfcode/"
                >
                  Services
                </Link>
                <br></br>
                <Link to="./Info" href="http://scanfcode.com/privacy-policy/">
                  Info
                </Link>
              </ul>
            </div>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <Link to="./contact">
                <div className=" footer-button">Contact Us </div>
              </Link>
            </div>
          </div>
          <hr></hr>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by AmericanEnergy
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <Link to="./" class="facebook" href="#">
                  <FacebookIcon />{" "}
                </Link>
                <Link to="./" class="twitter" href="#">
                  <TwitterIcon />{" "}
                </Link>
                <Link to="./" class="dribbble" href="#">
                  <InstagramIcon />{" "}
                </Link>
                <Link to="./" class="linkedin" href="#">
                  <LinkedInIcon />{" "}
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
