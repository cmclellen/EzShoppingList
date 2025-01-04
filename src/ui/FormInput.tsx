/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@headlessui/react";
import clsx from "clsx";

interface FormInputProps {
  type?: string;
  id?: string;
  disabled: boolean;
  placeholder: string;
  autoComplete?: string;
  register: () => any;
}

function FormInput({
  type,
  disabled,
  placeholder,
  autoComplete,
  register,
  id,
}: FormInputProps) {
  return (
    <Input
      type={type}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      autoComplete={autoComplete ? autoComplete : "off"}
      className={clsx(
        "block w-full rounded-lg border-none bg-primary/10 py-1.5 px-3 text-sm/6 text-primary placeholder-primary/50",
        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary/25"
      )}
      {...register()}
    />
  );
}

export default FormInput;
