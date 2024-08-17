import React from "react";

export default function MediaLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main>
      {children}
      {modal}
    </main>
  );
}
