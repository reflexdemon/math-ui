## ADDED Requirements

### Requirement: Worksheets landing page exists

The system SHALL provide a dedicated landing page at `/worksheets` that displays all available worksheets.

#### Scenario: Landing page route

- **WHEN** a user navigates to `/worksheets`
- **THEN** the worksheets landing page MUST be displayed

#### Scenario: Landing page displays worksheet list

- **WHEN** a user visits the worksheets landing page
- **THEN** the page MUST display a list of all available worksheets with their names and descriptions

### Requirement: Worksheet list items are navigable

Each worksheet listed on the landing page SHALL be clickable and navigate to the corresponding worksheet.

#### Scenario: Clicking worksheet navigates

- **WHEN** a user clicks on a worksheet item in the list
- **THEN** the system MUST navigate to that worksheet's page

### Requirement: Landing page uses proper heading structure

The worksheets landing page SHALL use proper heading hierarchy for accessibility.

#### Scenario: Heading hierarchy

- **WHEN** the landing page is rendered
- **THEN** it MUST have a single h1 heading ("Work Sheets")
- **AND** each worksheet item MUST have an h2 heading

### Requirement: Landing page has descriptive title

The worksheets landing page SHALL have an accessible title that describes its purpose.

#### Scenario: Page title

- **WHEN** the landing page is rendered
- **THEN** it MUST have a descriptive page title "Work Sheets"
- **AND** the title MUST be announced to screen readers
