import React from "react";

export default function page({ params }: { params: { id: number } }) {
  return <div>This is single photo page {params.id}</div>;
}
