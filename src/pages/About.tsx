import { motion } from "framer-motion";
import portraitImage from "@/assets/portrait.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

// MUST match Navbar container for perfect left/right alignment
const SHELL = "max-w-[1600px] mx-auto px-10 md:px-14";

const About = () => (
  <>
    <Navbar />
    <main className="pt-28 md:pt-36 pb-24 md:pb-32">
      <section className={SHELL}>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* Portrait */}
          <motion.div initial="hidden" animate="visible" variants={fade} className="w-full md:w-[45%]">
            <img
              src={portraitImage}
              alt="Oliver Bolt, photographer and creative producer, St. Gallen Switzerland"
              className="w-full aspect-[3/4] object-cover object-[center_20%]"
              loading="eager"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            transition={{ delay: 0.15 }}
            className="w-full md:w-[55%] max-w-lg"
          >
            <h1 className="text-[36px] md:text-[44px] font-medium text-foreground leading-[1.1] mb-8">About</h1>

            <div className="space-y-5 text-foreground leading-relaxed">
              <p>
                I’m a project lead and creative producer based in St.&nbsp;Gallen, Switzerland. My
                work brings together content, people and the practical decisions that turn an idea
                into something worth sharing.
              </p>
              <p>
                Over nearly nine years at Swiss public broadcaster SRF, I moved from hands-on
                production into broader responsibility for budgets, resources and multiple
                productions. Working across editorial, creative and production teams taught me to
                balance different priorities while keeping the story and its audience in view.
              </p>
              <p>
                I’m now building on that experience with a focus on corporate communication.
                Alongside my work in press photography at CH Media (St. Galler Tagblatt), I’m
                studying Strategic &amp; Corporate Communication at HSLU. I’m particularly
                interested in how organisations choose what to communicate, whose perspectives they
                consider and how those decisions shape the content they produce.
              </p>
              <p>
                Photography keeps me close to people and their stories. It gives me space to
                observe, follow my curiosity and develop my own visual work.
              </p>
              <p>
                My background includes a degree in Media Engineering from FHGR, with a semester at
                Hochschule der Medien in Stuttgart, and completed certificates in Cultural Funding
                and Cultural Policy at ZHAW and AI in Media Production at FHGR.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-foreground leading-relaxed">
                If you'd like to work together or just say hello:{" "}
                <a
                  href="mailto:oliver.bolt@gmail.com"
                  className="underline underline-offset-4 hover:text-foreground/70 transition-colors"
                >
                  oliver.bolt@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
