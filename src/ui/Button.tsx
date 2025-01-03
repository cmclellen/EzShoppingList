import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

function Button({
  type = "button",
  icon,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    onClick!();
  }

  return (
    <button
      className={clsx(
        "flex items-center font-semibold border bg-primary text-background w-full md:w-auto rounded-lg py-2 px-5",
        className
      )}
      onClick={onClick && handleClick}
      type={type}
    >
      {icon} <span>{children}</span>
    </button>
  );
}

export default Button;
