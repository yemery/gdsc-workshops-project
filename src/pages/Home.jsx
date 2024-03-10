import React from "react";
import Header from "../components/Header/Header";
import Shop from "../components/Shop/Shop";

function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <Shop />
    </div>
  );
}

export default Home;
