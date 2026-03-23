# Vaibhav Sharma Portfolio

A modern developer portfolio built with React and Vite. This project showcases Vaibhav Sharma's profile, skills, contact information, and interactive frontend work through a dark-themed, animated single-page experience.

## Overview

This portfolio is a personal website designed to present:

- a strong first impression through a custom preloader and animated hero section
- a short introduction in the About section
- a visual Tech Stack section
- a contact section with form submission support through Web3Forms
- smooth in-page navigation across sections

The overall UI follows a dark portfolio aesthetic with gradient accents, glow effects, hover interactions, scroll reveal animations, and mobile-responsive layouts.

## Live Sections

The current application is organized into these main sections:

1. `Preloader`
   Displays a full-screen loading overlay before the portfolio becomes visible.

2. `Navbar`
   Provides smooth-scroll navigation and a mobile menu.

3. `Hero`
   Introduces the developer, includes a LinkedIn CTA, and presents animated highlights.

4. `About`
   Displays a short biography and core skill tags.

5. `Skills`
   Shows technology cards with visuals and descriptions.

6. `Contact`
   Includes contact details and a working form integrated with Web3Forms.

## Tech Stack

### Core

- `React 19`
- `Vite 7`
- `JavaScript (ES Modules)`
- `CSS3`

### UI / Interaction

- custom CSS animations
- responsive layouts with media queries
- smooth section reveals using a reusable React wrapper component
- smooth anchor navigation using `react-anchor-link-smooth-scroll`

### Form Handling

- `Web3Forms` for contact form submission

### Tooling

- `ESLint`
- `@vitejs/plugin-react`

## Dependencies

From [package.json](/c:/Users/vaibh/Desktop/vite-project/package.json):

### Runtime Dependencies

- `react`
- `react-dom`
- `react-anchor-link-smooth-scroll`
- `react-scroll`

### Development Dependencies

- `vite`
- `eslint`
- `@eslint/js`
- `@vitejs/plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `@types/react`
- `@types/react-dom`
- `globals`

## Project Structure

```text
vite-project/
+-- public/
+-- src/
|   +-- assets/
|   +-- Components/
|   |   +-- About/
|   |   +-- Contact/
|   |   +-- Hero/
|   |   +-- Navbar/
|   |   +-- Preloader/
|   |   +-- Reveal/
|   |   \-- Skills/
|   +-- App.jsx
|   +-- index.css
|   \-- main.jsx
+-- .env
+-- .env.example
+-- package.json
\-- vite.config.js
```

## Component Breakdown

### `App.jsx`

The root component controls whether the preloader is shown or the main portfolio content is rendered.

Responsibilities:

- manages initial loading state with `useState`
- renders `Preloader` first
- mounts portfolio sections after loading completes

### `Preloader`

Files:

- [Preloader.jsx](/c:/Users/vaibh/Desktop/vite-project/src/Components/Preloader/Preloader.jsx)
- [Preloader.css](/c:/Users/vaibh/Desktop/vite-project/src/Components/Preloader/Preloader.css)

Features:

- full-screen overlay
- animated spinner
- progress bar
- animated loading text
- quote display
- delayed exit transition
- disables page scrolling while active

Implementation details:

- uses `useState`, `useEffect`, and `useMemo`
- waits for both:
  - a minimum delay
  - browser asset load completion
- fades out before revealing the portfolio

### `Reveal`

File:

- [Reveal.jsx](/c:/Users/vaibh/Desktop/vite-project/src/Components/Reveal/Reveal.jsx)

This is a reusable animation helper component that reveals content as it enters the viewport.

Features:

- Intersection Observer based reveal
- direction-based animation support
- configurable delay
- reusable wrapper for any HTML tag through the `as` prop

Used throughout:

- Hero
- About
- Skills
- Contact

### `Navbar`

Files:

- [Navbar.jsx](/c:/Users/vaibh/Desktop/vite-project/src/Components/Navbar/Navbar.jsx)
- [Navbar.css](/c:/Users/vaibh/Desktop/vite-project/src/Components/Navbar/Navbar.css)

Features:

- smooth-scroll navigation
- mobile menu with open/close states
- backdrop overlay on mobile
- highlighted active section link state
- contact CTA button

### `Hero`

Files:

- [Hero.jsx](/c:/Users/vaibh/Desktop/vite-project/src/Components/Hero/Hero.jsx)
- [Hero.css](/c:/Users/vaibh/Desktop/vite-project/src/Components/Hero/Hero.css)

Features:

- profile image
- animated headline
- short professional summary
- LinkedIn CTA
- highlight chips such as `Open to Work`
- hover interactions and gradient-glow effects

### `About`

Files:

- [About.jsx](/c:/Users/vaibh/Desktop/vite-project/src/Components/About/About.jsx)
- [About.css](/c:/Users/vaibh/Desktop/vite-project/src/Components/About/About.css)

Features:

- profile image
- personal introduction
- skill pills
- floating ambient decoration
- responsive two-column to one-column layout

### `Skills`

Files:

- [Skills.jsx](/c:/Users/vaibh/Desktop/vite-project/src/Components/Skills/Skills.jsx)
- [Skills.css](/c:/Users/vaibh/Desktop/vite-project/src/Components/Skills/Skills.css)

Features:

- technology cards with icons
- descriptions for each item
- GitHub profile link
- hover tilt/lift interactions
- animated section title and background glow

### `Contact`

Files:

- [Contact.jsx](/c:/Users/vaibh/Desktop/vite-project/src/Components/Contact/Contact.jsx)
- [Contact.css](/c:/Users/vaibh/Desktop/vite-project/src/Components/Contact/Contact.css)

Features:

- contact details with direct links
- contact form
- Web3Forms integration
- success and error states
- hover effects on tiles and form container

## Styling Approach

This project uses plain CSS instead of Tailwind or a component library.

The styling approach includes:

- section-specific CSS files
- global resets and shared reveal styles in [index.css](/c:/Users/vaibh/Desktop/vite-project/src/index.css)
- CSS variables for gradients and theme values
- responsive design through media queries
- multiple layered visual effects such as:
  - radial glows
  - blur
  - gradient text
  - animated borders
  - card elevation

## Animations and Interactivity

The site includes several animation layers:

### Initial Load

- preloader overlay
- animated quote and progress feedback

### Scroll-Based Motion

- reusable reveal animations for section content
- directional entrance effects

### Hover Interactions

- glowing call-to-action buttons
- floating skill cards
- interactive contact tiles
- lifted content panels

### Ambient Effects

- background glow elements
- floating decorative assets
- pulsing gradients

## Contact Form Flow

The contact form posts data to Web3Forms using `fetch`.

Submitted fields include:

- `name`
- `email`
- `message`
- `access_key`
- `subject`
- `from_name`

Behavior:

- shows `Sending...` while the request is processing
- resets form on success
- displays success or error feedback below the button

## Environment Variables

The project uses a Vite environment variable for Web3Forms.

Example file:

- [.env.example](/c:/Users/vaibh/Desktop/vite-project/.env.example)

Required variable:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Important:

- the variable must start with `VITE_` so it is exposed to the frontend by Vite
- if this key is missing, the contact form will fail with a `400` error from Web3Forms

## Setup Instructions

### 1. Clone the project

```bash
git clone <your-repository-url>
cd vite-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create your environment file

