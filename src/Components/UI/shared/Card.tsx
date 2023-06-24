import { ReactNode } from "react";

const Card = ({
  className: styles,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={`bg-white shadow-md rounded-xl ${styles}`}>{children}</div>
  );
};

export default Card;
