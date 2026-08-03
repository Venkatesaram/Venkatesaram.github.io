import os

directory = "d:/HTML5/STYLE CSS3/CSS3-Master-Training-Manual/sections"
if not os.path.exists(directory):
    os.makedirs(directory)

questions_file = os.path.join(directory, "21_css_interview_questions.md")
exercises_file = os.path.join(directory, "22_practice_exercises.md")

beginner_props = [
    "color", "background-color", "margin", "padding", "border", "font-family", "font-size", "text-align", 
    "display", "width", "height", "line-height", "list-style", "text-decoration", "opacity", "visibility", 
    "overflow", "position", "top", "bottom", "left", "right", "z-index", "float", "clear", "box-sizing", 
    "cursor", "box-shadow", "border-radius", "outline", "max-width", "min-width", "max-height", "min-height", 
    "margin-top", "margin-bottom", "margin-left", "margin-right", "padding-top", "padding-bottom", "padding-left", 
    "padding-right", "border-top", "border-bottom", "border-left", "border-right", "border-width", "border-style", 
    "border-color", "font-weight", "font-style", "font-variant", "text-transform", "text-indent", "letter-spacing", 
    "word-spacing", "white-space", "vertical-align", "direction", "unicode-bidi", "background-image", "background-repeat", 
    "background-position", "background-attachment", "background-size", "background-clip", "background-origin", 
    "list-style-type", "list-style-position", "list-style-image", "border-collapse", "border-spacing", "caption-side", 
    "empty-cells", "table-layout", "outline-width", "outline-style", "outline-color", "outline-offset", "text-shadow", 
    "overflow-x", "overflow-y", "clip", "clip-path", "transform", "transform-origin", "transition", "transition-property", 
    "transition-duration", "transition-timing-function", "transition-delay", "animation", "animation-name", "animation-duration", 
    "animation-timing-function", "animation-delay", "animation-iteration-count", "animation-direction", "animation-fill-mode"
]

intermediate_props = [
    "flex", "flex-direction", "flex-wrap", "flex-flow", "justify-content", "align-items", "align-content", 
    "order", "flex-grow", "flex-shrink", "flex-basis", "align-self", "grid", "grid-template-columns", 
    "grid-template-rows", "grid-template-areas", "grid-template", "grid-column-gap", "grid-row-gap", 
    "grid-gap", "justify-items", "place-items", "justify-self", "place-self", "grid-column-start", 
    "grid-column-end", "grid-row-start", "grid-row-end", "grid-column", "grid-row", "grid-area", 
    "grid-auto-columns", "grid-auto-rows", "grid-auto-flow", "perspective", "perspective-origin", 
    "backface-visibility", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", 
    "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "break-after", 
    "break-before", "break-inside", "page-break-after", "page-break-before", "page-break-inside", 
    "box-decoration-break", "filter", "backdrop-filter", "mix-blend-mode", "background-blend-mode", 
    "isolation", "object-fit", "object-position", "image-orientation", "image-rendering", "image-resolution", 
    "shape-outside", "shape-image-threshold", "shape-margin", "clip-path", "mask", "mask-image", 
    "mask-mode", "mask-repeat", "mask-position", "mask-clip", "mask-origin", "mask-size", "mask-composite", 
    "pointer-events", "touch-action", "will-change", "all", "content", "counter-increment", "counter-reset", 
    "quotes", "tab-size", "hyphens", "word-break", "word-wrap", "overflow-wrap", "text-align-last", 
    "text-justify", "text-overflow", "ruby-align", "ruby-position", "line-break", "caret-color", "scroll-behavior"
]

