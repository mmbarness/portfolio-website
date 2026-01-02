import Link from "next/link";
import { getPublishedPosts } from "@/lib/posts-db";
import { Section } from "@/components";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog | Matthew Barnes",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main className={styles.main}>
      <Section title="Posts">
        {posts.length === 0 ? (
          <p className={styles.empty}>No posts yet.</p>
        ) : (
          <ul className={styles.postList}>
            {posts.map((post) => (
              <li key={post.slug} className={styles.postItem}>
                <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                  <span className={styles.postDate}>
                    {(post.published_at ?? post.created_at).slice(0, 10)}
                  </span>
                  <span className={styles.postTitle}>{post.title}</span>
                </Link>
                {post.description && (
                  <p className={styles.postDesc}>{post.description}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </Section>
    </main>
  );
}
