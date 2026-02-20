## Why

Students need an interactive multiplication tables worksheet to practice and test their multiplication skills. Currently, the app only displays static multiplication tables for reference. Adding a worksheet module will allow students to actively practice multiplication by entering answers, with immediate feedback and scoring.

## What Changes

- Add a new "Multiplication Worksheet" module inside the Worksheets section
- Create an interactive worksheet view with multiplication problems (similar to SimpleMathView)
- Implement a Start button that enables input fields and starts a timer
- Add answer input fields for each multiplication problem
- Add a Verify button to check answers and show results summary
- Add a Print option that shows blank answer boxes for paper-based practice

## Capabilities

### New Capabilities

- `multiplication-worksheet`: Interactive multiplication practice worksheet with timed exercises, answer verification, and printable format

### Modified Capabilities

- None - this is a new feature not modifying existing requirements

## Impact

- New component: `src/views/worksheets/MultiplicationWorksheetView.vue`
- Route addition: `/worksheets/multiplication-tables` in router
- Worksheet navigation: Add entry to `WorksheetsView.vue` worksheets array
- Print functionality: Similar PDF generation as `MultiplicationTablesView.vue`
