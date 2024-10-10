import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "30 Frontend Challenges",
  description: "Test or enhance your frontend skills through these challenges.",
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://frontend-30.vercel.app/`)
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
