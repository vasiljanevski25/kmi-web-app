import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const news = [
  {
    title: "KMI организира панел дискусија за зелено инженерство",
    date: "15 февруари 2026",
    excerpt:
      "Клубот на млади инженери организира панел дискусија за зеленото инженерство и одржливиот развој во Македонија.",
  },
  {
    title: "Нов партнерски договор со Технолошко-металуршки факултет",
    date: "28 јануари 2026",
    excerpt:
      "KMI потпиша партнерски договор со ТМФ за заедничка организација на стручни работилници и предавања.",
  },
  {
    title: "Отворен повик за менторска програма 2026",
    date: "10 јануари 2026",
    excerpt:
      "Пријавувањето за менторската програма на KMI за 2026 година е отворено. Искористете ја можноста за професионален раст.",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-24 section-alt">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-2">
            Новости
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Последни објави
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.article
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } },
              }}
              className="bg-card rounded-xl border border-border overflow-hidden card-hover"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <button className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-3 transition-all">
                  Прочитај повеќе
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
