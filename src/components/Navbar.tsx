import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
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

const Navbar = ({ invertColors = false, onCategoryChange }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileView, setMobileView] = useState<MobileView>("root");
  const [workOpen, setWorkOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground";

  const isAboutActive = location.pathname === "/about";
  const isWorkActive = location.pathname.startsWith("/work/");

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileView("root");
  };

  const openMobile = () => {
    setMobileView("root");
    setMobileOpen(true);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const handleCategoryClick = (cat: string) => {
    setWorkOpen(false);
    closeMobile();
    const slug = categorySlugMap[cat] || cat.toLowerCase();
    onCategoryChange?.(cat);
    navigate(`/work/${slug}`);
  };

  return (
    <>
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

            {/* Desktop */}
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

            {/* Mobile toggle (unchanged placement, only triggers the new overlay) */}
            <button
              onClick={() => (mobileOpen ? closeMobile() : openMobile())}
              className={cn("md:hidden bg-transparent border-none pointer-events-auto", textColor)}
              aria-label="Menu"
              type="button"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ✅ New Balboa-style MOBILE MENU OVERLAY (always white, always black text, all pages) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] bg-white text-black">
          {/* top bar */}
          <div className="max-w-[1600px] w-full mx-auto px-8 pt-8 flex items-start justify-between">
            <Link to="/" onClick={closeMobile} className="text-[28px] font-semibold tracking-tight">
              Oliver Bolt
            </Link>

            <button
              type="button"
              onClick={closeMobile}
              aria-label="Close"
              className="bg-transparent border border-black w-12 h-12 flex items-center justify-center"
            >
              <X size={22} />
            </button>
          </div>

          {/* content */}
          <div className="max-w-[1600px] w-full mx-auto px-8">
            {mobileView === "root" ? (
              <div className="min-h-[70vh] flex items-center justify-center">
                <div className="flex flex-col items-center text-center gap-6">
                  <button
                    type="button"
                    onClick={() => setMobileView("work")}
                    className="text-[44px] leading-[1.05] font-medium bg-transparent border-none cursor-pointer flex items-center gap-3"
                  >
                    Work <ChevronRight size={28} />
                  </button>

                  <Link
                    to="/about"
                    onClick={closeMobile}
                    className={cn(
                      "text-[44px] leading-[1.05] font-medium",
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
                    className="text-[44px] leading-[1.05] font-medium"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            ) : (
              <div className="min-h-[70vh] flex items-center justify-center">
                <div className="flex flex-col items-center text-center">
                  <button
                    type="button"
                    onClick={() => setMobileView("root")}
                    className="mb-10 px-6 py-3 border border-black text-[26px] font-medium bg-transparent"
                  >
                    ← Back
                  </button>

                  <div className="flex flex-col gap-6">
                    {seriesCategories.map((cat) => {
                      const slug = categorySlugMap[cat] || cat.toLowerCase();
                      const activeCat = location.pathname === `/work/${slug}`;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => handleCategoryClick(cat)}
                          className={cn(
                            "text-[44px] leading-[1.05] font-medium bg-transparent border-none cursor-pointer",
                            activeCat && "underline underline-offset-8",
                          )}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
