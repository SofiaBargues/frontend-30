"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  // @ts-expect-error need to update typescript
  return <ThemeProvider defaultTheme="emerald">{children}</ThemeProvider>;
}
1;
