import { Hero, About, Skills, AIProjects, SoftwareProjects, Certifications, Contact } from '../components/sections';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <AIProjects />
        <SoftwareProjects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
