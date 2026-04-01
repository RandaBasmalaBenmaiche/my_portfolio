import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-8 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </motion.footer>
  );
}
