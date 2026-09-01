## Purpose

The file explorer and search surfaces should display icons that match the file type so users can distinguish TypeScript files from non-TypeScript files without confusion.

## ADDED Requirements

### Requirement: TypeScript files use the TypeScript icon
The system SHALL display the blue TypeScript icon for files whose extension is `.ts` or `.tsx`.

#### Scenario: TypeScript source files render correctly
- **WHEN** a user views a TypeScript file in the explorer, search results, or tabs
- **THEN** the system SHALL display the TypeScript icon associated with that source file type

### Requirement: Non-TypeScript files use the bracket-style icon
The system SHALL display the bracket `{}` icon for non-TypeScript code files and other file types that are not markdown-based or otherwise explicitly mapped.

#### Scenario: Non-TypeScript files render with the correct icon
- **WHEN** a user views a JSON, JS, or other non-TypeScript file in the explorer or search results
- **THEN** the system SHALL display the bracket icon instead of the TypeScript icon

### Requirement: Mapping remains consistent across UI surfaces
The system SHALL apply the same file-type icon mapping consistently across explorer rows, search results, and tab labels.

#### Scenario: The icon logic stays aligned across sections
- **WHEN** the same file category appears in different parts of the interface
- **THEN** it SHALL resolve to the same icon representation in each part of the UI
