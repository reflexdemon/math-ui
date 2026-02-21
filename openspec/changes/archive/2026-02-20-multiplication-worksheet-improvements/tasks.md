## 1. Create Services

- [x] 1.1 Create `services/MultiplicationProblem.ts` with Problem and TableGroup types and generateProblems function
- [x] 1.2 Create `services/TableProvider.ts` with generateTables function and localStorage persistence for table selections
- [x] 1.3 Create `services/PrintService.ts` with printWorksheet and downloadPdf functions

## 2. Update Toolbar Navigation

- [x] 2.1 Add "Multiplication Worksheet" menu item to AppTopbar.vue under Work Sheets dropdown
- [x] 2.2 Verify toolbar link navigates to `/worksheets/multiplication-tables`

## 3. Update Home Page Deep Links

- [x] 3.1 Update HomeView.vue "Start Practicing" link to use `/worksheets/simple-math`
- [x] 3.2 Verify all links use correct context paths

## 4. Update Multiplication Worksheet View

- [x] 4.1 Import and use MultiplicationProblem.ts for types and problem generation
- [x] 4.2 Import and use TableProvider.ts for table selection persistence
- [x] 4.3 Import and use PrintService.ts for print functionality
- [x] 4.4 Add disabled state to Start button when no tables selected
- [x] 4.5 Add disabled state to Print button when no tables selected
- [x] 4.6 Add disabled attribute to input fields, enabled only when isStarted is true
- [x] 4.7 Clear input values and disable inputs when Reset is clicked

## 5. Update Multiplication Tables View

- [x] 5.1 Import and use TableProvider.ts for generateTables function
- [x] 5.2 Import and use PrintService.ts for PDF download functionality

## 6. Verify Implementation

- [x] 6.1 Test toolbar navigation to Multiplication Worksheet
- [x] 6.2 Test table selection persistence across page reloads
- [x] 6.3 Test Start/Print button disabled state with no tables selected
- [x] 6.4 Test input field enabled/disabled states through worksheet lifecycle
- [x] 6.5 Test print functionality for both worksheets
- [x] 6.6 Test all home page links navigate correctly
