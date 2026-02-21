## ADDED Requirements

### Requirement: Test command executes all tests

The system SHALL execute all test files matching `src/**/*.test.ts` and `src/**/*.test.tsx` patterns when running `npm run test`.

#### Scenario: Run all tests

- **WHEN** user runs `npm run test`
- **THEN** Vitest discovers and executes all test files in the src directory

#### Scenario: Watch mode during development

- **WHEN** user runs `npm run test` without CI environment
- **THEN** Vitest runs in watch mode, re-running tests on file changes

### Requirement: Test command shows coverage

The system SHALL display code coverage statistics after test execution via the --coverage flag.

#### Scenario: Coverage report generation

- **WHEN** user runs `npm run test -- --coverage`
- **THEN** a coverage report is generated showing percentage of code covered by tests

#### Scenario: Coverage thresholds (optional)

- **WHEN** coverage thresholds are configured and tests run
- **THEN** the build fails if coverage falls below thresholds

### Requirement: Test files mirror spec structure

The system SHALL support test files that correspond to spec subfolders, allowing tests to be organized by feature.

#### Scenario: Test file for component

- **WHEN** a test file exists atsrc/components/Some `Component.test.tsx`
- **THEN** Vitest SHALL discover and execute it

#### Scenario: Test file for utility

- **WHEN** a test file exists at `src/utils/someUtility.test.ts`
- **THEN** Vitest SHALL discover and execute it

### Requirement: React component testing support

The system SHALL enable testing of React components using React Testing Library.

#### Scenario: Render component

- **WHEN** a test calls render() on a React component
- **THEN** the component renders without errors and its output is queryable

#### Scenario: Simulate user interaction

- **WHEN** a test uses fireEvent or userEvent to interact with a rendered component
- **THEN** the component responds to the interaction as expected
