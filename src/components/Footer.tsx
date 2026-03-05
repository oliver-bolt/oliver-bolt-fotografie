import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pb-10 md:pb-14">
      <div className="max-w-[1600px] mx-auto px-10 md:px-14">
        <div className="flex items-end">
          {/* leicht nach rechts gerückt wie Balboa */}
          <div className="ml-2">
            <p className="text-[28px] md:text-[32px] font-medium leading-[1.1]">Oliver Bolt</p>

            <p className="text-[28px] md:text-[32px] font-medium leading-[1.1]">oliver.bolt@gmail.com</p>

            <p className="text-[28px] md:text-[32px] font-medium leading-[1.1]">
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
