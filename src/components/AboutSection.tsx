import { motion } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const goals = [
  "Поврзување и вмрежување на млади инженери од различни дисциплини",
  "Организирање на стручни предавања, работилници и конференции",
  "Поттикнување на иновации и професионален развој",
  "Застапување на интересите на младите инженери пред институциите",
  "Промовирање на инженерската професија во општеството",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-2">За нас</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Кои сме ние
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="bg-card rounded-xl p-8 border border-border card-hover"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
              <Target className="text-accent" size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Мисија</h3>
            <p className="text-muted-foreground leading-relaxed">
              Да создадеме силна заедница на млади инженери која ќе придонесува за
              технолошкиот и економскиот развој на Македонија, преку споделување на
              знаење, искуства и можности за професионален раст.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="bg-card rounded-xl p-8 border border-border card-hover"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
              <Eye className="text-accent" size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Визија</h3>
            <p className="text-muted-foreground leading-relaxed">
              KMI да стане водечка платформа за млади инженери во регионот, препознатлива
              по квалитетот на своите програми, активностите за менторство и влијанието
              врз инженерската професија.
            </p>
          </motion.div>
        </div>

        {/* Goals */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="bg-card rounded-xl p-8 border border-border"
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-6">
            Цели на клубот
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-accent mt-0.5 shrink-0" size={20} />
                <p className="text-muted-foreground">{goal}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
