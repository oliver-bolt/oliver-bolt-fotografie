import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-16">
    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
      <div>
        <p className="font-serif text-lg tracking-wider font-light text-foreground">Portfolio</p>
        <p className="text-xs text-muted-foreground mt-2 font-sans">Curated Visual Series</p>
      </div>
      <div className="flex gap-10 text-xs tracking-widest uppercase font-sans text-muted-foreground">
        <Link to="/portfolio" className="hover:text-foreground transition-colors">Serien</Link>
        <Link to="/about" className="hover:text-foreground transition-colors">Über</Link>
        <Link to="/contact" className="hover:text-foreground transition-colors">Kontakt</Link>
      </div>
    </div>
    <p className="text-xs text-muted-foreground mt-12 font-sans">© {new Date().getFullYear()} — Alle Rechte vorbehalten</p>
  </footer>
);

export default Footer;
