import { Description, Field, Input, Label } from "@headlessui/react";
import PageLayout from "../ui/PageLayout";
import clsx from "clsx";
import Button from "../ui/Button";
import { TiPlus, TiTimes } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { addShoppingList, ShoppingList } from "../services/apiShoppingLists";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function AddShoppingList() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: addShoppingList,
    onSuccess: () => {
      toast.success("Shopping list successfully created");
      reset();
      navigate("..");
      queryClient.invalidateQueries({ queryKey: ["shopping-lists"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data: unknown) {
    mutate(data as ShoppingList);
  }

  return (
    <PageLayout title="Add shopping list">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <Field>
            <Label className="text-sm/6 font-medium text-primary">Name</Label>
            <Description className="text-sm/6 text-primary/50">
              The name of the shopping list
            </Description>
            <Input
              autoComplete="off"
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-primary/5 py-1.5 px-3 text-sm/6 text-primary",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary/25"
              )}
              {...register("name", { required: "This field is required" })}
            />
            {errors?.name?.message && (
              <span>{String(errors["name"]?.message)}</span>
            )}
          </Field>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 mt-2">
          <Button
            icon={<TiTimes />}
            onClick={() => navigate("..")}
            className="bg-secondary text-on-secondary"
            type="reset"
          >
            Cancel
          </Button>
          <Button icon={<TiPlus />} type="submit">
            Save
          </Button>
        </div>
      </form>
    </PageLayout>
  );
}

export default AddShoppingList;
