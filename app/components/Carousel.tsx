"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CarouselMedia } from "@/types";

type CarouselProps = {
  media: CarouselMedia[];
  parentClassName: string;
};

export default function Carousel({ media, parentClassName }: CarouselProps) {
  const [mediaIndex, setMediaIndex] = useState(0);

  const currentMedia = media[mediaIndex];

  function advance() {
    setMediaIndex((prevMediaIndex) =>
      prevMediaIndex === media.length - 1 ? 0 : prevMediaIndex + 1,
    );
  }

  useEffect(() => {
    if (currentMedia.type === "video") return;

    const timerId = setTimeout(advance, 5000);
    return () => clearTimeout(timerId);
  }, [mediaIndex]);

  return (
    <div className={`relative overflow-hidden ${parentClassName}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={mediaIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {currentMedia.type === "video" ? (
            Array(2)
              .fill(0)
              .map((_, i) => (
                // First video: Blurred, zoomed copy that fills the side gaps left by the portrait clip. Decorative, hidden from assistive tech
                // Second video: Foreground clip shown at its natural aspect ratio
                <video
                  key={currentMedia.src + i}
                  poster={currentMedia.poster}
                  autoPlay
                  muted
                  playsInline
                  aria-hidden={i === 0}
                  onEnded={i === 1 ? advance : undefined}
                  className={`absolute inset-0 h-full w-full ${i === 0 ? "scale-110 object-cover blur-xl" : "object-contain"}`}
                >
                  <source src={currentMedia.src + "webm"} type="video/webm" />
                  <source src={currentMedia.src + "mp4"} type="video/mp4" />
                </video>
              ))
          ) : (
            <Image
              src={currentMedia.src}
              alt={currentMedia.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
