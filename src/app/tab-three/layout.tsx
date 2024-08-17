"use client";
import React, { useState, useEffect, useCallback } from "react";
// import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState("1");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    const tab = searchParams.get("tab") || "1";
    setActiveTab(tab);
  }, [searchParams]);

  const tabs = [
    { id: "1", label: "Tab 1" },
    { id: "2", label: "Tab 2" },
    { id: "3", label: "Tab 3" },
  ];

  return (
    <div>
      <nav role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => {
              router.push(pathname + "?" + createQueryString("tab", tab.id));
            }}
          >
            {/* <Link href={`?tab=${tab.id}`}>{tab.label}</Link> */}

            {/* <Link
              href={
                // <pathname>?sort=desc
                pathname + "?" + createQueryString("tab", tab.id)
              }
            >
              {tab.label}
            </Link> */}

            {tab.label}
          </button>
        ))}
      </nav>
      {children}
    </div>
  );
}
