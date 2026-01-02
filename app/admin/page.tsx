import Link from "next/link";
import { getAllPosts } from "@/lib/posts-db";
import styles from "./admin.module.css";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Posts</h1>
        <Link href="/admin/new" className={styles.newButton}>
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className={styles.empty}>No posts yet. Create your first post!</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>
                  <Link
                    href={`/admin/${post.id}`}
                    className={styles.postLink}
                  >
                    {post.title}
                  </Link>
                </td>
                <td>
                  <span
                    className={
                      post.published ? styles.published : styles.draft
                    }
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className={styles.date}>
                  {new Date(post.updated_at).toLocaleDateString()}
                </td>
                <td>
                  <Link
                    href={`/admin/${post.id}`}
                    className={styles.editLink}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
