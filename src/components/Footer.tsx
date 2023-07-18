import React from "react";
import { SOCIAL_ICONS } from "@/utils/constant";
import Image from "next/image";
function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between py-20 items-center md:w-11/12 mx-auto">
      <div className="pb-10 md:p-0">
        {" "}
        <p className="text-sm">{`© ${new Date().getFullYear()} All Rights Reserved`}</p>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
        <div className="pt-10 md:p-0  footer">
          <ul className="flex justify-center items-center md:w-full pl-10 md:p-0">
            <li>Security</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-center gap-2 text-green-400">
            {SOCIAL_ICONS.map((icon, i) => {
              return (
                <div
                  key={i}
                  className="bg-[#303030] rounded-full  border-none p-1"
                >
                  <a href="https://www.github.com/iamthevk" target="_blank">
                    <Image
                      src={icon}
                      alt="social-icons"
                      className="w-8 h-8 hover:bg-btn-primary rounded-full p-1"
                    />
                  </a>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
