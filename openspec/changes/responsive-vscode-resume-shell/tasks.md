## 1. Responsive Shell Geometry

- [x] 1.1 Adjust the page stage and VS Code shell sizing so desktop and mobile use more available viewport space with restrained outer padding; verify the shell remains centered/readable on desktop and does not introduce horizontal overflow.
- [x] 1.2 Preserve the existing internal activity bar, editor, tabs, sidebar, and status-bar geometry while making the shell's flexible regions shrink safely; verify the desktop resume sections and theme presentation remain unchanged.

## 2. Mobile Navigation

- [x] 2.1 Add a bottom navigation presentation for the primary resume sections that reuses the existing active-section state and selection handler; verify activating each item displays the matching section and selected styling.
- [x] 2.2 Ensure mobile navigation controls have accessible labels, keyboard activation, and stable touch-friendly sizing; verify keyboard selection and narrow phone rendering do not overlap or truncate controls.

## 3. Responsive Styling

- [x] 3.1 Add a single small-screen breakpoint that hides the desktop sidebar and Explorer presentation while showing the bottom navigation, and keeps the desktop navigation visible above the breakpoint; verify both states at widths on either side of the breakpoint.
- [x] 3.2 Reserve layout space for the bottom navigation and align it with the existing theme tokens, selected states, and shell colors; verify resume content is not obscured in dark, light, and high-contrast themes.

## 4. Validation

- [x] 4.1 Run browser checks at desktop, tablet, and narrow mobile widths for viewport fit, no page-level horizontal scrolling, navigation switching, keyboard access, and touch-target usability.
- [x] 4.2 Run `npx tsc --noEmit`, `npm run lint -- --max-warnings=0`, and `npm run build`; verify all commands complete successfully without new errors.
