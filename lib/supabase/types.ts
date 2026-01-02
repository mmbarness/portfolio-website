export interface DbPost {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  content: string;
  tags: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export type PostInsert = Omit<DbPost, "id" | "created_at" | "updated_at">;
export type PostUpdate = Partial<Omit<DbPost, "id" | "created_at" | "updated_at">>;
