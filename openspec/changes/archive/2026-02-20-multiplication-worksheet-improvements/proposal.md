## Why

The multiplication worksheet feature needs several usability improvements and code reorganization. Users need better navigation from the toolbar, table selections should persist across sessions, and input controls need clearer state management. Additionally, the TypeScript code is currently tightly coupled within Vue components and should be extracted into reusable services.

## What Changes

- Add Multiplication Worksheet link to the toolbar menu for direct navigation
- Update all deep linking paths from home page to use correct context paths
- Persist table selections in local storage to maintain state between visits
- Disable Start and Print buttons when no tables are selected
- Disable input fields by default on Multiplication Worksheet; enable only when user clicks Start
- Clear input values and disable inputs when user clicks Reset
- Move TypeScript from MultiplicationWorksheetView.vue to MultiplicationProblem.ts in services
- Move generateTables code from MultiplicationTablesView.vue to TableProvider.ts in services
- Move printWorksheet logic from MultiplicationWorksheetView.vue to PrintService.ts
- Move downloadPdf logic from MultiplicationTablesView.vue to PrintService.ts

## Capabilities

### New Capabilities

- `worksheet-toolbar-link`: Add Multiplication Worksheet navigation link to the toolbar
- `table-selection-persistence`: Save and restore table selections from local storage
- `worksheet-state-management`: Manage input field enabled/disabled state based on worksheet lifecycle
- `print-service`: Extract print and PDF generation logic into dedicated service

### Modified Capabilities

- `home-page-display`: Update deep linking paths to use correct context paths for all module links
- `multiplication-worksheet`: Modify button enable/disable logic based on table selection; implement input field state management
- `multiplication-tables-display`: Update deep linking paths; extract generateTables logic to service

## Impact

- MultiplicationWorksheetView.vue - Button state logic, input field state management
- MultiplicationTablesView.vue - Deep linking updates, generateTables extraction
- Router configuration - Context path updates
- services/MultiplicationProblem.ts - New file for worksheet problem generation
- services/TableProvider.ts - New file for table generation and state
- services/PrintService.ts - New file for print and PDF functionality
- Toolbar component - New navigation link
