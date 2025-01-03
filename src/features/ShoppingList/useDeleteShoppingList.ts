import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteShoppingList as deleteShoppingListApi } from "../../services/apiShoppingLists";
import toast from "react-hot-toast";
import QueryKey from "../../utils/queryKeys";

export default function useDeleteShoppingList() {
  const queryClient = useQueryClient();
  const { isPending: isDeletingShoppingList, mutate: deleteShoppingList } =
    useMutation({
      mutationFn: deleteShoppingListApi,
      onSuccess: () => {
        toast.success("Successfully deleted shopping list");
        close();
        queryClient.invalidateQueries({ queryKey: [QueryKey.SHOPPING_LISTS] });
      },
      onError(err) {
        toast.error(err.message);
      },
    });
  return { isDeletingShoppingList, deleteShoppingList };
}
