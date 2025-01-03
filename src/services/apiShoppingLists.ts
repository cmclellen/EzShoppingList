import supabase from "./supabase";

export interface ShoppingList {
  id?: number;
  name: string;
}

async function getShoppingLists(): Promise<ShoppingList[]> {
  const { data, error } = await supabase.from("ShoppingList").select("*");

  if (error) {
    console.error(error);
    throw new Error("Shopping lists could not be loaded");
  }

  return data;
}

async function addShoppingList(shoppingList: ShoppingList) {
  const { data, error } = await supabase
    .from("ShoppingList")
    .insert([shoppingList])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Shopping list could not be created");
  }

  return data;
}

export { getShoppingLists, addShoppingList };
