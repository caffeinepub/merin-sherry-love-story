# Merin & Sherry Love Story

## Current State
An interactive love page for Merin with floating hearts, interactive buttons (How much do I love you, Send a Heart, Reasons I love you, Play Our Song), a big heart tap button, and a love letter.

## Requested Changes (Diff)

### Add
- A new full-screen section titled "5000 Reasons I Love You" displayed as a beautiful scrollable list/grid
- 5000 reasons generated programmatically across themed categories: personality traits, virtual connection/online moments, voice/texts/calls, dreams of the future, random sweet things, not having met yet but already feeling deep love
- A search/filter bar to search through the reasons
- A counter showing total reasons (5000)
- Smooth reveal animations as reasons scroll into view
- A navigation button from the hero area to jump to the reasons section

### Modify
- Hero section: add a "See 5000 Reasons" button that scrolls to the reasons section
- Keep all existing interactive buttons and love letter

### Remove
- Nothing removed

## Implementation Plan
1. Generate array of 5000 reasons across categories using a helper function
2. Add a reasons section after the main interactive cards
3. Implement virtualized or paginated list for performance (show 50 at a time, load more)
4. Add search input to filter reasons
5. Add scroll-to section button in hero
6. Animate reason cards appearing with staggered motion
