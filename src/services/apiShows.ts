import { supabase } from "./supabaseClient";

// Get trending shows
export async function getTrendingShows() {
  const { data, error } = await supabase
    .from("shows")
    .select("*")
    .eq("trending", true);

  if (error) {
    throw new Error("The trending shows couldn't be loaded");
  }

  return data;
}

// Get new shows
export async function getNewShows() {
  const { data, error } = await supabase
    .from("shows")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    throw new Error("The new shows couldn't be loaded");
  }

  return data;
}

// Get must watch shows
export async function getMustWatchShows() {
  const { data, error } = await supabase
    .from("shows")
    .select("*")
    .eq("must_watch", true);

  if (error) {
    throw new Error("The must watch shows couldn't be loaded");
  }

  return data;
}
