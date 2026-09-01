## Why

The resume UI currently assigns icons by a broad fallback pattern instead of the actual file extension for each section. This causes visible mistakes such as the README section showing the TypeScript icon and the experience section showing the search icon even though its extension is `.ts` and `.md` respectively. The result is a confusing explorer and tab experience that does not match the actual file types shown in the resume shell.

## What Changes

- Correct the file-to-icon mapping so each resume section resolves to the icon implied by its extension.
- Ensure TypeScript sections use the TypeScript icon, markdown sections use the markdown/file icon, and JSON sections use the bracket/code-style icon.
- Keep the mapping centralized to avoid drift across explorer rows, search results, and tab labels.
- Preserve the current resume content and layout while only fixing the visual icon mapping.

## Capabilities

### New Capabilities
- `resume-file-icons`: Defines the correct icon selection behavior for each resume section based on its extension.

### Modified Capabilities
- None.

## Impact

- UI rendering in the resume explorer, search panel, and tab strip.
- Shared file icon logic in the app's component layer.
- User-facing clarity and consistency in the VS Code-inspired interface.
