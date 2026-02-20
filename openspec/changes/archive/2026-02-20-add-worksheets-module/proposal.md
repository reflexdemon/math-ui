## Why

Users currently navigate directly to individual math worksheets (like Simple Math Problems) without a centralized place to discover all available worksheets. Adding a "Work Sheets" module with a landing page provides a better user experience by organizing worksheets as a coherent module and giving users a navigation hub to see what's available.

## What Changes

- Create a new "Work Sheets" module with a landing page (`/worksheets`)
- Move Simple Math View inside the Work Sheets module structure
- Update the app-level menu to add a "Work Sheets" parent menu item with sub-items
- Update the router to reflect the new module structure with nested routes
- Apply the application's PrimeVue Aura theme consistently across all new and modified components
- Ensure all new UI components meet WCAG 2.1 accessibility standards

## Capabilities

### New Capabilities

- `worksheets-module`: Core module structure for organizing worksheets
- `worksheets-landing`: Landing page listing all available worksheets
- `worksheet-navigation`: Updated menu/router to support module navigation

### Modified Capabilities

- (none - this is a new feature, no existing spec requirements change)

## Impact

- **Code**: New views folder structure for worksheets module, updated router, modified AppTopbar
- **Routes**: New `/worksheets` route, existing `/simple-math` moved under module
- **UI**: Menu restructuring, theming via PrimeVue Aura preset
- **Accessibility**: WCAG 2.1 compliance for all new components
