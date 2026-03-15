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
              alt="Oliver Bolt — photographer and creative producer, St. Gallen Switzerland"
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
                I'm a photographer and creative producer based in St.&nbsp;Gallen, Switzerland.
                My work sits between documentary, editorial and personal projects — from
                street-level documentation to commissioned brand and product photography.
              </p>
              <p>
                Before picking up the camera full-time, I spent nine years in media production.
                I studied Multimedia Production at HTW Chur (now FHGR), graduating with a
                Bachelor's degree in 2013, with a focus on TV and video. From there I moved
                into film — working on short films, features and episodic productions before
                joining SRF, Switzerland's public broadcaster, where I eventually led production
                for their scenic in-house formats.
              </p>
              <p>
                That background shaped how I see and plan visual work: the documentary eye, the
                structured approach, the instinct for when to stay and when to move on. It also
                means I'm comfortable working across formats — stills, moving image, editorial,
                commercial.
              </p>
              <p>
                Today I focus on photography. I work with brands, editorial clients and on
                personal long-term projects. Most of my work is rooted in Switzerland, but it
                regularly takes me elsewhere — recently to New Zealand, Austria and southern Germany.
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
