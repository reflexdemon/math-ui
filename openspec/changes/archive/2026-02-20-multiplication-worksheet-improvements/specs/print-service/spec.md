## ADDED Requirements

### Requirement: Print service generates worksheet PDF

The system SHALL provide a dedicated service for generating printable worksheets and PDF output.

#### Scenario: Print worksheet generates blank problems

- **WHEN** user clicks the Print button on Multiplication Worksheet
- **THEN** the PrintService generates a print-friendly HTML document
- **AND** the document contains all selected table problems with empty answer boxes
- **AND** the browser print dialog is triggered automatically

#### Scenario: Print tables generates reference grid

- **WHEN** user clicks the Print button on Multiplication Tables
- **THEN** the PrintService generates a print-friendly HTML document
- **AND** the document contains all 12 multiplication tables (1-12)
- **AND** each table shows the complete multiplication results
- **AND** the browser print dialog is triggered automatically

#### Scenario: Print service handles missing tables gracefully

- **WHEN** PrintService generates output with empty table selection
- **THEN** the service does not generate any table content
- **AND** no errors are thrown

#### Scenario: Print output uses appropriate styling

- **WHEN** print HTML is generated
- **THEN** the output uses print-friendly CSS
- **AND** page breaks are avoided within tables
- **AND** fonts are legible on standard paper sizes
