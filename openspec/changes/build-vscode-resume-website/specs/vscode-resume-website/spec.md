## Purpose

This capability presents a personal resume as an interactive, responsive VS Code-style website based on the supplied Figma primary frame, making the resume distinctive while keeping its content readable, navigable, accessible, and discoverable.

## ADDED Requirements

### Requirement: Resume is presented in the Figma VS Code shell
The website SHALL render the resume at the root route inside a VS Code-style shell containing a top bar, activity bar, explorer sidebar, tab manager, editor surface, and status bar, preserving the primary frame's visual hierarchy, dark surfaces, borders, typography, spacing, and exported iconography.

#### Scenario: Desktop shell matches the source composition
- **WHEN** the root route is viewed at the primary desktop viewport
- **THEN** the shell presents the same major regions and relative proportions as the Figma primary frame, including the 44 px activity bar, approximately 291 px explorer sidebar, editor tabs, code-like editor surface, and bottom status bar

#### Scenario: Figma assets are available locally
- **WHEN** a Figma-provided icon or image is rendered
- **THEN** the website uses the corresponding committed local asset with its designed outer box, aspect ratio, and padding preserved

### Requirement: Resume content is navigable and separate from presentation
The website SHALL expose a default resume document and navigable resume sections for identity, summary, experience, projects, skills, education, and contact, with content stored in typed data separate from shell and section presentation.

#### Scenario: Visitor opens the resume
- **WHEN** a visitor loads the root route
- **THEN** a concise identity header and the primary resume document are visible without requiring interaction

#### Scenario: Visitor selects a resume section
- **WHEN** a visitor activates a visible tab, file, or equivalent section control
- **THEN** the selected state is clear and the editor content changes to the corresponding resume section without a full-page navigation

#### Scenario: Resume data is changed
- **WHEN** resume data is updated in its dedicated data source
- **THEN** the rendered sections consume the updated values without requiring duplicated content edits in presentation markup

### Requirement: Layout adapts across viewport sizes
The website SHALL support desktop, tablet, and mobile viewports, collapsing or rearranging secondary VS Code chrome as necessary while keeping the active resume content readable and preserving the source design language.

#### Scenario: Narrow mobile viewport
- **WHEN** the root route is viewed on a narrow mobile viewport
- **THEN** no horizontal page overflow obscures resume content, the active document remains readable, and navigation controls remain reachable

#### Scenario: Tablet viewport
- **WHEN** the root route is viewed at tablet width
- **THEN** the shell retains the editor metaphor while reducing or hiding nonessential chrome before shrinking primary resume text below a readable size

### Requirement: Interactive controls are accessible
All interactive shell and resume controls SHALL be keyboard operable, have accessible names, expose selected or expanded state where applicable, provide visible focus indication, and respect reduced-motion preferences.

#### Scenario: Keyboard navigation
- **WHEN** a keyboard user tabs through the page and activates a section control
- **THEN** focus moves in a logical order, each control has an accessible name, and the corresponding section becomes selected and visible

#### Scenario: Reduced motion preference
- **WHEN** the visitor prefers reduced motion
- **THEN** decorative and state-change animations are removed or reduced without hiding content or impairing navigation

### Requirement: Page is discoverable and shareable
The website SHALL provide meaningful document metadata, a descriptive page title, a description, canonical/share metadata where supported by the application, and semantic resume content that can be indexed without relying solely on visual code styling.

#### Scenario: Search or link preview reads the page
- **WHEN** a crawler or link-preview client requests the root route
- **THEN** it receives a descriptive title and summary that identify the person and resume, with the core resume content represented in semantic HTML

### Requirement: Visual and technical validation is repeatable
The implementation SHALL include focused validation for shell rendering, section navigation, responsive overflow, and accessibility-critical states, and SHALL pass the repository's TypeScript, ESLint, and production build checks.

#### Scenario: Validation runs on a clean checkout
- **WHEN** the documented validation commands are run
- **THEN** the application type-checks, lints, builds for production, and the focused behavior checks pass