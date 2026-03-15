const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SocialLinks = () => (
  <div className="flex items-center gap-4">
    <a
      href="https://instagram.com/ollie.bolt"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-foreground/60 hover:text-foreground transition-colors duration-200"
    >
      <InstagramIcon />
    </a>
    <a
      href="https://www.linkedin.com/in/oliver-bolt-733456228/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-foreground/60 hover:text-foreground transition-colors duration-200"
    >
      <LinkedInIcon />
    </a>
  </div>
);

const Footer = () => {
  return (
    <footer className="w-full pt-12 md:pt-16 pb-10 md:pb-14">
      <div className="max-w-[1600px] mx-auto px-10 md:px-14">
        {/* Subtle divider */}
        <div className="border-t border-foreground/10 pt-10 md:pt-12" />

        {/* MOBILE */}
        <div className="md:hidden">
          <p className="text-[28px] font-medium leading-[1.1] mb-5">Oliver Bolt</p>

          <p className="text-[14px] font-light text-foreground/50 mb-6">
            © 2026 Oliver Bolt
          </p>

          <a
            href="mailto:oliver.bolt@gmail.com"
            className="text-[16px] font-light text-foreground/80 hover:text-foreground transition-colors"
          >
            oliver.bolt@gmail.com
          </a>

          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex items-end justify-between">
          {/* LEFT */}
          <div>
            <p className="text-[32px] font-medium leading-[1.1]">Oliver Bolt</p>
            <p className="text-[14px] font-light text-foreground/50 mt-2">
              © 2026 Oliver Bolt
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-end gap-3">
            <a
              href="mailto:oliver.bolt@gmail.com"
              className="text-[16px] font-light text-foreground/80 hover:text-foreground transition-colors"
            >
              oliver.bolt@gmail.com
            </a>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
