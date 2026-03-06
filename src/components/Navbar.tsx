import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
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

const Navbar = ({ invertColors = false, onCategoryChange }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  // ✅ ONLY for the new Balboa mobile nav:
  const [mobileView, setMobileView] = useState<"root" | "work">("root");

  const navigate = useNavigate();
  const location = useLocation();

  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground";

  const isAboutActive = location.pathname === "/about";
  const isWorkActive = location.pathname.startsWith("/work/");

  const handleCategoryClick = (cat: string) => {
    setWorkOpen(false);
    setMobileOpen(false);
    setMobileView("root"); // ✅ reset view
    const slug = categorySlugMap[cat] || cat.toLowerCase();
    onCategoryChange?.(cat);
    navigate(`/work/${slug}`);
  };

  // ✅ helper for mobile close
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileView("root");
  };

  return (
    <header
      className={cn(
        // Landing/About: normal in document flow -> scrolls away naturally
        // Work/Hero pages: absolute overlay on top of hero -> also scrolls away naturally
        invertColors ? "absolute top-0 left-0 right-0" : "relative",
        "z-50 pointer-events-none",
        !invertColors && "bg-background/95 backdrop-blur-sm",
      )}
    >
      <nav className="w-full pointer-events-auto">
        <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between px-10 md:px-14 pt-8 pb-4 md:pt-10 md:pb-5">
          <Link to="/" className={cn("text-[36px] md:text-[44px] font-semibold tracking-tight", textColor)}>
            Oliver Bolt
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            <li className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
              <div className="relative inline-block">
                <button
                  type="button"
                  className={cn(
                    "text-[16px] tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer",
                    linkColor,
                    (isWorkActive || workOpen) && "underline underline-offset-4",
                    invertColors && (isWorkActive || workOpen) && "decoration-white",
                  )}
                  onClick={() => setWorkOpen((v) => !v)}
                >
                  Work
                </button>

                {workOpen && (
                  <div className="absolute top-full right-0 pt-1">
                    <div className="relative">
                      {/* schwarzer Hintergrund darf rechts überlappen */}
                      <div className="absolute inset-y-0 left-0 -right-6 bg-black" />

                      {/* Text selbst bleibt exakt rechtsbündig unter WORK */}
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
                                    "text-[16px] py-0.5 px-0 bg-transparent border-none cursor-pointer text-white hover:text-white hover:underline",
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
              </div>
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

          <button
            onClick={() => {
              setMobileOpen((v) => !v);
              setMobileView("root");
            }}
            className={cn("md:hidden bg-transparent border-none pointer-events-auto", textColor)}
            aria-label="Menu"
            type="button"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ✅ REPLACED: Mobile menu => Balboa fullscreen overlay
          ✅ IMPORTANT: ALWAYS white background + black text on ALL pages */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[999] bg-white text-black pointer-events-auto">
          {/* Top bar */}
          <div className="max-w-[1600px] mx-auto px-10 pt-8 flex items-start justify-between">
            <Link to="/" onClick={closeMobile} className="text-[36px] font-semibold tracking-tight text-black">
              Oliver Bolt
            </Link>

            <button
              onClick={closeMobile}
              className="bg-transparent border border-black w-12 h-12 flex items-center justify-center"
              aria-label="Close menu"
              type="button"
            >
              <X size={22} />
            </button>
          </div>

          {/* Center content */}
          <div className="h-[calc(100vh-110px)] flex items-center justify-center">
            {mobileView === "root" ? (
              <div className="flex flex-col items-center justify-center gap-6">
                <button
                  onClick={() => setMobileView("work")}
                  className={cn(
                    "bg-transparent border-none cursor-pointer flex items-center gap-3 text-black",
                    "text-[52px] leading-none font-medium tracking-tight",
                    isWorkActive && "underline underline-offset-8",
                  )}
                  type="button"
                >
                  Work <ChevronRight size={34} />
                </button>

                <Link
                  to="/about"
                  onClick={closeMobile}
                  className={cn(
                    "text-[52px] leading-none font-medium tracking-tight text-black",
                    isAboutActive && "underline underline-offset-8",
                  )}
                >
                  About
                </Link>

                <a
                  href="https://instagram.com/ollie.bolt"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="text-[52px] leading-none font-medium tracking-tight text-black"
                >
                  Instagram
                </a>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-6 w-full px-10">
                <button
                  onClick={() => setMobileView("root")}
                  className="bg-transparent border border-black px-6 py-3 flex items-center gap-3 text-black text-[34px] font-medium"
                  type="button"
                >
                  <ChevronLeft size={26} />
                  Back
                </button>

                <div className="flex flex-col items-center gap-5">
                  {seriesCategories.map((cat) => {
                    const slug = categorySlugMap[cat] || cat.toLowerCase();
                    const activeCat = location.pathname === `/work/${slug}`;

                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={cn(
                          "bg-transparent border-none cursor-pointer text-black",
                          "text-[52px] leading-none font-medium tracking-tight",
                          activeCat && "underline underline-offset-8",
                        )}
                        type="button"
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
