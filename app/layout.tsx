import type { Metadata } from "next";
import { Nav } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matthew Barnes - Resume",
  description: "Senior Software Engineer - AI Agent Orchestration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
