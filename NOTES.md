# Portfolio Notes & Documentation

## Project Structure

```
my_portfolio/
├── public/                     # Static assets (favicons, etc.)
├── src/
│   ├── assets/                 # Images, fonts, etc.
│   ├── components/
│   │   ├── sections/           # Main page section components
│   │   │   ├── Hero.jsx        # Full-screen hero with typing effect
│   │   │   ├── About.jsx       # Bio + experience timeline
│   │   │   ├── Skills.jsx      # Animated skill badges
│   │   │   ├── AIProjects.jsx  # AI projects grid
│   │   │   ├── SoftwareProjects.jsx  # Software projects (placeholder)
│   │   │   ├── Certifications.jsx    # Certification badges
│   │   │   └── Contact.jsx     # Contact section
│   │   ├── Navbar.jsx          # Sticky navigation bar
│   │   ├── Footer.jsx          # Site footer
│   │   ├── ProjectCard.jsx     # Reusable project card component
│   │   └── StatusBadge.jsx     # Status badge (Finished/In Progress)
│   ├── pages/
│   │   ├── Home.jsx            # Main portfolio page (combines all sections)
│   │   └── ProjectDetail.jsx   # Individual project detail page
│   ├── data/
│   │   └── portfolio.js        # ALL content data - edit this file!
│   ├── App.jsx                 # React Router configuration
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies & scripts
├── README.md                   # User-facing documentation
└── NOTES.md                    # This file - developer notes
```

---

## Component to Section Mapping

| Component | Section ID | Description |
|-----------|------------|-------------|
| `Hero.jsx` | (none - top of page) | Full-screen hero with name, title, typing effect, particle background |
| `About.jsx` | `#about` | Bio paragraph + experience timeline |
| `Skills.jsx` | `#skills` | Four categories of skill badges |
| `AIProjects.jsx` | `#ai-projects` | Grid of AI project cards |
| `SoftwareProjects.jsx` | `#software-projects` | Software projects section (currently placeholder) |
| `Certifications.jsx` | `#certifications` | Certification badge cards |
| `Contact.jsx` | `#contact` | Email and GitHub contact buttons |

---

## How to Add a New AI Project

1. **Open** `src/data/portfolio.js`

2. **Find** the `aiProjects` array

3. **Add** a new project object at the beginning or end of the array:

```js
{
  slug: "my-new-project-slug",           // URL-friendly, lowercase, hyphens
  title: "My New Project",               // Display title
  description: "Short 1-2 sentence description...",  // For card preview
  tags: ["Tag1", "Tag2", "Tag3"],        // Tech stack tags
  status: "Finished",                    // "Finished" or "In Progress"
  github: "https://github.com/...",      // Full GitHub URL, or null
  fullDescription: `Longer description...`  // Full page description (markdown-style)
}
```

4. **Save** the file - the project will appear automatically on the homepage

5. **Navigate** to `http://localhost:5173/projects/my-new-project-slug` to see the detail page

---

## How to Add a New Software Project

1. **Open** `src/data/portfolio.js`

2. **Find** the `softwareProjects` array (currently empty)

3. **Add** project objects in the same format as AI projects:

```js
export const softwareProjects = [
  {
    slug: "my-software-project",
    title: "My Software Project",
    description: "Short description...",
    tags: ["React", "Node.js", "TypeScript"],
    status: "Finished",
    github: "https://github.com/...",
    fullDescription: `Full description...`
  }
];
```

4. **Update** `src/components/sections/SoftwareProjects.jsx`:

   Replace the placeholder card with the same grid pattern used in `AIProjects.jsx`:

```jsx
import ProjectCard from '../../components/ProjectCard';
import { softwareProjects } from '../../data/portfolio';

// ... inside the component:
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {softwareProjects.map((project, index) => (
    <ProjectCard key={project.slug} project={project} index={index} />
  ))}
</div>
```

5. **Save** - projects will appear on the homepage

---

## How to Update Project Details

All project content is in `src/data/portfolio.js`. To update any project:

1. **Open** `src/data/portfolio.js`

2. **Find** the project in the `aiProjects` array by its `slug`

3. **Edit** any field:
   - `description` - Card preview text
   - `fullDescription` - Full detail page content
   - `tags` - Tech stack badges
   - `status` - Changes the badge color (green for Finished, yellow for In Progress)
   - `github` - Add/remove GitHub link

