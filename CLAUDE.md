# Resume & Blog Site

Personal resume and blog site built with Next.js 16, deployed to matthewbarnes.tech via Vercel.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: CSS Modules with terminal aesthetic (Berkeley Mono font, dark theme)
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Magic Link (hardcoded to admin email)
- **CMS**: Custom admin interface at `/admin`
- **Editor**: @uiw/react-md-editor (rich markdown with live preview)

## Key Files

```
app/
├── page.tsx              # Resume (home page)
├── blog/
│   ├── page.tsx          # Public blog list (published posts only)
│   └── [slug]/page.tsx   # Individual blog post
├── admin/
│   ├── page.tsx          # Admin posts list
│   ├── [id]/page.tsx     # Edit/create post
│   ├── actions.ts        # Server actions (CRUD)
│   └── components/
│       ├── AdminNav.tsx
│       └── PostEditor.tsx
├── login/page.tsx        # Magic link login (no email input, hardcoded)
├── auth/callback/route.ts
└── api/login/route.ts    # Sends magic link to hardcoded email

lib/
├── posts-db.ts           # Supabase queries for posts
├── supabase/
│   ├── client.ts         # Browser client
│   ├── server.ts         # Server client
│   └── types.ts          # DbPost interface
└── types.ts              # Resume types

data/
└── resume.json           # Resume content (JSON Resume schema)

components/
├── Nav.tsx               # Fixed nav (~/resume, ~/blog)
├── Header.tsx            # Resume header
├── Section.tsx           # Section component
└── Experience.tsx        # Work experience component
```

## Environment Variables

```bash
# .env.local (not committed)
NEXT_PUBLIC_SUPABASE_URL=https://upqrhcflazmhesegzzhp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...
```

Same vars needed in Vercel project settings.

## Database Schema

```sql
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  published_at TIMESTAMPTZ
);

-- RLS: Public reads published, authenticated manages all
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read published posts" ON posts FOR SELECT USING (published = TRUE);
CREATE POLICY "Authenticated users can manage posts" ON posts FOR ALL USING (auth.role() = 'authenticated');
```

## Auth Flow

1. Visit `/login` manually (no public link)
2. Click "Send Magic Link" → email sent to hardcoded admin email
3. Click link in email → redirected to `/admin`
4. Session persists via Supabase cookies

Admin email is hardcoded in `app/api/login/route.ts`.

## Blog Workflow

1. **Create**: `/admin` → "+ New Post" → fill form → Save
2. **Edit**: `/admin` → click post → edit → Save
3. **Publish**: Edit post → click "Publish" button
4. **Unpublish**: Edit post → click "Unpublish"
5. **Delete**: Edit post → Delete → Confirm

Only published posts appear on public `/blog`.

## Local Development

```bash
npm run dev
# Visit http://localhost:3000
```

## Deployment

Push to `main` branch → Vercel auto-deploys to matthewbarnes.tech.

## Supabase Config

- **URL Configuration**: Site URL and redirect URLs must include both www and non-www variants
- **Email**: Custom SMTP via Resend for reliable magic link delivery
- **Auth Providers**: Email enabled
