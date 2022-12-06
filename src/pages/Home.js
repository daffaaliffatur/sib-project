import React from "react";
import Section1 from "../components/Section1";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header page="home" />
      <hr/>
      <hr/>
      <hr/>
      <Section1 />
      <Footer />
    </div>
  );
}
