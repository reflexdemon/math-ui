## Context

The current multiplication PDF uses a 3-column grid with significant spacing between tables, causing tables to span multiple pages. Need to optimize for single-page output with kid-friendly styling.

## Goals / Non-Goals

**Goals:**

- All 12 multiplication tables on a single PDF page
- Reduce font size to ~10-12px for compact fit
- Minimize gap between tables (5-10px)
- Add borders around each table
- Add decorative emojis in header and around content
- Maintain readability for children

**Non-Goals:**

- Change table data or calculations
- Add interactive features
- Support landscape mode

## Decisions

### Decision 1: Grid layout for single page

**Option A: 4-column grid** - 3 tables per row × 4 rows
**Option B: 6-column grid** - 2 tables per row × 6 rows (tight fit)
**Option C: Flexible grid with CSS**

**Chosen: Option A (4-column grid)** - Best balance of space usage and readability. Each table is 3 columns × 12 rows, so 4-column layout works well.

### Decision 2: Font size and spacing

**Chosen**:

- Font size: 11px for table content, 14px for headers
- Cell padding: 2px vertical, 4px horizontal
- Gap between tables: 8px
- Table border: 1px solid #333

### Decision 3: Emoji placement

**Chosen**:

- Header: 🌟 ⭐ ✨ "Multiplication Tables" ✨ ⭐ 🌟
- Subheader: 📚 "Times Tables 1-12" 📚
- Use standard Unicode emojis that render well

## Risks / Trade-offs

- **Text may be too small** → Users can zoom PDF; kid-friendly appearance prioritized
- **Print quality** → 11px font should print legibly on letter size
- **Some tables may wrap** → Can adjust to 6-column if 4-column doesn't fit
