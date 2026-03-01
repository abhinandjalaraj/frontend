"use client";

import React, { useState } from "react";
import Image from "next/image";
import { storageurl } from "@/utils/BaseUrl";

type CarouselItem = {
  image: string;
};

type Props = {
  data?: CarouselItem[];
};

const Carousal = ({ data }: Props) => {
  const carousal = data ?? [];

  const [index, setIndex] = useState(0);

  // 🛑 IMPORTANT FIX
  if (!carousal.length) {
    return null;
  }

  const nextSlide = () => {
    setIndex((prev) =>
      prev === carousal.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? carousal.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative h-[500px] bg-black">
      <Image
        fill
        className="object-cover"
        src={storageurl + carousal[index]?.image}
        alt="carousel"
      />

      <div className="absolute z-10 w-full h-full flex items-center justify-between">
        <button onClick={prevSlide} className="text-white text-6xl">
          {"<"}
        </button>

        <button onClick={nextSlide} className="text-white text-6xl">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousal;