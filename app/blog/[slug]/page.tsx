import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { compileMDX } from "next-mdx-remote/rsc";
import styles from "../blog.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} | Matthew Barnes`,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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
        <Link href="/blog" className={styles.backLink}>
          cd ..
        </Link>
        <h1 className={styles.postHeaderTitle}>{post.title}</h1>
        <div className={styles.postMeta}>{post.date}</div>
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
