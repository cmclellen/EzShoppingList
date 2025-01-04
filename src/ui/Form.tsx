import { ReactNode } from "react";
import { useForm } from "react-hook-form";

interface FormProps {
  children: ReactNode;
  onSubmit: (data: unknown) => void;
}

function Form({ children, onSubmit }: FormProps) {
  const { handleSubmit } = useForm();

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
}

export default Form;
