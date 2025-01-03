import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  icon: ReactNode;
  onClick: () => void;
}

function Button({ icon, onClick, children }: ButtonProps) {
  return (
    <button
      className="flex items-center font-semibold border bg-primary text-background w-full md:w-auto rounded-lg py-2 px-5"
      onClick={onClick}
    >
      {icon} <span>{children}</span>
    </button>
  );
}

export default Button;
