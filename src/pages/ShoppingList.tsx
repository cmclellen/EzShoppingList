import { useParams } from "react-router-dom";
import PageLayout from "../ui/PageLayout";
import Spinner from "../ui/Spinner";
import useShoppingList from "../features/ShoppingList/useShoppingList";
import Empty from "../ui/Empty";

function ShoppingList() {
  const { id } = useParams();

  const { shoppingList, isLoading } = useShoppingList(Number(id));

  const shopItems = shoppingList?.ShopItem;

  if (isLoading) return <Spinner />;

  return (
    <PageLayout title={`Shopping list: ${shoppingList?.name}`}>
      {shopItems?.length ? (
        <ul>
          {shopItems &&
            shopItems.map((item) => <li key={item.name}>{item.name}</li>)}
        </ul>
      ) : (
        <Empty resourceName="shop items" />
      )}
    </PageLayout>
  );
}

export default ShoppingList;
