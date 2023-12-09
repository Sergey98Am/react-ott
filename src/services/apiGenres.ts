import { supabase } from "./supabaseClient";

export async function getGenres() {
  const { data, error } = await supabase
    .from("genres")
    .select("*")
    .order("title", { ascending: true });
  if (error) {
    throw new Error("Genres couldn't be loaded");
  }

  return data;
}
