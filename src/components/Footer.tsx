import React from "react";
import { SOCIAL_ICONS } from "@/utils/constant";
import Image from "next/image";
function Footer() {
  return (
    <footer className="flex justify-between py-20 items-center w-11/12 mx-auto">
      <div>
        {" "}
        <p className="text-sm">{`© ${new Date().getFullYear()} All Rights Reserved`}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <ul className="flex">
            <li>Security</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-2 text-green-400">
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
