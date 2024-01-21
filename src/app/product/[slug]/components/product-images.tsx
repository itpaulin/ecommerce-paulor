"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  imageUrls: string[];
  name: string;
}
const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);
  return (
    <div className="flex flex-col md:h-full md:max-w-[46rem]">
      <div className="flex h-[380px] w-full items-center justify-center gap-24 bg-accent md:h-full md:max-w-[46rem]">
        <div className="hidden md:block">
          <div className="absolute left-28 top-32">
            <div className="grid grid-rows-4 items-start gap-0 md:h-80">
              {imageUrls.map((imageUrl) => (
                <button
                  key={imageUrl}
                  className={`flex h-16 w-16 items-center justify-center rounded-lg bg-[#0B0B0B]
            ${
              currentImage === imageUrl &&
              "border-2 border-solid border-primary"
            }
            `}
                  onClick={() => setCurrentImage(imageUrl)}
                >
                  <Image
                    src={imageUrl}
                    alt={name}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[80%] w-auto max-w-[80%]"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100dvw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5 md:hidden">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent 
            ${
              currentImage === imageUrl &&
              "border-2 border-solid border-primary"
            }
            `}
            onClick={() => setCurrentImage(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
