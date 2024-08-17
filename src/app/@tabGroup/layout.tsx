import React from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/">Tab</Link>
      <Link href="/tab-group-one">Tab 1</Link>
      <Link href="/tab-group-two">Tab 2</Link>
      <div>{children}</div>
    </>
  );
}
