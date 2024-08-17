import React from "react";
import Image from "next/image";
import Link from "next/link";

async function getData<T>(): Promise<T[]> {
  try {
    const response = await fetch(`${process.env.DEV_BASE_URL}/products`);
    return response.json();
  } catch (_error) {
    throw new Error("Error fetching data");
  }
}
export default async function photoFeedPage() {
  const data = await getData<Api.IProduct>();

  return (
    <main id="photo_feed_page">
      <h1>Photo Feed page</h1>
      <section id="photo_feed">
        {data.map((product) => (
          <Link href={`/photo-feed/${product.id}`} key={product.id}>
            <figure className="image-wrapper">
              <Image src={product.category.image} alt={product.title} fill />
            </figure>
          </Link>
        ))}
      </section>
    </main>
  );
}
