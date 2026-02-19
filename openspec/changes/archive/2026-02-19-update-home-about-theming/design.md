## Context

The application uses PrimeVue theming with CSS variables like `var(--p-surface-*)`. SimpleMathView demonstrates the standard theming approach with proper dark mode support using `.p-dark` selector. HomeView and AboutView are inconsistent:

- Both use `var(--p-surface-100)` background and `var(--p-surface-900)` text
- Both lack `.p-dark` mode support for cards and content
- AboutView has inline box-shadow, HomeView doesn't (inconsistent)
- Neither has responsive container max-width constraints like SimpleMathView

## Goals / Non-Goals

**Goals:**

- Add `.p-dark` mode support to match SimpleMathView pattern
- Ensure consistent card styling between HomeView and AboutView
- Add responsive container constraints to prevent overflow
- Verify WCAG 2.2 AA color contrast compliance

**Non-Goals:**

- Changing the overall layout or structure of pages
- Modifying content or functionality
- Adding new features

## Decisions

1. **Dark Mode Pattern**: Follow SimpleMathView's `.p-dark` pattern for cards and content elements
   - Alternative: Use PrimeVue's built-in theme - rejected because app uses custom CSS variables

2. **Card Styling**: Move inline box-shadow from AboutView to shared CSS class
   - Ensures consistency across both pages

3. **Container Constraints**: Use `max-width` and proper width constraints similar to SimpleMathView
   - Uses `width: 100%` with `max-width` on containers

4. **Color Contrast**: Use existing PrimeVue surface colors which already meet WCAG 2.2 AA
   - `p-surface-900` on `p-surface-100` provides sufficient contrast
   - Will verify during implementation

## Risks / Trade-offs

- Minimal risk - straightforward CSS updates
- No migration needed - same-day deployment
- No rollback concerns - easy to revert CSS changes
