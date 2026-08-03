# Chapter 30: Final Capstone Project

This project puts all previous learning concepts together to construct a complete, professional, and responsive developer portfolio webpage using pure HTML5 and CSS3.

---

## Technical Concepts Implemented
- **CSS Custom Properties (Variables):** Centralized theme token management for brand colors, transitions, spacing, shadows, and borders.
- **BEM Selector Conventions:** Fully componentized architecture using Block, Element, and Modifier rules.
- **Relational Selectors:** Style resolution using pseudo-classes (`:hover`, `:active`, `:focus`) and pseudo-elements (`::before`, `::after`).
- **Flexible Grid & Flexbox Sizing:** Flexbox-based sticky headers, fluid clamp scaling layouts, and multi-column grid galleries.
- **Mobile-first Media Queries:** Responsive layouts collapsing down for tablet and mobile viewports.
- **Tactile Transitions:** Transform animations on hover states and tactile scale-downs on button clicks.

---

## Project Component Architecture
```
Developer Portfolio (c-portfolio)
  ├── Navigation Component (c-navbar)
  ├── Hero Landing Section (c-hero)
  ├── Services Showcase (c-services)
  ├── Portfolio Gallery (c-work)
  ├── Contact Form Card (c-contact)
  └── Page Footer (c-footer)
```

---

## Best Practices Taught
- **Scale tokens efficiently:** Centralize sizing and border values inside custom property variables.
- **Maintain selector encapsulation:** Use BEM class prefixes (`c-navbar__link`, `c-hero__btn--primary`) to prevent selector bleeding.
- **Flat cascade hierarchies:** Styling with single class names keeps specificity scores uniform.
- **Fluid layouts:** Rely on `clamp()` and `minmax()` to support varying device shapes effortlessly.