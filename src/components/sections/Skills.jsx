import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio';

const skillCategories = [
  { key: 'programming', title: 'Programming', icon: '💻' },
  { key: 'aiData', title: 'AI & Data', icon: '🧠' },
  { key: 'toolsFrameworks', title: 'Tools & Frameworks', icon: '🛠️' },
  { key: 'languages', title: 'Languages', icon: '🌍' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skills[category.key].map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="skill-badge px-3 py-2 rounded-lg bg-white/5 text-gray-300 text-sm border border-white/10 hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
