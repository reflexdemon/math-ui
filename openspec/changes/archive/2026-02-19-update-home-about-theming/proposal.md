## Why

The Home Page and About Page have inconsistent theming compared to the rest of the application (e.g., SimpleMathView). They lack proper dark mode support and responsive container handling that matches the application's standard theming approach using PrimeVue CSS variables.

## What Changes

- Update HomeView.vue to use consistent PrimeVue theming with proper dark mode support
- Update AboutView.vue to use consistent PrimeVue theming with proper dark mode support
- Ensure both pages follow WCAG 2.2 accessibility guidelines for color contrast
- Fix responsive container issues to prevent components from growing outside intended scope

## Capabilities

### New Capabilities

- None

### Modified Capabilities

- `home-page-display`: Update theming and accessibility
- `about-page-display`: Update theming and accessibility

## Impact

- **Frontend**: Updates to HomeView.vue and AboutView.vue
- **Accessibility**: WCAG 2.2 compliance for color contrast
- **Responsiveness**: Proper container constraints and mobile layout
