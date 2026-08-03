# Chapter 24: CSS Shadows

CSS Shadows create depth, elevation, glowing effects, and realistic UI components.

There are two main types of shadows:

| Shadow Type | Used For |
| :--- | :--- |
| **box-shadow** | Adds shadow around an HTML element |
| **text-shadow** | Adds shadow behind text |

---

## Box Shadow Syntax
```css
box-shadow: horizontal-offset vertical-offset blur-radius spread-radius color inset;
```
Example:
```css
box-shadow: 0 10px 25px rgba(0,0,0,0.2);
```

---

## Text Shadow Syntax
```css
text-shadow: horizontal-offset vertical-offset blur-radius color;
```
Example:
```css
text-shadow: 2px 2px 5px gray;
```

---

## Shadow Workflow Diagram
```
Element
   │
   ▼
box-shadow
   │
   ├── Horizontal Offset
   ├── Vertical Offset
   ├── Blur Radius
   ├── Spread Radius
   ├── Shadow Color
   └── Final Shadow Effect
```

---

## Shadow Parameter Explanation

| Parameter | Description | Example |
| :--- | :--- | :--- |
| **Horizontal Offset** | Moves shadow left/right | `10px` |
| **Vertical Offset** | Moves shadow up/down | `15px` |
| **Blur Radius** | Makes the shadow softer | `25px` |
| **Spread Radius** | Increases/decreases shadow size | `5px` |
| **Color** | Shadow color | `rgba(0,0,0,0.3)` |
| **inset** | Places shadow inside the element | `inset` |

---

## Real-World Applications & Uses

| Effect | Common Use |
| :--- | :--- |
| **Soft Shadow** | Cards, Forms |
| **Heavy Shadow** | Floating Modals |
| **Inset Shadow** | Input Fields |
| **Glow Shadow** | Buttons, Neon UI |
| **Multiple Shadows** | Premium Dashboards |
| **Hover Shadow** | Interactive Cards |
| **Text Shadow** | Logos, Titles |
| **Glass Shadow** | Modern Glassmorphism |
| **Neumorphism** | Soft UI Design |

---

## Student Summary Cheat Sheet
```
CSS Shadows
     │
     ▼
box-shadow ──► Soft / Heavy / Inset / Glow / Multiple / Hover Elevation
     │
     ▼
text-shadow ──► Logos / Titles
     │
     ▼
Modern UI Effects ──► Glassmorphism / Neumorphism / Dashboard Cards
```