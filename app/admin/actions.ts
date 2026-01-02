"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function savePost(data: {
  id?: string;
  title: string;
  slug: string;
  description: string | null;
  content: string;
  tags: string[];
}) {
  const supabase = await createClient();

  if (data.id) {
    const { error } = await supabase
      .from("posts")
      .update({
        title: data.title,
        slug: data.slug,
        description: data.description,
        content: data.content,
        tags: data.tags,
      })
      .eq("id", data.id);

    if (error) throw error;
  } else {
    const { error } = await supabase.from("posts").insert({
      title: data.title,
      slug: data.slug,
      description: data.description,
      content: data.content,
      tags: data.tags,
      published: false,
      published_at: null,
    });

    if (error) throw error;
  }

  revalidatePath("/admin");
  revalidatePath("/blog");
}

export async function publishPost(id: string) {
  const supabase = await createClient();

  const { data: post } = await supabase
    .from("posts")
    .select("published_at")
    .eq("id", id)
    .single();

  const { error } = await supabase
    .from("posts")
    .update({
      published: true,
      published_at: post?.published_at ?? new Date().toISOString(),
    })
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/admin");
  revalidatePath("/blog");
}

export async function unpublishPost(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("posts")
    .update({ published: false })
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/admin");
  revalidatePath("/blog");
}

export async function deletePost(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) throw error;

  revalidatePath("/admin");
  revalidatePath("/blog");
}
