## Why

The workspace file listings currently assign the wrong visual meaning to files based on extension. TypeScript files are not always using the TypeScript icon, Markdown files are showing the TypeScript symbol, and JSON files are not using the code/brackets indicator that better fits their role. This makes the explorer and search results harder to scan and reduces the accuracy of the VS Code-inspired interface.

## What Changes

- Correct the icon mapping so TypeScript files consistently show the TypeScript icon.
- Correct the icon mapping so JSON files consistently show the bracket/code-style icon.
- Correct the icon mapping so Markdown files use a distinct non-TypeScript document icon.
- Keep the same behavior consistent across both the explorer and the search results.

## Capabilities

### New Capabilities
- `file-icon-mapping`: Defines the rules for mapping file extensions to the correct resource icon in the explorer and search panels.

### Modified Capabilities
- None.

## Impact

- File list visuals in the resume workspace UI, specifically the explorer and search panels in `app/page.tsx`.
- Accessibility and scanability of project files for users reviewing the workspace.
- No API or data model changes; this is a presentation-layer correction only.
