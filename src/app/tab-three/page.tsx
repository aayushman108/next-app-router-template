import React from "react";
import { TabContent } from "@/components/tabContent/tabContent.component";

export default function TabThree({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const tab = searchParams?.tab || "1";

  const tabIds = ["1", "2", "3"]; // may be fetched data from server

  return (
    <>
      {tabIds.map((id) => (
        <div key={id} hidden={tab !== id}>
          <TabContent id={id} isActive={tab === id} />
        </div>
      ))}
    </>
  );
}
