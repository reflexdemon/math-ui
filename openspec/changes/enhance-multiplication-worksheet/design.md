## Context

The existing `MultiplicationWorksheetView.vue` displays 144 problems in a flat grid. Users want to:

1. Select specific tables to practice (not all 12 at once)
2. See problems organized by table (one card per table)
3. Get a certificate for excellent scores (90%+)
4. Have inputs become readonly after verification

**Current State:**

- Single flat array of 144 problems
- Grid of problem cards (140px wide each)
- Inputs disabled until Start, enabled after Start
- Results shown after Verify

## Goals / Non-Goals

**Goals:**

- Add table selection UI with checkboxes for tables 1-12 and "Select All"
- Group problems by table with one card per table showing all 12 multipliers
- Make inputs readonly (not just disabled) after Verify
- Add certificate option when score >= 90%
- Update PDF print to only include selected tables

**Non-Goals:**

- Adding user accounts or score persistence
- Customizable multipliers per table (sticking to 1-12)
- Timer customization

## Decisions

### 1. Data Structure: Grouped by Table

**Decision:** Restructure problems to be grouped by table number

**Rationale:** Each table card will show 12 problems (multipliers 1-12). The selected tables determine which cards are displayed.

### 2. Table Selection UI: Checkbox Panel

**Decision:** Add a checkbox panel above the problem cards for table selection

**Rationale:** Simple, familiar UI pattern. Checkboxes allow multi-select and "Select All" is easy to implement with a toggle.

### 3. Certificate Generation: Popup Window

**Decision:** Generate certificate in a new popup window with print capability

**Rationale:** Same pattern as worksheet print. Certificate should be printable for users to keep.

### 4. Input Readonly: Use readonly attribute

**Decision:** Change from `disabled` to `readonly` after verify

**Rationale:** Readonly inputs still show their values (unlike disabled which may not submit). Users can see what they entered.

## Risks / Trade-offs

- **[Risk]** Users may forget to select tables and wonder why no problems show → **Mitigation:** Show helpful message when no tables selected, default to all selected initially
- **[Risk]** Certificate popup may be blocked → **Mitigation:** Inform users about popup blockers
