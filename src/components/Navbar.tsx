import Image from "next/image";
import React from "react";
import Button from "@/ui_components/Button";

function Navbar() {
  return (
    <div className="border-b-2 w-full">
      <div className="w-10/12 mx-auto flex justify-around items-center h-10 py-10 ">
        <Image
          src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg"
          alt="logo"
          width={160}
          height={40}
        />
        <ul className="md:flex hidden">
          <li className="flex ">
            Products
            <span>
              <Image
                src={"arrow-down.svg"}
                alt="arrow-down"
                width={20}
                height={20}
              />
            </span>
          </li>
          <li className="flex">
            Solutions{" "}
            <span>
              <Image
                src={"arrow-down.svg"}
                alt="arrow-down"
                width={20}
                height={20}
              />
            </span>
          </li>
          <li>Pricing</li>
          <li className="flex">
            Learn{" "}
            <span>
              <Image
                src={"arrow-down.svg"}
                alt="arrow-down"
                width={20}
                height={20}
              />
            </span>
          </li>
          <li>Contact</li>
        </ul>
        <div className="flex">
          <button className="pr-2  ">
            <Image src={"search.svg"} alt="search" width={25} height={25} />
          </button>
          <div className="hidden md:flex">
            <Button
              className={`text-btn-primary hover:bg-btn-primary  hover:text-white`}
            >
              Login
            </Button>
            <Button className={`bg-btn-primary text-white ml-2`}>
              Start My Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
