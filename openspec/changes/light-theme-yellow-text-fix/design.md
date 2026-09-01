## Context

The resume app supports multiple theme variants, and the light theme currently uses a yellow text treatment that is visually weak against a light background. The issue is cosmetic but visible enough to affect readability and overall polish.

## Goals / Non-Goals

**Goals:**
- Improve readability for yellow-highlighted text in the light theme.
- Maintain the visual identity of the accent color without sacrificing contrast.
- Keep the fix scoped to styling.

**Non-Goals:**
- Redesigning the entire theme system.
- Changing layout or data behavior.
- Modifying dark and high-contrast themes unless required by the same fix.

## Decisions

### Adjust the light theme tokens instead of the logic
The fix will modify the theme color values rather than changing component logic or rendering behavior.

**Rationale:** The problem is a contrast problem, not a behavioral one.

**Alternatives considered:**
- Replacing the text color with a completely different accent: rejected because it changes the visual identity too much.
- Changing all themes together: rejected because the dark theme is already readable and the issue is specific to the light mode.

### Keep the fix local to the theme palette
The change will be limited to the color tokens used by the light theme.

**Rationale:** This keeps the patch minimal and reduces the risk of unintended side effects in the rest of the UI.

**Alternatives considered:**
- Broad global styling changes: rejected because they would widen scope beyond the specific theme issue.

## Risks / Trade-offs

- [Risk] A color adjustment may still look too muted if not calibrated → Mitigation: prefer a darker yellow or contrast-aware neutral accent instead of a purely cosmetic tweak.
- [Risk] Theme tokens may be reused elsewhere → Mitigation: scope the change to the light theme palette and validate only that theme.

## Migration Plan

No migration is required. This is a visual-only theme fix that can be validated by switching to the light theme and checking the readability of accent text.

## Open Questions

None. The issue is well defined and the fix can be implemented directly in the theme tokens.
