## Context

The current implementation in `app/page.tsx` mixes global layout, activity panels, tab management, document rendering, and terminal behavior in one file. This makes the structure difficult to reason about and introduces unnecessary coupling between independent UI sections.

## Goals / Non-Goals

**Goals:**
- Separate the page into logical component modules under a new `components/` directory.
- Preserve the current UI behavior and styling while improving organization.
- Keep the refactor scoped to structure and modularity rather than redesign.

**Non-Goals:**
- Rewriting the visual design.
- Changing resume data or business logic.
- Changing runtime behavior beyond what is required by the refactor.

## Decisions

### Extract by feature responsibility
The refactor will separate the shell and major UI regions into discrete components such as the top bar, activity bar, explorer, search panel, tabs, document view, terminal, and status bar.

**Rationale:** These sections already have clear boundaries and responsibilities, so splitting by feature reduces cognitive load without changing behavior.

**Alternatives considered:**
- Splitting by file type or shared utility only: rejected because it does not reflect the UI’s actual responsibility boundaries.
- Rewriting the page with a new framework structure: rejected as unnecessary for a focused refactor.

### Keep shared data and helper logic in the page or a small support module
The refactor will move presentational components into separate files while preserving shared constants, types, and helper functions needed by those components.

**Rationale:** This keeps the refactor minimal and avoids unnecessary API churn.

**Alternatives considered:**
- Creating a deep utility hierarchy for every tiny helper: rejected as over-engineering for a single-page app.

## Risks / Trade-offs

- [Risk] Moving code across files can break import paths or shared state wiring → Mitigation: centralize shared types and helper exports and validate the build after the refactor.
- [Risk] Component boundaries may be too coarse → Mitigation: keep grouping aligned with existing sections and functions rather than inventing a new architecture.

## Migration Plan

This change is a structural refactor only. The implementation should preserve the same component tree and behavior while moving blocks of code into `app/components/`. After the split, the next validation step is a project build and a quick smoke check of the UI state transitions.

## Open Questions

None. The refactor intent is clear and bounded by the existing implementation behavior.
