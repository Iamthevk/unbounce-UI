import Button from "@/ui_components/Button";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="pb-5 w-11/12 mx-auto">
      <div className="my-10  mx-2.5 px-4 ">
        <p className="text-xs">
          <span className="text-[#86c7e8]">‹</span> BACK TO TEMPLATES
        </p>
      </div>
      <div className="flex gap-3 justify-between  mx-2.5 px-4">
        <div className="w-3/5">
          <h1 className="text-2xl">Mulator</h1>
          <p className=" my-6">
            Schedule more virtual appointments, online classes, and video
            consultations with this high-converting lead capture template.
          </p>
          <Button className="text-white py-2.5 px-6 bg-btn-secondary border-none">
            MAKE IT YOURS
          </Button>
        </div>
        <div className="w-2/5 max-w-[317px] text-left">
          <h3 className="font-thin">Category</h3>
          <p className="anchor">
            <a
              href="https://unbounce.com/landing-page-templates/agency-lead-generation/"
              target="_blank"
            >
              {" "}
              Agency Lead Generation
            </a>
            {/* https://unbounce.com/landing-page-templates/consulting/ */}|
            <a
              href="https://unbounce.com/landing-page-templates/consulting/"
              target="_blank"
            >
              {" "}
              Counsulting
            </a>
            |
            <a
              href="https://unbounce.com/landing-page-templates/ecourse/"
              target="_blank"
            >
              {" "}
              Ecourse
            </a>
            |
            <a
              href="https://unbounce.com/landing-page-templates/events/"
              target="_blank"
            >
              {" "}
              Events
            </a>
            |
            <a
              href="https://unbounce.com/landing-page-templates/featured/"
              target="_blank"
            >
              {" "}
              Featured
            </a>
            |
            <a
              href="https://unbounce.com/landing-page-templates/health/"
              target="_blank"
            >
              {" "}
              Health
            </a>
            |
            <a
              href="https://unbounce.com/landing-page-templates/landing-pages/"
              target="_blank"
            >
              {" "}
              Landing Pages
            </a>
            |
            <a
              href="https://unbounce.com/landing-page-templates/lead-generation/"
              target="_blank"
            >
              {" "}
              Lead Generation
            </a>
            |
            <a
              href="https://unbounce.com/landing-page-templates/medical/"
              target="_blank"
            >
              {" "}
              Medical
            </a>
            |
            <a
              href="https://unbounce.com/landing-page-templates/webinar/"
              target="_blank"
            >
              {" "}
              Webinar
            </a>
            |
            <a
              href="https://unbounce.com/landing-page-templates/wordpress/"
              target="_blank"
            >
              {" "}
              WordPress
            </a>
          </p>
          <div className="flex justify-around">
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
    </div>
  );
}

export default Header;
