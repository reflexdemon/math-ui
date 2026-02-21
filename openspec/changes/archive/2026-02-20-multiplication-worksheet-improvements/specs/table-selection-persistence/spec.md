## ADDED Requirements

### Requirement: Table selections persist across sessions

The system SHALL save selected multiplication table numbers to local storage and restore them when the user returns.

#### Scenario: Selected tables are saved to local storage

- **WHEN** user selects or deselects a table
- **THEN** the selected table numbers are saved to local storage under key `math-ui:selectedTables`
- **AND** the value is stored as a JSON array of numbers

#### Scenario: Table selections are restored on page load

- **WHEN** user navigates to the Multiplication Worksheet page
- **THEN** the system checks local storage for `math-ui:selectedTables`
- **AND** if found, the saved selections are restored
- **AND** the UI reflects the restored selections

#### Scenario: No saved selections uses default

- **WHEN** user navigates to the Multiplication Worksheet page
- **AND** no `math-ui:selectedTables` exists in local storage
- **THEN** all tables 1-12 are selected by default

#### Scenario: Local storage unavailable uses in-memory state

- **WHEN** local storage is not available (private browsing, disabled)
- **THEN** the application gracefully falls back to in-memory state
- **AND** no errors are thrown to the user
