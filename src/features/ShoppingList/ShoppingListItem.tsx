import { TiTrash } from "react-icons/ti";
import { Link } from "react-router-dom";
import Modal, { useModal } from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteShoppingList } from "../../services/apiShoppingLists";
import toast from "react-hot-toast";

interface ShoppingListItemProps {
  id: number;
  name: string;
}

function ShoppingListItem({ id, name }: ShoppingListItemProps) {
  const { open, close } = useModal();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteShoppingList,
    onSuccess: () => {
      toast.success("Successfully deleted shopping list");
      close();
      queryClient.invalidateQueries({ queryKey: ["shopping-lists"] });
    },
    onError(err) {
      toast.error(err.message);
    },
  });

  function handleDeleteShoppingList(name: string) {
    open(`delete-${name}`);
  }

  function handleOnDelete(id: number) {
    mutate(id);
  }

  return (
    <li
      key={name}
      className="relative border font-semibold w-full md:w-3/12 rounded-lg border-primary"
    >
      <Link to={name} className="block p-3 ">
        <div className="text-center text-primary">{name}</div>
      </Link>
      <TiTrash
        className="text-2xl absolute right-0 top-0 "
        onClick={() => handleDeleteShoppingList(name)}
      />
      <Modal.Window opens={`delete-${name}`}>
        <ConfirmDelete
          onDelete={() => handleOnDelete(id)}
          resourceName={name}
        />
      </Modal.Window>
    </li>
  );
}

export default ShoppingListItem;
