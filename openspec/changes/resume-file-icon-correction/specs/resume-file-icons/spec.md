## Purpose

This capability ensures that each resume section displays the icon that matches its underlying file extension so the UI matches the file type users expect to see in a VS Code-inspired explorer.

## ADDED Requirements

### Requirement: Resume sections resolve icons by file extension
The system SHALL map each resume section to the correct icon based on its extension and SHALL not use a generic or mismatched icon when a known extension is available.

#### Scenario: TypeScript section shows the TypeScript icon
- **WHEN** a user views a resume section whose underlying file value is `.ts` or `.tsx`
- **THEN** the system SHALL display the TypeScript icon for that entry

#### Scenario: Markdown section shows the document icon
- **WHEN** a user views a resume section whose underlying file value is `.md`
- **THEN** the system SHALL display the markdown/document-style file icon instead of the TypeScript icon

#### Scenario: JSON section shows the code/bracket icon
- **WHEN** a user views a resume section whose underlying file value is `.json`
- **THEN** the system SHALL display the bracket/code-style icon for that entry

### Requirement: The same icon mapping is used across explorer, search, and tab surfaces
The system SHALL apply the same extension-based icon logic consistently across all UI surfaces that render resume section entries.

#### Scenario: Explorer and tabs stay consistent
- **WHEN** a resume section appears in the explorer, search panel, or tab strip
- **THEN** it SHALL resolve to the same icon for the same extension in each location

### Requirement: Generic fallback is only used for unknown or unsupported extensions
The system SHALL use a common fallback icon only when a section does not have a recognized extension pattern, and SHALL not misclassify known `.ts`, `.md`, or `.json` entries.

#### Scenario: Unknown extensions do not override known mappings
- **WHEN** a section has an unsupported or missing extension
- **THEN** the system SHALL use the fallback file icon only for that case
- **AND** the known `.ts`, `.md`, and `.json` section mappings SHALL remain unchanged
