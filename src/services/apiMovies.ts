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
    throw new Error("The trending movies couldn't be loaded");
  }

  return data;
}

export async function getNewMovies() {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    throw new Error("The new movies couldn't be loaded");
  }

  return data;
}

export async function getMustWatchMovies() {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("must_watch", true);

  if (error) {
    throw new Error("The must watch movies couldn't be loaded");
  }

  return data;
}

export async function getTopMovies() {
  const { data, error } = await supabase
    .from("movies")
    .select("*")
    .eq("top", true);

  if (error) {
    throw new Error("The top movies couldn't be loaded");
  }

  return data;
}
