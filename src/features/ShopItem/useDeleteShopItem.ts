import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteShopItem as deleteShopItemApi } from "../../services/apiShopItem";
import toast from "react-hot-toast";
import QueryKey from "../../utils/queryKeys";

export default function useDeleteShopItem() {
  const queryClient = useQueryClient();
  const { mutate: deleteShopItem, isPending: isDeletingShopItem } = useMutation(
    {
      mutationFn: deleteShopItemApi,
      onSuccess: () => {
        toast.success("Item successfully delete");
        queryClient.invalidateQueries({ queryKey: [QueryKey.SHOPPING_LIST] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    }
  );
  return { deleteShopItem, isDeletingShopItem };
}
