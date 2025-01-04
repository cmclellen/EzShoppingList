import { Input } from "@headlessui/react";
import PageLayout from "../ui/PageLayout";
import clsx from "clsx";
import Button from "../ui/Button";
import { TiPlus, TiTimes } from "react-icons/ti";
import { ShoppingList } from "../services/apiShoppingLists";
import { useForm } from "react-hook-form";
import useAddShoppingList from "../features/ShoppingList/useAddShoppingList";
import { useModal } from "../ui/Modal";
import FormRow from "../ui/FormRow";

function AddShoppingList() {
  const { close } = useModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { addShoppingList, isAddingShoppingList } = useAddShoppingList();

  function onSubmit(data: unknown) {
    addShoppingList(data as ShoppingList, {
      onSuccess: (_data) => {
        reset();
        close();
      },
    });
  }

  return (
    <PageLayout title="Add shopping list">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <FormRow label="Name" error={errors?.name?.message}>
            <Input
              placeholder="Name"
              autoComplete="off"
              disabled={isAddingShoppingList}
              className={clsx(
                "block w-full rounded-lg border-none bg-primary/10 py-1.5 px-3 text-sm/6 text-primary placeholder-primary/50",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary/25"
              )}
              {...register("name", { required: "This field is required" })}
            />
          </FormRow>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 mt-4">
          <Button
            icon={<TiTimes />}
            onClick={close}
            className="bg-secondary text-on-secondary"
            type="reset"
            disabled={isAddingShoppingList}
          >
            Cancel
          </Button>
          <Button
            icon={<TiPlus />}
            type="submit"
            disabled={isAddingShoppingList}
          >
            Save
          </Button>
        </div>
      </form>
    </PageLayout>
  );
}

export default AddShoppingList;
