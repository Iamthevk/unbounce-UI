import React from "react";

interface IButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = (props) => {
  const { className, children, onClick } = props;
  return (
    <button
      className={`flex items-center justify-center gap-2 ease-in-out duration-300 py-4 px-3 border-2  border-btn-primary  ${
        className ? className : ""
      }  `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
