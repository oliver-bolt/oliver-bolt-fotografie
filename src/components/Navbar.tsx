import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  invertColors?: boolean;
}

const Navbar = ({ invertColors = false }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const textColor = invertColors ? "text-white" : "text-foreground";
  const linkColor = invertColors ? "text-white hover:text-white" : "text-foreground hover:text-foreground";

  const isWorkActive = location.pathname.startsWith("/work");
  const isFilmActive = location.pathname.startsWith("/film");
  const isAboutActive = location.pathname === "/about";

  const closeMobile = () => {
    setMobileOpen(false);
  };

  const openMobile = () => {
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
              <li>
                <Link
                  to="/work"
                  className={cn(
                    "text-[16px] tracking-wide transition-colors duration-200",
                    linkColor,
                    isWorkActive && "underline underline-offset-4",
                    invertColors && isWorkActive && "decoration-white",
                  )}
                >
                  Work
                </Link>
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
                <Link
                  to="/work"
                  onClick={closeMobile}
                  className={cn(
                    "text-[44px] leading-[1.05] font-medium",
                    isWorkActive && "underline underline-offset-8",
                  )}
                >
                  Work
                </Link>

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
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
