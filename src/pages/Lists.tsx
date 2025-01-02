import { useEffect, useState } from "react";
import getShoppingLists from "../services/apiShoppingLists";

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
        shoppingLists.map((list) => <li key={list.id}>{list.name}</li>)}
    </ul>
  );
}

export default Lists;
