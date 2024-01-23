import { supabase } from "./supabaseClient";

// 1 is Movie and 2 is Show
type MediaType = "Movie" | "Show";

// Get trending media
export async function getTrendingMediaItems(mediaType: MediaType) {
  const { data, error } = await supabase
    .from("media")
    .select("*")
    .eq("trending", true)
    .eq("media_type", mediaType);

  if (error) {
    throw new Error("The trending movies couldn't be loaded");
  }

  return data;
}

// Get new media
export async function getNewMediaItems(mediaType: MediaType) {
  const { data, error } = await supabase
    .from("media")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10)
    .eq("media_type", mediaType);

  if (error) {
    throw new Error("The new movies couldn't be loaded");
  }

  return data;
}

// Get must watch media
export async function getMustWatchMediaItems(mediaType: MediaType) {
  const { data, error } = await supabase
    .from("media")
    .select("*")
    .eq("must_watch", true)
    .eq("media_type", mediaType);

  if (error) {
    throw new Error("The must watch movies couldn't be loaded");
  }

  return data;
}

// Get top media
export async function getTopMediaItems(mediaType: MediaType) {
  const { data, error } = await supabase
    .from("media")
    .select("*")
    .eq("top", true)
    .eq("media_type", mediaType);

  if (error) {
    throw new Error("The top movies couldn't be loaded");
  }

  return data;
}

// Get single movie
export async function getSingleMediaItem(id: number) {
  const { data, error } = await supabase
    .from("media")
    .select(
      `*, 
      languages(title), 
      genres(title), 
      actors(image), 
      directors(image, first_name, last_name, countries(name)), 
      musicians(image, first_name, last_name, countries(name)), 
      reviews(description, rating, users (first_name, last_name, countries(name)))`,
    )
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("The movie couldn't be loaded");
  }

  return data;
}
