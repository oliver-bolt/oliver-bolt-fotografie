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

const NAV_SHELL = "max-w-[1600px] w-full mx-auto px-10 md:px-14";

const Navbar = ({ invertColors = false }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ NAV disappears “statisch” on scroll:
  // Do NOT use position: fixed / sticky here. It stays in normal document flow.
  // (So it scrolls away like the rest of the page.)
  const headerBg = invertColors ? "" : "bg-background";
  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground";

  const isAboutActive = location.pathname === "/about";
  const isWorkActive = location.pathname.startsWith("/work");

  const activeUnderline = invertColors
    ? "underline underline-offset-4 decoration-white"
    : "underline underline-offset-4 decoration-foreground";

  const handleCategoryClick = (cat: string) => {
    setWorkOpen(false);
    setMobileOpen(false);
    const slug = categorySlugMap[cat] || cat.toLowerCase();
    navigate(`/work/${slug}`);
  };

  const activeCategorySlug = location.pathname.startsWith("/work/")
    ? location.pathname.split("/work/")[1]?.split("/")[0]
    : null;

  const isCatActive = (cat: string) => {
    const slug = categorySlugMap[cat] || cat.toLowerCase();
    return activeCategorySlug === slug;
  };

  return (
    <header className={cn("w-full z-50", headerBg)}>
      <nav className="w-full">
        <div className={cn(NAV_SHELL, "flex items-center justify-between pt-10 pb-8")}>
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              // ~10% bigger than before
              "text-[32px] md:text-[36px] font-semibold tracking-tight",
              textColor,
            )}
          >
            Oliver Bolt
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-10">
            {/* Work */}
            <li className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
              <button
                className={cn(
                  "text-[18px] tracking-wide transition-colors duration-150 bg-transparent border-none cursor-pointer",
                  linkColor,
                  isWorkActive && activeUnderline,
                )}
                onClick={() => setWorkOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={workOpen}
              >
                Work
              </button>

              {workOpen && (
                <div className="absolute top-full right-0 pt-3">
                  {/* ✅ Panel background:
                      - Landing/About: white
                      - Work (invert): black
                      ✅ Text inside RIGHT-aligned and FLUSH with Work’s right edge:
                      - Use pr-0 on content + -mr-4 trick so padding doesn’t shift alignment
                  */}
                  <div
                    className={cn("min-w-[180px]", invertColors ? "bg-black/95" : "bg-white")}
                    style={{ boxShadow: invertColors ? "none" : "0 10px 30px rgba(0,0,0,0.08)" }}
                  >
                    <ul className="py-3 pl-6 pr-4 -mr-4 flex flex-col gap-1 text-right">
                      {seriesCategories.map((cat) => (
                        <li key={cat}>
                          <button
                            onClick={() => handleCategoryClick(cat)}
                            className={cn(
                              // ✅ dropdown font size = navbar font size
                              "text-[18px] tracking-wide transition-colors block py-0.5 hover:underline w-full text-right bg-transparent border-none cursor-pointer",
                              invertColors ? "text-white hover:text-white" : "text-black hover:text-black",
                              isCatActive(cat) &&
                                (invertColors
                                  ? "underline underline-offset-4 decoration-white"
                                  : "underline underline-offset-4 decoration-black"),
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

            {/* About */}
            <li>
              <Link
                to="/about"
                className={cn(
                  "text-[18px] tracking-wide transition-colors duration-150",
                  linkColor,
                  isAboutActive && activeUnderline,
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
                className={cn("text-[18px] tracking-wide transition-colors duration-150", linkColor)}
              >
                Instagram
              </a>
            </li>
          </ul>

          {/* Mobile toggle (we’ll redesign later like Balboa) */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={cn("md:hidden bg-transparent border-none", textColor)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu (temporary) */}
      {mobileOpen && (
        <div className={cn("md:hidden", invertColors ? "bg-black text-white" : "bg-background text-foreground")}>
          <div className={cn(NAV_SHELL, "pb-10")}>
            <ul className="flex flex-col gap-6 pt-2">
              <li>
                <span className={cn("text-[18px] tracking-wide", invertColors ? "text-white" : "text-foreground")}>
                  Work
                </span>
                <ul className="mt-3 ml-4 flex flex-col gap-2">
                  {seriesCategories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryClick(cat)}
                        className={cn(
                          "text-[18px] tracking-wide hover:underline transition-colors bg-transparent border-none cursor-pointer text-left",
                          invertColors ? "text-white" : "text-foreground",
                          isCatActive(cat) &&
                            (invertColors
                              ? "underline underline-offset-4 decoration-white"
                              : "underline underline-offset-4 decoration-foreground"),
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
                    "text-[18px] tracking-wide",
                    invertColors ? "text-white" : "text-foreground",
                    isAboutActive &&
                      (invertColors
                        ? "underline underline-offset-4 decoration-white"
                        : "underline underline-offset-4 decoration-foreground"),
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
                  className={cn("text-[18px] tracking-wide", invertColors ? "text-white" : "text-foreground")}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
