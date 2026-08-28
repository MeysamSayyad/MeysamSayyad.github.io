## Context

The existing root route renders a `.page-stage` centered layout around a `.vscode-window`. The stage adds responsive padding and the window caps at 1296 px wide, caps its height below the viewport, keeps rounded corners, and casts an outer shadow. The internal shell already owns responsive collapse behavior for the explorer, activity bar, tabs, editor, and status bar.

## Goals / Non-Goals

**Goals:**

- Make the root stage and shell edge-to-edge at every supported viewport.
- Set the document and shell to a viewport-height contract so the browser does not gain page-level scrolling.
- Preserve the existing internal shell geometry and mobile collapse rules.

**Non-Goals:**

- Add a user-facing fullscreen toggle or browser Fullscreen API integration.
- Change resume content, navigation semantics, icon assets, typography, or internal panel dimensions.
- Remove intentional scrolling inside the editor document when its content exceeds the available editor area.

## Decisions

### Use CSS viewport constraints instead of the Fullscreen API

Change the existing stage/window sizing rules to use `100vw` and `100dvh`, with `overflow: hidden` at the document and shell boundary. This makes fullscreen the default presentation and works on browsers without permission or gesture requirements.

Alternative considered: a Fullscreen API button. Rejected because the request describes the page presentation, not an opt-in browser mode, and the API requires user interaction and has browser-specific exit behavior.

### Remove only outer framing

Remove stage padding, window max-width/height caps, corner radius, border, and shadow while preserving the top bar, activity rail, explorer, tabs, editor, and status bar styles. This isolates the visual change to the outer frame and avoids disturbing Figma-derived internal geometry.

Alternative considered: scale the entire existing window to fit. Rejected because scaling would make text and controls less readable and would alter the measured internal dimensions.

### Keep editor scrolling internal

Retain `overflow: auto` on the editor document while preventing the body and shell wrapper from scrolling. This allows long resume sections to remain reachable without violating the no-page-overflow requirement.

## Risks / Trade-offs

- [Risk] Mobile browser dynamic toolbars change the visual viewport -> Mitigation: prefer `100dvh` with a fallback and validate on a narrow viewport; keep internal editor scrolling available.
- [Risk] Removing outer framing reduces separation from the browser background -> Mitigation: retain the shell's borders, surfaces, and region hierarchy internally.
- [Risk] Fixed internal chrome can compress the editor on short screens -> Mitigation: preserve the current flex/min-height rules and test short desktop and mobile heights.

## Migration Plan

Update only the global stage/window sizing rules and any root document height constraints. Deploy as a backward-compatible visual change; rollback consists of restoring the previous centered stage declarations.