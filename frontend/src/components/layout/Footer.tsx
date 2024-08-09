import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa"; // Import icons from react-icons

const Footer: React.FC = () => {
  return (
    <footer className="hidden md:flex text-center items-center py-3 px-4 md:px-8 text-xs bg-transparent justify-between text-gray-400">
      <div className="flex gap-4">
        <a
          href="https://x.com/Grand_Exchange_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200"
        >
          <FaTwitter className="h-4 w-4 md:h-5 md:w-5" />
        </a>
        <a
          href="https://discord.com/invite/E6yxCsjN9C"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200"
        >
          <FaDiscord className="h-4 w-4 md:h-5 md:w-5" />
        </a>
      </div>

      <div className="hover:text-gray-200 text-xs md:text-sm">
        <a href="/docs" className="link">
          Docs
        </a>
      </div>
    </footer>
  );
};

export default Footer;
