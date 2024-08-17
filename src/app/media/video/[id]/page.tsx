import React from "react";

export default function page({ params }: { params: { id: number } }) {
  return <div>This is video details page {params.id}</div>;
}
