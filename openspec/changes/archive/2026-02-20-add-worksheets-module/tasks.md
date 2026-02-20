## 1. Create Worksheets Module Structure

- [x] 1.1 Create `src/views/worksheets/` directory
- [x] 1.2 Create WorksheetsIndex.vue (router outlet component)
- [x] 1.3 Create WorksheetsView.vue (landing page component)

## 2. Update Router Configuration

- [x] 2.1 Add nested `/worksheets` route in `src/router/index.ts`
- [x] 2.2 Add child route for `/worksheets/simple-math` pointing to existing SimpleMathView
- [x] 2.3 Keep existing `/simple-math` route for backward compatibility

## 3. Create Worksheets Landing Page

- [x] 3.1 Add h1 heading "Work Sheets" with proper aria-label
- [x] 3.2 Create worksheet list with names and descriptions
- [x] 3.3 Make each worksheet item clickable with router-link
- [x] 3.4 Apply PrimeVue Aura theme styling
- [x] 3.5 Use semantic HTML (nav, main, section)

## 4. Update Navigation Menu

- [x] 4.1 Modify AppTopbar.vue to add "Work Sheets" parent menu item
- [x] 4.2 Add sub-items: "All Worksheets" and "Simple Math Problems"
- [x] 4.3 Use PrimeVue Menubar nested menu structure
- [x] 4.4 Add aria-labels to menu items for accessibility

## 5. Accessibility Compliance (WCAG 2.1)

- [x] 5.1 Verify heading hierarchy (h1 for page title, h2 for list items)
- [x] 5.2 Ensure keyboard navigation works on all interactive elements
- [x] 5.3 Add role="navigation" and aria-label to nav elements
- [x] 5.4 Verify color contrast meets 4.5:1 ratio

## 6. Testing and Verification

- [x] 6.1 Test `/worksheets` route loads landing page
- [x] 6.2 Test clicking worksheet navigates to correct page
- [x] 6.3 Test menu dropdown works correctly
- [x] 6.4 Verify existing `/simple-math` route still works
- [x] 6.5 Run accessibility audit (axe-core or similar)
