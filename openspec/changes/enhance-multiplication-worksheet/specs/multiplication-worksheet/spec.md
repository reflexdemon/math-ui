## MODIFIED Requirements

### Requirement: Display multiplication worksheet with problems

The system SHALL display an interactive multiplication worksheet containing problems for user-selected tables (1-12), with one card per table grouping all 12 multipliers.

#### Scenario: Worksheet loads with table selection

- **WHEN** user navigates to the multiplication worksheet page
- **THEN** table selection checkboxes for tables 1-12 are displayed
- **AND** a "Select All" option is available
- **AND** default state has all tables selected

#### Scenario: User selects specific tables

- **WHEN** user checks/unchecks table checkboxes
- **THEN** only the selected tables' problems are displayed
- **AND** each table is shown as a separate card containing all 12 multipliers

#### Scenario: Problems organized in table cards

- **WHEN** problems are displayed
- **THEN** each table is displayed as a card with header "Table N"
- **AND** each card contains 12 problem rows (multipliers 1-12)
- **AND** input fields are displayed but disabled

### Requirement: Verify button evaluates answers

#### Scenario: Verify makes inputs readonly

- **WHEN** user clicks the "Verify" button
- **THEN** all input fields become readonly (not disabled)
- **AND** users can see their entered answers

#### Scenario: Certificate offered for high scores

- **WHEN** answers are verified
- **AND** score is 90% or higher
- **THEN** a certificate option is displayed
- **AND** certificate shows large trophy icon
- **AND** certificate displays the score percentage

### Requirement: Print worksheet without answers

#### Scenario: Print includes only selected tables

- **WHEN** user clicks the "Print" button
- **AND** specific tables are selected
- **THEN** the printed worksheet contains only the selected tables
- **AND** each table's problems are included

## ADDED Requirements

### Requirement: Certificate generation

The system SHALL provide a certificate for users who score 90% or higher.

#### Scenario: Certificate displayed for high scores

- **WHEN** verification results show score >= 90%
- **THEN** a certificate option is presented to the user
- **AND** certificate displays large trophy/medal icon
- **AND** certificate shows the achieved score percentage
- **AND** certificate can be printed

#### Scenario: Certificate print

- **WHEN** user clicks "Print Certificate"
- **THEN** a certificate opens in a new window
- **AND** the certificate shows congratulations message
- **AND** the certificate shows the score and tables attempted
- **AND** print dialog is triggered automatically
