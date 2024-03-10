import React from "react";
import HeadingTitle from "../commons/HeadingTitle";
import { shopSectionData } from "../../assets/siteData";
import ShopItems from "../commons/ShopItems";

function Shop() {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="text-center">
        <HeadingTitle title="Shop our latest offers and categories" />
        <p className="w-1/2 text-sm font-medium mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex w-full justify-around">
        {shopSectionData.map((e) => (
          <ShopItems {...e} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
