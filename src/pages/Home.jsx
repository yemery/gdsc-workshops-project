import React from "react";
import Header from "../components/Header/Header";
import Shop from "../components/Shop/Shop";
import NewsletterSection from "../components/Newsletter/NewsletterSection";
import CardSwiper from "../components/SwiperSection/CardSwiper";
import AboutSection from "../components/About/AboutSection";

const Home = () => {
  return (
    <>
      <Header />
      <Shop />
      <AboutSection />
      <CardSwiper />
      <NewsletterSection />
    </>
  );
};

export default Home;
