## Purpose

This capability gives the VS Code-style resume a functional activity bar by switching the primary sidebar between Explorer, Search, and Source Control while preserving the existing resume navigation experience.

## ADDED Requirements

### Requirement: Activity buttons select primary panels
The activity bar SHALL provide selectable Explorer, Search, and Source Control controls, and the primary sidebar SHALL display the panel corresponding to the selected control.

#### Scenario: Explorer is selected by default
- **WHEN** a visitor opens the resume
- **THEN** the Explorer control is selected and the sidebar displays the resume file tree

#### Scenario: Visitor selects Search
- **WHEN** a visitor presses the Search activity button
- **THEN** the Search control is selected and the sidebar replaces the Explorer contents with a Search panel

#### Scenario: Visitor selects Source Control
- **WHEN** a visitor presses the Source Control activity button
- **THEN** the Source Control control is selected and the sidebar displays repository-status information and the configured GitHub destination

### Requirement: Search panel finds resume content
The Search panel SHALL accept a query and display matching resume section names or content from the typed resume data, with an understandable empty state when there are no matches.

#### Scenario: Search returns matches
- **WHEN** a visitor enters a query matching a resume section or content value
- **THEN** matching results are shown and selecting a result opens the corresponding resume document

#### Scenario: Search has no matches
- **WHEN** a visitor enters a query with no matching resume content
- **THEN** the panel shows a clear no-results state without changing the active document

### Requirement: Activity navigation supports keyboard cycling
The supported activity controls SHALL be keyboard operable, expose selected state, and allow cycling in Explorer -> Search -> Source Control order with wraparound.

#### Scenario: Visitor cycles forward
- **WHEN** a keyboard user invokes the activity-cycle command repeatedly
- **THEN** the selected panel advances in the defined order and wraps from Source Control back to Explorer

#### Scenario: Visitor focuses a selected activity button
- **WHEN** a keyboard user navigates to an activity button
- **THEN** its accessible name and selected state are exposed and its focus indicator is visible

### Requirement: Panel switching preserves shell behavior
Switching the primary sidebar panel SHALL preserve the existing VS Code shell dimensions, active resume document, tab navigation, local assets, and responsive behavior.

#### Scenario: Panel changes while a resume document is active
- **WHEN** a visitor switches panels after selecting a resume document
- **THEN** the active editor document remains selected until a search result or Explorer file explicitly changes it

#### Scenario: Mobile panel behavior
- **WHEN** a visitor uses the resume at mobile width
- **THEN** the supported activity controls remain reachable and panel switching does not introduce page-level horizontal overflow