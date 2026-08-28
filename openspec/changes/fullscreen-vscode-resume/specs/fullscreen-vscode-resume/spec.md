## Purpose

This capability makes the existing VS Code-style resume use the entire browser viewport, creating an immersive editor presentation without changing the resume content or internal navigation model.

## ADDED Requirements

### Requirement: Resume shell fills the viewport
The root resume experience SHALL occupy the full available viewport width and height on desktop, tablet, and mobile screens.

#### Scenario: Desktop viewport
- **WHEN** a visitor opens the root route on a desktop viewport
- **THEN** the resume shell reaches the viewport edges with no outer page margin or visible surrounding stage

#### Scenario: Mobile viewport
- **WHEN** a visitor opens the root route on a mobile viewport
- **THEN** the shell remains edge-to-edge and fills the viewport height without introducing page-level overflow

### Requirement: Fullscreen mode preserves internal resume behavior
Fullscreen presentation SHALL preserve the existing VS Code shell regions, resume document content, section navigation, local assets, and accessible interaction states.

#### Scenario: Section navigation in fullscreen
- **WHEN** a visitor selects a resume file from the explorer or tab bar
- **THEN** the selected state and editor document update exactly as they do in the existing shell

#### Scenario: Internal dimensions remain stable
- **WHEN** the shell is rendered at a desktop viewport
- **THEN** the activity bar, explorer, tabs, editor, and status bar retain their existing relative dimensions and hierarchy while the outer window expands

### Requirement: Fullscreen layout avoids document overflow
The root document SHALL not scroll horizontally or vertically solely because the shell fills the viewport.

#### Scenario: Narrow viewport dimensions
- **WHEN** the page is measured at representative desktop, tablet, and mobile viewport sizes
- **THEN** document scroll width and scroll height do not exceed the viewport dimensions unless the active editor document itself contains intentional internal scrolling