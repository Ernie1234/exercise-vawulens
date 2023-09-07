import React from "react";
import "./home.css";
import HomeHeader from "../../components/HomeHeader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import FAQS from "../../components/FAQS";
import Testimonial from "../../components/Testimonial";


function Home() {
  return (
    <>
      <HomeHeader />
      <Programs />
      <Values />
      <FAQS />
      <Testimonial />

    </>
  );
}

export default Home;
