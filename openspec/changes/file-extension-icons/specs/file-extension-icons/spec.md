## Purpose

The explorer and search panels need to present each item with a matching file icon so users can distinguish code, config, markdown, and asset files at a glance without relying on a single TypeScript symbol.

## ADDED Requirements

### Requirement: Explorer entries display the correct file icon
The system SHALL render each explorer entry with an icon chosen from the file's extension when the item represents a file.

#### Scenario: TypeScript file is shown with the TypeScript icon
- **WHEN** an explorer row represents a TypeScript or TSX file such as `resume.tsx`
- **THEN** the row SHALL display the TypeScript icon associated with that file type

#### Scenario: Non-TypeScript files use an extension-specific icon
- **WHEN** an explorer row represents a file whose extension is not TypeScript, such as JSON, Markdown, or image content
- **THEN** the row SHALL display an icon matching that file type instead of the generic TypeScript icon

#### Scenario: Unknown file types use the fallback icon
- **WHEN** an explorer row represents a file whose extension is not mapped by the product
- **THEN** the row SHALL show the default generic file icon so the item remains recognizable

### Requirement: Search results use the same file-type logic
The system SHALL use the same extension-aware mapping for search results as it does for explorer entries.

#### Scenario: Search results reflect the item type
- **WHEN** a search result is created for a file with a recognized extension
- **THEN** the result SHALL display the same matching file icon as the explorer list for that file type

### Requirement: Flat file listings do not show folder arrows
The system SHALL not render navigation arrows for flat file rows when the list is not a hierarchical folder tree.

#### Scenario: Flat workspace list is free of folder arrows
- **WHEN** the explorer or search panel displays a list of workspace files without nested folders
- **THEN** each row SHALL render as a file row without a folder-chevron indicator
