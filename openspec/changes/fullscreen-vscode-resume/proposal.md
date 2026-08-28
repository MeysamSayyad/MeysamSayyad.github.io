## Why

The current resume shell is centered inside a padded presentation stage, which leaves unused space around the Figma-inspired VS Code workspace. A fullscreen mode will make the editor composition the primary experience and use the available viewport more effectively.

## What Changes

- Make the VS Code resume shell occupy the full viewport width and height.
- Remove the outer stage padding, rounded outer frame treatment, and drop shadow when fullscreen is active.
- Preserve the existing internal shell regions, resume navigation, content, assets, and responsive collapse behavior.
- Ensure the fullscreen shell remains bounded to the viewport without document-level horizontal or vertical overflow.
- Keep the mobile layout edge-to-edge and preserve accessible navigation and focus behavior.
- Do not change resume data, section labels, or the Figma-derived internal dimensions.

## Capabilities

### New Capabilities

- `fullscreen-vscode-resume`: Full-viewport presentation of the existing VS Code-style resume shell.

### Modified Capabilities

- None.

## Impact

- Styling: the root page stage and VS Code window sizing rules in `app/globals.css`.
- Layout: the root document may need viewport-height constraints to prevent body overflow.
- Runtime behavior: the root route becomes edge-to-edge on desktop, tablet, and mobile.
- Dependencies and APIs: none.
- Validation: add viewport checks for full width, full height, and absence of document overflow at representative desktop and mobile sizes.