# Chapter 28: CSS Specificity & Cascade

Specificity determines which CSS rules are applied by the browser when multiple conflicting declarations target the same HTML element.

---

## The CSS Cascade Order
When conflict arises, the browser resolves it using the following hierarchy:
```
Source Origin (User vs Author vs Browser Defaults)
        │
        ▼
Cascade Layers (@layer priority order)
        │
        ▼
Specificity Score weight (Inline ──► ID ──► Class ──► Element)
        │
        ▼
Source Order (Last declaration written in sheet wins)
```

---

## Specificity Score Weight System
The browser assigns numerical weights to determine priority:

| Selector Type | Point Score | Selector Example |
| :--- | :--- | :--- |
| **Inline Styles** | **1000 points** | `style="color: red;"` |
| **IDs** | **100 points** | `#box-id` |
| **Classes, Attributes & Pseudo-classes** | **10 points** | `.box-class`, `[disabled]`, `:hover` |
| **Elements & Pseudo-elements** | **1 point** | `div`, `p`, `::before` |

---

## Specificity Score Calculation Examples
Conflicting selectors are calculated using simple addition:

- `div p` ──► 2 Elements = **2 points**
- `.card p` ──► 1 Class + 1 Element = **11 points**
- `#sidebar .card p` ──► 1 ID + 1 Class + 1 Element = **111 points**
- `#sidebar .card .btn:hover` ──► 1 ID + 2 Classes + 1 Pseudo-class = **130 points**

---

## Overriding Specificity

### 1. The !important Override
Appending `!important` to a declaration tells the browser to override all specificity rules (including inline style attributes). It should be used with caution as it disrupts the natural cascade flow.

```css
.button {
  background-color: blue !important; /* Overrides inline background-color styles! */
}
```

---

### 2. Modern CSS Cascade Layers (@layer)
Configure order-of-origin priorities for styled selectors. Layer definitions determine precedence, irrespective of selector specificities inside them.

```css
/* Define layer order (highest layer wins) */
@layer base, theme, custom;

@layer base {
  .button { background: red; } /* Lowest priority layer */
}
@layer custom {
  .button { background: blue; } /* Highest priority layer - Wins! */
}
```

---

## CSS Inheritance vs Non-Inherited
- **Inherited Properties:** Properties that automatically cascade down to children (e.g. `color`, `font-family`, `line-height`).
- **Non-Inherited Properties:** Properties that remain strictly on the parent element (e.g. `border`, `padding`, `margin`, `width`).

---

## Specificity Management Best Practices
- **Never use IDs for styling:** Keep ID selectors strictly for JS anchors. Styling with IDs makes rule overrides extremely difficult.
- **Avoid !important:** Refactor CSS rules and refine class nesting structures instead of resorting to `!important` patches.
- **Keep selectors flat:** Prefer single classes (`.card-btn`) over nested structures (`.sidebar .card div ul li button`).