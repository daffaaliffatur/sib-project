import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "animate.css/animate.min.css";

export default function AboutUs() {
  const employees = [
    { name: "Dena Cahya Setia Putri", title: "UI/UX Design", img: "assets/about/img2.png"},
    { name: "Raihan Maulana R", title: "Programmer", img: "assets/about/img3.jpg"},
    { name: "Adelia Khoirunnisa", title: "Project Manager", img: "assets/about/img5.jpg" },
    { name: "Daffa Aliffatur ahnaf", title: "Programmer", img: "assets/about/img1.jpg" },
    { name: "Dian Budi Raharjo", title: "Data Analyst", img: "assets/about/img4.jpg" },
    ];

  return (
    <div>
      <Header background={true} page="about-us" />
      <img
        className="about-background"
        src="assets/backgrounf-2.png"
        alt="about us page"
      />
      <hr/><hr/>
      <div className="about-container">
        <div className="about-title">
          <span></span>
        </div>
      </div>
      <div className="emp-title">Team Members</div>

      <div className="emp-cards">
        {employees.map((emp, index) => {
          return (
            <div className="emp-card" key={index}>
              <div className="emp-card-info">
                <div className="emp-card-info-name">{emp.name}</div>
                <div className="emp-card-info-title">{emp.title}</div>
              </div>

              <img className="emp-image" src={emp.img} alt="emp" />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
