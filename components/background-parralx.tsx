"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["./public/bg1.avif", "./public/bg2.avif", "./public/bg3.avif"];

export default function BackgroundParallax({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const newIndex = Math.min(images.length - 1, Math.floor(scrollY / windowHeight));
      setIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] transition-opacity duration-1000">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Background ${i}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${index === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
} 
