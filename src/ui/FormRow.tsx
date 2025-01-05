/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field } from "@headlessui/react";
import FormLabel from "./FormLabel";
import FormError from "./FormError";
import { ReactNode } from "react";

interface FormRowProp {
  label?: string;
  children: ReactNode;
  error?: any;
}

function FormRow({ label, children, error }: FormRowProp) {
  return (
    <Field>
      {label && <FormLabel>{label}</FormLabel>}
      {children}
      {error && <FormError>{error}</FormError>}
    </Field>
  );
}

export default FormRow;
