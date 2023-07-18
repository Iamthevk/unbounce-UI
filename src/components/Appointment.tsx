import React from "react";
import styles from "./Appointment.module.css";
import Image from "next/image";
import { Benefit } from "@/ui_components";
import { BENEFITS_DATA, FEATURES_DATA } from "../utils/constant";
import Schedule from "./Schedule";
import About from "./About";
import Testimonial from "./Testimonial";
import Features from "@/ui_components/Features";
import Info from "./Info";
function Appointment() {
  return (
    <div className="w-[88vw] mx-auto">
      <div className=" border-2 p-7">
        <div className={styles.container}>
          <div className="p-4 md:h-[720px] border-2 md:pl-36 pt-16 ">
            <Image
              src={"multor-logo.svg"}
              alt="multor-logo"
              width={150}
              height={100}
              className="pb-16"
            />

            <div className="mb-10">
              <h1 className="text-2xl md:text-7xl md:w-[600px] md:leading-[75px] text-[rgb(21, 47, 46)]  text-left describe">
                Describe the value of booking an appointment{" "}
              </h1>
            </div>
            <div className="md:w-[464px] text-left">
              <span className=" leading-7">
                No need to get clever. Tell people exactly what you&apos;re
                offering, then use this space to communicate your key value
                proposition.
              </span>
            </div>
          </div>
        </div>
        <div className=" md:h-[600px] md:flex md:w-[940px] mx-auto">
          <div className="md:w-1/2 pt-10 md:pt-36">
            {BENEFITS_DATA.map((benefit, i) => {
              return (
                <Benefit
                  key={i}
                  heading={benefit.heading}
                  paragraph={benefit.paragraph}
                  src={benefit.src}
                  className="pb-10"
                />
              );
            })}
          </div>
          <div className=" md:w-1/2">
            <Schedule />
          </div>
        </div>
        <About />
        <Testimonial />
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-20 px-5 lg:px-40">
          {FEATURES_DATA.map((feature, index) => {
            return <Features key={index} {...feature} />;
          })}
        </section>
        <Info />
        <section className="flex justify-between text-xs md:text-base px-5 lg:px-40 items-center h-20 md:h-32 bg-[rgba(21,47,46,1)] text-gray-300">
          <Image
            src={"multor-light.svg"}
            alt="multor-logo"
            width={150}
            height={100}
          />
          <p>{`© ${new Date().getFullYear()} All Rights Reserved`}</p>
        </section>
      </div>
    </div>
  );
}

export default Appointment;