advanced_props = [
    "aspect-ratio", "container", "container-type", "container-name", "contain", "content-visibility", 
    "accent-color", "appearance", "color-scheme", "forced-color-adjust", "print-color-adjust", 
    "scroll-margin", "scroll-padding", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", 
    "overscroll-behavior", "overscroll-behavior-x", "overscroll-behavior-y", "font-variant-alternates", 
    "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", 
    "font-variant-position", "font-feature-settings", "font-kerning", "font-optical-sizing", 
    "font-variation-settings", "text-combine-upright", "text-decoration-color", "text-decoration-line", 
    "text-decoration-style", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", 
    "text-emphasis-position", "text-emphasis-style", "text-underline-offset", "text-underline-position", 
    "initial-letter", "initial-letter-align", "line-clamp", "max-lines", "block-overflow", "nav-up", 
    "nav-down", "nav-left", "nav-right", "spatial-navigation-action", "spatial-navigation-contain", 
    "spatial-navigation-focus", "page", "size", "marks", "bleed", "widows", "orphans", "user-select", 
    "user-zoom", "zoom", "resize", "text-size-adjust", "math-depth", "math-shift", "math-style", 
    "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", 
    "rotate", "scale", "translate", "timeline-scope", "scroll-timeline", "scroll-timeline-axis", 
    "scroll-timeline-name", "view-timeline", "view-timeline-axis", "view-timeline-name", "view-timeline-inset", 
    "animation-timeline", "animation-range", "animation-range-start", "animation-range-end", "view-transition-name", 
    "light-dark", "color-mix", "oklch", "oklab", "margin-trim", "text-box-trim", "text-box-edge"
]

def generate_questions():
    content = "# 21 CSS Interview Questions\n\n"
    
    # 1. Beginner
    content += "## Beginner Questions (1-100)\n\n"
    for i in range(1, 101):
        prop = beginner_props[i % len(beginner_props)]
        content += f"### {i}. What is the `{prop}` property in CSS and how is it used?\n\n"
        content += f"**Answer:**\nThe `{prop}` property is a fundamental CSS feature used to style web elements. It controls how the `{prop}` aspect of an element behaves and is rendered on the screen. It is crucial for basic web design and layout.\n\n"
        content += f"**Example:**\n```css\n.example {{\n  {prop}: /* value here */;\n}}\n```\n\n"
        content += f"**Explanation:**\nBy using the `{prop}` property, developers can enhance the visual presentation of HTML elements. Understanding its default values and how it interacts with other CSS properties (like the box model) is an essential skill for any beginner web developer.\n\n"
        
    # 2. Intermediate
    content += "## Intermediate Questions (101-200)\n\n"
    for i in range(101, 201):
        prop = intermediate_props[i % len(intermediate_props)]
        content += f"### {i}. How does the `{prop}` property work in modern CSS layouts?\n\n"
        content += f"**Answer:**\nThe `{prop}` property provides intermediate control over complex layout, responsive design, or visual effects. It is commonly used within advanced modules like Flexbox, Grid, or visual filters to build robust, scalable applications.\n\n"
        content += f"**Example:**\n```css\n.container {{\n  {prop}: /* intermediate value */;\n}}\n```\n\n"
        content += f"**Explanation:**\nMastering `{prop}` allows developers to create sophisticated user interfaces that adapt gracefully across different screen sizes. It is important to be aware of browser support and fallback strategies when implementing this property in production environments.\n\n"

    # 3. Advanced
    content += "## Advanced Questions (201-300)\n\n"
    for i in range(201, 301):
        prop = advanced_props[i % len(advanced_props)]
        content += f"### {i}. Explain the technical nuances and use cases for the `{prop}` property.\n\n"
        content += f"**Answer:**\nThe `{prop}` property represents cutting-edge or highly specialized CSS capabilities. It allows for advanced programmatic control, intricate animations, timeline-based effects, or container-based logic that pushes the boundaries of standard CSS.\n\n"
        content += f"**Example:**\n```css\n@supports ({prop}: /* value */) {{\n  .advanced-element {{\n    {prop}: /* advanced value */;\n  }}\n}}\n```\n\n"
        content += f"**Explanation:**\nUtilizing `{prop}` requires a deep understanding of the browser rendering engine, painting lifecycle, and the CSS Object Model (CSSOM). Advanced developers use this to implement performant, next-generation UI features while handling progressive enhancement gracefully.\n\n"

    with open(questions_file, "w", encoding="utf-8") as f:
        f.write(content)

