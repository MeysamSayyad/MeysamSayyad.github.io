## Why

The main page component has grown into a large, monolithic file that mixes layout, data shaping, panels, tabs, terminal logic, and theme behavior. This makes the code harder to navigate, harder to reuse, and riskier to extend as the resume UI evolves.

## What Changes

- Split the monolithic page component into smaller, focused component files under a new `components/` directory.
- Preserve the existing behavior and rendered UI while reorganizing the code into logical responsibilities.
- Keep shared data helpers and UI primitives isolated so the page remains easier to maintain.

## Capabilities

### New Capabilities
- `page-component-structure`: Introduces a component-oriented structure for the resume shell, panels, and editor UI without changing the user-visible experience.

### Modified Capabilities
- None.

## Impact

- Primary implementation area: `app/page.tsx` and the new `app/components/` directory.
- Maintainability and code organization of the VS Code-inspired resume UI.
- No backend, API, or data-model changes; this is a refactor-focused change.
