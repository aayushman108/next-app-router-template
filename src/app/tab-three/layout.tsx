import React from "react";
import { TabThreeNav } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TabThreeNav />
      {children}
    </div>
  );
}
