# Chapter 15: CSS Grid Layout

Grid Layout is a 2-dimensional grid-based design system that manages alignments of columns and rows at the same time.

## Container Properties:
- **display: grid:** Activates grid layout rendering.
- **grid-template-columns:** Configures the width of columns (`repeat()`, `minmax()`, `auto-fit`, `auto-fill`).
- **grid-template-rows:** Configures the height of rows.
- **gap:** Space gaps between columns/rows.
- **grid-template-areas:** Maps out grid cells visually into named areas (e.g. Header, Sidebar, Main, Footer).
- **justify-items / align-items:** Align items horizontally or vertically inside their grid cells.

## Item Properties:
- **grid-column:** Directs child items to span across columns (e.g. `grid-column: span 2` or `grid-column: 1 / 3`).
- **grid-row:** Directs child items to span vertically across rows (e.g. `grid-row: span 3`).