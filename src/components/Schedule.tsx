"use client";
import Input from "@/ui_components/Input";
import React, { FormEvent, useState } from "react";
import { APPOINTMENT_OPTIONS } from "@/utils/constant";
import { Button } from "@/ui_components";

interface InputField {
  placeholder: string;
  name: string;
  type?: string; // '?' makes this property optional
}

const INPUT_FIELDS: InputField[] = [
  { placeholder: "First Name*", name: "firstName" },
  { placeholder: "Last Name*", name: "lastName" },
  { placeholder: "Email*", name: "email", type: "email" },
  { placeholder: "Phone Number*", name: "phoneNumber", type: "tel" },
];
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  appointmentType: string;
  [key: string]: string;
}
function Schedule() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    appointmentType: "",
  });

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative lg:-bottom-5 left-16 bottom-20 w-[400px] ">
      <form
        onSubmit={handleFormSubmit}
        className="lg:absolute lg:-top-32 bg-primary flex flex-col items-center gap-5 p-5 md:p-10 bg-[rgba(21,47,46,1)]"
      >
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
          Schedule an Appointment
        </h1>
        <h3 className="text-white text-sm md:text-base text-center">
          Here, let visitors know what will happen when they complete your form.
        </h3>
        <div className="w-full flex flex-col gap-3">
          {INPUT_FIELDS.map((field) => {
            return (
              <Input
                key={field.name}
                placeholder={field.placeholder}
                required
                onChange={handleChange}
                name={field.name}
                value={formData[field.name]}
              />
            );
          })}
          <select
            defaultValue={"Type of Appointment"}
            className="w-full bg-white border border-gray-300 rounded-md p-4 cursor-pointer"
            name={"appointmentType"}
            onChange={handleChange}
          >
            <option disabled>Type of Appointment</option>
            {APPOINTMENT_OPTIONS.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
          </select>
        </div>

        <Button className="bg-btn-schedule  hover:bg-[rgba(0,194,197,0.9)] rounded-lg w-full border-none text-white">
          {" "}
          SCHEDULE NOW{" "}
        </Button>
      </form>
    </div>
  );
}

export default Schedule;
