import React from "react";
import Image from "next/image";

interface IBenefitProps {
  heading: string;
  paragraph: string;
  src: string;
  className: string;
}

const Benefit: React.FC<IBenefitProps> = (props) => {
  const { src, heading, paragraph, className } = props;
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Image src={src} alt="desktop" width={50} height={50} className="pb-8" />
      <div>
        <h1 className="font-black md:text-lg describe">{heading}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Benefit;
