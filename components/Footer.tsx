import React from "react";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";

const Footer = () => {
  return (
    <footer className="flex lg:flex-row flex-col text-center justify-center lg:justify-between w-full items-center px-0 lg:gap-y-0 gap-y-4 lg:px-32 py-12 bg-black/[0.96]">
      <p className="font-normal text-white">
        <TextGenerateEffect words=" © 2024 Tradepulse ventures pvt Ltd. All rights reserved." />
      </p>
      <div className="flex items-center gap-x-6 justify-center">
        <a href="#" target="_blank" className="font-normal text-white">
          <TextGenerateEffect words="Contact" />
        </a>
        <a href="#" target="_blank" className="font-normal text-white">
          <TextGenerateEffect words="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/anmol-rahul-tirkey-86559a22b/" target="_blank" className="font-normal text-white">
          <TextGenerateEffect words="Linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;