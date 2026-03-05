import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-10 md:pt-14 pb-10 md:pb-14">
      <div className="max-w-[1600px] mx-auto px-10 md:px-14">
        {/* Balboa footer: 3 columns */}
        <div className="grid grid-cols-3 items-start">
          {/* LEFT */}
          <div>
            <p className="text-[28px] md:text-[32px] font-medium leading-[1.1]">Oliver Bolt</p>
          </div>

          {/* CENTER (replaces “Made with Squarespace”) */}
          <div className="text-center">
            <p className="text-[14px] md:text-[15px] font-medium leading-[1.35]">oliver.bolt@gmail.com</p>
          </div>

          {/* RIGHT */}
          <div className="text-right">
            <p className="text-[14px] md:text-[15px] font-medium leading-[1.35]">oliver.bolt@gmail.com</p>
            <p className="text-[14px] md:text-[15px] font-medium leading-[1.35]">
              Follow on{" "}
              <a
                href="https://instagram.com/ollie.bolt"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
