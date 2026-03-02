const Footer = () => (
  <footer className="px-5 md:px-10 lg:px-16 py-8 mt-8">
    <div className="flex justify-between items-center text-foreground">
      <span>Oliver Bolt</span>
      <a
        href="https://instagram.com/ollie.bolt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-foreground hover:opacity-70 transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </a>
    </div>
  </footer>
);

export default Footer;
