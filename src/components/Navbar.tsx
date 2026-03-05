import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { Menu, X, ChevronRight, ChevronLeft } from "lucide-react";
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

type MobileView = "root" | "work";

const Navbar = ({ invertColors = false }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileView, setMobileView] = useState<MobileView>("root");
  const [workOpen, setWorkOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground";

  const isWorkRoute = location.pathname.startsWith("/work/");
  const isAboutRoute = location.pathname === "/about";

  const activeCategory = useMemo(() => {
    const match = location.pathname.match(/^\/work\/([^/]+)/);
    return match?.[1] ?? null;
  }, [location.pathname]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileView("root");
  };

  const handleCategoryClick = (cat: string) => {
    setWorkOpen(false);
    closeMobile();
    const slug = categorySlugMap[cat] || cat.toLowerCase();
    navigate(`/work/${slug}`);
  };

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50", !invertColors && "bg-background/95 backdrop-blur-sm")}>
      <nav className="w-full">
        {/* MUST match page shell */}
        <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between px-10 md:px-14 py-7 md:py-8">
          <Link
            to="/"
            onClick={() => {
              setWorkOpen(false);
              closeMobile();
            }}
            className={cn("text-[28px] md:text-[32px] font-semibold tracking-tight", textColor)}
          >
            Oliver Bolt
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-10">
            <li className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
              <button
                className={cn(
                  "text-[18px] tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer",
                  linkColor,
                  isWorkRoute && "underline underline-offset-4",
                )}
                onClick={() => setWorkOpen(!workOpen)}
              >
                Work
              </button>

              {workOpen && (
                // Right edge of dropdown aligned to right edge of the WORK button
                <div className="absolute top-full right-0 pt-2">
                  {/* NOTE: background should be controlled per your invertColors logic elsewhere.
                      Keeping it simple + stable: dropdown panel has bg only when invertColors (usually on hero). */}
                  <div
                    className={cn("min-w-[180px] text-right", invertColors ? "bg-black/95" : "bg-transparent")}
                    style={{
                      // allow slight overlap to the right if needed later
                      // (you can tweak this without breaking alignment)
                      padding: invertColors ? "10px 14px" : "0px",
                    }}
                  >
                    <ul className="flex flex-col gap-1">
                      {seriesCategories.map((cat) => {
                        const slug = categorySlugMap[cat] || cat.toLowerCase();
                        const isActive = activeCategory === slug;
                        return (
                          <li key={cat}>
                            <button
                              onClick={() => handleCategoryClick(cat)}
                              className={cn(
                                "text-[18px] transition-colors block py-0.5 hover:underline w-full text-right bg-transparent border-none cursor-pointer",
                                invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground",
                                isActive && "underline underline-offset-4",
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
                  "text-[18px] tracking-wide transition-colors duration-200",
                  linkColor,
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
                className={cn("text-[18px] tracking-wide transition-colors duration-200", linkColor)}
              >
                Instagram
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setMobileView("root");
            }}
            className={cn("md:hidden bg-transparent border-none", textColor)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen (Balboa style) */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[999] bg-background">
          {/* Top bar */}
          <div className="max-w-[1600px] mx-auto px-10 py-7 flex items-start justify-between">
            <Link to="/" onClick={closeMobile} className="text-[28px] font-semibold tracking-tight text-foreground">
              Oliver Bolt
            </Link>

            <button
              onClick={closeMobile}
              className="bg-transparent border border-foreground w-12 h-12 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Center content */}
          <div className="h-[calc(100vh-120px)] flex items-center justify-center">
            {mobileView === "root" ? (
              <div className="flex flex-col items-center justify-center gap-6">
                <button
                  onClick={() => setMobileView("work")}
                  className={cn(
                    "bg-transparent border-none cursor-pointer flex items-center gap-3 text-foreground",
                    "text-[52px] leading-none font-medium tracking-tight",
                    isWorkRoute && "underline underline-offset-8",
                  )}
                >
                  Work <ChevronRight size={34} />
                </button>

                <Link
                  to="/about"
                  onClick={closeMobile}
                  className={cn(
                    "text-[52px] leading-none font-medium tracking-tight text-foreground",
                    isAboutRoute && "underline underline-offset-8",
                  )}
                >
                  About
                </Link>

                <a
                  href="https://instagram.com/ollie.bolt"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="text-[52px] leading-none font-medium tracking-tight text-foreground"
                >
                  Instagram
                </a>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-6 w-full px-10">
                <button
                  onClick={() => setMobileView("root")}
                  className="bg-transparent border border-foreground px-6 py-3 flex items-center gap-3 text-foreground text-[34px] font-medium"
                >
                  <ChevronLeft size={26} />
                  Back
                </button>

                <div className="flex flex-col items-center gap-5">
                  {seriesCategories.map((cat) => {
                    const slug = categorySlugMap[cat] || cat.toLowerCase();
                    const isActive = activeCategory === slug;

                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={cn(
                          "bg-transparent border-none cursor-pointer text-foreground",
                          "text-[52px] leading-none font-medium tracking-tight",
                          isActive && "underline underline-offset-8",
                        )}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
