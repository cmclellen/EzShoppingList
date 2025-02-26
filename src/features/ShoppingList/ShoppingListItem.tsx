import { TiTrash } from "react-icons/ti";
import { Link } from "react-router-dom";
import Modal, { useModal } from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteShoppingList from "./useDeleteShoppingList";

interface ShoppingListItemProps {
  id: number;
  name: string;
}

function ShoppingListItem({ id, name }: ShoppingListItemProps) {
  const { close } = useModal();
  const { isDeletingShoppingList, deleteShoppingList } =
    useDeleteShoppingList();

  function handleOnDelete(id: number) {
    deleteShoppingList(id, {
      onSuccess: () => {
        close();
      },
    });
  }

  return (
    <li
      key={name}
      className="relative border font-semibold w-full md:w-3/12 rounded-lg border-primary"
    >
      <Link to={id.toString()} className="block p-3 ">
        <div className="text-center text-primary">{name}</div>
      </Link>
      <Modal.Open opensWindowName={`delete-${name}`}>
        <TiTrash className="text-2xl absolute right-0 top-0" />
      </Modal.Open>
      <Modal.Window name={`delete-${name}`}>
        <ConfirmDelete
          onDelete={() => handleOnDelete(id)}
          disabled={isDeletingShoppingList}
          resourceName={name}
        />
      </Modal.Window>
    </li>
  );
}

export default ShoppingListItem;
