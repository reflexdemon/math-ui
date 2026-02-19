## Context

This feature adds a multiplication tables view to an existing Vue-based math problem generator app. The app already has:

- PrimeVue component library
- PDF generation via print window (used in SimpleMathView)
- Theming via useLayout composable
- Router setup for navigation

## Goals / Non-Goals

**Goals:**

- Display multiplication tables 1-12 in a readable grid format
- Add PDF export functionality for printing
- Use existing app theming (dark/light mode)
- Add navigation route for the new view

**Non-Goals:**

- Add interactive features (editing, filtering)
- Add to existing SimpleMathView - this is a separate view
- Support other operations (addition, subtraction tables)

## Decisions

### Decision 1: Grid layout approach

**Option A: CSS Grid** - Use CSS grid with 12 columns (one per table)
**Option B: Flexbox with wrapping** - Tables wrap to multiple rows
**Option C: Scrollable horizontal** - Horizontal scroll for all tables

**Chosen: Option A (CSS Grid)** - Each table in its own column provides best readability and matches the "single sheet" requirement. Tables can flow to multiple rows if needed for print.

### Decision 2: PDF generation approach

**Option A: Use existing print window pattern** - Open a new window, write HTML, call print()
**Option B: Use jsPDF library** - Generate PDF programmatically
**Option C: Use browser print styles** - Style page for @media print

**Chosen: Option A (Print window pattern)** - Already working in SimpleMathView.vue. Reuses existing code and requires no new dependencies.

### Decision 3: Table structure

**Option A: 12 separate tables** - One `<table>` per multiplication table
**Option B: Single combined table** - All 12 tables in one large table
**Option C: Card layout** - Each table in a visual card container

**Chosen: Option A (Separate tables)** - Matches how multiplication tables are typically taught and printed. Easier to read and print.

## Risks / Trade-offs

- **Large PDF** → Tables may span multiple pages; acceptable for educational use
- **Responsive on mobile** → Grid may need to stack; will use CSS grid with auto-fit
- **Print styling** → Need print-specific CSS to ensure proper page breaks