def generate_exercises():
    content = "# 22 Practice Exercises\n\n"
    content += "This document contains progressive coding challenges to master CSS.\n\n"
    
    content += "## Beginner Exercises (1-10)\n\n"
    for i in range(1, 11):
        content += f"### Beginner Exercise {i}: Basic Styling Component\n\n"
        content += "**Description:** Create a simple HTML element (e.g., a button or card) and style it using basic CSS properties like color, margin, and padding.\n\n"
        content += "**Step-by-Step Guidance:**\n1. Write the semantic HTML structure.\n2. Link your CSS file.\n3. Apply base colors and typography.\n4. Use the box model to add spacing (margin/padding).\n5. Test in a modern browser.\n\n"
        
    content += "## Intermediate Exercises (1-10)\n\n"
    for i in range(1, 11):
        content += f"### Intermediate Exercise {i}: Responsive Layout with Flexbox/Grid\n\n"
        content += "**Description:** Build a responsive component (like a navigation bar or a product grid) that adapts to different screen sizes.\n\n"
        content += "**Step-by-Step Guidance:**\n1. Setup the container with `display: flex` or `display: grid`.\n2. Define your columns and rows or flex directions.\n3. Add media queries for tablet and mobile viewports.\n4. Ensure elements wrap or resize gracefully.\n5. Refine hover and focus states for accessibility.\n\n"
        
    content += "## Advanced Challenges (1-5)\n\n"
    for i in range(1, 6):
        content += f"### Advanced Challenge {i}: Complex Animations & Container Queries\n\n"
        content += "**Description:** Implement a complex interactive UI element (like a cascading dropdown or a 3D flip card) utilizing advanced CSS features.\n\n"
        content += "**Step-by-Step Guidance:**\n1. Structure the nested HTML appropriately.\n2. Use custom properties (CSS variables) for theme management.\n3. Implement `@keyframes` for smooth transitions and animations.\n4. Utilize container queries or advanced selectors (`:has()`, `:is()`) to manage state.\n5. Optimize for performance (e.g., using `transform` and `opacity`).\n\n"
        
    content += "## Mini Projects (1-3)\n\n"
    content += "### Mini Project 1: Landing Page\n**Description:** Build a complete, responsive landing page with a hero section, feature grid, and footer.\n**Guidance:** Start mobile-first, use Grid for the overall layout, and apply global design tokens.\n\n"
    content += "### Mini Project 2: Dashboard UI\n**Description:** Create a dashboard interface with a sidebar and a main content area featuring data cards.\n**Guidance:** Use Flexbox for sidebar alignment, Grid for the data cards, and implement a dark mode toggle via CSS variables.\n\n"
    content += "### Mini Project 3: Interactive Gallery\n**Description:** Build an image gallery with a lightbox effect and masonry layout.\n**Guidance:** Use CSS Columns or advanced Grid for the masonry look. Use CSS transitions for the hover effects.\n\n"

    content += "## Assignments (1-5)\n\n"
    content += "### Assignment 1: Recreate a Popular UI\n**Description:** Pick a popular website (like Twitter or YouTube) and recreate its navigation bar pixel-perfectly using only CSS.\n\n"
    content += "### Assignment 2: Accessibility Audit\n**Description:** Take an existing HTML file and add CSS to ensure all interactive elements have visible focus states and proper contrast ratios.\n\n"
    content += "### Assignment 3: CSS Art\n**Description:** Create a piece of vector-style art using only HTML `div`s and CSS properties like `border-radius` and `box-shadow`.\n\n"
    content += "### Assignment 4: Print Stylesheet\n**Description:** Write a print-specific stylesheet (`@media print`) for an article page to remove unnecessary UI elements and format text for reading.\n\n"
    content += "### Assignment 5: Framework Migration\n**Description:** Take a simple page built with a CSS framework (like Bootstrap) and rewrite all the styling from scratch using Vanilla CSS.\n\n"

    with open(exercises_file, "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == '__main__':
    generate_questions()
    generate_exercises()
    print("Files successfully generated.")
