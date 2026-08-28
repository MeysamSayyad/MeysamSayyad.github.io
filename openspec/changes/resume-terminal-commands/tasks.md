## 1. Command Registry and Parsing

- [x] 1.1 Add typed command metadata for all resume sections plus `help`, including labels and descriptions; verify the registry drives the displayed command list without duplicated command definitions.
- [x] 1.2 Implement normalized allowlist parsing for `npm run <section>`, `npm run help`, and `help`, with clear responses for empty, malformed, unknown, and unsupported host-shell input; verify each command category produces the specified output and no external operation.

## 2. Terminal Interaction

- [x] 2.1 Add a toggled terminal panel with a labeled input, prompt, chronological output history, and a discoverable initial help affordance; verify the terminal opens, accepts input, and remains usable at desktop and mobile widths.
- [x] 2.2 Connect successful section commands to the existing active resume-section state and preserve synchronization with editor tabs and activity drawers; verify each section command displays the matching document.
- [x] 2.3 Add ArrowUp and ArrowDown command-history navigation without automatic submission; verify history cycles correctly and empty history remains stable.

## 3. Styling and Accessibility

- [x] 3.1 Style the terminal using existing shell theme tokens with bounded scrollable output and responsive sizing that does not obscure the editor or introduce horizontal overflow; verify dark, light, high-contrast, desktop, tablet, and narrow mobile layouts.
- [x] 3.2 Add accessible terminal semantics, focus behavior, labels, live output announcements, and keyboard-operable open/close controls; verify screen-reader names and keyboard interaction through browser inspection.

## 4. Validation

- [x] 4.1 Run browser checks for every supported command, help output completeness, invalid input feedback, history navigation, active-section synchronization, and rejection of arbitrary shell input.
- [x] 4.2 Run `npx tsc --noEmit`, `npm run lint -- --max-warnings=0`, and `npm run build`; verify all commands complete successfully without new errors.
