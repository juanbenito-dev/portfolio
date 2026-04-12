"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CarouselImg } from "@/types";

type CarouselProps = {
  imgs: CarouselImg[];
  parentClassName: string;
  imgsClassName: string;
};

export default function Carousel({
  imgs,
  parentClassName,
  imgsClassName,
}: CarouselProps) {
  const [imgsIndex, setImgsIndex] = useState<number>(0);

  useEffect(() => {
    const intervalTimerId = setInterval(
      () =>
        setImgsIndex((prevImgsIndex) =>
          prevImgsIndex === imgs.length - 1 ? 0 : prevImgsIndex + 1,
        ),
      5000,
    );

    return () => clearInterval(intervalTimerId);
  }, []);

  return (
    <div className={`relative overflow-hidden ${parentClassName}`}>
      <AnimatePresence initial={false}>
        <motion.img
          key={imgsIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className={imgsClassName}
          {...imgs[imgsIndex]}
        />
      </AnimatePresence>
    </div>
  );
}
