import React from "react";

function HeadingTitle(props) {
  return(

<div className="text-center">
   <p className="text-xl font-medium">{props.title}</p>
   <p className="text-sm">{props.description}</p>
  </div>
  )
}

export default HeadingTitle;
