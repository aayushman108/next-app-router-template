"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div>
      <nav>
        <Link href={`${pathname}?${createQueryString("tab", "1")}`}>
          Tab 1- TabGroupTwo
        </Link>
        <Link href={`${pathname}?${createQueryString("tab", "2")}`}>
          Tab 2 - TabGroupTwo
        </Link>
        <Link href={`${pathname}?${createQueryString("tab", "3")}`}>
          Tab 3 - TabGroupTwo
        </Link>
      </nav>
      {children}
    </div>
  );
}
