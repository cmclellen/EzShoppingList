import { getShoppingLists } from "../services/apiShoppingLists";
import ShoppingListItem from "../features/ShoppingList/ShoppingListItem";
import PageLayout from "../ui/PageLayout";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";
import ErrorFallback from "../ui/ErrorFallback";

function ShoppingLists() {
  // const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>();
  const navigate = useNavigate();

  const {
    data: shoppingLists,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["shopping-lists"],
    queryFn: getShoppingLists,
  });

  if (isLoading) return <Spinner />;

  if (error) return <ErrorFallback error={error}></ErrorFallback>;

  return (
    <PageLayout title="Shopping Lists">
      <ul className="flex flex-wrap gap-2">
        {shoppingLists &&
          shoppingLists.map((list) => (
            <ShoppingListItem key={list.id} name={list.name}></ShoppingListItem>
          ))}
      </ul>
      <div className="mt-2">
        <Button icon={<TiPlus />} onClick={() => navigate("add")}>
          Add shopping list
        </Button>
      </div>
    </PageLayout>
  );
}

export default ShoppingLists;
