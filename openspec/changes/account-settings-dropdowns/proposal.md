## Why

The bottom-left Account and Settings icons currently provide no interaction, leaving important identity and personalization details hidden or unavailable. Functional dropdowns will let visitors quickly identify the resume owner, open the owner's GitHub profile, and choose how the VS Code-style resume should look.

## What Changes

- Make the Account icon open a dismissible dropdown containing the resume owner's name and GitHub link.
- Make the Settings gear open a dismissible theme menu.
- Provide a Figma-compatible dark theme as the default and add light and high-contrast theme options.
- Apply the selected theme to the shell surfaces, text, borders, editor syntax colors, panels, and controls.
- Persist the selected theme for later visits when browser storage is available, while retaining the default theme when storage is unavailable.
- Add selected state, focus styling, keyboard navigation, Escape dismissal, and outside-click dismissal for both dropdowns.
- Preserve the existing activity-bar dimensions, resume navigation, GitHub destination, and responsive layout.
- Do not change the separate Explorer, Search, or Source Control activity-panel behavior.

## Capabilities

### New Capabilities

- `account-settings-dropdowns`: Account identity/GitHub access and theme selection from the bottom activity-bar controls.

### Modified Capabilities

- None.

## Impact

- UI state and interactions: the bottom activity-bar controls and dropdown content in `app/page.tsx`.
- Styling: theme tokens, dropdown placement, menu states, and contrast rules in `app/globals.css`.
- Data: existing typed resume identity and GitHub link are reused; theme names and token mappings are new UI configuration.
- Browser behavior: selected theme may be stored locally; no server or external API is required.
- Validation: browser checks for open/close behavior, owner/GitHub content, theme switching, persistence, keyboard access, and responsive overflow.