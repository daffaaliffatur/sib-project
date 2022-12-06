import React from "react";
import { useNavigate } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Section1() {
  let navigate = useNavigate();

  return (
    <div className="section-1">
      <div className="background">
        <Carousel>
          <Carousel.Item>
            <div className="section-2">
            <img
                className="d-block w-100"
                src="assets/backgrounf-2.png"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="section-2">
              <img
                className="d-block w-100"
                src="assets/backgrounf-1.jpg"
                alt="second slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="title">
        <span>SISTEM KAMERA KABIN KENDARAAN</span>
      </div>

      <div className="sub-title">Berkendaralah dengan aman.</div>

      <div className="buttons">
        <a style={{ textDecoration: "none" }} href="/camera">
          <div className="button-primary">Let's Start</div>
        </a>
        <div
          className="button-secondary"
          onClick={() => {
            navigate("/about-us");
          }}
        >
          About Us
        </div>
      </div>
    </div>
  );
}
