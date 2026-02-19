## Context

The home page (`HomeView.vue`) currently provides quick links to "Start Practicing" (simple-math) and "Learn More" (about). The multiplication tables feature exists at route `/multiplication-tables` but is not linked from the home page, making it difficult for users to discover.

## Goals / Non-Goals

**Goals:**

- Add a visible link to the multiplication tables from the home page
- Update the overview content to mention multiplication tables as a feature
- Make the multiplication tables easily discoverable from the landing screen

**Non-Goals:**

- Modifying the multiplication tables view itself
- Adding authentication or user preferences
- Changing the overall app layout or navigation structure

## Decisions

1. **Link Placement**: Add the multiplication tables link in the "Quick Links" section alongside existing links
   - Alternative considered: Add as a separate card in the overview - rejected in favor of keeping quick links consolidated

2. **Button Style**: Use a distinct button style to differentiate from "Start Practicing"
   - Using `severity="info"` with outlined style to differentiate from the primary "Start Practicing" action

3. **Content Update**: Add multiplication tables mention to the features list in the Overview card
   - This increases discoverability beyond just the button

## Risks / Trade-offs

- Minimal risk - this is a straightforward UI change
- No migration needed - simple file edit
- No rollback concerns - easy to revert if needed
