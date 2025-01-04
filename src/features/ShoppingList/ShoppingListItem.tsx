import { TiTrash } from "react-icons/ti";
import { Link } from "react-router-dom";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteShoppingList from "./useDeleteShoppingList";

interface ShoppingListItemProps {
  id: number;
  name: string;
}

function ShoppingListItem({ id, name }: ShoppingListItemProps) {
  const { isDeletingShoppingList, deleteShoppingList } =
    useDeleteShoppingList();

  function handleOnDelete(id: number) {
    deleteShoppingList(id);
  }

  return (
    <li
      key={name}
      className="relative border font-semibold w-full md:w-3/12 rounded-lg border-primary"
    >
      <Link to={name} className="block p-3 ">
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
