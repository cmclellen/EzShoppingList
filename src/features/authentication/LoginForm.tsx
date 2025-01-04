import { FormEvent } from "react";
import FormInput from "../../ui/FormInput";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { FiLogIn } from "react-icons/fi";

function LoginForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormRow label="Email address" error={errors?.email?.message}>
        <FormInput
          type="email"
          id="email"
          placeholder="Email address"
          autoComplete="username"
          disabled={false}
          register={() =>
            register("email", { required: "Email address is required" })
          }
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <FormInput
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          disabled={false}
          register={() =>
            register("password", { required: "Password is required" })
          }
        />

        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 mt-4">
          <Button icon={<FiLogIn />}>Log in</Button>
        </div>
      </FormRow>
    </form>
  );
}

export default LoginForm;
