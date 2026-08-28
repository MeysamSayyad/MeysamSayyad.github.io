## Purpose

Provides a safe, discoverable in-app terminal that lets visitors navigate the resume with familiar npm-like commands while keeping all command execution within the page and synchronized with the existing resume editor.

## ADDED Requirements

### Requirement: Terminal accepts documented resume commands
The terminal SHALL accept `npm run <command>` for each supported resume section: `resume`, `experience`, `projects`, `skills`, `education`, and `contact`.

#### Scenario: Section command succeeds
- **WHEN** a user submits a supported section command
- **THEN** the terminal records the command, displays a successful result, and the matching resume section becomes active in the editor

#### Scenario: Command is entered with extra whitespace
- **WHEN** a user submits a supported command with leading, trailing, or repeated whitespace
- **THEN** the terminal normalizes the input and executes the matching supported command

### Requirement: Terminal provides command help
The terminal SHALL accept both `npm run help` and `help`, and SHALL display every supported command with a useful description.

#### Scenario: User requests help
- **WHEN** a user submits either help command
- **THEN** the terminal displays the complete command list, including all section commands and their purpose

#### Scenario: Help is available from the initial terminal state
- **WHEN** a user opens or focuses the terminal before entering a command
- **THEN** the interface makes the help command discoverable without requiring external documentation

### Requirement: Terminal reports invalid input
The terminal SHALL provide clear, non-destructive feedback for unknown commands, incomplete npm syntax, and empty submissions.

#### Scenario: Unknown command
- **WHEN** a user submits a command outside the documented command set
- **THEN** the terminal displays an error explaining that the command is unavailable and points the user to help

#### Scenario: Empty submission
- **WHEN** a user submits an empty command
- **THEN** the terminal does not change the active resume section and displays a concise prompt or validation response

### Requirement: Terminal preserves command history
The terminal SHALL display submitted commands and their output in chronological order and SHALL support keyboard navigation through prior commands.

#### Scenario: Command history is shown
- **WHEN** a user submits one or more commands
- **THEN** each command and its resulting output remain visible in the terminal history for the current page session

#### Scenario: User navigates history
- **WHEN** a user presses ArrowUp or ArrowDown while focused in the terminal input
- **THEN** the input cycles through prior commands without submitting them automatically

### Requirement: Terminal is safe and synchronized
Terminal commands SHALL execute only against the documented in-app command set, SHALL not invoke host-shell or server commands, and SHALL use the same active resume section as existing editor navigation.

#### Scenario: Terminal selection matches editor navigation
- **WHEN** a user selects a resume section through a terminal command and then uses an existing tab or panel control
- **THEN** both interfaces reflect the same active section without conflicting state

#### Scenario: Arbitrary shell input is rejected
- **WHEN** a user submits a host-shell command or unsupported argument
- **THEN** the terminal rejects it as unavailable and performs no external operation
