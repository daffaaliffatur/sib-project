import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";



export default function Camera() {
  let navigate = useNavigate();
  return (
    <div>
      <Header background={true} page="camera" />
      <img
        className="about-background"
        src="assets/backgrounf-2.png"
        alt="about us page"
      />
      <div className="about-container">
        <div className="about-title">
          <span>DROWSINESS DETECTION</span>
        </div>
      </div>
      <div className="about-sub-title">Whether it’s due to medication, a sleep disorder or a poor night’s rest, new research points to the risks and potential dangers of drowsy driving. Missing one to two hours of the recommended seven hours of sleep a night nearly doubles the risk of a car accident.Sleepiness can come without warning, 
        so drivers should prioritize getting enough sleep and avoid driving when they are fatigued.
        </div>
      <hr class="my-4"/>
      <p class="about-sub-title">
      
        The best drivers are aware that they must be beware.</p>
        <hr></hr>
        
        
        <div className="q-buttons">
          <div className="contact-container-button">
          <a style={{ textDecoration: "none",backgroundColor: "#2E7D32",
                  color: "white",
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: "2px",
                  padding: "6px 26px",
                  boxShadow: "0px 1px 3px rgb(50,50,50)", }} href="/#information">
          Start
        </a>
        </div>
      </div>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
      
      <Footer />
    </div>
  );
}
