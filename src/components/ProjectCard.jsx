import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass rounded-xl p-6 hover:border-[var(--accent-cyan)]/50 transition-all duration-300 hover:glow group"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-[var(--accent-cyan)] transition-colors">
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 rounded-md text-xs bg-white/5 text-gray-300 border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <Link
          to={`/projects/${project.slug}`}
          className="flex-1 py-2 px-4 rounded-lg bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] text-sm font-medium hover:bg-[var(--accent-cyan)]/30 transition-colors text-center"
        >
          View Details
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 rounded-lg bg-white/5 text-gray-300 text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
