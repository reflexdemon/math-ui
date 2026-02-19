## ADDED Requirements

### Requirement: PDF has kid-friendly visual styling

The PDF SHALL include decorative elements to make the output appealing to children.

#### Scenario: PDF includes decorative emojis

- **WHEN** PDF is generated
- **THEN** the page includes kid-friendly emojis (stars, pencils, numbers, math symbols)
- **AND** emojis are placed decoratively around the page header

#### Scenario: Tables have borders

- **WHEN** PDF is generated
- **THEN** each multiplication table has a visible border/outline
- **AND** borders help visually separate each table
