export type CarouselImg = { src: string; alt: string };

export type CarouselVideo = { src: string; poster?: string };

export type CarouselMedia =
  | ({ type: "img" } & CarouselImg)
  | ({ type: "video" } & CarouselVideo);
