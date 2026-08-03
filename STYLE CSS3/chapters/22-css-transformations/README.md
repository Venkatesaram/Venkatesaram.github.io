# Chapter 22: CSS Transformations

CSS Transformations allow you to change the shape, size, and position of HTML elements in 2D or 3D space.

---

## Visual Workflow Diagram

```
Original Element
        │
        ▼
transform Property
        │
        ▼
Choose Transform Function
        │
        ├── rotate()
        ├── scale()
        ├── translate()
        ├── skew()
        ├── rotateX()
        ├── rotateY()
        ├── rotateZ()
        └── transform-origin
        │
        ▼
Browser Calculates New Position
        │
        ▼
Render Transformed Element
```

---

## Core CSS Transform Functions Reference Table

| Transform Function | Purpose | Example | Real-world Use |
| :--- | :--- | :--- | :--- |
| **rotate()** | Rotate element | `transform: rotate(45deg)` | Refresh/loading indicators |
| **scale()** | Zoom factor | `transform: scale(1.2)` | Image hover zoom |
| **translateX()** | Move horizontally | `transform: translateX(60px)` | Sidebar menus |
| **translateY()** | Move vertically | `transform: translateY(-20px)` | Card lift-up transitions |
| **translate()** | Move X & Y | `transform: translate(40px,-20px)` | Custom alignments |
| **skewX()** | Horizontal slant | `transform: skewX(20deg)` | Diagonal decorative dividers |
| **skewY()** | Vertical slant | `transform: skewY(20deg)` | Slanted layouts |
| **skew()** | Both directions | `transform: skew(15deg,10deg)` | Dynamic decorative boxes |
| **rotateX()** | 3D X-axis rotation | `transform: rotateX(180deg)` | Flip card panels |
| **rotateY()** | 3D Y-axis rotation | `transform: rotateY(180deg)` | 3D flashcards |
| **rotateZ()** | Z-axis rotation | `transform: rotateZ(180deg)` | Loading spinners |
| **transform-origin** | Change pivot point | `transform-origin: left top` | Door hinge effects |
| **Multiple Transforms** | Combine effects | `transform: translate() rotate()` | Advanced custom animations |

---

## Student Learning Flow
1. **rotate()** - Standard rotation.
2. **scale()** - Size adjustment.
3. **translate()** - Positional movement.
4. **skew()** - Shearing and slanting.
5. **3D Rotations** - Rotating in three dimensions (X, Y, and Z).
6. **transform-origin** - Shifting the pivot point of translation.
7. **Multiple Transforms** - Chaining rules sequentially.
8. **Real-world UI Effects** - Lift cards, pressable buttons, image zooms, and 3D card flips.