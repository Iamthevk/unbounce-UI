import React from "react";
import styles from "./Appointment.module.css";
import Image from "next/image";
import Benefit from "@/ui_components/Benefit";
import { benefits } from "../utils/constant";
import Schedule from "./Schedule";
import About from "./About";
import Testimonial from "./Testimonial";
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
              <h1 className="text-7xl md:w-[600px] leading-[75px] text-[rgb(21, 47, 46)]  text-left describe">
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
        <div className="h-[600px] flex md:w-[940px] mx-auto">
          <div className="w-1/2 pt-36">
            {benefits.map((benefit, i) => {
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
          <div className="w-1/2">
            <Schedule />
          </div>
        </div>
        <About />
        <Testimonial />
      </div>
    </div>
  );
}

export default Appointment;
