import { useQuery } from "@tanstack/react-query";
import { getShoppingLists } from "../../services/apiShoppingLists";
import QueryKey from "../../utils/queryKeys";

export default function useShoppingLists() {
  const {
    data: shoppingLists,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QueryKey.SHOPPING_LISTS],
    queryFn: getShoppingLists,
  });

  return { shoppingLists, isLoading, error };
}
