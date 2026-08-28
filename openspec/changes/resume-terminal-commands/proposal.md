## Why

The resume currently presents its sections through editor tabs and navigation panels, but it has no terminal-style interaction for visitors who expect a VS Code portfolio to behave like a project workspace. An in-app npm-like command surface would make each resume section quickly discoverable while giving users a single help command that explains the available views.

## What Changes

- Add an in-app VS Code-style terminal panel to the resume interface.
- Support npm-like commands that display the corresponding resume sections, such as `npm run resume`, `npm run experience`, `npm run projects`, `npm run skills`, `npm run education`, and `npm run contact`.
- Add `npm run help` and a direct `help` alias that list all supported commands and their descriptions.
- Provide terminal input, command history/output, and clear feedback for unknown or malformed commands.
- Selecting a section through a terminal command SHALL update the same active resume section shown by the existing editor navigation.
- Keep the terminal client-side and constrained to the documented command set; it SHALL not execute arbitrary host shell commands or change desktop/mobile drawer behavior.

## Capabilities

### New Capabilities

- `resume-terminal-commands`: An in-app terminal with safe npm-like commands for viewing resume sections and discovering available commands.

### Modified Capabilities

<!-- No existing capabilities are currently defined under openspec/specs/. -->

## Impact

The primary affected surfaces are `app/page.tsx` and `app/globals.css`, with possible typed command metadata colocated with the existing resume data or page components. No server, API, dependency, or host-shell integration is expected. The implementation must preserve the existing activity drawers, editor tabs, themes, responsive layouts, and resume content while synchronizing terminal-selected sections with the existing active-section state.
