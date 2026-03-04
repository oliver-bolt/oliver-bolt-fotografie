import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { seriesCategories } from "@/data/series";

interface NavbarProps {
  invertColors?: boolean;
  onCategoryChange?: (category: string | null) => void;
}

const categorySlugMap: Record<string, string> = {
  Action: "action",
  Travel: "travel",
  Projects: "projects",
};

const Navbar = ({ invertColors = false, onCategoryChange }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const navigate = useNavigate();

  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors
    ? "text-white hover:text-white"
    : "text-foreground hover:text-foreground";

  const handleCategoryClick = (cat: string) => {
    setWorkOpen(false);
    setMobileOpen(false);
    const slug = categorySlugMap[cat] || cat.toLowerCase();
    navigate(`/work/${slug}`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        !invertColors && "bg-background/95 backdrop-blur-sm"
      )}
    >
      <nav className="w-full">
  <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between px-6 md:px-10 py-5">
    
        <Link
          to="/"
          className={cn(
            "text-[28px] md:text-[32px] font-semibold tracking-tight",
            textColor
          )}
        >
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
                linkColor
              )}
              onClick={() => setWorkOpen(!workOpen)}
            >
              Work
            </button>

            {workOpen && (
              <div className="absolute top-full right-0 pt-2">
                <ul className="flex flex-col gap-2 min-w-[160px] text-right">
                  {seriesCategories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryClick(cat)}
                        className={cn(
                          "text-sm transition-colors block py-1 hover:underline w-full text-right bg-transparent border-none cursor-pointer",
                          invertColors
                            ? "text-white hover:text-white"
                            : "text-foreground hover:text-foreground"
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
                linkColor
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
              className={cn(
                "text-sm tracking-wide transition-colors duration-200",
                linkColor
              )}
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
              <span className="text-sm tracking-wide text-foreground">
                Work
              </span>
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                {seriesCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className="text-sm text-foreground hover:underline transition-colors bg-transparent border-none cursor-pointer text-left"
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
                className="text-sm tracking-wide text-foreground"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="https://instagram.com/ollie.bolt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-wide text-foreground"
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
</div>
</nav>
export default Navbar;
