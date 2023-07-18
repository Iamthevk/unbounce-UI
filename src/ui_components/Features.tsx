import Image from "next/image";
import React from "react";

interface IFeatureProps {
  imgSrc: string;
  title: string;
  description: string;
}
const Features: React.FC<IFeatureProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Image
        src={imgSrc}
        alt={title}
        width={400}
        height={400}
        className="object-cover"
      />
      <h1 className="text-lg md:text-xl font-bold text-center describe">
        {title}
      </h1>
      <p className="text-sm md:text-base text-center">{description}</p>
    </div>
  );
};

export default Features;
