# Chapter 14: CSS Flexbox Layout

Flexbox (Flexible Box Layout) is a 1-dimensional layout module that manages spacing and alignment of child items inside a parent container.

## Container Properties:
- **flex-direction:** Defines the main axis flow direction (`row`, `column`).
- **justify-content:** Aligns items horizontally along the main axis (`flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`).
- **align-items:** Aligns items vertically along the cross axis (`flex-start`, `center`, `flex-end`).
- **flex-wrap:** Allows items to wrap onto multiple rows if space is limited (`wrap`, `nowrap`).
- **gap:** Directs row/column gap spacings easily without margins.

## Item Properties:
- **flex-grow:** Allows items to grow to claim available workspace shares.
- **flex-shrink:** Directs if/how items shrink when parent container space wraps.
- **flex-basis:** Sets the initial starting length of the item.
- **align-self:** Overrides vertical alignment rules individually for specific child components.