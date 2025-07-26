"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  images: { url: string; alt?: string }[];
  productName: string;
}

export default function ProductGallery({ images, productName }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-muted">
        <Image
          src={images[selectedImage]?.url}
          alt={images[selectedImage]?.alt || productName}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 ${
                selectedImage === idx ? "border-primary" : "border-transparent"
              }`}
            >
              <Image
                src={img.url}
                alt={img.alt || productName}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
