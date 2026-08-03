# Chapter 18: CSS Pseudo-Elements

## What are CSS Pseudo-Elements?

CSS **pseudo-elements** allow you to style **specific parts of an HTML element** without adding extra HTML tags. They begin with a double colon (`::`) and are appended to a CSS selector.

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
| `::first-letter`         | First letter of an element            | Newspaper drop caps            |
| `::first-line`           | First visible line of text            | Highlight introductions        |
| `::before`               | Inserts content before an element     | Icons, labels, decorations     |
| `::after`               | Inserts content after an element      | Badges, notifications, symbols |
| `::selection`            | Text selected by the user             | Custom highlight colors        |
| `::marker`               | List bullets or numbers               | Custom list markers            |
| `::placeholder`          | Placeholder text inside form controls | Styling input hints            |
| `::file-selector-button` | File upload button                    | Custom file upload appearance  |

---

# 1. `::first-letter`

### Purpose

Styles **only the first letter** of a block-level element.

### Common Uses

* Newspaper drop caps
* Blog articles
* Magazine layouts
* Story introductions

### Example

```css
p::first-letter{
    font-size:48px;
    color:red;
    font-weight:bold;
}
```

**Output**

Only the first letter becomes larger and more decorative.

---

# 2. `::first-line`

### Purpose

Styles **only the first visible line** of text.

The first line changes automatically depending on the screen width.

### Common Uses

* Article introductions
* News websites
* Important announcements

### Example

```css
p::first-line{
    color:blue;
    font-weight:bold;
}
```

**Output**

Only the first visible line receives the style.

---

# 3. `::before`

### Purpose

Inserts content **before** an HTML element.

No additional HTML is required.

### Common Uses

* Icons
* Labels
* Decorative symbols
* Status indicators

### Example

```css
.success::before{
    content:"✔ ";
}
```

**Output**

```
✔ Student Completed CSS3 Course
```

---

# 4. `::after`

### Purpose

Inserts content **after** an HTML element.

### Common Uses

* Badges
* Notifications
* Decorative symbols
* Required indicators

### Example

```css
.course::after{
    content:" 🚀";
}
```

**Output**

```
CSS3 Course 🚀
```

---

# 5. `::selection`

### Purpose

Styles the text **while the user selects (highlights) it** using the mouse or keyboard.

The style disappears when the text is deselected.

### Common Uses

* Improve readability
* Brand-colored text selection
* Better accessibility

### Example

```css
p::selection{
    background:yellow;
    color:black;
}
```

**Output**

When the user highlights the text:

* Background becomes yellow.
* Text becomes black.

---

# 6. `::marker`

### Purpose

Styles the bullet or numbering of lists.

### Common Uses

* Custom bullets
* Colored numbering
* Modern list designs

### Example

```css
li::marker{
    color:red;
    font-size:22px;
}
```

**Output**

Only the list bullet changes.

```
● HTML
● CSS
● JavaScript
```

---

# 7. `::placeholder`

### Purpose

Styles the placeholder text shown inside input fields before the user types.

### Common Uses

* Better form design
* Muted hint text
* Improved user experience

### Example

```css
input::placeholder{
    color:gray;
    font-style:italic;
}
```

**Output**

```
Enter your name
```

appears in gray italic text.

---

# 8. `::file-selector-button`

### Purpose

Styles the **Choose File** button of an `<input type="file">`.

### Common Uses

* Modern upload buttons
* Brand colors
* Better UI consistency

### Example

```css
input[type=file]::file-selector-button{
    background:royalblue;
    color:white;
}
```

**Output**

The default browser upload button becomes fully customized.

---

# Difference Between Pseudo-Class and Pseudo-Element

| Feature  | Pseudo-Class                         | Pseudo-Element                       |
| -------- | ------------------------------------ | ------------------------------------ |
| Symbol   | `:`                                  | `::`                                 |
| Purpose  | Styles an element based on its state | Styles a specific part of an element |
| Example  | `:hover`                             | `::before`                           |
| Works On | Entire element                       | Part of an element                   |

---

# Best Practices

* Use `::before` and `::after` for decorative content only.
* Avoid inserting important information using the `content` property, as screen readers may not interpret it consistently.
* Use `::selection` with high-contrast colors for readability.
* Keep placeholder text readable but visually distinct.
* Use pseudo-elements to reduce unnecessary HTML elements.
* Write clean, maintainable CSS with meaningful class names.

---

# Common Mistakes

❌ Using `content` outside `::before` or `::after`.

❌ Forgetting the `content` property when using `::before` or `::after`.

❌ Trying to edit HTML using pseudo-elements.

❌ Expecting `::selection` to remain visible after deselecting text.

❌ Assuming all HTML elements support every pseudo-element.

---

# Student Summary

* `::first-letter` → Styles the first letter.
* `::first-line` → Styles the first visible line.
* `::before` → Adds content before an element.
* `::after` → Adds content after an element.
* `::selection` → Styles highlighted text.
* `::marker` → Styles list bullets or numbers.
* `::placeholder` → Styles placeholder text in form controls.
* `::file-selector-button` → Styles the file upload button.

> **Key Point:** CSS pseudo-elements let you style **specific parts of an element** without adding extra HTML, making your code cleaner while creating attractive and interactive user interfaces.