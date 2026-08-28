## Why

The activity-bar icons currently look interactive but do nothing, and the sidebar remains fixed to the Explorer view. Making the primary sidebar controls functional will give the VS Code resume shell a coherent interaction model and let visitors move between Explorer, Search, and Source Control views.

## What Changes

- Make the Explorer, Search, and Source Control activity-bar buttons selectable.
- Show the corresponding panel in the primary sidebar when a button is pressed.
- Keep the existing resume file tree and document navigation in Explorer.
- Add a Search panel that can search resume section names and content and expose matching results.
- Add a Source Control panel that presents the resume repository state and the GitHub destination without pretending to perform real repository operations.
- Provide a selected visual state and accessible selected/pressed state for the active activity-bar button.
- Allow keyboard users to cycle through the supported activity panels in Explorer -> Search -> Source Control order, wrapping back to Explorer.
- Preserve the existing Figma activity-bar dimensions, exported icons, responsive behavior, and resume tab interactions.
- Leave secondary activity icons as visually present but inactive unless a future change defines their behavior.

## Capabilities

### New Capabilities

- `activity-bar-panel-switching`: Functional primary activity-bar navigation between Explorer, Search, and Source Control panels.

### Modified Capabilities

- None.

## Impact

- UI state and rendering: `app/page.tsx` activity bar, primary sidebar, and panel components.
- Styling: `app/globals.css` selected activity states, panel controls, search results, and responsive panel layout.
- Data: existing typed resume data supplies searchable content and the GitHub/source-control identity.
- Runtime behavior: the primary sidebar becomes panel-dependent; no backend search or Git operations are introduced.
- Dependencies and APIs: none.
- Validation: add browser checks for mouse selection, keyboard cycling, selected state, panel content, and mobile behavior.