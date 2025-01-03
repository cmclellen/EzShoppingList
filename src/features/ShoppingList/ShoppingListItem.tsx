import { Link } from "react-router-dom";

interface ShoppingListItemProps {
  name: string;
}

function ShoppingListItem({ name }: ShoppingListItemProps) {
  return (
    <li
      key={name}
      className="border font-semibold w-full md:w-3/12 rounded-lg border-primary"
    >
      <Link to={name} className="block p-3">
        <div className="text-center text-primary">{name}</div>
      </Link>
    </li>
  );
}

export default ShoppingListItem;
