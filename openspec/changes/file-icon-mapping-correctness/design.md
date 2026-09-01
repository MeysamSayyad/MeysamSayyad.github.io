## Context

The current icon logic resolves file types based on a broad generic rule and does not distinguish TypeScript files from other code-like entries with enough precision. This is most visible in explorer rows, search hits, and tab labels where the same icon is used too broadly.

## Goals / Non-Goals

**Goals:**
- Correct the icon mapping so TypeScript files consistently receive the blue TS icon.
- Use bracket icons for non-TypeScript file categories that are not markdown or other special cases.
- Keep the mapping centralized so all file surfaces share one source of truth.

**Non-Goals:**
- Redesigning the UI or changing file labels.
- Changing folder or section-level semantics beyond icon mapping.

## Decisions

### Centralize file-type resolution in one mapping helper
The fix will keep a single helper that maps file names or section keys to their expected icon type.

**Rationale:** A single mapping rule prevents drift between explorer rows, search results, and tabs.

**Alternatives considered:**
- Per-component ad hoc icon checks: rejected because it would make the bug reappear in different surfaces.

### Separate TypeScript from bracket-style code icons
The TypeScript condition will be narrowed to `.ts` and `.tsx` files, while other files use the bracket icon and markdown remains visually distinct.

**Rationale:** This matches the requested behavior and preserves the rest of the visual system without introducing a broader redesign.

**Alternatives considered:**
- Treating all code-like files as TypeScript: rejected because it fails the requested distinction.

## Risks / Trade-offs

- [Risk] Over-broad file matching could still classify a file incorrectly → Mitigation: use explicit extension checks and keep the helper narrow and centralized.
- [Risk] Different UI surfaces may each apply their own fallback → Mitigation: re-use the same mapping helper in all relevant row and tab renderers.

## Migration Plan

This is a visual mapping fix only. After the logic is corrected, the effective migration is to validate the explorer, search, and tabs against the updated icon resolution, with no data changes or runtime behavior changes beyond the icons themselves.

## Open Questions

None. The icon mapping requirement is specific and can be implemented directly without further clarification.
