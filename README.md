# Randa Basmala Benmaiche - Portfolio

A professional developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Dark, techy design with neon accent colors (cyan & purple)
- Glassmorphism cards and animated grid/particle backgrounds
- Smooth scroll navigation with React Router
- Fully responsive design (mobile + desktop)
- Animated skill badges and typing effects
- Individual project detail pages with placeholder sections
- Page transitions with Framer Motion

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS v3** - Styling
- **Framer Motion** - Animations
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── sections/          # Page section components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── AIProjects.jsx
│   │   ├── SoftwareProjects.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   └── StatusBadge.jsx
├── pages/
│   ├── Home.jsx
│   └── ProjectDetail.jsx
├── data/
│   └── portfolio.js       # All portfolio content
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment

### GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `vite.config.js`** - add your repo name as base:
   ```js
   export default defineConfig({
     base: '/my_portfolio/',
     plugins: [react(), tailwindcss()],
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
   - Go to repository Settings > Pages
   - Select `gh-pages` branch as source
   - Your site will be live at `https://yourusername.github.io/my_portfolio/`

### Netlify

#### Option 1: Git Integration (Recommended)

1. Push your code to GitHub

2. Go to [Netlify](https://netlify.com) and click "New site from Git"

3. Select your repository

4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

5. Click "Deploy site"

#### Option 2: Drag and Drop

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://netlify.com)
3. Drag the `dist` folder to the Netlify dropzone

#### Option 3: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

Vercel auto-detects Vite and configures everything automatically.

## Customization

### Adding New Projects

Edit `src/data/portfolio.js` and add a new project to the `aiProjects` array:

```js
{
  slug: "my-new-project",
  title: "My New Project",
  description: "Short description...",
  tags: ["Tag1", "Tag2"],
  status: "In Progress",
  github: "https://github.com/...",
  fullDescription: "Full description..."
}
```

### Adding Software Projects

Edit `src/data/portfolio.js` - the `softwareProjects` array is ready to accept project cards in the same format as AI projects.

### Changing Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0f;
  --accent-cyan: #00e5ff;
  --accent-purple: #b084f7;
}
```

## License

MIT © Randa Basmala Benmaiche
