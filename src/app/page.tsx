import React from "react";
import Link from "next/link";
// import { Header } from "@/components";
// import { CallbackHookCheck } from "@/components/concepts";

export default function Home() {
  return (
    <div className="link">
      <div className="link_div">Hello world</div>
      {/* <Header /> */}
      <Link href="photo-feed">Go to photo-feed page</Link>
      {/* <CallbackHookCheck /> */}
    </div>
  );
}
