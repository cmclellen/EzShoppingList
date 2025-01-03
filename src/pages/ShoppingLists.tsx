import { useEffect, useState } from "react";
import getShoppingLists from "../services/apiShoppingLists";
import ShoppingListItem from "../features/ShoppingList/ShoppingListItem";
import PageLayout from "../ui/PageLayout";
import Button from "../ui/Button";
import { HiPlus } from "react-icons/hi2";

interface ShoppingList {
  id: number;
  name: string;
}

function ShoppingLists() {
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
    <PageLayout title="Shopping Lists">
      <ul className="flex flex-wrap gap-2">
        {shoppingLists &&
          shoppingLists.map((list) => (
            <ShoppingListItem key={list.id} name={list.name}></ShoppingListItem>
          ))}
      </ul>
      <div className="mt-2">
        <Button
          icon={<HiPlus className="font-semibold" />}
          onClick={() => alert("hello")}
        >
          Add shopping list
        </Button>
      </div>
    </PageLayout>
  );
}

export default ShoppingLists;
