export const personalInfo = {
  name: "Randa Basmala Benmaiche",
  title: "AI Engineer & Solution Developer",
  tagline: "Building intelligent systems that solve real-world problems",
  email: "randa.cs.acc@gmail.com",
  github: "https://github.com/RandaBasmalaBenmaiche",
  location: "Algeria"
};

export const aboutBio = `5th year Computer Science & AI engineering student at the National Higher School
of Artificial Intelligence (ENSIA), Algeria. I work across the full AI pipeline
— from computer vision and deep learning to NLP, reinforcement learning, and
symbolic AI. I've interned at Sirius Net, SONATRACH, and SLB, applying AI to
real industry problems in healthcare, petroleum, and geoscience.`;

export const experience = [
  {
    period: "Jun–Sep 2024",
    role: "Computer Vision Intern",
    company: "Sirius Net",
    description: "Aquaponics enhancement"
  },
  {
    period: "Sep 2024–Jul 2025",
    role: "Computer Vision Junior",
    company: "Sirius Net",
    description: "Biomarker detection for macular disease"
  },
  {
    period: "Oct 2024–Jan 2025",
    role: "Project Intern",
    company: "SONATRACH",
    description: "Lithology classification for petroleum reservoir detection"
  },
  {
    period: "Sep 2025",
    role: "Intern",
    company: "SLB",
    description: "Geoscience, petrophysics, lithofacies classification"
  }
];

export const skills = {
  programming: ["Python", "C++", "C", "Java", "PHP", "SQL", "Git", "Flutter"],
  aiData: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Time Series Analysis",
    "Reinforcement Learning",
    "Symbolic AI",
    "Data Mining",
    "Statistics"
  ],
  toolsFrameworks: [
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "Scikit-learn",
    "NumPy",
    "Pandas",
    "NLTK",
    "DataIku"
  ],
  languages: ["Arabic (Native)", "English (Fluent)", "French (Fluent)"]
};

export const aiProjects = [
  {
    slug: "dme-biomarker-detection",
    title: "DME Biomarker Detection",
    description: "Deep learning system to detect Diabetic Macular Edema biomarkers (Cystoids, DRIL, HRD) from retinal OCT scans. Benchmarked UNet, UNet++, Attention UNet, ResNet, and EfficientNet architectures.",
    tags: ["Computer Vision", "Deep Learning", "UNet", "PyTorch", "Medical Imaging"],
    status: "Finished",
    github: "https://github.com/RandaBasmalaBenmaiche/DME-Biomarker-Detection",
    fullDescription: `A comprehensive deep learning system designed to detect Diabetic Macular Edema (DME) biomarkers from retinal OCT scans. This project involved extensive architectural benchmarking to identify the optimal model for clinical deployment.

The system detects three key biomarkers:
• Cystoids - Fluid-filled cysts in the retina
• DRIL (Disorganization of Retinal Inner Layers)
• HRD (Hyperreflective Deposits)

Architectures benchmarked include UNet, UNet++, Attention UNet, ResNet, and EfficientNet, with comprehensive evaluation metrics for clinical applicability.`
  },
  {
    slug: "rag-ensia-chatbot",
    title: "RAG Chatbot for ENSIA Community",
    description: "A Retrieval-Augmented Generation chatbot for the ENSIA student community — answers questions using the school community's shared knowledge base.",
    tags: ["NLP", "RAG", "LLM", "Python"],
    status: "In Progress",
    github: null,
    fullDescription: `A Retrieval-Augmented Generation (RAG) chatbot built specifically for the ENSIA student community. The system leverages large language models combined with a custom knowledge base to provide accurate, context-aware answers to student questions.

Key features:
• Semantic search over the ENSIA knowledge base
• Context-aware response generation
• Continuous learning from community interactions
• Secure access control for sensitive information`
  },
  {
    slug: "rl-video-summarization",
    title: "RL for Video Summarization",
    description: "Using reinforcement learning to automatically summarize videos by selecting the most informative frames and segments.",
    tags: ["Reinforcement Learning", "Deep Learning", "Python"],
    status: "In Progress",
    github: null,
    fullDescription: `An innovative approach to video summarization using reinforcement learning. The system learns to identify and extract the most informative frames and segments from videos, creating concise summaries while preserving key information.

Technical approach:
• State representation using frame embeddings
• Reward function based on information density
• Policy gradient optimization
• Temporal coherence constraints`
  },
  {
    slug: "crops-division-algeria",
    title: "Crops Division in Algeria",
    description: "Combining symbolic AI and time series analysis to determine optimal crop cultivation zones across Algeria's regions.",
    tags: ["Symbolic AI", "Time Series", "Machine Learning", "Python"],
    status: "Finished",
    github: null,
    fullDescription: `A hybrid AI system that combines symbolic reasoning with time series analysis to optimize agricultural planning across Algeria. The system analyzes climate data, soil conditions, and historical yields to recommend optimal crop zones.

Key components:
• Symbolic knowledge base of crop requirements
• Time series analysis of climate patterns
• Geospatial data integration
• Multi-criteria decision making`
  },
  {
    slug: "dental-treatment-visualizer",
    title: "AI Dental Treatment Visualizer",
    description: "Generative AI system that transforms structured dental treatment plans into visual content, helping patients intuitively understand how their mouth will evolve throughout treatment (implants, crowns, cavity care, gum treatment).",
    tags: ["Generative AI", "Computer Vision", "NLP", "Python"],
    status: "In Progress (Internship)",
    github: null,
    fullDescription: `A cutting-edge generative AI system that bridges the gap between clinical dental treatment plans and patient understanding. The system processes structured treatment data and generates visual representations of how a patient's mouth will transform throughout their treatment journey.

Capabilities:
• Dental implant visualization
• Crown and bridge previews
• Cavity treatment progression
• Gum treatment simulations
• Natural-looking before/after transitions

This project is being developed during an internship and combines multiple AI disciplines including generative models, computer vision, and natural language processing.`
  }
];

export const softwareProjects = [];

export const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Andrew Ng, DeepLearning.AI (Coursera)"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Andrew Ng, DeepLearning.AI (Coursera)"
  },
  {
    title: "DataIku Certification",
    issuer: "DataIku"
  }
];

export const typingTexts = ["AI Engineer", "Solution Developer", "Deep Learning Enthusiast"];
