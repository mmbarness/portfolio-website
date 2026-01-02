import { createClient } from "@/lib/supabase/server";
import type { DbPost } from "@/lib/supabase/types";

// Public queries (for blog pages)
export async function getPublishedPosts(): Promise<DbPost[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });

  // Return empty if table doesn't exist yet
  if (error) {
    console.error("getPublishedPosts error:", error);
    return [];
  }
  return data ?? [];
}

export async function getPublishedPostBySlug(
  slug: string
): Promise<DbPost | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data;
}

export async function getPublishedSlugs(): Promise<string[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("slug")
    .eq("published", true);

  if (error) throw error;
  return data?.map((p) => p.slug) ?? [];
}

// Admin queries (for CMS)
export async function getAllPosts(): Promise<DbPost[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function getPostById(id: string): Promise<DbPost | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error && error.code !== "PGRST116") throw error;
  return data;
}
