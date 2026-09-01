## Why

The explorer and search list are still showing the wrong file icons for source files. TypeScript files are being treated like generic files instead of using the blue TS icon, while other file types are not consistently using the bracket-style icon pattern the design expects.

## What Changes

- Correct the file icon mapping so `.ts` and `.tsx` files use the TypeScript icon.
- Ensure other code-like files use the bracket `{}` icon instead of the TypeScript icon.
- Keep the residual mapping rules consistent across the explorer, search results, and tab states.

## Capabilities

### New Capabilities
- `file-icon-mapping`: Establishes the expected icon behavior for file types in the VS Code-inspired resume UI and ensures extension-based mapping remains visually consistent.

### Modified Capabilities
- None.

## Impact

- Primary implementation area: `app/page.tsx` and related UI rendering logic for explorer/search/tab file rows.
- Visual correctness in the editor shell and file-tracking interfaces.
- No API or data-model changes; this is a presentation mapping fix.
