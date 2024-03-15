import React from "react";

function Header() {
  return (
    <div className="bg-brandGreen h-[32rem] mx-auto flex flex-col justify-center items-start px-12 py-24 gap-6 mt-8 relative md:px-24">
      <p className="font-semibold text-2xl text-center md:text-4xl lg:text-5xl lg:text-start">
        The new phones are
        <br className="hidden lg:block" /> here take a look.
      </p>
      <p className="md:w-2/3 md:text-lg lg:w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in
        est dui, aliquam, tempor. Faucibus morbi turpis.
      </p>
      <button className="border-2 border-black px-8 py-3 lg:px-16">
        Explore
      </button>
      <img
        className="absolute bottom-0 right-0 w-[12rem] md:w-[20rem] lg:w-[25rem]"
        src="/images/header-img.png"
        alt="header-img"
      />
    </div>
  );
}

export default Header;
