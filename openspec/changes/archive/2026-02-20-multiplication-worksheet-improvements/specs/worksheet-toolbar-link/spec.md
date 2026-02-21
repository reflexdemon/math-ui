## ADDED Requirements

### Requirement: Toolbar shows Multiplication Worksheet link

The system SHALL display a "Multiplication Worksheet" link in the toolbar navigation menu.

#### Scenario: Toolbar renders with worksheet link

- **WHEN** the application loads
- **THEN** the toolbar displays a "Work Sheets" dropdown menu
- **AND** the dropdown contains "Multiplication Worksheet" as a clickable item

#### Scenario: Clicking worksheet link navigates correctly

- **WHEN** user clicks "Multiplication Worksheet" in the toolbar
- **THEN** the user is navigated to `/worksheets/multiplication-tables`
- **AND** the Multiplication Worksheet view is displayed

#### Scenario: Worksheet link uses correct icon

- **WHEN** the toolbar menu is rendered
- **THEN** the "Multiplication Worksheet" item displays an appropriate icon (e.g., `pi pi-file` or `pi pi-check-square`)
