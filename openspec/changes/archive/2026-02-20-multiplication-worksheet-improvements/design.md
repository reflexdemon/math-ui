## Context

The multiplication worksheet feature is a Vue.js application with PrimeVue components. Currently:

1. **Navigation**: The toolbar (AppTopbar.vue) has a "Work Sheets" dropdown with "All Worksheets" and "Simple Math Problems", but is missing "Multiplication Worksheet"
2. **Routing**: The router uses nested routes under `/worksheets` for worksheet views. HomeView links use different paths (e.g., `/simple-math` vs `/worksheets/simple-math`)
3. **State**: Table selections are managed locally in components with no persistence
4. **Input Fields**: Answer inputs are always enabled regardless of worksheet state
5. **Code Organization**: Business logic (problem generation, table generation, printing) is embedded directly in Vue components

## Goals / Non-Goals

**Goals:**

- Add Multiplication Worksheet link to toolbar menu under "Work Sheets"
- Fix all deep linking paths in HomeView to use consistent context paths
- Implement localStorage persistence for table selections
- Disable Start/Print buttons when no tables selected
- Disable input fields by default, enable on Start, clear and disable on Reset
- Extract TypeScript code from Vue components into services

**Non-Goals:**

- Add new worksheets or modify existing worksheet logic beyond the specified changes
- Add authentication or user management
- Modify the database or backend (pure frontend changes)

## Decisions

### 1. Toolbar Navigation Structure

**Decision**: Add "Multiplication Worksheet" as a nested item under the existing "Work Sheets" menu, alongside "All Worksheets" and "Simple Math Problems".

**Rationale**: Maintains consistency with the existing menu structure. The route `/worksheets/multiplication-tables` already exists.

### 2. Deep Linking Context Paths

**Decision**: Update HomeView to use `/worksheets/simple-math` instead of `/simple-math` for consistency with the router structure.

**Alternatives Considered**:

- Change router to use top-level paths (rejected - would break existing bookmarks/links)
- Add redirects (rejected - adds complexity without benefit)

### 3. Local Storage Key

**Decision**: Use `math-ui:selectedTables` as the localStorage key with JSON-serialized array of table numbers.

**Rationale**: Simple, descriptive namespace preventing conflicts with other apps on localhost.

### 4. Service Extraction Pattern

**Decision**: Create three new service files:

- `services/MultiplicationProblem.ts` - Problem types and generation logic
- `services/TableProvider.ts` - Table generation and localStorage persistence
- `services/PrintService.ts` - Print and PDF generation for both worksheets

**Rationale**: Follows existing service pattern in codebase (Multiplication.ts, SimpleMathProblem.ts). Services export pure functions that are easily testable.

### 5. Input Field State Management

**Decision**: Track `isStarted` state in the component and bind input `:disabled="!isStarted"` with `:class` for visual disabled styling.

**Rationale**: Simple reactive state that aligns with the Start/Reset workflow.

## Risks / Trade-offs

- **[Risk]** LocalStorage may be unavailable in private browsing
  - **Mitigation**: Add try-catch around localStorage access, fall back to in-memory state

- **[Risk]** Code extraction may introduce bugs in existing functionality
  - **Mitigation**: Extract incrementally, test after each extraction

- **[Risk]** Print functionality relies on browser popup
  - **Mitigation**: Modern browsers handle this well; no PDF library needed per existing pattern
