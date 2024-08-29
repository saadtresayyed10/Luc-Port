import { Gamepad2, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-center lg:gap-x-16 gap-x-12 p-6">
      <Link href="https://github.com/saadtresayyed10/" target="_blank">
        <Github className="w-6 h-6" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/saad-sayyed-trev/"
        target="_blank"
      >
        <Linkedin className="w-6 h-6" />
      </Link>
      <Link href="https://www.instagram.com/sameoldtreva/" target="_blank">
        <Instagram className="w-6 h-6" />
      </Link>
      <Link href="https://www.youtube.com/@stealthgamingsf5909" target="_blank">
        <Gamepad2 className="w-6 h-6" />
      </Link>
      {/* 
      
      
      */}
    </div>
  );
};

export default Footer;
