## Context

The current project is a minimal Next.js 16.3.3 App Router application using React 19, TypeScript, Tailwind CSS 4, and global CSS. The supplied Figma frame is a VS Code desktop composition: the visible `VS-Code` frame is 1296.505 x 824.834 px, with a 29.936 px top bar, a 44 px activity bar, a 291.279 px primary sidebar, a 35.705 px tab manager, a 739.472 px editor panel, and a 19.72 px status bar. No responsive resume frames or personal resume data are present in the source file.

## Goals / Non-Goals

**Goals:**

- Preserve the Figma shell's measured geometry and visual tokens while making it a real resume experience.
- Keep resume content typed, centralized, and easy to replace with the user's final details.
- Provide progressive responsive behavior, semantic HTML, keyboard interaction, metadata, and focused validation.

**Non-Goals:**

- Recreate a functional code editor, filesystem, source control, or backend.
- Add authentication, a CMS, an administration workflow, or server APIs.
- Invent responsive Figma layouts that do not exist; responsive behavior will be a documented adaptation of the desktop source.

## Decisions

### Use a componentized shell with a typed content model

Create small React components for the window chrome, activity rail, explorer, tabs, editor document, and status bar. Put resume fields and section entries in a typed data module and map sections to renderable documents. This keeps the visual shell reusable and prevents personal content from being duplicated across JSX.

Alternative considered: one monolithic page component. Rejected because the shell has several independently responsive and interactive regions, and a monolith would make fidelity adjustments risky.

### Use CSS variables and CSS layout for measured visual tokens

Define the Figma colors, dimensions, borders, typography, and responsive breakpoints as local CSS variables and use grid/flex layout rather than broad absolute positioning. Preserve fixed dimensions for desktop chrome and use controlled collapse/reflow rules below the desktop breakpoint.

Alternative considered: paste generated Tailwind markup unchanged. Rejected because Figma output is reference code, while the project needs durable local tokens, responsive rules, and maintainable component boundaries.

### Commit exported Figma assets under public/

Download the exact exported icon bytes from the Figma context into `public/` and reference them from the application. Preserve each asset's distinct source dimensions and any designed inset rather than applying one global icon size.

Alternative considered: use a generic icon package or expiring Figma URLs. Rejected because the source frame's icon geometry is part of the fidelity requirement and remote URLs are temporary.

### Treat section navigation as client-side UI state

Keep the initial document server-renderable for SEO, then use a small client boundary for active tab/file selection. Controls will expose selected state and update the visible document without changing the route.

Alternative considered: separate routes for every resume section. Rejected because the source interaction is an editor/tab metaphor and separate routes would add navigation overhead without a requirement for deep-linked documents.

### Adapt chrome before reducing resume readability

At tablet and mobile widths, hide or compress secondary chrome in a predictable order, retain a compact active-tab/navigation affordance, and allow the editor document to use the available width. The mobile behavior is an implementation adaptation because the supplied Figma file has no mobile frame.

## Risks / Trade-offs

- [Risk] The source Figma file contains demo code and no personal resume content -> Mitigation: use an explicit typed placeholder data contract and document the final content replacement as an implementation task.
- [Risk] Pixel dimensions from the desktop mockup may not fit smaller screens -> Mitigation: preserve desktop measurements at the reference viewport and use breakpoint-specific chrome collapse with overflow checks.
- [Risk] Downloaded Figma asset URLs may expire before implementation -> Mitigation: download and commit exact bytes during implementation, then validate rendered representatives locally.
- [Risk] Dense code-editor typography can reduce readability for resume text -> Mitigation: use semantic headings/content and maintain readable minimum sizes in the document adaptation.

## Migration Plan

Replace the default root page and starter global styling in one deployable change. Keep the existing route contract (`/`) and dependency baseline. Rollback consists of restoring the prior starter page and styles; no data migration or external service change is required.

## Open Questions

- The user's final identity and resume details must be supplied or selected before production publishing; the implementation can proceed against the typed placeholder contract without changing the architecture or visual specifications.