import React from "react";
import { products } from "../../assets/siteData";
import ProductItem from "../Product/ProductItem";
import SectionLayout from "../../layouts/SectionLayout";

const CardSwiper = () => {
  return (
    <SectionLayout title="Save on our most selled items." description="Our new Limited Edition Winter Design BESPOKE 4-Door Flex">
              <div className='grid  grid-cols-2 md:grid-cols-4  gap-6 w-full'>
             {products.map((product) => (
                 <ProductItem {...product}/>
             ))}
         </div>
    </SectionLayout>

  );
};

export default CardSwiper;
