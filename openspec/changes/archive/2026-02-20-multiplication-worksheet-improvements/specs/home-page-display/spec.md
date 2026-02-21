## ADDED Requirements

### Requirement: Home page uses application standard theming

The home page SHALL use PrimeVue CSS variables for theming consistent with the rest of the application.

#### Scenario: Light mode theming

- **WHEN** user views the home page in light mode
- **THEN** the page uses `var(--p-surface-100)` for background
- **AND** uses `var(--p-surface-900)` for text color

#### Scenario: Dark mode theming

- **WHEN** user views the home page in dark mode (`.p-dark` class present)
- **THEN** the page uses appropriate dark surface colors for background and text
- **AND** cards have proper dark mode styling

#### Scenario: Responsive container constraints

- **WHEN** the home page is viewed on any screen size
- **THEN** content stays within container bounds
- **AND** no horizontal overflow occurs

#### Scenario: Accessibility color contrast

- **WHEN** user views the home page
- **THEN** text meets WCAG 2.2 AA contrast requirements (4.5:1 for normal text)

## MODIFIED Requirements

### Requirement: Home page links use correct context paths

The home page SHALL use consistent deep linking paths that match the router configuration.

#### Scenario: Simple Math link uses worksheet context path

- **WHEN** user clicks "Start Practicing" on the home page
- **THEN** user is navigated to `/worksheets/simple-math`

#### Scenario: Multiplication Tables link navigates correctly

- **WHEN** user clicks "Multiplication Tables" on the home page
- **THEN** user is navigated to `/multiplication-tables`
