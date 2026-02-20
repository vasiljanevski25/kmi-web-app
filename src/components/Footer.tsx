import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-lg text-primary-foreground">
              KMI
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Клуб на млади инженери
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/klub-na-mladi-inzeneri-kmi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contact@kmi.mk"
              className="text-primary-foreground/60 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} KMI. Сите права задржани.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
