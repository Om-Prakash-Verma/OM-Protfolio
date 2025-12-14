# Om Prakash Verma | Premium Personal Portfolio

> **"AI is a productivity multiplier, not a replacement for thinking."**

A premium, cinematic personal portfolio website designed for a Computer Science Engineering student specializing in **System Architecture** and **AI-Assisted Web Development**. 

This project moves away from generic "tutorial-style" portfolios, focusing instead on **depth, reasoning, and system design**. The visual identity is built around a **Black & Gold** aesthetic—conveying confidence, luxury, and solidity without unnecessary flashiness.

---

## 🎨 Design Philosophy

### The "System-First" Persona
The portfolio is crafted to position the engineer not just as a coder, but as an architect. 
- **Typography:** Uses `Outfit` (clean, modern sans-serif) for body text and `Space Grotesk` (technical, slightly brutalist) for headers to balance readability with a "tech-forward" feel.
- **Color Palette:**
  - **Void Black (`#050505`)**: The foundation. Represents depth and focus.
  - **Metallic Gold (`#D4AF37` / `#F59E0B`)**: Used strictly for highlights, calls-to-action, and semantic emphasis. It signifies value and premium quality.
  - **Neutral Greys**: Used for secondary text to maintain high contrast and accessibility.

### Physics & Motion
Animations are designed to feel "heavy" and "expensive".
- **Custom Easing:** Instead of standard ease-in-out, we utilize a custom cubic-bezier curve (`0.22, 1, 0.36, 1`). This creates a snappy start with a very long, smooth deceleration ("settling") phase.
- **Timing:** Elements take **1.8 seconds** to settle, giving the user time to absorb the content as it flows in.

---

## 🛠 Tech Stack

Built with a focus on clean architecture and performance, even within a client-side environment.

- **Core Framework:** React 19 (TypeScript)
- **Styling:** Tailwind CSS (configured for distinct typography and custom color palettes)
- **Routing:** State-based routing (`App.tsx`) for seamless, single-page application (SPA) transitions without full reloads.
- **Icons:** Inline SVG icons optimized for currentColor inheritance.
- **Build System:** ES Modules via `esm.sh` (No-bundle setup for rapid prototyping/sandbox environments) or standard Vite (for production).

---

## 📂 Project Structure

```text
/
├── components/
│   ├── ui/
│   │   ├── FadeIn.tsx             # Core animation wrapper using IntersectionObserver
│   │   ├── NetworkBackground.tsx  # Interactive particle background
│   │   ├── ArchitectureDiagram.tsx # Visualization for CrockeryHub architecture
│   │   └── NeuroSymbolicDiagram.tsx # Visualization for AetherSchedule AI flow
│   ├── projects/                  # Detailed case study views
│   │   ├── CrockeryHub.tsx
│   │   ├── Flix.tsx
│   │   ├── CampusPulse.tsx
│   │   └── AetherSchedule.tsx
│   ├── Navbar.tsx                 # Responsive navigation with glassmorphism
│   ├── Hero.tsx                   # Cinematic landing area
│   ├── About.tsx                  # Personal introduction
│   ├── Skills.tsx                 # "Approach" section (System Design > Syntax)
│   ├── Projects.tsx               # Grid view of project cards
│   ├── Philosophy.tsx             # Core values section
│   ├── Resume.tsx                 # Printable/Web-viewable CV
│   ├── Contact.tsx                # CTA and Social Links
│   └── Footer.tsx
├── hooks/
│   └── useOnScreen.ts             # Hook for scroll-triggered animations
├── types.ts                       # TS Interfaces for consistency
├── App.tsx                        # Main Layout & View Router
├── index.html                     # Entry point, Tailwind config, Fonts
└── index.tsx                      # React Root
```

---

## 🌟 Key Features

### 1. Detailed Case Studies
Unlike standard portfolios that show just a screenshot and a link, this project features deep-dive views for every project (`components/projects/`). 
Each case study includes:
- **The Challenge:** Context of the problem.
- **The Solution:** How it was solved.
- **Architecture Stack:** Beyond just "React", listing specific tools like Genkit, TMDB API, Firestore, etc.
- **Technical Deep Dive:** A specific section highlighting algorithmic or architectural decisions (e.g., "Deterministic Repair Layer" or "Hybrid Config Strategy").
- **Custom Visualizations:** React components like `NeuroSymbolicDiagram` and `ArchitectureDiagram` that visually explain the system logic.

### 2. Smooth Navigation
The `Navbar` and `Hero` components share a unified navigation handler. 
- Click "Projects" -> Smooth scrolls to the section.
- Click a Project Card -> Swaps the view to the details page instantly using Framer Motion.
- Click "Back" -> Returns to the home view and preserves context.

### 3. Neuro-Symbolic Resume
The `Resume` component is built directly into the app. It presents professional experience in a format readable by both humans and ATS systems (if exported), emphasizing the "AI as a Multiplier" narrative.

---

## 🚀 Setup & Customization

### Prerequisites
- Node.js (if migrating to a local Vite environment)
- A modern web browser

### Running Locally
1. Clone the repository.
2. If using a build tool like Vite:
   ```bash
   npm install
   npm run dev
   ```
3. If running in a raw ES Module environment (like the current structure), simply serve the root directory using a static server:
   ```bash
   npx serve .
   ```

### Customizing Content
- **Personal Details:** Update `components/Hero.tsx` and `components/Resume.tsx`.
- **Projects:** Modify the `projects` array in `components/Projects.tsx` and creating corresponding detail views in `components/projects/`.
- **Social Links:** Update `components/Contact.tsx`.

---

## 📜 License

Designed and Built by Om Prakash Verma.
Free to use for personal portfolio inspiration, but please attribute the design concept.