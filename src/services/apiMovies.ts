import { supabase } from "./supabaseClient";

export async function getMovies() {
  const { data, error } = await supabase.from("movies").select("*");

  if (error) {
    throw new Error("Movies couldn't be loaded");
  }

  return data;
}

export async function getTrendingMovies() {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("trending", true);

  if (error) {
    throw new Error("The tending ovies couldn't be loaded");
  }

  return data;
}
