## ADDED Requirements

### Requirement: Navigation menu includes Work Sheets item

The application navigation menu SHALL include a "Work Sheets" parent menu item with sub-items for each worksheet.

#### Scenario: Menu displays Work Sheets

- **WHEN** the application navigation menu is rendered
- **THEN** a "Work Sheets" menu item MUST be visible in the navigation

#### Scenario: Menu shows worksheet sub-items

- **WHEN** a user hovers or focuses on the "Work Sheets" menu item
- **THEN** sub-menu items for each worksheet MUST be displayed

### Requirement: Router supports nested worksheet routes

The application router SHALL support nested routes under the `/worksheets` path.

#### Scenario: Parent route renders

- **WHEN** a user navigates to `/worksheets`
- **THEN** the router outlet MUST render the worksheets landing page

#### Scenario: Nested route renders worksheet

- **WHEN** a user navigates to `/worksheets/simple-math`
- **THEN** the Simple Math worksheet MUST be displayed within the module

### Requirement: Menu items are keyboard accessible

All navigation menu items SHALL be accessible via keyboard navigation.

#### Scenario: Keyboard navigation

- **WHEN** a user tabs through the navigation menu
- **THEN** each menu and sub-menu item MUST be reachable using the Tab key

### Requirement: Menu items have accessible labels

All navigation menu items SHALL have accessible labels for screen readers.

#### Scenario: Screen reader announces menu items

- **WHEN** a screen reader user focuses on a menu item
- **THEN** the item label MUST be announced clearly

### Requirement: Existing routes remain functional

The application SHALL maintain backward compatibility with existing direct routes.

#### Scenario: Legacy route works

- **WHEN** a user navigates to `/simple-math` directly
- **THEN** the Simple Math worksheet MUST still be accessible
