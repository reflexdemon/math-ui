## ADDED Requirements

### Requirement: Input fields disabled until worksheet starts

The system SHALL disable answer input fields by default and only enable them when the user clicks Start.

#### Scenario: Input fields are disabled on initial load

- **WHEN** user navigates to the Multiplication Worksheet page
- **AND** the worksheet has not been started
- **THEN** all answer input fields are disabled
- **AND** users cannot enter answers

#### Scenario: Input fields enabled when Start is clicked

- **WHEN** user clicks the Start button
- **THEN** all answer input fields become enabled
- **AND** users can enter their answers

#### Scenario: Input fields cleared and disabled on Reset

- **WHEN** user clicks the Reset button
- **THEN** all entered answers are cleared
- **AND** all input fields become disabled again
- **AND** the worksheet returns to its initial state

#### Scenario: Input fields display correct styling when disabled

- **WHEN** input fields are disabled
- **THEN** they display visual indication of disabled state (greyed out, not clickable)
- **AND** the cursor shows not-allowed indicator
