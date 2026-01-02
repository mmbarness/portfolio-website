import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { Section } from "@/components";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog | Matthew Barnes",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          cd ..
        </Link>
        <h1 className={styles.title}>~/blog</h1>
      </header>

      <Section title="Posts">
        {posts.length === 0 ? (
          <p className={styles.empty}>No posts yet.</p>
        ) : (
          <ul className={styles.postList}>
            {posts.map((post) => (
              <li key={post.slug} className={styles.postItem}>
                <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                  <span className={styles.postDate}>{post.date}</span>
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
