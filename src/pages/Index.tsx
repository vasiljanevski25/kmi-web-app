import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import kmiWhiteLogo from "@/assets/kmi-transparent-white.png";
import kmiLogo from "@/assets/kmi_logo_transparent.png";
import imiLogo from "@/assets/IMI_logo.jpg";
import StructureSection from "@/components/StructureSection";
import NewsCarousel from "@/components/NewsCarousel";

export default function KMIWebsite() {

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* HERO SECTION */}
      <section className="hero-gradient text-primary-foreground py-32 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={kmiWhiteLogo} alt="KMI Logo" className="w-24 h-24 object-contain" />
            <img src={imiLogo} alt="ИИМ Logo" className="w-24 h-24 rounded-full object-cover" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Клуб на млади инженери – KMI
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Платформа за вмрежување, професионален развој и соработка на младите инженери во Македонија,
            во рамки на Инженерската институција на Македонија.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdRLCinJHmArS_zao7BDETGe8O3j7kyK3HFafh7N9HFEv4BCw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-2xl px-8 py-6 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Зачлени се
              </Button>
            </a>
            <a href="https://www.linkedin.com/company/young-engineers-club-%D0%BA%D0%BB%D1%83%D0%B1-%D0%BD%D0%B0-%D0%BC%D0%BB%D0%B0%D0%B4%D0%B8-%D0%B8%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%B8/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-2xl px-8 py-6 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Следи нè на LinkedIn
              </Button>
            </a>
            <a href="https://www.instagram.com/kmi.imi/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-2xl px-8 py-6 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Следи нè на Instagram
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src={kmiLogo} alt="KMI Logo" className="w-16 h-16 object-contain" />
            <img src={imiLogo} alt="ИИМ Logo" className="w-16 h-16 rounded-full object-cover" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">За нас</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Мисија", text: "Да обезбедиме платформа за професионален развој, техничка едукација и активно вклучување на младите инженери во развојот на инженерската професија." },
              { title: "Визија", text: "Да создадеме силна заедница на млади инженери која ќе придонесува кон технолошкиот и индустрискиот развој на Македонија." },
              { title: "Цели", text: "Организација на стручни настани, вмрежување со компании, поддршка на студентски и истражувачки иницијативи и промоција на инженерската етика." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                <Card className="rounded-2xl h-full card-hover">
                  <CardContent className="p-8">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURE */}

      {/* STRUCTURE */}
      <StructureSection />

      {/* NEWS SECTION - LinkedIn Carousel */}
      <section id="news" className="py-24 px-4 section-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Новости</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
            Последни објави од нашата LinkedIn страница
          </p>
          <NewsCarousel />
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section id="events" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Настани</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Настан 8ми Март – Жени во инженерството", meta: "Март 2026", desc: "Настан посветен на улогата и придонесот на жените во инженерската професија." },
              { title: "Настан во склоп на Денот на македонски инженери", meta: "Март 2026", desc: "Одбележување на Денот на македонски инженери со стручни предавања и вмрежување." },
              { title: "ЕВН Камп", meta: "Април 2026", desc: "Практичен камп организиран во соработка со ЕВН за млади инженери." },
              { title: "Европска конференција организирана од EYE", meta: "2026", desc: "Меѓународна конференција организирана од European Young Engineers (EYE)." },
            ].map((event, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="rounded-2xl h-full card-hover">
                  <CardContent className="p-8">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{event.meta}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="hero-gradient text-primary-foreground text-center py-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src={kmiWhiteLogo} alt="KMI" className="w-12 h-12 object-contain" />
          <img src={imiLogo} alt="ИИМ" className="w-12 h-12 rounded-full object-cover" />
        </div>
        <p className="font-display font-bold">© 2026 Клуб на млади инженери – KMI</p>
        <p className="text-sm mt-2 text-primary-foreground/60">
          <a href="https://www.linkedin.com/company/young-engineers-club-%D0%BA%D0%BB%D1%83%D0%B1-%D0%BD%D0%B0-%D0%BC%D0%BB%D0%B0%D0%B4%D0%B8-%D0%B8%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%B8/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
          {" | "}
          <a href="https://www.instagram.com/kmi.imi/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Instagram</a>
          {" | "}
          <a href="mailto:info@kmi.mk" className="hover:text-primary-foreground transition-colors">Контакт: info@kmi.mk</a>
        </p>
      </footer>
    </div>
  );
}
