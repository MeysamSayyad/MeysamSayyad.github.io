## Context

The resume is a client-rendered Next.js page whose `Home` component owns the active resume section. Existing editor tabs, desktop panels, and mobile activity drawers already use that section state. The new terminal is an in-app interaction surface and must not become a host command runner. See `proposal.md` for motivation and `specs/resume-terminal-commands/spec.md` for the behavior contract.

## Goals / Non-Goals

**Goals:**

- Add a terminal surface that can be opened through the existing VS Code-inspired interface and remains usable at desktop and mobile widths.
- Parse a small, explicit command grammar for section navigation and help.
- Reuse the existing section labels/order and active-section setter so terminal navigation cannot diverge from editor navigation.
- Preserve chronological output and keyboard command history within the current page session.
- Keep command execution entirely client-side and non-arbitrary.

**Non-Goals:**

- Executing npm, Node.js, PowerShell, or any host operating-system command.
- Adding a backend terminal, shell session, filesystem access, package installation, or command persistence across page loads.
- Changing existing activity drawers, account/settings menus, themes, resume data, or routing.
- Supporting arbitrary npm flags, pipelines, aliases beyond the documented `help` alias, or command arguments.

## Decisions

- **Use a typed command registry as the source of truth.** Each supported section command and its description will be declared once and used by the parser and help output. Duplicated conditionals were considered but would make the help list and executable commands drift.
- **Parse normalized strings against an allowlist.** The parser will trim and collapse whitespace, then match exact forms for `help` and `npm run <section>`. A free-form evaluator or shell-like parser was considered but would create unnecessary security and behavior surface.
- **Keep terminal history local to the component/page session.** A state array will store command/output entries, and an input history index will manage ArrowUp/ArrowDown. Local storage was considered but would make old output stale and is not needed for a resume visitor.
- **Use the existing active-section callback.** Section commands will call the same selection path used by tabs and drawers. A URL or separate terminal section state was considered but could show conflicting active documents.
- **Expose the terminal as a toggled shell panel with a stable input.** The interface should fit the VS Code metaphor while reserving space for output rather than covering resume content unexpectedly. A full-screen terminal mode is out of scope.
- **Provide accessible terminal semantics.** Use a labeled region, a real text input, a live output area, and keyboard-operable toggle/focus behavior. A contenteditable terminal was considered but adds cursor and accessibility complexity without benefit.

## Risks / Trade-offs

- **[Risk]** Visitors may assume commands execute real npm scripts. **Mitigation:** keep output explicitly in-app and reject unsupported shell syntax; help text will describe commands as resume views.
- **[Risk]** Long command history can consume page space. **Mitigation:** make terminal output scrollable with a bounded panel height while preserving the latest prompt and active editor.
- **[Risk]** Arrow-key history can interfere with scrolling or accessibility. **Mitigation:** only intercept ArrowUp/ArrowDown while the terminal input is focused and maintain an explicit history index.
- **[Risk]** The terminal adds vertical pressure on mobile. **Mitigation:** use a compact responsive panel and validate at narrow phone widths without horizontal overflow or obscured editor content.

## Migration Plan

1. Add typed command metadata, parser/output state, and terminal rendering to the existing page shell.
2. Connect supported section commands to the existing active-section state and add responsive/theme-consistent styles.
3. Validate command success, help, errors, history, keyboard navigation, safety rejection, and desktop/mobile rendering.
4. Roll back by reverting the page and stylesheet changes; no data, API, or dependency migration is required.

## Open Questions

None. Exact terminal placement and panel height can be selected during implementation as long as the documented command behavior, accessibility, and responsive constraints remain intact.
