## 1. Fullscreen Layout

- [ ] 1.1 Update root document and stage sizing to use the full viewport with no page-level overflow; verify the shell width equals `100vw` and height equals the available dynamic viewport
- [ ] 1.2 Remove only the outer centered frame treatment while preserving internal shell region dimensions and responsive collapse rules; verify activity bar, explorer, tabs, editor, and status bar remain present

## 2. Validation

- [ ] 2.1 Verify section selection still updates the active tab and editor document in fullscreen; verify keyboard focus and selected state remain intact
- [ ] 2.2 Measure desktop, tablet, and mobile viewports for document overflow and capture representative screenshots; verify no page-level horizontal or vertical overflow
- [ ] 2.3 Run TypeScript, ESLint, and production build checks; verify all commands pass