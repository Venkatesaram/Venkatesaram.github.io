# Chapter 11: CSS Positioning

The `position` property specifies the type of positioning method used for an element.

## Position Values:
- **static:** Default browser layout. Not affected by top/bottom/left/right properties.
- **relative:** Positioned relative to its normal position. Offsets leave a blank space where the element originally was.
- **absolute:** Positioned relative to the nearest positioned ancestor (non-static). It is removed from the document flow.
- **fixed:** Positioned relative to the viewport. Stays in the exact same location even when scrolling.
- **sticky:** Alternates between relative and fixed based on the scroll position.
- **z-index:** Specifies the stack order of elements. Only works on positioned elements.