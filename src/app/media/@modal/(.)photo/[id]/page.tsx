import React from "react";

export default function page({ params }: { params: { id: number } }) {
  return <div>This is photo page modal {params.id}</div>;
}
