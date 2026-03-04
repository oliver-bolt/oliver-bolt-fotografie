import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
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

// IMPORTANT: must match landing shell to ever get perfect left/right alignment
const SHELL = "w-full max-w-[1400px] mx-auto px-6 md:px-10";

const Navbar = ({ invertColors = false, onCategoryChange }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const lastYRef = useRef<number>(0);
  const tickingRef = useRef(false);

  // ---- Active route detection ----
  const isWorkActive = useMemo(
    () => location.pathname === "/work" || location.pathname.startsWith("/work/"),
    [location.pathname],
  );
  const isAboutActive = useMemo(() => location.pathname === "/about", [location.pathname]);

  const activeWorkSlug = useMemo(() => {
    const m = location.pathname.match(/^\/work\/([^/]+)/);
    return m?.[1] ?? null;
  }, [location.pathname]);

  // ---- Colors ----
  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkBase = invertColors ? "text-white" : "text-foreground";
  const underlineClass = invertColors
    ? "underline underline-offset-4 decoration-white"
    : "underline underline-offset-4 decoration-foreground";

  // ---- Scroll hide/show ----
  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const last = lastYRef.current;
        const delta = y - last;
        const THRESH = 8;

        if (y < 20) {
          setHidden(false);
        } else if (delta > THRESH) {
          setHidden(true);
          setWorkOpen(false);
          setMobileOpen(false);
        } else if (delta < -THRESH) {
          setHidden(false);
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---- Navigation helper ----
  const handleCategoryClick = (cat: string) => {
    setWorkOpen(false);
    setMobileOpen(false);
    onCategoryChange?.(cat);

    const slug = categorySlugMap[cat] || cat.toLowerCase();
    navigate(`/work/${slug}`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        hidden && "-translate-y-full",
        !invertColors && "bg-background/95 backdrop-blur-sm",
      )}
    >
      <nav className="w-full">
        <div className={cn(SHELL, "flex items-center justify-between py-5")}>
          {/* Logo (bigger) */}
          <Link
            to="/"
            className={cn("text-[32px] md:text-[38px] font-semibold tracking-tight", textColor)}
            onClick={() => {
              setWorkOpen(false);
              setMobileOpen(false);
            }}
          >
            Oliver Bolt
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {/* Work + dropdown */}
            <li
              // KEY: this makes dropdown align to the word "Work" (not page edge)
              className="relative inline-flex flex-col items-end"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <button
                className={cn(
                  // bigger than before (~10-15%)
                  "text-[17px] tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer",
                  linkBase,
                  isWorkActive && underlineClass,
                )}
                onClick={() => setWorkOpen(!workOpen)}
              >
                Work
              </button>

              {workOpen && (
                <div className="absolute top-full right-0 pt-2">
                  <div
                    className={cn(
                      // black background on hero pages
                      invertColors ? "bg-black/90" : "bg-background/95 backdrop-blur-sm",
                      "px-3 py-2",
                    )}
                  >
                    {/* categories are right-aligned to WORK */}
                    <ul className="flex flex-col items-end gap-[6px] min-w-[140px]">
                      {seriesCategories.map((cat) => {
                        const slug = categorySlugMap[cat] || cat.toLowerCase();
                        const isActiveCat = activeWorkSlug === slug;

                        return (
                          <li key={cat} className="w-full">
                            <button
                              onClick={() => handleCategoryClick(cat)}
                              className={cn(
                                "text-[16px] leading-tight transition-colors block py-[2px] bg-transparent border-none cursor-pointer text-right w-full hover:underline",
                                invertColors ? "text-white" : "text-foreground",
                                isActiveCat && underlineClass,
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
              )}
            </li>

            <li>
              <Link
                to="/about"
                className={cn(
                  "text-[17px] tracking-wide transition-colors duration-200",
                  linkBase,
                  isAboutActive && underlineClass,
                )}
                onClick={() => {
                  setWorkOpen(false);
                  setMobileOpen(false);
                }}
              >
                About
              </Link>
            </li>

            <li>
              <a
                href="https://instagram.com/ollie.bolt"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("text-[17px] tracking-wide transition-colors duration-200", linkBase)}
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
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={cn("md:hidden px-5 pb-8", invertColors ? "bg-black" : "bg-background")}>
          <ul className={cn("flex flex-col gap-5", invertColors ? "text-white" : "text-foreground")}>
            <li>
              <span className="text-[16px] tracking-wide">Work</span>
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                {seriesCategories.map((cat) => {
                  const slug = categorySlugMap[cat] || cat.toLowerCase();
                  const isActiveCat = activeWorkSlug === slug;

                  return (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryClick(cat)}
                        className={cn(
                          "text-[16px] hover:underline transition-colors bg-transparent border-none cursor-pointer text-left",
                          invertColors ? "text-white" : "text-foreground",
                          isActiveCat && underlineClass,
                        )}
                      >
                        {cat}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-[16px] tracking-wide",
                  invertColors ? "text-white" : "text-foreground",
                  isAboutActive && underlineClass,
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
                className={cn("text-[16px] tracking-wide", invertColors ? "text-white" : "text-foreground")}
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
