# Chapter 23: CSS Animations

CSS Animations allow an element to **change its appearance or position automatically over time** without JavaScript.

Animations make websites feel modern, interactive, and engaging.

---

## Animation Workflow

```
Create @keyframes
        │
        ▼
Assign animation-name
        │
        ▼
Set animation-duration
        │
        ▼
Choose timing function
        │
        ▼
Set delay (optional)
        │
        ▼
Choose iteration count
        │
        ▼
Choose direction
        │
        ▼
Browser Plays Animation
```

---

## Animation Properties Table

| Property | Purpose | Example |
| :--- | :--- | :--- |
| **animation-name** | Animation name | `pulse` |
| **animation-duration** | Speed | `2s` |
| **animation-delay** | Wait before start | `1s` |
| **animation-timing-function** | Speed curve | `ease` |
| **animation-iteration-count** | Number of repeats | `infinite` |
| **animation-direction** | Forward / Reverse | `alternate` |
| **animation-fill-mode** | Keep final state | `forwards` |
| **animation-play-state** | Pause / Run | `paused` |
| **animation** | Shorthand | `pulse 2s ease infinite` |

---

## @keyframes Workflow & Timeline
@keyframes specify the styles for the element at various times during the animation timeline.
```
0% ────► 25% ────► 50% ────► 75% ────► 100%
(Start)                            (End)
```

---

## Animation Shorthand Rule
Instead of defining every property individually, you can use the shorthand:
```css
/* name | duration | timing-function | delay | iteration-count | direction | fill-mode */
animation: pulse 2s ease 1s infinite alternate forwards;
```

---

## Real-world Animation Applications

| Animation | Used In |
| :--- | :--- |
| **Pulse** | Notification badges, glowing beacons |
| **Spinner** | Loading screens, processing icons |
| **Bounce** | Call-to-action buttons |
| **Fade In** | Page entrance layouts, scrolls |
| **Slide** | Sidebar slide-in drawers |
| **Rotate** | Refresh buttons, loading spins |
| **Shake** | Input error validation states |
| **Floating** | Hero illustration indicators |
| **Progress Bar** | Loading tracks, file uploads |
| **Typing** | Chat interface typing simulations |
| **Loading Dots** | AI helper/agent thinking tracks |
| **Heart Beat** | Like and favorite triggers |
| **Bell Shake** | Notification alarm systems |
| **Card Hover** | Engaging e-commerce card lifts |
| **Button Press** | Tactile button click feedbacks |

---

## Student Workflows

### Fade In
```text
Opacity: 0
     ↓
25%
     ↓
50%
     ↓
75%
     ↓
Opacity: 1
```

---

### Slide From Left
```text
Left Side
    ↓
Center
    ↓
Right Side
    ↓
Center
    ↓
Left Side
```