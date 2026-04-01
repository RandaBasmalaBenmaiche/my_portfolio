import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo, typingTexts } from '../../data/portfolio';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (typedText === '') {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typingTexts.length);
          } else {
            setTypedText(currentText.substring(0, typedText.length - 1));
          }
        } else {
          if (typedText === currentText) {
            setTimeout(() => setIsDeleting(true), 2000);
          } else {
            setTypedText(currentText.substring(0, typedText.length + 1));
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, textIndex, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 15 + 's',
              animationDuration: Math.random() * 10 + 15 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            {personalInfo.title}
          </p>

          <p className="text-lg text-gray-400 mb-6 h-8">
            <span className="typing-cursor text-[var(--accent-cyan)]">
              {typedText}
            </span>
          </p>

          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>

          <div className="flex gap-4 justify-center">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-lg bg-white/5 text-gray-300 font-medium hover:bg-white/10 transition-all hover:glow flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <Link
              to="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-3 px-6 rounded-lg bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] font-medium hover:bg-[var(--accent-cyan)]/30 transition-all hover:glow"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
