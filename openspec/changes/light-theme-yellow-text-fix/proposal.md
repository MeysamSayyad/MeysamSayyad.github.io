## Why

The light theme uses a yellow text color that does not provide enough contrast or readability against a light background, making some interface text difficult to read. This issue affects visual clarity in the resume UI and makes the app feel less polished in the light theme.

## What Changes

- Adjust theme token values so yellow text used in the light theme is readable and visually consistent.
- Preserve the intended accent styling while improving contrast and legibility.
- Keep the fix scoped to theme styling without changing the layout or resume content.

## Capabilities

### New Capabilities
- `light-theme-accessibility`: Defines the visual styling rules needed to maintain readable text colors in the light theme.

### Modified Capabilities
- None.

## Impact

- Theme styling in the resume UI.
- Visual accessibility in the light theme.
- User experience consistency across theme variants.
