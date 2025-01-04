import { ReactNode } from "react";

interface FormLabelProps {
  children: ReactNode;
}

function FormLabel({ children }: FormLabelProps) {
  return (
    <label className="text-sm/6 font-medium text-primary">{children}</label>
  );
}

export default FormLabel;
