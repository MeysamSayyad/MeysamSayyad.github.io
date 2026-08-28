## Purpose

This capability makes the bottom-left Account and Settings controls useful by exposing resume-owner identity and a controllable visual theme menu without disrupting the VS Code resume shell.

## ADDED Requirements

### Requirement: Account control exposes owner identity
The Account activity-bar control SHALL open a dropdown containing the configured resume owner's name and a GitHub link derived from the shared resume data.

#### Scenario: Visitor opens Account
- **WHEN** a visitor activates the Account icon
- **THEN** an accessible dropdown appears with the resume owner's name and GitHub link

#### Scenario: Visitor follows GitHub
- **WHEN** a visitor activates the GitHub link in the Account dropdown
- **THEN** the configured GitHub profile opens securely in a new browser tab and the resume remains available

### Requirement: Settings control exposes theme options
The Settings control SHALL open a dropdown with selectable Figma dark, light, and high-contrast themes, with the Figma dark theme selected by default.

#### Scenario: Visitor opens Settings
- **WHEN** a visitor activates the gear icon
- **THEN** an accessible theme dropdown appears with the supported theme options and the current theme is visibly selected

#### Scenario: Visitor changes theme
- **WHEN** a visitor selects a different theme
- **THEN** shell surfaces, text, borders, editor syntax colors, panels, and controls update to the selected theme without changing resume content or navigation state

### Requirement: Dropdowns are dismissible and keyboard accessible
Account and Settings dropdowns SHALL be keyboard operable, expose expanded and selected state, close on Escape or outside activation, and provide visible focus indication.

#### Scenario: Visitor dismisses a dropdown
- **WHEN** an open dropdown receives Escape or the visitor activates outside it
- **THEN** the dropdown closes and focus behavior remains predictable

#### Scenario: Keyboard user selects a theme
- **WHEN** a keyboard user opens Settings and moves to a theme option
- **THEN** the option can be selected with the keyboard and its selected state is exposed

### Requirement: Theme preference persists safely
The selected theme SHALL persist across later visits when browser storage is available and SHALL fall back to Figma dark without blocking rendering when storage is unavailable or invalid.

#### Scenario: Visitor returns to the site
- **WHEN** a previously selected valid theme is available in browser storage
- **THEN** the resume loads using that theme

#### Scenario: Storage is unavailable
- **WHEN** browser storage cannot be read or written
- **THEN** the resume remains usable with the Figma dark theme and no persistence error is exposed to the visitor