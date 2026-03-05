import { Link, useNavigate } from "react-router-dom";
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

  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground";

  const handleCategoryClick = (cat: string) => {
    setWorkOpen(false);
    setMobileOpen(false);
    const slug = categorySlugMap[cat] || cat.toLowerCase();
    navigate(`/work/${slug}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* NAVBAR CONTAINER */}

      <nav className="w-full pointer-events-auto">
        <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between px-6 md:px-10 pt-8 pb-4 md:pt-10 md:pb-5">
          {/* LOGO */}

          <Link to="/" className={cn("text-[25px] md:text-[29px] font-semibold tracking-tight", textColor)}>
            Oliver Bolt
          </Link>

          {/* DESKTOP NAV */}

          <ul className="hidden md:flex items-center gap-7">
            {/* WORK */}

            <li className="relative" onMouseEnter={() => setWorkOpen(true)} onMouseLeave={() => setWorkOpen(false)}>
              <button
                className={cn(
                  "text-[13px] tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer",
                  linkColor,
                )}
                onClick={() => setWorkOpen(!workOpen)}
              >
                Work
              </button>

              {workOpen && (
                <div className="absolute top-full right-0 pt-3">
                  <div className="bg-black px-6 py-4">
                    <ul className="flex flex-col gap-1 text-right">
                      {seriesCategories.map((cat) => (
                        <li key={cat}>
                          <button
                            onClick={() => handleCategoryClick(cat)}
                            className="text-[13px] text-white hover:underline block bg-transparent border-none cursor-pointer"
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

            {/* ABOUT */}

            <li>
              <Link to="/about" className={cn("text-[13px] tracking-wide transition-colors duration-200", linkColor)}>
                About
              </Link>
            </li>

            {/* INSTAGRAM */}

            <li>
              <a
                href="https://instagram.com/ollie.bolt"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("text-[13px] tracking-wide transition-colors duration-200", linkColor)}
              >
                Instagram
              </a>
            </li>
          </ul>

          {/* MOBILE TOGGLE */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn("md:hidden bg-transparent border-none", textColor)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}

      {mobileOpen && (
        <div className="md:hidden bg-background px-6 pb-8 pt-4">
          <ul className="flex flex-col gap-4">
            <li className="text-[13px] tracking-wide text-foreground">
              Work
              <ul className="mt-2 ml-4 flex flex-col gap-1">
                {seriesCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className="text-[13px] text-foreground hover:underline transition-colors bg-transparent border-none cursor-pointer text-left"
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
                className="text-[13px] tracking-wide text-foreground"
              >
                About
              </Link>
            </li>

            <li>
              <a
                href="https://instagram.com/ollie.bolt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] tracking-wide text-foreground"
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
