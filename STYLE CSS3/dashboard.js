// CSS3 Hub Dashboard Script

// -------------------------------------------------------------
// 01. COURSE DATA (30 CHAPTERS)
// -------------------------------------------------------------
const chaptersData = typeof courseChaptersData !== 'undefined'
  ? courseChaptersData.map(ch => ({
      num: ch.num,
      name: ch.name,
      title: ch.title,
      desc: ch.description || ch.desc || '',
      html: ch.html,
      css: ch.css,
      readme: ch.readme
    }))
  : [
      { num: "01", name: "introduction-to-css", title: "Introduction to CSS", desc: "Learn what CSS is, why we use it, its core syntax, and basic formatting." },
      { num: "02", name: "ways-to-add-css", title: "Ways to Add CSS", desc: "Learn how to include CSS in your HTML through inline, internal, and external styles." },
      { num: "03", name: "css-selectors", title: "CSS Selectors", desc: "Master CSS selectors from basic element selectors to descendant, child, attribute, and grouping selectors." },
      { num: "04", name: "css-colors", title: "CSS Colors", desc: "Explore color systems in CSS, including Named, HEX, RGB, RGBA, HSL, and HSLA values." },
      { num: "05", name: "css-backgrounds", title: "CSS Backgrounds", desc: "Learn to design background effects including color, images, position, repetition, cover/contain sizing, and fixed attachment." },
      { num: "06", name: "css-text-properties", title: "CSS Text Properties", desc: "Format paragraph and header layouts using text alignments, text decorations, spacing, letter overrides, and shadows." },
      { num: "07", name: "css-fonts", title: "CSS Fonts", desc: "Understand families, weights, font imports, standard web-safe structures, and Google Web Fonts integrations." },
      { num: "08", name: "css-box-model", title: "CSS Box Model", desc: "Understand the foundation of CSS layouts: Content, Padding, Border, Margin, and Box-Sizing differences." },
      { num: "09", name: "css-borders", title: "CSS Borders", desc: "Learn border designs, styles, colored borders, border radii, and rounded corners configuration." },
      { num: "10", name: "css-display-properties", title: "CSS Display Properties", desc: "Understand layout rendering categories: Block, Inline, Inline-Block, Display None vs Visibility Hidden." },
      { num: "11", name: "css-positioning", title: "CSS Positioning", desc: "Position HTML content relative to original places, viewport coordinates, scroll offsets, and z-index layers." },
      { num: "12", name: "css-overflow", title: "CSS Overflow", desc: "Manage visual clippings: Hide overflow, display vertical/horizontal scrollbars, and configure automatic overflows." },
      { num: "13", name: "css-units", title: "CSS Units", desc: "Compare absolute units (px) with relative units including %, em, rem, vw, and vh viewport scales." },
      { num: "14", name: "css-flexbox", title: "CSS Flexbox Layout", desc: "Align items smoothly in 1D space using flex containers, justify content alignments, wrap rules, and growth factors." },
      { num: "15", name: "css-grid-layout", title: "CSS Grid Layout", desc: "Align items in 2D space using grid templates, grid column spans, gap spacing, and grid area maps." },
      { num: "16", name: "css-media-queries", title: "CSS Media Queries", desc: "Design responsive grid structures that adapt automatically to desktop, tablet, and mobile screens." },
      { num: "17", name: "css-pseudo-classes", title: "CSS Pseudo Classes", desc: "Design interactive visual states using hover, focus, active, first-child, and nth-child styling overrides." },
      { num: "18", name: "css-pseudo-elements", title: "CSS Pseudo Elements", desc: "Design visual decorators using before, after, custom quotation maps, and capitalized dropcaps." },
      { num: "19", name: "css-forms-styling", title: "CSS Forms Styling", desc: "Format contact/login layouts styling inputs, focus outlines, button icons, and placeholder texts." },
      { num: "20", name: "css-images", title: "CSS Images", desc: "Structure graphics using cover/contain properties, border curves, and sepia/grayscale filters." },
      { num: "21", name: "css-transitions", title: "CSS Transitions", desc: "Design smooth state changes using duration, timing delays, and custom cubic-bezier properties." },
      { num: "22", name: "css-transformations", title: "CSS Transformations", desc: "Rotate, translate, skew, and scale components on 2D space relative to custom transform origins." },
      { num: "23", name: "css-animations", title: "CSS Animations", desc: "Design custom visual loops using keyframe cycles, iterations, fills, and directions." },
      { num: "24", name: "css-shadows", title: "CSS Shadows Layout", desc: "Learn to add depths to layout cards using inset, double overlays, and fuzzy text drop shadows." },
      { num: "25", name: "css-variables", title: "CSS Variables", desc: "Organize custom layout variables for color definitions, and manage dark-mode styling switches dynamically." },
      { num: "26", name: "css-functions", title: "CSS Functions", desc: "Construct layouts dynamically utilizing inline equations including calc, min, max, and clamp typography scales." },
      { num: "27", name: "css-advanced-selectors", title: "CSS Advanced Selectors", desc: "Implement complex selection rules using adjacent sibling, general sibling, and advanced attribute selectors." },
      { num: "28", name: "css-specificity-and-cascade", title: "CSS Specificity & Cascade", desc: "Learn how the browser resolves layout rules using Inline, ID, Class, and Element selector hierarchies." },
      { num: "29", name: "css-architecture", title: "CSS Architecture (BEM)", desc: "Write clean, modular, and maintainable CSS layouts using BEM (Block, Element, Modifier) rules." },
      { num: "30", name: "final-capstone-project", title: "Final Capstone Project", desc: "Design a complete responsive developer portfolio page integrating flexbox, grid, variable systems, and interactive animations." }
    ];

