## Purpose

Provides a responsive VS Code-inspired resume shell that uses available viewport space efficiently and replaces desktop-only navigation with a usable bottom navigation experience on small screens.

## ADDED Requirements

### Requirement: Resume shell uses available viewport space
The resume page SHALL minimize unnecessary outer framing and SHALL allow the VS Code shell to use the available viewport on desktop and mobile while preserving the shell's readable internal structure.

#### Scenario: Desktop shell has limited outer framing
- **WHEN** the resume is viewed at a desktop-sized viewport
- **THEN** the shell uses the available page area with restrained outer padding and does not appear surrounded by excessive empty space

#### Scenario: Shell fits the viewport on small screens
- **WHEN** the resume is viewed at a supported small-screen width
- **THEN** the shell fits within the viewport width without horizontal scrolling caused by the page layout

### Requirement: Small screens provide bottom navigation
On small screens, the resume SHALL replace the desktop sidebar and Explorer panel with a bottom navigation control containing the primary resume sections.

#### Scenario: Mobile navigation is visible
- **WHEN** the viewport is at or below the small-screen breakpoint
- **THEN** the desktop sidebar and Explorer panel are not displayed and a bottom navigation control is displayed

#### Scenario: Mobile navigation changes the active section
- **WHEN** a user activates a bottom navigation item
- **THEN** the corresponding resume section becomes active and the selected item is visibly distinguished

#### Scenario: Desktop navigation remains available
- **WHEN** the viewport is above the small-screen breakpoint
- **THEN** the existing desktop activity-bar and sidebar navigation remain available and the bottom navigation is not displayed

### Requirement: Mobile controls remain accessible
The small-screen navigation SHALL provide labeled, keyboard-accessible controls with touch targets large enough for practical use and SHALL remain usable across supported phone widths.

#### Scenario: Navigation items are operable by keyboard
- **WHEN** a user focuses a mobile navigation item and activates it with the keyboard
- **THEN** the same section-selection behavior occurs as with pointer activation

#### Scenario: Narrow phone layout remains usable
- **WHEN** the page is viewed at a narrow supported phone width
- **THEN** navigation labels and controls remain within the viewport without overlapping or becoming unusably small
