# Chapter 08: CSS Box Model

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

## Box Model Layers:
1. **Content**: The text/images of the tag.
2. **Padding**: Transparent spacing around content inside borders.
3. **Border**: The frame bounding the padding and content.
4. **Margin**: Transparent spacing outside borders to separate adjacent blocks.

## Width and Height calculations:
- `content-box` (default): `Total Width = width + padding-left + padding-right + border-left + border-right`
- `border-box` (modern standard): `Total Width = width` (padding and borders shrink content area).