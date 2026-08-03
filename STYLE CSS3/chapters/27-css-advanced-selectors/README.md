# Chapter 27: CSS Advanced Selectors

Advanced selectors allow you to build precise layout logic based on element relationships, data attributes, modifiers, and child hierarchies.

---

## 1. Advanced Attribute Selectors
Attribute operators match substrings inside element attributes:
- **Starts with (`^=`):** Targets values beginning with the specified string.
- **Ends with (`$=`):** Targets values ending with the specified string.
- **Contains (`*=`):** Targets values containing the substring anywhere.

```css
/* Match secure URLs */
a[href^="https://"] { color: green; }

/* Match file type links */
a[href$=".pdf"] { color: red; }
```

---

## 2. Selector Chaining & Multiple Classes
Connecting classes without spaces selects elements that contain **all** listed properties simultaneously.

```css
/* Chained Class Selector */
.badge.primary.outline {
  border-color: indigo;
}
```

---

## 3. Structural Pseudo-Classes
Fine-tune elements depending on their index sequence or parent composition:
- **:nth-child(n):** Target elements based on index formulas (e.g. `even`, `odd`, `3n+1`).
- **:nth-of-type(n):** Select elements by type sequence, skipping other siblings.
- **:first-of-type / :last-of-type:** Style the first or last instance of a tag inside a parent block.
- **:only-child:** Styles an element only if it has zero sibling elements.
- **:only-of-type:** Styles an element if it is the sole instance of that tag type inside its parent.

---

## 4. Modern Logical Combinators

### :has() Parent Selector
Targets a parent selector based on whether it contains matching descendants.
```css
/* Style card if it contains a warning badge child */
.card:has(.warning-badge) {
  border-color: red;
}
```

---

### :is() vs :where() Grouping Selectors
Reduces repetitive CSS selectors by grouping queries.
- **:is():** Evaluates specificity using its most specific argument.
- **:where():** Sets selector specificity scoring to zero, making overrides effortless.

```css
/* Shortened grouping */
:is(header, main, footer) p {
  line-height: 1.5;
}
```

---

### :not() Exclusions
Excludes elements that match specified conditions.
```css
/* Styles buttons that do not have class disabled or class special */
.button:not(.disabled):not(.special) {
  background: blue;
}
```

---

## Selectors Spec Cheat Sheet

| Selector Pattern | Type / Target | Specificity Match |
| :--- | :--- | :--- |
| `div.badge` | Chained Class | High (Class + Element) |
| `[data-role="admin"]` | Data Attribute | Moderate (Attribute selector) |
| `li:nth-child(even)` | Structural Pseudo-class | Moderate (Pseudo-class) |
| `p:first-of-type` | Type Specific Match | Moderate |
| `card:has(button)` | Parent Containment | High |
| `section :where(h1, h2)` | Specificity Zero Group | Low (Strictly targets section) |
| `button:not(.btn-link)` | Negation Exclusions | Moderate |

---

## Student Learning Outcomes
After completing this chapter, students will be able to:
1. Construct custom **Attribute matches** to identify files and secure URLs automatically.
2. Chain multiple **badge classes** together to prevent style bleeding.
3. Formulate **:nth-child() zebra patterns** for dashboard tables.
4. Use **:has()** parent selectors to style sections based on notification warnings.
5. Apply **:is()** and **:where()** selectors to structure clean styles.