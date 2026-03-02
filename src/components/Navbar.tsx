import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { seriesCategories } from "@/data/series";

interface NavbarProps {
  invertColors?: boolean;
  onCategoryChange?: (category: string | null) => void;
}

const Navbar = ({ invertColors = false, onCategoryChange }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const location = useLocation();

  const textColor = invertColors ? "text-white" : "text-foreground";
  const mutedColor = invertColors ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground";

  const handleCategoryClick = (cat: string | null) => {
    setWorkOpen(false);
    setMobileOpen(false);
    if (onCategoryChange) {
      onCategoryChange(cat);
    }
  };

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50", !invertColors && "bg-background/95 backdrop-blur-sm")}>
      <nav className="flex items-center justify-between px-5 md:px-10 lg:px-16 py-5">
        <Link to="/" className={cn("text-[22px] md:text-[26px] tracking-tight", textColor)}>
          Oliver Bolt
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          <li
            className="relative"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <button
              className={cn(
                "text-sm tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer",
                mutedColor
              )}
              onClick={() => setWorkOpen(!workOpen)}
            >
              Work
            </button>

            {workOpen && (
              <div className="absolute top-full right-0 pt-2">
                <ul className="flex flex-col gap-2 min-w-[160px] text-right">
                  <li>
                    <button
                      onClick={() => handleCategoryClick(null)}
                      className={cn(
                        "text-sm transition-colors block py-1 hover:underline w-full text-right bg-transparent border-none cursor-pointer",
                        invertColors ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      All
                    </button>
                  </li>
                  {seriesCategories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryClick(cat)}
                        className={cn(
                          "text-sm transition-colors block py-1 hover:underline w-full text-right bg-transparent border-none cursor-pointer",
                          invertColors ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {cat}
                      </button>
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
                "text-sm tracking-wide transition-colors duration-200",
                location.pathname === "/about" ? textColor : mutedColor
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
              className={cn("text-sm tracking-wide transition-colors duration-200", mutedColor)}
            >
              Instagram
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn("md:hidden bg-transparent border-none", textColor)}
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
              <span className="text-sm tracking-wide text-foreground">Work</span>
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                <li>
                  <button
                    onClick={() => handleCategoryClick(null)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer text-left"
                  >
                    All
                  </button>
                </li>
                {seriesCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer text-left"
                    >
                      {cat}
                    </button>
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
