const fs = require('fs');
const path = require('path');

const chapters = [
  {
    num: "01",
    name: "introduction-to-css",
    title: "Introduction to CSS",
    description: "Learn what CSS is, why we use it, its core syntax, and basic formatting.",
    html: `
<div class="card">
  <h1>Welcome to CSS3</h1>
  <p class="subtitle">Cascading Style Sheets</p>
  <p class="description">
    CSS (Cascading Style Sheets) is the language we use to style a Web page. It describes how HTML elements are to be displayed on screen, paper, or in other media.
  </p>
  <div class="benefits">
    <h3>Why Use CSS?</h3>
    <ul>
      <li>Saves a lot of work (styles multiple pages at once)</li>
      <li>Provides rich layout control and design capabilities</li>
      <li>Separates content (HTML) from presentation (CSS)</li>
      <li>Improves website loading speed and performance</li>
    </ul>
  </div>
  <!-- This is an HTML comment -->
  <p class="note"><strong>Syntax:</strong> selector { property: value; }</p>
</div>
`,
    css: `/* 01. Introduction to CSS */

/* Simple Element Selector & Reset styling for our demo */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
  color: #333;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
}

/* Class Selector styling a card component */
.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 500px;
  width: 100%;
}

/* CSS Declaration Block targeting h1 */
h1 {
  color: #1a73e8; /* Property: Value */
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 28px;
}

.subtitle {
  color: #5f6368;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.description {
  line-height: 1.6;
  color: #4a4a4a;
}

.benefits h3 {
  color: #202124;
  font-size: 18px;
  margin-top: 25px;
}

/* styling lists inside the card */
ul {
  padding-left: 20px;
  line-height: 1.8;
}

li {
  color: #5f6368;
}

.note {
  margin-top: 25px;
  padding: 10px 15px;
  background-color: #e8f0fe;
  border-left: 4px solid #1a73e8;
  border-radius: 4px;
  font-family: monospace;
  font-size: 14px;
  color: #1967d2;
}
`,
    readme: `# Chapter 01: Introduction to CSS

In this chapter, you will learn the fundamentals of Cascading Style Sheets (CSS).

## Concepts Covered:
- **What is CSS?**: Cascading Style Sheets is a stylesheet language used to style HTML structure.
- **Why CSS is used**: Separates markup from presentation, enables easy maintenance, and speeds up page rendering.
- **CSS Syntax**:
  \`\`\`css
  selector {
    property: value;
  }
  \`\`\`
- **CSS Comments**: Write comments using \`/* comment goes here */\`.
`
  },
  {
    num: "02",
    name: "ways-to-add-css",
    title: "Ways to Add CSS",
    description: "Learn how to include CSS in your HTML through inline, internal, and external styles.",
    html: `
<!-- 1. Inline CSS applied directly using style attribute -->
<div class="container" style="background-color: #ffffff; padding: 30px; border-radius: 10px; max-width: 600px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  
  <h1 style="color: #4f46e5; text-align: center;">Ways to Add CSS</h1>
  
  <p>There are three main methods of inserting style rules into a document:</p>
  
  <!-- 2. Internal CSS (defined in style tags in the head - represented by style.css here) -->
  <div class="method-card inline-style">
    <h3>1. Inline CSS</h3>
    <p>Written directly inside the HTML element using the <code>style</code> attribute. Excellent for quick tests but bad for maintainability.</p>
  </div>
  
  <div class="method-card internal-style">
    <h3>2. Internal CSS</h3>
    <p>Defined inside the <code>&lt;style&gt;</code> element in the <code>&lt;head&gt;</code> section of an HTML document. Good for single-page files.</p>
  </div>
  
  <div class="method-card external-style">
    <h3>3. External CSS</h3>
    <p>Saved in a separate file (e.g., <code>style.css</code>) and linked in the HTML head using the <code>&lt;link&gt;</code> tag. The best industry practice.</p>
  </div>

  <div class="priority-box">
    <h4>Priority Order (Cascade Specificity):</h4>
    <p>Inline CSS (Highest Priority) &gt; Internal CSS = External CSS (Last declared wins)</p>
  </div>
</div>
`,
    css: `/* 02. Ways to Add CSS */

body {
  font-family: system-ui, -apple-system, sans-serif;
  background-color: #f3f4f6;
  color: #1f2937;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: 0;
}

.container {
  /* Some layout defaults */
  width: 90%;
}

/* Let's style the method cards */
.method-card {
  margin: 15px 0;
  padding: 15px 20px;
  border-radius: 6px;
  border-left: 5px solid #d1d5db;
  background-color: #f9fafb;
}

/* external style classes to show cascade/specific design styling */
.inline-style {
  border-left-color: #ec4899; /* Pink styling representing inline examples */
}

.internal-style {
  border-left-color: #f59e0b; /* Amber representing internal styles */
}

.external-style {
  border-left-color: #10b981; /* Emerald representing external styles */
}

.priority-box {
  margin-top: 25px;
  padding: 15px;
  background-color: #eff6ff;
  border: 1px dashed #3b82f6;
  border-radius: 8px;
  color: #1e3a8a;
}

.priority-box h4 {
  margin: 0 0 8px 0;
}
`,
    readme: `# Chapter 02: Ways to Add CSS

Learn how styles are integrated into HTML documents and the cascade order.

## Concepts Covered:
- **Inline CSS**: Defined using the HTML \`style\` attribute. Has highest override priority.
- **Internal CSS**: Placed inside \`<style>\` tags in the HTML \`<head>\`.
- **External CSS**: Linked using \`<link rel="stylesheet" href="style.css">\`. Best for clean and maintainable code bases.
- **Cascading Rules**: How the browser merges styles from different sources based on declaration order.
`
  },
  {
    num: "03",
    name: "css-selectors",
    title: "CSS Selectors",
    description: "Master CSS selectors from basic element and class selectors to advanced combinators, attribute selectors, pseudo-classes, and pseudo-elements.",
    html: `
<div class="container">
  <h1>Chapter 03: CSS Selectors</h1>

  <!-- ===================================== -->
  <!-- 1. Universal Selector -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>1. Universal Selector (*)</h2>
    <p>Paragraph One</p>
    <div>Simple Div</div>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 2. Element Selector -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>2. Element Selector</h2>
    <p>This is a paragraph.</p>
    <h3>This is a heading.</h3>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 3. Class Selector -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>3. Class Selector (.class)</h2>
    <p class="note">First Note</p>
    <p class="note">Second Note</p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 4. ID Selector -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>4. ID Selector (#id)</h2>
    <p id="message">Unique Paragraph</p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 5. Group Selector -->
  <!-- ===================================== -->
  <section class="selector-section group-section">
    <h2>5. Group Selector</h2>
    <h3>Heading</h3>
    <p>Paragraph</p>
    <div>Division</div>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 6. Descendant Selector -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>6. Descendant Selector (space)</h2>
    <div class="parent">
      <p>Paragraph inside Parent</p>
    </div>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 7. Child Selector -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>7. Child Selector (&gt;)</h2>
    <div class="box">
      <p>Direct Child Paragraph</p>
      <section>
        <p>Nested Paragraph</p>
      </section>
    </div>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 8. Adjacent Sibling -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>8. Adjacent Sibling Selector (+)</h2>
    <h3>Heading</h3>
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 9. General Sibling -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>9. General Sibling Selector (~)</h2>
    <h4>Heading</h4>
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    <p>Paragraph Three</p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 10. Attribute Selector -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>10. Attribute Selector</h2>
    <input type="text" placeholder="Name">
    <input type="email" placeholder="Email">
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 11. Attribute Equals -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>11. Attribute = Value</h2>
    <a href="https://google.com">Google</a>
    <a href="https://openai.com">OpenAI</a>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 12. First Child -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>12. :first-child</h2>
    <ul>
      <li>Apple</li>
      <li>Mango</li>
      <li>Orange</li>
    </ul>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 13. Last Child -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>13. :last-child</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 14. nth-child -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>14. :nth-child()</h2>
    <ol>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </ol>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 15. Hover -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>15. :hover</h2>
    <button>Hover Me</button>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 16. Focus -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>16. :focus</h2>
    <input type="text" placeholder="Click Here">
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 17. Checked -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>17. :checked</h2>
    <input type="checkbox" checked id="check-html"> <label for="check-html">HTML</label>
    <br>
    <input type="checkbox" id="check-css"> <label for="check-css">CSS</label>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 18. Disabled -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>18. :disabled</h2>
    <input type="text" disabled value="Disabled">
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 19. Enabled -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>19. :enabled</h2>
    <input type="text" value="Enabled">
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 20. Empty -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>20. :empty</h2>
    <div class="empty-box"></div>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 21. Not Selector -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>21. :not()</h2>
    <p class="success">Success</p>
    <p>Error</p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 22. Before -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>22. ::before</h2>
    <p class="before-example">Welcome Student</p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 23. After -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>23. ::after</h2>
    <p class="after-example">HTML5</p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 24. First Letter -->
  <!-- ===================================== -->
  <section class="selector-section" style="overflow: hidden;">
    <h2>24. ::first-letter</h2>
    <p class="letter">Learning CSS3 is easy.</p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 25. First Line -->
  <!-- ===================================== -->
  <section class="selector-section">
    <h2>25. ::first-line</h2>
    <p class="line">CSS helps create beautiful and responsive webpages using colors, layouts, spacing, animations, and much more.</p>
  </section>
</div>
`,
    css: `/* 03. CSS Selectors Sandbox */

/* 1. Universal Selector - targets EVERY element to set box-sizing */
* {
  box-sizing: border-box;
}

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

/* 2. Element Selector - styles h1 globally */
h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #4f46e5;
  font-size: 18px;
  margin-bottom: 12px;
}

/* 3. Class Selector - styles class="note" */
.note {
  background-color: #fef3c7;
  color: #b45309;
  padding: 8px 12px;
  border-left: 4px solid #d97706;
  border-radius: 4px;
}

/* 4. ID Selector - styles unique id="message" */
#message {
  background-color: #d1fae5;
  color: #065f46;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
  display: inline-block;
}

/* 5. Group Selector - styles h3, p, div together in group sandbox */
.group-section h3, 
.group-section p, 
.group-section div {
  color: #475569;
  border: 1px dashed #cbd5e1;
  padding: 6px;
  margin-bottom: 4px;
  border-radius: 4px;
}

/* 6. Descendant Selector (space) - styles p inside .parent */
.parent p {
  color: #0284c7;
  font-weight: 500;
}

/* 7. Child Selector (>) - styles direct child p inside .box */
.box > p {
  color: #be185d;
  font-weight: bold;
}

/* 8. Adjacent Sibling Selector (+) - styles first p immediately after h3 */
h3 + p {
  background-color: #e0f2fe;
  color: #0369a1;
  padding: 6px;
  border-radius: 4px;
}

/* 9. General Sibling Selector (~) - styles all p siblings after h4 */
h4 ~ p {
  color: #7c3aed;
  text-decoration: underline;
}

/* 10. Attribute Selector - styles inputs with attribute "type" */
input[type] {
  border: 1px solid #d1d5db;
  padding: 6px 12px;
  border-radius: 6px;
  margin-right: 8px;
}

/* 11. Attribute = Value - styles matching href values */
a[href="https://google.com"] {
  color: #ea4335;
  font-weight: bold;
}
a[href="https://openai.com"] {
  color: #10a37f;
  font-weight: bold;
}

/* 12. :first-child - styles first li item */
ul li:first-child {
  color: #16a34a;
  font-weight: bold;
}

/* 13. :last-child - styles last li item */
ul li:last-child {
  color: #dc2626;
  font-weight: bold;
}

/* 14. :nth-child() - styles alternating rows */
ol li:nth-child(even) {
  background-color: #f1f5f9;
}

/* 15. :hover - button interactive hover state */
button {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
button:hover {
  background-color: #3730a3;
  transform: scale(1.05);
}

/* 16. :focus - input highlight */
input:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
}

/* 17. :checked - checkbox status styling */
input[type="checkbox"]:checked {
  accent-color: #10b981;
}

/* 18. :disabled */
input:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

/* 19. :enabled */
input:enabled {
  background-color: #fefefe;
}

/* 20. :empty - empty box selector styling */
.empty-box {
  width: 60px;
  height: 60px;
  background-color: #f3f4f6;
  border: 1px dashed #9ca3af;
}
.empty-box:empty {
  background-color: #fecaca;
  border-color: #ef4444;
}

/* 21. :not() - p that is NOT .success */
p:not(.success) {
  color: #ef4444;
}
p.success {
  color: #10b981;
}

/* 22. ::before - prefix text injector */
.before-example::before {
  content: "🎓 Welcome ";
  font-weight: bold;
  color: #0369a1;
}

/* 23. ::after - suffix text injector */
.after-example::after {
  content: " (Latest)";
  color: #059669;
  font-size: 12px;
}

/* 24. ::first-letter */
.letter::first-letter {
  font-size: 200%;
  color: #4f46e5;
  font-weight: bold;
}

/* 25. ::first-line */
.line::first-line {
  font-weight: bold;
  text-transform: uppercase;
  color: #b45309;
}
`,
    readme: `# Chapter 03: CSS Selectors

CSS Selectors are used to target HTML elements for styling. This chapter covers the 25 most essential selectors in CSS3.

## Universal & Basic Selectors:
- **Universal (\`*\`):** Targets every element on the page.
- **Element Selector:** Targets tags directly (e.g., \`p\`, \`h1\`).
- **Class (\`.class\`):** Styles elements sharing a specific class.
- **ID (\`#id\`):** Styles a single unique element with a specific ID.
- **Group Selector (\`,\`):** Groups selectors together to apply the same style rules.

## Combinators:
- **Descendant (space):** Selects nested elements (e.g. \`.parent p\`).
- **Child (\`>\`):** Selects direct children (e.g. \`.box > p\`).
- **Adjacent Sibling (\`+\`):** Selects an element immediately after another.
- **General Sibling (\`~\`):** Selects all sibling elements after another.

## Attributes & Pseudo-Classes:
- **Attribute Selector (\`[type]\`):** Styles elements based on attribute presence.
- **Attribute Equals (\`[href="value"]\`):** Styles elements with exact attribute value matches.
- **Structural Pseudo-Classes:** \`:first-child\`, \`:last-child\`, \`:nth-child(n)\`, \`:empty\`.
- **User Action & State Pseudo-Classes:** \`:hover\`, \`:focus\`, \`:checked\`, \`:disabled\`, \`:enabled\`.
- **Negation Pseudo-Class:** \`:not(selector)\`.

## Pseudo-Elements:
- **::before / ::after:** Inserts virtual content before or after element content.
- **::first-letter / ::first-line:** Styles the initial letter or the initial line of text.
`
  },
  {
    num: "04",
    name: "css-colors",
    title: "CSS Colors",
    description: "Explore color systems in CSS, including Named, HEX, RGB, RGBA, HSL, and HSLA values.",
    html: `
<div class="color-showcase">
  <h1>CSS Colors Laboratory</h1>
  
  <div class="swatch-grid">
    <div class="swatch name-color">
      <div class="color-box"></div>
      <div class="details">
        <strong>Named Color</strong>
        <span>Tomato (#FF6347)</span>
      </div>
    </div>
    
    <div class="swatch hex-color">
      <div class="color-box"></div>
      <div class="details">
        <strong>HEX Color</strong>
        <span>#6366f1 (Indigo)</span>
      </div>
    </div>
    
    <div class="swatch rgb-color">
      <div class="color-box"></div>
      <div class="details">
        <strong>RGB Color</strong>
        <span>rgb(34, 197, 94)</span>
      </div>
    </div>
    
    <div class="swatch rgba-color">
      <div class="color-box"></div>
      <div class="details">
        <strong>RGBA (Alpha)</strong>
        <span>rgba(239, 68, 68, 0.4)</span>
      </div>
    </div>
    
    <div class="swatch hsl-color">
      <div class="color-box"></div>
      <div class="details">
        <strong>HSL Color</strong>
        <span>hsl(200, 95%, 50%)</span>
      </div>
    </div>
    
    <div class="swatch hsla-color">
      <div class="color-box"></div>
      <div class="details">
        <strong>HSLA (Alpha)</strong>
        <span>hsla(280, 80%, 50%, 0.6)</span>
      </div>
    </div>
  </div>
</div>
`,
    css: `/* 04. CSS Colors */

body {
  font-family: -apple-system, system-ui, sans-serif;
  background-color: #0f172a;
  color: #e2e8f0;
  margin: 0;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.color-showcase {
  max-width: 800px;
  width: 100%;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #f8fafc;
}

.swatch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.swatch {
  background-color: #1e293b;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  border: 1px solid #334155;
  transition: transform 0.2s;
}

.swatch:hover {
  transform: translateY(-5px);
}

.color-box {
  height: 120px;
  width: 100%;
}

.details {
  padding: 15px;
}

.details strong {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #94a3b8;
}

.details span {
  font-family: monospace;
  font-size: 13px;
}

/* Color Styles definitions */
.name-color .color-box {
  background-color: tomato; /* Named color constant */
}

.hex-color .color-box {
  background-color: #6366f1; /* 6-digit hex string */
}

.rgb-color .color-box {
  background-color: rgb(34, 197, 94); /* Red, Green, Blue integers */
}

.rgba-color .color-box {
  background-color: rgba(239, 68, 68, 0.4); /* RGB with opacity parameter */
}

.hsl-color .color-box {
  background-color: hsl(200, 95%, 50%); /* Hue, Saturation, Lightness */
}

.hsla-color .color-box {
  background-color: hsla(280, 80%, 50%, 0.6); /* HSL with opacity */
}
`,
    readme: `# Chapter 04: CSS Colors

Colors in CSS are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

## Color Models:
- **HEX (Hexadecimal):** E.g., \`#ff0000\` (Red). Syntaxes include 3-digit shorthand and 8-digit hex for transparency.
- **RGB:** \`rgb(red, green, blue)\` values range from 0 to 255.
- **RGBA:** Similar to RGB, adding a fourth parameter (Alpha) between \`0.0\` (transparent) and \`1.0\` (opaque).
- **HSL:** \`hsl(hue, saturation, lightness)\` where hue is degree (0-360), saturation & lightness are percentages.
- **HSLA:** Adds opacity to the HSL values.
`
  },
  {
    num: "05",
    name: "css-backgrounds",
    title: "CSS Backgrounds",
    description: "Learn to design background effects including color, images, position, repetition, cover/contain sizing, and fixed attachment.",
    html: `
<div class="content-wrapper">
  <h1>CSS Backgrounds Showcase</h1>
  
  <div class="background-card color-bg">
    <h2>Color & Gradient Background</h2>
    <p>Using <code>background-color</code> and linear gradients to build rich modern textures.</p>
  </div>

  <div class="background-card image-bg">
    <h2>Image Background (Cover)</h2>
    <p>Cover image fits the block boundaries dynamically without squishing, using <code>background-size: cover</code>.</p>
  </div>

  <div class="background-card pattern-bg">
    <h2>Pattern Repeat Background</h2>
    <p>Using <code>background-repeat: repeat-x</code> or <code>repeat</code> for structural patterns.</p>
  </div>

  <div class="fixed-hero-bg">
    <h2>Fixed Background Attachment</h2>
    <p>Parallax-like behavior by fixing background relative to the viewport. Scroll this container to check the effect!</p>
  </div>
</div>
`,
    css: `/* 05. CSS Backgrounds */

body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f7;
  color: #333;
}

.content-wrapper {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #111;
  margin-bottom: 30px;
}

.background-card {
  margin-bottom: 25px;
  padding: 40px 30px;
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-shadow: 0 1px 3px rgba(0,0,0,0.4);
}

/* Linear Gradient Color styling */
.color-bg {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}

/* Background image with cover sizing and centering */
.image-bg {
  background-color: #222; /* Fallback color */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%234338ca"/><circle cx="400" cy="200" r="150" fill="%23ec4899" opacity="0.3"/><path d="M 0,300 Q 200,100 400,300 T 800,300" stroke="%2338bdf8" stroke-width="8" fill="none" opacity="0.4"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* Pattern style repeating background */
.pattern-bg {
  background-color: #0f172a;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="2" fill="%23334155"/></svg>');
  background-repeat: repeat;
  background-position: top left;
  color: #cbd5e1;
}

/* Parallax Effect using background-attachment: fixed */
.fixed-hero-bg {
  height: 250px;
  margin-top: 40px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="800" viewBox="0 0 1000 800"><rect width="1000" height="800" fill="%231e293b"/><line x1="0" y1="0" x2="1000" y2="800" stroke="%23f43f5e" stroke-width="4" opacity="0.3"/><line x1="1000" y1="0" x2="0" y2="800" stroke="%233b82f6" stroke-width="4" opacity="0.3"/></svg>');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 100px rgba(0,0,0,0.5);
}
`,
    readme: `# Chapter 05: CSS Backgrounds

Learn details of handling HTML element background colors, images, alignments, and sizes.

## Concepts Covered:
- **background-color:** Sets solid/semi-transparency colors.
- **background-image:** Inserts graphics (SVG, PNG, web files, or linear/radial-gradients).
- **background-repeat:** Avoids or forces duplicating graphic files (\`repeat\`, \`repeat-x\`, \`repeat-y\`, \`no-repeat\`).
- **background-position:** Aligns backgrounds (\`center\`, \`top left\`, custom coordinates).
- **background-size:** Controls scale behaviors (\`cover\`, \`contain\`, percentages).
- **background-attachment:** Parallax scrolls or freezes graphic displays (\`scroll\`, \`fixed\`).
`
  },
  {
    num: "06",
    name: "css-text-properties",
    title: "CSS Text Properties",
    description: "Format paragraph and header layouts using text alignments, text decorations, spacing, letter overrides, and shadows.",
    html: `
<div class="container">
  <h1>Chapter 06: CSS Text Properties</h1>

  <!-- ===================================== -->
  <!-- 1. Text Align -->
  <!-- ===================================== -->
  <section class="section">
    <h2>1. Text Align</h2>
    <p class="left">This text is aligned to the left.</p>
    <p class="center">This text is aligned to the center.</p>
    <p class="right">This text is aligned to the right.</p>
    <p class="justify">
      CSS makes web pages beautiful by controlling colors, spacing, fonts, alignment, layouts, and many other visual styles. Justified text aligns evenly on both the left and right sides.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 2. Text Color -->
  <!-- ===================================== -->
  <section class="section">
    <h2>2. Text Color</h2>
    <p class="text-color">
      This text uses the CSS color property.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 3. Text Decoration -->
  <!-- ===================================== -->
  <section class="section">
    <h2>3. Text Decoration</h2>
    <p class="underline">Underline Text</p>
    <p class="overline">Overline Text</p>
    <p class="line-through">Line Through Text</p>
    <p class="no-decoration">
      No Text Decoration
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 4. Text Transform -->
  <!-- ===================================== -->
  <section class="section">
    <h2>4. Text Transform</h2>
    <p class="uppercase">
      uppercase text
    </p>
    <p class="lowercase">
      LOWERCASE TEXT
    </p>
    <p class="capitalize">
      welcome to css learning
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 5. Letter Spacing -->
  <!-- ===================================== -->
  <section class="section">
    <h2>5. Letter Spacing</h2>
    <p class="letter-space">
      Learning CSS3
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 6. Word Spacing -->
  <!-- ===================================== -->
  <section class="section">
    <h2>6. Word Spacing</h2>
    <p class="word-space">
      Learning CSS is easy for beginners.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 7. Line Height -->
  <!-- ===================================== -->
  <section class="section">
    <h2>7. Line Height</h2>
    <p class="line-height">
      CSS controls the appearance of HTML elements.<br>
      It helps create attractive and responsive web pages.<br>
      Line height increases the vertical spacing between lines.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 8. Text Indent -->
  <!-- ===================================== -->
  <section class="section">
    <h2>8. Text Indent</h2>
    <p class="indent">
      This paragraph starts with an indentation using the text-indent property.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 9. Text Shadow -->
  <!-- ===================================== -->
  <section class="section">
    <h2>9. Text Shadow</h2>
    <p class="shadow">
      CSS Text Shadow
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 10. White Space -->
  <!-- ===================================== -->
  <section class="section">
    <h2>10. White Space</h2>
    <p class="whitespace">HTML        CSS        JavaScript
Extra spaces are preserved.</p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 11. Text Overflow -->
  <!-- ===================================== -->
  <section class="section">
    <h2>11. Text Overflow</h2>
    <p class="overflow">
      This is a very long sentence that demonstrates how the text-overflow property works when the content exceeds the available width.
    </p>
  </section>
</div>
`,
    css: `/* 06. CSS Text Properties Sandbox */

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #4f46e5;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 5px;
}

/* 1. Text Align */
.left {
  text-align: left;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}

.justify {
  text-align: justify;
}

/* 2. Text Color */
.text-color {
  color: #e11d48;
}

/* 3. Text Decoration */
.underline {
  text-decoration: underline;
}

.overline {
  text-decoration: overline;
}

.line-through {
  text-decoration: line-through;
}

.no-decoration {
  text-decoration: none;
}

/* 4. Text Transform */
.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}

.capitalize {
  text-transform: capitalize;
}

/* 5. Letter Spacing */
.letter-space {
  letter-spacing: 4px;
}

/* 6. Word Spacing */
.word-space {
  word-spacing: 10px;
}

/* 7. Line Height */
.line-height {
  line-height: 2.0;
}

/* 8. Text Indent */
.indent {
  text-indent: 40px;
}

/* 9. Text Shadow */
.shadow {
  font-size: 28px;
  font-weight: bold;
  color: #4f46e5;
  text-shadow: 2px 2px 4px rgba(79, 70, 229, 0.3);
}

/* 10. White Space */
.whitespace {
  white-space: pre;
  background-color: #f1f5f9;
  padding: 10px;
  border-radius: 6px;
  font-family: monospace;
}

/* 11. Text Overflow */
.overflow {
  white-space: nowrap;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #cbd5e1;
  padding: 8px;
  border-radius: 6px;
  background-color: #f8fafc;
}
`,
    readme: `# Chapter 06: CSS Text Properties

This chapter explains how to format text elements using visual text properties in CSS3.

## Key Properties:
- **text-align:** Controls the horizontal alignment of text (\`left\`, \`center\`, \`right\`, \`justify\`).
- **color:** Sets the color of the text (e.g. Hex, RGB, HSL, or named colors).
- **text-decoration:** Decorates text with overlays (\`underline\`, \`overline\`, \`line-through\`, \`none\`).
- **text-transform:** Dynamically overrides character casing (\`uppercase\`, \`lowercase\`, \`capitalize\`).
- **letter-spacing & word-spacing:** Changes horizontal gap widths between characters or words.
- **line-height:** Adjusts the vertical space between lines of text.
- **text-indent:** Indents the first line of a text block.
- **text-shadow:** Adds text shadow effects with horizontal offset, vertical offset, blur radius, and color.
- **white-space:** Directs how white spaces and line breaks inside the code are handled (\`pre\`, \`nowrap\`, etc.).
- **text-overflow:** Specifies how overflowed content that is not displayed is signaled to users (\`ellipsis\`, \`clip\`).
`
  },
  {
    num: "07",
    name: "css-fonts",
    title: "CSS Fonts",
    description: "Understand families, weights, font imports, standard web-safe structures, and Google Web Fonts integrations.",
    html: `
<!-- Google Fonts Link for demonstration -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<div class="fonts-box">
  <h1>Font Typography Lab</h1>
  
  <div class="font-section web-safe">
    <h3>Standard Web Safe Serif</h3>
    <p class="serif-demo">Georgia, serif: "The quick brown fox jumps over the lazy dog."</p>
  </div>

  <div class="font-section sans-serif">
    <h3>Standard Web Safe Sans-Serif</h3>
    <p class="sans-demo">Arial, Helvetica, sans-serif: "The quick brown fox jumps over the lazy dog."</p>
  </div>

  <div class="font-section google-poppins">
    <h3>Google Font: Poppins (Sans-Serif)</h3>
    <p class="poppins-demo">Modern, clean geometric layout for dashboards, body text, and interfaces.</p>
  </div>

  <div class="font-section google-playfair">
    <h3>Google Font: Playfair Display (Serif)</h3>
    <p class="playfair-demo">Elegant serif font suitable for headlines, magazines, and luxury branding.</p>
  </div>
  
  <div class="weight-matrix">
    <span class="w-light">Light 300</span>
    <span class="w-regular">Regular 400</span>
    <span class="w-bold">Bold 600</span>
    <span class="w-italic">Italic styling</span>
  </div>
</div>
`,
    css: `/* 07. CSS Fonts */

body {
  background-color: #f1f5f9;
  margin: 0;
  padding: 30px;
  display: flex;
  justify-content: center;
}

.fonts-box {
  background: white;
  padding: 40px;
  border-radius: 12px;
  max-width: 650px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-align: center;
  margin-top: 0;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 15px;
}

.font-section {
  margin: 20px 0;
}

.font-section h3 {
  font-family: sans-serif;
  font-size: 14px;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 5px;
}

/* Font Families classes */
.serif-demo {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 16px;
}

.sans-demo {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

.poppins-demo {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
}

.playfair-demo {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-style: italic;
  color: #0f172a;
}

/* Font styles matrix */
.weight-matrix {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #e2e8f0;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.w-light {
  font-weight: 300;
}

.w-regular {
  font-weight: 400;
}

.w-bold {
  font-weight: 600;
}

.w-italic {
  font-style: italic;
}
`,
    readme: `# Chapter 07: CSS Fonts

Typography is vital for UI/UX styling. Learn how to format text styles, sizes, and import third-party fonts.

## Concepts Covered:
- **font-family:** Defines preferred and fallback font structures.
- **font-size:** Sets letter scales (px, rem, em).
- **font-weight:** Modifies bold intensities (e.g. 100, 300, 400, 700).
- **font-style:** Formats italic or normal text.
- **Web Safe Fonts:** Standard fonts available across most operating systems (Arial, Georgia, Courier).
- **Google Fonts:** Load custom typeface stylesheets via CDN using external link elements or \`@import\`.
`
  },
  {
    num: "08",
    name: "css-box-model",
    title: "CSS Box Model",
    description: "Understand the foundation of CSS layouts: Content, Padding, Border, Margin, and Box-Sizing differences.",
    html: `
<div class="box-model-container">
  <h1>CSS Box Model Visualizer</h1>
  
  <div class="box-wrapper content-box-mode">
    <h3>box-sizing: content-box (Default)</h3>
    <p>Width = 200px + 20px padding + 5px border = 250px total! Height expands outwards from the dimensions set.</p>
    <div class="demo-box content-box">
      Content Box
    </div>
  </div>

  <div class="box-wrapper border-box-mode">
    <h3>box-sizing: border-box (Recommended)</h3>
    <p>Width = 200px (padding and border are absorbed inside!). Easier to plan layouts.</p>
    <div class="demo-box border-box">
      Border Box
    </div>
  </div>
  
  <div class="interactive-legend">
    <span class="legend-margin">Margin</span>
    <span class="legend-border">Border</span>
    <span class="legend-padding">Padding</span>
    <span class="legend-content">Content</span>
  </div>
</div>
`,
    css: `/* 08. CSS Box Model */

body {
  font-family: -apple-system, sans-serif;
  background-color: #f8fafc;
  display: flex;
  justify-content: center;
  padding: 30px 10px;
}

.box-model-container {
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

h1 {
  text-align: center;
  margin-top: 0;
  color: #1e293b;
}

.box-wrapper {
  margin: 30px 0;
  padding: 15px;
  border-radius: 8px;
  background: #f1f5f9;
}

/* The Core Visualizer Box */
.demo-box {
  width: 200px;
  height: 100px;
  margin: 25px auto;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  
  /* Core Box Model values: */
  padding: 20px;
  border: 5px solid #4f46e5;
  background-color: #a5b4fc; /* content area representation */
  color: #1e1b4b;
  outline: 10px solid #fed7aa; /* visual helper representing margin */
}

/* Sizing configurations */
.content-box {
  box-sizing: content-box;
}

.border-box {
  box-sizing: border-box;
}

/* Legend detailing parts of the box model */
.interactive-legend {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  font-size: 13px;
  font-weight: 600;
}

.interactive-legend span {
  padding: 5px 10px;
  border-radius: 4px;
}

.legend-margin { background-color: #fed7aa; color: #7c2d12; }
.legend-border { background-color: #4f46e5; color: white; }
.legend-padding { background-color: #c7d2fe; color: #312e81; }
.legend-content { background-color: #a5b4fc; color: #1e1b4b; }
`,
    readme: `# Chapter 08: CSS Box Model

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

## Box Model Layers:
1. **Content**: The text/images of the tag.
2. **Padding**: Transparent spacing around content inside borders.
3. **Border**: The frame bounding the padding and content.
4. **Margin**: Transparent spacing outside borders to separate adjacent blocks.

## Width and Height calculations:
- \`content-box\` (default): \`Total Width = width + padding-left + padding-right + border-left + border-right\`
- \`border-box\` (modern standard): \`Total Width = width\` (padding and borders shrink content area).
`
  },
  {
    num: "09",
    name: "css-borders",
    title: "CSS Borders",
    description: "Learn border designs, styles, colored borders, border radii, and rounded corners configuration.",
    html: `
<div class="borders-container">
  <h1>CSS Borders Experiment</h1>
  
  <div class="grid">
    <div class="box border-solid">Solid Border</div>
    <div class="box border-dashed">Dashed Border</div>
    <div class="box border-dotted">Dotted Border</div>
    <div class="box border-double">Double Border</div>
    <div class="box border-individual">Top & Bottom Only</div>
    <div class="box rounded-simple">Simple Radius (8px)</div>
    <div class="box rounded-oval">Oval Border (50%)</div>
    <div class="box rounded-custom">Custom Corners</div>
  </div>
</div>
`,
    css: `/* 09. CSS Borders */

body {
  font-family: sans-serif;
  background-color: #1e293b;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: 0;
}

.borders-container {
  max-width: 800px;
  width: 100%;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}

.box {
  background-color: #334155;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
}

/* Border Styles Definitions */
.border-solid {
  border: 4px solid #10b981;
}

.border-dashed {
  border: 4px dashed #f59e0b;
}

.border-dotted {
  border: 4px dotted #ec4899;
}

.border-double {
  border: 6px double #3b82f6;
}

/* Border direction overrides */
.border-individual {
  border-top: 5px solid #ef4444;
  border-bottom: 5px solid #a855f7;
}

/* Border Radius examples */
.rounded-simple {
  border: 2px solid white;
  border-radius: 8px;
}

.rounded-oval {
  border: 2px solid #06b6d4;
  border-radius: 50%; /* perfect circle/oval */
}

/* Custom rounded corners: top-left, top-right, bottom-right, bottom-left */
.rounded-custom {
  border: 2px solid #84cc16;
  border-radius: 30px 10px 30px 0;
}
`,
    readme: `# Chapter 09: CSS Borders

Borders allow you to specify the style, width, and color of an element's border.

## Border Properties:
- **border-style:** \`solid\`, \`dashed\`, \`dotted\`, \`double\`, \`groove\`, \`ridge\`, \`inset\`, \`outset\`, \`none\`.
- **border-width:** Defined in px, thick, medium, thin.
- **border-color:** Set using standard CSS color systems.
- **border-radius:** Specifies rounded corner curves. Set to \`50%\` to make circular layouts.
`
  },
  {
    num: "10",
    name: "css-display-properties",
    title: "CSS Display Properties",
    description: "Understand layout rendering categories: Block, Inline, Inline-Block, Display None vs Visibility Hidden.",
    html: `
<div class="display-container">
  <h1>CSS Display Mechanics</h1>
  
  <div class="section block-demo">
    <h3>1. Block Elements (Takes full width)</h3>
    <div class="block-box">Block Box 1</div>
    <div class="block-box">Block Box 2</div>
  </div>

  <div class="section inline-demo">
    <h3>2. Inline Elements (Shrinks to fit contents)</h3>
    <span class="inline-box">Inline 1</span>
    <span class="inline-box">Inline 2</span>
    <span class="inline-box">Inline 3</span>
  </div>

  <div class="section inline-block-demo">
    <h3>3. Inline-Block (Inline grid, supports size/padding)</h3>
    <div class="inline-block-box">Box 1</div>
    <div class="inline-block-box">Box 2</div>
  </div>

  <div class="section visibility-comparison">
    <h3>4. Display: None vs Visibility: Hidden</h3>
    <div class="flex-row">
      <div class="card normal">Visible Box</div>
      <div class="card gone">Display: None (removes block)</div>
      <div class="card invisible">Visibility: Hidden (retains space)</div>
      <div class="card normal">Next Box</div>
    </div>
  </div>
</div>
`,
    css: `/* 10. CSS Display Properties */

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
  color: #1f2937;
  padding: 30px;
}

.display-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

h1 {
  text-align: center;
  color: #111827;
}

.section {
  margin: 30px 0;
  padding: 15px;
  border-radius: 8px;
  background: #f9fafb;
}

.section h3 {
  margin-top: 0;
  color: #4b5563;
}

/* Block style */
.block-box {
  background-color: #4f46e5;
  color: white;
  padding: 12px;
  margin: 8px 0;
  border-radius: 4px;
}

/* Inline style (ignores top/bottom margins & height) */
.inline-box {
  background-color: #06b6d4;
  color: white;
  padding: 5px 12px;
  margin: 0 5px;
  border-radius: 4px;
}

/* Inline-block styles (respects padding, margins, width, height) */
.inline-block-box {
  display: inline-block;
  background-color: #10b981;
  color: white;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin: 5px;
  border-radius: 4px;
}

/* Hidden visual testing */
.flex-row {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.card {
  padding: 15px;
  border-radius: 6px;
  background-color: #e5e7eb;
  border: 1px solid #d1d5db;
  text-align: center;
  flex: 1;
}

.gone {
  display: none; /* Element removed from flow entirely */
}

.invisible {
  visibility: hidden; /* Element invisible but holds its spatial layout position */
}
`,
    readme: `# Chapter 10: CSS Display Properties

The \`display\` property specifies the display behavior of an HTML tag.

## Display Modes:
- **block:** Takes up the full width available and starts on a new line (e.g. \`div\`, \`p\`, \`section\`).
- **inline:** Takes up only as much width as necessary, does not start on a new line, and ignores top/bottom widths & height adjustments (e.g. \`span\`, \`a\`, \`strong\`).
- **inline-block:** Behaves like an inline element but allows setting width, height, margins, and paddings.
- **none:** Completely hides and removes the element from the document layout.
- **visibility: hidden:** Hides the element, but the element still takes up the same space in the layout.
`
  },
  {
    num: "11",
    name: "css-positioning",
    title: "CSS Positioning",
    description: "Position HTML content relative to original places, viewport coordinates, scroll offsets, and z-index layers.",
    html: `
<div class="positioning-container">
  <h1>CSS Positioning Lab</h1>
  
  <div class="pos-area static-area">
    <h3>1. Static (Default Flow)</h3>
    <div class="box box-static">Static Box</div>
  </div>

  <div class="pos-area relative-area">
    <h3>2. Relative (Offset from original flow)</h3>
    <div class="box box-relative">Relative (top: 15px, left: 30px)</div>
  </div>

  <div class="pos-area absolute-area">
    <h3>3. Absolute (Positioned relative to relative parent)</h3>
    <div class="box box-absolute">Absolute (bottom: 10px, right: 10px)</div>
  </div>

  <div class="pos-area z-index-area">
    <h3>4. Z-index Layering (Overlapping components)</h3>
    <div class="box layer-1">Back (z-index: 1)</div>
    <div class="box layer-2">Front (z-index: 2)</div>
  </div>

  <!-- Sticky elements inside a scrolling context -->
  <div class="scroll-container">
    <div class="box-sticky">Sticky Header (sticks at top: 0 while scrolling)</div>
    <p>Scroll down to see the sticky header freeze in position...</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tell.</p>
    <p>Vestibulum feugiat sodales facilisis. Curabitur sed convallis neque. Vivamus a nisi.</p>
    <p>Donec porttitor sollicitudin lorem id imperdiet. Etiam et nibh in lorem ultrices.</p>
  </div>

  <!-- Fixed box anchored directly to the viewport -->
  <div class="box-fixed">Fixed Viewport Box</div>
</div>
`,
    css: `/* 11. CSS Positioning */

body {
  font-family: sans-serif;
  background-color: #f1f5f9;
  padding: 30px;
  margin: 0;
}

.positioning-container {
  max-width: 700px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

h1 {
  text-align: center;
  color: #1e293b;
}

.pos-area {
  position: relative; /* Essential for relative positioning checks */
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  padding: 20px;
  min-height: 140px;
  margin-bottom: 25px;
  border-radius: 6px;
}

.box {
  width: 150px;
  height: 60px;
  border-radius: 4px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
}

/* Static position */
.box-static {
  background-color: #64748b;
  position: static;
}

/* Relative position */
.box-relative {
  background-color: #3b82f6;
  position: relative;
  top: 15px;
  left: 30px;
}

/* Absolute position inside relative parent */
.box-absolute {
  background-color: #ef4444;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

/* Z-Index Overlapping layers */
.z-index-area {
  min-height: 180px;
}

.layer-1 {
  background-color: #a855f7;
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 1;
}

.layer-2 {
  background-color: #ec4899;
  position: absolute;
  top: 60px;
  left: 80px;
  z-index: 2; /* Sits over layer-1 */
}

/* Fixed viewport positioning */
.box-fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #10b981;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  font-size: 12px;
  font-weight: bold;
  z-index: 9999;
}

/* Sticky scrolling context */
.scroll-container {
  height: 200px;
  overflow-y: scroll;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 10px;
  background-color: #fafafa;
}

.box-sticky {
  position: sticky;
  top: 0;
  background-color: #f59e0b;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border-radius: 4px;
  margin-bottom: 15px;
}
`,
    readme: `# Chapter 11: CSS Positioning

The \`position\` property specifies the type of positioning method used for an element.

## Position Values:
- **static:** Default browser layout. Not affected by top/bottom/left/right properties.
- **relative:** Positioned relative to its normal position. Offsets leave a blank space where the element originally was.
- **absolute:** Positioned relative to the nearest positioned ancestor (non-static). It is removed from the document flow.
- **fixed:** Positioned relative to the viewport. Stays in the exact same location even when scrolling.
- **sticky:** Alternates between relative and fixed based on the scroll position.
- **z-index:** Specifies the stack order of elements. Only works on positioned elements.
`
  },
  {
    num: "12",
    name: "css-overflow",
    title: "CSS Overflow",
    description: "Master basic, axis, text ellipsis, line clamps, zoom cropping, chat windows, snapping carousels, custom scrollbars, and overscroll-behavior.",
    html: `
<div class="playground-container">
  <header class="playground-header">
    <h1>CSS Overflow Lab</h1>
    <p>Explore basic, axis, text, multi-line, modern overscroll, and scroll snap behaviors in CSS3.</p>
  </header>

  <!-- 1. Basic Overflow Types -->
  <section class="pg-section">
    <h2>1. Basic Overflow Types</h2>
    <div class="pg-grid">
      <div class="pg-card">
        <h3>visible (Default)</h3>
        <div class="demo-box overflow-visible">
          <div class="overflowing-content">
            This content overflows its parent box because overflow is set to visible. Notice how the text spills outside the borders and renders over neighboring elements, creating layout issues if not handled carefully.
          </div>
        </div>
      </div>
      <div class="pg-card">
        <h3>hidden</h3>
        <div class="demo-box overflow-hidden">
          <div class="overflowing-content">
            This content overflows its parent box, but because overflow is set to hidden, the excess text is completely clipped and remains invisible. There is no way for the user to scroll or view the hidden text.
          </div>
        </div>
      </div>
      <div class="pg-card">
        <h3>clip (Modern CSS)</h3>
        <div class="demo-box overflow-clip">
          <div class="overflowing-content">
            This content is clipped at the element's exact margin box using overflow: clip. Unlike hidden, clip prevents all scrolling, including programmatic scrolling (like element.scrollTo) and saves layout rendering memory.
          </div>
        </div>
      </div>
      <div class="pg-card">
        <h3>scroll</h3>
        <div class="demo-box overflow-scroll">
          <div class="overflowing-content">
            This container forces scrollbars on both horizontal and vertical axes (overflow: scroll), regardless of whether the text overflows or fits inside.
          </div>
        </div>
      </div>
      <div class="pg-card">
        <h3>auto (Recommended)</h3>
        <div class="demo-box overflow-auto">
          <div class="overflowing-content">
            This container adds scrollbars dynamically (overflow: auto) only when the content is too large. If the text fits, no scrollbars are shown, keeping the UI clean.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. Axis Overflow (Horizontal Image Gallery) -->
  <section class="pg-section">
    <h2>2. Axis Overflow (Horizontal Image Gallery)</h2>
    <p class="pg-desc"><code>overflow-x: scroll; overflow-y: hidden;</code> - Scrolls horizontally while clipping vertical dimensions.</p>
    <div class="horizontal-gallery">
      <div class="gallery-track">
        <div class="gallery-item" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);">Image 1</div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #ec4899, #f43f5e);">Image 2</div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #10b981, #059669);">Image 3</div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #f59e0b, #d97706);">Image 4</div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #6366f1, #a855f7);">Image 5</div>
      </div>
    </div>
  </section>

  <!-- 3. Text Overflow Truncation -->
  <section class="pg-section">
    <h2>3. Text Overflow & Multi-Line Truncation</h2>
    <div class="pg-grid-2">
      <!-- Single Line Ellipsis -->
      <div class="pg-card">
        <h3>Single-Line Text Ellipsis (Amazon/Flipkart style)</h3>
        <div class="ellipsis-card">
          <h4 class="product-title">Very Long Product Title: Wireless Noise-Cancelling Headphones Pro Max Edition II</h4>
          <p class="product-price">$199.99</p>
        </div>
        <p class="pg-note">Uses <code>white-space: nowrap; overflow: hidden; text-overflow: ellipsis;</code></p>
      </div>

      <!-- Multi-Line Truncation -->
      <div class="pg-card">
        <h3>Multi-Line Clamp (News/Article Card)</h3>
        <div class="clamp-card">
          <h4 class="article-title">CSS3 Breaking News</h4>
          <p class="article-preview">
            Modern CSS has introduced standard properties that replace old JavaScript hacks. In this article, we cover how the latest layout modules handle overflow, scroll snap coordinates, container query queries, and subgrid styles to make fluid layouts robust on any device screen size.
          </p>
        </div>
        <p class="pg-note">Uses <code>-webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;</code></p>
      </div>
    </div>
  </section>

  <!-- 4. Image Cropping Zoom -->
  <section class="pg-section">
    <h2>4. Image Cropping (Zoom on Hover)</h2>
    <p class="pg-desc">Uses <code>overflow: hidden;</code> on the parent frame combined with <code>transform: scale(1.2);</code> on the image.</p>
    <div class="zoom-card">
      <div class="zoom-frame">
        <div class="mock-image">📷 Beautiful Landscape</div>
      </div>
      <div class="zoom-details">
        <h4>Portfolio Item</h4>
        <p>Hover over the image to see a clean overflow crop zoom effect.</p>
      </div>
    </div>
  </section>

  <!-- 5. Real-World Scrollable Components -->
  <section class="pg-section">
    <h2>5. Real-World Scrollable Components</h2>
    <div class="pg-grid-2">
      <!-- WhatsApp Style Chat Window -->
      <div class="pg-card">
        <h3>Scrollable Chat Window (WhatsApp Style)</h3>
        <div class="chat-container">
          <div class="chat-bubble received">Hey! Are we still reviewing CSS Overflow today?</div>
          <div class="chat-bubble sent">Yes! We are covering axis scroll, custom scrollbars, and clamp properties.</div>
          <div class="chat-bubble received">Great! Can we check out scroll-snapping as well?</div>
          <div class="chat-bubble sent">Definitely, we have card sliders and carousel snap points setup.</div>
          <div class="chat-bubble received">Awesome, see you in the workspace!</div>
        </div>
        <p class="pg-note">Uses <code>overflow-y: auto;</code> with fixed-height container.</p>
      </div>

      <!-- Code Editor (VS Code Style) -->
      <div class="pg-card">
        <h3>Code Editor (VS Code/GitHub style)</h3>
        <div class="code-editor">
          <pre><code>// CSS3 Custom Scrollbars Example
.custom-scroll {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #6366f1 #1e293b;
}

.custom-scroll::-webkit-scrollbar {
  width: 8px;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: #6366f1;
  border-radius: 4px;
}</code></pre>
        </div>
        <p class="pg-note">Uses <code>overflow: auto; white-space: pre;</code></p>
      </div>
    </div>
  </section>

  <!-- 6. Netflix Card Slider with Scroll Snap -->
  <section class="pg-section">
    <h2>6. Horizontal Card Slider (Netflix/Spotify style)</h2>
    <p class="pg-desc">Uses <code>overflow-x: auto; scroll-snap-type: x mandatory;</code> for smooth snapping card sliders.</p>
    <div class="card-slider">
      <div class="slider-card">
        <div class="slider-img" style="background: #e11d48;">Show 1</div>
        <h4>Card Title 1</h4>
      </div>
      <div class="slider-card">
        <div class="slider-img" style="background: #2563eb;">Show 2</div>
        <h4>Card Title 2</h4>
      </div>
      <div class="slider-card">
        <div class="slider-img" style="background: #16a34a;">Show 3</div>
        <h4>Card Title 3</h4>
      </div>
      <div class="slider-card">
        <div class="slider-img" style="background: #d97706;">Show 4</div>
        <h4>Card Title 4</h4>
      </div>
      <div class="slider-card">
        <div class="slider-img" style="background: #7c3aed;">Show 5</div>
        <h4>Card Title 5</h4>
      </div>
    </div>
  </section>

  <!-- 7. Overscroll Behavior & Smooth Scroll -->
  <section class="pg-section">
    <h2>7. Overscroll Behavior Control</h2>
    <p class="pg-desc">Scroll inside the modal container. Notice that reaching the scroll boundary does NOT trigger scrolling on the main page body (prevents scroll chaining).</p>
    <div class="modal-box-demo">
      <div class="modal-header">Modal Window (overscroll-behavior: contain)</div>
      <div class="modal-body">
        <p>1. Start scrolling here...</p>
        <p>2. Scroll down further...</p>
        <p>3. Standard modal scroll behavior often passes (chains) scroll events to the outer parent document when you hit the boundary.</p>
        <p>4. Setting <code>overscroll-behavior: contain;</code> blocks scroll chaining, keeping the parent page scroll intact!</p>
        <p>5. Scroll limits reached.</p>
      </div>
    </div>
  </section>
</div>
`,
    css: `/* 12. CSS Overflow Playground Stylesheet */

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  color: #334155;
  padding: 30px 15px;
  margin: 0;
  line-height: 1.6;
}

.playground-container {
  max-width: 850px;
  margin: 0 auto;
}

.playground-header {
  text-align: center;
  margin-bottom: 30px;
}

.playground-header h1 {
  color: #1e293b;
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.playground-header p {
  color: #64748b;
  font-size: 13px;
}

.pg-section {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 25px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}

.pg-section h2 {
  font-size: 1.15rem;
  color: #4f46e5;
  margin-top: 0;
  margin-bottom: 12px;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 6px;
}

.pg-desc {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 12px;
}

.pg-note {
  font-size: 11px;
  color: #4f46e5;
  margin-top: 8px;
  background: #f5f3ff;
  padding: 4px 10px;
  border-radius: 4px;
  display: inline-block;
}

/* 1. Basic Overflow Grid */
.pg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 15px;
}

.pg-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  flex-direction: column;
}

.pg-card h3 {
  font-size: 12px;
  color: #475569;
  margin-top: 0;
  margin-bottom: 10px;
}

.demo-box {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  height: 90px;
  font-size: 11px;
  color: #475569;
  padding: 8px;
}

.overflowing-content {
  width: 100%;
}

.overflow-visible .overflowing-content { overflow: visible; }
.overflow-hidden .overflowing-content { overflow: hidden; }
.overflow-clip .overflowing-content { overflow: clip; }
.overflow-scroll .overflowing-content { overflow: scroll; }
.overflow-auto .overflowing-content { overflow: auto; }

.overflow-visible { overflow: visible; }
.overflow-hidden { overflow: hidden; }
.overflow-clip { overflow: clip; }
.overflow-scroll { overflow: scroll; }
.overflow-auto { overflow: auto; }

/* 2. Axis Overflow Horizontal Image Gallery */
.horizontal-gallery {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 8px;
  background: #f8fafc;
}

.gallery-track {
  display: flex;
  gap: 12px;
  width: max-content;
}

.gallery-item {
  width: 150px;
  height: 100px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  font-size: 13px;
}

/* 3. Text Overflow & Multi-Line Clamp */
.pg-grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
}

.ellipsis-card, .clamp-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 10px;
}

.product-title {
  font-size: 13px;
  color: #1e293b;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-price {
  color: #16a34a;
  font-weight: bold;
  font-size: 12px;
  margin: 0;
}

.article-title {
  font-size: 13px;
  color: #4f46e5;
  margin: 0 0 6px 0;
}

.article-preview {
  font-size: 11px;
  color: #475569;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 4. Image Cropping */
.zoom-card {
  max-width: 280px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
}

.zoom-frame {
  width: 100%;
  height: 140px;
  overflow: hidden;
  background: #f1f5f9;
}

.mock-image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  transition: transform 0.4s ease;
}

.zoom-card:hover .mock-image {
  transform: scale(1.2);
}

.zoom-details {
  padding: 12px;
}

.zoom-details h4 {
  margin: 0 0 4px 0;
  color: #1e293b;
  font-size: 13px;
}

.zoom-details p {
  margin: 0;
  font-size: 11px;
  color: #64748b;
}

/* 5. WhatsApp Chat Window & Code Editor */
.chat-container {
  height: 160px;
  overflow-y: auto;
  background: #efeae2;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.chat-bubble {
  max-width: 80%;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 11px;
  line-height: 1.4;
}

.chat-bubble.received {
  background: #ffffff;
  color: #111b21;
  align-self: flex-start;
  box-shadow: 0 1px 0.5px rgba(0,0,0,0.13);
}

.chat-bubble.sent {
  background: #d9fdd3;
  color: #111b21;
  align-self: flex-end;
  box-shadow: 0 1px 0.5px rgba(0,0,0,0.13);
}

.code-editor {
  height: 160px;
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 4px;
  padding: 10px;
  overflow: auto;
}

.code-editor pre {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  overflow: visible;
  height: auto;
}

.code-editor code {
  white-space: pre;
  color: #c9d1d9;
  font-family: monospace;
  font-size: 11px;
}

/* 6. Netflix Card Slider with Scroll Snap */
.card-slider {
  display: flex;
  gap: 15px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
}

.slider-card {
  min-width: 130px;
  flex: 0 0 130px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 8px;
  scroll-snap-align: start;
  text-align: center;
}

.slider-img {
  width: 100%;
  height: 80px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  font-size: 12px;
  margin-bottom: 6px;
}

.slider-card h4 {
  font-size: 11px;
  color: #1e293b;
  margin: 0;
}

/* 7. Overscroll Behavior modal demo */
.modal-box-demo {
  max-width: 320px;
  margin: 0 auto;
  border: 1px solid #cbd5e1;
  background: #ffffff;
  border-radius: 6px;
  overflow: hidden;
}

.modal-header {
  background: #f1f5f9;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: bold;
  color: #334155;
  border-bottom: 1px solid #cbd5e1;
}

.modal-body {
  height: 100px;
  overflow-y: auto;
  padding: 10px;
  font-size: 11px;
  color: #64748b;
  overscroll-behavior: contain;
}

.modal-body p {
  margin: 0 0 8px 0;
}

/* Modern Scrollbar Styling for elements */
.horizontal-gallery::-webkit-scrollbar,
.chat-container::-webkit-scrollbar,
.code-editor::-webkit-scrollbar,
.card-slider::-webkit-scrollbar,
.modal-body::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.horizontal-gallery::-webkit-scrollbar-track,
.chat-container::-webkit-scrollbar-track,
.code-editor::-webkit-scrollbar-track,
.card-slider::-webkit-scrollbar-track,
.modal-body::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.02);
  border-radius: 2px;
}

.horizontal-gallery::-webkit-scrollbar-thumb,
.chat-container::-webkit-scrollbar-thumb,
.code-editor::-webkit-scrollbar-thumb,
.card-slider::-webkit-scrollbar-thumb,
.modal-body::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 2px;
}

/* Firefox scrollbar styles */
.horizontal-gallery, .chat-container, .code-editor, .card-slider, .modal-body {
  scrollbar-width: thin;
  scrollbar-color: #94a3b8 rgba(0, 0, 0, 0.02);
}
`,
    readme: `# Chapter 12: CSS Overflow

The \`overflow\` property controls what happens to content that is too big to fit into an area.

---

## 1. Introduction
* **What is Overflow?** Overflow occurs when the size of content (text, images, or elements) exceeds the dimensions of its parent container box.
* **Why it happens:** In CSS, if an element has a fixed size (\`width\` and \`height\`) or is constrained by viewport dimensions, any child content that is larger than those dimensions will spill out.
* **Real-world Examples:** Scrollable chat screens, news preview cards, image zoom effects, and horizontal Netflix-style sliders.

---

## 2. Overflow Types
* \`overflow: visible;\` - Default value. Overflowing content is not clipped and renders outside the element's box over other elements.
* \`overflow: hidden;\` - Clips the overflow. Excess content is hidden and cannot be scrolled or accessed.
* \`overflow: clip;\` - Similar to \`hidden\`, but prevents programmatic scrolling (like \`scrollTo()\`) and respects precise margin boxes.
* \`overflow: scroll;\` - Clips the overflow and forces both horizontal and vertical scrollbars to display.
* \`overflow: auto;\` - Adds scrollbars dynamically ONLY when content exceeds layout boundaries. Recommended for scrollable areas.

---

## 3. Axis Overflow
CSS allows managing overflow on X and Y axes independently using:
* \`overflow-x: scroll;\` - Force horizontal scrollbar.
* \`overflow-y: hidden;\` - Hide vertical scrollbar.

---

## 4. Text Overflow (Ellipsis)
To truncate long text into a single line with an ellipsis (...):
\`\`\`css
.single-line-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
\`\`\`
Commonly used for product cards on Amazon, Flipkart, LinkedIn, and GitHub.

---

## 5. Multi-line Text Truncation (Line Clamp)
To limit paragraphs to a specific number of lines:
\`\`\`css
.multi-line-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
\`\`\`

---

## 6. Image Cropping
Combining \`overflow: hidden;\` on a frame with \`transform: scale()\` on hover allows zoom crops without breaking layouts:
\`\`\`css
.frame {
  overflow: hidden;
}
.image:hover {
  transform: scale(1.2);
}
\`\`\`

---

## 7. Scroll Snap & Card Sliders
Standard horizontal sliders (like Netflix stories or Spotify albums) use scroll snapping for native mobile sliding transitions:
\`\`\`css
.slider {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.card {
  scroll-snap-align: start;
}
\`\`\`

---

## 8. Overscroll Behavior
Prevents "scroll chaining" (scrolling inside a modal or sidebar that automatically scrolls the parent page once you hit the scroll boundaries):
* \`overscroll-behavior: contain;\` - Prevents scroll events from propagating to parent viewports.
* \`overscroll-behavior: none;\` - Same as contain, but also disables default bounce/overscroll elastic effects.

---

## 9. Modern Scrollbar Styling
Customize scrollbar aesthetics across major browsers:
* **Webkit Browsers (Chrome/Safari/Edge):**
  * \`::-webkit-scrollbar\` - Target scrollbar dimensions.
  * \`::-webkit-scrollbar-track\` - Style track background.
  * \`::-webkit-scrollbar-thumb\` - Style the scroll handle.
* **Firefox:**
  * \`scrollbar-width: thin | none;\`
  * \`scrollbar-color: thumb_color track_color;\`

---

## 10. Smooth Scrolling
Enables smooth scroll transitions on anchored navigations:
\`\`\`css
html {
  scroll-behavior: smooth;
}
\`\`\`

---

## 11. Comparison Table

| Property | Clips Content | Scrollbar Display | Programmatic Scrolling |
| :--- | :--- | :--- | :--- |
| \`visible\` | ❌ No | ❌ None | ✅ Allowed |
| \`hidden\` | ✅ Yes | ❌ None | ✅ Allowed |
| \`clip\` | ✅ Yes | ❌ None | ❌ Blocked |
| \`scroll\` | ✅ Yes | ✅ Always | ✅ Allowed |
| \`auto\` | ✅ Yes | ⚙️ Auto (if needed) | ✅ Allowed |

---

## 12. Real-world Examples Table

| Brand / Website | Overflow Techniques Used |
| :--- | :--- |
| **WhatsApp** | \`overflow-y: auto\` chat container |
| **Amazon / Flipkart** | \`text-overflow: ellipsis\` title cards |
| **Netflix / Spotify** | \`overflow-x: auto\` card sliders |
| **GitHub / VS Code** | \`overflow: auto\` scrollable pre blocks |
| **Facebook / Instagram** | Scroll-snap story sliders |

---

## 13. Overflow Decision Tree
\`\`\`
                Content Overflow?
                      │
         ┌────────────┴─────────────┐
         │                          │
       Yes                         No
         │                          │
Need scrollbar?                 visible
         │
   ┌─────┴─────┐
   │           │
  Yes         No
   │           │
 auto       hidden
   │
Always show?
   │
 scroll
\`\`\`

---

## 14. Best Practices
* ✅ Use \`overflow: auto\` for most scroll containers to avoid permanent empty scrollbar tracks.
* ✅ Use \`text-overflow: ellipsis\` to prevent layouts from expanding due to long title texts.
* ✅ Apply \`overscroll-behavior: contain\` to overlays, dialogs, and panels to block background page scrolling.
* ✅ Rely on \`overflow: clip\` rather than \`hidden\` if no scrolling is required to save layout memory rendering cycles.
`
  },
  {
    num: "13",
    name: "css-units",
    title: "CSS Units",
    description: "Compare absolute units (px) with relative units including %, em, rem, vw, and vh viewport scales.",
    html: `
<div class="units-container">
  <h1>CSS Units Lab</h1>
  
  <div class="units-group">
    <h3>Absolute Units (px)</h3>
    <div class="unit-box box-px">width: 250px</div>
  </div>

  <div class="units-group">
    <h3>Percentage (%) relative to parent</h3>
    <div class="parent-bar">
      <div class="unit-box box-percent">width: 70%</div>
    </div>
  </div>

  <div class="units-group">
    <h3>Relative to Font-Size (em / rem)</h3>
    <div class="font-parent">
      Parent Font (20px)
      <div class="unit-box box-em">width: 10em (200px)</div>
      <div class="unit-box box-rem">width: 10rem (160px from root)</div>
    </div>
  </div>

  <div class="units-group">
    <h3>Viewport Dimensions (vw / vh)</h3>
    <div class="unit-box box-vw">width: 20vw</div>
    <div class="unit-box box-vh">height: 10vh</div>
  </div>
</div>
`,
    css: `/* 13. CSS Units */

/* Setting root html font-size = 16px as standard */
html {
  font-size: 16px;
}

body {
  font-family: sans-serif;
  background-color: #f8fafc;
  color: #334155;
  padding: 30px;
  margin: 0;
}

.units-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

h1 {
  text-align: center;
  color: #1e293b;
}

.units-group {
  margin: 25px 0;
  padding: 15px;
  background: #f1f5f9;
  border-radius: 6px;
}

.units-group h3 {
  margin-top: 0;
  font-size: 15px;
  color: #64748b;
}

.unit-box {
  background-color: #4f46e5;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 13px;
}

/* 1. Absolute px */
.box-px {
  width: 250px;
}

/* 2. Parent-relative % */
.parent-bar {
  background-color: #cbd5e1;
  padding: 5px;
  border-radius: 4px;
}
.box-percent {
  width: 70%;
  background-color: #10b981;
}

/* 3. em and rem configurations */
.font-parent {
  font-size: 20px; /* Overrides current container font size */
  color: #1e293b;
}

.box-em {
  width: 10em; /* 10 times parent font size = 200px */
  background-color: #f59e0b;
  margin: 10px 0;
}

.box-rem {
  width: 10rem; /* 10 times root html font size = 160px */
  background-color: #ef4444;
}

/* 4. Viewport units */
.box-vw {
  width: 20vw; /* 20% of viewport width */
  background-color: #8b5cf6;
  margin-bottom: 10px;
}

.box-vh {
  height: 10vh; /* 10% of viewport height */
  width: 150px;
  background-color: #ec4899;
}
`,
    readme: `# Chapter 13: CSS Units

CSS has several different units for expressing length.

## Unit Categories:
- **Absolute Units (px):** Pixels are fixed and do not scale with user settings.
- **Percentages (%):** Scale relative to the parent element's dimensions.
- **em:** Relative to the font size of the element itself (or parent).
- **rem:** Relative to the font size of the root HTML element (usually 16px).
- **vw:** Viewport Width percentage (e.g. \`100vw\` is full screen width).
- **vh:** Viewport Height percentage (e.g. \`100vh\` is full screen height).
- **vmin & vmax:** Relative to the smaller/larger of viewport width and height.
`
  },
  {
    num: "14",
    name: "css-flexbox",
    title: "CSS Flexbox Layout",
    description: "Align items smoothly in 1D space using flex containers, justify content alignments, wrap rules, and growth factors.",
    html: `
<div class="container">
  <h1>Chapter 14: CSS Flexbox Playground</h1>

  <!-- ===================================== -->
  <!-- 1. Flex Direction -->
  <!-- ===================================== -->
  <h2>1. Flex Direction</h2>
  
  <h3>flex-direction: row</h3>
  <div class="flex-row">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>

  <h3>flex-direction: column</h3>
  <div class="flex-column">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 2. Justify Content -->
  <!-- ===================================== -->
  <h2>2. Justify Content</h2>

  <h3>justify-content: flex-start</h3>
  <div class="justify-start">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>

  <h3>justify-content: center</h3>
  <div class="justify-center">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>

  <h3>justify-content: flex-end</h3>
  <div class="justify-end">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>

  <h3>justify-content: space-between</h3>
  <div class="justify-between">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>

  <h3>justify-content: space-around</h3>
  <div class="justify-around">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>

  <h3>justify-content: space-evenly</h3>
  <div class="justify-evenly">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 3. Align Items -->
  <!-- ===================================== -->
  <h2>3. Align Items</h2>

  <h3>align-items: flex-start</h3>
  <div class="align-start">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>

  <h3>align-items: center</h3>
  <div class="align-center">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>

  <h3>align-items: flex-end</h3>
  <div class="align-end">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 4. Flex Wrap -->
  <!-- ===================================== -->
  <h2>4. Flex Wrap</h2>
  <div class="wrap">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 5. Gap -->
  <!-- ===================================== -->
  <h2>5. Gap</h2>
  <div class="gap-demo">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 6. Flex Grow -->
  <!-- ===================================== -->
  <h2>6. Flex Grow</h2>
  <div class="grow-demo">
    <div class="grow1">1 (grow:1)</div>
    <div class="grow2">2 (grow:2)</div>
    <div class="grow1">3 (grow:1)</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 7. Flex Shrink -->
  <!-- ===================================== -->
  <h2>7. Flex Shrink</h2>
  <div class="shrink-demo">
    <div class="shrink0">No Shrink</div>
    <div>Shrink</div>
    <div>Shrink</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 8. Flex Basis -->
  <!-- ===================================== -->
  <h2>8. Flex Basis</h2>
  <div class="basis-demo">
    <div class="basis200">basis: 200px</div>
    <div>Auto</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 9. Align Self -->
  <!-- ===================================== -->
  <h2>9. Align Self</h2>
  <div class="self-demo">
    <div>1</div>
    <div class="self-center">2 (self: center)</div>
    <div>3</div>
  </div>
</div>
`,
    css: `/* 14. CSS Flexbox Layout Sandbox */

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #4f46e5;
  font-size: 1.25rem;
  margin-top: 30px;
  margin-bottom: 15px;
  background: #f5f3ff;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 6px;
}

h3 {
  font-size: 14px;
  color: #64748b;
  margin-top: 15px;
  margin-bottom: 8px;
}

hr {
  border: 0;
  height: 1px;
  background: #e2e8f0;
  margin: 40px 0;
}

/* Base flex item styling */
.container div > div {
  width: 60px;
  height: 60px;
  background-color: #6366f1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.15);
}

/* Base container styling for comparison */
.flex-row, .flex-column,
.justify-start, .justify-center, .justify-end, .justify-between, .justify-around, .justify-evenly,
.align-start, .align-center, .align-end,
.wrap, .gap-demo, .grow-demo, .shrink-demo, .basis-demo, .self-demo {
  background-color: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  position: relative;
}

/* 1. Flex Direction */
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.flex-column > div {
  width: 100%;
}

/* 2. Justify Content */
.justify-start, .justify-center, .justify-end, .justify-between, .justify-around, .justify-evenly {
  display: flex;
  gap: 5px;
}

.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; gap: 0; }
.justify-around { justify-content: space-around; gap: 0; }
.justify-evenly { justify-content: space-evenly; gap: 0; }

/* 3. Align Items */
.align-start, .align-center, .align-end {
  display: flex;
  height: 100px;
  gap: 10px;
}

.align-start { align-items: flex-start; }
.align-center { align-items: center; }
.align-end { align-items: flex-end; }

/* 4. Flex Wrap */
.wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 250px;
}

/* 5. Gap */
.gap-demo {
  display: flex;
  gap: 30px;
}

/* 6. Flex Grow */
.grow-demo {
  display: flex;
  gap: 10px;
}
.grow1 {
  flex-grow: 1;
  background-color: #06b6d4 !important;
}
.grow2 {
  flex-grow: 2;
  background-color: #a855f7 !important;
}

/* 7. Flex Shrink */
.shrink-demo {
  display: flex;
  width: 220px;
  gap: 10px;
}
.shrink-demo > div {
  flex-shrink: 1;
}
.shrink0 {
  flex-shrink: 0 !important;
  background-color: #f43f5e !important;
  width: 100px !important;
}

/* 8. Flex Basis */
.basis-demo {
  display: flex;
  gap: 10px;
}
.basis200 {
  flex-basis: 200px !important;
  background-color: #ec4899 !important;
  width: auto !important;
}

/* 9. Align Self */
.self-demo {
  display: flex;
  height: 100px;
  gap: 10px;
}
.self-center {
  align-self: center;
  background-color: #10b981 !important;
}
`,
    readme: `# Chapter 14: CSS Flexbox Layout

Flexbox (Flexible Box Layout) is a 1-dimensional layout module that manages spacing and alignment of child items inside a parent container.

## Container Properties:
- **flex-direction:** Defines the main axis flow direction (\`row\`, \`column\`).
- **justify-content:** Aligns items horizontally along the main axis (\`flex-start\`, \`center\`, \`flex-end\`, \`space-between\`, \`space-around\`, \`space-evenly\`).
- **align-items:** Aligns items vertically along the cross axis (\`flex-start\`, \`center\`, \`flex-end\`).
- **flex-wrap:** Allows items to wrap onto multiple rows if space is limited (\`wrap\`, \`nowrap\`).
- **gap:** Directs row/column gap spacings easily without margins.

## Item Properties:
- **flex-grow:** Allows items to grow to claim available workspace shares.
- **flex-shrink:** Directs if/how items shrink when parent container space wraps.
- **flex-basis:** Sets the initial starting length of the item.
- **align-self:** Overrides vertical alignment rules individually for specific child components.
`
  },
  {
    num: "15",
    name: "css-grid-layout",
    title: "CSS Grid Layout",
    description: "Align items in 2D space using grid templates, grid column spans, gap spacing, and grid area maps.",
    html: `
<div class="container">
  <h1>Chapter 15: CSS Grid Layout</h1>

  <!-- ===================================== -->
  <!-- 1. Basic Grid -->
  <!-- ===================================== -->
  <h2>1. Basic Grid (2 Columns)</h2>
  <div class="grid basic-grid">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 2. Three Columns -->
  <!-- ===================================== -->
  <h2>2. Three Columns</h2>
  <div class="grid three-columns">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
    <div>E</div>
    <div>F</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 3. Grid Rows -->
  <!-- ===================================== -->
  <h2>3. Grid Rows</h2>
  <div class="grid rows-grid">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 4. Grid Gap -->
  <!-- ===================================== -->
  <h2>4. Grid Gap</h2>
  <div class="grid gap-grid">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 5. Grid Column Span -->
  <!-- ===================================== -->
  <h2>5. Grid Column Span</h2>
  <div class="grid column-span">
    <div class="span2">Header (span 2)</div>
    <div>Left</div>
    <div>Right</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 6. Grid Row Span -->
  <!-- ===================================== -->
  <h2>6. Grid Row Span</h2>
  <div class="grid row-span">
    <div class="tall">Menu (span 3)</div>
    <div>Content 1</div>
    <div>Content 2</div>
    <div>Content 3</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 7. justify-items -->
  <!-- ===================================== -->
  <h2>7. justify-items</h2>
  <div class="grid justify-items-demo">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 8. align-items -->
  <!-- ===================================== -->
  <h2>8. align-items</h2>
  <div class="grid align-items-demo">
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 9. Responsive Grid -->
  <!-- ===================================== -->
  <h2>9. Responsive Grid (repeat + minmax)</h2>
  <div class="grid responsive-grid">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </div>

  <hr>

  <!-- ===================================== -->
  <!-- 10. Grid Template Areas -->
  <!-- ===================================== -->
  <h2>10. Grid Template Areas</h2>
  <div class="layout-grid">
    <header>Header</header>
    <nav>Navigation</nav>
    <main>Main Content</main>
    <footer>Footer</footer>
  </div>
</div>
`,
    css: `/* 15. CSS Grid Layout Sandbox */

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #4f46e5;
  font-size: 1.25rem;
  margin-top: 30px;
  margin-bottom: 15px;
  background: #f5f3ff;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 6px;
}

hr {
  border: 0;
  height: 1px;
  background: #e2e8f0;
  margin: 40px 0;
}

/* Base grid parent styling */
.grid {
  display: grid;
  background-color: #f8fafc;
  border: 2px dashed #cbd5e1;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

/* Base grid item styling */
.grid > div {
  background-color: #6366f1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: bold;
  font-size: 16px;
  height: 50px;
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.1);
}

/* 1. Basic Grid (2 Columns) */
.basic-grid {
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

/* 2. Three Columns */
.three-columns {
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

/* 3. Grid Rows */
.rows-grid {
  grid-template-columns: 1fr;
  grid-template-rows: 50px 70px 50px 80px;
  gap: 10px;
}
.rows-grid > div {
  height: 100%; /* let the row template decide height */
}

/* 4. Grid Gap */
.gap-grid {
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

/* 5. Grid Column Span */
.column-span {
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.span2 {
  grid-column: span 2;
  background-color: #06b6d4 !important;
}

/* 6. Grid Row Span */
.row-span {
  grid-template-columns: 150px 1fr;
  grid-template-rows: auto auto auto;
  gap: 10px;
}
.row-span > div {
  height: auto;
  min-height: 50px;
}
.tall {
  grid-row: span 3;
  background-color: #a855f7 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 7. justify-items */
.justify-items-demo {
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 10px;
}
.justify-items-demo > div {
  width: 40px;
  background-color: #ec4899 !important;
}

/* 8. align-items */
.align-items-demo {
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 100px;
  gap: 10px;
}
.align-items-demo > div {
  height: 40px;
  background-color: #10b981 !important;
}

/* 9. Responsive Grid (repeat + minmax) */
.responsive-grid {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

/* 10. Grid Template Areas */
.layout-grid {
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header header"
    "nav main"
    "footer footer";
  gap: 10px;
  background-color: #f8fafc;
  border: 2px dashed #cbd5e1;
  padding: 15px;
  border-radius: 8px;
}

.layout-grid > * {
  padding: 15px;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  text-align: center;
}

header {
  grid-area: header;
  background-color: #f59e0b;
}

nav {
  grid-area: nav;
  background-color: #0ea5e9;
  min-height: 80px;
}

main {
  grid-area: main;
  background-color: #f43f5e;
  min-height: 80px;
}

footer {
  grid-area: footer;
  background-color: #10b981;
}
`,
    readme: `# Chapter 15: CSS Grid Layout

Grid Layout is a 2-dimensional grid-based design system that manages alignments of columns and rows at the same time.

## Container Properties:
- **display: grid:** Activates grid layout rendering.
- **grid-template-columns:** Configures the width of columns (\`repeat()\`, \`minmax()\`, \`auto-fit\`, \`auto-fill\`).
- **grid-template-rows:** Configures the height of rows.
- **gap:** Space gaps between columns/rows.
- **grid-template-areas:** Maps out grid cells visually into named areas (e.g. Header, Sidebar, Main, Footer).
- **justify-items / align-items:** Align items horizontally or vertically inside their grid cells.

## Item Properties:
- **grid-column:** Directs child items to span across columns (e.g. \`grid-column: span 2\` or \`grid-column: 1 / 3\`).
- **grid-row:** Directs child items to span vertically across rows (e.g. \`grid-row: span 3\`).
`
  },
  {
    num: "16",
    name: "css-media-queries",
    title: "CSS Media Queries",
    description: "Design responsive grid structures that adapt automatically to desktop, tablet, and mobile screens.",
    html: `
<div class="container">
  <h1>Chapter 16: CSS Media Queries</h1>

  <p class="device" style="flex-direction: column; align-items: flex-start; gap: 6px; margin-bottom: 20px;">
    <span>Current Device: <span class="device-name">Desktop</span></span>
    <span class="viewport-tip" style="font-size: 11px; color: #64748b; font-weight: normal; line-height: 1.4; max-width: 600px; display: block; margin-top: 4px;">
      💡 <strong>Student Tip:</strong> Media queries are evaluated based on the <em>viewport width of this preview card (iframe)</em>, which is currently under 768px due to the dashboard sidebar. To see the <strong>Tablet Layout</strong> inside this card, widen your outer browser window (e.g. above 1170px) so the preview card itself expands to 768px!
    </span>
  </p>

  <hr>

  <!-- ===================================== -->
  <!-- Navigation -->
  <!-- ===================================== -->
  <section class="section">
    <h2>1. Responsive Navigation</h2>
    <nav class="navbar">
      <div>Home</div>
      <div>About</div>
      <div>Services</div>
      <div>Contact</div>
    </nav>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- Grid -->
  <!-- ===================================== -->
  <section class="section">
    <h2>2. Responsive Grid</h2>
    <div class="grid">
      <div>Card 1</div>
      <div>Card 2</div>
      <div>Card 3</div>
      <div>Card 4</div>
    </div>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- Image -->
  <!-- ===================================== -->
  <section class="section">
    <h2>3. Responsive Image</h2>
    <img src="https://picsum.photos/900/400" class="image" alt="Responsive Demo Image">
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- Typography -->
  <!-- ===================================== -->
  <section class="section">
    <h2>4. Responsive Font Size</h2>
    <p class="text">
      Resize your browser window to see the font size change.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- Hide / Show -->
  <!-- ===================================== -->
  <section class="section">
    <h2>5. Hide & Show</h2>
    <p class="desktop">💻 Desktop Only Content (Visible on screens &gt; 768px)</p>
    <p class="mobile">📱 Mobile Only Content (Visible on screens &lt;= 768px)</p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- Flex -->
  <!-- ===================================== -->
  <section class="section">
    <h2>6. Responsive Flexbox</h2>
    <div class="flex">
      <div>A</div>
      <div>B</div>
      <div>C</div>
    </div>
  </section>
</div>
`,
    css: `/* 16. CSS Media Queries Sandbox */

/* Universal Reset */
* {
  box-sizing: border-box;
}

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
  transition: background-color 0.3s;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

h2 {
  color: #4f46e5;
  font-size: 1.25rem;
  margin-bottom: 15px;
  background: #f5f3ff;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 6px;
}

hr {
  border: 0;
  height: 1px;
  background: #e2e8f0;
  margin: 40px 0;
}

/* Device Indicator */
.device {
  font-weight: 600;
  color: #475569;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.device-name {
  font-size: 0; /* Hide default HTML text */
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: bold;
  background-color: #e0f2fe;
  color: #0369a1;
  transition: all 0.3s;
}

.device-name::after {
  font-size: 13px;
  content: "💻 Desktop Layout (> 992px)";
}

/* 1. Responsive Navigation */
.navbar {
  display: flex;
  background-color: #1e293b;
  padding: 10px;
  border-radius: 8px;
  justify-content: space-around;
  gap: 10px;
}

.navbar div {
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.navbar div:hover {
  background-color: #334155;
}

/* 2. Responsive Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.grid div {
  background-color: #6366f1;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.1);
}

/* 3. Responsive Image */
.image {
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 8px;
  display: block;
}

/* 4. Responsive Font Size */
.text {
  font-size: 18px;
  line-height: 1.6;
  color: #334155;
  transition: font-size 0.2s;
}

/* 5. Hide & Show */
.desktop {
  display: block;
  background-color: #ecfdf5;
  color: #065f46;
  padding: 12px;
  border-radius: 6px;
  font-weight: 500;
  border: 1px solid #10b981;
}

.mobile {
  display: none; /* Hidden by default on Desktop */
  background-color: #fff1f2;
  color: #9f1239;
  padding: 12px;
  border-radius: 6px;
  font-weight: 500;
  border: 1px solid #f43f5e;
}

/* 6. Responsive Flexbox */
.flex {
  display: flex;
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 15px;
  border-radius: 8px;
  justify-content: space-between;
  gap: 10px;
}

.flex div {
  background-color: #06b6d4;
  color: white;
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: bold;
}

/* ============================================================= */
/* TABLET MEDIA QUERY (max-width: 992px) */
/* ============================================================= */
@media (max-width: 992px) {
  body {
    background-color: #f1f5f9;
  }
  
  .device-name {
    background-color: #f3e8ff;
    color: #6b21a8;
  }
  
  .device-name::after {
    content: "📟 Tablet Layout (768px - 992px)";
  }

  .grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on Tablet */
  }

  .text {
    font-size: 16px; /* slightly smaller font */
  }
}

/* ============================================================= */
/* MOBILE MEDIA QUERY (max-width: 767px) */
/* ============================================================= */
@media (max-width: 767px) {
  body {
    background-color: #e2e8f0;
  }

  .device-name {
    background-color: #fee2e2;
    color: #991b1b;
  }
  
  .device-name::after {
    content: "📱 Mobile Layout (< 768px)";
  }

  /* 1. Navbar stacks vertically */
  .navbar {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  /* 2. Grid stacks in 1 column */
  .grid {
    grid-template-columns: 1fr;
  }

  /* 4. Font size drops */
  .text {
    font-size: 14px;
  }

  /* 5. Hide Desktop content, show Mobile content */
  .desktop {
    display: none;
  }
  
  .mobile {
    display: block;
  }

  /* 6. Flexbox stacks vertically */
  .flex {
    flex-direction: column;
    align-items: stretch;
  }
  
  .flex div {
    width: 100%;
  }
}
`,
    readme: `# Chapter 16: CSS Media Queries & Responsive Design

In this chapter, you will learn how to make your web pages adapt beautifully to any screen size—from desktop monitors to mobile phones.

---

## 1. What is a Media Query?
A **Media Query** is a CSS technique introduced in CSS3. It uses the \`@media\` rule to include a block of CSS properties only if a certain condition is true (such as a device's width, height, orientation, or resolution).

---

## 2. Why Responsive Design is Needed
Without responsive design, websites designed for desktop screens will appear zoomed-out and unreadable on mobile phones. Users would have to pinch and zoom to read text or tap buttons. Responsive web design ensures a website is easy to use on **all devices**.

---

## 3. The Viewport Meta Tag
For media queries to work on mobile browsers, you **must** include the viewport meta tag in the HTML \`<head>\`:
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`
- \`width=device-width\`: Sets the width of the page to follow the screen-width of the device.
- \`initial-scale=1.0\`: Sets the initial zoom level when the page is first loaded.

---

## 4. Desktop First vs Mobile First

### A. Desktop First (max-width)
You write your default CSS styles for desktop screens first, then use \`max-width\` media queries to override styles for smaller screens (tablets, mobiles).
- **Condition:** "If screen width is **at most** X pixels, apply these styles."
\`\`\`css
/* Default Desktop Styles */
body { background-color: white; }

/* Tablet & Mobile (under 992px) */
@media (max-width: 992px) {
  body { background-color: lightgray; }
}
\`\`\`

### B. Mobile First (min-width)
You write your default CSS styles for small mobile screens first, then use \`min-width\` media queries to add complexity and columns as the screen gets larger.
- **Condition:** "If screen width is **at least** X pixels, apply these styles."
\`\`\`css
/* Default Mobile Styles */
body { background-color: lightgray; }

/* Tablet & Desktop (992px and up) */
@media (min-width: 992px) {
  body { background-color: white; }
}
\`\`\`

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
| **\`> 992px\`** | 💻 Desktop Layout | Default rules (or \`min-width: 993px\`) |
| **\`768px - 992px\`** | 📟 Tablet Layout | \`@media (max-width: 992px)\` |
| **\`< 768px\` (0px - 767px)** | 📱 Mobile Layout | \`@media (max-width: 767px)\` |

### Why CSS Cascade Order Matters:
CSS rules are applied **from top to bottom**. When using Desktop First rules with \`max-width\`:
1. **Desktop styles** are defined first as the base.
2. The **Tablet query** (\`max-width: 992px\`) is added below. This matches any screen size under 992px (including tablet, mobile, etc.).
3. The **Mobile query** (\`max-width: 767px\`) is added at the very bottom.
Because the mobile query is written **after** the tablet query, it overrides the tablet styles for screens under 767px. This is why a screen size of **768px** is correctly classified as a Tablet, while **767px** triggers the Mobile view!

---

## 6. Common Responsive Patterns

### A. Responsive Navigation
- **Desktop:** Items align horizontally inside a row (\`flex-direction: row\`).
- **Mobile:** Navigation items stack vertically inside a column (\`flex-direction: column\`).

### B. Responsive Grid
- **Desktop:** 4-column layout (\`grid-template-columns: repeat(4, 1fr)\`).
- **Tablet:** 2-column layout (\`grid-template-columns: repeat(2, 1fr)\`).
- **Mobile:** 1-column layout (\`grid-template-columns: 1fr\`).

### C. Responsive Flexbox
- **Desktop:** Items flow side-by-side.
- **Mobile:** Items stack vertically to prevent horizontal overflow.

### E. Responsive Images
Images should scale down fluidly on smaller screens:
\`\`\`css
img {
  max-width: 100%;
  height: auto;
}
\`\`\`
- \`max-width: 100%\`: Prevents the image from being larger than its container.
- \`height: auto\`: Maintains the image's aspect ratio.

### F. Responsive Typography
Instead of static pixels, use relative units like \`rem\`, \`em\`, or viewport units (\`vw\`), or decrease \`font-size\` inside media queries:
\`\`\`css
h1 { font-size: 2.5rem; }
@media (max-width: 768px) {
  h1 { font-size: 1.8rem; }
}
\`\`\`

### G. Hide & Show Elements
Use \`display\` to clean up layouts on smaller screens:
- **Desktop Content:** Show on desktop, hide on mobile (\`display: none\`).
- **Mobile Content:** Show on mobile (\`display: block\`), hide on desktop.

---

## 7. Advanced Media Queries

### A. Orientation (Portrait vs Landscape)
Applies styles depending on how the viewport is oriented:
\`\`\`css
/* Landscape mode (width > height) */
@media (orientation: landscape) {
  .sidebar { display: block; }
}

/* Portrait mode (height > width) */
@media (orientation: portrait) {
  .sidebar { display: none; }
}
\`\`\`

### B. Print Media Query
Applies styles only when the user prints the web page (useful to hide banners/navigation and change colors for paper):
\`\`\`css
@media print {
  body { background: white; color: black; }
  .navbar, footer, button { display: none; }
}
\`\`\`

### C. Hover and Pointer Queries
Targets devices based on whether they support hover actions (like a mouse pointer) or touch (like finger tapping):
\`\`\`css
/* Styles only for devices with hover support (like desktop mouse) */
@media (hover: hover) {
  button:hover { background-color: darkblue; }
}

/* Styles only for touchscreen devices without precision pointer */
@media (pointer: coarse) {
  button { padding: 15px 30px; } /* larger touch targets */
}
\`\`\`

---

## 8. Final Responsive Web Page Project
In your capstone projects, you will apply all these rules:
1. Write mobile-first container structures.
2. Formulate responsive grids and flexible blocks.
3. Optimize images for fluid resizing.
4. Scale headers and copy relative to viewport breakpoints.
5. Create mobile drawer menus and show/hide key elements.
`
  },
  {
    num: "17",
    name: "css-pseudo-classes",
    title: "CSS Pseudo Classes",
    description: "Design interactive visual states using hover, focus, active, first-child, and nth-child styling overrides.",
    html: `
<div class="sandbox">
  <h1>CSS Pseudo-Classes</h1>
  
  <div class="interactive-section">
    <h3>1. Hover, Focus, & Active States</h3>
    <a href="#" class="btn-primary">Hover and Click Me</a>
    <input type="text" class="input-focus" placeholder="Click to focus border..." />
  </div>

  <div class="list-section">
    <h3>2. Structural Child Selectors</h3>
    <ul class="dynamic-list">
      <li>Item Number 1 (first-child highlight)</li>
      <li>Item Number 2</li>
      <li>Item Number 3 (odd background stripe)</li>
      <li>Item Number 4</li>
      <li>Item Number 5 (odd background stripe)</li>
      <li>Item Number 6 (last-child border red)</li>
    </ul>
  </div>
</div>
`,
    css: `/* 17. CSS Pseudo Classes */

body {
  font-family: sans-serif;
  background-color: #f8fafc;
  color: #334155;
  padding: 30px;
}

.sandbox {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

h1 {
  text-align: center;
  color: #0f172a;
}

.interactive-section {
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Hover, Focus, and Active Button style */
.btn-primary {
  display: inline-block;
  background-color: #4f46e5;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #3730a3; /* darker purple on hover */
}

.btn-primary:active {
  background-color: #1e1b4b; /* darkest on click */
}

/* Input Focus outline modification */
.input-focus {
  padding: 10px;
  border: 2px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s;
}

.input-focus:focus {
  border-color: #10b981; /* turns emerald green when editing */
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
}

/* Structural Selectors */
.list-section {
  margin-top: 30px;
}

.dynamic-list {
  list-style: none;
  padding: 0;
}

.dynamic-list li {
  padding: 12px;
  border-bottom: 1px solid #e2e8f0;
}

/* Target FIRST element of list */
.dynamic-list li:first-child {
  font-weight: bold;
  color: #4f46e5;
}

/* Target LAST element of list */
.dynamic-list li:last-child {
  border-bottom: 3px solid #ef4444;
  color: #ef4444;
}

/* Stripe effect using nth-child selector (even / odd / math equations) */
.dynamic-list li:nth-child(odd) {
  background-color: #f1f5f9;
}
`,
    readme: `# Chapter 17: CSS Pseudo Classes

A pseudo-class is used to define a special state of an element.

## Common Pseudo-Classes:
- **:hover:** Style when user hovers over an element.
- **:focus:** Style when element gains focus (like typing in inputs).
- **:active:** Style during active click/engagement.
- **:first-child:** Matches elements that are the first child of parent.
- **:last-child:** Matches elements that are the last child of parent.
- **:nth-child(n):** Matches structural elements matching arithmetic expressions (e.g. \`odd\`, \`even\`, \`3n+1\`).
`
  },
  {
    num: "18",
    name: "css-pseudo-elements",
    title: "CSS Pseudo Elements",
    description: "Design visual decorators using before, after, custom quotation maps, and capitalized dropcaps.",
    html: `
<div class="container">
  <h1>Chapter 18: CSS Pseudo Elements</h1>

  <!-- =============================== -->
  <!-- 1. ::first-letter -->
  <!-- =============================== -->
  <section class="card">
    <h2>1. ::first-letter</h2>
    <p class="first-letter">
      Learning CSS becomes easier when concepts are explained with practical examples.
    </p>
  </section>

  <!-- =============================== -->
  <!-- 2. ::first-line -->
  <!-- =============================== -->
  <section class="card">
    <h2>2. ::first-line</h2>
    <p class="first-line">
      CSS Pseudo Elements allow developers to style specific parts of an element.
      Resize the browser window to see how only the first visible line receives the style while the remaining lines remain unchanged.
    </p>
  </section>

  <!-- =============================== -->
  <!-- 3. ::before -->
  <!-- =============================== -->
  <section class="card">
    <h2>3. ::before</h2>
    <p class="before-demo">
      Student Successfully Completed HTML5.
    </p>
  </section>

  <!-- =============================== -->
  <!-- 4. ::after -->
  <!-- =============================== -->
  <section class="card">
    <h2>4. ::after</h2>
    <p class="after-demo">
      CSS3 Course
    </p>
  </section>

  <!-- =============================== -->
  <!-- 5. ::selection -->
  <!-- =============================== -->
  <section class="card">
    <h2>5. ::selection</h2>
    <p class="selection-demo">
      Select this text using your mouse. The selected area changes its background and text color.
    </p>
  </section>

  <!-- =============================== -->
  <!-- 6. ::marker -->
  <!-- =============================== -->
  <section class="card">
    <h2>6. ::marker</h2>
    <ul class="marker-demo">
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
    </ul>
  </section>

  <!-- =============================== -->
  <!-- 7. ::placeholder -->
  <!-- =============================== -->
  <section class="card">
    <h2>7. ::placeholder</h2>
    <input type="text" placeholder="Enter your Full Name">
  </section>

  <!-- =============================== -->
  <!-- 8. ::file-selector-button -->
  <!-- =============================== -->
  <section class="card">
    <h2>8. ::file-selector-button</h2>
    <input type="file">
  </section>
</div>
`,
    css: `/* 18. CSS Pseudo Elements Sandbox */

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
}

h2 {
  color: #4f46e5;
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 15px;
  background: #f5f3ff;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
}

p {
  color: #334155;
  line-height: 1.6;
  margin: 0;
}

/* 1. ::first-letter */
.first-letter::first-letter {
  font-size: 3rem;
  font-weight: bold;
  color: #6366f1;
  float: left;
  line-height: 1;
  margin-right: 8px;
}

/* 2. ::first-line */
.first-line::first-line {
  font-weight: bold;
  color: #4f46e5;
  text-decoration: underline;
}

/* 3. ::before */
.before-demo::before {
  content: "🎓 ";
  font-size: 1.25rem;
}

/* 4. ::after */
.after-demo::after {
  content: " 🚀 (Highly Recommended!)";
  color: #ec4899;
  font-weight: bold;
}

/* 5. ::selection */
.selection-demo::selection {
  background-color: #fef08a;
  color: #1e293b;
}

/* 6. ::marker */
.marker-demo {
  padding-left: 20px;
  margin: 0;
}

.marker-demo li::marker {
  color: #10b981;
  font-size: 1.2rem;
  content: "⚡ ";
}

/* 7. ::placeholder */
input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
}

input[type="text"]:focus {
  border-color: #6366f1;
}

input[type="text"]::placeholder {
  color: #94a3b8;
  font-style: italic;
  font-weight: 500;
}

/* 8. ::file-selector-button */
input[type="file"]::file-selector-button {
  background-color: #6366f1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.15);
  transition: background-color 0.2s;
}

input[type="file"]::file-selector-button:hover {
  background-color: #4f46e5;
}
`,
    readme: `# Chapter 18: CSS Pseudo-Elements

## What are CSS Pseudo-Elements?

CSS **pseudo-elements** allow you to style **specific parts of an HTML element** without adding extra HTML tags. They begin with a double colon (\`::\`) and are appended to a CSS selector.

Unlike normal selectors, pseudo-elements **do not select the entire element**. Instead, they target a particular portion of the element, such as the first letter, the first line, selected text, placeholder text, list markers, or even content inserted before or after an element.

Pseudo-elements help developers create attractive, readable, and interactive user interfaces while keeping the HTML clean and simple.

---

## Why Use Pseudo-Elements?

* Style specific parts of an element without modifying HTML.
* Create decorative effects without extra elements.
* Improve typography and readability.
* Enhance user experience with interactive text selection.
* Customize form controls and list markers.
* Keep HTML clean while adding visual enhancements.

---

# Core CSS Pseudo-Elements

| Pseudo-Element           | What it Styles                        | Common Use Case                |
| ------------------------ | ------------------------------------- | ------------------------------ |
| \`::first-letter\`         | First letter of an element            | Newspaper drop caps            |
| \`::first-line\`           | First visible line of text            | Highlight introductions        |
| \`::before\`               | Inserts content before an element     | Icons, labels, decorations     |
| \`::after\`               | Inserts content after an element      | Badges, notifications, symbols |
| \`::selection\`            | Text selected by the user             | Custom highlight colors        |
| \`::marker\`               | List bullets or numbers               | Custom list markers            |
| \`::placeholder\`          | Placeholder text inside form controls | Styling input hints            |
| \`::file-selector-button\` | File upload button                    | Custom file upload appearance  |

---

# 1. \`::first-letter\`

### Purpose

Styles **only the first letter** of a block-level element.

### Common Uses

* Newspaper drop caps
* Blog articles
* Magazine layouts
* Story introductions

### Example

\`\`\`css
p::first-letter{
    font-size:48px;
    color:red;
    font-weight:bold;
}
\`\`\`

**Output**

Only the first letter becomes larger and more decorative.

---

# 2. \`::first-line\`

### Purpose

Styles **only the first visible line** of text.

The first line changes automatically depending on the screen width.

### Common Uses

* Article introductions
* News websites
* Important announcements

### Example

\`\`\`css
p::first-line{
    color:blue;
    font-weight:bold;
}
\`\`\`

**Output**

Only the first visible line receives the style.

---

# 3. \`::before\`

### Purpose

Inserts content **before** an HTML element.

No additional HTML is required.

### Common Uses

* Icons
* Labels
* Decorative symbols
* Status indicators

### Example

\`\`\`css
.success::before{
    content:"✔ ";
}
\`\`\`

**Output**

\`\`\`
✔ Student Completed CSS3 Course
\`\`\`

---

# 4. \`::after\`

### Purpose

Inserts content **after** an HTML element.

### Common Uses

* Badges
* Notifications
* Decorative symbols
* Required indicators

### Example

\`\`\`css
.course::after{
    content:" 🚀";
}
\`\`\`

**Output**

\`\`\`
CSS3 Course 🚀
\`\`\`

---

# 5. \`::selection\`

### Purpose

Styles the text **while the user selects (highlights) it** using the mouse or keyboard.

The style disappears when the text is deselected.

### Common Uses

* Improve readability
* Brand-colored text selection
* Better accessibility

### Example

\`\`\`css
p::selection{
    background:yellow;
    color:black;
}
\`\`\`

**Output**

When the user highlights the text:

* Background becomes yellow.
* Text becomes black.

---

# 6. \`::marker\`

### Purpose

Styles the bullet or numbering of lists.

### Common Uses

* Custom bullets
* Colored numbering
* Modern list designs

### Example

\`\`\`css
li::marker{
    color:red;
    font-size:22px;
}
\`\`\`

**Output**

Only the list bullet changes.

\`\`\`
● HTML
● CSS
● JavaScript
\`\`\`

---

# 7. \`::placeholder\`

### Purpose

Styles the placeholder text shown inside input fields before the user types.

### Common Uses

* Better form design
* Muted hint text
* Improved user experience

### Example

\`\`\`css
input::placeholder{
    color:gray;
    font-style:italic;
}
\`\`\`

**Output**

\`\`\`
Enter your name
\`\`\`

appears in gray italic text.

---

# 8. \`::file-selector-button\`

### Purpose

Styles the **Choose File** button of an \`<input type="file">\`.

### Common Uses

* Modern upload buttons
* Brand colors
* Better UI consistency

### Example

\`\`\`css
input[type=file]::file-selector-button{
    background:royalblue;
    color:white;
}
\`\`\`

**Output**

The default browser upload button becomes fully customized.

---

# Difference Between Pseudo-Class and Pseudo-Element

| Feature  | Pseudo-Class                         | Pseudo-Element                       |
| -------- | ------------------------------------ | ------------------------------------ |
| Symbol   | \`:\`                                  | \`::\`                                 |
| Purpose  | Styles an element based on its state | Styles a specific part of an element |
| Example  | \`:hover\`                             | \`::before\`                           |
| Works On | Entire element                       | Part of an element                   |

---

# Best Practices

* Use \`::before\` and \`::after\` for decorative content only.
* Avoid inserting important information using the \`content\` property, as screen readers may not interpret it consistently.
* Use \`::selection\` with high-contrast colors for readability.
* Keep placeholder text readable but visually distinct.
* Use pseudo-elements to reduce unnecessary HTML elements.
* Write clean, maintainable CSS with meaningful class names.

---

# Common Mistakes

❌ Using \`content\` outside \`::before\` or \`::after\`.

❌ Forgetting the \`content\` property when using \`::before\` or \`::after\`.

❌ Trying to edit HTML using pseudo-elements.

❌ Expecting \`::selection\` to remain visible after deselecting text.

❌ Assuming all HTML elements support every pseudo-element.

---

# Student Summary

* \`::first-letter\` → Styles the first letter.
* \`::first-line\` → Styles the first visible line.
* \`::before\` → Adds content before an element.
* \`::after\` → Adds content after an element.
* \`::selection\` → Styles highlighted text.
* \`::marker\` → Styles list bullets or numbers.
* \`::placeholder\` → Styles placeholder text in form controls.
* \`::file-selector-button\` → Styles the file upload button.

> **Key Point:** CSS pseudo-elements let you style **specific parts of an element** without adding extra HTML, making your code cleaner while creating attractive and interactive user interfaces.
`
  },
  {
    num: "19",
    name: "css-forms-styling",
    title: "CSS Forms Styling",
    description: "Format contact/login layouts styling inputs, focus outlines, button icons, and placeholder texts.",
    html: `
<div class="form-card">
  <h2>Account Registration</h2>
  <p class="subtitle">Complete the fields below to join our developer network.</p>
  
  <form class="custom-form" onsubmit="event.preventDefault();">
    <div class="form-group">
      <label for="name">Full Name</label>
      <input type="text" id="name" placeholder="John Doe" required />
    </div>

    <div class="form-group">
      <label for="email">Email Address</label>
      <input type="email" id="email" placeholder="john@example.com" required />
    </div>

    <div class="form-group">
      <label for="plan">Select Plan</label>
      <select id="plan">
        <option>Developer Standard (Free)</option>
        <option>Developer Pro ($19/mo)</option>
      </select>
    </div>

    <div class="form-check">
      <input type="checkbox" id="terms" required />
      <label for="terms">I accept the terms and conditions</label>
    </div>

    <button type="submit" class="submit-btn">Create Free Account</button>
  </form>
</div>
`,
    css: `/* 19. CSS Forms Styling */

body {
  font-family: system-ui, sans-serif;
  background-color: #0f172a;
  color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: 0;
}

.form-card {
  background-color: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 40px;
  max-width: 450px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

h2 {
  margin-top: 0;
  margin-bottom: 5px;
}

.subtitle {
  color: #94a3b8;
  font-size: 14px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 13px;
  font-weight: 600;
  color: #cbd5e1;
}

/* Modern Input and Select controls styling */
.form-group input, 
.form-group select {
  background-color: #0f172a;
  border: 2px solid #334155;
  color: white;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

/* Placeholder coloring customizer styling */
.form-group input::placeholder {
  color: #475569;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #6366f1; /* Indigo color focus highlight */
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

.form-check {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
  font-size: 13px;
}

/* Button style */
.submit-btn {
  background-color: #6366f1;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #4f46e5;
}
`,
    readme: `# Chapter 19: CSS Forms Styling

Form layouts and inputs require special CSS techniques for consistency across multiple browsers.

## Key Form Styles:
- **Input Reset:** Remove defaults using \`outline: none\`, specify custom widths, paddings, and borders.
- **Placeholder styling:** Targeted using \`::placeholder\` pseudo-elements.
- **Focus Styles:** Use \`:focus\` to draw border rings or shadows to enhance navigation helper visual indicators.
- **Button Styling:** Add cursor behaviors, transition, and border styles.
`
  },
  {
    num: "20",
    name: "css-images",
    title: "CSS Images",
    description: "Structure graphics using cover/contain properties, border curves, and sepia/grayscale filters.",
    html: `
<div class="images-container">
  <h1>CSS Images Showcase</h1>
  
  <div class="images-grid">
    <div class="img-box">
      <h3>1. object-fit: cover</h3>
      <div class="frame">
        <img class="img-cover" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><rect width='300' height='300' fill='%23ec4899'/><circle cx='150' cy='150' r='100' fill='%23facc15'/></svg>" alt="Demo Image" />
      </div>
    </div>

    <div class="img-box">
      <h3>2. object-fit: contain</h3>
      <div class="frame">
        <img class="img-contain" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><rect width='300' height='300' fill='%23ec4899'/><circle cx='150' cy='150' r='100' fill='%23facc15'/></svg>" alt="Demo Image" />
      </div>
    </div>

    <div class="img-box">
      <h3>3. Grayscale Filter</h3>
      <div class="frame">
        <img class="img-gray" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><rect width='300' height='300' fill='%2310b981'/><rect x='50' y='50' width='200' height='200' fill='%23fbbf24'/></svg>" alt="Demo Image" />
      </div>
    </div>

    <div class="img-box">
      <h3>4. Blur on Hover</h3>
      <div class="frame">
        <img class="img-blur" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><rect width='300' height='300' fill='%238b5cf6'/><polygon points='150,50 50,250 250,250' fill='%23ef4444'/></svg>" alt="Demo Image" />
      </div>
    </div>
  </div>
</div>
`,
    css: `/* 20. CSS Images */

body {
  font-family: sans-serif;
  background-color: #f1f5f9;
  color: #334155;
  padding: 30px;
}

.images-container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.img-box {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  text-align: center;
}

.img-box h3 {
  font-size: 14px;
  margin-top: 0;
}

/* Image bounding limits */
.frame {
  width: 100%;
  height: 150px;
  background-color: #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

/* Sizing properties: object-fit */
.img-cover {
  object-fit: cover; /* image covers area and clips */
}

.img-contain {
  object-fit: contain; /* image fully visible, creates bars if necessary */
}

/* Image filter manipulations */
.img-gray {
  object-fit: cover;
  filter: grayscale(100%);
}

.img-blur {
  object-fit: cover;
  transition: filter 0.3s;
}

.img-blur:hover {
  filter: blur(5px);
}
`,
    readme: `# Chapter 20: CSS Images

Styling visual elements requires control over layout shapes, scaling behaviors, and graphic adjustments.

## Core Properties:
- **object-fit:** Dictates how image contents fill their bounding containers (\`cover\`, \`contain\`, \`fill\`).
- **object-position:** Positions internal pixel focal points.
- **filter:** Adds visual filters including \`grayscale()\`, \`blur()\`, \`sepia()\`, \`invert()\`, and \`contrast()\`.
- **border-radius:** Creates circular crop graphics.
`
  },
  {
    num: "21",
    name: "css-transitions",
    title: "CSS Transitions",
    description: "Design smooth state changes using duration, timing delays, and custom cubic-bezier properties.",
    html: `
<div class="container">
  <h1>Chapter 21: CSS Transitions</h1>

  <!-- ===================================== -->
  <!-- 1. Basic Transition -->
  <!-- ===================================== -->
  <section class="card">
    <h2>1. Basic Transition</h2>
    <div class="demo basic-demo">
      Hover Me
    </div>
    <p>
      Transitions smoothly change CSS property values from one state to another on hover.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 2. Transition Property -->
  <!-- ===================================== -->
  <section class="card">
    <h2>2. Transition Property</h2>
    <div class="demo property-demo">
      Background Changes Only
    </div>
    <p>
      Only the background animates smoothly; the scale transform snaps instantly because it is excluded.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 3. Transition Duration -->
  <!-- ===================================== -->
  <section class="card">
    <h2>3. Transition Duration</h2>
    <div class="demo fast">
      0.3s (Fast)
    </div>
    <div class="demo slow">
      2s (Slow)
    </div>
    <p>
      Hover over both blocks to compare transition speeds visually.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 4. Transition Delay -->
  <!-- ===================================== -->
  <section class="card">
    <h2>4. Transition Delay</h2>
    <div class="demo delay-demo">
      Wait 2 Seconds
    </div>
    <p>
      Hover over the block; it will wait exactly 2 seconds before animating.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 5. Timing Functions -->
  <!-- ===================================== -->
  <section class="card">
    <h2>5. Timing Functions</h2>
    <div class="timing-grid">
      <div class="demo ease">ease</div>
      <div class="demo linear">linear</div>
      <div class="demo easein">ease-in</div>
      <div class="demo easeout">ease-out</div>
      <div class="demo easeinout">ease-in-out</div>
      <div class="demo bezier">cubic-bezier()</div>
    </div>
    <p>
      Hover over this card container to see the different acceleration curves in action.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 6. Multiple Property Transition -->
  <!-- ===================================== -->
  <section class="card">
    <h2>6. Multiple Property Transition</h2>
    <div class="demo multi">
      Hover Me
    </div>
    <p>
      Simultaneously transitions background, width, border-radius, and text color.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 7. Transform + Transition -->
  <!-- ===================================== -->
  <section class="card">
    <h2>7. Transform + Transition</h2>
    <div class="demo transform-demo">
      Rotate + Scale
    </div>
    <p>
      Combines multiple transforms (rotation, scaling, translation) with transition.
    </p>
  </section>

  <hr>

  <!-- ===================================== -->
  <!-- 8. Transition Shorthand -->
  <!-- ===================================== -->
  <section class="card">
    <h2>8. Transition Shorthand</h2>
    <div class="demo shorthand">
      Shorthand
    </div>
    <p>
      Uses shorthand rules: all properties transition over 0.5s with an ease curve and a 0.3s delay.
    </p>
  </section>
</div>
`,
    css: `/* 21. CSS Transitions Sandbox */

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
}

h2 {
  color: #4f46e5;
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 15px;
  background: #f5f3ff;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
}

p {
  color: #64748b;
  font-size: 13px;
  margin-top: 12px;
  margin-bottom: 0;
  line-height: 1.5;
}

/* Base Demo Box */
.demo {
  width: 120px;
  height: 50px;
  background-color: #e2e8f0;
  color: #334155;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  text-align: center;
}

/* 1. Basic Transition */
.basic-demo {
  transition: 0.5s;
}

.basic-demo:hover {
  background-color: #3b82f6;
  color: white;
}

/* 2. Transition Property */
.property-demo {
  transition-property: background-color;
  transition-duration: 0.5s;
}

.property-demo:hover {
  background-color: #ef4444;
  transform: scale(1.2);
}

/* 3. Transition Duration */
.fast {
  transition: 0.3s;
  background-color: #0ea5e9;
  color: white;
  margin-bottom: 10px;
}
.fast:hover {
  background-color: #0369a1;
  width: 200px;
}

.slow {
  transition: 2s;
  background-color: #0ea5e9;
  color: white;
}
.slow:hover {
  background-color: #0369a1;
  width: 200px;
}

/* 4. Transition Delay */
.delay-demo {
  transition: 0.5s;
  transition-delay: 2s;
}
.delay-demo:hover {
  background-color: #10b981;
  color: white;
}

/* 5. Timing Functions */
.timing-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.timing-grid .demo {
  transition-duration: 1.5s;
  width: 100px;
  background-color: #a855f7;
  color: white;
}
.timing-grid:hover .demo {
  transform: translateX(200px);
}

.ease { transition-timing-function: ease; }
.linear { transition-timing-function: linear; }
.easein { transition-timing-function: ease-in; }
.easeout { transition-timing-function: ease-out; }
.easeinout { transition-timing-function: ease-in-out; }
.bezier { transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6); }

/* 6. Multiple Property Transition */
.multi {
  transition: background 0.5s, width 0.5s, border-radius 0.5s, color 0.5s;
}
.multi:hover {
  background-color: #db2777;
  width: 250px;
  border-radius: 40px;
  color: white;
}

/* 7. Transform + Transition */
.transform-demo {
  transition: 0.6s;
  background-color: #f59e0b;
  color: white;
}
.transform-demo:hover {
  transform: rotate(15deg) scale(1.2) translateY(-10px);
  background-color: #d97706;
}

/* 8. Transition Shorthand */
.shorthand {
  transition: all 0.5s ease 0.3s;
}
.shorthand:hover {
  background-color: #06b6d4;
  color: white;
  border-radius: 20px;
  transform: rotate(360deg);
}
`,
    readme: `# Chapter 21: CSS Transitions

CSS Transitions allow you to change property values smoothly (from one value to another) over a given duration.

---

## What is a Transition?
A **Transition** is the smooth animation between two states of an element (e.g. normal state to hover state). Instead of an instant style snap, the browser calculates the middle frames over time.

---

## Core Transition Properties

| Property | Purpose | Example |
| :--- | :--- | :--- |
| **transition-property** | Which CSS property animates | \`background-color\`, \`all\`, \`width\` |
| **transition-duration** | The speed of the animation | \`0.5s\`, \`300ms\` |
| **transition-delay** | Time to wait before animation starts | \`1s\`, \`2s\` |
| **transition-timing-function** | The acceleration curve (speed curve) | \`ease\`, \`linear\`, \`ease-in\`, \`ease-out\` |
| **transition** | Shorthand property for all of the above | \`all 0.5s ease 0.2s\` |

---

## Transition Workflow

\`\`\`
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
\`\`\`

---

## Transition Shorthand Rule
Instead of defining every property individually, you can use the shorthand:
\`\`\`css
/* property | duration | timing-function | delay */
transition: all 0.5s ease 0.3s;
\`\`\`

---

## Student Summary Cheat Sheet
- **transition-property:** Specifies the attributes to transition.
- **transition-duration:** Defines how long the change takes.
- **transition-delay:** Creates a wait pause before starting.
- **transition-timing-function:** Alters the speed curve (e.g., bounce with \`cubic-bezier\`).
- **Transform + Transition:** Combining transitions with \`transform\` creates modern, lightweight GPU-accelerated UI animations.
`
  },
  {
    num: "22",
    name: "css-transformations",
    title: "CSS Transformations",
    description: "Rotate, translate, skew, and scale components on 2D space relative to custom transform origins.",
    html: `
<div class="container">
  <h1>Chapter 22: CSS Transformations</h1>

  <!-- 1. rotate() -->
  <section class="card card-rotate">
    <h2>1. rotate()</h2>
    <div class="demo-box-container">
      <div class="box">rotate(45deg)</div>
    </div>
    <p>Rotate an element clockwise or counter-clockwise by specific degrees.</p>
  </section>

  <hr>

  <!-- 2. scale() -->
  <section class="card card-scale">
    <h2>2. scale()</h2>
    <div class="demo-box-container">
      <div class="box">scale(1.2)</div>
    </div>
    <p>Increase or decrease the sizing factor of an element.</p>
  </section>

  <hr>

  <!-- 3. translateX() -->
  <section class="card card-translatex">
    <h2>3. translateX()</h2>
    <div class="demo-box-container">
      <div class="box">translateX(80px)</div>
    </div>
    <p>Moves the element horizontally along the X-axis.</p>
  </section>

  <hr>

  <!-- 4. translateY() -->
  <section class="card card-translatey">
    <h2>4. translateY()</h2>
    <div class="demo-box-container">
      <div class="box">translateY(-40px)</div>
    </div>
    <p>Moves the element vertically along the Y-axis.</p>
  </section>

  <hr>

  <!-- 5. translate() -->
  <section class="card card-translate">
    <h2>5. translate()</h2>
    <div class="demo-box-container">
      <div class="box">translate(60px, -20px)</div>
    </div>
    <p>Moves the element simultaneously along both the X and Y axes.</p>
  </section>

  <hr>

  <!-- 6. skewX() -->
  <section class="card card-skewx">
    <h2>6. skewX()</h2>
    <div class="demo-box-container">
      <div class="box">skewX(20deg)</div>
    </div>
    <p>Slants an element horizontally along the X-axis.</p>
  </section>

  <hr>

  <!-- 7. skewY() -->
  <section class="card card-skewy">
    <h2>7. skewY()</h2>
    <div class="demo-box-container">
      <div class="box">skewY(20deg)</div>
    </div>
    <p>Slants an element vertically along the Y-axis.</p>
  </section>

  <hr>

  <!-- 8. skew() -->
  <section class="card card-skew">
    <h2>8. skew()</h2>
    <div class="demo-box-container">
      <div class="box">skew(20deg, 10deg)</div>
    </div>
    <p>Slants the element along both the X and Y axes.</p>
  </section>

  <hr>

  <!-- 9. rotateX() -->
  <section class="card card-rotatex">
    <h2>9. rotateX() (3D)</h2>
    <div class="demo-box-container">
      <div class="box">rotateX(180deg)</div>
    </div>
    <p>Rotates the element around the horizontal X-axis in 3D space.</p>
  </section>

  <hr>

  <!-- 10. rotateY() -->
  <section class="card card-rotatey">
    <h2>10. rotateY() (3D)</h2>
    <div class="demo-box-container">
      <div class="box">rotateY(180deg)</div>
    </div>
    <p>Rotates the element around the vertical Y-axis in 3D space.</p>
  </section>

  <hr>

  <!-- 11. rotateZ() -->
  <section class="card card-rotatez">
    <h2>11. rotateZ() (3D)</h2>
    <div class="demo-box-container">
      <div class="box">rotateZ(180deg)</div>
    </div>
    <p>Rotates the element around the Z-axis in 3D space.</p>
  </section>

  <hr>

  <!-- 12. transform-origin -->
  <section class="card">
    <h2>12. transform-origin</h2>
    <div class="origin-container">
      <div class="origin-box-wrapper origin-center">
        <div class="demo-box-container">
          <div class="box box-origin">Center</div>
        </div>
        <div class="origin-label">center</div>
      </div>
      <div class="origin-box-wrapper origin-left-top">
        <div class="demo-box-container">
          <div class="box box-origin">Left Top</div>
        </div>
        <div class="origin-label">left top</div>
      </div>
      <div class="origin-box-wrapper origin-right-bottom">
        <div class="demo-box-container">
          <div class="box box-origin">Right Bottom</div>
        </div>
        <div class="origin-label">right bottom</div>
      </div>
    </div>
    <p>Hover over each block to see how the rotation pivot point (origin) changes.</p>
  </section>

  <hr>

  <!-- 13. Multiple Transform Functions -->
  <section class="card card-multiple">
    <h2>13. Multiple Transform Functions</h2>
    <div class="demo-box-container">
      <div class="box">Multiple</div>
    </div>
    <p>Applies translate, rotate, scale, and skew in a single transform declaration.</p>
  </section>

  <hr>

  <!-- 14. Hover Card Effect -->
  <section class="card">
    <h2>14. Hover Card Effect</h2>
    <div class="hover-card">
      <h4>Blog Post Card</h4>
      <p>Card lifts up and gets a shadow transition on hover.</p>
    </div>
    <p>Real-world application for Product and Blog Card components.</p>
  </section>

  <hr>

  <!-- 15. Button Click Effect -->
  <section class="card">
    <h2>15. Button Click Effect</h2>
    <button class="click-btn">Click / Hold Me</button>
    <p>Real-world active state scaling effect to simulate button compression.</p>
  </section>

  <hr>

  <!-- 16. Image Zoom -->
  <section class="card">
    <h2>16. Image Zoom</h2>
    <div class="zoom-wrapper">
      <img src="https://picsum.photos/400/300" class="zoom-img" alt="Zoom Demo">
    </div>
    <p>Hover over the image card to see the zoom effect inside the overflow boundary.</p>
  </section>

  <hr>

  <!-- 17. Floating Icon -->
  <section class="card">
    <h2>17. Floating Icon</h2>
    <div class="floating-icon">🚀</div>
    <p>Continuous translation animation simulating a hovering layout.</p>
  </section>

  <hr>

  <!-- 18. 3D Flip Card -->
  <section class="card">
    <h2>18. 3D Flip Card</h2>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">Front Side</div>
        <div class="flip-card-back">Back Side</div>
      </div>
    </div>
    <p>Hover over the card to see the 3D rotation flip the card around the Y-axis.</p>
  </section>

  <hr>

  <!-- 19. Loading Spinner -->
  <section class="card">
    <h2>19. Loading Spinner</h2>
    <div class="spinner"></div>
    <p>A continuous 360-degree rotation animation demonstrating animations.</p>
  </section>
</div>
`,
    css: `/* 22. CSS Transformations Sandbox */

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  text-align: center;
}

h2 {
  color: #4f46e5;
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 25px;
  background: #f5f3ff;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
}

p {
  color: #64748b;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 0;
  line-height: 1.5;
}

/* Base box representation */
.demo-box-container {
  width: 150px;
  height: 100px;
  background-color: #e2e8f0;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 100px;
  height: 80px;
  background-color: #6366f1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: bold;
  font-size: 13px;
  transition: transform 0.4s, background-color 0.4s;
}

/* 1. rotate() */
.card-rotate:hover .box {
  transform: rotate(45deg);
}

/* 2. scale() */
.card-scale:hover .box {
  transform: scale(1.2);
}

/* 3. translateX() */
.card-translatex:hover .box {
  transform: translateX(80px);
}

/* 4. translateY() */
.card-translatey:hover .box {
  transform: translateY(-40px);
}

/* 5. translate() */
.card-translate:hover .box {
  transform: translate(60px, -20px);
}

/* 6. skewX() */
.card-skewx:hover .box {
  transform: skewX(20deg);
}

/* 7. skewY() */
.card-skewy:hover .box {
  transform: skewY(20deg);
}

/* 8. skew() */
.card-skew:hover .box {
  transform: skew(20deg, 10deg);
}

/* 9. rotateX() */
.card-rotatex:hover .box {
  transform: rotateX(180deg);
}

/* 10. rotateY() */
.card-rotatey:hover .box {
  transform: rotateY(180deg);
}

/* 11. rotateZ() */
.card-rotatez:hover .box {
  transform: rotateZ(180deg);
}

/* 12. transform-origin */
.origin-container {
  display: flex;
  justify-content: space-around;
  gap: 15px;
  flex-wrap: wrap;
}

.origin-box-wrapper {
  text-align: center;
}

.origin-label {
  font-size: 11px;
  color: #64748b;
  margin-top: 8px;
}

.box-origin {
  transition: transform 0.8s;
}

.origin-center:hover .box-origin {
  transform-origin: center;
  transform: rotate(45deg);
}

.origin-left-top:hover .box-origin {
  transform-origin: left top;
  transform: rotate(45deg);
}

.origin-right-bottom:hover .box-origin {
  transform-origin: right bottom;
  transform: rotate(45deg);
}

/* 13. Multiple Transform Functions */
.card-multiple:hover .box {
  transform: translateY(-20px) rotate(20deg) scale(1.2) skew(8deg);
  background-color: #db2777;
}

/* 14. Hover Card Effect */
.hover-card {
  width: 200px;
  height: 120px;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin: 0 auto;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  text-align: left;
}

.hover-card:hover {
  transform: translateY(-15px) scale(1.05);
  box-shadow: 0 15px 30px rgba(99, 102, 241, 0.15);
}

.hover-card h4 {
  margin: 0 0 8px 0;
  color: #1e293b;
}

.hover-card p {
  margin: 0;
  color: #64748b;
  font-size: 11px;
  line-height: 1.4;
}

/* 15. Button Click Effect */
.click-btn {
  background-color: #6366f1;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.15);
  transition: transform 0.1s;
}

.click-btn:active {
  transform: scale(0.95);
}

/* 16. Image Zoom */
.zoom-wrapper {
  width: 200px;
  height: 120px;
  overflow: hidden;
  border-radius: 8px;
  margin: 0 auto;
}

.zoom-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  cursor: pointer;
}

.zoom-wrapper:hover .zoom-img {
  transform: scale(1.15);
}

/* 17. Floating Icon */
.floating-icon {
  font-size: 2.5rem;
  display: inline-block;
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* 18. 3D Flip Card */
.flip-card {
  background-color: transparent;
  width: 150px;
  height: 100px;
  perspective: 1000px;
  margin: 0 auto;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: bold;
}

.flip-card-front {
  background-color: #6366f1;
  color: white;
}

.flip-card-back {
  background-color: #ec4899;
  color: white;
  transform: rotateY(180deg);
}

/* 19. Loading Spinner */
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #e2e8f0;
  border-top: 5px solid #a855f7;
  border-radius: 50%;
  margin: 0 auto;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`,
    readme: `# Chapter 22: CSS Transformations

CSS Transformations allow you to change the shape, size, and position of HTML elements in 2D or 3D space.

---

## Visual Workflow Diagram

\`\`\`
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
\`\`\`

---

## Core CSS Transform Functions Reference Table

| Transform Function | Purpose | Example | Real-world Use |
| :--- | :--- | :--- | :--- |
| **rotate()** | Rotate element | \`transform: rotate(45deg)\` | Refresh/loading indicators |
| **scale()** | Zoom factor | \`transform: scale(1.2)\` | Image hover zoom |
| **translateX()** | Move horizontally | \`transform: translateX(60px)\` | Sidebar menus |
| **translateY()** | Move vertically | \`transform: translateY(-20px)\` | Card lift-up transitions |
| **translate()** | Move X & Y | \`transform: translate(40px,-20px)\` | Custom alignments |
| **skewX()** | Horizontal slant | \`transform: skewX(20deg)\` | Diagonal decorative dividers |
| **skewY()** | Vertical slant | \`transform: skewY(20deg)\` | Slanted layouts |
| **skew()** | Both directions | \`transform: skew(15deg,10deg)\` | Dynamic decorative boxes |
| **rotateX()** | 3D X-axis rotation | \`transform: rotateX(180deg)\` | Flip card panels |
| **rotateY()** | 3D Y-axis rotation | \`transform: rotateY(180deg)\` | 3D flashcards |
| **rotateZ()** | Z-axis rotation | \`transform: rotateZ(180deg)\` | Loading spinners |
| **transform-origin** | Change pivot point | \`transform-origin: left top\` | Door hinge effects |
| **Multiple Transforms** | Combine effects | \`transform: translate() rotate()\` | Advanced custom animations |

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
`
  },
  {
    num: "23",
    name: "css-animations",
    title: "CSS Animations",
    description: "Design custom visual loops using keyframe cycles, iterations, fills, and directions.",
    html: `
<div class="container">
  <h1>Chapter 23: CSS Animations</h1>

  <!-- 1. Pulse -->
  <section class="card">
    <h2>1. Pulse</h2>
    <div class="demo-box-container">
      <div class="box anim-pulse"></div>
    </div>
    <p>Uses scale() and opacity to create an infinite pulsing notification effect.</p>
  </section>

  <hr>

  <!-- 2. Spinner Loader -->
  <section class="card">
    <h2>2. Spinner Loader</h2>
    <div class="demo-box-container">
      <div class="spinner-loader"></div>
    </div>
    <p>An infinite circular rotating spinner utilizing a linear timing function.</p>
  </section>

  <hr>

  <!-- 3. Bounce -->
  <section class="card">
    <h2>3. Bounce</h2>
    <div class="demo-box-container">
      <div class="box anim-bounce"></div>
    </div>
    <p>Moves vertically using translateY() combined with alternate direction looping.</p>
  </section>

  <hr>

  <!-- 4. Fade In -->
  <section class="card">
    <h2>4. Fade In</h2>
    <div class="demo-box-container">
      <div class="box anim-fadein">Fade In</div>
    </div>
    <p>Transitions opacity from 0 to 1 and keeps the final state using forwards.</p>
  </section>

  <hr>

  <!-- 5. Slide From Left -->
  <section class="card">
    <h2>5. Slide From Left</h2>
    <div class="demo-box-container" style="overflow: hidden;">
      <div class="box anim-slidein">Slide In</div>
    </div>
    <p>Entrance animation that slides elements in horizontally from outside the screen boundary.</p>
  </section>

  <hr>

  <!-- 6. Rotate -->
  <section class="card">
    <h2>6. Rotate</h2>
    <div class="demo-box-container">
      <div class="box anim-rotate">🔄</div>
    </div>
    <p>Continuous, linear rotation around the Z-axis.</p>
  </section>

  <hr>

  <!-- 7. Shake -->
  <section class="card">
    <h2>7. Shake</h2>
    <div class="demo-box-container">
      <input type="text" class="input-shake" value="Invalid Input!" readonly>
    </div>
    <p>Quick horizontal offset shifts. Commonly used to indicate validation errors.</p>
  </section>

  <hr>

  <!-- 8. Floating -->
  <section class="card">
    <h2>8. Floating</h2>
    <div class="demo-box-container">
      <div class="floating-illustration">🎨</div>
    </div>
    <p>Smooth vertical floating loop mimicking soft illustration movements in hero sections.</p>
  </section>

  <hr>

  <!-- 9. Progress Bar -->
  <section class="card">
    <h2>9. Progress Bar</h2>
    <div class="progress-bar-container">
      <div class="progress-bar-fill"></div>
    </div>
    <p>Animates width from 0% to 100% to simulate a file upload or loading progress.</p>
  </section>

  <hr>

  <!-- 10. Typing Effect -->
  <section class="card">
    <h2>10. Typing Effect</h2>
    <div class="typing-container">
      <p class="typing-text">Typing....</p>
    </div>
    <p>Uses width, overflow, and white-space boundaries to generate a typing simulation.</p>
  </section>

  <hr>

  <!-- 11. Loading Dots -->
  <section class="card">
    <h2>11. Loading Dots</h2>
    <div class="dots-container">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
    <p>Staggered loading dots animation commonly used in AI assistants and chat interfaces.</p>
  </section>

  <hr>

  <!-- 12. Notification Bell -->
  <section class="card">
    <h2>12. Notification Bell</h2>
    <div class="demo-box-container">
      <div class="bell-icon">🔔</div>
    </div>
    <p>Rotates slightly left and right repeatedly to mimic a ringing alert system.</p>
  </section>

  <hr>

  <!-- 13. Heart Beat -->
  <section class="card">
    <h2>13. Heart Beat</h2>
    <div class="demo-box-container">
      <div class="heart-icon">❤️</div>
    </div>
    <p>A double-pulse scaling animation representing likes or heartbeats.</p>
  </section>

  <hr>

  <!-- 14. Card Hover Animation -->
  <section class="card">
    <h2>14. Card Hover Animation</h2>
    <div class="hover-card-anim">
      <h4>Master Class</h4>
      <p>Card lifts up, shifts shadow, and pulses glowing borders on hover.</p>
    </div>
    <p>Combines transforms, transitions, and keyframe animations together.</p>
  </section>

  <hr>

  <!-- 15. Button Click Animation -->
  <section class="card">
    <h2>15. Button Click Animation</h2>
    <button class="action-btn">Interactive Press</button>
    <p>Simulates a click press action utilizing active state scaling.</p>
  </section>
</div>
`,
    css: `/* 23. CSS Animations Sandbox */

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  text-align: center;
}

h2 {
  color: #4f46e5;
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 25px;
  background: #f5f3ff;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
}

p {
  color: #64748b;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 0;
  line-height: 1.5;
}

/* Base box representation */
.demo-box-container {
  width: 150px;
  height: 100px;
  background-color: #e2e8f0;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 80px;
  height: 60px;
  background-color: #6366f1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: bold;
  font-size: 12px;
  user-select: none;
}

/* 1. Pulse */
.anim-pulse {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
}

/* 2. Spinner Loader */
.spinner-loader {
  width: 45px;
  height: 45px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #a855f7;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 3. Bounce */
.anim-bounce {
  animation: bounce 0.8s ease infinite alternate;
}

@keyframes bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-25px); }
}

/* 4. Fade In */
.anim-fadein {
  animation: fadeIn 2s ease-in-out infinite alternate;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* 5. Slide From Left */
.anim-slidein {
  animation: slideIn 2s ease-in-out infinite alternate;
}

@keyframes slideIn {
  0% { transform: translateX(-180px); }
  100% { transform: translateX(180px); }
}

/* 6. Rotate */
.anim-rotate {
  font-size: 1.5rem;
  background-color: #f59e0b;
  animation: spin 2s linear infinite;
}

/* 7. Shake */
.input-shake {
  padding: 8px 16px;
  border: 2px solid #ef4444;
  background-color: #fee2e2;
  color: #991b1b;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
  outline: none;
  animation: shake 0.5s ease infinite;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-6px); }
  75% { transform: translateX(6px); }
}

/* 8. Floating */
.floating-illustration {
  font-size: 2.5rem;
  animation: float 2.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* 9. Progress Bar */
.progress-bar-container {
  width: 200px;
  height: 16px;
  background-color: #e2e8f0;
  border-radius: 10px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #cbd5e1;
}

.progress-bar-fill {
  height: 100%;
  width: 0;
  background-color: #10b981;
  animation: progress 3s ease infinite;
}

@keyframes progress {
  0% { width: 0%; }
  100% { width: 100%; }
}

/* 10. Typing Effect */
.typing-container {
  display: inline-block;
}

.typing-text {
  font-family: monospace;
  font-size: 16px;
  font-weight: bold;
  color: #1e293b;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #4f46e5;
  width: 0;
  animation: typing 3s steps(10) infinite;
}

@keyframes typing {
  0%, 100% { width: 0; }
  50% { width: 100%; }
}

/* 11. Loading Dots */
.dots-container {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  background-color: #6366f1;
  border-radius: 50%;
  animation: bounceDot 1.2s infinite ease-in-out;
}

.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounceDot {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* 12. Notification Bell */
.bell-icon {
  font-size: 2.2rem;
  animation: bellshake 1s ease infinite;
  transform-origin: top center;
}

@keyframes bellshake {
  0%, 100% { transform: rotate(0); }
  15% { transform: rotate(15deg); }
  30% { transform: rotate(-15deg); }
  45% { transform: rotate(10deg); }
  60% { transform: rotate(-10deg); }
  75% { transform: rotate(4deg); }
  85% { transform: rotate(-4deg); }
}

/* 13. Heart Beat */
.heart-icon {
  font-size: 2.2rem;
  animation: heartbeat 1s infinite;
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  20% { transform: scale(1.25); }
  40% { transform: scale(1); }
  60% { transform: scale(1.25); }
  80%, 100% { transform: scale(1); }
}

/* 14. Card Hover Animation */
.hover-card-anim {
  width: 220px;
  height: 120px;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin: 0 auto;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  text-align: left;
}

.hover-card-anim:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(99, 102, 241, 0.15);
  animation: border-pulse 1.5s infinite;
}

@keyframes border-pulse {
  0%, 100% { border-color: #e2e8f0; }
  50% { border-color: #6366f1; }
}

.hover-card-anim h4 {
  margin: 0 0 8px 0;
  color: #1e293b;
}

.hover-card-anim p {
  margin: 0;
  color: #64748b;
  font-size: 11px;
  line-height: 1.4;
}

/* 15. Button Click Animation */
.action-btn {
  background-color: #6366f1;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.15);
  transition: transform 0.1s;
}

.action-btn:active {
  transform: scale(0.95);
}
`,
    readme: `# Chapter 23: CSS Animations

CSS Animations allow an element to **change its appearance or position automatically over time** without JavaScript.

Animations make websites feel modern, interactive, and engaging.

---

## Animation Workflow

\`\`\`
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
\`\`\`

---

## Animation Properties Table

| Property | Purpose | Example |
| :--- | :--- | :--- |
| **animation-name** | Animation name | \`pulse\` |
| **animation-duration** | Speed | \`2s\` |
| **animation-delay** | Wait before start | \`1s\` |
| **animation-timing-function** | Speed curve | \`ease\` |
| **animation-iteration-count** | Number of repeats | \`infinite\` |
| **animation-direction** | Forward / Reverse | \`alternate\` |
| **animation-fill-mode** | Keep final state | \`forwards\` |
| **animation-play-state** | Pause / Run | \`paused\` |
| **animation** | Shorthand | \`pulse 2s ease infinite\` |

---

## @keyframes Workflow & Timeline
@keyframes specify the styles for the element at various times during the animation timeline.
\`\`\`
0% ────► 25% ────► 50% ────► 75% ────► 100%
(Start)                            (End)
\`\`\`

---

## Animation Shorthand Rule
Instead of defining every property individually, you can use the shorthand:
\`\`\`css
/* name | duration | timing-function | delay | iteration-count | direction | fill-mode */
animation: pulse 2s ease 1s infinite alternate forwards;
\`\`\`

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
\`\`\`text
Opacity: 0
     ↓
25%
     ↓
50%
     ↓
75%
     ↓
Opacity: 1
\`\`\`

---

### Slide From Left
\`\`\`text
Left Side
    ↓
Center
    ↓
Right Side
    ↓
Center
    ↓
Left Side
\`\`\`
`
  },
  {
    num: "24",
    name: "css-shadows",
    title: "CSS Shadows Layout",
    description: "Learn to add depths to layout cards using inset, double overlays, and fuzzy text drop shadows.",
    html: `
<div class="container">
  <h1>CSS Shadows Playground</h1>

  <!-- 1. Soft Shadow -->
  <section class="card">
    <h2>1. Soft Shadow</h2>
    <div class="demo shadow-soft">
      Soft Shadow
    </div>
    <p>Subtle outer shadow that mimics real light. Standard dashboard component style.</p>
  </section>

  <hr>

  <!-- 2. Heavy Shadow -->
  <section class="card">
    <h2>2. Heavy Shadow</h2>
    <div class="demo shadow-heavy">
      Heavy Shadow
    </div>
    <p>Larger offsets and blur, simulating floating components high above elements.</p>
  </section>

  <hr>

  <!-- 3. Inset Shadow -->
  <section class="card">
    <h2>3. Inset Shadow</h2>
    <div class="demo shadow-inset">
      Inset Shadow
    </div>
    <p>Draws shadow lines inward, creating carved container visual effects.</p>
  </section>

  <hr>

  <!-- 4. Glow Shadow -->
  <section class="card">
    <h2>4. Glow Shadow</h2>
    <div class="demo shadow-glow">
      Glow Shadow
    </div>
    <p>Uses colorful alpha overlays to simulate neon glows.</p>
  </section>

  <hr>

  <!-- 5. Multiple Shadows -->
  <section class="card">
    <h2>5. Multiple Shadows</h2>
    <div class="demo shadow-multiple">
      Multiple Shadows
    </div>
    <p>Combines multiple layers of box-shadow to construct realistic physical depths.</p>
  </section>

  <hr>

  <!-- 6. Hover Elevation -->
  <section class="card">
    <h2>6. Hover Elevation</h2>
    <div class="demo shadow-hover">
      Hover Me
    </div>
    <p>Translates vertically and grows shadow on hover to simulate elevation lifts.</p>
  </section>

  <hr>

  <!-- 7. Text Shadow -->
  <section class="card">
    <h2>7. Text Shadow</h2>
    <h1 class="text-shadow">CSS3</h1>
    <p>Adds drop shadow behind text nodes.</p>
  </section>

  <hr>

  <!-- 8. Glassmorphism Card -->
  <section class="card">
    <h2>8. Glassmorphism Card</h2>
    <div class="glass-container-bg">
      <div class="glass-card">
        Glass UI
      </div>
    </div>
    <p>Uses a semi-transparent background, backdrop-filter blur, and thin border to mimic frosted glass.</p>
  </section>

  <hr>

  <!-- 9. Neumorphism -->
  <section class="card">
    <h2>9. Neumorphism</h2>
    <div class="neumorphism">
      Soft UI
    </div>
    <p>Uses a dual-light source shadow effect (dark shadow on one side, light shadow on the other) to appear extruded from the background.</p>
  </section>
</div>
`,
    css: `/* 24. CSS Shadows Sandbox */

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  text-align: center;
}

h2 {
  color: #4f46e5;
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 25px;
  background: #f5f3ff;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
}

p {
  color: #64748b;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 0;
  line-height: 1.5;
}

/* Common Demo Box */
.demo {
  width: 220px;
  height: 120px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 15px;
  font-weight: bold;
  color: #1e293b;
  transition: .4s;
}

/* 1. Soft Shadow */
.shadow-soft {
  box-shadow: 0 5px 15px rgba(0,0,0,.15);
}

/* 2. Heavy Shadow */
.shadow-heavy {
  box-shadow: 0 20px 40px rgba(0,0,0,.35);
}

/* 3. Inset Shadow */
.shadow-inset {
  box-shadow: inset 0 0 20px rgba(0,0,0,.35);
}

/* 4. Glow Shadow */
.shadow-glow {
  background: #4f46e5;
  color: white;
  box-shadow: 
    0 0 10px #6366f1,
    0 0 30px #6366f1,
    0 0 60px #6366f1;
}

/* 5. Multiple Shadows */
.shadow-multiple {
  box-shadow: 
    0 4px 8px rgba(0,0,0,.15),
    0 10px 25px rgba(0,0,0,.15),
    0 20px 40px rgba(0,0,0,.12);
}

/* 6. Hover Elevation */
.shadow-hover {
  box-shadow: 0 5px 10px rgba(0,0,0,.15);
}

.shadow-hover:hover {
  transform: translateY(-12px);
  box-shadow: 0 25px 45px rgba(0,0,0,.30);
}

/* 7. Text Shadow */
.text-shadow {
  font-size: 60px;
  text-align: center;
  color: #4f46e5;
  text-shadow: 3px 3px 6px rgba(0,0,0,.3);
  margin: 10px 0;
}

/* 8. Glassmorphism */
.glass-container-bg {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.glass-card {
  width: 250px;
  margin: auto;
  padding: 30px;
  text-align: center;
  background: rgba(255,255,255,.2);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.3);
  box-shadow: 0 8px 30px rgba(0,0,0,.2);
  color: white;
  font-weight: bold;
}

/* 9. Neumorphism */
.neumorphism {
  width: 220px;
  height: 120px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e7eb;
  border-radius: 20px;
  color: #475569;
  font-weight: bold;
  box-shadow: 
    10px 10px 20px #cbd5e1,
    -10px -10px 20px white;
}
`,
    readme: `# Chapter 24: CSS Shadows

CSS Shadows create depth, elevation, glowing effects, and realistic UI components.

There are two main types of shadows:

| Shadow Type | Used For |
| :--- | :--- |
| **box-shadow** | Adds shadow around an HTML element |
| **text-shadow** | Adds shadow behind text |

---

## Box Shadow Syntax
\`\`\`css
box-shadow: horizontal-offset vertical-offset blur-radius spread-radius color inset;
\`\`\`
Example:
\`\`\`css
box-shadow: 0 10px 25px rgba(0,0,0,0.2);
\`\`\`

---

## Text Shadow Syntax
\`\`\`css
text-shadow: horizontal-offset vertical-offset blur-radius color;
\`\`\`
Example:
\`\`\`css
text-shadow: 2px 2px 5px gray;
\`\`\`

---

## Shadow Workflow Diagram
\`\`\`
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
\`\`\`

---

## Shadow Parameter Explanation

| Parameter | Description | Example |
| :--- | :--- | :--- |
| **Horizontal Offset** | Moves shadow left/right | \`10px\` |
| **Vertical Offset** | Moves shadow up/down | \`15px\` |
| **Blur Radius** | Makes the shadow softer | \`25px\` |
| **Spread Radius** | Increases/decreases shadow size | \`5px\` |
| **Color** | Shadow color | \`rgba(0,0,0,0.3)\` |
| **inset** | Places shadow inside the element | \`inset\` |

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
\`\`\`
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
\`\`\`
`
  },
  {
    num: "25",
    name: "css-variables",
    title: "CSS Variables",
    description: "Organize custom layout variables for color definitions, and manage dark-mode styling switches dynamically.",
    html: `
<div class="container">
  <h1>CSS Variables Playground</h1>

  <!-- 1. Global Variables -->
  <section class="card">
    <h2>1. Global Variables</h2>
    <div style="margin: 20px 0;">
      <button class="primary-btn">Primary Button</button>
    </div>
    <p>Uses variables defined inside :root selector, making them accessible globally.</p>
  </section>

  <hr>

  <!-- 2. Local Variables -->
  <section class="card">
    <h2>2. Local Variables</h2>
    <div class="local-box">
      Local Variable Example
    </div>
    <p>The yellow color variable exists strictly inside the scope of the .local-box selector.</p>
  </section>

  <hr>

  <!-- 3. Fallback Values -->
  <section class="card">
    <h2>3. Fallback Values</h2>
    <div class="fallback-box">
      Fallback Color
    </div>
    <p>Attempts to retrieve a non-existent variable, falling back to a default emerald color.</p>
  </section>

  <hr>

  <!-- 4. Variable Reuse -->
  <section class="card">
    <h2>4. Variable Reuse</h2>
    <div class="reuse-card">
      Reusable Variables
    </div>
    <p>A single card using global padding, background, radius, and shadow tokens together.</p>
  </section>

  <hr>

  <!-- 5. Light Theme -->
  <section class="card">
    <h2>5. Light Theme</h2>
    <div class="theme light-theme">
      Light Theme
    </div>
    <p>Demonstrates variable overrides inside local blocks to configure theme colors.</p>
  </section>

  <hr>

  <!-- 6. Dark Theme -->
  <section class="card">
    <h2>6. Dark Theme</h2>
    <div class="theme dark-theme">
      Dark Theme
    </div>
    <p>Switches background and text color variables to dark theme styles inside this container.</p>
  </section>

  <hr>

  <!-- 7. Card Component -->
  <section class="card">
    <h2>7. Card Component</h2>
    <div class="dashboard-card">
      Dashboard Card
    </div>
    <p>A clean, hoverable card component constructed with global variable tokens.</p>
  </section>

  <hr>

  <!-- 8. Student Summary -->
  <section class="card">
    <h2>8. Student Summary</h2>
    <p style="font-size: 14px; font-weight: 500; color: #1e293b; margin: 0;">
      One variable can update hundreds of CSS rules instantly across your website!
    </p>
  </section>
</div>
`,
    css: `/* 25. CSS Variables Playground */

/* Declaring variables inside root structure selector (Global Scope) */
:root {
  --primary: #4f46e5;
  --secondary: #0f172a;
  --success: #16a34a;
  --danger: #dc2626;
  --radius: 10px;
  --padding: 20px;
  --shadow: 0 10px 25px rgba(0,0,0,.15);
  --transition: .3s;
}

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  text-align: center;
}

h2 {
  color: #4f46e5;
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 25px;
  background: #f5f3ff;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
}

p {
  color: #64748b;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 0;
  line-height: 1.5;
}

/* 1. Global Variable Example */
.primary-btn {
  background: var(--primary);
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: var(--radius);
  transition: var(--transition);
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(79, 70, 229, 0.15);
}

.primary-btn:hover {
  background: #3730a3;
}

/* 2. Local Variables */
.local-box {
  --local-color: #f59e0b;
  background: var(--local-color);
  padding: 20px;
  border-radius: var(--radius);
  color: white;
  font-weight: bold;
  width: 250px;
  margin: 0 auto;
}

/* 3. Fallback Value */
.fallback-box {
  background: var(--unknown-color, #10b981);
  padding: 20px;
  color: white;
  font-weight: bold;
  border-radius: var(--radius);
  width: 250px;
  margin: 0 auto;
}

/* 4. Variable Reuse */
.reuse-card {
  background: var(--primary);
  color: white;
  padding: var(--padding);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 250px;
  margin: 0 auto;
  font-weight: bold;
}

/* 5. Light Theme */
.light-theme {
  --theme-bg: white;
  --theme-text: #111827;
  background: var(--theme-bg);
  color: var(--theme-text);
  padding: 20px;
  border-radius: var(--radius);
  border: 1px solid #ddd;
  width: 250px;
  margin: 0 auto;
  font-weight: bold;
}

/* 6. Dark Theme */
.dark-theme {
  --theme-bg: #111827;
  --theme-text: white;
  background: var(--theme-bg);
  color: var(--theme-text);
  padding: 20px;
  border-radius: var(--radius);
  width: 250px;
  margin: 0 auto;
  font-weight: bold;
}

/* 7. Dashboard Card */
.dashboard-card {
  background: white;
  padding: 30px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
  width: 250px;
  margin: 0 auto;
  color: #1e293b;
  font-weight: bold;
  border: 1px solid #e2e8f0;
}

.dashboard-card:hover {
  transform: translateY(-8px);
}
`,
    readme: `# Chapter 25: CSS Variables (Custom Properties)

CSS Variables (also called **Custom Properties**) are reusable values that allow you to store colors, spacing, fonts, sizes, and other CSS values in one place.

---

## Why Use CSS Variables?
- **Write cleaner CSS:** Define colors once and reuse them.
- **Easy maintenance:** Update a brand color in one place and the entire website adapts automatically.
- **Dynamic theme switching:** Easily configure Light and Dark modes.

---

## Variable Workflow
\`\`\`
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
\`\`\`

---

## Variable Scope
| Scope | Description | Example Selector |
| :--- | :--- | :--- |
| **Global Scope** | Available everywhere on the page | \`:root\` |
| **Local Scope** | Scoped strictly to one selector | \`${".local-box"}\` |
| **Theme Overrides** | Re-defining variables locally | \`${".dark-theme"}\` |

---

## var() Function Syntax
Retrieve variables using the \`var()\` syntax:
\`\`\`css
/* Standard global variable fetch */
background-color: var(--primary);

/* Fallback mechanism if variable is missing */
background-color: var(--unknown-color, #10b981);
\`\`\`

---

## Theme Switching Workflow
\`\`\`
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
\`\`\`

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
- **Declaration:** Prefix custom properties with double dashes (\`--variable-name: value\`).
- **Use:** Wrap in the var function (\`var(--variable-name)\`).
- **Fallback values:** Add a fallback argument (\`var(--name, fallback-value)\`) to keep layouts robust.
- **Centralized variables:** Defining variables in \`:root\` ensures children can inherit them globally.
`
  },
  {
    num: "26",
    name: "css-functions",
    title: "CSS Functions",
    description: "Construct layouts dynamically utilizing inline equations including calc, min, max, and clamp typography scales.",
    html: `
<div class="container">
  <h1>CSS Functions Playground</h1>

  <!-- 1. calc() -->
  <section class="card">
    <h2>1. calc()</h2>
    <div class="parent">
      <div class="calc-box">
        calc(100% - 80px)
      </div>
    </div>
    <p>Dynamically subtracts 80px from the 100% parent container width.</p>
  </section>

  <hr>

  <!-- 2. min() -->
  <section class="card">
    <h2>2. min()</h2>
    <div class="min-box">
      min(400px, 100%)
    </div>
    <p>Selects whichever value is smaller: 400px or 100% of the parent width.</p>
  </section>

  <hr>

  <!-- 3. max() -->
  <section class="card">
    <h2>3. max()</h2>
    <div class="max-box">
      max(300px, 50%)
    </div>
    <p>Selects whichever value is larger: 300px or 50% of the parent width.</p>
  </section>

  <hr>

  <!-- 4. clamp() -->
  <section class="card">
    <h2>4. clamp()</h2>
    <h1 class="clamp-text">Responsive Heading</h1>
    <p>Restricts text sizes between 20px (minimum) and 50px (maximum), using 5vw preferred scaling.</p>
  </section>

  <hr>

  <!-- 5. var() -->
  <section class="card">
    <h2>5. var()</h2>
    <div style="margin: 20px 0;">
      <button class="btn">CSS Variable</button>
    </div>
    <p>Fetches variable tokens defined inside :root.</p>
  </section>

  <hr>

  <!-- 6. rgb() -->
  <section class="card">
    <h2>6. rgb()</h2>
    <div class="rgb-box">
      RGB Colors
    </div>
    <p>Creates standard solid colors using Red, Green, Blue integer indices.</p>
  </section>

  <hr>

  <!-- 7. rgba() -->
  <section class="card">
    <h2>7. rgba()</h2>
    <div class="rgba-box">
      RGBA Colors
    </div>
    <p>Extends rgb() by adding an alpha channel (opacity) from 0 to 1.</p>
  </section>

  <hr>

  <!-- 8. hsl() -->
  <section class="card">
    <h2>8. hsl()</h2>
    <div class="hsl-box">
      HSL Colors
    </div>
    <p>Generates colors via Hue angle (0-360), Saturation (%), and Lightness (%).</p>
  </section>

  <hr>

  <!-- 9. url() -->
  <section class="card">
    <h2>9. url()</h2>
    <div class="url-box">
      Background Image
    </div>
    <p>Loads external resources like images, svgs, or custom font-face files.</p>
  </section>
</div>
`,
    css: `/* 26. CSS Functions Playground */

:root {
  --primary: #4f46e5;
}

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  text-align: center;
}

h2 {
  color: #4f46e5;
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 25px;
  background: #f5f3ff;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
}

p {
  color: #64748b;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 0;
  line-height: 1.5;
}

/* 1. calc() */
.parent {
  background: #ddd;
  padding: 20px;
  border-radius: 8px;
}

.calc-box {
  width: calc(100% - 80px);
  background: #4f46e5;
  color: white;
  padding: 15px;
  font-weight: bold;
  margin: 0 auto;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(79, 70, 229, 0.15);
}

/* 2. min() */
.min-box {
  width: min(400px, 100%);
  background: #10b981;
  padding: 20px;
  color: white;
  margin: auto;
  font-weight: bold;
  border-radius: 6px;
}

/* 3. max() */
.max-box {
  width: max(300px, 50%);
  background: #f97316;
  padding: 20px;
  color: white;
  margin: auto;
  font-weight: bold;
  border-radius: 6px;
}

/* 4. clamp() */
.clamp-text {
  font-size: clamp(20px, 5vw, 50px);
  color: #1e293b;
  margin: 15px 0;
  font-weight: bold;
  text-align: center;
}

/* 5. var() */
.btn {
  background: var(--primary);
  color: white;
  padding: 15px 25px;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.9;
}

/* 6. rgb() */
.rgb-box {
  background: rgb(59,130,246);
  padding: 20px;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  width: 200px;
  margin: 0 auto;
}

/* 7. rgba() */
.rgba-box {
  background: rgba(59, 130, 246, 0.4);
  padding: 20px;
  color: #1e3a8a;
  font-weight: bold;
  border-radius: 6px;
  width: 200px;
  margin: 0 auto;
}

/* 8. hsl() */
.hsl-box {
  background: hsl(220, 80%, 60%);
  padding: 20px;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  width: 200px;
  margin: 0 auto;
}

/* 9. url() */
.url-box {
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%234f46e5"/><circle cx="50" cy="50" r="40" fill="%23818cf8"/></svg>');
  background-size: cover;
  background-position: center;
  height: 150px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  width: 250px;
  margin: 0 auto;
}
`,
    readme: `# Chapter 26: CSS Functions

CSS Functions are built-in operations that calculate, transform, or generate values dynamically.

Instead of writing fixed values, CSS functions allow the browser to calculate values automatically at runtime.

---

## Why Use CSS Functions?
- **Dynamic layout sizing:** Re-calculate containers relative to viewport margins.
- **Fluid typography:** Scale text automatically according to device sizes.
- **Advanced color control:** Easily configure opacities and hue angles.

---

## CSS Function Workflow
\`\`\`
CSS Function
     │
     ▼
Browser Receives Function (e.g., calc(), clamp())
     │
     ▼
Browser Calculates Value dynamically based on context
     │
     ▼
Computed CSS Value is rendered on screen
\`\`\`

---

## Functions Reference Guide

| Function | Purpose | Example |
| :--- | :--- | :--- |
| **calc()** | Mathematical calculations | \`calc(100% - 50px)\` |
| **min()** | Selects the smallest parameter | \`min(400px, 100%)\` |
| **max()** | Selects the largest parameter | \`max(300px, 50%)\` |
| **clamp()** | Limits value: Min → Preferred → Max | \`clamp(18px, 5vw, 40px)\` |
| **var()** | Fetches CSS variable custom properties | \`var(--primary)\` |
| **rgb()** | Defines colors via Red/Green/Blue values | \`rgb(59, 130, 246)\` |
| **rgba()** | Defines colors with an Alpha channel | \`rgba(59, 130, 246, 0.4)\` |
| **hsl()** | Defines Hue / Saturation / Lightness | \`hsl(220, 80%, 60%)\` |
| **url()** | Links to resource files, images, or fonts | \`url('image.jpg')\` |

---

## Real-world Applications & Uses

| Function | Real Project Example |
| :--- | :--- |
| **calc()** | Main content width alongside a fixed sidebar |
| **min()** | Responsive layout cards that scale down on mobile |
| **max()** | Minimum container widths on ultra-wide screens |
| **clamp()** | Fluid headings scaling smoothly without media queries |
| **var()** | Centralized web variables, dark mode styling |
| **rgb()** | Solid background colors |
| **rgba()** | Glassmorphism card overlays, dark modal backdrops |
| **hsl()** | Theme palette generation |
| **url()** | Loading banner background assets |

---

## Detailed Function Workflows

### calc() Math Workflow
\`\`\`
Parent Width = 100%
     │
     ▼
Subtract 80px
     │
     ▼
Final Width Computed
     │
     ▼
Element Rendered
\`\`\`

---

### min() Comparison
\`\`\`
Compare 400px vs 100%
     │
     ▼
Choose smaller value ──► Prevents element from breaking mobile boundaries!
\`\`\`

---

### max() Comparison
\`\`\`
Compare 300px vs 50%
     │
     ▼
Choose larger value ──► Enforces minimum size boundaries on small screens!
\`\`\`

---

### clamp() Mechanics
\`\`\`
Minimum (e.g., 20px) ──► Preferred (e.g., 5vw) ──► Maximum (e.g., 50px)
     │
     ▼
Scales text fluidly according to the viewport width!
\`\`\`

---

## Student Learning Outcomes
After completing this chapter, students will be able to:
1. Use **calc()** for dynamic sizing.
2. Apply **min()**, **max()**, and **clamp()** for responsive fluid typography and layouts.
3. Fetch brand values cleanly using **var()**.
4. Generate color palettes using **rgb()**, **rgba()**, and **hsl()**.
5. Import background graphics cleanly using **url()**.
`
  },
  {
    num: "27",
    name: "css-advanced-selectors",
    title: "CSS Advanced Selectors",
    description: "Implement complex selection rules using adjacent sibling, general sibling, and advanced attribute selectors.",
    html: `
<div class="container">
  <h1>CSS Advanced Selectors Playground</h1>

  <!-- 1. Advanced Attribute Selectors & Data Attributes -->
  <section class="card">
    <h2>1. Attribute & Data Selectors (^=, $=, *=)</h2>
    <div style="display: flex; flex-direction: column; gap: 8px; align-items: center; margin: 15px 0;">
      <a href="https://example.com" class="attr-link" data-type="external-sec">Secure External Link (ends in .com, starts with https)</a>
      <a href="http://example.org" class="attr-link" data-type="external-unsec">Unsecure Org Link (ends in .org, starts with http)</a>
      <a href="/downloads/report.pdf" class="attr-link" data-type="internal-download">PDF Report Download (contains /downloads/)</a>
    </div>
    <p>Styles anchors automatically based on URL protocols, suffixes, or substring data-types.</p>
  </section>

  <hr>

  <!-- 2. Multiple Classes & Selector Chaining -->
  <section class="card">
    <h2>2. Multiple Class Selection & Chaining</h2>
    <div style="display: flex; justify-content: center; gap: 10px; margin: 15px 0;">
      <span class="badge">Normal Badge</span>
      <span class="badge primary">Primary Badge</span>
      <span class="badge primary outline">Primary Outlined Badge</span>
    </div>
    <p>Demonstrates chained selectors (e.g. <code>.badge.primary.outline</code>) which target elements that have all specified classes.</p>
  </section>

  <hr>

  <!-- 3. Advanced nth-child & nth-of-type Patterns -->
  <section class="card">
    <h2>3. :nth-child() & :nth-of-type() Patterns</h2>
    <div class="list-grid">
      <ul class="nth-child-list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
      </ul>
      <div class="type-container">
        <span>Span 1</span>
        <p>Paragraph 1</p>
        <span>Span 2</span>
        <p>Paragraph 2</p>
      </div>
    </div>
    <p>Shows formula-based zebra striping (e.g. <code>:nth-child(2n)</code>) and targets types regardless of siblings using <code>:nth-of-type()</code>.</p>
  </section>

  <hr>

  <!-- 4. first-of-type, last-of-type, only-child, only-of-type -->
  <section class="card">
    <h2>4. Type & Child Limits</h2>
    <div class="limits-grid">
      <div class="type-limits">
        <p class="limit-p">First Paragraph (first-of-type)</p>
        <p class="limit-p">Middle Paragraph</p>
        <p class="limit-p">Last Paragraph (last-of-type)</p>
      </div>
      <div class="single-child-container">
        <div class="only-child-box">I am an only-child!</div>
      </div>
    </div>
    <p>Highlights children depending on order limits (<code>:first-of-type</code>, <code>:last-of-type</code>) or isolation (<code>:only-child</code>).</p>
  </section>

  <hr>

  <!-- 5. Modern :has() Parent Selector -->
  <section class="card">
    <h2>5. Modern :has() Parent Selector</h2>
    <div class="parent-has-card">
      <h4>Parent Container</h4>
      <p>I get a special background/border style because I contain an active warning element below!</p>
      <div class="warning-badge">⚠️ Active Alert</div>
    </div>
    <p>A CSS3 gamechanger: <code>.parent-has-card:has(.warning-badge)</code> styles the parent element based on its descendants.</p>
  </section>

  <hr>

  <!-- 6. is() & where() Selectors -->
  <section class="card">
    <h2>6. :is() & :where() Selectors</h2>
    <div class="group-selectors-container">
      <article>
        <h3>Article Title</h3>
        <p>Article content paragraph.</p>
      </article>
      <aside>
        <h3>Aside Title</h3>
        <p>Aside content paragraph.</p>
      </aside>
    </div>
    <p>Reduces selector repetition. <code>:is()</code> applies standard specificity, whereas <code>:where()</code> keeps specificity at 0.</p>
  </section>

  <hr>

  <!-- 7. Advanced :not() Selector -->
  <section class="card">
    <h2>7. Advanced :not() Exclusions</h2>
    <div class="exclusion-container">
      <button class="styled-btn">Normal Button</button>
      <button class="styled-btn disabled">Disabled Button</button>
      <button class="styled-btn special">Special Button</button>
    </div>
    <p>Uses negative selector lists: <code>.styled-btn:not(.disabled):not(.special)</code> to select buttons lacking both states.</p>
  </section>
</div>
`,
    css: `/* 27. CSS Advanced Selectors Sandbox */

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  text-align: center;
}

h2 {
  color: #4f46e5;
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 25px;
  background: #f5f3ff;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
}

p {
  color: #64748b;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 0;
  line-height: 1.5;
}

/* 1. Attribute Selectors & Data Attributes */
.attr-link {
  text-decoration: none;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 13px;
  transition: opacity 0.2s;
}

.attr-link:hover {
  opacity: 0.85;
}

/* Starts with https (^=) */
.attr-link[href^="https://"] {
  background-color: #ecfdf5;
  color: #059669;
}

/* Ends with .org ($=) */
.attr-link[href$=".org"] {
  background-color: #fef3c7;
  color: #d97706;
}

/* Contains /downloads/ (*=) */
.attr-link[href*="/downloads/"] {
  background-color: #eff6ff;
  color: #2563eb;
}

/* Data attribute matching */
.attr-link[data-type*="download"]::before {
  content: "⬇️ ";
}

/* 2. Multiple Classes & Chaining */
.badge {
  display: inline-block;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50px;
  background-color: #e2e8f0;
  color: #475569;
  border: 1px solid transparent;
}

/* Chained class 1 */
.badge.primary {
  background-color: #6366f1;
  color: white;
}

/* Chained class 2 */
.badge.primary.outline {
  background-color: transparent;
  color: #6366f1;
  border-color: #6366f1;
}

/* 3. nth-child and nth-of-type */
.list-grid {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin: 15px 0;
}

.nth-child-list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 150px;
  text-align: left;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
}

.nth-child-list li {
  padding: 8px 12px;
  font-size: 13px;
  color: #334155;
}

/* Formula: Even items */
.nth-child-list li:nth-child(even) {
  background-color: #f1f5f9;
}

/* Formula: 3rd item specifically */
.nth-child-list li:nth-child(3) {
  font-weight: bold;
  color: #6366f1;
}

.type-container {
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 10px;
  width: 150px;
  text-align: left;
  font-size: 12px;
}

.type-container span {
  display: block;
  color: #64748b;
}

.type-container p {
  margin: 4px 0 10px 0;
  font-weight: bold;
}

/* Second p sibling regardless of intervening span tag */
.type-container p:nth-of-type(2) {
  color: #ef4444;
}

/* 4. Type & Child Limits */
.limits-grid {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin: 15px 0;
}

.type-limits {
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 10px;
  text-align: left;
  width: 200px;
}

.limit-p {
  margin: 5px 0;
  font-size: 12px;
  color: #334155;
}

.limit-p:first-of-type {
  color: #059669;
  font-weight: bold;
}

.limit-p:last-of-type {
  color: #d97706;
  font-weight: bold;
}

.single-child-container {
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
}

.only-child-box {
  background-color: #f5f3ff;
  color: #6366f1;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.single-child-container div:only-child {
  border: 2px dashed #6366f1;
}

/* 5. Modern :has() Selector */
.parent-has-card {
  width: 280px;
  margin: 0 auto;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 15px;
  background-color: white;
  text-align: left;
  transition: all 0.3s;
}

.parent-has-card h4 {
  margin: 0 0 5px 0;
  color: #1e293b;
}

.parent-has-card p {
  margin: 0 0 10px 0;
  font-size: 11px;
}

.warning-badge {
  display: inline-block;
  background-color: #fee2e2;
  color: #ef4444;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
}

/* Style parent dynamically if it contains .warning-badge */
.parent-has-card:has(.warning-badge) {
  border-color: #ef4444;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.1);
  background-color: #fffafb;
}

/* 6. is() & where() selectors */
.group-selectors-container article h3,
.group-selectors-container aside h3 {
  color: #1e293b;
}

/* Using :is() to group elements */
.group-selectors-container :is(article, aside) h3 {
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 4px;
}

/* Using :where() to style text without adding specificity */
.group-selectors-container :where(article, aside) p {
  color: #64748b;
  font-size: 12px;
}

/* 7. Exclusions using :not() */
.exclusion-container {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 15px 0;
}

.styled-btn {
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid #cbd5e1;
  background-color: white;
  color: #475569;
}

/* Styled button default state excluding disabled/special modifier classes */
.styled-btn:not(.disabled):not(.special) {
  background-color: #e0e7ff;
  color: #4338ca;
  border-color: #c7d2fe;
}

.styled-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.styled-btn.special {
  background-color: #10b981;
  color: white;
  border-color: #059669;
}
`,
    readme: `# Chapter 27: CSS Advanced Selectors

Advanced selectors allow you to build precise layout logic based on element relationships, data attributes, modifiers, and child hierarchies.

---

## 1. Advanced Attribute Selectors
Attribute operators match substrings inside element attributes:
- **Starts with (\`^=\`):** Targets values beginning with the specified string.
- **Ends with (\`$=\`):** Targets values ending with the specified string.
- **Contains (\`*=\`):** Targets values containing the substring anywhere.

\`\`\`css
/* Match secure URLs */
a[href^="https://"] { color: green; }

/* Match file type links */
a[href$=".pdf"] { color: red; }
\`\`\`

---

## 2. Selector Chaining & Multiple Classes
Connecting classes without spaces selects elements that contain **all** listed properties simultaneously.

\`\`\`css
/* Chained Class Selector */
.badge.primary.outline {
  border-color: indigo;
}
\`\`\`

---

## 3. Structural Pseudo-Classes
Fine-tune elements depending on their index sequence or parent composition:
- **:nth-child(n):** Target elements based on index formulas (e.g. \`even\`, \`odd\`, \`3n+1\`).
- **:nth-of-type(n):** Select elements by type sequence, skipping other siblings.
- **:first-of-type / :last-of-type:** Style the first or last instance of a tag inside a parent block.
- **:only-child:** Styles an element only if it has zero sibling elements.
- **:only-of-type:** Styles an element if it is the sole instance of that tag type inside its parent.

---

## 4. Modern Logical Combinators

### :has() Parent Selector
Targets a parent selector based on whether it contains matching descendants.
\`\`\`css
/* Style card if it contains a warning badge child */
.card:has(.warning-badge) {
  border-color: red;
}
\`\`\`

---

### :is() vs :where() Grouping Selectors
Reduces repetitive CSS selectors by grouping queries.
- **:is():** Evaluates specificity using its most specific argument.
- **:where():** Sets selector specificity scoring to zero, making overrides effortless.

\`\`\`css
/* Shortened grouping */
:is(header, main, footer) p {
  line-height: 1.5;
}
\`\`\`

---

### :not() Exclusions
Excludes elements that match specified conditions.
\`\`\`css
/* Styles buttons that do not have class disabled or class special */
.button:not(.disabled):not(.special) {
  background: blue;
}
\`\`\`

---

## Selectors Spec Cheat Sheet

| Selector Pattern | Type / Target | Specificity Match |
| :--- | :--- | :--- |
| \`div.badge\` | Chained Class | High (Class + Element) |
| \`[data-role="admin"]\` | Data Attribute | Moderate (Attribute selector) |
| \`li:nth-child(even)\` | Structural Pseudo-class | Moderate (Pseudo-class) |
| \`p:first-of-type\` | Type Specific Match | Moderate |
| \`card:has(button)\` | Parent Containment | High |
| \`section :where(h1, h2)\` | Specificity Zero Group | Low (Strictly targets section) |
| \`button:not(.btn-link)\` | Negation Exclusions | Moderate |

---

## Student Learning Outcomes
After completing this chapter, students will be able to:
1. Construct custom **Attribute matches** to identify files and secure URLs automatically.
2. Chain multiple **badge classes** together to prevent style bleeding.
3. Formulate **:nth-child() zebra patterns** for dashboard tables.
4. Use **:has()** parent selectors to style sections based on notification warnings.
5. Apply **:is()** and **:where()** selectors to structure clean styles.
`
  },
  {
    num: "28",
    name: "css-specificity-and-cascade",
    title: "CSS Specificity & Cascade",
    description: "Learn how the browser resolves layout rules using Inline, ID, Class, and Element selector hierarchies.",
    html: `
<div class="container">
  <h1>CSS Specificity & Cascade Playground</h1>

  <!-- 1. Specificity Score Duel -->
  <section class="card">
    <h2>1. Specificity Duel (Element vs Class vs ID)</h2>
    <div id="duel-box" class="duel-class duel-element-tag">
      Target Box
    </div>
    <div class="score-legend">
      <span class="element-score">div (Score 1)</span>
      <span class="class-score">.duel-class (Score 10)</span>
      <span class="id-score">#duel-box (Score 100)</span>
    </div>
    <p>Target styled by element, class, and ID rules. The ID rule (emerald) overrides class (indigo) and element (slate) because it has higher specificity weight (100 vs 10 vs 1).</p>
  </section>

  <hr>

  <!-- 2. Inline Style Priority -->
  <section class="card">
    <h2>2. Inline Style Override (Score 1000)</h2>
    <div id="inline-id" class="inline-class" style="background-color: #f59e0b; color: white;">
      Inline Override
    </div>
    <p>Inline styles (Score 1000) override external stylesheet ID, class, and element rules directly from the HTML markup.</p>
  </section>

  <hr>

  <!-- 3. Source Order Cascade -->
  <section class="card">
    <h2>3. Source Order Rule (Last Rule Wins)</h2>
    <div class="conflict-color">
      Conflict Box
    </div>
    <p>Both competing classes have identical specificity scores (10). The browser resolves this conflict by applying the rule written last in the CSS sheet cascade order (red overrides blue).</p>
  </section>

  <hr>

  <!-- 4. !important Rule -->
  <section class="card">
    <h2>4. The !important Nuclear Option</h2>
    <div class="important-class" style="background-color: #f59e0b; color: white;">
      !important Box
    </div>
    <p>Even though an inline style defines the background as yellow, the <code>!important</code> flag on the stylesheet's background rule overrides it completely.</p>
  </section>

  <hr>

  <!-- 5. Inherited vs Non-Inherited -->
  <section class="card">
    <h2>5. CSS Inheritance</h2>
    <div class="parent-inherit-box">
      I am the Parent Card
      <p class="child-inherit-box">I am the Child Paragraph</p>
    </div>
    <p>Inherited properties like <code>color</code> cascade down to child nodes automatically. Non-inherited properties like <code>border</code> do not pass down and must be defined manually.</p>
  </section>

  <hr>

  <!-- 6. Cascade Layers (@layer) -->
  <section class="card">
    <h2>6. Cascade Layers (@layer)</h2>
    <div class="layer-target-box">
      Layer Target Box
    </div>
    <p>Demonstrates modern CSS Layers: <code>@layer base, theme, custom;</code>. The custom layer override wins even though all classes have equal selector specificity.</p>
  </section>
</div>
`,
    css: `/* 28. CSS Specificity & Cascade Sandbox */

/* Define modern cascade layers */
@layer base, theme, custom;

@layer base {
  .layer-target-box {
    background-color: #ef4444; /* red (base - lowest layer priority) */
    color: white;
  }
}

@layer theme {
  .layer-target-box {
    background-color: #10b981; /* emerald (theme - middle layer priority) */
    color: white;
  }
}

@layer custom {
  .layer-target-box {
    background-color: #6366f1; /* indigo (custom - highest layer priority) */
    color: white;
  }
}

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.card {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  text-align: center;
}

h2 {
  color: #4f46e5;
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 25px;
  background: #f5f3ff;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
}

p {
  color: #64748b;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 0;
  line-height: 1.5;
}

/* Common demo box base */
#duel-box,
#inline-id,
.conflict-color,
.important-class,
.layer-target-box {
  width: 220px;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: bold;
  transition: transform 0.2s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

/* 1. Specificity Duel */
/* Element level: Score 1 */
.duel-element-tag {
  background-color: #64748b; /* slate */
  color: white;
}

/* Class level: Score 10 */
.duel-class {
  background-color: #6366f1; /* indigo */
}

/* ID level: Score 100 */
#duel-box {
  background-color: #10b981; /* emerald */
}

.score-legend {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 15px;
  font-size: 11px;
  font-weight: bold;
}

.element-score { color: #64748b; }
.class-score { color: #6366f1; }
.id-score { color: #10b981; }

/* 2. Inline Style Priority */
.inline-class {
  background-color: #ef4444;
  color: white;
}

#inline-id {
  background-color: #6366f1;
}

/* 3. Source Order */
/* First rule in source: gets overridden because of order, not specificity */
.conflict-color {
  background-color: #3b82f6; /* blue */
  color: white;
}

/* Last rule in source: wins! */
.conflict-color {
  background-color: #ef4444; /* red */
  color: white;
}

/* 4. !important */
.important-class {
  background-color: #8b5cf6 !important; /* purple wins over yellow inline */
  color: white;
}

/* 5. Inheritance */
.parent-inherit-box {
  border: 3px solid #6366f1; /* border is non-inherited */
  padding: 15px;
  border-radius: 8px;
  width: 250px;
  margin: 0 auto;
  color: #a855f7; /* color is inherited */
  font-weight: bold;
}

.child-inherit-box {
  margin-top: 8px;
  font-size: 12px;
  /* inherits color: #a855f7 automatically, but does NOT inherit border */
}
`,
    readme: `# Chapter 28: CSS Specificity & Cascade

Specificity determines which CSS rules are applied by the browser when multiple conflicting declarations target the same HTML element.

---

## The CSS Cascade Order
When conflict arises, the browser resolves it using the following hierarchy:
\`\`\`
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
\`\`\`

---

## Specificity Score Weight System
The browser assigns numerical weights to determine priority:

| Selector Type | Point Score | Selector Example |
| :--- | :--- | :--- |
| **Inline Styles** | **1000 points** | \`style="color: red;"\` |
| **IDs** | **100 points** | \`#box-id\` |
| **Classes, Attributes & Pseudo-classes** | **10 points** | \`.box-class\`, \`[disabled]\`, \`:hover\` |
| **Elements & Pseudo-elements** | **1 point** | \`div\`, \`p\`, \`::before\` |

---

## Specificity Score Calculation Examples
Conflicting selectors are calculated using simple addition:

- \`div p\` ──► 2 Elements = **2 points**
- \`.card p\` ──► 1 Class + 1 Element = **11 points**
- \`#sidebar .card p\` ──► 1 ID + 1 Class + 1 Element = **111 points**
- \`#sidebar .card .btn:hover\` ──► 1 ID + 2 Classes + 1 Pseudo-class = **130 points**

---

## Overriding Specificity

### 1. The !important Override
Appending \`!important\` to a declaration tells the browser to override all specificity rules (including inline style attributes). It should be used with caution as it disrupts the natural cascade flow.

\`\`\`css
.button {
  background-color: blue !important; /* Overrides inline background-color styles! */
}
\`\`\`

---

### 2. Modern CSS Cascade Layers (@layer)
Configure order-of-origin priorities for styled selectors. Layer definitions determine precedence, irrespective of selector specificities inside them.

\`\`\`css
/* Define layer order (highest layer wins) */
@layer base, theme, custom;

@layer base {
  .button { background: red; } /* Lowest priority layer */
}
@layer custom {
  .button { background: blue; } /* Highest priority layer - Wins! */
}
\`\`\`

---

## CSS Inheritance vs Non-Inherited
- **Inherited Properties:** Properties that automatically cascade down to children (e.g. \`color\`, \`font-family\`, \`line-height\`).
- **Non-Inherited Properties:** Properties that remain strictly on the parent element (e.g. \`border\`, \`padding\`, \`margin\`, \`width\`).

---

## Specificity Management Best Practices
- **Never use IDs for styling:** Keep ID selectors strictly for JS anchors. Styling with IDs makes rule overrides extremely difficult.
- **Avoid !important:** Refactor CSS rules and refine class nesting structures instead of resorting to \`!important\` patches.
- **Keep selectors flat:** Prefer single classes (\`.card-btn\`) over nested structures (\`.sidebar .card div ul li button\`).
`
  },
  {
    num: "29",
    name: "css-architecture",
    title: "CSS Architecture (BEM)",
    description: "Write clean, modular, and maintainable CSS layouts using BEM (Block, Element, Modifier) rules.",
    html: `
<div class="container">
  <h1>CSS Architecture (BEM) Playground</h1>

  <!-- 1. The BEM Breakdown Card -->
  <section class="card-demo">
    <h2>1. BEM Component Structure</h2>
    
    <!-- Block element -->
    <div class="product-card">
      <!-- Element: media header -->
      <div class="product-card__media">
        <span class="product-card__tag">New Release</span>
      </div>
      <!-- Element: content area -->
      <div class="product-card__content">
        <!-- Element: title -->
        <h3 class="product-card__title">Professional CSS course</h3>
        <!-- Element: description -->
        <p class="product-card__description">Learn BEM architecture, structural layout logic, cascade resolution, and dynamic animations.</p>
        <!-- Element: footer -->
        <div class="product-card__footer">
          <span class="product-card__price">$49.99</span>
          <button class="product-card__btn">Enroll Now</button>
        </div>
      </div>
    </div>
    
    <p>A BEM Component: Block (<code>.product-card</code>), Elements (<code>.product-card__title</code>, <code>.product-card__price</code>), and nested states.</p>
  </section>

  <hr>

  <!-- 2. Modifier Variations -->
  <section class="card-demo">
    <h2>2. BEM Modifiers (Variations)</h2>
    
    <!-- Block with Featured Modifier -->
    <div class="product-card product-card--featured">
      <div class="product-card__media">
        <span class="product-card__tag">Best Seller</span>
      </div>
      <div class="product-card__content">
        <h3 class="product-card__title">Enterprise CSS Architecture</h3>
        <p class="product-card__description">Master architectural design patterns for large-scale production websites and component styling libraries.</p>
        <div class="product-card__footer">
          <span class="product-card__price">$89.99</span>
          <!-- Button with element modifier -->
          <button class="product-card__btn product-card__btn--accent">Get Premium</button>
        </div>
      </div>
    </div>
    
    <p>Demonstrates modifier flags: <code>.product-card--featured</code> adjusts the border and glowing highlights, and <code>.product-card__btn--accent</code> shifts button colors.</p>
  </section>

  <hr>

  <!-- 3. BEM Modifier States (e.g., Disabled/Secondary) -->
  <section class="card-demo">
    <h2>3. Modifier States</h2>
    <div style="display: flex; gap: 15px; justify-content: center; margin: 15px 0;">
      <!-- Block with modifier -->
      <div class="alert-box">
        <p class="alert-box__message">Normal Info Alert Box message.</p>
      </div>
      
      <!-- Block with danger modifier -->
      <div class="alert-box alert-box--danger">
        <p class="alert-box__message">Critical System Alert Box message.</p>
      </div>
    </div>
    <p>Using modifiers to signify semantic alert states: <code>.alert-box--danger</code> modifies colors, borders, and margins.</p>
  </section>
</div>
`,
    css: `/* 29. CSS Architecture (BEM) Sandbox */

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

h1 {
  color: #1e293b;
  text-align: center;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.card-demo {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 25px;
  text-align: center;
}

h2 {
  color: #4f46e5;
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 25px;
  background: #f5f3ff;
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
}

p {
  color: #64748b;
  font-size: 13px;
  margin-top: 15px;
  margin-bottom: 0;
  line-height: 1.5;
}

/* ==========================================================================
   BEM Block: Product Card (.product-card)
   ========================================================================== */
.product-card {
  background-color: white;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  max-width: 320px;
  margin: 0 auto;
  text-align: left;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.05);
}

/* ==========================================================================
   BEM Elements: prefixed with double underscores (__)
   ========================================================================== */
.product-card__media {
  background-image: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  height: 120px;
  padding: 12px;
  position: relative;
}

.product-card__tag {
  background-color: #4f46e5;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  position: absolute;
  top: 12px;
  left: 12px;
}

.product-card__content {
  padding: 16px;
}

.product-card__title {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #1e293b;
}

.product-card__description {
  margin: 0 0 16px 0;
  font-size: 12px;
  color: #64748b;
  line-height: 1.4;
}

.product-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-card__price {
  font-size: 16px;
  font-weight: bold;
  color: #0f172a;
}

.product-card__btn {
  background-color: #0f172a;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 11px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.product-card__btn:hover {
  opacity: 0.9;
}

/* ==========================================================================
   BEM Modifiers: prefixed with double dashes (--)
   ========================================================================== */
/* 1. Block Modifier: product-card--featured */
.product-card--featured {
  border-color: #6366f1;
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.1);
}

.product-card--featured .product-card__media {
  background-image: linear-gradient(135deg, #c7d2fe 0%, #818cf8 100%);
}

.product-card--featured .product-card__tag {
  background-color: #f59e0b; /* Orange for bestseller tag */
}

/* 2. Element Modifier: product-card__btn--accent */
.product-card__btn--accent {
  background-color: #6366f1;
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.2);
}

.product-card__btn--accent:hover {
  background-color: #4f46e5;
}

/* ==========================================================================
   BEM Component 2: Alert Box (.alert-box)
   ========================================================================== */
.alert-box {
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 6px;
  padding: 12px 16px;
  width: 250px;
  text-align: left;
}

.alert-box__message {
  margin: 0;
  font-size: 11px;
  color: #166534;
  line-height: 1.4;
}

/* Modifier: alert-box--danger */
.alert-box--danger {
  background-color: #fef2f2;
  border-color: #fecaca;
}

.alert-box--danger .alert-box__message {
  color: #991b1b;
}
`,
    readme: `# Chapter 29: CSS Architecture (BEM)

CSS Architecture provides a clean, modular structure that keeps selectors scalable and maintainable in large enterprise web applications.

---

## The Need for CSS Architecture
As codebases scale, writing ad-hoc CSS causes styling rules to bleed across components, creating specificity deadlocks and code bloat.

### Architecture Challenges
- **Namespace Collisions:** Multiple selectors targeting standard classes (e.g. \`.title\`, \`.button\`) override one another.
- **Cascade Bloat:** Over-nesting selectors makes them difficult to overwrite.
- **Dead Styles:** Hard-to-maintain CSS results in legacy code blocks that developers are afraid to delete.

---

## The BEM Methodology
BEM (Block, Element, Modifier) is a selector naming convention that provides structural encapsulation.

### 1. Block
A standalone, reusable UI entity.
- **Naming Rule:** Represents the component namespace (e.g., \`.product-card\`, \`.navbar\`, \`.menu\`).
- **Example:**
\`\`\`css
.product-card {
  background: white;
  border-radius: 8px;
}
\`\`\`

---

### 2. Element
A sub-part of the block that cannot exist independently.
- **Naming Rule:** Block name followed by a double underscore (\`__\`) and element identifier (e.g., \`block__element\`).
- **Example:**
\`\`\`css
.product-card__title {
  font-size: 16px;
  color: darkblue;
}
\`\`\`

---

### 3. Modifier
A flag used to specify variations in appearance or state behaviors.
- **Naming Rule:** Block or Element name followed by double dashes (\`--\`) and modifier name (e.g., \`block--modifier\`).
- **Example:**
\`\`\`css
/* Block variation modifier */
.product-card--featured {
  border-color: gold;
}

/* Element variation modifier */
.product-card__btn--accent {
  background-color: purple;
}
\`\`\`

---

## BEM Component Architecture Diagram
\`\`\`
Block (.product-card)
  ├── Element (.product-card__media)
  ├── Element (.product-card__title)
  ├── Element (.product-card__price)
  └── Modifier (.product-card--featured)
\`\`\`

---

## Enterprise Folder Patterns (Sass 7-1 Rule)
In large systems, CSS/Sass is split into modular files:
\`\`\`
sass/
  ├── abstract/     (variables, functions, mixins)
  ├── base/         (reset, typography rules)
  ├── components/   (product-card.scss, buttons.scss)
  ├── layout/       (header.scss, sidebar.scss)
  ├── pages/        (home.scss, settings.scss)
  └── main.scss     (combines all files)
\`\`\`

---

## Specificity Advantages of BEM
By referencing single-level class selectors (e.g., \`.product-card__title\`), BEM maintains a flat specificity hierarchy. This eliminates selector nesting conflicts like \`.sidebar div ul li a\`.

---

## Student Learning Outcomes
After completing this chapter, students will be able to:
1. Identify **Blocks**, **Elements**, and **Modifiers** in modern user interfaces.
2. Structure component classes to **avoid class collisions** and namespaces pollution.
3. Construct modular variations using **BEM modifier flags**.
4. Organize stylesheet structures to match standard **Enterprise file structures**.
`
  },
  {
    num: "30",
    name: "final-capstone-project",
    title: "Final Capstone Project",
    description: "Design a complete responsive developer portfolio page integrating flexbox, grid, variable systems, and interactive animations.",
    html: `
<div class="c-portfolio">
  <!-- Responsive Navigation -->
  <nav class="c-navbar">
    <div class="c-navbar__brand">DevShowcase</div>
    <ul class="c-navbar__menu">
      <li class="c-navbar__item"><a href="#hero" class="c-navbar__link c-navbar__link--active">Home</a></li>
      <li class="c-navbar__item"><a href="#services" class="c-navbar__link">Services</a></li>
      <li class="c-navbar__item"><a href="#portfolio" class="c-navbar__link">Work</a></li>
      <li class="c-navbar__item"><a href="#contact" class="c-navbar__link">Contact</a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="c-hero" id="hero">
    <div class="c-hero__content">
      <span class="c-hero__tag">Available for Projects</span>
      <h1 class="c-hero__title">Building Elegant Digital Experiences</h1>
      <p class="c-hero__desc">I am a frontend developer specializing in scalable design systems, responsive grid structures, and interactive animations.</p>
      <div class="c-hero__actions">
        <a href="#contact" class="c-hero__btn c-hero__btn--primary">Start A Project</a>
        <a href="#portfolio" class="c-hero__btn c-hero__btn--secondary">View Work</a>
      </div>
    </div>
  </section>

  <!-- Services Grid Section -->
  <section class="c-services" id="services">
    <h2 class="c-services__title">My Core Services</h2>
    <div class="c-services__grid">
      <div class="c-services__card">
        <div class="c-services__icon">💻</div>
        <h3 class="c-services__name">Web Design</h3>
        <p class="c-services__desc">Crafting modern desktop, tablet, and mobile-first responsive web solutions.</p>
      </div>

      <div class="c-services__card">
        <div class="c-services__icon">⚡</div>
        <h3 class="c-services__name">Load Optimization</h3>
        <p class="c-services__desc">Analyzing and improving layout performance parameters for premium page speed.</p>
      </div>

      <div class="c-services__card">
        <div class="c-services__icon">🛠️</div>
        <h3 class="c-services__name">Clean CSS Systems</h3>
        <p class="c-services__desc">Constructing modular, reusable styling sheets using variables, functions, and BEM architecture.</p>
      </div>
    </div>
  </section>

  <!-- Portfolio Section -->
  <section class="c-work" id="portfolio">
    <h2 class="c-work__title">Featured Projects</h2>
    <div class="c-work__grid">
      <!-- Card 1 -->
      <div class="c-work__card">
        <div class="c-work__media">
          <div class="c-work__overlay">View Details</div>
        </div>
        <div class="c-work__content">
          <span class="c-work__tag">Grid System</span>
          <h4 class="c-work__name">SaaS Dashboard Console</h4>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="c-work__card">
        <div class="c-work__media c-work__media--purple">
          <div class="c-work__overlay">View Details</div>
        </div>
        <div class="c-work__content">
          <span class="c-work__tag">Flexbox & Transition</span>
          <h4 class="c-work__name">Crypto Wallet WebApp</h4>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="c-contact" id="contact">
    <div class="c-contact__box">
      <h2 class="c-contact__title">Let's Collaborate</h2>
      <p class="c-contact__desc">Let's build something amazing together! Get in touch regarding your upcoming project.</p>
      
      <form class="c-contact__form" onsubmit="event.preventDefault(); alert('Inquiry sent successfully!');">
        <div class="c-contact__row">
          <div class="c-contact__group">
            <input type="text" class="c-contact__input" placeholder="Your Name" required id="name-input"/>
          </div>
          <div class="c-contact__group">
            <input type="email" class="c-contact__input" placeholder="Your Email" required id="email-input"/>
          </div>
        </div>
        <textarea rows="5" class="c-contact__textarea" placeholder="Project Description..." required id="desc-input"></textarea>
        <button type="submit" class="c-contact__submit">Send Message</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="c-footer">
    <p class="c-footer__text">&copy; 2026 DevShowcase. Built with pure HTML5, CSS3, and BEM Architecture.</p>
  </footer>
</div>
`,
    css: `/* 30. Final Capstone Project - CSS3 Design System */

/* Centralized variables & design tokens */
:root {
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --bg-dark: #0f172a;
  --bg-card: #1e293b;
  --border-color: #334155;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --radius-lg: 16px;
  --radius-md: 8px;
  --shadow-sm: 0 4px 6px rgba(0,0,0,0.05);
  --shadow-lg: 0 10px 25px rgba(99, 102, 241, 0.15);
  --transition-fast: 0.2s ease-in-out;
  --transition-normal: 0.3s ease-in-out;
}

/* Global Reset & Base Layout */
* {
  box-sizing: border-box;
}

body {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: var(--bg-dark);
  color: var(--text-main);
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

/* ==========================================================================
   Navigation Component: .c-navbar
   ========================================================================== */
.c-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 8%;
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  background-color: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);
  z-index: 1000;
}

.c-navbar__brand {
  font-size: 22px;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: -0.5px;
}

.c-navbar__menu {
  display: flex;
  list-style: none;
  gap: 24px;
  margin: 0;
  padding: 0;
}

.c-navbar__link {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: color var(--transition-fast);
}

.c-navbar__link:hover {
  color: white;
}

.c-navbar__link--active {
  color: var(--primary);
  border-bottom: 2px solid var(--primary);
  padding-bottom: 4px;
}

/* ==========================================================================
   Hero Component: .c-hero
   ========================================================================== */
.c-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  padding: 60px 20px;
  background-image: radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent 50%);
}

.c-hero__content {
  max-width: 800px;
}

.c-hero__tag {
  background-color: rgba(99, 102, 241, 0.15);
  color: #818cf8;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.c-hero__title {
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  margin: 25px 0 15px 0;
  line-height: 1.1;
  font-weight: 800;
}

.c-hero__desc {
  color: var(--text-muted);
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 35px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

.c-hero__actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.c-hero__btn {
  padding: 14px 32px;
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  transition: all var(--transition-fast);
}

.c-hero__btn--primary {
  background-color: var(--primary);
  color: white;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.c-hero__btn--primary:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
}

.c-hero__btn--secondary {
  background-color: transparent;
  color: var(--text-main);
  border: 2px solid var(--border-color);
}

.c-hero__btn--secondary:hover {
  background-color: var(--border-color);
  transform: translateY(-2px);
}

/* ==========================================================================
   Services Component: .c-services
   ========================================================================== */
.c-services {
  padding: 100px 8%;
  background-color: #0b0f19;
}

.c-services__title {
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 60px;
}

.c-services__title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: var(--primary);
  margin: 12px auto 0;
  border-radius: 2px;
}

.c-services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.c-services__card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 40px 30px;
  text-align: center;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}

.c-services__card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
}

.c-services__icon {
  font-size: 40px;
  margin-bottom: 25px;
}

.c-services__name {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.c-services__desc {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

/* ==========================================================================
   Work Component: .c-work
   ========================================================================== */
.c-work {
  padding: 100px 8%;
}

.c-work__title {
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 60px;
}

.c-work__title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background-color: var(--primary);
  margin: 12px auto 0;
  border-radius: 2px;
}

.c-work__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.c-work__card {
  background-color: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform var(--transition-normal);
}

.c-work__card:hover {
  transform: translateY(-6px);
}

.c-work__media {
  height: 220px;
  background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  position: relative;
  cursor: pointer;
}

.c-work__media--purple {
  background: linear-gradient(135deg, #a855f7 0%, #4c1d95 100%);
}

.c-work__overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(99, 102, 241, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.c-work__card:hover .c-work__overlay {
  opacity: 1;
}

.c-work__content {
  padding: 24px;
}

.c-work__tag {
  background-color: rgba(99, 102, 241, 0.15);
  color: #818cf8;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 8px;
}

.c-work__name {
  margin: 0;
  font-size: 18px;
  color: var(--text-main);
}

/* ==========================================================================
   Contact Component: .c-contact
   ========================================================================== */
.c-contact {
  padding: 100px 8%;
  background-color: #0b0f19;
}

.c-contact__box {
  max-width: 650px;
  margin: 0 auto;
  background-color: var(--bg-card);
  padding: 45px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  text-align: center;
}

.c-contact__title {
  margin: 0 0 10px 0;
  font-size: 28px;
  font-weight: 800;
}

.c-contact__desc {
  color: var(--text-muted);
  font-size: 14px;
  margin: 0 0 35px 0;
  line-height: 1.5;
}

.c-contact__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.c-contact__row {
  display: flex;
  gap: 20px;
}

.c-contact__group {
  flex: 1;
}

.c-contact__input,
.c-contact__textarea {
  width: 100%;
  background-color: var(--bg-dark);
  border: 2px solid var(--border-color);
  color: white;
  padding: 14px;
  border-radius: var(--radius-md);
  outline: none;
  font-family: inherit;
  font-size: 13px;
  transition: border-color var(--transition-fast);
}

.c-contact__input:focus,
.c-contact__textarea:focus {
  border-color: var(--primary);
}

.c-contact__submit {
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 16px;
  font-weight: 700;
  font-size: 14px;
  border-radius: var(--radius-md);
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.2);
  transition: all var(--transition-fast);
}

.c-contact__submit:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
}

.c-contact__submit:active {
  transform: scale(0.98);
}

/* ==========================================================================
   Footer Component: .c-footer
   ========================================================================== */
.c-footer {
  text-align: center;
  padding: 40px;
  border-top: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 13px;
}

.c-footer__text {
  margin: 0;
}

/* ==========================================================================
   Responsive Adaptations (Media Queries)
   ========================================================================== */
@media (max-width: 768px) {
  .c-navbar {
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }

  .c-navbar__menu {
    gap: 16px;
  }

  .c-hero {
    min-height: 60vh;
    padding: 40px 15px;
  }

  .c-contact__row {
    flex-direction: column;
    gap: 20px;
  }

  .c-contact__box {
    padding: 30px 20px;
  }
}
`,
    readme: `# Chapter 30: Final Capstone Project

This project puts all previous learning concepts together to construct a complete, professional, and responsive developer portfolio webpage using pure HTML5 and CSS3.

---

## Technical Concepts Implemented
- **CSS Custom Properties (Variables):** Centralized theme token management for brand colors, transitions, spacing, shadows, and borders.
- **BEM Selector Conventions:** Fully componentized architecture using Block, Element, and Modifier rules.
- **Relational Selectors:** Style resolution using pseudo-classes (\`:hover\`, \`:active\`, \`:focus\`) and pseudo-elements (\`::before\`, \`::after\`).
- **Flexible Grid & Flexbox Sizing:** Flexbox-based sticky headers, fluid clamp scaling layouts, and multi-column grid galleries.
- **Mobile-first Media Queries:** Responsive layouts collapsing down for tablet and mobile viewports.
- **Tactile Transitions:** Transform animations on hover states and tactile scale-downs on button clicks.

---

## Project Component Architecture
\`\`\`
Developer Portfolio (c-portfolio)
  ├── Navigation Component (c-navbar)
  ├── Hero Landing Section (c-hero)
  ├── Services Showcase (c-services)
  ├── Portfolio Gallery (c-work)
  ├── Contact Form Card (c-contact)
  └── Page Footer (c-footer)
\`\`\`

---

## Best Practices Taught
- **Scale tokens efficiently:** Centralize sizing and border values inside custom property variables.
- **Maintain selector encapsulation:** Use BEM class prefixes (\`c-navbar__link\`, \`c-hero__btn--primary\`) to prevent selector bleeding.
- **Flat cascade hierarchies:** Styling with single class names keeps specificity scores uniform.
- **Fluid layouts:** Rely on \`clamp()\` and \`minmax()\` to support varying device shapes effortlessly.
`
  }
];

