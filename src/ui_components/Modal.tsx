import React from "react";
import styles from "./Modal.module.css";
import Button from "./Button";
import Image from "next/image";

interface ModalProps {
  onClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <div className="  flex flex-col mx-auto justify-center items-center text-center leading-7 p-7">
        <h2 className="text-white pb-3">
          Make this template yours using the most flexible landing page builder
        </h2>
        <p className="text-white pb-7">
          Already a customer? Create a new page in the builder and choose this
          template by name to get started.
        </p>
        <a href="https://unbounce.com/pricing/" target="_blank">
          <Button className="text-white bg-btn-secondary border-none">
            Try Unbounce Free for 14 Days
          </Button>
        </a>
      </div>
      <div
        className="absolute -top-6 -right-8  px-3 py-1 cursor-pointer"
        onClick={onClick}
      >
        <Image src={"close.svg"} alt="close-btn" width={50} height={50} />
      </div>
    </div>
  );
};

export default Modal;
