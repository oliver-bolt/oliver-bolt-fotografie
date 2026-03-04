import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
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
  const navigate = useNavigate();
  const location = useLocation();

  const isWork = location.pathname.startsWith("/work");
  const isAbout = location.pathname.startsWith("/about");

  // Bigger nav like Balboa (you asked +10% again)
  const brandClass = "text-[30px] md:text-[34px] font-semibold tracking-tight";
  const navLinkClass = "text-[18px] md:text-[20px] tracking-wide transition-colors duration-0"; // duration-0 = “2000s HTML” feel

  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground";

  const handleCategoryClick = (cat: string) => {
    setWorkOpen(false);
    setMobileOpen(false);
    const slug = categorySlugMap[cat] || cat.toLowerCase();
    navigate(`/work/${slug}`);
  };

  return (
    <header
      className={cn(
        // NOT fixed -> scrolls away naturally
        "relative z-50 w-full",
        invertColors ? "bg-transparent" : "bg-transparent",
      )}
    >
      <nav className="w-full">
        <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <Link to="/" className={cn(brandClass, textColor)}>
            Oliver Bolt
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            <li className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
              <button
                className={cn(
                  navLinkClass,
                  "bg-transparent border-none cursor-pointer",
                  linkColor,
                  isWork && "underline underline-offset-4",
                )}
                onClick={() => setWorkOpen(!workOpen)}
              >
                Work
              </button>

              {workOpen && (
                // Dropdown alignment: text (items) right-aligned to WORK,
                // but background allowed to overlap a bit to the right.
                <div className={cn("absolute top-full right-0 pt-2", "translate-x-3")}>
                  <div
                    className={cn(
                      // Black background ONLY when inverted (Work pages with hero)
                      invertColors ? "bg-black" : "bg-transparent",
                    )}
                  >
                    <ul className={cn("flex flex-col min-w-[180px] text-right px-3 py-2", "gap-1")}>
                      {seriesCategories.map((cat) => {
                        const slug = categorySlugMap[cat] || cat.toLowerCase();
                        const activeSub = location.pathname === `/work/${slug}`;
                        return (
                          <li key={cat}>
                            <button
                              onClick={() => handleCategoryClick(cat)}
                              className={cn(
                                navLinkClass,
                                "w-full text-right bg-transparent border-none cursor-pointer",
                                invertColors ? "text-white" : "text-foreground",
                                activeSub && "underline underline-offset-4",
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
              <Link to="/about" className={cn(navLinkClass, linkColor, isAbout && "underline underline-offset-4")}>
                About
              </Link>
            </li>

            <li>
              <a
                href="https://instagram.com/ollie.bolt"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(navLinkClass, linkColor)}
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
        <div className="md:hidden bg-background px-6 pb-8">
          <ul className="flex flex-col gap-5">
            <li>
              <span className="text-[18px] tracking-wide text-foreground">Work</span>
              <ul className="mt-2 ml-4 flex flex-col gap-2">
                {seriesCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className="text-[18px] text-foreground hover:underline transition-colors duration-0 bg-transparent border-none cursor-pointer text-left"
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
                className="text-[18px] tracking-wide text-foreground"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="https://instagram.com/ollie.bolt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[18px] tracking-wide text-foreground"
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
