## 1. Panel State And Navigation

- [x] 1.1 Add the supported activity-panel type, default selection, labels, and shared selection handler; verify Explorer is selected on initial render
- [x] 1.2 Wire Explorer, Search, and Source Control activity buttons to the shared panel state with selected/pressed accessibility state; verify each button replaces the primary sidebar panel
- [x] 1.3 Add keyboard cycling through Explorer -> Search -> Source Control with wraparound while ignoring editable targets; verify repeated invocation advances and wraps correctly

## 2. Sidebar Panels

- [x] 2.1 Preserve the existing Explorer file tree as the Explorer panel and keep file selection connected to the active editor document; verify switching away and back preserves state
- [x] 2.2 Implement the local Search panel over typed resume labels/content with result activation and an empty state; verify matching and no-match queries
- [x] 2.3 Implement a read-only Source Control panel with branch/status details and the shared GitHub link; verify its content matches the status bar destination
- [x] 2.4 Add panel styling, responsive constraints, and focus treatment without changing Figma activity-bar dimensions; verify no mobile page overflow

## 3. Validation

- [x] 3.1 Run browser checks for mouse selection, keyboard cycling, result activation, selected state, and panel persistence at desktop/tablet/mobile widths
- [x] 3.2 Run TypeScript, ESLint, and production build checks; verify all commands pass