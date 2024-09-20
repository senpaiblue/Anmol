"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Video = ({ VideoLink }: { VideoLink: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Prevents the video from toggling play/pause on click, especially for mobile
    if ((event.target as HTMLElement).tagName !== "VIDEO") {
      handlePlayPause();
    }
  };

  return (
    <div className="relative rounded-24" onClick={handleClick}>
      <video
        ref={videoRef}
        className=" object-fit max-h-full  max-w-full shadow-lg" // Adjusted for consistent size and shadow
        loop
        preload="auto"
      >
        <source src={VideoLink} />
      </video>
      <div className="absolute inset-0 flex justify-center items-center">
        {!isPlaying && (
          <Image
            src="/Play.svg"
            width={96}
            height={96}
            alt="playbutton"
            className="cursor-pointer hidden md:flex"
          />
        )}
        {!isPlaying && (
          <Image
            src="/Play.svg"
            width={48}
            height={48}
            alt="playbutton"
            className="cursor-pointer flex md:hidden"
          />
        )}
      </div>
    </div>
  );
};

export default Video;
