"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import type { DbPost } from "@/lib/supabase/types";
import { savePost, deletePost, publishPost, unpublishPost } from "../actions";
import styles from "./PostEditor.module.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface Props {
  post: DbPost | null;
}

export function PostEditor({ post }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [description, setDescription] = useState(post?.description ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [tags, setTags] = useState(post?.tags?.join(", ") ?? "");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const isNew = !post;
  const isPublished = post?.published ?? false;

  async function handleSave() {
    startTransition(async () => {
      const tagArray = tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      await savePost({
        id: post?.id,
        title,
        slug,
        description: description || null,
        content,
        tags: tagArray,
      });
      if (isNew) {
        router.push("/admin");
      }
    });
  }

  async function handlePublish() {
    if (!post) return;
    startTransition(async () => {
      await publishPost(post.id);
      router.refresh();
    });
  }

  async function handleUnpublish() {
    if (!post) return;
    startTransition(async () => {
      await unpublishPost(post.id);
      router.refresh();
    });
  }

  async function handleDelete() {
    if (!post) return;
    startTransition(async () => {
      await deletePost(post.id);
      router.push("/admin");
    });
  }

  function handleTitleChange(value: string) {
    setTitle(value);
    if (isNew) {
      const autoSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      setSlug(autoSlug);
    }
  }

  return (
    <div className={styles.editor}>
      <div className={styles.topBar}>
        <button
          onClick={handleSave}
          disabled={isPending}
          className={styles.saveButton}
        >
          {isPending ? "Saving..." : "Save"}
        </button>
        {!isNew && (
          <>
            {isPublished ? (
              <button
                onClick={handleUnpublish}
                disabled={isPending}
                className={styles.unpublishButton}
              >
                Unpublish
              </button>
            ) : (
              <button
                onClick={handlePublish}
                disabled={isPending}
                className={styles.publishButton}
              >
                Publish
              </button>
            )}
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </>
        )}
      </div>

      <div className={styles.meta}>
        <div className={styles.field}>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Post title"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label>Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="url-friendly-slug"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description for SEO"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label>Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="rust, programming"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.editorWrapper} data-color-mode="dark">
        <MDEditor
          value={content}
          onChange={(val) => setContent(val ?? "")}
          height={500}
          preview="live"
        />
      </div>

      {showDeleteConfirm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Delete &quot;{title}&quot;?</p>
            <div className={styles.modalActions}>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className={styles.cancelButton}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className={styles.confirmDeleteButton}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
