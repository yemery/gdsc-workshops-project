import React from "react";

function Header() {
  return (
    <div className="bg-brandGreen w-4/5 h-[26rem] mx-auto flex flex-col items-start px-8 py-24 gap-6 mt-8 relative">
      <p className="font-semibold text-5xl w-1/2">
        The new phones are here take a look.
      </p>
      <p className="w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in
        est dui, aliquam, tempor. Faucibus morbi turpis.
      </p>
      <button className="border-2 border-black px-16 py-3">Explore</button>
      <img
        className="absolute bottom-0 right-0 w-[30rem]"
        src="/header-img.png"
        alt="header-img"
      />
    </div>
  );
}

export default Header;
