import { Description, Field, Input, Label } from "@headlessui/react";
import PageLayout from "../ui/PageLayout";
import clsx from "clsx";
import Button from "../ui/Button";
import { TiPlus, TiTimes } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { addShoppingList } from "../services/apiShoppingLists";

function AddShoppingList() {
  const navigate = useNavigate();

  async function add() {
    await addShoppingList({
      name: "Coles",
    });
  }

  return (
    <PageLayout title="Add shopping list">
      <form className="w-full ">
        <div className="w-full">
          <Field>
            <Label className="text-sm/6 font-medium text-primary">Name</Label>
            <Description className="text-sm/6 text-primary/50">
              The name of the shopping list
            </Description>
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-primary/5 py-1.5 px-3 text-sm/6 text-primary",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-primary/25"
              )}
            />
          </Field>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 mt-2">
          <Button
            icon={<TiTimes />}
            onClick={() => navigate("..")}
            className="bg-secondary text-on-secondary"
          >
            Cancel
          </Button>
          <Button icon={<TiPlus />} onClick={add}>
            Save
          </Button>
        </div>
      </form>
    </PageLayout>
  );
}

export default AddShoppingList;
