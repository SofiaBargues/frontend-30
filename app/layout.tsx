import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend 30",
  description: "The courses and projects to start working on",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="bumblebee" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
