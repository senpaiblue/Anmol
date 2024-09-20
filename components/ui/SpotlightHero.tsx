import React from "react";
import { Spotlight } from "./Spotlight";
import { ContainerScroll } from "./Scrollanimation";
import Video from "../Video";
import { TextHoverEffect } from "./TextHover";

export function SpotlightHero() {
  return (
    <section className="h-[48rem] lg:h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="-top-40 left-44 md:left-78 md:-top-28"
        fill="white"
      />
      <div className=" p-4 max-w-7xl mx-auto top-30 z-10 items-center justify-center flex flex-col  w-full pt-20 md:pt-48">
      <ContainerScroll
        titleComponent={
          <>
          <TextHoverEffect text="ANMOL"/>
          </>
        }
      >
        <Video VideoLink="sampleVideo.mp4"/>
      </ContainerScroll>
    </div>
    </section>
  );
}
