# Merin & Sherry — 8000 Reasons

## Current State
Existing project has a cinematic dark-navy midnight-themed site with 5,000 reasons I love Merin, search bar, pagination, and various romantic sections.

## Requested Changes (Diff)

### Add
- 8,000 unique reasons organized into ~20 themed categories
- New aesthetic: warm botanical editorial — cream/ivory background, terracotta/rust, sage green, dusty rose, modern serif + handwritten fonts. Completely different from the dark navy style.
- Pure display layout — no interactive buttons anywhere (no search, no filters, no click actions)
- Reasons laid out in a visually rich masonry/grid style with varied card sizes
- Each reason uses unique vocabulary — no repeated keywords in adjacent cards or nearby rows
- Decorative botanical/floral motifs via CSS (leaves, petals, botanical line-art using pure CSS/SVG)
- Hero section with large title "8,000 Reasons I Love You, Merin" in warm editorial style
- Smooth CSS scroll-reveal animations only (no JS click interactions)
- Footer with a closing love note

### Modify
- Replace entire App.tsx with new aesthetic and 8,000 reasons
- Replace index.css with new botanical color palette and typography

### Remove
- All dark navy/midnight styling
- Search bar and filter functionality
- All interactive buttons
- Previous 5,000 reasons data

## Implementation Plan
1. Generate 8,000 reasons across 20 themed categories in a data file (reasons.ts)
   - Categories: his voice, his care, his humor, his patience, distance/longing, his texts, his dreams, his kindness, his mind, his quirks, late night calls, the future, small things, his heart, trust, his support, his curiosity, his warmth, his loyalty, his everything
   - Each reason is unique, no duplicate keywords adjacent to each other
   - Shuffle reasons so categories interleave naturally
2. Build App.tsx with masonry-style grid, scroll-reveal via Intersection Observer, no buttons
3. Style with botanical editorial theme in index.css
