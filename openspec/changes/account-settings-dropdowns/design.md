## Context

The current bottom activity controls are inactive buttons in the client-rendered root page. Resume identity and the GitHub destination already live in `resume-data.ts`. The stylesheet uses Figma-derived custom properties for the dark shell, so themes can be represented as alternate token sets.

## Goals / Non-Goals

**Goals:**

- Add two independent, dismissible dropdown surfaces anchored to the bottom activity controls.
- Reuse typed owner and GitHub data for Account content.
- Add Figma dark, light, and high-contrast token sets with safe local persistence.
- Preserve existing panel, tab, editor, responsive, and accessibility behavior.

**Non-Goals:**

- Add authentication, account editing, sign-in state, or profile management.
- Add arbitrary user color customization or a theme builder.
- Change the separate Explorer/Search/Source Control activity-panel behavior.

## Decisions

### Keep dropdown state local to the root shell

Track which of `account`, `settings`, or `none` is open and close the previous menu when the other control is activated. Use native buttons, menu semantics, and a document-level outside interaction handler with Escape support.

Alternative considered: separate always-visible panels. Rejected because the Figma activity rail implies compact popover affordances and always-visible content would consume resume space.

### Reuse resume data for Account content

Read the owner name and `github` entry from the existing resume data object. Render the GitHub link with secure external navigation attributes and avoid duplicating the URL in the dropdown component.

Alternative considered: a new account configuration object. Rejected because identity duplication would allow the status bar, contact document, and account menu to disagree.

### Implement themes as CSS token overrides

Add a root theme attribute or class and define alternate values for the existing surface, border, foreground, muted, and syntax variables. Theme options remain a small typed constant list so the menu and persistence validation share one source.

Alternative considered: inline style mutation for every component. Rejected because it would scatter theme logic and make Figma token maintenance harder.

### Persist only validated theme identifiers

Read a namespaced local-storage key inside an effect, accept only known theme IDs, and guard storage access with try/catch. The server-rendered initial markup and unavailable-storage fallback use Figma dark to avoid blocking or hydration errors.

Alternative considered: cookies or server persistence. Rejected because themes are local presentation preferences and no server state is needed.

## Risks / Trade-offs

- [Risk] Popovers can be clipped by the viewport or shell overflow -> Mitigation: position them inside the activity rail's containing block with responsive edge adjustments and test short/mobile viewports.
- [Risk] Light and high-contrast tokens may reduce fidelity to the source frame -> Mitigation: keep Figma dark as the default and scope alternate tokens to explicit user selection.
- [Risk] Storage access can fail in privacy-restricted contexts -> Mitigation: catch read/write failures and retain an in-memory theme.

## Migration Plan

Add dropdown and theme state to the existing client shell and extend CSS tokens. Existing visitors retain the Figma dark default; no route or data migration is required. Rollback removes the menus and theme attribute while leaving the resume navigation unchanged.