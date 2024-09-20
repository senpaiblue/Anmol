import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import Video from "../Video";
import { TextGenerateEffect } from "./TextGenerateEffect";

export function Features() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-lg font-normal mb-8">
            <TextGenerateEffect words=" Built and launched Aceternity UI and Aceternity UI Pro from scratch" />
          </p>
          <div className="grid grid-cols-2 gap-8">
            {" "}
            {/* Adjusted gap for equal spacing */}
            <Video VideoLink="/v1.mp4" />
            <Video VideoLink="/v2.mp4" />
            <Video VideoLink="/v3.mp4" />
            <Video VideoLink="/v4.mp4" />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-white text-xs md:text-lg font-normal mb-8">
            <TextGenerateEffect
              words=" I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum."
            />
          </p>
          <p className="text-white text-xs md:text-lg font-normal mb-8">
            <TextGenerateEffect
              words=" Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built."
            />
          </p>
          <div className="grid grid-cols-2 gap-8">
            {" "}
            {/* Adjusted gap for equal spacing */}
            <Video VideoLink="/v1.mp4" />
            <Video VideoLink="/v2.mp4" />
            <Video VideoLink="/v3.mp4" />
            <Video VideoLink="/v4.mp4" />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div className="w-full flex flex-col items-start justify-center">
          <p className="text-white text-xs md:text-lg font-normal mb-8">
            <TextGenerateEffect
              words=" I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum."
            />
          </p>
          <div className="w-full">
            {" "}
            {/* Ensure this div is full width */}
            <Video VideoLink="/sampleVideo.mp4" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full lg:py-20">
      <Timeline data={data} />
    </div>
  );
}
