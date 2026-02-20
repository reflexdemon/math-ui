# multiplication-worksheet Specification

## Purpose

Interactive multiplication practice worksheet for students to practice tables 1-12 with timed exercises, answer verification, and printable format.

## Requirements

### Requirement: Display multiplication worksheet with problems

The system SHALL display an interactive multiplication worksheet containing all problems from tables 1-12 (1×1 through 12×12).

#### Scenario: Worksheet loads

- **WHEN** user navigates to the multiplication worksheet page
- **THEN** all 144 multiplication problems (12 tables × 12 problems each) are displayed
- **AND** each problem shows the format "n × m = ?"
- **AND** answer input fields are displayed but disabled

#### Scenario: Problems are organized in table format

- **WHEN** problems are displayed
- **THEN** problems are grouped by the first operand (table 1, table 2, etc.)
- **AND** each table displays problems with multipliers 1-12

### Requirement: Start button enables worksheet

The system SHALL provide a Start button that begins the worksheet session.

#### Scenario: Start button is pressed

- **WHEN** user clicks the "Start" button
- **THEN** the Start button is hidden or disabled
- **AND** all answer input fields become enabled/editable
- **AND** a visible timer starts counting up from 0:00

#### Scenario: Timer displays elapsed time

- **WHEN** the worksheet is active (after Start is pressed)
- **THEN** a timer displays in MM:SS format
- **AND** the timer updates every second
- **AND** the timer continues running until Verify is clicked

### Requirement: Verify button evaluates answers

The system SHALL provide a Verify button that checks all entered answers.

#### Scenario: Verify button is pressed

- **WHEN** user clicks the "Verify" button
- **THEN** all answers are compared against correct values
- **AND** a results summary is displayed
- **AND** the time taken is displayed in the summary
- **AND** incorrect answers show the correct answer

#### Scenario: Results summary shows correct/incorrect count

- **WHEN** answers are verified
- **THEN** the summary displays the number of correct answers
- **AND** the summary displays the number of incorrect answers
- **AND** the summary displays total problems count

#### Scenario: Incorrect answers show correct values

- **WHEN** answers are verified
- **AND** a problem has an incorrect answer
- **THEN** the correct answer is displayed next to or below that problem
- **AND** incorrect answers are visually distinguished (e.g., red highlighting)

### Requirement: Print worksheet without answers

The system SHALL provide a Print option that generates a printable worksheet.

#### Scenario: Print button is clicked

- **WHEN** user clicks the "Print" button
- **THEN** a print-friendly page opens in a new window
- **AND** the page contains all multiplication problems
- **AND** empty answer boxes are provided for each problem (not the answers)
- **AND** the print dialog is triggered automatically

#### Scenario: Print format is clean

- **WHEN** the print page is generated
- **THEN** the problems are organized in a grid layout
- **AND** each problem has a blank box for writing the answer
- **AND** no answers are displayed
- **AND** the page fits on standard paper sizes
