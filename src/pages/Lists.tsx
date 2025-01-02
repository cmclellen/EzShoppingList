import { useEffect, useState } from "react";
import getShoppingLists from "../services/apiShoppingLists";
import ShoppingListItem from "../features/ShoppingList/ShoppingListItem";

interface ShoppingList {
  id: number;
  name: string;
}

function Lists() {
  const [isLoading, setIsLoading] = useState(false);
  const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>();

  useEffect(() => {
    setIsLoading(true);
    getShoppingLists().then((data) => {
      setShoppingLists(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <span>Loading...</span>;

  return (
    <ul>
      {shoppingLists &&
        shoppingLists.map((list) => (
          <ShoppingListItem key={list.id} name={list.name}></ShoppingListItem>
        ))}
    </ul>
  );
}

export default Lists;
