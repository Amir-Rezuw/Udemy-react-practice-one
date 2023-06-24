import { MouseEvent } from "react";

const Button = ({
  onClick,
  type,
  className: styles,
  title,
}: {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type: "button" | "submit" | "reset";
  className?: string;
  title: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-52 h-12 bg-purple-600 text-white rounded-lg transition-all duration-500 hover:shadow-primaryPurpleShadow ${styles}`}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
