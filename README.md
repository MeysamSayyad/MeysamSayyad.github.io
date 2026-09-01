# VS Code Resume Portfolio

A personal resume portfolio built with Next.js and designed to feel like a lightweight VS Code workspace. The project presents the resume content as a set of files, tabs, explorer entries, a terminal, and status bar elements in a developer-focused interface.

## About the project

This project was created to showcase a resume in a creative, technical style that matches the feel of a developer environment instead of a traditional static resume page. The interface includes:

- a VS Code-inspired activity bar and top bar
- an explorer panel with resume sections represented like files
- tabs for the currently open resume sections
- a terminal-style command panel
- a responsive layout for desktop and mobile

The portfolio is built as a modern Next.js app and uses TypeScript for a cleaner, more maintainable project structure.

## Author

Created and developed by Meysam Sayyad Talayi.

This project was created with help from GitHub Copilot.

## Design

Figma design: https://www.figma.com/design/CZmOlt2NzHyjqWzyljbfQX/VS-Code-Kit--Community-?node-id=1-6116

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint

## Project structure

```bash
.
├── app/
│   ├── components/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── resume-data.ts
├── public/
│   └── figma/
├── openspec/
├── package.json
├── next.config.ts
├── tsconfig.json
├── README.md
└── eslint.config.mjs
```

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Production build

```bash
npm run build
```

### Start the production build

```bash
npm run start
```

## Available scripts

```bash
npm run dev     # run the app in development mode
npm run build   # create a production build
npm run start   # serve the production build
or
npx serve@latest out # To serve the build when output is set to "out"

npm run lint    # run ESLint checks
```

## Notes

This repository is a portfolio project and a front-end implementation exercise rather than a general-purpose starter. It is designed to present work and experience in a polished, developer-oriented layout while staying easy to run and extend.
