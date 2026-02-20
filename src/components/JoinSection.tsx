import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const JoinSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    field: "",
    motivation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="join" className="py-24 section-alt">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <CheckCircle2 className="text-accent mx-auto mb-6" size={64} />
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Ви благодариме за интересот!
            </h3>
            <p className="text-muted-foreground">
              Ќе бидете контактирани од тимот на KMI.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors text-sm";

  return (
    <section id="join" className="py-24 section-alt">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-2">
            Членство
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Зачлени се
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Пополнете ја формата подолу за да станете дел од KMI заедницата.
          </p>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-xl p-8 border border-border"
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Име и презиме *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Марко Марковски"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Е-маил *
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="marko@example.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Телефон
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+389 7X XXX XXX"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Универзитет / Компанија
              </label>
              <input
                type="text"
                name="organization"
                value={form.organization}
                onChange={handleChange}
                placeholder="УКИМ / Компанија"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Област на инженерство
            </label>
            <select
              name="field"
              value={form.field}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Изберете област</option>
              <option value="gradeznistvo">Градежништво</option>
              <option value="elektrotehnika">Електротехника</option>
              <option value="mashinstvo">Машинство</option>
              <option value="informatika">Информатика</option>
              <option value="arhitektura">Архитектура</option>
              <option value="drugo">Друго</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Кратка мотивација
            </label>
            <textarea
              name="motivation"
              rows={4}
              value={form.motivation}
              onChange={handleChange}
              placeholder="Зошто сакате да станете дел од KMI?"
              className={inputClass + " resize-none"}
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity"
          >
            <Send size={18} />
            Испрати апликација
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default JoinSection;
