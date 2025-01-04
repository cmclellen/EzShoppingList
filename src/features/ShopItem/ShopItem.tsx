import { Checkbox } from "@headlessui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaCheck } from "react-icons/fa";
import { updateShopItemCompletedStatus } from "../../services/apiShopItem";
import toast from "react-hot-toast";
import QueryKey from "../../utils/queryKeys";

interface ShopItemProps {
  id: number;
  name: string;
  completed: boolean;
}

function ShopItem({ id, name, completed }: ShopItemProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (completed: boolean) =>
      updateShopItemCompletedStatus(id, completed),
    onSuccess: () => {
      toast.success("Shop item marked as completed");
      queryClient.invalidateQueries({ queryKey: [QueryKey.SHOPPING_LIST] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <li className="font-semibold flex gap-2 items-center py-5">
      <Checkbox
        checked={completed}
        onChange={(e) => mutate(e)}
        className="group size-6 rounded-md bg-primary/10 p-1 ring-1 ring-primary/15 ring-inset data-[checked]:bg-primary/10"
      >
        <FaCheck className="hidden size-4 fill-primary group-data-[checked]:block" />
      </Checkbox>
      <span className={completed ? "line-through" : ""}>{name}</span>
    </li>
  );
}

export default ShopItem;
