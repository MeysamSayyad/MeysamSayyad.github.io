## Why

The resume shell currently gives too much space to its outer frame and desktop-oriented sidebar, which reduces the usable area for the resume and makes the experience cramped on phones. This change improves viewport usage and provides a mobile navigation model that keeps the VS Code visual identity without forcing desktop panels into a narrow screen.

## What Changes

- Reduce the outer padding around the VS Code resume shell and allow it to occupy more of the viewport.
- Preserve the internal editor, activity bar, tab, sidebar, and status-bar relationships while adapting the outer shell responsively.
- At the small-screen breakpoint, replace the desktop sidebar and Explorer panel with a bottom navigation control for the primary resume sections.
- Keep mobile navigation accessible and visually consistent with the existing VS Code-inspired theme and selected-section state.
- Prevent horizontal overflow and maintain usable touch targets across supported small-screen widths.

## Capabilities

### New Capabilities

- `responsive-vscode-shell`: Responsive viewport sizing and small-screen bottom navigation for the resume shell.

### Modified Capabilities

<!-- No existing capabilities are currently defined under openspec/specs/. -->

## Impact

The primary affected surfaces are `app/page.tsx` and `app/globals.css`, with responsive layout and navigation behavior contained in the existing client-rendered shell. No API, data model, or dependency changes are expected. Validation should cover desktop geometry, small-screen overflow, navigation selection, and touch-friendly control sizing.
