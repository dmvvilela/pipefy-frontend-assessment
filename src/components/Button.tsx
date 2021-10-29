import React from "react";

export interface ButtonProps {
  type?: string;
  title: string;
  onClick: () => void;
  className?: string;
}

const Button = ({ type, title, onClick, className }: ButtonProps) => {
  let colorClasses = "";

  if (type === "primary") {
    colorClasses = "text-blue-500 bg-blue-500 text-opacity-80";
  } else {
    colorClasses = "text-white bg-black";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${colorClasses} ${className} px-4 py-2 text-sm font-medium rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      {title}
    </button>
  );
};

export default Button;
