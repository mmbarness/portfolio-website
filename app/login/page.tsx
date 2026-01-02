"use client";

import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const res = await fetch("/api/login", { method: "POST" });
    const data = await res.json();

    if (!res.ok) {
      setMessage({ type: "error", text: data.error });
    } else {
      setMessage({
        type: "success",
        text: "Check your email for the magic link.",
      });
    }
    setLoading(false);
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>~/login</h1>
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Sending..." : "Send Magic Link"}
        </button>
        {message && (
          <p
            className={
              message.type === "error" ? styles.error : styles.success
            }
          >
            {message.text}
          </p>
        )}
      </form>
    </main>
  );
}
