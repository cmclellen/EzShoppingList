import { Description, Field, Input, Label } from "@headlessui/react";
import PageLayout from "../ui/PageLayout";
import clsx from "clsx";
import Button from "../ui/Button";
import { TiPlus, TiTimes } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { ShoppingList } from "../services/apiShoppingLists";
import { useForm } from "react-hook-form";
import useAddShoppingList from "../features/ShoppingList/useAddShoppingList";

function AddShoppingList() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { addShoppingList } = useAddShoppingList();

  function onSubmit(data: unknown) {
    addShoppingList(data as ShoppingList, {
      onSuccess: (_data) => {
        reset();
      },
    });
  }

  return (
    <PageLayout title="Add shopping list">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <Field>
            <Label className="text-sm/6 font-medium text-primary">Name</Label>
            <Input
              placeholder="Name of the shopping list"
              autoComplete="off"
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-primary/10 py-1.5 px-3 text-sm/6 text-primary placeholder-primary/50",
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
