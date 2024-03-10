import React from "react";

function ShopItems(props) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <img src={props.image} className="h-32" alt={props.label} />
      <p className="font-semibold text-xl capitalize">{props.label}</p>
    </div>
  );
}

export default ShopItems;
