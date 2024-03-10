import React from "react";
import Header from "../components/Header/Header";
import Shop from "../components/Shop/Shop";
import NewsletterSection from "../components/Newsletter/NewsletterSection";
import CardSwiper from "../components/SwiperSection/CardSwiper";

const Home = () => {
  return (
    <>
      <Header />
      <Shop />
      <CardSwiper />
      <NewsletterSection />
    </>
  );
};

export default Home;
