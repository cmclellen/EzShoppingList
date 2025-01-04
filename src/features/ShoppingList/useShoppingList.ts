import { useQuery } from "@tanstack/react-query";
import { getShoppingList } from "../../services/apiShoppingLists";
import QueryKey from "../../utils/queryKeys";

export default function useShoppingList(id: number) {
  const {
    data: shoppingList,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QueryKey.SHOPPING_LIST],
    queryFn: () => getShoppingList(id),
  });

  return { shoppingList, isLoading, error };
}
