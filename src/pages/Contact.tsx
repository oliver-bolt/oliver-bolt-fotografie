import { useState } from "react";
import { motion } from "framer-motion";
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

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 md:pt-40 pb-28 md:pb-36">
        <section className="px-6 md:px-12 lg:px-20 max-w-lg">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4">
              Kontakt
            </h1>
            <p className="font-sans text-sm text-muted-foreground mb-14">
              Anfragen zu Prints, Ausstellungen oder Kollaborationen.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
          >
            {sent ? (
              <div className="py-16">
                <p className="font-serif text-xl font-light text-foreground mb-2">Vielen Dank.</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Ihre Nachricht wurde gesendet. Ich melde mich zeitnah.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase font-sans text-muted-foreground mb-2">
                    Nachricht
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-border py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
                    placeholder="Ihre Nachricht"
                  />
                </div>
                <button
                  type="submit"
                  className="text-xs tracking-widest uppercase font-sans text-foreground border-b border-foreground/30 hover:border-foreground pb-1 transition-colors"
                >
                  Senden →
                </button>
              </form>
            )}
          </motion.div>

          <div className="mt-20 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground font-sans tracking-wide">
              mail@photographer.com · Instagram · LinkedIn
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
