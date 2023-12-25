import { supabase } from "./supabaseClient";

export async function getMovies() {
  const { data, error } = await supabase.from("movies").select("*");

  if (error) {
    throw new Error("Movies couldn't be loaded");
  }

  return data;
}
