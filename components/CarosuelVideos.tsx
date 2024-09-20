"use client";
import React from "react";
import { Carousel } from "./ui/Carosuel";
import Video from "./Video"; // Assuming Video is in the same folder

export function AppleCardsCarouselDemo() {
  const videos = data.map((video, index) => (
    <div key={video.src + index} className="relative rounded-24 w-64 md:w-[24rem] h-80 md:h-[40rem]">
      <Video VideoLink={video.src} />
    </div>
  ));

  return (
    <div className="w-full h-full flex flex-col items-satrt justify-center py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
       Who is Anmol ?
      </h2>
      <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      <Carousel items={videos} />
    </div>
  );
}

const data = [
  {
    src: "v1.mp4",
  },
  {
    src: "v1.mp4",
  },
  {
    src: "v1.mp4",
  },
  {
    src: "v1.mp4",
  },
  {
    src: "v1.mp4",
  },
];
