import React from "react";

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { className, children } = props;
  return (
    <button
      className={`flex items-center justify-center gap-2 ease-in-out duration-300 py-4 px-3 border-2  border-primaryBtn-500 ${
        className ? className : ""
      }  `}
    >
      {children}
    </button>
  );
};

export default Button;
