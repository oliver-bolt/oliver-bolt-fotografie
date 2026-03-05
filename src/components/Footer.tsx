import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-10 md:pt-14 pb-10 md:pb-14">
      <div className="max-w-[1600px] mx-auto px-10 md:px-14">
        {/* Balboa-like footer: left name + shifted contact block */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-start">
          {/* LEFT */}
          <div>
            <p className="text-[28px] md:text-[32px] font-medium leading-[1.1]">Oliver Bolt</p>
          </div>

          {/* CENTER: intentionally empty */}
          <div className="hidden md:block" />

          {/* CONTACT BLOCK (shifted left, left-aligned) */}
          <div className="mt-8 md:mt-0">
            <div
              className="
                md:ml-[-120px]
                lg:ml-[-160px]
                xl:ml-[-200px]
                text-center md:text-left
              "
            >
              <p className="text-[16px] md:text-[18px] font-light leading-[1.35]">oliver.bolt@gmail.com</p>
              <p className="text-[16px] md:text-[18px] font-light leading-[1.35]">
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
      </div>
    </footer>
  );
};

export default Footer;
