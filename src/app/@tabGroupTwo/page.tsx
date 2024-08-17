"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const renderTabContent = () => {
    switch (tab) {
      case "1":
        return <div>Content for Tab 1</div>;
      case "2":
        return <div>Content for Tab 2</div>;
      case "3":
        return <div>Content for Tab 3</div>;
      default:
        return <div>Content for Tab 1</div>;
    }
  };

  return (
    <div>
      <h1>Tabbed Content</h1>
      {renderTabContent()}
    </div>
  );
}
