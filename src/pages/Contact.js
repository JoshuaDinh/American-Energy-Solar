import React from "react";
import "../css/contact.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DescriptionIcon from "@material-ui/icons/Description";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__phone">
        <h5 style={{ fontSize: 30, marginBottom: 30 }}>
          {" "}
          <span>A</span>MERICAN <span>E</span>NERGY
        </h5>{" "}
        <ul>
          <li>
            <span>Company Main:</span> (760) 876-3022
          </li>
          <li>
            {" "}
            <span>Toll-Free:</span> (855) 949-0435
          </li>
          <li>
            {" "}
            <span>Fax:</span> (760) 876-3023
          </li>
        </ul>
        <p>AmericanEnergySD@Gmail.com</p>
        <ul>
          <li>711 Center Drive Suite 105-501, San Marcos, CA 92069</li>
        </ul>
        <ul>
          <li>
            <span>License #:</span> 1011427
          </li>
          <li>
            <span>Bond #:</span> 100300520
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
