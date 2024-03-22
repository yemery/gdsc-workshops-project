import React from 'react'
import SectionLayout from '../../layouts/SectionLayout'
import HeadingTitle from '../commons/HeadingTitle'

const AboutSection = () => {
  return (
    <div className='flex flex-col gap-5'>
        <HeadingTitle title='Ideas have a place here' description='Our new Limited Edition Winter Design BESPOKE 4-Door Flex™'/>
         <div className='grid  grid-cols-1 md:grid-cols-2 gap-2'>
     
    <img src="images/about.svg" alt=""  className='w-full h-full object-cover'/>
      
        <div className='md:text-base text-sm w-full h-full flex flex-col justify-center gap-3'>
            <h3 className='font-medium'>Our Story</h3>
            <p className='leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque 
                in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam,
                tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi
                turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet,
                </p> 
        </div>
      </div>
    </div>
  )
}

export default AboutSection