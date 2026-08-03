# Chapter 21: CSS Transitions

CSS Transitions allow you to change property values smoothly (from one value to another) over a given duration.

---

## What is a Transition?
A **Transition** is the smooth animation between two states of an element (e.g. normal state to hover state). Instead of an instant style snap, the browser calculates the middle frames over time.

---

## Core Transition Properties

| Property | Purpose | Example |
| :--- | :--- | :--- |
| **transition-property** | Which CSS property animates | `background-color`, `all`, `width` |
| **transition-duration** | The speed of the animation | `0.5s`, `300ms` |
| **transition-delay** | Time to wait before animation starts | `1s`, `2s` |
| **transition-timing-function** | The acceleration curve (speed curve) | `ease`, `linear`, `ease-in`, `ease-out` |
| **transition** | Shorthand property for all of the above | `all 0.5s ease 0.2s` |

---

## Transition Workflow

```
Normal State
     ↓
User Hover (or state change)
     ↓
Property Changes Triggered
     ↓
Transition Delay (if any)
     ↓
Timing Function Applied (Acceleration)
     ↓
Duration Completes
     ↓
Final State Reached
```

---

## Transition Shorthand Rule
Instead of defining every property individually, you can use the shorthand:
```css
/* property | duration | timing-function | delay */
transition: all 0.5s ease 0.3s;
```

---

## Student Summary Cheat Sheet
- **transition-property:** Specifies the attributes to transition.
- **transition-duration:** Defines how long the change takes.
- **transition-delay:** Creates a wait pause before starting.
- **transition-timing-function:** Alters the speed curve (e.g., bounce with `cubic-bezier`).
- **Transform + Transition:** Combining transitions with `transform` creates modern, lightweight GPU-accelerated UI animations.