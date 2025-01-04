import { useParams } from "react-router-dom";
import PageLayout from "../ui/PageLayout";
import Spinner from "../ui/Spinner";
import useShoppingList from "../features/ShoppingList/useShoppingList";
import Empty from "../ui/Empty";
import ShopItem from "../features/ShopItem/ShopItem";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { TiPlus } from "react-icons/ti";
import AddShoppingListItem from "./AddShoppingListItem";

function ShoppingList() {
  const { id } = useParams();

  const { shoppingList, isLoadingShoppingList } = useShoppingList(Number(id));
  const shopItems = shoppingList?.ShopItem;

  if (isLoadingShoppingList) return <Spinner />;

  return (
    <PageLayout title={`Shopping list: ${shoppingList?.name}`}>
      {shopItems?.length ? (
        <ul className="divide-primary divide-y">
          {shopItems &&
            shopItems.map((item) => (
              <ShopItem
                key={item.id}
                id={item.id!}
                name={item.name}
                completed={item.completed}
              />
            ))}
        </ul>
      ) : (
        <Empty resourceName="shop items" />
      )}
      <div className="mt-2">
        <Modal.Open opensWindowName="add">
          <Button icon={<TiPlus />}>Add item</Button>
        </Modal.Open>
        <Modal.Window name="add">
          <AddShoppingListItem shoppingListId={shoppingList!.id!} />
        </Modal.Window>
      </div>
    </PageLayout>
  );
}

export default ShoppingList;
