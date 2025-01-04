import { useParams } from "react-router-dom";
import PageLayout from "../ui/PageLayout";
import Spinner from "../ui/Spinner";
import useShoppingList from "../features/ShoppingList/useShoppingList";
import Empty from "../ui/Empty";
import ShopItem from "../features/ShopItem/ShopItem";

function ShoppingList() {
  const { id } = useParams();

  const { shoppingList, isLoading } = useShoppingList(Number(id));

  const shopItems = shoppingList?.ShopItem;
  console.log(shopItems);

  if (isLoading) return <Spinner />;

  return (
    <PageLayout title={`Shopping list: ${shoppingList?.name}`}>
      {shopItems?.length ? (
        <ul className="divide-primary divide-y">
          {shopItems &&
            shopItems.map((item) => (
              <ShopItem key={item.id} id={item.id} name={item.name} />
            ))}
        </ul>
      ) : (
        <Empty resourceName="shop items" />
      )}
    </PageLayout>
  );
}

export default ShoppingList;
