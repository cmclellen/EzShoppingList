import { Input } from "@headlessui/react";
import clsx from "clsx";

interface FormInputProps {
  type?: string;
  id: string;
  placeholder: string;
  autoComplete?: string;
}

function FormInput(props: FormInputProps) {
  const { type, id, placeholder, autoComplete, ...otherProps } = props;
  return (
    <Input
      type={type}
      id={id}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={clsx(
        "block w-full rounded-lg border-none bg-primary/10 py-1.5 px-3 text-sm/6 text-primary placeholder-primary/50",
        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary/25"
      )}
      {...otherProps}
    ></Input>
  );
}

export default FormInput;
