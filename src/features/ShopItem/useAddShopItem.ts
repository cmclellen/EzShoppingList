import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addShopItem as addShopItemApi } from "../../services/apiShopItem";
import toast from "react-hot-toast";
import QueryKey from "../../utils/queryKeys";

export default function useAddShopItem() {
  const queryClient = useQueryClient();
  const { mutate: addShopItem, isPending: isAddingShopItem } = useMutation({
    mutationFn: addShopItemApi,
    onSuccess: () => {
      toast.success("Item successfully created");
      queryClient.invalidateQueries({ queryKey: [QueryKey.SHOPPING_LIST] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { addShopItem, isAddingShopItem };
}
