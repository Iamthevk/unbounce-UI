import { Button } from "@/ui_components";
import { CATEGORIES } from "@/utils/constant";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="pb-5 w-11/12 mx-auto pt-24">
      <div className="my-10  mx-2.5 px-4 ">
        <p className="text-xs">
          <a href="https://unbounce.com/landing-page-templates/">
            <span className="text-[#86c7e8]">‹</span> BACK TO TEMPLATES
          </a>
        </p>
      </div>
      <div className="flex gap-3 justify-between  mx-2.5 px-4">
        <div className="w-3/5">
          <h1 className="text-2xl">Mulator</h1>
          <p className=" my-6">
            Schedule more virtual appointments, online classes, and video
            consultations with this high-converting lead capture template.
          </p>
          <Button className="text-white py-2.5 px-6 bg-btn-secondary hover:bg-[rgba(246,146,30,0.9)] border-none hidden md:block">
            MAKE IT YOURS
          </Button>
        </div>
        <div className="w-2/5 max-w-[317px] text-left">
          <h3 className="font-thin">Category</h3>
          <p className="anchor">
            {CATEGORIES.map((category, i) => {
              return (
                <a
                  key={i}
                  href="https://unbounce.com/landing-page-templates/agency-lead-generation/"
                  target="_blank"
                >
                  {" "}
                  {category} {i !== CATEGORIES.length - 1 ? "|" : ""}
                </a>
              );
            })}
          </p>
          <div className="justify-around hidden md:flex">
            <p className="text-xs self-end ">DESKTOP VIEW </p>
            <Image
              src={`https://unbounce.com/wp-content/themes/unbounce2019/assets/img/lpt-preview-desktop-icon.png`}
              alt="desktop"
              width={10}
              height={10}
              className="w-8"
            />{" "}
            <p className="text-xs self-end ">MOBILE VIEW </p>
            <Image
              src={`https://unbounce.com/wp-content/themes/unbounce2019/assets/img/lpt-preview-mobile-icon.png`}
              alt="mobile"
              width={10}
              height={10}
              className="w-4"
            />{" "}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
