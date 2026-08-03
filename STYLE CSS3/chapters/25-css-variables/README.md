# Chapter 25: CSS Variables (Custom Properties)

CSS Variables (also called **Custom Properties**) are reusable values that allow you to store colors, spacing, fonts, sizes, and other CSS values in one place.

---

## Why Use CSS Variables?
- **Write cleaner CSS:** Define colors once and reuse them.
- **Easy maintenance:** Update a brand color in one place and the entire website adapts automatically.
- **Dynamic theme switching:** Easily configure Light and Dark modes.

---

## Variable Workflow
```
Create Variable
      │
      ▼
Store Value in :root (Global Scope)
      │
      ▼
Retrieve using var()
      │
      ▼
Apply to Elements (Colors, Fonts, Radius)
      │
      ▼
Update variable value once ──► Entire site updates!
```

---

## Variable Scope
| Scope | Description | Example Selector |
| :--- | :--- | :--- |
| **Global Scope** | Available everywhere on the page | `:root` |
| **Local Scope** | Scoped strictly to one selector | `.local-box` |
| **Theme Overrides** | Re-defining variables locally | `.dark-theme` |

---

## var() Function Syntax
Retrieve variables using the `var()` syntax:
```css
/* Standard global variable fetch */
background-color: var(--primary);

/* Fallback mechanism if variable is missing */
background-color: var(--unknown-color, #10b981);
```

---

## Theme Switching Workflow
```
:root (Default variables)
   │
   ▼
Components (var() variables)
   │
   ▼
Theme selection selector (.dark-theme)
   │
   ▼
Redefine variables locally ──► All child elements adapt!
```

---

## Real-world Design Tokens Reference Table
Common tokens stored in variables:
| Variable Token | Purpose |
| :--- | :--- |
| **--primary** | Core brand color |
| **--secondary** | Secondary layout structures |
| **--spacing** | Padding and margin distances |
| **--border-radius** | Rounded container shapes |
| **--box-shadow** | Element depth elevations |
| **--transition** | Animation curve speeds |

---

## Student Summary Cheat Sheet
- **Declaration:** Prefix custom properties with double dashes (`--variable-name: value`).
- **Use:** Wrap in the var function (`var(--variable-name)`).
- **Fallback values:** Add a fallback argument (`var(--name, fallback-value)`) to keep layouts robust.
- **Centralized variables:** Defining variables in `:root` ensures children can inherit them globally.