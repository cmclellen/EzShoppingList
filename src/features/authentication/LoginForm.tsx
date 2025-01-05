/* eslint-disable @typescript-eslint/no-explicit-any */
import FormInput from "../../ui/FormInput";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, isLoadingLogin } = useLogin();

  function onSubmit({ email, password }: any) {
    login({ email, password });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email address" error={errors?.email?.message}>
        <FormInput
          type="email"
          id="email"
          placeholder="Email address"
          autoComplete="username"
          disabled={isLoadingLogin}
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
          disabled={isLoadingLogin}
          register={() =>
            register("password", { required: "Password is required" })
          }
        />
      </FormRow>

      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 mt-4">
        <Button type="submit" disabled={isLoadingLogin}>
          {!isLoadingLogin ? "Log in" : <SpinnerMini />}
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
