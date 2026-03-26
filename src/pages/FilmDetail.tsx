import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilmEntry from "@/components/FilmEntry";
import { filmsData } from "@/data/films";
import NotFound from "./NotFound";

const SHELL = "max-w-[1600px] mx-auto px-10 md:px-14";

const FilmDetail = () => {
  const { id } = useParams<{ id: string }>();
  const film = filmsData.find((f) => f.id === id);

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
