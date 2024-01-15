import { supabase } from "./supabaseClient";

// Get trending movies
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

// Get new movies
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

// Get must watch movies
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

// Get top movies
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

// Get single movie
export async function getSingleMovie(id: number) {
  const { data, error } = await supabase
    .from("movies")
    .select(`*, languages (title)`)
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("The movie couldn't be loaded");
  }

  return data;
}
