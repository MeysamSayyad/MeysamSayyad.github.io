## Context

The current UI applies one generic TypeScript icon to multiple file groups in `app/page.tsx`. That works for code files but fails to distinguish file types that are visually distinct and should use different indicators.

## Goals / Non-Goals

**Goals:**
- Correct the file-type icon rules for TypeScript, JSON, Markdown, and the fallback case.
- Keep behavior consistent between the explorer and the search panel.
- Preserve a clear visual hierarchy without introducing a new external icon system.

**Non-Goals:**
- Changing the underlying data model or resume content.
- Adding a real folder tree or nested file system behavior.
- Introducing new dependencies or a new icon library.

## Decisions

### Use explicit extension rules instead of a single fallback
The mapping should check the file extension first and assign a matching icon based on the file type rather than defaulting to one broad code icon.

**Rationale:** The incorrect behavior stems from a single generic mapping that does not account for the distinct semantics of TypeScript, JSON, and Markdown assets. Explicit rules make the behavior predictable and testable.

**Alternatives considered:**
- Keeping a single catch-all TypeScript icon: rejected because it fails the spec and creates incorrect visual meaning.
- A fully dynamic resolver based on file content: rejected as unnecessary complexity for a static workspace representation.

### Reuse one mapping helper across both surfaces
The explorer and search result rows should call the same extension resolver so they never drift apart.

**Rationale:** This keeps the fix minimal and avoids duplicated logic in memory, which is especially important in a small UI component set.

**Alternatives considered:**
- Separate mapping logic per panel: rejected because it increases inconsistency risk and future maintenance cost.

## Risks / Trade-offs

- [Risk] Some file extensions may map to visually similar assets in the current sprite set → Mitigation: assign the closest appropriate icon and keep a generic fallback for unsupported types.
- [Risk] Inconsistent future additions could reintroduce the problem → Mitigation: centralize the mapping in one helper so all new file rows reuse it.

## Migration Plan

No data migration or runtime migration is required. This is a UI-only fix that can be rolled out in the same component set and validated by checking the row icons in the explorer and search surfaces.

## Open Questions

None. The desired behavior is concrete and testable from the spec.
