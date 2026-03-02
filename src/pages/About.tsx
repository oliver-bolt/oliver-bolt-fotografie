import { motion } from "framer-motion";
import portraitImage from "@/assets/portrait.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const About = () => (
  <>
    <Navbar />
    <main className="pt-32 md:pt-40 pb-28 md:pb-36">
      <section className="px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row gap-16 md:gap-28 items-start">
          {/* Portrait */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="w-full md:w-2/5"
          >
            <img
              src={portraitImage}
              alt="Portrait des Fotografen"
              className="w-full aspect-[3/4] object-cover"
              loading="eager"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="w-full md:w-3/5 max-w-lg"
          >
            <h1 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8">
              Über den Fotografen
            </h1>

            <div className="space-y-6 font-sans text-sm text-muted-foreground leading-relaxed">
              <p>
                Seit über zehn Jahren bewege ich mich an der Schnittstelle von dokumentarischer
                und künstlerischer Fotografie. Meine Arbeit ist geprägt von langen
                Beobachtungsphasen, bewusster Reduktion und dem Anspruch, in jeder Serie eine
                eigenständige visuelle Sprache zu entwickeln.
              </p>
              <p>
                Ich glaube an die Kraft des einzelnen Bildes – aber noch mehr an die Kraft
                einer kuratierten Sequenz. Eine Serie ist mehr als eine Sammlung von Fotos.
                Sie ist ein Narrativ, ein Rhythmus, eine Haltung.
              </p>
              <p>
                Meine Themen kreisen um Vergänglichkeit, Stille und die Spuren menschlicher
                Existenz in gebauten und natürlichen Räumen. Ich arbeite bevorzugt mit
                natürlichem Licht und nehme mir für jedes Projekt die Zeit, die es braucht.
              </p>
            </div>

            <div className="mt-14 pt-8 border-t border-border">
              <h2 className="font-serif text-lg font-light text-foreground mb-4">Künstlerisches Statement</h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed italic">
                „Fotografie ist für mich kein Festhalten von Momenten, sondern ein
                Sichtbarmachen von Atmosphären. Ich suche nicht das spektakuläre Bild,
                sondern das ehrliche – das Bild, das bleibt, nachdem der erste Eindruck
                verblasst ist."
              </p>
            </div>

            <div className="mt-14 pt-8 border-t border-border">
              <h2 className="font-serif text-lg font-light text-foreground mb-4">Ausstellungen & Vita</h2>
              <ul className="font-sans text-sm text-muted-foreground space-y-2">
                <li>2024 — „Urban Silence" · Galerie Raum, Berlin</li>
                <li>2023 — „Coastal Erosion" · Festival Images, Vevey</li>
                <li>2023 — „Industrial Poetry" · Museum Folkwang, Essen</li>
                <li>2022 — „Northern Light" · Fotografiska, Stockholm</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
