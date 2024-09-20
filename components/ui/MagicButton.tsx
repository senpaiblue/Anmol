import React from "react";
import { UrlWithStringQuery } from "url";

const MagicButton = ({title,otherClasses}:{title:string,otherClasses?:string}) => {
  return (
      <button  className="relative inline-flex h-12 overflow-hidden rounded-[8px] p-[4px] focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-neutral-900">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#000000_50%,#737373_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[8px] bg-neutral-500 md:px-[48px] md:py-[16px] px-[32px] py-[12px] text-[16px] md:text-[18px] font-medium text-white backdrop-blur-3xl">
        <span className={`relative ${otherClasses}`}>
          {title}
        </span>
        </span>
      </button>
  );
};

export default MagicButton;