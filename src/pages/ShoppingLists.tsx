import ShoppingListItem from "../features/ShoppingList/ShoppingListItem";
import PageLayout from "../ui/PageLayout";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import Spinner from "../ui/Spinner";
import ErrorFallback from "../ui/ErrorFallback";
import useShoppingLists from "../features/ShoppingList/useShoppingLists";

function ShoppingLists() {
  const navigate = useNavigate();

  const { shoppingLists, isLoading, error } = useShoppingLists();

  if (isLoading) return <Spinner />;

  if (error) return <ErrorFallback error={error}></ErrorFallback>;

  return (
    <>
      <PageLayout title="Shopping Lists">
        <ul className="flex flex-wrap gap-2">
          {shoppingLists &&
            shoppingLists.map((list) => (
              <ShoppingListItem
                key={list.id}
                name={list.name}
                id={list.id!}
              ></ShoppingListItem>
            ))}
        </ul>
        <div className="mt-2">
          <Button icon={<TiPlus />} onClick={() => navigate("add")}>
            Add shopping list
          </Button>
        </div>
      </PageLayout>
    </>
  );
}

export default ShoppingLists;
