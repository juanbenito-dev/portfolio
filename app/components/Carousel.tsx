"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CarouselMedia } from "@/types";

type CarouselProps = {
  media: CarouselMedia[];
  parentClassName: string;
};

export default function Carousel({ media, parentClassName }: CarouselProps) {
  const [mediaIndex, setMediaIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentMedia = media[mediaIndex];

  useEffect(() => {
    const intervalTimerId = setInterval(
      () =>
        setMediaIndex((prevMediaIndex) =>
          prevMediaIndex === media.length - 1 ? 0 : prevMediaIndex + 1,
        ),
      currentMedia.type === "video" ? videoRef.current!.duration * 1000 : 5000,
    );

    return () => clearInterval(intervalTimerId);
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
                  ref={videoRef}
                  poster={currentMedia.poster}
                  autoPlay
                  muted
                  playsInline
                  aria-hidden={i === 0}
                  className={`absolute inset-0 h-full w-full ${i === 0 ? "scale-110 object-cover blur-xl" : "object-contain"}`}
                >
                  <source src={currentMedia.src + "webm"} type="video/webm" />
                  <source src={currentMedia.src + "mp4"} type="video/mp4" />
                </video>
              ))
          ) : (
            <img
              src={currentMedia.src}
              alt={currentMedia.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
