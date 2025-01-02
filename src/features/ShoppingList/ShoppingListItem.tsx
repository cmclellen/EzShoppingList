interface ShoppingListItemProps {
  name: string;
}

function ShoppingListItem({ name }: ShoppingListItemProps) {
  return <li>{name}</li>;
}

export default ShoppingListItem;
