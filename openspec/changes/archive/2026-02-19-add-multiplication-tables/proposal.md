## Why

Teachers and students need an easy way to practice multiplication tables. Currently, the app generates random multiplication problems but doesn't provide a structured reference of multiplication tables (1-12) that can be printed for practice worksheets.

## What Changes

- Add a new multiplication tables view displaying all 12 tables (1×1 through 12×12) on a single sheet
- Add a print/PDF button to export the tables for offline use
- Display tables in a clean grid layout aligned for standard worksheet format
- Apply application theming (dark/light mode support)

## Capabilities

### New Capabilities

- `multiplication-tables-display`: Display multiplication tables 1-12 in a printable grid format
- `multiplication-tables-pdf-export`: Export multiplication tables to PDF for printing

### Modified Capabilities

<!-- None -->

## Impact

- New component: `src/views/MultiplicationTablesView.vue`
- New route: `/multiplication-tables` in `src/router/index.ts`
- Modified: App theming integration via existing useLayout composable
