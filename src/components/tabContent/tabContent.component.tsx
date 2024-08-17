import React from "react";

const tabContent = {
  "1": "Content for Tab 1",
  "2": "Content for Tab 2",
  "3": "Content for Tab 3",
};

export function TabContent({
  id,
  isActive,
}: {
  id: string;
  isActive: boolean;
}) {
  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      tabIndex={isActive ? 0 : undefined}
    >
      <h1>Tabbed Content</h1>
      {tabContent[id as keyof typeof tabContent]}
    </div>
  );
}
