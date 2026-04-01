import { motion } from 'framer-motion';

export default function SoftwareProjects() {
  return (
    <section id="software-projects" className="py-24 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Software Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--accent-cyan)]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Coming Soon
              </h3>
              <p className="text-gray-400">
                Software projects coming soon — check back later.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
