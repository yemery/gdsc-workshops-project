import React from "react";
import FooterColumns from "./FooterColumns";
import { footerData } from "../../assets/siteData";
function Footer() {
  return (
    <footer className="bg-[#F8F9FA] py-8">
      <div className="max-w-screen-xl flex justify-around mx-auto">
        <div className="flex flex-col gap-2">
          <img src="/logo.svg" alt="" />
          <p className="text-xs">© 2024. All rights reserved</p>
        </div>
        <div className="flex flex-row gap-x-20 ">
          {footerData.map((e) => (
            <FooterColumns {...e} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
