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
                I am a creative producer and photographer based in St.&nbsp;Gallen, Switzerland.
                I studied Media Engineering (BSc) with a focus on TV and video at FHGR in Chur,
                including an Erasmus semester at Hochschule der Medien in Stuttgart, and spent more
                than nine years in production roles at Swiss public broadcaster SRF. There I worked
                on documentary and docudrama formats, coordinating teams, schedules and resources
                while keeping editorial and visual goals aligned.
              </p>
              <p>
                Photography runs alongside this as a semi-professional second field, with a focus on
                documentary and editorial work that stays close to people, places and lived realities.
                Further training in cultural funding and cultural policy (CAS ZHAW) and my current CAS
                in AI in media production at FHGR shape how I approach stories: as carefully planned
                processes where content, craft and technology are calculated and orchestrated from first
                idea to final image.
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
