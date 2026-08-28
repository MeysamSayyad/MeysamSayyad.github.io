## Why

The repository is currently the untouched Next.js starter, while the supplied Figma primary frame defines a distinctive VS Code editor experience that should become a usable resume website. This change will turn that visual shell into a navigable, accessible resume presentation without losing the frame's geometry, visual hierarchy, or code-editor character.

## What Changes

- Replace the starter landing screen with a single-page resume presented inside the Figma-defined VS Code window composition.
- Reproduce the primary frame's top bar, activity bar, explorer sidebar, tab manager, editor surface, and status bar using the measured Figma layout and exported assets.
- Render resume sections as editor-like documents and navigation states, with a clear default resume view and usable tab/sidebar interactions.
- Keep resume identity, summary, experience, projects, skills, education, contact links, and metadata in typed data modules separate from presentation components.
- Add responsive desktop, tablet, and mobile behavior that preserves the VS Code shell's hierarchy and keeps resume content readable.
- Add keyboard-accessible controls, semantic landmarks, focus states, reduced-motion behavior, and accessible labels for icon-only controls.
- Add page metadata and structured content suitable for search engines and link previews.
- Add validation coverage for the major interaction states and run TypeScript, ESLint, and production-build checks.
- Do not add backend services, authentication, CMS editing, or resume submission forms in this change.

## Capabilities

### New Capabilities

- `vscode-resume-website`: A responsive, accessible resume website rendered through the Figma VS Code interface, including typed resume data, editor navigation, asset fidelity, and discoverability requirements.

### Modified Capabilities

- None.

## Impact

- Application surface: `app/page.tsx`, `app/globals.css`, `app/layout.tsx`, and new typed resume/component modules under the existing app structure.
- Static assets: new local copies of the Figma-exported icons and any required imagery under `public/`; remote expiring Figma URLs must not be used as the committed asset source.
- Dependencies: prefer the existing Next.js, React, TypeScript, and Tailwind setup; add a dependency only when required by the implementation and justified in design review.
- Runtime behavior: the root route becomes an interactive resume rather than the default Next.js starter page.
- Validation: visual comparison against Figma at the primary desktop frame size plus responsive viewport checks, alongside repository lint/build/type validation.