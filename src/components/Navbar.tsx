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

// ✅ MUST MATCH Index.tsx SHELL exactly (max-w + px)
const SHELL = "w-full max-w-[1400px] mx-auto px-6 md:px-10";

const Navbar = ({ invertColors = false, onCategoryChange }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const lastYRef = useRef<number>(0);
  const tickingRef = useRef(false);

  // ---------- Active states ----------
  const isWorkActive = useMemo(() => {
    return location.pathname === "/work" || location.pathname.startsWith("/work/");
  }, [location.pathname]);

  const isAboutActive = useMemo(() => {
    return location.pathname === "/about";
  }, [location.pathname]);

  // ---------- Colors ----------
  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkBase = invertColors ? "text-white" : "text-foreground";

  // ---------- Scroll-hide behavior ----------
  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const lastY = lastYRef.current;
        const delta = y - lastY;

        // small threshold to prevent jitter
        const THRESH = 8;

        // show near top always
        if (y < 20) {
          setHidden(false);
        } else if (delta > THRESH) {
          // scrolling down => hide
          setHidden(true);
          setWorkOpen(false);
          setMobileOpen(false);
        } else if (delta < -THRESH) {
          // scrolling up => show
          setHidden(false);
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---------- Navigation ----------
  const handleCategoryClick = (cat: string) => {
    setWorkOpen(false);
    setMobileOpen(false);
    onCategoryChange?.(cat);

    const slug = categorySlugMap[cat] || cat.toLowerCase();
    navigate(`/work/${slug}`);
  };

  // ---------- Underline style for active links ----------
  const underlineClass = invertColors
    ? "underline underline-offset-4 decoration-white"
    : "underline underline-offset-4 decoration-foreground";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        hidden && "-translate-y-full",
        // background only when NOT inverted (Balboa: hero pages have transparent nav)
        !invertColors && "bg-background/95 backdrop-blur-sm",
      )}
    >
      <nav className="w-full">
        <div className={cn(SHELL, "flex items-center justify-between py-5")}>
          {/* Logo (≈10% bigger) */}
          <Link
            to="/"
            className={cn("text-[30px] md:text-[35px] font-semibold tracking-tight", textColor)}
            onClick={() => {
              setWorkOpen(false);
              setMobileOpen(false);
            }}
          >
            Oliver Bolt
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            <li className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
              <button
                className={cn(
                  // ≈10% bigger than text-sm
                  "text-[15px] tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer",
                  linkBase,
                  isWorkActive && underlineClass,
                )}
                onClick={() => setWorkOpen(!workOpen)}
              >
                Work
              </button>

              {workOpen && (
                <div className="absolute top-full right-0 pt-2">
                  {/* ✅ black dropdown background on hero pages */}
                  <div className={cn("min-w-[180px] rounded-none", invertColors ? "bg-black/90" : "bg-transparent")}>
                    <ul className="flex flex-col gap-2 p-3 text-right">
                      {seriesCategories.map((cat) => (
                        <li key={cat}>
                          <button
                            onClick={() => handleCategoryClick(cat)}
                            className={cn(
                              "text-[15px] transition-colors block py-1 hover:underline w-full text-right bg-transparent border-none cursor-pointer",
                              invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground",
                            )}
                          >
                            {cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                to="/about"
                className={cn(
                  "text-[15px] tracking-wide transition-colors duration-200",
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
                className={cn("text-[15px] tracking-wide transition-colors duration-200", linkBase)}
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
              <span className="text-[15px] tracking-wide">Work</span>
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                {seriesCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className={cn(
                        "text-[15px] hover:underline transition-colors bg-transparent border-none cursor-pointer text-left",
                        invertColors ? "text-white" : "text-foreground",
                      )}
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
                  "text-[15px] tracking-wide",
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
                className={cn("text-[15px] tracking-wide", invertColors ? "text-white" : "text-foreground")}
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
