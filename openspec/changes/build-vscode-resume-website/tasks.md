## 1. Content And Assets

- [x] 1.1 Define the typed resume data contract and placeholder content for identity, summary, experience, projects, skills, education, and contact; verify every required section has renderable fixture data
- [x] 1.2 Download the exported Figma icons used by the shell into `public/` and verify representative files open locally with their source aspect ratios
- [x] 1.3 Record the Figma reference measurements and token values in the implementation styles; verify the desktop shell constants cover the 44 px activity bar, approximately 291 px sidebar, tab row, editor, and status bar

## 2. VS Code Shell

- [x] 2.1 Build reusable top bar, activity bar, explorer sidebar, tab manager, editor panel, and status bar components; verify the root route renders all major regions at the reference desktop viewport
- [x] 2.2 Implement the editor-like resume document renderer from typed data; verify the initial view exposes identity and primary resume content without interaction
- [x] 2.3 Implement tab/file selection state and selected styling for resume sections; verify activating each visible section changes editor content without a full-page navigation
- [x] 2.4 Replace starter page markup and global styling while preserving the existing root route and dependency baseline; verify no starter logo or deployment links remain

## 3. Responsive And Accessible Experience

- [x] 3.1 Add desktop, tablet, and mobile shell adaptations that collapse secondary chrome before reducing resume readability; verify no horizontal overflow at representative narrow and tablet viewports
- [x] 3.2 Add semantic landmarks, heading structure, accessible names, selected/expanded states, visible focus styles, and keyboard navigation; verify section controls can be reached and activated without a pointer
- [x] 3.3 Add reduced-motion handling for any entrance or state transitions; verify content and navigation remain available with `prefers-reduced-motion: reduce`

## 4. Metadata And Validation

- [x] 4.1 Add descriptive page title, description, canonical/share metadata, and semantic resume text; verify the rendered document exposes metadata and readable content without depending on syntax coloring
- [x] 4.2 Add focused behavior checks for initial rendering, section navigation, responsive overflow, and accessibility-critical states; verify the checks pass against the implemented root route
- [x] 4.3 Compare desktop and responsive renders against the supplied Figma source and correct discrepancies in geometry, spacing, typography, colors, borders, icons, and hierarchy; verify representative screenshots at the reference viewport and mobile width
- [x] 4.4 Run the repository TypeScript check, ESLint, and production build; verify all commands complete successfully before review