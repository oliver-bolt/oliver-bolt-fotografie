import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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
  const location = useLocation();

  const navRef = useRef<HTMLElement | null>(null);

  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground";

  const isWorkRoute = location.pathname.startsWith("/work/");
  const isAboutRoute = location.pathname === "/about";

  const handleCategoryClick = (cat: string) => {
    setWorkOpen(false);
    setMobileOpen(false);

    const slug = categorySlugMap[cat] || cat.toLowerCase();
    onCategoryChange?.(cat);

    navigate(`/work/${slug}`);
  };

  // close menus on route change
  useEffect(() => {
    setWorkOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // close dropdown when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!workOpen) return;
      const target = e.target as Node;
      if (navRef.current && !navRef.current.contains(target)) setWorkOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [workOpen]);

  return (
    <header
      className={cn("fixed top-0 left-0 right-0 z-50", !invertColors && "bg-background/95 backdrop-blur-sm")}
      style={{
        // "nach unten rücken wie bei balboa"
        paddingTop: "18px",
      }}
    >
      <nav ref={navRef} className="w-full">
        {/* IMPORTANT: container must match Index SHELL */}
        <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between px-10 md:px-14 py-3">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              // +10% again (was 31/36)
              "text-[34px] md:text-[40px] font-semibold tracking-tight",
              textColor,
            )}
          >
            Oliver Bolt
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-10">
            {/* Work + dropdown */}
            <li className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
              <button
                className={cn(
                  // +10% again (was 13px)
                  "text-[14px] tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer",
                  linkColor,
                  (isWorkRoute || workOpen) && "underline underline-offset-4",
                )}
                onClick={() => setWorkOpen((v) => !v)}
                type="button"
              >
                Work
              </button>

              {workOpen && (
                <div
                  // closer to Work
                  className="absolute top-full right-0 pt-1"
                  style={{
                    // keep box slightly overhanging to the right (NOT the text)
                    transform: "translateX(10px)",
                  }}
                >
                  {/* ✅ FIX for "rechtsbündig problem":
                      - The menu TEXT is right-aligned (text-right)
                      - We also align the RIGHT EDGE of the TEXT BLOCK exactly
                        under the right edge of the Work button by:
                        1) wrapping items in an inline-block
                        2) using right:0 + text-right + w-max
                      */}
                  <div className="bg-black">
                    <div className="pr-6 pl-6 py-2">
                      <ul className="flex flex-col gap-0.5 text-right">
                        {seriesCategories.map((cat) => {
                          const slug = categorySlugMap[cat] || cat.toLowerCase();
                          const activeCat = location.pathname === `/work/${slug}`;

                          return (
                            <li key={cat} className="flex justify-end">
                              {/* inline-block makes the right edge deterministic */}
                              <button
                                onClick={() => handleCategoryClick(cat)}
                                className={cn(
                                  // same size as navbar links
                                  "inline-block text-[14px] transition-colors py-0.5 hover:underline bg-transparent border-none cursor-pointer",
                                  "text-white hover:text-white",
                                  activeCat && "underline underline-offset-4",
                                )}
                                type="button"
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

            {/* About */}
            <li>
              <Link
                to="/about"
                className={cn(
                  "text-[14px] tracking-wide transition-colors duration-200",
                  linkColor,
                  isAboutRoute && "underline underline-offset-4",
                )}
              >
                About
              </Link>
            </li>

            {/* Instagram */}
            <li>
              <a
                href="https://instagram.com/ollie.bolt"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("text-[14px] tracking-wide transition-colors duration-200", linkColor)}
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
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background px-6 pb-8">
          <ul className="flex flex-col gap-6">
            <li>
              <span className="text-[14px] tracking-wide text-foreground">Work</span>
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                {seriesCategories.map((cat) => {
                  const slug = categorySlugMap[cat] || cat.toLowerCase();
                  const activeCat = location.pathname === `/work/${slug}`;

                  return (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryClick(cat)}
                        className={cn(
                          "text-[14px] text-foreground hover:underline transition-colors bg-transparent border-none cursor-pointer text-left",
                          activeCat && "underline underline-offset-4",
                        )}
                        type="button"
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
                  "text-[14px] tracking-wide text-foreground",
                  isAboutRoute && "underline underline-offset-4",
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
                className="text-[14px] tracking-wide text-foreground"
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