Create a `.env` file in the root of the project and add:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Open in browser

Vite will print the local development URL in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

### `npm run dev`

Starts the local development server.

### `npm run build`

Builds the project for production.

### `npm run preview`

Previews the production build locally.

### `npm run lint`

Runs ESLint checks across the project.

## Build Output

The production build is generated in the `dist/` folder.

This output contains:

- bundled JavaScript
- compiled CSS
- optimized assets
- the generated `index.html`

## Deployment

This project is deployment-ready for Vercel.

### Why it works well on Vercel

- it is a Vite-based frontend app
- the production output is static and generated in `dist/`
- environment variables are supported through Vercel project settings
- a Vercel config file is included for build settings and SPA rewrites

### Vercel Configuration

File:

- [vercel.json](/c:/Users/vaibh/Desktop/vite-project/vercel.json)

This configuration:

- sets the framework to `vite`
- uses `npm run build`
- serves the `dist` folder
- rewrites unmatched routes to `index.html`

### Deploy Steps on Vercel

1. Push this project to GitHub.
2. Log in to Vercel.
3. Click `Add New Project`.
4. Import the GitHub repository.
5. In project settings, confirm:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add the environment variable:

```text
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

7. Click `Deploy`.

### Required Environment Variable on Vercel

To make the contact form work in production, add this in:

`Vercel Dashboard -> Project -> Settings -> Environment Variables`

Required key:

```text
VITE_WEB3FORMS_ACCESS_KEY
```

Important:

- do not commit your real secret values to Git
- `.env` is already ignored in [.gitignore](/c:/Users/vaibh/Desktop/vite-project/.gitignore)
- if this variable is missing on Vercel, the contact form will fail in production

### Optional CLI Deployment

If you want to deploy using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

For production deployment:

```bash
vercel --prod
```

## Responsive Design

The project is designed to work across:

- desktop screens
- tablets
- mobile devices

Responsive behavior includes:

- stacked layouts on smaller screens
- mobile navigation drawer
- scalable typography
- button and card resizing
- spacing adjustments with media queries

## Current Portfolio Highlights

At the moment, the portfolio showcases:

- developer intro and brand identity
- core frontend and backend skills
- GitHub link
- LinkedIn CTA
- direct contact methods
- animated and interactive presentation style

## Possible Future Improvements

Good next additions for this project:

- downloadable resume integration for the resume button
- projects/work section with live demo links
- theme toggle
- accessibility refinements for animation preferences
- form validation improvements
- SEO meta tags and social preview metadata
- deployment guide for Vercel or Netlify

## Author

**Vaibhav Sharma**

- LinkedIn: `https://www.linkedin.com/in/vaibhav-sharma-78b738323/`
- GitHub: `https://github.com/Gittyvaibhav`

## Notes

- This project is built as a frontend-first personal portfolio.
- Contact form delivery depends on a valid Web3Forms access key.
- The UI heavily uses custom CSS for branding, animation, and responsiveness.
