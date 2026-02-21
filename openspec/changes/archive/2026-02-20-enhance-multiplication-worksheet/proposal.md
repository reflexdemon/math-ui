## Why

The current multiplication worksheet displays all 144 problems in a flat grid, which can be overwhelming for students. Users need the ability to select specific tables to practice, receive a certificate for excellent performance (90%+), and have a more organized UI with one table per card.

## What Changes

- Add table selection UI with checkboxes for tables 1-12 plus "Select All" option
- Restructure the problem grid to group problems by table (one card per table)
- Update PDF print to only include selected tables
- After verify: make input fields readonly
- Add certificate generation for scores >= 90% with trophy icon and celebration display

## Capabilities

### New Capabilities

- None (enhancing existing multiplication-worksheet capability)

### Modified Capabilities

- `multiplication-worksheet`: Enhanced with table selection, grouped cards, readonly post-verify, certificate for 90%+

## Impact

- Modify: `src/views/worksheets/MultiplicationWorksheetView.vue`
- No new routes or dependencies required
