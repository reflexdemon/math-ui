## Why

The current multiplication table PDF outputs tables across multiple pages, which is not ideal for classroom printing. Additionally, the plain design lacks visual appeal for children. The PDF should be redesigned to fit all 12 tables on a single page with a kid-friendly appearance.

## What Changes

- Optimize PDF layout to fit all 12 multiplication tables on a single page
- Reduce spacing between tables
- Decrease font size for compact display
- Add borders/outlines around each table
- Add decorative emojis to the PDF for kid-friendly visual appeal

## Capabilities

### New Capabilities

- `pdf-single-page-layout`: Optimize PDF to fit all 12 tables on one page
- `pdf-kid-friendly-styling`: Add emojis and kid-friendly visual elements

### Modified Capabilities

- `multiplication-tables-pdf-export`: Modified to output single-page, kid-friendly PDF

## Impact

- Modified: `src/views/MultiplicationTablesView.vue` - update downloadPdf function
