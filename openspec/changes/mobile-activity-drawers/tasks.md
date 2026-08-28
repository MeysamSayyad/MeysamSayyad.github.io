## 1. Mobile Drawer State

- [x] 1.1 Add nullable mobile drawer state keyed to the existing activity tabs and wire each mobile activity button to toggle or replace the open drawer; verify only one drawer can be active at a time.
- [x] 1.2 Render the existing Explorer, Search, and Source Control content inside the mobile drawer and add clearly labeled states for Run, Extensions, and custom editor; verify every activity tab opens an identifiable panel.

## 2. Mobile Drawer Interaction

- [x] 2.1 Add a mobile-only drawer container with a close control and scrim, preserving the editor behind it without page-level horizontal overflow; verify opening and closing at narrow phone widths.
- [x] 2.2 Implement dismissal by active-tab toggle, close control, Escape, and outside scrim activation; verify each path closes the drawer without changing the active resume section.
- [x] 2.3 Preserve Explorer and Search section selection inside the drawer and return focus to the opening activity tab after close; verify pointer and keyboard selection flows.

## 3. Responsive and Accessible Styling

- [x] 3.1 Replace the prior mobile bottom navigation presentation with the mobile activity-bar/drawer layout while keeping the desktop sidebar and activity-panel behavior unchanged above the breakpoint; verify both layouts at mobile and desktop widths.
- [x] 3.2 Style mobile activity controls and drawers with existing theme tokens, meaningful accessible names, stable touch targets, and visible selected states; verify dark, light, and high-contrast themes plus keyboard focus states.

## 4. Validation

- [x] 4.1 Run browser checks for all activity tabs, drawer switching, dismissal paths, Explorer/Search navigation, focus return, mobile overflow, and unchanged desktop behavior at representative widths.
- [x] 4.2 Run `npx tsc --noEmit`, `npm run lint -- --max-warnings=0`, and `npm run build`; verify all commands complete successfully without new errors.
