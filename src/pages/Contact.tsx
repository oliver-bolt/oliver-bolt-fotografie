import { useState } from "react";
import { motion } from "framer-motion";
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

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24 md:pb-32">
        <section className="px-5 md:px-10 lg:px-16 max-w-lg">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <h1 className="text-[36px] md:text-[44px] font-medium text-foreground leading-[1.1] mb-4">
              Contact
            </h1>
            <p className="text-muted-foreground mb-14">
              Inquiries for prints, exhibitions, or collaborations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            transition={{ delay: 0.1 }}
          >
            {sent ? (
              <div className="py-14">
                <p className="text-xl font-medium text-foreground mb-2">Thank you.</p>
                <p className="text-sm text-muted-foreground">
                  Your message has been sent. I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/50"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="text-sm text-foreground hover:opacity-60 transition-opacity"
                >
                  Send →
                </button>
              </form>
            )}
          </motion.div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:mail@photographer.com" className="hover:text-foreground transition-colors">
                mail@photographer.com
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
