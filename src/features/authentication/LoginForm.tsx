import { Field } from "@headlessui/react";
import { FormEvent } from "react";
import FormInput from "../../ui/FormInput";
import FormLabel from "../../ui/FormLabel";

function LoginForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field>
        <FormLabel>Email address</FormLabel>
        <FormInput
          type="email"
          id="email"
          placeholder="Email address"
          autoComplete="username"
        />
        {/* {errors?.name?.message && (
            <span>{String(errors["name"]?.message)}</span>
        )} */}
      </Field>
    </form>
  );
}

export default LoginForm;
