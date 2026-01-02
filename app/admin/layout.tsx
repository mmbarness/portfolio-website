import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import styles from "./admin.module.css";
import { AdminNav } from "./components/AdminNav";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className={styles.adminContainer}>
      <AdminNav userEmail={user.email ?? "Admin"} />
      <div className={styles.adminContent}>{children}</div>
    </div>
  );
}
