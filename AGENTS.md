# AI Agent Configuration

Rules and guidelines for AI-assisted development on this project.

## Project Context

This is a pixel-perfect Airbnb listing page clone built with React + Vite. Frontend-only — no backend. Deployed on Vercel.

## Rules

### Before Writing Code

- Always create an implementation plan before making changes.
- Get explicit approval before executing the plan.
- If a task is ambiguous, ask for clarification instead of guessing.

### Code Quality

- Keep edits minimal and scoped. If a fix needs 5 lines, don't rewrite 50.
- Do not over-engineer. Simple and working > clever and complex.
- Follow the existing file structure and naming conventions.
- Use Vanilla CSS.
- Components go in `src/components/`, pages go in `src/pages/`.
- Modals are in `src/components/modals/` with their own folder (ComponentName/ComponentName.jsx + .css).

### Styling

- Match the reference site's spacing, typography, and colors exactly.

### Testing & Verification

- Do not open the browser for testing — that's manual and handled by me.
- Use `npx oxlint` for linting before considering a task complete.
- Run `npm run build` to verify there are no build errors.
- If the build passes and lint is clean, the task is done.

### Communication

- Be direct. No filler or unnecessary explanation.
- When proposing changes, list files that will be modified and why.
- If something breaks, explain what went wrong and how to fix it — don't just silently rewrite.

## Project Structure

```
bnb-frontend/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   ├── layout/          # Header, StickyNav, Footer
│   │   └── modals/          # AmenitiesModal, ArchitectureModal
│   ├── pages/
│   │   ├── ListingPage/     # Main listing page + section components
│   │   ├── PhotoTour/       # Full-screen photo gallery
│   │   └── Lightbox/        # Single photo viewer with keyboard nav
│   ├── data/                # Static JSON mock data
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # Global CSS + variables
│   └── assets/              # Icons, images
├── public/                  # Static assets (images, fonts)
└── system-architecture/     # System design diagrams
```

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Vanilla CSS
- **Routing**: React Router
- **Data**: Static JSON (mock data)
- **Deployment**: Vercel
