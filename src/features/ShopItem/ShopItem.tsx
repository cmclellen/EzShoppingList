import { Checkbox } from "@headlessui/react";
import { useState } from "react";
import { HiCheck } from "react-icons/hi2";

interface ShopItemProps {
  name: string;
}

function ShopItem({ name }: ShopItemProps) {
  const [completed, setCompleted] = useState(false);

  return (
    <li className="font-semibold flex gap-2 items-center py-5">
      <Checkbox
        checked={completed}
        onChange={setCompleted}
        className="group size-6 rounded-md bg-primary/10 p-1 ring-1 ring-primary/15 ring-inset data-[checked]:bg-primary/10"
      >
        <HiCheck className="hidden size-4 fill-primary group-data-[checked]:block" />
      </Checkbox>
      <span className={completed ? "line-through" : ""}>{name}</span>
    </li>
  );
}

export default ShopItem;
