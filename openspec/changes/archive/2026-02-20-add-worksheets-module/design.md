## Context

The application currently has individual math worksheets (Simple Math Problems, Multiplication Tables) accessible directly via top-level routes. There is no unified module or landing page to browse available worksheets. The application uses Vue 3 with PrimeVue components and the Aura theme preset.

## Goals / Non-Goals

**Goals:**

- Create a "Work Sheets" module with a landing page at `/worksheets`
- Organize worksheets under a consistent module structure
- Update navigation to include a parent "Work Sheets" menu with sub-items
- Apply consistent PrimeVue Aura theming across all components
- Ensure WCAG 2.1 accessibility compliance

**Non-Goals:**

- Refactoring existing worksheet logic or business logic
- Adding new worksheet types (only organizing existing ones)
- Backend changes or API development
- Mobile-specific responsive redesign (use existing responsive patterns)

## Decisions

1. **Module Structure**: Create a `worksheets` folder under `views/` containing:
   - `WorksheetsView.vue` - The landing page component
   - `WorksheetsIndex.vue` - Router outlet for nested routes
   - Individual worksheet components remain in place but accessed via the module

   _Rationale_: Follows Vue 3 conventions for route grouping while maintaining existing component functionality.

2. **Router Structure**: Use nested routes with `/worksheets` as parent:

   ```typescript
   /worksheets (WorksheetsIndex.vue - router-view)
     /worksheets (WorksheetsView.vue - landing)
     /worksheets/simple-math (existing SimpleMathView)
   ```

   _Rationale_: Allows future worksheets to be added under the same parent route without additional menu changes.

3. **Menu Update**: Add dropdown menu item:

   ```
   Work Sheets (parent)
   ├── All Worksheets (→ /worksheets)
   ├── Simple Math Problems (→ /worksheets/simple-math)
   ```

   _Rationale_: PrimeVue Menubar supports nested items natively; maintains existing routes as fallback.

4. **Theming**: Use PrimeVue Aura theme via existing `main.ts` configuration. New components will inherit `var(--p-*)` CSS variables automatically.

   _Rationale_: No custom theme needed; leverage existing PrimeVue integration.

5. **Accessibility**:
   - Use semantic HTML (`<nav>`, `<main>`, `<h1>`-`<h2>`)
   - PrimeVue components already have ARIA attributes
   - Add `aria-label` to navigation elements
   - Ensure keyboard navigation works for all interactive elements
   - Maintain color contrast ratios ≥ 4.5:1

   _Rationale_: WCAG 2.1 AA compliance requires these considerations from the start.

## Risks / Trade-offs

- **Backward Compatibility**: Existing direct routes (`/simple-math`) should remain functional as fallback.
  - _Mitigation_: Keep existing routes alongside new ones; update menu to point to new routes.

- **Route Conflicts**: Adding `/worksheets` route might conflict if there's an existing view.
  - _Mitigation_: Verify no existing `/worksheets` route; use nested routing pattern.

- **Breaking User Bookmarks**: Users with bookmarks to `/simple-math` may need updating.
  - _Mitigation_: Add redirect from `/simple-math` to `/worksheets/simple-math` or keep both routes active.
