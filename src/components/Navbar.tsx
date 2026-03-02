import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { seriesCategories } from "@/data/series";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-5 md:px-10 lg:px-16 py-5">
        <Link to="/" className="text-sm font-medium tracking-wide text-foreground">
          Oliver Bolt
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {/* Work with dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <Link
              to="/portfolio"
              className={cn(
                "text-sm tracking-wide transition-opacity duration-300",
                location.pathname === "/portfolio"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Work
            </Link>

            {workOpen && (
              <div className="absolute top-full right-0 pt-2">
                <ul className="flex flex-col gap-2 min-w-[180px]">
                  {seriesCategories.map((cat) => (
                    <li key={cat}>
                      <Link
                        to={`/portfolio?category=${encodeURIComponent(cat)}`}
                        className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors block py-1"
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li>
            <Link
              to="/about"
              className={cn(
                "text-sm tracking-wide transition-opacity duration-300",
                location.pathname === "/about"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              About
            </Link>
          </li>

          <li>
            <a
              href="https://instagram.com/ollie.bolt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-opacity duration-300"
            >
              Instagram
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background px-5 pb-8">
          <ul className="flex flex-col gap-5">
            <li>
              <Link
                to="/portfolio"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm tracking-wide",
                  location.pathname === "/portfolio" ? "text-foreground" : "text-muted-foreground"
                )}
              >
                Work
              </Link>
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                {seriesCategories.map((cat) => (
                  <li key={cat}>
                    <Link
                      to={`/portfolio?category=${encodeURIComponent(cat)}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-sm tracking-wide",
                  location.pathname === "/about" ? "text-foreground" : "text-muted-foreground"
                )}
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="https://instagram.com/ollie.bolt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide text-muted-foreground"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
