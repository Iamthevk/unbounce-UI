import React from "react";
import styles from "./Appointment.module.css";
import Image from "next/image";
import Benefit from "@/ui_components/Benefit";
import data from "../utils/benefitData";
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

            <div className="">
              <h1 className="text-7xl md:w-[500px] leading-[85px] text-[rgb(21, 47, 46)] tracking-tight text-left describe">
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
          <div className="w-1/2">
            {data.map((benefit, i) => {
              return (
                <Benefit
                  key={i}
                  heading={benefit.heading}
                  para={benefit.paragraph}
                  src={benefit.src}
                />
              );
            })}
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
