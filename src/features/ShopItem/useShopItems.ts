import { useQuery } from "@tanstack/react-query";
import { getShopItems } from "../../services/apiShopItem";

function useShopItems(id: number) {
  const {
    data: shopItems,
    isLoading: isLoadingShopItems,
    error,
  } = useQuery({
    queryKey: ["shop-items"],
    queryFn: () => getShopItems(id),
  });

  return { shopItems, isLoadingShopItems, error };
}

export default useShopItems;
