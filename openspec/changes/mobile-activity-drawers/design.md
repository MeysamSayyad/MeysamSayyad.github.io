## Context

The resume shell is a client-rendered Next.js page. `app/page.tsx` currently owns activity-panel selection, menu state, and resume-section selection, while `app/globals.css` controls the mobile breakpoint that hides the desktop sidebar. The completed responsive change introduced mobile bottom navigation, which this change replaces with mobile activity drawers. See `proposal.md` for motivation and `specs/mobile-activity-drawers/spec.md` for the behavior contract.

## Goals / Non-Goals

**Goals:**

- Reuse the existing activity-bar tab model and panel content for a mobile drawer presentation.
- Make all current activity tabs actionable on mobile, including tools without specialized content.
- Keep drawer state mutually exclusive, dismissible, and accessible.
- Preserve Explorer/Search section selection and all desktop behavior.
- Keep the implementation local to the existing page and stylesheet with no new dependency or data-model change.

**Non-Goals:**

- Changing desktop activity-panel switching, account/settings menus, resume content, or routing.
- Adding real Run, Extensions, or custom-editor functionality beyond an identifiable mobile tool state.
- Persisting the open drawer between visits or in the URL.
- Reworking the prior shell sizing behavior outside the mobile drawer requirements.

## Decisions

- **Use one mobile drawer state keyed by activity tab.** A nullable activity-tab value will represent the open drawer, so selecting a tab toggles it and selecting another replaces it. Separate booleans were considered but would permit contradictory open states.
- **Render the drawer as a mobile-only sibling of the editor shell.** The drawer will be positioned within the shell with a scrim and reserved mobile layout behavior, while CSS hides it above the breakpoint. A second desktop sidebar implementation was considered but would duplicate existing panel rendering and risk desktop regressions.
- **Reuse existing panel components where content exists.** Explorer, Search, and Source Control will share their established content and section-selection handlers. Run, Extensions, and custom editor will receive labeled placeholder states so every visible tab has a coherent destination without inventing unrelated functionality.
- **Use a scrim, close control, Escape, and outside press for dismissal.** These paths cover pointer, keyboard, and touch workflows. The opener remains the focus return target after close to avoid leaving keyboard users disoriented.
- **Keep the mobile activity bar visible as the navigation anchor.** Replacing it with a new bottom control was considered, but the activity bar is the existing visual and interaction model and directly maps to each drawer.
- **Let CSS own the mobile-only boundary.** React renders the drawer structure consistently and CSS switches it on only at the existing small-screen breakpoint, avoiding viewport listeners and hydration differences.

## Risks / Trade-offs

- **[Risk]** A drawer can obscure editor content on a small screen. **Mitigation:** use a bounded drawer width, a scrim, and a visible close control; preserve the editor behind it without allowing page-level horizontal overflow.
- **[Risk]** Six activity tabs may create dense mobile controls. **Mitigation:** use stable touch-friendly button dimensions, meaningful labels/tooltips, and the existing icon assets.
- **[Risk]** Placeholder tool states could imply functionality that does not exist. **Mitigation:** label them clearly as the selected tool's current state and keep their scope limited to an identifiable panel, not fake controls.
- **[Risk]** Focus management can become inconsistent across dismissal paths. **Mitigation:** retain a ref to the opening tab, move focus to the drawer close control when opened, and return focus on close where the browser permits.

## Migration Plan

1. Add the mobile drawer state and rendering around the existing activity-bar and sidebar components.
2. Remove or hide the prior mobile bottom navigation presentation while retaining desktop layout behavior.
3. Validate pointer, keyboard, Escape, scrim, and panel-selection flows at narrow mobile widths, then run the existing TypeScript, lint, and build checks.
4. Roll back by reverting the page and stylesheet changes; no data or dependency migration is required.

## Open Questions

None. The drawer width and exact small-screen spacing can be chosen during implementation as long as the specified accessibility, fit, and dismissal behavior is preserved.
