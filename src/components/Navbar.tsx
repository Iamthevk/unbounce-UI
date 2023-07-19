"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/ui_components";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

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
    <div
      className={`border-b-2 w-full fixed z-10 bg-white ${
        isNavOpen ? `h-full` : ""
      }`}
    >
      <div className="flex justify-between w-10/12 mx-auto md:justify-around items-center h-10 py-10 ">
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
        <section className="flex lg:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div
            className={
              isNavOpen
                ? "absolute w-full h-full top-0 left-0 bg-white z-10 flex flex-col justify-evenly items-center"
                : "hidden"
            }
          >
            <div
              className="absolute top-0 z-20 right-0 px-8 py-4"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="absolute top-5 left-5 w-full">
              <Image
                src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg"
                alt="logo"
                width={160}
                height={40}
              />
              <ul className="flex flex-col mx-auto pt-5 mobile-menu justify-start">
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
              <div className="pt-10 w-full mx-auto">
                <Button
                  className={`bg-btn-primary text-white hover:bg-white hover:text-btn-primary w-11/12  mb-5`}
                >
                  Start My Free Trial
                </Button>
                <Button
                  className={`text-btn-primary hover:bg-btn-primary  hover:text-white w-11/12`}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </section>
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
