import { motion } from 'framer-motion';
import { aboutBio, experience } from '../../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-12 whitespace-pre-line">
            {aboutBio}
          </p>

          <h3 className="text-xl font-semibold text-white mb-6">Experience</h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-purple)] to-transparent" />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-4 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent-cyan)] glow z-10" />

                  <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className="glass rounded-lg p-4 hover:border-[var(--accent-cyan)]/50 transition-colors">
                      <span className="text-[var(--accent-cyan)] text-sm font-medium">
                        {exp.period}
                      </span>
                      <h4 className="text-white font-semibold mt-1">
                        {exp.role}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
