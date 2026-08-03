# Chapter 16: CSS Media Queries & Responsive Design

In this chapter, you will learn how to make your web pages adapt beautifully to any screen size—from desktop monitors to mobile phones.

---

## 1. What is a Media Query?
A **Media Query** is a CSS technique introduced in CSS3. It uses the `@media` rule to include a block of CSS properties only if a certain condition is true (such as a device's width, height, orientation, or resolution).

---

## 2. Why Responsive Design is Needed
Without responsive design, websites designed for desktop screens will appear zoomed-out and unreadable on mobile phones. Users would have to pinch and zoom to read text or tap buttons. Responsive web design ensures a website is easy to use on **all devices**.

---

## 3. The Viewport Meta Tag
For media queries to work on mobile browsers, you **must** include the viewport meta tag in the HTML `<head>`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- `width=device-width`: Sets the width of the page to follow the screen-width of the device.
- `initial-scale=1.0`: Sets the initial zoom level when the page is first loaded.

---

## 4. Desktop First vs Mobile First

### A. Desktop First (max-width)
You write your default CSS styles for desktop screens first, then use `max-width` media queries to override styles for smaller screens (tablets, mobiles).
- **Condition:** "If screen width is **at most** X pixels, apply these styles."
```css
/* Default Desktop Styles */
body { background-color: white; }

/* Tablet & Mobile (under 992px) */
@media (max-width: 992px) {
  body { background-color: lightgray; }
}
```

### B. Mobile First (min-width)
You write your default CSS styles for small mobile screens first, then use `min-width` media queries to add complexity and columns as the screen gets larger.
- **Condition:** "If screen width is **at least** X pixels, apply these styles."
```css
/* Default Mobile Styles */
body { background-color: lightgray; }

/* Tablet & Desktop (992px and up) */
@media (min-width: 992px) {
  body { background-color: white; }
}
```

### C. Comparison (max-width vs min-width)
| Feature | Desktop First (max-width) | Mobile First (min-width) |
| :--- | :--- | :--- |
| **Default Styles** | Complex, multi-column desktop layout | Simple, stacked single-column mobile layout |
| **Targeting** | Screens **smaller** than or equal to a width | Screens **larger** than or equal to a width |
| **Performance** | Mobile devices process desktop styles first then overrides | Faster on mobile since simple styles load first |
| **Best For** | Redesigning desktop sites to be mobile-friendly | Designing modern, performance-critical sites |

---

## 5. Common Device Breakpoints
Breakpoints are pixel values where layout adaptations occur. To ensure clear transitions, developers use standard ranges for device categories:

| Screen Width | Device Category | CSS Media Query Range |
| :--- | :--- | :--- |
| **`> 992px`** | 💻 Desktop Layout | Default rules (or `min-width: 993px`) |
| **`768px - 992px`** | 📟 Tablet Layout | `@media (max-width: 992px)` |
| **`< 768px` (0px - 767px)** | 📱 Mobile Layout | `@media (max-width: 767px)` |

### Why CSS Cascade Order Matters:
CSS rules are applied **from top to bottom**. When using Desktop First rules with `max-width`:
1. **Desktop styles** are defined first as the base.
2. The **Tablet query** (`max-width: 992px`) is added below. This matches any screen size under 992px (including tablet, mobile, etc.).
3. The **Mobile query** (`max-width: 767px`) is added at the very bottom.
Because the mobile query is written **after** the tablet query, it overrides the tablet styles for screens under 767px. This is why a screen size of **768px** is correctly classified as a Tablet, while **767px** triggers the Mobile view!

---

## 6. Common Responsive Patterns

### A. Responsive Navigation
- **Desktop:** Items align horizontally inside a row (`flex-direction: row`).
- **Mobile:** Navigation items stack vertically inside a column (`flex-direction: column`).

### B. Responsive Grid
- **Desktop:** 4-column layout (`grid-template-columns: repeat(4, 1fr)`).
- **Tablet:** 2-column layout (`grid-template-columns: repeat(2, 1fr)`).
- **Mobile:** 1-column layout (`grid-template-columns: 1fr`).

### C. Responsive Flexbox
- **Desktop:** Items flow side-by-side.
- **Mobile:** Items stack vertically to prevent horizontal overflow.

### E. Responsive Images
Images should scale down fluidly on smaller screens:
```css
img {
  max-width: 100%;
  height: auto;
}
```
- `max-width: 100%`: Prevents the image from being larger than its container.
- `height: auto`: Maintains the image's aspect ratio.

### F. Responsive Typography
Instead of static pixels, use relative units like `rem`, `em`, or viewport units (`vw`), or decrease `font-size` inside media queries:
```css
h1 { font-size: 2.5rem; }
@media (max-width: 768px) {
  h1 { font-size: 1.8rem; }
}
```

### G. Hide & Show Elements
Use `display` to clean up layouts on smaller screens:
- **Desktop Content:** Show on desktop, hide on mobile (`display: none`).
- **Mobile Content:** Show on mobile (`display: block`), hide on desktop.

---

## 7. Advanced Media Queries

### A. Orientation (Portrait vs Landscape)
Applies styles depending on how the viewport is oriented:
```css
/* Landscape mode (width > height) */
@media (orientation: landscape) {
  .sidebar { display: block; }
}

/* Portrait mode (height > width) */
@media (orientation: portrait) {
  .sidebar { display: none; }
}
```

### B. Print Media Query
Applies styles only when the user prints the web page (useful to hide banners/navigation and change colors for paper):
```css
@media print {
  body { background: white; color: black; }
  .navbar, footer, button { display: none; }
}
```

### C. Hover and Pointer Queries
Targets devices based on whether they support hover actions (like a mouse pointer) or touch (like finger tapping):
```css
/* Styles only for devices with hover support (like desktop mouse) */
@media (hover: hover) {
  button:hover { background-color: darkblue; }
}

/* Styles only for touchscreen devices without precision pointer */
@media (pointer: coarse) {
  button { padding: 15px 30px; } /* larger touch targets */
}
```

---

## 8. Final Responsive Web Page Project
In your capstone projects, you will apply all these rules:
1. Write mobile-first container structures.
2. Formulate responsive grids and flexible blocks.
3. Optimize images for fluid resizing.
4. Scale headers and copy relative to viewport breakpoints.
5. Create mobile drawer menus and show/hide key elements.