// State
let activeChapter = chaptersData[0];
let activeTab = 'preview';

// Elements
const chapterList = document.getElementById('chapter-list');
const chapterTitle = document.getElementById('chapter-title');
const chapterDesc = document.getElementById('chapter-desc');
const previewIframe = document.getElementById('preview-iframe');
const codeHtml = document.getElementById('code-html');
const codeCss = document.getElementById('code-css');
const readmeContent = document.getElementById('readme-content');
const searchInput = document.getElementById('search-input');
const filePathIndicator = document.getElementById('file-path-indicator');
const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar-nav');
const themeToggleBtn = document.getElementById('theme-toggle');

// -------------------------------------------------------------
// 02. RENDER MENU & NAVIGATION
// -------------------------------------------------------------
function renderChaptersMenu(filter = '') {
  chapterList.innerHTML = '';
  const query = filter.toLowerCase().trim();
  
  const filtered = chaptersData.filter(ch => {
    return ch.title.toLowerCase().includes(query) || 
           ch.num.includes(query) || 
           ch.desc.toLowerCase().includes(query);
  });
  
  if (filtered.length === 0) {
    chapterList.innerHTML = '<div style="padding:20px; text-align:center; color:var(--text-dim);">No chapters found.</div>';
    return;
  }
  
  filtered.forEach(ch => {
    const item = document.createElement('a');
    item.className = `chapter-item ${ch.num === activeChapter.num ? 'active' : ''}`;
    item.innerHTML = `
      <span class="chapter-number">${ch.num}</span>
      <span class="chapter-name">${ch.title}</span>
    `;
    item.addEventListener('click', (e) => {
      e.preventDefault();
      selectChapter(ch);
      // Close sidebar and backdrop on mobile
      sidebar.classList.remove('open');
      const backdrop = document.getElementById('sidebar-backdrop');
      if (backdrop) {
        backdrop.classList.remove('visible');
      }
    });
    chapterList.appendChild(item);
  });
}