4. **Save** - changes appear instantly in development

---

## Color Palette & Design Tokens

### CSS Variables (defined in `src/index.css`)

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-primary` | `#0a0a0f` | Main page background |
| `--bg-secondary` | `#12121a` | Section backgrounds (alternating) |
| `--bg-card` | `rgba(255, 255, 255, 0.03)` | Card backgrounds |
| `--text-primary` | `#ffffff` | Main text color |
| `--text-secondary` | `#a0a0a0` | Secondary/muted text |
| `--accent-cyan` | `#00e5ff` | Primary accent (buttons, highlights) |
| `--accent-purple` | `#b084f7` | Secondary accent |
| `--accent-gradient` | `linear-gradient(135deg, #00e5ff, #b084f7)` | Gradient text |

### Tailwind Config (`tailwind.config.js`)

```js
colors: {
  'accent-cyan': '#00e5ff',
  'accent-purple': '#b084f7',
}
```

### Utility Classes

| Class | Effect |
|-------|--------|
| `.glass` | Semi-transparent background with blur |
| `.glass-strong` | More opaque glass effect |
| `.gradient-text` | Gradient text fill |
| `.glow` | Cyan glow shadow |
| `.glow-purple` | Purple glow shadow |
| `.skill-badge` | Animated glow on skill badges |
| `.grid-bg` | Animated grid pattern |

---

## Deployment

### Netlify

#### Method 1: Git Integration (Recommended)

1. Push your code to GitHub

2. Go to [Netlify](https://netlify.com) → "Add new site" → "Import an existing project"

3. Connect your GitHub repository

4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

5. Click "Deploy site"

#### Method 2: Manual Deploy

```bash
# Build the project
npm run build

# Drag the 'dist' folder to Netlify's dropzone
# at https://app.netlify.com/drop
```

#### Method 3: Netlify CLI

```bash
# Install CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

### GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `vite.config.js`** with your repo name:
   ```js
   export default defineConfig({
     base: '/my_portfolio/',  // Change to your repo name
     plugins: [react()],
   })
   ```

3. **Add deploy script to `package.json`:**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from `gh-pages` branch
   - Your site: `https://yourusername.github.io/my_portfolio/`

---

## TODO / Coming Soon

### Software Projects Section
- [ ] Add actual software projects to `softwareProjects` array
- [ ] Update `SoftwareProjects.jsx` to render project cards instead of placeholder
- [ ] Consider categorizing software projects (web apps, mobile apps, tools, etc.)

### AI Projects - Pending Updates

**Dental Treatment Visualizer** (Internship Project)
- [ ] Update project status after internship starts
- [ ] Add detailed description of generative AI approach
- [ ] Add any demo screenshots or visualizations
- [ ] Note: May remain private (no GitHub link) due to internship NDA

### Project Detail Pages - Missing Assets

For each project in `aiProjects`, the detail page has placeholder sections:

| Project | Results | Architecture | Screenshots |
|---------|---------|--------------|-------------|
| DME Biomarker Detection | [ ] TODO | [ ] TODO | [ ] TODO |
| RAG ENSIA Chatbot | [ ] TODO | [ ] TODO | [ ] TODO |
| RL Video Summarization | [ ] TODO | [ ] TODO | [ ] TODO |
| Crops Division Algeria | [ ] TODO | [ ] TODO | [ ] TODO |
| Dental Treatment Visualizer | [ ] TODO | [ ] TODO | [ ] TODO |

### Future Enhancements
- [ ] Add blog section for technical writing
- [ ] Add contact form (requires backend or Formspree/EmailJS)
- [ ] Add downloadable resume/CV
- [ ] Add social media links (LinkedIn, Twitter)
- [ ] Add testimonials/recommendations section
- [ ] Add dark/light mode toggle
- [ ] Add analytics (Google Analytics, Plausible, etc.)
- [ ] Add SEO meta tags for each project page

---

## Quick Reference

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Key Files to Edit
| To Change | Edit This File |
|-----------|----------------|
| Personal info, bio, projects | `src/data/portfolio.js` |
| Colors, fonts, effects | `src/index.css` |
| Navigation links | `src/components/Navbar.jsx` |
| Section content | `src/components/sections/*.jsx` |
| Project detail layout | `src/pages/ProjectDetail.jsx` |

---

**Last Updated:** April 2026
**Built With:** React + Vite + Tailwind CSS + Framer Motion
