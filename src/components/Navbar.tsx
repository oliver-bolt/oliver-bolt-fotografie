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

const Navbar = ({ invertColors = false }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground";

  const isAboutActive = location.pathname === "/about";
  const isWorkActive = location.pathname.startsWith("/work/");

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
        // Landing/About: no black bar — keep clean light bg
        !invertColors && "bg-background/95 backdrop-blur-sm",
        // Work (hero): transparent overlay (text is white via invertColors)
        invertColors && "bg-transparent",
      )}
    >
      <nav className="w-full">
        {/* IMPORTANT: This container must match your page SHELL container */}
        <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between px-10 md:px-14 py-7">
          {/* Logo */}
          <Link to="/" className={cn("text-[30px] md:text-[34px] font-semibold tracking-tight", textColor)}>
            Oliver Bolt
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-10">
            {/* Work + dropdown */}
            <li className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
              <button
                type="button"
                className={cn(
                  "text-[16px] tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer",
                  linkColor,
                  isWorkActive && "underline underline-offset-4",
                  invertColors && isWorkActive && "decoration-white",
                )}
                onClick={() => setWorkOpen((v) => !v)}
              >
                Work
              </button>

              {workOpen && (
                <div className="absolute top-full right-0 pt-1">
                  <div className="relative">
                    {/* Black background ALWAYS (also on landing) */}
                    {/* Overhang to the RIGHT allowed without shifting text */}
                    <div className="absolute inset-y-0 left-0 -right-6 bg-black" />

                    {/* Content: NO right padding -> right text edge aligns with Work */}
                    <div className="relative py-2 pl-6 pr-0">
                      <ul className="flex flex-col gap-0.5 text-right min-w-[140px]">
                        {seriesCategories.map((cat) => {
                          const slug = categorySlugMap[cat] || cat.toLowerCase();
                          const activeCat = location.pathname === `/work/${slug}`;

                          return (
                            <li key={cat} className="flex justify-end">
                              <button
                                type="button"
                                onClick={() => handleCategoryClick(cat)}
                                className={cn(
                                  "text-[16px] text-white hover:text-white hover:underline",
                                  "bg-transparent border-none cursor-pointer",
                                  "py-0.5 px-0", // IMPORTANT: no horizontal padding
                                  activeCat && "underline underline-offset-4",
                                )}
                              >
                                {cat}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/about"
                className={cn(
                  "text-[16px] tracking-wide transition-colors duration-200",
                  linkColor,
                  isAboutActive && "underline underline-offset-4",
                  invertColors && isAboutActive && "decoration-white",
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
                className={cn("text-[16px] tracking-wide transition-colors duration-200", linkColor)}
              >
                Instagram
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={cn("md:hidden bg-transparent border-none", textColor)}
            aria-label="Menu"
            type="button"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background px-10 pb-10">
          <ul className="flex flex-col gap-6 pt-2">
            <li>
              <span className="text-[16px] tracking-wide text-foreground">Work</span>
              <ul className="mt-3 ml-4 flex flex-col gap-2">
                {seriesCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      type="button"
                      onClick={() => handleCategoryClick(cat)}
                      className="text-[16px] text-foreground hover:underline transition-colors bg-transparent border-none cursor-pointer text-left"
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
                  "text-[16px] tracking-wide text-foreground",
                  isAboutActive && "underline underline-offset-4",
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
                className="text-[16px] tracking-wide text-foreground"
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
