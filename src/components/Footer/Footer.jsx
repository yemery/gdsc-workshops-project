import React from "react";
import FooterColumns from "./FooterColumns";
import { footerData } from "../../assets/siteData";
function Footer() {
  return (
    <footer className="bg-[#F8F9FA] py-8 mt-7">
      <div className="max-w-screen-xl flex justify-between flex-col md:flex-row mx-auto p-4 gap-4">
        <div className=" flex flex-col gap-y-1">
          <img src="/logo.svg" alt="" className="w-[170px] h-[21px]" />
          <p className="text-xs">© 2024. All rights reserved</p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-5 gap-x-9">
          {footerData.map((e) => (
            <FooterColumns {...e} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
