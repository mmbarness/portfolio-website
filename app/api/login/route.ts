import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

const ADMIN_EMAIL = "011mbarnes@gmail.com";

export async function POST(request: Request) {
  const { origin } = new URL(request.url);
  const supabase = await createClient();

  const redirectTo = `${origin}/auth/callback`;

  console.log("Attempting magic link for:", ADMIN_EMAIL);
  console.log("Redirect URL:", redirectTo);

  const { data, error } = await supabase.auth.signInWithOtp({
    email: ADMIN_EMAIL,
    options: {
      emailRedirectTo: redirectTo,
    },
  });

  console.log("Supabase response data:", JSON.stringify(data, null, 2));
  console.log("Supabase response error:", JSON.stringify(error, null, 2));

  if (error) {
    return NextResponse.json({
      error: error.message,
      code: error.code,
      status: error.status,
    }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    data,
    redirectTo,
  });
}
