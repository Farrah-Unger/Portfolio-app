import React from "react";
import { Linkedin, Twitter, Medium, Envelope } from "../icons";
import { contactMeLinks } from "../data/data";

type FooterProps = {
    contactMeLinks: string[];
}

export const Footer = ({ contactMeLinks }: FooterProps) => {
  return (
    <footer className="w-full bg-white shadow-footer mt-12 py-4 fixed bottom-0">
      <div className="flex items-center justify-center gap-1">
        <a href={contactMeLinks[0]} aria-label="Email">
         <Envelope className="icons-contactme" />
        </a>
        <a href={contactMeLinks[1]} aria-label="Email">
          <Twitter className="icons-contactme" />
        </a>
        <a href={contactMeLinks[2]} aria-label="Email">
          <Linkedin className="icons-contactme" />
        </a>
        <a href={contactMeLinks[3]} aria-label="Email">
          <Medium className="icons-contactme" />
        </a>
      </div>
    </footer>
  );
};
