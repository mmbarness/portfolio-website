import { notFound } from "next/navigation";
import { getPublishedPostBySlug } from "@/lib/posts-db";
import { compileMDX } from "next-mdx-remote/rsc";
import styles from "../blog.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} | Matthew Barnes`,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  return (
    <article className={styles.article}>
      <header className={styles.postHeader}>
        <h1 className={styles.postHeaderTitle}>{post.title}</h1>
        <div className={styles.postMeta}>
          {(post.published_at ?? post.created_at).slice(0, 10)}
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className={styles.content}>{content}</div>
    </article>
  );
}
