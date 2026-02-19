## MODIFIED Requirements

### Requirement: Export multiplication tables to PDF

The system SHALL provide a PDF export button that downloads all multiplication tables as a printable document with all 12 tables on a single page.

#### Scenario: User clicks PDF export

- **WHEN** user clicks "Print PDF" button
- **THEN** a PDF file containing all 12 multiplication tables is downloaded
- **AND** all tables fit on a single page
- **AND** the PDF is formatted for standard letter-size printing

#### Scenario: PDF content matches display

- **WHEN** PDF is generated
- **THEN** the content matches the displayed tables exactly
- **AND** numbers are aligned in the same grid format as the screen view

#### Scenario: PDF is printable

- **WHEN** PDF is generated
- **THEN** the document is sized for standard paper (US Letter)
- **AND** all 12 tables fit on one page
- **AND** font size is reduced to fit content
- **AND** spacing between tables is minimized
