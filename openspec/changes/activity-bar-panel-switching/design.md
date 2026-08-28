## Context

The current `ActivityBar` renders six top buttons and two bottom buttons, but only the Explorer sidebar is rendered. Resume document selection is already managed as client-side state in the root page, and the typed resume data provides the source for section labels and content.

## Goals / Non-Goals

**Goals:**

- Introduce one panel-selection state shared by the activity bar and primary sidebar.
- Make Explorer, Search, and Source Control useful without adding backend services.
- Preserve the Figma activity rail geometry and existing resume editor state.
- Provide explicit keyboard cycling and accessible selected states.

**Non-Goals:**

- Implement a real filesystem search, Git repository integration, source-control mutations, or command palette.
- Activate the remaining activity icons, account icon, or settings icon in this change.
- Replace the existing tab/file navigation model.

## Decisions

### Use a small panel union and one shared state

Represent the supported panels as `explorer`, `search`, and `source-control`, with Explorer as the initial value. Pass the selected panel and selection handler to the activity bar and sidebar renderer so the two regions cannot disagree.

Alternative considered: independent state inside the activity bar and sidebar. Rejected because it can leave the visual selection and displayed panel out of sync.

### Use native controls and a deterministic cycle action

Use buttons with `aria-pressed` or equivalent selected state for activity controls. Support a documented keyboard shortcut such as `Ctrl/Cmd+Shift+E` to advance through the three-panel order, with wraparound, while preserving normal Tab navigation.

Alternative considered: rely only on arrow-key behavior inside a tablist. Rejected because the request explicitly asks for cycling between sidebar buttons and a command-like cycle is easy to test.

### Search the existing typed resume projection

Build a local searchable projection from section labels plus resume strings, filter it case-insensitively, and route result activation through the existing resume-section selection. This makes Search real and deterministic without pretending to query a codebase.

Alternative considered: add a search API or search the rendered DOM. Rejected because there is no backend and the typed data is the stable source of truth.

### Keep Source Control informative but read-only

Render the current branch/status indicators and the configured GitHub link in the Source Control panel. The panel is a presentation of resume repository context, not a mutation surface.

Alternative considered: add commit or branch actions. Rejected as outside the resume website's scope.

## Risks / Trade-offs

- [Risk] A global keyboard shortcut can conflict with browser or assistive technology shortcuts -> Mitigation: scope handling to the page, ignore editable targets, and provide normal button navigation as the primary path.
- [Risk] Search results may grow as resume content grows -> Mitigation: cap visible results and keep the projection local and lightweight.
- [Risk] Mobile sidebars have little available width -> Mitigation: preserve compact panel controls and verify no page-level overflow at narrow widths.

## Migration Plan

Add the panel state and panel renderers to the existing root route, then extend global styles for panel content and selected activity states. No route, dependency, or data migration is required; rollback removes the new panel state and restores the Explorer-only sidebar.