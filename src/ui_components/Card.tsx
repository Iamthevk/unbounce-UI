import Image from "next/image";

interface ICardProps {
  noOfStars: number;
  message: string;
  imgSrc: string;
  name: string;
  location: string;
}

export const TCard: React.FC<ICardProps> = ({
  noOfStars,
  message,
  imgSrc,
  name,
  location,
}) => {
  return (
    <div className="w-full md:w-96 p-2 flex flex-col gap-3">
      <p>
        {Array(noOfStars)
          .fill("")
          .map((_, i) => (
            <span className="text-text-secondary text-sm " key={i}>
              &#9733;
            </span>
          ))}
      </p>
      <h1 className="text-xl">
        <em>{message}</em>
      </h1>
      <div className="flex items-center gap-2">
        <Image src={imgSrc} alt={name} width={50} height={50} layout="fixed" />
        <div>
          <p className="text-sm md:text-base">{name}</p>
          <p className="text-sm md:text-base">{location}</p>
        </div>
      </div>
    </div>
  );
};
