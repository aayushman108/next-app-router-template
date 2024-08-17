import React from "react";
import Image from "next/image";
import { Modal } from "@/components/modal/modal.component";

async function getSingleProduct<T>(id: number): Promise<T> {
  try {
    const response = await fetch(`${process.env.DEV_BASE_URL}/products/${id}`);
    return response.json();
  } catch (_error) {
    throw new Error("Error fetching data");
  }
}

export default async function SinglePhotoFeedModal({
  params,
}: {
  params: { id: number };
}) {
  const data = await getSingleProduct<Api.IProduct>(params.id);
  return (
    <Modal>
      <div className="single_photo_feed_modal">
        <figure className="image_wrapper">
          <Image
            src={data.category?.image ?? ""}
            alt={data.category.name}
            fill
          />
        </figure>
        <div className="content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ullam
          voluptates a quaerat excepturi odit dolore minus magni reprehenderit
          ipsam? Fugiat tempora ex voluptates quae nemo maiores sapiente
          deserunt laborum doloremque, consequuntur rerum dignissimos error
          velit enim blanditiis hic, quasi dolor laboriosam quia facilis
          eligendi nisi commodi nobis. Nemo ipsam ratione magni porro,
          voluptatem expedita harum. Aperiam quaerat, enim sed, dolor voluptas
          unde vel iste culpa vitae molestias accusamus perferendis omnis sequi
          nobis a pariatur quis facilis rem praesentium, repellendus ad
          cupiditate! Quo molestias, non esse saepe aliquam quia iure inventore,
          rerum sunt, ipsam ea dolores nostrum deleniti porro dolorem.
        </div>
      </div>
    </Modal>
  );
}
