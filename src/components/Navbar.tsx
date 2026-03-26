import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { seriesCategories } from "@/data/series";

interface NavbarProps {
  invertColors?: boolean;
}

const photographyFilters = ["Alle", ...seriesCategories];

const Navbar = ({ invertColors = false }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [photographySubOpen, setPhotographySubOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const activePhotographyFilter = searchParams.get("filter") || "Alle";

  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground";

  const isPhotographyActive = location.pathname.startsWith("/photography");
  const isFilmActive = location.pathname.startsWith("/film");
  const isAboutActive = location.pathname === "/about";

  const closeMobile = () => {
    setMobileOpen(false);
    setPhotographySubOpen(false);
  };

  const openMobile = () => {
    setMobileOpen(true);
  };

  /* Desktop dropdown hover helpers */
  const showDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDesktopDropdownOpen(true);
  };

  const hideDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDesktopDropdownOpen(false), 150);
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

  return (
    <>
      <header
        className={cn(
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
              {/* Photography with hover dropdown */}
              <li>
                <div
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <Link
                    to="/photography"
                    className={cn(
                      "text-[16px] tracking-wide transition-colors duration-200",
                      linkColor,
                      isPhotographyActive && "underline underline-offset-4",
                      invertColors && isPhotographyActive && "decoration-white",
                    )}
                  >
                    Photography
                  </Link>

                  {/* Dropdown — Balboa-style: no frame, same font as nav, right-aligned text */}
                  {desktopDropdownOpen && (
                    <div className="absolute top-full right-0 mt-3 z-50 flex flex-col items-end gap-[6px]">
                      {photographyFilters.map((filter) => {
                        const isActive =
                          isPhotographyActive &&
                          (filter === activePhotographyFilter ||
                            (filter === "Alle" && activePhotographyFilter === "Alle"));
                        return (
                          <button
                            key={filter}
                            type="button"
                            onClick={() => {
                              setDesktopDropdownOpen(false);
                              if (filter === "Alle") {
                                navigate("/photography");
                              } else {
                                navigate(`/photography?filter=${filter}`);
                              }
                            }}
                            className={cn(
                              "bg-transparent border-none cursor-pointer text-[16px] tracking-wide transition-colors duration-150 leading-normal",
                              invertColors ? "text-white" : "text-foreground",
                              isActive && "underline underline-offset-4",
                              invertColors && isActive && "decoration-white",
                            )}
                          >
                            {filter}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </li>

              <li>
                <Link
                  to="/film"
                  className={cn(
                    "text-[16px] tracking-wide transition-colors duration-200",
                    linkColor,
                    isFilmActive && "underline underline-offset-4",
                    invertColors && isFilmActive && "decoration-white",
                  )}
                >
                  Film
                </Link>
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

            </ul>

            {/* Mobile toggle */}
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

      {/* Mobile menu overlay */}
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
            <div className="min-h-[70vh] flex items-center justify-center">
              <div className="flex flex-col items-center text-center gap-6">
                {/* Photography (expandable) */}
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setPhotographySubOpen(!photographySubOpen)}
                    className={cn(
                      "text-[44px] leading-[1.05] font-medium bg-transparent border-none cursor-pointer flex items-center gap-3",
                      isPhotographyActive && "underline underline-offset-8",
                    )}
                  >
                    Photography
                    <ChevronDown
                      size={24}
                      className={cn(
                        "transition-transform duration-200 mt-1",
                        photographySubOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {photographySubOpen && (
                    <div className="flex flex-col items-center gap-3 mt-4">
                      {photographyFilters.map((filter) => (
                        <Link
                          key={filter}
                          to={filter === "Alle" ? "/photography" : `/photography?filter=${filter}`}
                          onClick={closeMobile}
                          className="text-[24px] leading-[1.2] font-light text-black/70"
                        >
                          {filter}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/film"
                  onClick={closeMobile}
                  className={cn(
                    "text-[44px] leading-[1.05] font-medium",
                    isFilmActive && "underline underline-offset-8",
                  )}
                >
                  Film
                </Link>

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

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