// Select a Chapter
function selectChapter(chapter) {
  activeChapter = chapter;
  
  // Highlight active menu item
  document.querySelectorAll('.chapter-item').forEach(item => {
    const num = item.querySelector('.chapter-number').textContent;
    if (num === chapter.num) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update header text
  chapterTitle.textContent = `${chapter.num}. ${chapter.title}`;
  chapterDesc.textContent = chapter.desc;

  // Set visual file paths
  const folder = `chapters/${chapter.num}-${chapter.name}`;
  if (activeTab === 'preview' || activeTab === 'html') {
    filePathIndicator.textContent = `${folder}/index.html`;
  } else if (activeTab === 'css') {
    filePathIndicator.textContent = `${folder}/style.css`;
  } else {
    filePathIndicator.textContent = `${folder}/README.md`;
  }

  // Load preview iframe src
  previewIframe.removeAttribute('srcdoc');
  previewIframe.src = `${folder}/index.html`;

  // Fetch sources
  fetchChapterSource(folder);

  // Update copy button visibility
  updateCopyButtonVisibility();
}

// -------------------------------------------------------------
// 03. FETCH RAW FILES AND SYNTAX HIGHLIGHT
// -------------------------------------------------------------
function fetchChapterSource(folder) {
  const currentCh = chaptersData.find(ch => ch.num === activeChapter.num);

  // Load HTML
  fetch(`${folder}/index.html`)
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    })
    .then(text => {
      codeHtml.innerHTML = highlightHtml(text);
    })
    .catch(err => {
      console.warn('HTML fetch failed, falling back to local data:', err);
      if (currentCh && currentCh.html) {
        const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${currentCh.num}. ${currentCh.title} - CSS3 Course</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
${currentCh.html.trim()}
</body>
</html>`;
        codeHtml.innerHTML = highlightHtml(fullHtml);
      } else {
        codeHtml.textContent = 'Error fetching HTML source: ' + err.message;
      }
    });

  // Load CSS
  fetch(`${folder}/style.css`)
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    })
    .then(text => {
      codeCss.innerHTML = highlightCss(text);
    })
    .catch(err => {
      console.warn('CSS fetch failed, falling back to local data:', err);
      if (currentCh && currentCh.css) {
        codeCss.innerHTML = highlightCss(currentCh.css.trim());
      } else {
        codeCss.textContent = 'Error fetching CSS source: ' + err.message;
      }
    });

  // Load README
  fetch(`${folder}/README.md`)
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    })
    .then(text => {
      readmeContent.innerHTML = parseMarkdown(text);
    })
    .catch(err => {
      console.warn('README fetch failed, falling back to local data:', err);
      if (currentCh && currentCh.readme) {
        readmeContent.innerHTML = parseMarkdown(currentCh.readme.trim());
      } else {
        readmeContent.textContent = 'Error fetching README: ' + err.message;
      }
    });
}

// Simple HTML Regex Syntax Highlighter
function highlightHtml(html) {
  // Escape html characters
  let escaped = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Single-pass replacement to avoid modifying already-injected tags/classes (CORS/string corruption bug)
  escaped = escaped.replace(/(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?[a-zA-Z0-9\-]+)([\s\S]*?)(&gt;)/g, (match, comment, tagStart, tagAttrs, tagEnd) => {
    if (comment) {
      return `<span class="code-comment">${comment}</span>`;
    }
    // Highlight tag start (e.g. &lt;div)
    const highlightedStart = `<span class="code-tag">${tagStart}</span>`;
    // Highlight tag end (e.g. &gt;)
    const highlightedEnd = `<span class="code-tag">${tagEnd}</span>`;
    // Parse attributes and values inside the tag
    const highlightedAttrs = tagAttrs.replace(/("[\s\S]*?")|([a-zA-Z0-9\-]+)=|(\s[a-zA-Z0-9\-]+)/g, (m, val, attr, word) => {
      if (val) return `<span class="code-val">${val}</span>`;
      if (attr) return `<span class="code-attr">${attr}</span>=`;
      if (word) return ` <span class="code-attr">${word.trim()}</span>`;
      return m;
    });
    return highlightedStart + highlightedAttrs + highlightedEnd;
  });
  
  return escaped;
}

// Simple CSS Regex Syntax Highlighter
function highlightCss(css) {
  let escaped = css
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Single-pass replacement to prevent tag corruption inside comments and property value colons
  escaped = escaped.replace(/(\/\*[\s\S]*?\*\/)|([^\}\{\s][^\}\{]*)\s*\{|([a-zA-Z0-9\-]+)\s*:\s*([^;\}]+)\s*(;|})/g, (match, comment, selector, propName, propValue, endChar) => {
    if (comment) {
      return `<span class="code-comment">${comment}</span>`;
    }
    if (selector) {
      return `<span class="code-selector">${selector.trim()}</span> {`;
    }
    if (propName && propValue) {
      return `<span class="code-property">${propName}</span>: <span class="code-p-val">${propValue}</span>${endChar}`;
    }
    return match;
  });

  return escaped;
}

// Simple Markdown Parser (Headers, bold, lists, code)
function parseMarkdown(md) {
  let html = md;
  // Headers
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  
  // Bold: **text**
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  // Fenced Code Blocks: ```css ... ```
  html = html.replace(/```(html|css)?\s*([\s\S]*?)```/gim, '<pre><code>$2</code></pre>');

  // Inline code: `code`
  html = html.replace(/`(.*?)`/gim, '<code>$1</code>');

  // Unordered lists: - item
  html = html.replace(/^\-\s+(.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>'); // Group tags roughly

  // Clean empty lines to paragraphs
  html = html.split('\n\n').map(p => {
    if (p.trim().startsWith('<h') || p.trim().startsWith('<ul') || p.trim().startsWith('<pre')) {
      return p;
    }
    return `<p>${p}</p>`;
  }).join('');

  return html;
}

// -------------------------------------------------------------
// 04. EVENT HANDLERS (TABS, SEARCH, THEME, MOBILE SIDEBAR)
// -------------------------------------------------------------
// Copy & Run Action Buttons Visibility Management
const copyCodeBtn = document.getElementById('copy-code-btn');
const runCodeBtn = document.getElementById('run-code-btn');

function updateCopyButtonVisibility() {
  const showBtn = (activeTab === 'html' || activeTab === 'css');
  if (copyCodeBtn) copyCodeBtn.style.display = showBtn ? 'flex' : 'none';
  if (runCodeBtn) runCodeBtn.style.display = showBtn ? 'flex' : 'none';
}

// Copy Code action
if (copyCodeBtn) {
  copyCodeBtn.addEventListener('click', () => {
    let codeText = '';
    if (activeTab === 'html') {
      codeText = codeHtml.textContent;
    } else if (activeTab === 'css') {
      codeText = codeCss.textContent;
    }
    
    if (!codeText) return;
    
    navigator.clipboard.writeText(codeText).then(() => {
      copyCodeBtn.innerHTML = '✅ Copied!';
      copyCodeBtn.classList.add('copied');
      setTimeout(() => {
        copyCodeBtn.innerHTML = '📋 Copy';
        copyCodeBtn.classList.remove('copied');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  });
}

// Run Code action
if (runCodeBtn) {
  runCodeBtn.addEventListener('click', () => {
    const htmlText = codeHtml.textContent;
    const cssText = codeCss.textContent;

    let combinedHtml = htmlText;
    
    // Replace stylesheet link or head tag with inline CSS block
    if (combinedHtml.includes('<link rel="stylesheet" href="style.css">')) {
      combinedHtml = combinedHtml.replace(
        '<link rel="stylesheet" href="style.css">',
        `<style id="chapter-live-styles">${cssText}</style>`
      );
    } else if (combinedHtml.includes('</head>')) {
      combinedHtml = combinedHtml.replace(
        '</head>',
        `<style id="chapter-live-styles">${cssText}</style></head>`
      );
    } else {
      combinedHtml += `<style id="chapter-live-styles">${cssText}</style>`;
    }

    // Set theme synchronization inside the HTML tag string
    const parentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    if (combinedHtml.includes('<html')) {
      combinedHtml = combinedHtml.replace('<html', `<html data-theme="${parentTheme}"`);
    }

    // Inject responsive preview overrides inside the head block of the HTML string
    const responsiveOverrides = `
      <style id="responsive-preview-overrides">
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
          max-width: 100% !important;
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
        .flex-row, .flex-column,
        .justify-start, .justify-center, .justify-end, .justify-between, .justify-around, .justify-evenly,
        .align-start, .align-center, .align-end,
        .wrap, .gap-demo, .grow-demo, .shrink-demo, .basis-demo, .self-demo {
          padding: 8px !important;
          box-sizing: border-box !important;
        }
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
    `;

    if (combinedHtml.includes('</head>')) {
      combinedHtml = combinedHtml.replace('</head>', `${responsiveOverrides}</head>`);
    } else {
      combinedHtml += responsiveOverrides;
    }

    // Set srcdoc directly to bypass CORS block under file:// protocol
    previewIframe.removeAttribute('src');
    previewIframe.srcdoc = combinedHtml;

    // Switch view back to Preview tab automatically
    activeTab = 'preview';
    document.querySelectorAll('.tab-btn').forEach(btn => {
      if (btn.dataset.tab === 'preview') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    document.getElementById('panel-preview').classList.add('active');
    
    // Update active tab path indicator
    const folder = `chapters/${activeChapter.num}-${activeChapter.name}`;
    filePathIndicator.textContent = `${folder}/index.html`;

    // Reset toolbar visibilities
    updateCopyButtonVisibility();
  });
}

// Tab Switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Toggle active tab buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Toggle active panels
    const tabName = btn.dataset.tab;
    activeTab = tabName;
    
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    document.getElementById(`panel-${tabName}`).classList.add('active');

    // Update path string indicator
    const folder = `chapters/${activeChapter.num}-${activeChapter.name}`;
    if (tabName === 'preview' || tabName === 'html') {
      filePathIndicator.textContent = `${folder}/index.html`;
    } else if (tabName === 'css') {
      filePathIndicator.textContent = `${folder}/style.css`;
    } else {
      filePathIndicator.textContent = `${folder}/README.md`;
    }

    // Update copy button visibility
    updateCopyButtonVisibility();
  });
});

// Search Input Filtering
searchInput.addEventListener('input', (e) => {
  renderChaptersMenu(e.target.value);
});

// Toggle Sidebar on mobile viewports
const sidebarBackdrop = document.getElementById('sidebar-backdrop');

toggleSidebarBtn.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  if (sidebarBackdrop) {
    if (isOpen) {
      sidebarBackdrop.classList.add('visible');
    } else {
      sidebarBackdrop.classList.remove('visible');
    }
  }
});

// Close sidebar on backdrop click
if (sidebarBackdrop) {
  sidebarBackdrop.addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('visible');
  });
}

// Theme Switcher (light/dark mode)
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', targetTheme);
  
  // Sync theme inside iframe
  try {
    const doc = previewIframe.contentDocument || previewIframe.contentWindow.document;
    if (doc && doc.documentElement) {
      doc.documentElement.setAttribute('data-theme', targetTheme);
    }
  } catch (e) {
    console.warn('Could not sync theme with iframe:', e);
  }
});

// Inject responsive styling into preview iframe
previewIframe.addEventListener('load', () => {
  try {
    const doc = previewIframe.contentDocument || previewIframe.contentWindow.document;
    if (doc) {
      if (!doc.getElementById('responsive-preview-overrides')) {
        const style = doc.createElement('style');
        style.id = 'responsive-preview-overrides';
        style.textContent = `
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
        `;
        doc.head.appendChild(style);
        
        // Pass parent theme to iframe
        const parentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        doc.documentElement.setAttribute('data-theme', parentTheme);
      }
    }
  } catch (e) {
    console.warn('Could not inject responsive styles into iframe:', e);
  }
});

// -------------------------------------------------------------
// 05. INITIALIZATION
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Set default theme
  document.documentElement.setAttribute('data-theme', 'dark');
  
  // Render sidebar menu
  renderChaptersMenu();
  
  // Load default chapter
  selectChapter(chaptersData[0]);
});
