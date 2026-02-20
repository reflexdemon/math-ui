## Context

The math-ui application has a "Works Sheets" section that contains educational worksheets. Currently it has "Simple Math Problems" and a link to "Multiplication Tables" (which is a reference view, not a worksheet). We need to add an interactive multiplication tables worksheet where students can practice by entering answers.

**Current State:**

- `WorksheetsView.vue` - Landing page with worksheet cards
- `MultiplicationTablesView.vue` - Static reference tables (read-only display)
- `SimpleMathView.vue` - Existing interactive worksheet with similar pattern

**Constraints:**

- Must follow existing Vue 3 + PrimeVue component patterns
- Must integrate with existing routing structure under `/worksheets`
- Print functionality must work similar to existing PDF export

## Goals / Non-Goals

**Goals:**

- Add a new "Multiplication Worksheet" in the Worksheets section
- Implement Start button that enables inputs and starts a visible timer
- Provide input fields for entering answers (disabled until Start is pressed)
- Add Verify button that checks answers and shows summary with correct answers for wrong responses
- Include time taken in the results summary
- Add Print option with blank input boxes for paper-based practice

**Non-Goals:**

- Customizable number ranges (sticking to 1-12 tables)
- Score persistence or user accounts
- Multiple difficulty levels
- Mobile-optimized touch input (though should be responsive)

## Decisions

### 1. Component Structure: Standalone View vs. Reusable

**Decision:** Create a new standalone `MultiplicationWorksheetView.vue` rather than reusing `MultiplicationTablesView.vue`

**Rationale:** The existing view has display-only behavior with different UI patterns. Creating a separate component keeps concerns separated and allows different interaction patterns without modifying the reference view.

### 2. Timer Implementation: Vue Reactive State

**Decision:** Use Vue's `ref` and `setInterval` for the timer

**Rationale:** Simple and matches the existing pattern in `SimpleMathView.vue`. No need for external libraries for a simple countdown/elapsed timer.

### 3. Answer Verification: Client-side Evaluation

**Decision:** Verify answers client-side when user clicks Verify button

**Rationale:** All multiplication problems have deterministic correct answers (1-144). No backend needed. Immediate feedback is better for learning.

### 4. Print Format: Same Window Popup as MultiplicationTablesView

**Decision:** Use `window.open()` with HTML content that triggers print dialog

**Rationale:** Already implemented and working in `MultiplicationTablesView.vue`. Maintains consistency across the application.

### 5. Input Fields: PrimeVue InputNumber vs Native Input

**Decision:** Use native `<input type="number">` for simplicity

**Rationale:** PrimeVue's InputNumber has extra validation overhead. Native inputs are simpler for this use case and work well with print styles.

## Risks / Trade-offs

- **[Risk]** Timer state resets on component re-render → **Mitigation:** Use `onMounted`/`onUnmounted` lifecycle hooks properly to clean up interval
- **[Risk]** Print dialog may be blocked by popup blockers → **Mitigation:** User must allow popups; no way to force in web app
- **[Risk]** Large number of input fields (144 problems) may impact performance → **Mitigation:** Use `v-for` with `:key` properly; 144 inputs is manageable
