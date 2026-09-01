## Why

The explorer and search panels currently reuse the same TypeScript icon for every entry, which makes non-TypeScript files and non-folder items look misleading. This is especially noticeable in a resume workspace where file types vary across source, data, and documentation assets, and the flat file list also shows navigation arrows that imply a folder hierarchy that does not exist.

## What Changes

- Update explorer file entries to render icons that match their extension instead of a single TypeScript asset.
- Update search result entries to use the same file-type-aware icon logic.
- Remove arrow indicators from flat file rows where no nested folder structure is actually being represented.
- Preserve a sensible fallback icon for unknown or unsupported file types.

## Capabilities

### New Capabilities
- `file-extension-icons`: Introduces a consistent file-type icon mapping for explorer and search entries, and ensures flat file lists do not imply folder nesting.

### Modified Capabilities
- None.

## Impact

- UI behavior in the resume explorer and search panel in `app/page.tsx`.
- Visual consistency across source, config, image, and documentation files in the workspace.
- No API or data-model changes; this is a presentation-layer fix only.
