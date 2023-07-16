import Image from "next/image";
import React from "react";
import Button from "@/ui_components/Button";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-around items-center h-10 py-10 border-b-2 ">
        <Image
          src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg"
          alt="logo"
          width={160}
          height={40}
        />
        <ul className="md:flex gap-4 hidden">
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
          <button>
            <Image src={"search.svg"} alt="search" width={30} height={30} />
          </button>
          <div className="hidden md:flex">
            <Button
              className={`text-primaryBtn-500 hover:bg-primaryBtn-500 hover:text-white`}
            >
              Login
            </Button>
            <Button className={`bg-primaryBtn-500 text-white ml-2`}>
              Start My Free Trial
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
