## Purpose

The explorer and search results must clearly distinguish file types so users can recognize TypeScript, JSON, Markdown, and other files without relying on the wrong visual cues.

## ADDED Requirements

### Requirement: File icons map to the correct extension
The system SHALL render each file row with an icon that matches the file's effective extension and file type classification.

#### Scenario: TypeScript files use the TypeScript icon
- **WHEN** a file row represents a TypeScript or TSX file
- **THEN** the row SHALL display the TypeScript icon

#### Scenario: JSON files use the bracket/code icon
- **WHEN** a file row represents a JSON file
- **THEN** the row SHALL display the bracket/code-style icon instead of the TypeScript icon

#### Scenario: Markdown files use a document icon
- **WHEN** a file row represents a Markdown file
- **THEN** the row SHALL display a document icon that is distinct from the TypeScript icon

#### Scenario: Unknown or unsupported file types use a generic fallback
- **WHEN** a file row represents an extension not explicitly matched by the icon mapping rules
- **THEN** the row SHALL display a generic file icon to maintain discoverability

### Requirement: Explorer and search panels share the same mapping
The system SHALL apply the same extension-to-icon mapping in both the explorer view and the search results.

#### Scenario: Matching results use the same file type icon
- **WHEN** an item appears in both the explorer and the search results for the same file type
- **THEN** both surfaces SHALL show the same icon for that file type
