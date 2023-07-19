"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/ui_components";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }

      document.addEventListener("click", handleOutsideClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    };
  }, []);

  const handleSearchClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border-b-2 w-full fixed z-10 bg-white ">
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
          <button
            className="pr-2 flex items-center  "
            onClick={handleSearchClick}
          >
            <Image src={"search.svg"} alt="search" width={25} height={25} />
          </button>
          {isOpen && (
            <input
              type="text"
              className={`hidden md:w-[70px] md:block rounded-full py-2 duration-300 focus:outline-none`}
              placeholder="Search..."
              ref={searchInputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          )}
          <div className="hidden md:flex">
            <Button
              className={`text-btn-primary hover:bg-btn-primary  hover:text-white`}
            >
              Login
            </Button>
            <Button
              className={`bg-btn-primary text-white ml-2 hover:bg-white hover:text-btn-primary`}
            >
              Start My Free Trial
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className={`flex md:hidden mb-3 gap-2${
            isOpen ? " opacity-100 w-10/12 px-5 mx-auto" : " opacity-0"
          }`}
        >
          <Image src={"search.svg"} alt="search" width={25} height={25} />
          <input
            type="text"
            className={`rounded-full transition-all duration-1000 focus:outline-none`}
            placeholder="Search..."
            ref={searchInputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
