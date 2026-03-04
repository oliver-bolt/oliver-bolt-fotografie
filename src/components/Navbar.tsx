import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { seriesCategories } from "@/data/series";

interface NavbarProps {
  invertColors?: boolean;
}

const categorySlugMap: Record<string, string> = {
  Action: "action",
  Travel: "travel",
  Projects: "projects",
};

const Navbar = ({ invertColors = false }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // --- Hide on scroll (NO easing / no fancy transitions)
  const lastY = useRef(0);
  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const down = y > lastY.current;
      // hide only after a small threshold, show when scrolling up
      if (y > 80 && down) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground";

  const isWorkActive = location.pathname.startsWith("/work");
  const isAboutActive = location.pathname.startsWith("/about");

  const handleCategoryClick = (cat: string) => {
    setWorkOpen(false);
    setMobileOpen(false);
    const slug = categorySlugMap[cat] || cat.toLowerCase();
    navigate(`/work/${slug}`);
  };

  // active subcategory underline (e.g. /work/action)
  const activeSub = location.pathname.split("/")[2] || "";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        // keep bg only when NOT inverted (work hero wants overlay look)
        !invertColors && "bg-background/95 backdrop-blur-sm",
        // hard 2000s scroll behavior: no easing
        hidden ? "-translate-y-full" : "translate-y-0",
        "transition-none",
      )}
    >
      <nav className="w-full">
        {/* IMPORTANT: must match Index SHELL */}
        <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <Link
            to="/"
            className={cn(
              // +10%+ sizing
              "text-[30px] md:text-[36px] font-semibold tracking-tight",
              textColor,
            )}
          >
            Oliver Bolt
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            <li className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
              <button
                className={cn(
                  // +10%+ sizing
                  "text-[15px] md:text-[16px] tracking-wide bg-transparent border-none cursor-pointer",
                  // underline active
                  isWorkActive && "underline underline-offset-4",
                  linkColor,
                )}
                onClick={() => setWorkOpen(!workOpen)}
              >
                Work
              </button>

              {workOpen && (
                <div className="absolute top-full right-0 pt-2">
                  {/* dropdown: right aligned by content, but BLACK box may overlap to the right */}
                  <div
                    className={cn(
                      "rounded-none px-3 py-2",
                      // allow slight right overflow overlap (as requested)
                      "-mr-3",
                      // black background on Work pages (invertColors true there)
                      invertColors ? "bg-black/90" : "bg-black/90",
                    )}
                  >
                    <ul className="flex flex-col gap-1 min-w-[150px] text-right">
                      {seriesCategories.map((cat) => {
                        const slug = categorySlugMap[cat] || cat.toLowerCase();
                        const active = activeSub === slug;

                        return (
                          <li key={cat}>
                            <button
                              onClick={() => handleCategoryClick(cat)}
                              className={cn(
                                // MUST match navbar font size
                                "text-[15px] md:text-[16px] transition-colors block py-0.5 hover:underline w-full text-right bg-transparent border-none cursor-pointer",
                                "text-white hover:text-white",
                                active && "underline underline-offset-4",
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
                  "text-[15px] md:text-[16px] tracking-wide",
                  isAboutActive && "underline underline-offset-4",
                  linkColor,
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
                className={cn("text-[15px] md:text-[16px] tracking-wide", linkColor)}
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
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={cn("md:hidden px-5 pb-8", invertColors ? "bg-black/95" : "bg-background")}>
          <ul className="flex flex-col gap-5">
            <li>
              <span className={cn("text-[15px] tracking-wide", invertColors ? "text-white" : "text-foreground")}>
                Work
              </span>
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
