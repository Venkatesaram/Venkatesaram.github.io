# Chapter 03: CSS Selectors

CSS Selectors are used to target HTML elements for styling. This chapter covers the 25 most essential selectors in CSS3.

## Universal & Basic Selectors:
- **Universal (`*`):** Targets every element on the page.
- **Element Selector:** Targets tags directly (e.g., `p`, `h1`).
- **Class (`.class`):** Styles elements sharing a specific class.
- **ID (`#id`):** Styles a single unique element with a specific ID.
- **Group Selector (`,`):** Groups selectors together to apply the same style rules.

## Combinators:
- **Descendant (space):** Selects nested elements (e.g. `.parent p`).
- **Child (`>`):** Selects direct children (e.g. `.box > p`).
- **Adjacent Sibling (`+`):** Selects an element immediately after another.
- **General Sibling (`~`):** Selects all sibling elements after another.

## Attributes & Pseudo-Classes:
- **Attribute Selector (`[type]`):** Styles elements based on attribute presence.
- **Attribute Equals (`[href="value"]`):** Styles elements with exact attribute value matches.
- **Structural Pseudo-Classes:** `:first-child`, `:last-child`, `:nth-child(n)`, `:empty`.
- **User Action & State Pseudo-Classes:** `:hover`, `:focus`, `:checked`, `:disabled`, `:enabled`.
- **Negation Pseudo-Class:** `:not(selector)`.

## Pseudo-Elements:
- **::before / ::after:** Inserts virtual content before or after element content.
- **::first-letter / ::first-line:** Styles the initial letter or the initial line of text.