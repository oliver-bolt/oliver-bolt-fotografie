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
                I'm a creative producer based in St.&nbsp;Gallen, Switzerland, with a background
                in media engineering and more than nine years in moving-image production at Swiss
                public broadcaster SRF.
              </p>
              <p>
                I studied Media Engineering at FHGR in Chur, focused on TV and video, with an
                Erasmus semester at Hochschule der Medien in Stuttgart. After that came years of
                documentary and docudrama production&nbsp;— the kind of work where storytelling,
                budgets, schedules, logistics and reality are in constant negotiation.
              </p>
              <p>
                That background still shapes how I work. I like strong ideas, clear structures and
                productions that survive contact with the real world. Editorially ambitious, visually
                precise, but never detached from the practical side of getting things made.
              </p>
              <p>
                Photography runs alongside this as a parallel practice. Important, yes. But not
                the main headline. More a way of staying close to images, atmosphere and the small
                details that usually decide whether something works or not.
              </p>
              <p>
                Further studies in cultural funding and cultural policy at ZHAW, and my current CAS
                in AI in Media Production at FHGR, continue to expand that perspective across
                storytelling, systems and the tools that keep changing.
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
