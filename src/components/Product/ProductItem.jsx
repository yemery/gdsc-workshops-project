import React from 'react'

const ProductItem = (props) => {
  return (
    

<div className="flex flex-col px-3">
 <div className='flex-1' >
        <img className="w-full h-full" src={props.img} alt=""  />
  </div>
    <div className="flex flex-col gap-2">
        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">{props.title}</h4>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400">{props.description.substring(0,100)}...</p>
        <p>{props.price}</p>
    </div>
</div>

  )
}

export default ProductItem