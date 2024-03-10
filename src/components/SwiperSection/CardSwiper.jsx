import React from 'react'
import { products } from '../../assets/siteData'
import ProductItem from '../Product/ProductItem'

const CardSwiper = () => {
  return (
    <div className='p-10'>
        <div>
            <div className='flex flex-col w-full items-center justify-center'>
                <h4>Save on our most selled items.</h4>
                <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            </div>
            <div className='grid grid-cols-4'>
                {products.map((product) => (
                    <ProductItem {...product}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default CardSwiper