// Ensure chapters directory exists
const targetBaseDir = path.join(__dirname, 'chapters');
if (!fs.existsSync(targetBaseDir)) {
  fs.mkdirSync(targetBaseDir, { recursive: true });
}

console.log('Generating CSS3 Course folders...');

// Generate folders and contents
chapters.forEach(ch => {
  const folderName = `${ch.num}-${ch.name}`;
  const folderPath = path.join(targetBaseDir, folderName);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // HTML content
  const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${ch.num}. ${ch.title} - CSS3 Course</title>
  <link rel="stylesheet" href="style.css">
  <style>
    /* Universal mobile responsiveness overrides */
    * {
      box-sizing: border-box !important;
    }
    html, body {
      max-width: 100% !important;
      overflow-x: hidden !important;
    }
    body {
      padding: 8px !important;
      margin: 0 !important;
    }
    body * {
      max-width: 100% !important; /* Prevent any child from overflowing horizontally */
    }
    .container {
      max-width: 100% !important;
      padding: 10px !important;
      box-sizing: border-box !important;
      margin: 0 auto !important;
    }
    .card {
      padding: 12px !important;
      margin-bottom: 16px !important;
    }
    /* Ensure specific demos and custom cards scale responsively */
    .demo, .card, .glass-card, .neumorphism, .local-box, .fallback-box, .reuse-card, .theme, .light-theme, .dark-theme, .dashboard-card {
      max-width: 100% !important;
      box-sizing: border-box !important;
    }
    .glass-container-bg {
      padding: 10px !important;
      box-sizing: border-box !important;
    }
    .glass-card {
      width: 100% !important;
      padding: 15px !important;
    }
    h1 {
      font-size: 1.4rem !important;
      margin-bottom: 16px !important;
      word-wrap: break-word !important;
    }
    h2 {
      font-size: 0.95rem !important;
      margin-bottom: 12px !important;
      word-wrap: break-word !important;
    }
    .wrap {
      max-width: 100% !important;
    }
    /* Adjust flex, grid and other demo containers */
    .flex-row, .flex-column,
    .justify-start, .justify-center, .justify-end, .justify-between, .justify-around, .justify-evenly,
    .align-start, .align-center, .align-end,
    .wrap, .gap-demo, .grow-demo, .shrink-demo, .basis-demo, .self-demo {
      padding: 8px !important;
      box-sizing: border-box !important;
    }
    /* Adjust font size and elements for extra small screens */
    @media (max-width: 480px) {
      body {
        padding: 5px !important;
      }
      .container {
        padding: 6px !important;
      }
      .card {
        padding: 6px !important;
      }
      .demo {
        width: 100% !important;
        height: 100px !important;
      }
    }
  </style>
</head>
<body>
  ${ch.html}
</body>
</html>`;

  fs.writeFileSync(path.join(folderPath, 'index.html'), htmlTemplate.trim());
  fs.writeFileSync(path.join(folderPath, 'style.css'), ch.css.trim());
  fs.writeFileSync(path.join(folderPath, 'README.md'), ch.readme.trim());
  
  console.log(`Generated: ${folderName}`);
});

// Also generate a JS file with all chapter data for local file:// protocol offline CORS fallback
const courseDataPath = path.join(__dirname, 'course_data.js');
console.log('Generating course_data.js for offline CORS fallback...');

const chaptersJsonData = chapters.map(ch => ({
  num: ch.num,
  name: ch.name,
  title: ch.title,
  description: ch.description,
  html: ch.html,
  css: ch.css,
  readme: ch.readme
}));

const courseDataContent = `// Automatically generated CSS3 Course Data
// This file is used for local file:// protocol offline CORS fallback
const courseChaptersData = ${JSON.stringify(chaptersJsonData, null, 2)};
`;

fs.writeFileSync(courseDataPath, courseDataContent);
console.log('course_data.js generated successfully!');
console.log('Folders and course data generated successfully!');
