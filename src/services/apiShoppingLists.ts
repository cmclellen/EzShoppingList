import supabase from "./supabase";

async function getShoppingLists() {
  const { data, error } = await supabase.from("ShoppingList").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export default getShoppingLists;
