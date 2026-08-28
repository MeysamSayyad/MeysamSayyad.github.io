## 1. Account Dropdown

- [x] 1.1 Add account menu state and wire the bottom Account button with expanded state; verify activating it opens a single dismissible dropdown
- [x] 1.2 Render the resume owner name and shared GitHub link in the Account dropdown; verify content and destination match the existing resume data
- [x] 1.3 Add secure external navigation, keyboard focus, Escape dismissal, and outside activation behavior; verify keyboard users can reach and activate the GitHub link

## 2. Settings And Themes

- [x] 2.1 Add settings menu state and theme option definitions with Figma dark as the default; verify the gear opens the theme menu and marks the current option
- [x] 2.2 Add light and high-contrast token overrides and apply selected theme without changing resume/navigation state; verify each theme visibly updates shell styling
- [x] 2.3 Persist validated theme selection with safe browser-storage fallback; verify reload persistence and usable Figma dark behavior when storage is unavailable

## 3. Validation

- [x] 3.1 Add responsive dropdown positioning and focus styles; verify menus remain visible and usable at desktop, tablet, and mobile widths without page overflow
- [x] 3.2 Run browser checks for Account content, GitHub navigation attributes, theme selection, dismissal, keyboard access, and persistence
- [x] 3.3 Run TypeScript, ESLint, and production build checks; verify all commands pass