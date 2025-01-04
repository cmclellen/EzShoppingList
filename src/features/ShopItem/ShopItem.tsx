import { Checkbox } from "@headlessui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaCheck } from "react-icons/fa";
import { updateShopItemCompletedStatus } from "../../services/apiShopItem";
import toast from "react-hot-toast";
import QueryKey from "../../utils/queryKeys";
import { TiTrash } from "react-icons/ti";
import clsx from "clsx";
import useDeleteShopItem from "./useDeleteShopItem";
import Modal, { useModal } from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

interface ShopItemProps {
  id: number;
  name: string;
  completed: boolean;
}

function ShopItem({ id, name, completed }: ShopItemProps) {
  const { close } = useModal();
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

  const { deleteShopItem, isDeletingShopItem } = useDeleteShopItem();

  function handleOnDelete(id: number) {
    deleteShopItem(id, {
      onSuccess: () => {
        close();
      },
    });
  }

  return (
    <li className="font-semibold flex gap-2 items-center py-5">
      <Checkbox
        checked={completed}
        onChange={(e) => mutate(e)}
        className="group size-6 rounded-md bg-primary/10 p-1 ring-1 ring-primary/15 ring-inset data-[checked]:bg-primary/10"
      >
        <FaCheck className="hidden size-4 fill-primary group-data-[checked]:block" />
      </Checkbox>
      <span className={clsx(completed ? "line-through" : "", "flex-1")}>
        {name}
      </span>
      <Modal.Open opensWindowName={`delete-${id}`}>
        <TiTrash className="text-2xl" />
      </Modal.Open>
      <Modal.Window name={`delete-${id}`}>
        <ConfirmDelete
          onDelete={() => handleOnDelete(id)}
          disabled={isDeletingShopItem}
          resourceName={name}
        />
      </Modal.Window>
    </li>
  );
}

export default ShopItem;
