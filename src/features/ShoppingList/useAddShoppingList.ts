import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addShoppingList as addShoppingListApi } from "../../services/apiShoppingLists";
import toast from "react-hot-toast";
import QueryKey from "../../utils/queryKeys";
import { useNavigate } from "react-router-dom";

export default function useAddShoppingList() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isAddingShoppingList, mutate: addShoppingList } =
    useMutation({
      mutationFn: addShoppingListApi,
      onSuccess: () => {
        toast.success("Shopping list successfully created");
        navigate("..");
        queryClient.invalidateQueries({ queryKey: [QueryKey.SHOPPING_LISTS] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { addShoppingList, isAddingShoppingList };
}
