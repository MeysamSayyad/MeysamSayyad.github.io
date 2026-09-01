## Purpose

The resume page should be organized into distinct, reusable UI components so the code remains understandable and easier to extend without changing the user-facing behavior.

## ADDED Requirements

### Requirement: Page responsibilities are split into component modules
The system SHALL organize the page into discrete, focused component modules for layout, activity panels, tabs, document content, and terminal behavior.

#### Scenario: Main page delegates rendering to smaller components
- **WHEN** the resume page renders the application shell
- **THEN** it SHALL delegate the UI to named component modules rather than housing all logic in one file

#### Scenario: Shared behavior remains equivalent
- **WHEN** the user interacts with the resume explorer, tabs, or terminal
- **THEN** the visible behavior and interaction flow SHALL remain the same as before the refactor

### Requirement: Component boundaries are logical and reusable
The system SHALL separate concerns so each component owns one part of the interface and can be reasoned about independently.

#### Scenario: Supporting modules are easier to maintain
- **WHEN** a developer updates a panel or editor section
- **THEN** the change SHALL be constrained to the relevant component rather than a single monolithic page file

### Requirement: Refactor preserves runtime behavior
The system SHALL not change the user-visible functionality, styling, or resume content while splitting the page into components.

#### Scenario: Feature parity is preserved after the refactor
- **WHEN** the application is loaded after the file split
- **THEN** the explorer, tabs, terminal, and editor behavior SHALL remain functionally equivalent to the pre-refactor version
