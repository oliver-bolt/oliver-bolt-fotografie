import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-12 md:pt-16 pb-10 md:pb-14">
      <div className="max-w-[1600px] mx-auto px-10 md:px-14">
        {/* MOBILE */}
        <div className="md:hidden">
          <p className="text-[28px] font-medium leading-[1.1] mb-6">Oliver Bolt</p>

          <div className="text-[18px] font-light leading-[1.4]">
            <p>oliver.bolt@gmail.com</p>
            <p>
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

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 items-start">
          {/* LEFT */}
          <div>
            <p className="text-[32px] font-medium leading-[1.1]">Oliver Bolt</p>
          </div>

          {/* CONTACT BLOCK (moved into column 2) */}
          <div className="ml-8 lg:ml-16 xl:ml-24">
            <div className="text-[18px] font-light leading-[1.4]">
              <p>oliver.bolt@gmail.com</p>
              <p>
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

          {/* EMPTY COLUMN */}
          <div />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
