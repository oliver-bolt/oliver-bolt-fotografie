import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilmEntry from "@/components/FilmEntry";
import { filmsData } from "@/data/films";
import NotFound from "./NotFound";

const SHELL = "max-w-[1600px] mx-auto px-10 md:px-14";

const FilmDetail = ({ fixedId }: { fixedId?: string } = {}) => {
  const params = useParams<{ id: string }>();
  const id = fixedId ?? params.id;
  const film = filmsData.find((f) => f.id === id);

  useEffect(() => {
    if (!film) return;
    if (film.seoTitle) document.title = film.seoTitle;
    if (film.seoDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", film.seoDescription);
    }
  }, [film]);

  if (!film) return <NotFound />;

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="w-full">
        <div className={SHELL}>
          <section className="pt-36 md:pt-48 pb-28">
            <FilmEntry
              title={film.title}
              meta={film.metaLine}
              text={film.description}
              stills={film.stills}
              videoUrl={film.embedUrl}
              videoType={film.embedType}
              credits={film.credits}
              links={film.links}
              videoPoster={film.videoPoster}
              supportLogo={film.supportLogo}
            />

            {/* Back link */}
            <div className="mt-12 pt-8">
              <Link
                to="/film"
                className="text-sm text-foreground hover:underline transition-colors"
              >
                ← Back to Film
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FilmDetail;
