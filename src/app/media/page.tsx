import React from "react";
import Link from "next/link";

export default function MediaPage() {
  return (
    <section className="media_page">
      <div>This is the heading for the media page</div>
      <Link href="/media/photo/1">Go to photo detail page/modal</Link>
      <Link href="/media/video/1">Go to video detail page/modal</Link>
    </section>
  );
}
