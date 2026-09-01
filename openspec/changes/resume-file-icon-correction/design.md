## Context

The UI currently resolves file icons in a shared helper, but the mapping is too broad and does not correctly distinguish TypeScript, markdown, and JSON-backed sections. The issue is visible in the resume explorer, search results, and tabs because the same generic logic is applied without respecting the actual extensions defined for each section.

## Goals / Non-Goals

**Goals:**
- Correct icon resolution based on each section's effective file extension.
- Keep the mapping consistent across explorer, search, and tabs.
- Fix the mismatches without changing the resume content or layout.

**Non-Goals:**
- Reworking the resume data model.
- Changing section names or file labels.
- Introducing new icon assets or dependency changes.

## Decisions

### Centralize the extension-aware mapping
The fix will continue to live in the shared icon helper so all visual surfaces read from the same resolver.

**Rationale:** A single source of truth avoids drift and keeps explorer rows, search results, and tabs in sync.

**Alternatives considered:**
- Inline per-component checks: rejected because it creates mismatches across surfaces.
- Broad TypeScript fallback for all code-like entries: rejected because it causes the observed misclassification.

### Use exact extension groups for each icon family
The rule will explicitly map:
- `.ts` / `.tsx` → TypeScript icon
- `.md` / `.mdx` → markdown/document icon
- `.json` / `.yaml` / `.yml` → bracket/code icon
- other file types → generic fallback only when they are not a known typed file

**Rationale:** This reflects the actual file semantics displayed in the resume shell and matches the user's expected behavior.

**Alternatives considered:**
- Treating all code-like files as the same icon: rejected because it is the root cause of the bug.

## Risks / Trade-offs

- [Risk] Some file categories may share similar visual semantics and be easy to confuse → Mitigation: keep the mapping explicit and extension-driven.
- [Risk] Drift across UI surfaces → Mitigation: keep one shared helper instead of separate implementations.

## Migration Plan

No data migration is required. This is a visual-only correction in the shared mapping helper and can be validated by checking each section's current extension against the icon it renders in the explorer and tab list.

## Open Questions

None. The specification is explicit and the required mapping is known.
