import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-4">
            Инженерска институција на Македонија
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Клуб на млади
            <br />
            инженери – <span className="text-gradient">KMI</span>
          </h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10">
            Клубот на млади инженери (KMI) претставува платформа за вмрежување,
            професионален развој и соработка на младите инженери во Македонија, во
            рамки на Инженерската институција на Македонија.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#join"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Зачлени се
              <ArrowRight size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/klub-na-mladi-inzeneri-kmi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
            >
              <Linkedin size={18} />
              Следи нè на LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80H1440V40C1440 40 1200 0 720 0C240 0 0 40 0 40V80Z"
            fill="hsl(210 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
