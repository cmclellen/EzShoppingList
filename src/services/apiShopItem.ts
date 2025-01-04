import supabase from "./supabase";

export interface ShopItem {
  id?: number;
  name: string;
  quantity: number;
  completed: boolean;
  shopping_list_id?: number;
}

async function updateShopItemCompletedStatus(id: number, completed: boolean) {
  const { data, error } = await supabase
    .from("ShopItem")
    .update({ completed: completed })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  console.log(id, data);
  return data;
}

async function addShopItem(item: ShopItem) {
  const { data, error } = await supabase
    .from("ShopItem")
    .insert([item])
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

export { updateShopItemCompletedStatus, addShopItem };
