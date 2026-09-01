## Context

The current resume interface builds explorer and search rows with a single TypeScript icon in `app/page.tsx`, regardless of the item represented. The file list is also visually styled as if it may contain nested directory navigation even though the workspace is intentionally presented as a flat set of sections and files.

## Goals / Non-Goals

**Goals:**
- Use file-extension-aware icons for explorer rows and search results.
- Keep the icon mapping consistent across both UI surfaces.
- Remove misleading arrow affordances from flat item lists.

**Non-Goals:**
- Adding a real folder hierarchy or drag-and-drop navigation.
- Changing resume content or data structures.
- Introducing a new icon library or external dependency.

## Decisions

### Centralize file icon resolution
A small helper will map a file name or extension to the correct asset name. This keeps the logic in one place so both Explorer and SearchPanel render the same result and can share the same fallback behavior.

**Rationale:** The UI currently repeats the same TypeScript icon in multiple components, so a single mapping reduces drift and makes unknown types easier to handle.

**Alternatives considered:**
- Inline conditional checks in each component: rejected because it duplicates logic and increases the risk of inconsistent icons.
- Hard-coding `typescript.svg` for all entries: rejected because it violates the requirement and makes non-TypeScript files confusing.

### Treat the workspace as a flat list
The file rows in the existing panel are not nested folders and should not show folder-style indicators. This design treats the explorer and search results as file entries with optional expansion states only if a future requirement introduces actual folders.

**Rationale:** The current layout already presents a surface-level list and not a directory tree, so the arrows add false hierarchy without providing utility.

**Alternatives considered:**
- Leaving the current arrow markup in place: rejected because it implies a structure the app does not actually support.
- Building a nested folder model: rejected as out of scope for this change.

## Risks / Trade-offs

- [Risk] Some file extensions may not have an exact visual match in the existing asset set → Mitigation: use a generic file icon as a fallback and map the most common document and code extensions first.
- [Risk] Search and explorer could drift if they each implement their own mapping → Mitigation: reuse a single shared resolver.

## Migration Plan

No data migration is needed; this is a UI-only change. The rollout is a simple visual update in the existing page component and can be validated by comparing each row against the matching asset set.

## Open Questions

None at this stage; the behavior is fully specified by the proposal and specs.
