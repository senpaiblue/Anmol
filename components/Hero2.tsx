"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/Scrollanimation";
import Video from "./Video";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold dark:text-white">
              Your Local <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Video VideoLink="v1.mp4"/>
      </ContainerScroll>
    </div>
  );
}
