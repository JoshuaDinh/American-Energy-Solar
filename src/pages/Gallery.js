import React from "react";
import "../css/gallery.css";
import img from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.jpg";
import img13 from "../images/13.jpg";
import img14 from "../images/14.jpg";
import img15 from "../images/15.jpg";
import img16 from "../images/16.jpg";
import img17 from "../images/17.jpg";
import img18 from "../images/18.jpg";
import img19 from "../images/19.jpg";
import img20 from "../images/20.jpg";
import img21 from "../images/21.jpg";
import img22 from "../images/22.jpg";
import img23 from "../images/23.jpg";
import img24 from "../images/24.jpg";
import img25 from "../images/25.jpg";
import img26 from "../images/26.jpg";
import img27 from "../images/27.jpg";

const images = [
  img,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        {" "}
        <span style={{ color: "rgb(143, 16, 16)" }}>G</span>allery{" "}
      </h1>
      <p
        style={{
          fontSize: "12px",
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Recent Installations
      </p>

      <div className="gallery__container">
        {images.map((image) => {
          return (
            <div
              style={{
                background: `url(${image})`,
                backgroundSize: "cover",
                height: 300,
                border: "1px solid black",
              }}
              className="gallery__image"
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
