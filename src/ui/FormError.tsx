import { ReactNode } from "react";

interface FormErrorProps {
  children: ReactNode;
}

function FormError({ children }: FormErrorProps) {
  return <span className="text-sm text-red-700 font-semibold">{children}</span>;
}

export default FormError;
