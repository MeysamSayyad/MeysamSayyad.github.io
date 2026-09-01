## Purpose

This capability ensures the light theme preserves readable text contrast so interface labels and text remain legible without sacrificing the intended visual style.

## ADDED Requirements

### Requirement: Light theme text contrast is readable
The system SHALL ensure yellow or similar highlight text used in the light theme remains readable against the light background and SHALL not fall below acceptable contrast for interface text.

#### Scenario: Light theme uses readable yellow text
- **WHEN** a user switches to the light theme
- **THEN** yellow text used in the UI SHALL remain readable against the light background

### Requirement: Theme styling remains visually consistent
The system SHALL keep the intended accent styling for highlighted text while adjusting only the contrast-necessary values in the light theme.

#### Scenario: Accent color remains recognizable
- **WHEN** a user views highlighted text in the light theme
- **THEN** the text SHALL still retain the intended accent feel without looking washed out or illegible

### Requirement: The fix is limited to the light theme
The system SHALL apply the contrast adjustment only to the light theme and SHALL not change the dark or high-contrast theme behavior.

#### Scenario: Other themes remain unchanged
- **WHEN** a user switches to dark or high-contrast mode
- **THEN** those themes SHALL retain their existing styling unless separately changed in another request
