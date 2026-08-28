## Why

The mobile layout currently replaces the desktop sidebar with bottom section navigation, which makes the Explorer, Search, and Source Control workflows unavailable on small screens. Mobile users need the same project context and activity tools as desktop, presented in a compact drawer that does not permanently consume the resume's limited horizontal space.

## What Changes

- Replace the mobile bottom section navigation with the existing VS Code activity bar as the mobile entry point for tools.
- Make each activity-bar tab open a mobile drawer, including Explorer, Search, Source Control, Run, Extensions, and the custom editor tab.
- Render the relevant sidebar content inside the selected drawer and keep only one drawer open at a time.
- Allow drawers to be dismissed by selecting the active tab again, using a close affordance, pressing Escape, or tapping outside the drawer.
- Keep the desktop layout and sidebar behavior unchanged; all drawer behavior applies only at the mobile breakpoint.
- Preserve active resume-section selection when navigating from Explorer or Search within a drawer.

## Capabilities

### New Capabilities

- `mobile-activity-drawers`: Mobile activity-bar tabs and mutually exclusive drawers for resume tools.

### Modified Capabilities

<!-- No existing capabilities are currently defined under openspec/specs/. -->

## Impact

The primary affected surfaces are `app/page.tsx` and `app/globals.css`. The implementation will reuse existing activity-panel state, sidebar content, theme tokens, resume section selection, and local assets. No API, resume-data, or dependency changes are expected. The completed responsive shell behavior must be updated only at the mobile breakpoint; desktop navigation and panels remain unchanged.
