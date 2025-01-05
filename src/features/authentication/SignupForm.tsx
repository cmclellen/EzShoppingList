/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import FormInput from "../../ui/FormInput";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { TiPlus, TiTimes } from "react-icons/ti";
import { useSignup } from "./useSignup";

function SignupForm() {
  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const { signup, isCreatingNewUser } = useSignup();

  function onSubmit(_data: any) {
    signup(_data, {
      onSettled: () => reset(),
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <FormInput
          placeholder="Full name"
          id="fullName"
          register={() =>
            register("fullName", { required: "Full name is required" })
          }
        />
      </FormRow>
      <FormRow label="Email address" error={errors?.email?.message}>
        <FormInput
          type="email"
          id="email"
          placeholder="Email address"
          autoComplete="username"
          register={() =>
            register("email", {
              required: "Email address is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })
          }
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <FormInput
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          disabled={isCreatingNewUser}
          register={() =>
            register("password", { required: "Password is required" })
          }
        />
      </FormRow>
      <FormRow
        label="Confirm password"
        error={errors?.confirmPassword?.message}
      >
        <FormInput
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          autoComplete="current-password"
          disabled={isCreatingNewUser}
          register={() =>
            register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })
          }
        />
      </FormRow>

      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 mt-4">
        <Button
          icon={<TiTimes />}
          onClick={close}
          className="bg-secondary text-on-secondary"
          type="reset"
          disabled={isCreatingNewUser}
        >
          Cancel
        </Button>
        <Button icon={<TiPlus />} type="submit" disabled={isCreatingNewUser}>
          Create new user
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
