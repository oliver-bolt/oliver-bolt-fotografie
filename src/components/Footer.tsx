const Footer = () => (
  <footer className="px-5 md:px-10 lg:px-16 py-12 mt-8">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-muted-foreground">
      <span className="font-medium text-foreground">Oliver Bolt</span>
      <div className="flex gap-6">
        <a href="mailto:mail@photographer.com" className="hover:text-foreground transition-colors">
          mail@photographer.com
        </a>
        <a href="https://instagram.com/ollie.bolt" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
