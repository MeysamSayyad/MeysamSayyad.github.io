## Purpose

This capability makes the resume owner's GitHub profile directly discoverable from the VS Code-style version-control status bar while keeping the destination consistent with the contact document.

## ADDED Requirements

### Requirement: Version-control status links to GitHub
The version-control section of the status bar SHALL expose the resume owner's configured GitHub profile as an external link and SHALL display the associated handle or URL.

#### Scenario: Visitor activates the version-control link
- **WHEN** a visitor clicks or activates the status-bar version-control section
- **THEN** the configured GitHub profile opens in a new browser tab and the current resume remains open

#### Scenario: GitHub identity is updated
- **WHEN** the GitHub link in the resume data source changes
- **THEN** both the status-bar destination and the contact document use the updated destination without duplicated UI-specific configuration

### Requirement: Link preserves status-bar fidelity and accessibility
The GitHub link SHALL preserve the existing status-bar icon, placement, spacing, colors, and compact visual treatment while exposing a descriptive accessible name and visible keyboard focus indication.

#### Scenario: Keyboard user reaches the link
- **WHEN** a keyboard user tabs to the version-control section
- **THEN** the link receives visible focus, has an accessible name identifying the resume owner's GitHub profile, and can be activated with Enter or Space

#### Scenario: External navigation is secure
- **WHEN** the link opens a new browser tab
- **THEN** it uses external-link behavior that prevents the destination from controlling the originating page through the opener reference