import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type EventItem = {
  title: string;
  date: string;
  location: string;
  description: string;
  type: "upcoming" | "past";
};

const events: EventItem[] = [
  {
    title: "Работилница: Вештачка интелигенција во инженерството",
    date: "15 март 2026",
    location: "ФЕИТ, Скопје",
    description:
      "Практична работилница за примена на AI алатки во инженерските процеси.",
    type: "upcoming",
  },
  {
    title: "Networking вечер за млади инженери",
    date: "28 март 2026",
    location: "Хотел Александар Палас, Скопје",
    description:
      "Можност за вмрежување со искусни професионалци и колеги од различни области.",
    type: "upcoming",
  },
  {
    title: "Предавање: Одржливо градежништво",
    date: "20 декември 2025",
    location: "Градежен факултет, Скопје",
    description:
      "Стручно предавање за најновите трендови во одржливото градежништво.",
    type: "past",
  },
  {
    title: "Годишна конференција на KMI 2025",
    date: "10 ноември 2025",
    location: "МКЦ, Скопје",
    description:
      "Годишната конференција со преглед на достигнувањата и плановите за следната година.",
    type: "past",
  },
];

const EventsSection = () => {
  const [filter, setFilter] = useState<"upcoming" | "past">("upcoming");
  const filtered = events.filter((e) => e.type === filter);

  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-2">
            Настани
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Календар на настани
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter("upcoming")}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              filter === "upcoming"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Претстојни
          </button>
          <button
            onClick={() => setFilter("past")}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              filter === "past"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            Минати
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filtered.map((event, i) => (
            <motion.div
              key={event.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } },
              }}
              className="bg-card rounded-xl p-6 border border-border card-hover"
            >
              {event.type === "upcoming" && (
                <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Претстоен
                </span>
              )}
              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} className="text-accent" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-accent" />
                  {event.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
