## ADDED Requirements

### Requirement: Export multiplication tables to PDF

The system SHALL provide a PDF export button that downloads all multiplication tables as a printable document.

#### Scenario: User clicks PDF export

- **WHEN** user clicks "Print PDF" or "Download PDF" button
- **THEN** a PDF file containing all 12 multiplication tables is downloaded
- **AND** the PDF is formatted for standard letter-size printing

#### Scenario: PDF content matches display

- **WHEN** PDF is generated
- **THEN** the content matches the displayed tables exactly
- **AND** numbers are aligned in the same grid format as the screen view

#### Scenario: PDF is printable

- **WHEN** PDF is generated
- **THEN** the document is sized for standard paper (US Letter or A4)
- **AND** tables fit on minimal number of pages
