import React from 'react'

const FooterColumns = (props) => {
  return (
    <div className='flex flex-col   tex-sm'>
        <h4 className="font-medium">{props.category}</h4>
        <ul className="flex flex-col gap-2 text-xs">
            {props.properties.map((e, index) => (
            <li key={index}>
                <a href={e.path}>{e.label}</a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default FooterColumns