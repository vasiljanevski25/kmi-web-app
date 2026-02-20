import { motion } from "framer-motion";

type Gender = "male" | "female";

interface Member {
  name: string;
  gender: Gender;
}

interface Role {
  title: string;
  members: Member[];
}

const roles: Role[] = [
  { title: "Претседател", members: [{ name: "Емилија Наумоска", gender: "female" }] },
  { title: "Потпретседател", members: [{ name: "Стојана Меган Милошевска", gender: "female" }] },
  { title: "Генерален секретар", members: [{ name: "Милош Милошевиќ", gender: "male" }] },
  {
    title: "Координатори за односи со јавност",
    members: [
      { name: "Јелена Ѓошиќ", gender: "female" },
      { name: "Марта Попоска", gender: "female" },
    ],
  },
  {
    title: "Координатори за настани",
    members: [
      { name: "Васил Јаневски", gender: "male" },
      { name: "Стефан Мерџаноски", gender: "male" },
    ],
  },
];

const MaleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 120" className={className} fill="none">
    {/* Head */}
    <circle cx="40" cy="28" r="16" fill="hsl(var(--primary))" opacity="0.85" />
    {/* Body */}
    <rect x="24" y="50" width="32" height="36" rx="6" fill="hsl(var(--primary))" opacity="0.7" />
    {/* Legs */}
    <rect x="26" y="86" width="12" height="26" rx="5" fill="hsl(var(--primary))" opacity="0.6" />
    <rect x="42" y="86" width="12" height="26" rx="5" fill="hsl(var(--primary))" opacity="0.6" />
    {/* Arms */}
    <rect x="8" y="52" width="12" height="28" rx="5" fill="hsl(var(--primary))" opacity="0.6" />
    <rect x="60" y="52" width="12" height="28" rx="5" fill="hsl(var(--primary))" opacity="0.6" />
  </svg>
);

const FemaleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 120" className={className} fill="none">
    {/* Hair */}
    <ellipse cx="40" cy="24" rx="20" ry="20" fill="hsl(var(--accent))" opacity="0.5" />
    {/* Head */}
    <circle cx="40" cy="28" r="16" fill="hsl(var(--accent))" opacity="0.85" />
    {/* Body/Dress */}
    <path d="M22 50 L40 50 L58 50 L64 112 L16 112 Z" rx="6" fill="hsl(var(--accent))" opacity="0.7" />
    {/* Arms */}
    <rect x="6" y="52" width="12" height="28" rx="5" fill="hsl(var(--accent))" opacity="0.6" />
    <rect x="62" y="52" width="12" height="28" rx="5" fill="hsl(var(--accent))" opacity="0.6" />
  </svg>
);

const MemberCard = ({ member, role, large = false }: { member: Member; role: string; large?: boolean }) => (
  <div className="flex flex-col items-center">
    {member.gender === "female" ? (
      <FemaleIcon className={large ? "w-24 h-28 mb-3" : "w-20 h-24 mb-2"} />
    ) : (
      <MaleIcon className={large ? "w-24 h-28 mb-3" : "w-20 h-24 mb-2"} />
    )}
    <h4 className={`font-display font-bold text-foreground text-center ${large ? "text-lg" : "text-sm"}`}>
      {member.name}
    </h4>
    <p className="text-accent font-medium text-xs mt-1 text-center">{role}</p>
  </div>
);

const StructureSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.15em] mb-2">Тим</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Структура на КМИ
          </h2>
        </motion.div>

        {/* Pyramid layout */}
        <div className="flex flex-col items-center gap-6">
          {/* Row 1: President */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-2xl border border-border p-6 card-hover"
          >
            <MemberCard member={roles[0].members[0]} role={roles[0].title} large />
          </motion.div>

          {/* Connector line */}
          <div className="w-px h-6 bg-border" />

          {/* Row 2: Vice President */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card rounded-2xl border border-border p-6 card-hover"
          >
            <MemberCard member={roles[1].members[0]} role={roles[1].title} large />
          </motion.div>

          {/* Connector line */}
          <div className="w-px h-6 bg-border" />

          {/* Row 3: General Secretary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-card rounded-2xl border border-border p-6 card-hover"
          >
            <MemberCard member={roles[2].members[0]} role={roles[2].title} large />
          </motion.div>

          {/* Connector line */}
          <div className="w-px h-6 bg-border" />

          {/* Row 3: Coordinators */}
          <div className="flex flex-wrap justify-center gap-6">
            {roles.slice(3).map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-card rounded-2xl border border-border p-6 card-hover"
              >
                <p className="text-accent font-medium text-xs mb-4 text-center">{role.title}</p>
                <div className="flex gap-6">
                  {role.members.map((m, j) => (
                    <div key={j} className="flex flex-col items-center">
                      {m.gender === "female" ? (
                        <FemaleIcon className="w-16 h-20 mb-2" />
                      ) : (
                        <MaleIcon className="w-16 h-20 mb-2" />
                      )}
                      <h4 className="font-display font-bold text-foreground text-sm text-center">{m.name}</h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
