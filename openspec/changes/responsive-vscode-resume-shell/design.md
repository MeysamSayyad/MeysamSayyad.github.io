## Context

The existing resume is a client-rendered Next.js page with shell geometry and responsive styling centralized in `app/page.tsx` and `app/globals.css`. The current desktop composition includes an activity bar, sidebar/Explorer region, editor content, tabs, and status bar. See `proposal.md` for motivation and `specs/responsive-vscode-shell/spec.md` for the observable contract.

## Goals / Non-Goals

**Goals:**

- Make the outer page stage and VS Code shell use more of the viewport while retaining readable desktop proportions.
- Add a CSS breakpoint and a small-screen navigation presentation that reuses the existing resume section model and selection state.
- Remove the desktop sidebar and Explorer presentation from the small-screen layout without losing access to the same resume sections.
- Keep the implementation local to the existing page and stylesheet, with no new runtime dependency or data-model change.
- Preserve theme support, active-section behavior, and the existing desktop experience.

**Non-Goals:**

- Redesigning the resume content, section taxonomy, or desktop activity-panel behavior.
- Adding routing, URL state, backend services, or persistent navigation state.
- Changing the separate fullscreen proposal unless its implementation is explicitly coordinated later.

## Decisions

- **Use the existing section state for both navigation presentations.** The mobile control will invoke the same section-selection path already used by desktop navigation. This avoids duplicate state and keeps section behavior consistent. A separate mobile navigation state was considered but would allow the two presentations to diverge.
- **Use a responsive CSS breakpoint rather than JavaScript viewport branching.** CSS will control visibility and geometry, while React continues to own only interaction state. This avoids resize listeners, hydration differences, and duplicated render logic. A JavaScript media-query branch was considered but adds lifecycle complexity without improving the required behavior.
- **Keep mobile navigation in the page shell's bottom region.** The control will occupy a stable bottom row and the content area will reserve space for it, preventing overlap with resume content. An overlay-only control was considered but risks obscuring content and creating unreliable touch interactions.
- **Reuse existing visual tokens and icon treatment.** The mobile control will follow the current theme variables, selected-state styling, and accessible labels rather than introducing a separate mobile visual language.
- **Treat the small-screen threshold as a CSS-owned design constant.** The breakpoint should match the existing responsive rules and be documented in the implementation task, so desktop and mobile layouts switch predictably at one boundary.

## Risks / Trade-offs

- **[Risk]** Hiding the sidebar removes some visible context on mobile. **Mitigation:** retain clear labels and selected-state styling in the bottom navigation, and keep the full desktop navigation unchanged above the breakpoint.
- **[Risk]** Long section labels may not fit in a narrow bottom row. **Mitigation:** use a compact set of primary sections, stable equal-width items, and responsive label sizing/wrapping that preserves readable touch targets.
- **[Risk]** Increased shell width can expose overflow from fixed internal regions. **Mitigation:** validate at desktop, tablet, and narrow phone widths and ensure the content region can shrink without forcing page-level horizontal scrolling.

## Migration Plan

1. Update the existing shell layout and stylesheet behind the responsive capability.
2. Validate desktop geometry and small-screen interaction/overflow behavior in the running app.
3. Roll back by reverting the page and stylesheet changes if the responsive layout causes regressions; resume data and public assets require no migration.

## Open Questions

None. The exact breakpoint and spacing values can be selected during implementation as long as they satisfy the specification and align with the existing responsive rules.
