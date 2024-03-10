import React from 'react'

const ProductItem = (props) => {
  return (
    

<div className="max-w-sm bg-white ">
    <a href="#" className=''>
        <img className="" src={props.img} alt=""  />
    </a>
    <div className="">
        <a href="#">
            <h5 className="font-medium tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        </a>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400">{props.description.substring(0,100)}...</p>
        <p>{props.price}</p>
    </div>
</div>

  )
}

export default ProductItem