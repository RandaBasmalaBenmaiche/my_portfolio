import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';
import { aiProjects } from '../../data/portfolio';

export default function AIProjects() {
  return (
    <section id="ai-projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            AI Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
