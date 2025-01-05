import { Field, Input } from "@headlessui/react";
import PageLayout from "../ui/PageLayout";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { TiPlus, TiTimes } from "react-icons/ti";
import useAddShopItem from "../features/ShopItem/useAddShopItem";
import { ShopItem } from "../services/apiShopItem";
import { useModal } from "../ui/Modal";
import FormRow from "../ui/FormRow";
import FormInput from "../ui/FormInput";

interface AddShoppingListItemProps {
  shoppingListId: number;
}

function AddShoppingListItem({ shoppingListId }: AddShoppingListItemProps) {
  const { close } = useModal();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addShopItem, isAddingShopItem } = useAddShopItem();

  function onSubmit(data: unknown) {
    console.log(data);
    addShopItem(data as ShopItem, {
      onSuccess: (_data) => {
        reset();
        close();
      },
    });
  }

  return (
    <PageLayout title="Add item">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="hidden"
          defaultValue={shoppingListId}
          {...register("shopping_list_id")}
        ></Input>
        <div className="w-full">
          <Field>
            <FormRow label="Name" error={errors?.name?.message}>
              <FormInput
                disabled={isAddingShopItem}
                placeholder="Name"
                autoComplete="off"
                register={() =>
                  register("name", { required: "This field is required" })
                }
              />
            </FormRow>
          </Field>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 mt-4">
          <Button
            icon={<TiTimes />}
            onClick={close}
            className="bg-secondary text-on-secondary"
            type="reset"
            disabled={isAddingShopItem}
          >
            Cancel
          </Button>
          <Button disabled={isAddingShopItem} icon={<TiPlus />} type="submit">
            Save
          </Button>
        </div>
      </form>
    </PageLayout>
  );
}

export default AddShoppingListItem;
