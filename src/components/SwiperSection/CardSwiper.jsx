import React from 'react'
import { products } from '../../assets/siteData'
import ProductItem from '../Product/ProductItem'

const CardSwiper = () => {
  return (
    
        <div className='flex flex-col gap-y-3'>
            <div className='flex flex-col w-full items-center justify-center text-center'>
                <h4 className='text-xl font-medium'>Save on our most selled items.</h4>
                <p className='text-sm'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            </div>
            <div className='grid  grid-cols-2 md:grid-cols-4  gap-6'>
                {products.map((product) => (
                    <ProductItem {...product}/>
                ))}
            </div>
        </div>
  
  )
}

export default CardSwiper