## Purpose

Makes the full set of VS Code-inspired activity tools available on mobile through focused, dismissible drawers while keeping the resume editor visible and preserving the existing desktop navigation model.

## ADDED Requirements

### Requirement: Mobile activity tabs open drawers
At the mobile breakpoint, each visible activity-bar tab SHALL open a drawer associated with that tool, including Explorer, Search, Source Control, Run, Extensions, and the custom editor tool.

#### Scenario: Selecting an inactive activity tab
- **WHEN** a user activates an activity-bar tab while no drawer or another drawer is open
- **THEN** the corresponding mobile drawer opens and the tab is visibly selected

#### Scenario: Selecting the active activity tab
- **WHEN** a user activates the tab for the currently open drawer
- **THEN** that drawer closes and the tab is no longer selected

#### Scenario: Tool drawer has relevant content
- **WHEN** the Explorer, Search, or Source Control tab is selected
- **THEN** the drawer presents the corresponding existing tool content and interactions

#### Scenario: Tool has no specialized content
- **WHEN** the Run, Extensions, or custom editor tab is selected
- **THEN** the drawer opens with a clearly labeled tool state and does not leave an empty or unidentifiable panel

### Requirement: Mobile drawers are mutually exclusive and dismissible
The mobile experience SHALL display at most one activity drawer at a time and SHALL provide multiple predictable dismissal paths.

#### Scenario: Switching between tools
- **WHEN** a user selects a different activity tab while a drawer is open
- **THEN** the current drawer closes or is replaced by the newly selected drawer, with only the newly selected tab marked active

#### Scenario: Dismissal by close control
- **WHEN** a user activates the drawer's close control
- **THEN** the drawer closes and focus returns to the activity-bar tab that opened it

#### Scenario: Dismissal by Escape or outside press
- **WHEN** a user presses Escape or activates the scrim outside the drawer
- **THEN** the drawer closes without changing the selected resume section

### Requirement: Drawer interactions preserve resume navigation
Explorer and Search interactions inside a mobile drawer SHALL update the active resume section using the same behavior as desktop navigation.

#### Scenario: Selecting a resume file in Explorer
- **WHEN** a user selects a resume file from the mobile Explorer drawer
- **THEN** the matching resume section becomes active and the drawer remains available for further navigation

#### Scenario: Selecting a search result
- **WHEN** a user selects a result from the mobile Search drawer
- **THEN** the matching resume section becomes active and the result selection does not navigate away from the page

### Requirement: Drawer behavior is mobile-only
Above the mobile breakpoint, the existing activity bar, sidebar, and panel behavior SHALL remain unchanged and no mobile drawer or mobile-only scrim SHALL be displayed.

#### Scenario: Desktop layout is viewed
- **WHEN** the viewport is wider than the mobile breakpoint
- **THEN** the desktop sidebar presents the selected activity panel, mobile drawer controls are hidden, and desktop activity-panel switching continues to work

#### Scenario: Mobile layout is viewed
- **WHEN** the viewport is at or below the mobile breakpoint
- **THEN** the mobile activity bar remains usable, the desktop sidebar is hidden, and a selected activity tab opens its drawer without causing horizontal page overflow

### Requirement: Mobile drawers are accessible
Mobile activity tabs and drawers SHALL expose meaningful accessible names, support keyboard operation, and maintain usable touch targets and focus behavior.

#### Scenario: Keyboard opens and closes a drawer
- **WHEN** a user focuses an activity tab and activates it with the keyboard
- **THEN** the corresponding drawer opens or closes using the same behavior as pointer activation

#### Scenario: Drawer controls are labeled
- **WHEN** assistive technology inspects the mobile activity bar or an open drawer
- **THEN** each tab, drawer, close control, and tool state has a meaningful accessible name
