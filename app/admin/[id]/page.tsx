import { notFound } from "next/navigation";
import { getPostById } from "@/lib/posts-db";
import { PostEditor } from "../components/PostEditor";

interface Props {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;

  if (id === "new") {
    return <PostEditor post={null} />;
  }

  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return <PostEditor post={post} />;
}
