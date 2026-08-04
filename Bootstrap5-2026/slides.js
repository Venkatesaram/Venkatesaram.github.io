const slidesData = [
  // MODULE 1: Bootstrap Introduction & Architecture
  {
    id: 1,
    module: "M1: Intro & Architecture",
    title: "Introduction to Bootstrap 5",
    subtitle: "What is it, why use it, and how does it work?",
    content: `
      <div class="slide-content theory-scroll-container">
        <!-- 1. WHAT IS BOOTSTRAP -->
        <section class="mb-5">
          <h4 class="gradient-text mb-3">1. What is Bootstrap?</h4>
          <p class="lead">Bootstrap is the world's most popular open-source frontend framework used to build modern, responsive, and mobile-first websites quickly.</p>
          <p>It provides ready-made CSS classes, JavaScript components, and a powerful 12-column grid system so developers can create beautiful user interfaces without writing everything from scratch.</p>
        </section>

        <!-- 2. WHY IT WAS CREATED -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">2. Why Bootstrap Was Created?</h4>
          <p class="text-muted">Before Bootstrap, web development was fragmented and slow:</p>
          <div class="row g-3">
            <div class="col-md-6">
              <div class="p-3 border rounded bg-light h-100">
                <span class="fs-4">❌ Inconsistency</span>
                <p class="small text-muted mt-2 mb-0">Every website looked completely different, making handovers and modular reuse a nightmare.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 border rounded bg-light h-100">
                <span class="fs-4">❌ CSS Bloat</span>
                <p class="small text-muted mt-2 mb-0">Developers spent hours writing thousands of lines of redundant custom CSS for every layout.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 border rounded bg-light h-100">
                <span class="fs-4">❌ Responsive Difficulties</span>
                <p class="small text-muted mt-2 mb-0">Handling media queries across standard phone, tablet, and desktop screens was tedious and error-prone.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 border rounded bg-light h-100">
                <span class="fs-4">❌ Browser Compatibility</span>
                <p class="small text-muted mt-2 mb-0">Browsers rendered columns and inputs differently. Bootstrap solved this with uniform variables.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 3. WHY USE BOOTSTRAP -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">3. Why Use Bootstrap?</h4>
          <div class="row g-3">
            <div class="col-md-4">
              <div class="feature-box p-3 h-100">
                <span class="fs-3">⚡</span>
                <h6 class="fw-bold mt-2">Faster Development</h6>
                <p class="small text-muted mb-0">Utilize pre-styled cards, alerts, grids, and styles to spin up web pages in minutes.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-box p-3 h-100">
                <span class="fs-3">📱</span>
                <h6 class="fw-bold mt-2">Mobile First</h6>
                <p class="small text-muted mb-0">Layout components are coded first for mobile devices, then scale up using breakpoints.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-box p-3 h-100">
                <span class="fs-3">🎨</span>
                <h6 class="fw-bold mt-2">Beautiful Components</h6>
                <p class="small text-muted mb-0">Clean pre-built UI pieces (alerts, buttons, sliders) styled to look premium and consistent.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-box p-3 h-100">
                <span class="fs-3">📐</span>
                <h6 class="fw-bold mt-2">Responsive Grid</h6>
                <p class="small text-muted mb-0">Highly mathematical 12-column layout mapping allows precise division of browser columns.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-box p-3 h-100">
                <span class="fs-3">🌍</span>
                <h6 class="fw-bold mt-2">Cross Browser</h6>
                <p class="small text-muted mb-0">Guarantees layout elements render similarly on Chrome, Safari, Edge, Firefox.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-box p-3 h-100">
                <span class="fs-3">🧩</span>
                <h6 class="fw-bold mt-2">Easy Customization</h6>
                <p class="small text-muted mb-0">Re-bind primary variables or compile bespoke utilities using SASS variable files.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 4. REAL WORLD COMPANIES -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">4. Real World Companies</h4>
          <p class="text-muted">Thousands of companies use Bootstrap to rapidly build responsive web applications:</p>
          <div class="row g-2 text-center text-white mb-3">
            <div class="col-4 col-md-2"><div class="bg-dark p-2 rounded small fw-bold">Netflix</div></div>
            <div class="col-4 col-md-2"><div class="bg-dark p-2 rounded small fw-bold">Spotify</div></div>
            <div class="col-4 col-md-2"><div class="bg-dark p-2 rounded small fw-bold">Twitter</div></div>
            <div class="col-4 col-md-2"><div class="bg-dark p-2 rounded small fw-bold">Udemy</div></div>
            <div class="col-4 col-md-2"><div class="bg-dark p-2 rounded small fw-bold">GitHub</div></div>
            <div class="col-4 col-md-2"><div class="bg-dark p-2 rounded small fw-bold">Coursera</div></div>
          </div>
        </section>

        <!-- 5. ARCHITECTURE -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">5. Bootstrap Architecture</h4>
          <div class="p-3 border rounded bg-light text-center mb-4 dark-theme-bg">
            <div class="d-flex align-items-center justify-content-center flex-wrap gap-2 fw-bold text-muted small">
              <span>Developer</span> <i class="bi bi-arrow-right"></i>
              <span>HTML Markup</span> <i class="bi bi-arrow-right"></i>
              <span>Bootstrap CSS</span> <i class="bi bi-arrow-right"></i>
              <span>Bootstrap Components</span> <i class="bi bi-arrow-right"></i>
              <span>Bootstrap JavaScript</span> <i class="bi bi-arrow-right"></i>
              <span class="text-primary">Responsive Website</span>
            </div>
          </div>
          <h6 class="fw-bold mb-2 text-primary">Core Architecture Tree</h6>
          <pre><code class="text-info">Bootstrap
├── CSS Reset (Reboot)
├── Grid System (Flexbox wrappers)
├── UI Components (Navbar, Accordion, Modal)
├── Utilities API (Spacing, display, shadow helpers)
├── JavaScript Plugins (Popper.js, animations scripts)
├── SVG Icons (Bootstrap Icons bundle)
└── Custom Themes (SCSS Variables & Mixins)</code></pre>
        </section>

        <!-- 6. FOLDER STRUCTURE -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">6. Folder Structure</h4>
          <pre><code class="text-warning">bootstrap/
├── css/
│   ├── bootstrap.css              # Main raw CSS stylesheet
│   ├── bootstrap.min.css          # Minified production CSS stylesheet
│   ├── bootstrap-grid.css         # Grid system layout helper only
│   └── bootstrap-utilities.css    # Spacing and alignment helper only
├── js/
│   ├── bootstrap.bundle.js        # Main JavaScript file with Popper
│   ├── bootstrap.bundle.min.js    # Minified production JS file
│   └── bootstrap.esm.js           # ES Module bundle
└── scss/
    ├── _variables.scss            # Theme variables definitions
    ├── _mixins.scss               # Custom utilities CSS creators
    └── bootstrap.scss             # Main entry Sass script</code></pre>
          <div class="row g-3 mt-3">
            <div class="col-md-6">
              <div class="p-3 border rounded bg-light">
                <strong>📁 css/ directory:</strong>
                <p class="small text-muted mb-0">Contains compiled CSS styles. Always use <code>.min.css</code> in production to save bandwidth.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 border rounded bg-light">
                <strong>📁 js/ directory:</strong>
                <p class="small text-muted mb-0">Contains scripting layers. Use <code>.bundle.min.js</code> since it compiles Popper.js automatically.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 7. WORKFLOW -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">7. Bootstrap Workflow</h4>
          <div class="p-3 border rounded bg-light text-center dark-theme-bg">
            <div class="d-flex align-items-center justify-content-center flex-wrap gap-2 text-muted fw-bold small">
              <span>Design Blueprint</span> <i class="bi bi-arrow-right"></i>
              <span>HTML Structure</span> <i class="bi bi-arrow-right"></i>
              <span>Apply CSS Classes</span> <i class="bi bi-arrow-right"></i>
              <span>Check Breakpoints</span> <i class="bi bi-arrow-right"></i>
              <span>Build Components</span> <i class="bi bi-arrow-right"></i>
              <span>Deploy Build</span>
            </div>
          </div>
        </section>

        <!-- 8. ADVANTAGES -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">8. Advantages</h4>
          <div class="row g-2">
            <div class="col-md-3"><div class="p-2 border rounded text-center bg-light font-weight-bold">✅ Saves Dev Time</div></div>
            <div class="col-md-3"><div class="p-2 border rounded text-center bg-light font-weight-bold">✅ Mobile First Default</div></div>
            <div class="col-md-3"><div class="p-2 border rounded text-center bg-light font-weight-bold">✅ Fast Learning Curve</div></div>
            <div class="col-md-3"><div class="p-2 border rounded text-center bg-light font-weight-bold">✅ Massive Community</div></div>
            <div class="col-md-3"><div class="p-2 border rounded text-center bg-light font-weight-bold">✅ 100% Free/Open Source</div></div>
            <div class="col-md-3"><div class="p-2 border rounded text-center bg-light font-weight-bold">✅ Built-in Grid Maths</div></div>
            <div class="col-md-3"><div class="p-2 border rounded text-center bg-light font-weight-bold">✅ Reusable Components</div></div>
            <div class="col-md-3"><div class="p-2 border rounded text-center bg-light font-weight-bold">✅ Less Custom CSS</div></div>
          </div>
        </section>

        <!-- 9. DISADVANTAGES -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">9. Disadvantages</h4>
          <ul>
            <li><strong>CSS Bloat:</strong> Full bundle packs variables you might never call. Use PurgeCSS or compile modularly.</li>
            <li><strong>Design Incongruence:</strong> Websites might look similar if elements are not custom themed.</li>
            <li><strong>Complex Customization:</strong> SASS override requires learning module maps and variables properties.</li>
          </ul>
        </section>

        <!-- 10. VERSIONS TIMELINE -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">10. Bootstrap Versions & Evolution</h4>
          <div class="p-3 border rounded bg-light text-center mb-3 dark-theme-bg">
            <div class="d-flex align-items-center justify-content-center flex-wrap gap-2 text-muted fw-bold small">
              <span>Bootstrap 2 (2012)</span> <i class="bi bi-arrow-right"></i>
              <span>Bootstrap 3 (2013)</span> <i class="bi bi-arrow-right"></i>
              <span>Bootstrap 4 (2018)</span> <i class="bi bi-arrow-right"></i>
              <span class="text-primary font-weight-bold">Bootstrap 5 (Current)</span>
            </div>
          </div>
          <h6 class="fw-bold mb-2">What's New in Bootstrap 5?</h6>
          <ul class="small">
            <li><strong>Dropped jQuery:</strong> Rewritten entirely in vanilla JS for faster load speeds.</li>
            <li><strong>CSS Custom Variables:</strong> Injected root-level variables allowing styling adjustments at runtime.</li>
            <li><strong>Utilities API:</strong> Expanded spacing, alignments, gaps, and custom flex templates.</li>
            <li><strong>RTL support:</strong> Native Right-to-Left orientation support for global audiences.</li>
          </ul>
        </section>

        <!-- 11. BOOTSTRAP VS CUSTOM CSS -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">11. Bootstrap vs Custom CSS</h4>
          <div class="table-responsive">
            <table class="table table-bordered custom-table">
              <thead>
                <tr>
                  <th>Parameters</th>
                  <th>Bootstrap Framework</th>
                  <th>Writing Custom CSS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Development Speed</strong></td>
                  <td class="text-success font-weight-bold">⚡ Extreme fast builds</td>
                  <td class="text-muted">🐢 Slower, hand-written rules</td>
                </tr>
                <tr>
                  <td><strong>Responsiveness</strong></td>
                  <td class="text-success">📱 Auto grid breakpoints mapping</td>
                  <td class="text-muted">📐 Manual media queries math</td>
                </tr>
                <tr>
                  <td><strong>Components</strong></td>
                  <td>📦 Over 20 UI parts ready-to-use</td>
                  <td>🛠️ Build from scratch manually</td>
                </tr>
                <tr>
                  <td><strong>Production Ready</strong></td>
                  <td>✅ Pre-tested on browsers</td>
                  <td>⚠️ High testing required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- 12. WHERE IT IS USED -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">12. Common Project Templates</h4>
          <div class="row g-2 text-center text-muted small">
            <div class="col-6 col-md-3"><div class="p-2 border rounded bg-light">Dashboard Consoles</div></div>
            <div class="col-6 col-md-3"><div class="p-2 border rounded bg-light">CRM Software</div></div>
            <div class="col-6 col-md-3"><div class="p-2 border rounded bg-light">E-Commerce Shops</div></div>
            <div class="col-6 col-md-3"><div class="p-2 border rounded bg-light">Landing Pages</div></div>
            <div class="col-6 col-md-3"><div class="p-2 border rounded bg-light">Portfolios</div></div>
            <div class="col-6 col-md-3"><div class="p-2 border rounded bg-light">Admin Panels</div></div>
            <div class="col-6 col-md-3"><div class="p-2 border rounded bg-light">College Portals</div></div>
            <div class="col-6 col-md-3"><div class="p-2 border rounded bg-light">Company Portals</div></div>
          </div>
        </section>

        <!-- 13. HOW IT WORKS -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">13. How Bootstrap Works</h4>
          <div class="p-3 border rounded bg-light text-center dark-theme-bg">
            <div class="d-flex align-items-center justify-content-center flex-wrap gap-2 text-muted fw-bold small">
              <span>Read CSS styles</span> <i class="bi bi-arrow-right"></i>
              <span>Match tags class declarations</span> <i class="bi bi-arrow-right"></i>
              <span>Compile styles in Browser DOM</span> <i class="bi bi-arrow-right"></i>
              <span class="text-success">Display Responsive UI</span>
            </div>
          </div>
        </section>

        <!-- 14. BOOTSTRAP CDN -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">14. What is a CDN?</h4>
          <p>A Content Delivery Network (CDN) serves Bootstrap assets from a network of global servers. This means when a user loads your page, they download Bootstrap from the closest physical server, accelerating load speed.</p>
          <div class="p-3 border rounded bg-light text-center dark-theme-bg">
            <div class="d-flex align-items-center justify-content-center flex-wrap gap-2 text-muted fw-bold small">
              <span>User Request</span> <i class="bi bi-arrow-right"></i>
              <span>Match closest CDN Server</span> <i class="bi bi-arrow-right"></i>
              <span>Fetch bootstrap.min.css</span> <i class="bi bi-arrow-right"></i>
              <span class="text-primary">Render Instant Styled HTML</span>
            </div>
          </div>
        </section>

        <!-- 15. DOWNLOAD METHODS -->
        <section class="mb-4 border-top pt-4">
          <h4 class="text-primary mb-3">15. Download & Setup Methods</h4>
          <div class="row g-3 text-start small">
            <div class="col-md-4">
              <div class="p-3 border rounded bg-light h-100">
                <h6 class="fw-bold">1. Quick CDN</h6>
                <p class="text-muted">Link stylesheet from jsDelivr directly. Best for students or basic portfolios.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-3 border rounded bg-light h-100">
                <h6 class="fw-bold">2. Local NPM package</h6>
                <p class="text-muted">Run <code>npm install bootstrap</code> to load source files and custom compile Sass.</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-3 border rounded bg-light h-100">
                <h6 class="fw-bold">3. Bundlers (Vite/Webpack)</h6>
                <p class="text-muted">Configure bundle entry points to build and minify your compiled style sheets.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
    commonMistakes: "Using custom CSS styles with <code>!important</code> declarations to override Bootstrap's default styles, which causes structural styling bugs.",
    bestPractices: "Always load the minified stylesheet <code>bootstrap.min.css</code> in production environments to minimize bandwidth load speeds.",
    playgroundCode: `<!-- Sandbox Editor Playground -->
<div class="container py-2 py-md-4 text-center">
  <div class="p-3 p-md-5 mb-3 mb-md-4 bg-light rounded-3 shadow-sm border">
    <h2 class="display-5 text-primary fw-bold">Live Bootstrap Sandbox</h2>
    <p class="col-md-8 mx-auto text-muted">Test utility classes, buttons, forms, and grid dividers inside this interactive frame.</p>
    <button class="btn btn-primary btn-lg" type="button">Action Button</button>
  </div>
</div>`,
    tryYourselfTask: "Edit the button element to have a class of <code>btn-success btn-sm</code> and verify live updates.",
    visualizer: "breakpoints", // This defaults the simulator menu selector inside Slide 1 visualizer to Breakpoints
    notesData: {
      summary: "In this lesson, you learned that Bootstrap is a mobile-first frontend framework designed to solve layout inconsistencies, accelerate web UI building, and guarantee browser compatibility using CSS utilities and JavaScript plugins.",
      keyPoints: [
        "Bootstrap is mobile-first, meaning styles target small viewports and scale up using min-width media queries.",
        "The toolkit dropped jQuery in version 5, opting for native Vanilla JS modules.",
        "Customization is handled by overriding CSS custom properties at runtime or compiling Sass maps.",
        "Always include the viewport meta tag in your HTML header for correct grid behavior.",
        "Semantic HTML tags (article, section, nav) should be used instead of nesting excessive div containers."
      ],
      commonMistakes: "Applying custom styling overrides with '!important' rules, which creates style conflicts. The correct approach is using utility classes or custom Sass compilers.",
      bestPractices: "Organize custom scripts and styling overrides separately from Bootstrap core files to keep your codebase clean and easy to update.",
      interviewQuestions: [
        {
          q: "What is a mobile-first framework?",
          a: "A mobile-first framework design structures its base styles for the smallest screens (mobile), then uses media queries (min-width) to expand widths and adapt layouts as screen viewports grow."
        },
        {
          q: "Why did Bootstrap 5 drop jQuery?",
          a: "Bootstrap 5 replaced jQuery with native Vanilla JavaScript to improve site performance, shrink bundle package size, and allow clean integration with modern framework tooling (React, Svelte)."
        },
        {
          q: "How does the negative margin gutter layout in rows work?",
          a: "Bootstrap rows (.row) apply negative margins to align columns (.col-*) on the sides. This ensures that column content stays vertically aligned with grid margins."
        }
      ],
      realWorldUsage: "Stripe and Udemy use Bootstrap grids and component frameworks to rapidly compile internal dashboards, billing panels, and documentation headers.",
      miniChallenge: "Modify the playground code so that the alert banner displays a secondary theme color and centers the text horizontally using responsive spacing.",
      nextLessonPreview: "Next, we will cover Module 2: Installation and Setup Methods, demonstrating how to compile customized Sass variables using Node package toolchains."
    },
    quiz: [
      {
        question: "What is the primary architectural purpose of using Bootstrap in web development?",
        options: [
          "To provide backend database integrations",
          "To accelerate responsive, mobile-first frontend layout styling",
          "To compile JavaScript code into native web modules",
          "To automate SEO crawling"
        ],
        answerIndex: 1,
        explanation: "Bootstrap is a frontend toolkit specifically designed to streamline responsive layout generation, styling, and grid division."
      }
    ]
  },
  // Keep remaining slides (2 to 15) in slides.js but make sure they compile correctly
  // MODULE 2: Installation Methods
  {
    id: 2,
    module: "M2: Installation Methods",
    title: "Installation & Setup",
    subtitle: "Setting up Bootstrap via CDN, package managers, and local compilation",
    content: `
      <div class="slide-content theory-scroll-container">
        <!-- 1. WHY BOOTSTRAP NEEDS INSTALLATION -->
        <section class="mb-5">
          <h4 class="gradient-text mb-3">1. Why Bootstrap Needs Installation</h4>
          <p class="lead">Bootstrap is a static stylesheet and script library. Your browser cannot parse Bootstrap classes until the files are linked inside your HTML document.</p>
          
          <div class="d-flex flex-wrap align-items-center justify-content-between p-3 rounded-3 bg-light border my-4 gap-2 text-center text-md-start">
            <div class="p-2 rounded bg-white shadow-sm border flex-grow-1"><code class="text-primary">Loads HTML</code></div>
            <div class="fs-4 text-muted">➔</div>
            <div class="p-2 rounded bg-white shadow-sm border flex-grow-1"><code class="text-success">Loads CSS</code></div>
            <div class="fs-4 text-muted">➔</div>
            <div class="p-2 rounded bg-white shadow-sm border flex-grow-1"><code class="text-warning">Loads JS Bundle</code></div>
            <div class="fs-4 text-muted">➔</div>
            <div class="p-2 rounded bg-white shadow-sm border flex-grow-1"><code class="text-purple">Classes Activated</code></div>
          </div>
        </section>

        <!-- 2. METHODS OVERVIEW TABLE -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">2. Installation Methods Overview</h4>
          <div class="table-responsive">
            <table class="table table-hover border">
              <thead class="table-light">
                <tr>
                  <th>Method</th>
                  <th>Best For</th>
                  <th>Offline Mode</th>
                  <th>Customization</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="badge bg-primary">CDN</span></td>
                  <td>Beginners, Practice, Prototypes</td>
                  <td>❌ No (Internet req.)</td>
                  <td>Limited</td>
                  <td class="text-warning">★★★★★</td>
                </tr>
                <tr>
                  <td><span class="badge bg-secondary">Local Files</span></td>
                  <td>Offline Study, Secure Intranet</td>
                  <td>✔ Yes</td>
                  <td>Medium</td>
                  <td class="text-warning">★★★★☆</td>
                </tr>
                <tr>
                  <td><span class="badge bg-success">NPM Package</span></td>
                  <td>Modern JS Framework Projects</td>
                  <td>✔ Yes (post-install)</td>
                  <td>High (Sass source)</td>
                  <td class="text-warning">★★★★★</td>
                </tr>
                <tr>
                  <td><span class="badge bg-purple">Vite / Webpack</span></td>
                  <td>Enterprise Apps & Toolchains</td>
                  <td>✔ Yes (post-install)</td>
                  <td>Excellent</td>
                  <td class="text-warning">★★★★★</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- 3. CDN METHOD -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">3. CDN Integration (Fastest Setup)</h4>
          <p>A Content Delivery Network (CDN) hosts Bootstrap files globally. The browser downloads them from high-speed local caches.</p>
          
          <div class="row g-3 my-3">
            <div class="col-md-6">
              <div class="card h-100 border-success bg-success-subtle p-3" style="border: 1px solid #10b981 !important;">
                <h6 class="text-success fw-bold">✔ CDN Advantages</h6>
                <ul class="small mb-0 ps-3">
                  <li>Zero installation required; link and run</li>
                  <li>Browser caches files across other sites using jsDelivr</li>
                  <li>Globally distributed for fast page load speeds</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card h-100 border-danger bg-danger-subtle p-3" style="border: 1px solid #ef4444 !important;">
                <h6 class="text-danger fw-bold">❌ CDN Limitations</h6>
                <ul class="small mb-0 ps-3">
                  <li>Cannot compile or modify Bootstrap Sass source files</li>
                  <li>Internet connection required to load components</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-dark text-white rounded p-3 my-3">
            <h6 class="text-warning border-bottom pb-2">Complete CDN HTML Boilerplate</h6>
            <pre class="mb-0" style="font-size:0.78rem; overflow-x: auto; white-space: pre;"><code class="text-info">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container mt-5"&gt;
    &lt;h1 class="text-primary"&gt;Bootstrap CDN Ready!&lt;/h1&gt;
  &lt;/div&gt;
  &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          </div>
        </section>

        <!-- 4. LOCAL INSTALLATION -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">4. Local Offline Installation</h4>
          <p>Ideal for offline development and local training rooms. Download files and link them locally.</p>
          
          <div class="row g-3 my-3">
            <div class="col-md-5">
              <div class="card p-3 bg-light border">
                <h6 class="fw-bold mb-2">📁 Local Files Tree</h6>
                <pre class="small mb-0" style="font-size:0.75rem;"><code>project/
├── index.html
├── css/
│   └── bootstrap.min.css
└── js/
    └── bootstrap.bundle.min.js</code></pre>
              </div>
            </div>
            <div class="col-md-7">
              <div class="card p-3 h-100 bg-white border">
                <h6 class="fw-bold text-primary mb-2">Local File Links</h6>
                <pre class="small mb-0" style="font-size:0.78rem;"><code class="text-muted">&lt;!-- CSS --&gt;
&lt;link rel="stylesheet" href="css/bootstrap.min.css"&gt;

&lt;!-- JS Bundle --&gt;
&lt;script src="js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 5. NPM & BUILD TOOLS -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">5. Professional Setup: NPM, Vite, & Webpack</h4>
          <p>NPM is the production standard. Tracks dependencies and compiles Sass source configurations directly.</p>
          
          <div class="card p-3 bg-dark text-white my-3">
            <h6 class="text-warning mb-2 border-bottom pb-1">NPM Initialization commands</h6>
            <pre class="mb-0" style="font-size:0.8rem; overflow-x: auto; white-space: pre;"><code class="text-info"># 1. Setup package.json
npm init -y

# 2. Add Bootstrap package dependency
npm install bootstrap

# 3. Double-check node environment version
node -v
npm -v</code></pre>
          </div>

          <div class="row g-3">
            <div class="col-md-6">
              <div class="card p-3 bg-light h-100">
                <h6 class="fw-bold text-primary">Import inside entry files (e.g. main.js)</h6>
                <pre class="small mb-0" style="font-size:0.75rem;"><code>import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';</code></pre>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card p-3 bg-light h-100">
                <h6 class="fw-bold text-success">Build Dev Server</h6>
                <pre class="small mb-0" style="font-size:0.75rem;"><code># Start Vite development server
npm run dev

# Bundle for final production distribution
npm run build</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- 6. THE JS BUNDLE WARNING -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-danger mb-3">6. The JavaScript Bundle (Popper.js)</h4>
          <div class="card border-warning bg-warning-subtle p-3" style="border: 1px solid #ffc107 !important;">
            <h6 class="text-warning-emphasis fw-bold mb-2">⚠️ Critical Dependency Notice</h6>
            <p class="small mb-2">Many interactive components will fail to operate without importing the JavaScript bundle. The file <code>bootstrap.bundle.min.js</code> contains <strong>Popper.js</strong>, which is required for dropdowns and popups positioning.</p>
            
            <div class="row g-2 text-center text-warning-emphasis fw-semibold small">
              <div class="col-6 col-md-3"><div class="p-2 border rounded bg-white">Navbar Collapses</div></div>
              <div class="col-6 col-md-3"><div class="p-2 border rounded bg-white">Modals</div></div>
              <div class="col-6 col-md-3"><div class="p-2 border rounded bg-white">Carousels</div></div>
              <div class="col-6 col-md-3"><div class="p-2 border rounded bg-white">Dropdowns & Tooltips</div></div>
            </div>
          </div>
        </section>
      </div>
    `,
    commonMistakes: "Forgetting to include the JavaScript bundle (or Popper.js) which breaks collapses, tooltips, dropdowns, and modals; linking local file paths incorrectly; omitting the viewport meta tag; neglecting NPM setup before installing package managers.",
    bestPractices: "Use CDN for practice; use local downloads for offline classrooms; utilize NPM with Vite/Webpack for enterprise production projects; always import the bundle JS file to secure Popper.js dependencies.",
    playgroundCode: `<div class="container py-3">
  <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Congratulations!</h4>
    <p>If this layout has rounded borders, alert styling, and the button below works, Bootstrap 5 CSS is successfully integrated!</p>
    <hr>
    <button class="btn btn-success" onclick="alert('Bootstrap JS is working too!')">Test JavaScript Trigger</button>
  </div>
</div>`,
    tryYourselfTask: "Add a button inside the container with class <code>btn btn-outline-success</code> to test outlined utility button variants.",
    visualizer: "none",
    quiz: [
      {
        question: "Which file should you link to include both Bootstrap's components JavaScript and Popper.js?",
        options: [
          "bootstrap.min.js",
          "bootstrap.bundle.min.js",
          "bootstrap.popper.js",
          "bootstrap.esm.js"
        ],
        answerIndex: 1,
        explanation: "The bootstrap.bundle.min.js file packages Popper.js directly inside it, saving you from linking it separately."
      },
      {
        question: "When configuring Bootstrap with NPM inside a modern builder like Vite, where do you import the Bootstrap assets?",
        options: [
          "In the index.html head using local style tags",
          "In your JavaScript entry file (e.g. main.js or App.js)",
          "Inside a custom backend database configuration",
          "They are imported automatically by the browser"
        ],
        answerIndex: 1,
        explanation: "In modern build tools like Vite or Webpack, you import Bootstrap CSS and JS bundles directly in your main JS entry script."
      }
    ]
  },
  // MODULE 3: Grid System & Breakpoints
  {
    id: 3,
    module: "M3: Grid & Breakpoints",
    title: "The Responsive Grid System",
    subtitle: "Understanding containers, rows, columns, and 12-column layout division",
    content: `
      <div class="slide-content">
        <h5>How the Grid Works</h5>
        <p>The Bootstrap grid system uses a series of containers, rows, and columns to layout and align content. It's built with Flexbox and supports up to 12 columns per row wrapper.</p>
        <h5>Three Core Rules:</h5>
        <ol>
          <li>All columns (<code>.col-*</code>) must be direct children of a row (<code>.row</code>).</li>
          <li>All rows must sit inside a container (<code>.container</code> or <code>.container-fluid</code>).</li>
          <li>Rows apply negative margins to align column padding gutters.</li>
        </ol>
      </div>
    `,
    commonMistakes: "Placing content elements directly inside a <code>.row</code>. Content should always be placed inside a column, and only columns should be children of rows.",
    bestPractices: "Use <code>.col</code> without numbers for auto-layout equal width columns. They will divide space equally automatically.",
    playgroundCode: `<div class="container bg-light py-3">
  <div class="row g-2 text-center text-white">
    <div class="col-sm-6 col-md-4">
      <div class="bg-primary p-3 rounded">1/3 on Tablet, 1/2 on Mobile</div>
    </div>
    <div class="col-sm-6 col-md-4">
      <div class="bg-success p-3 rounded">1/3 on Tablet, 1/2 on Mobile</div>
    </div>
    <div class="col-sm-12 col-md-4">
      <div class="bg-dark p-3 rounded">1/3 on Tablet, Full-width on Mobile</div>
    </div>
  </div>
</div>`,
    tryYourselfTask: "Add class <code>offset-md-4</code> to the first column and observe how it shifts horizontal positioning.",
    visualizer: "grid",
    quiz: [
      {
        question: "How many columns does the default Bootstrap grid system contain per row?",
        options: ["10 Columns", "12 Columns", "16 Columns", "8 Columns"],
        answerIndex: 1,
        explanation: "Bootstrap divides rows into a standard 12-column template layout for maximum mathematical divisibility (by 2, 3, 4, and 6)."
      }
    ]
  },
  // MODULE 4: Typography
  {
    id: 4,
    module: "M4: Typography",
    title: "Typography & Headers",
    subtitle: "Setting up headings, paragraphs, and display font layouts",
    content: `
      <div class="slide-content theory-scroll-container">
        <!-- 1. INTRODUCTION TO TYPOGRAPHY -->
        <section class="mb-5">
          <h4 class="gradient-text mb-3">1. Introduction to Bootstrap Typography</h4>
          <p class="lead">Typography is the art and technique of arranging type to make written language legible, readable, and visually appealing. In web design, typography represents over 90% of all on-screen information.</p>
          <p>Bootstrap 5 establishes a responsive, system-font typography baseline. By adopting native system fonts (like Segoe UI, Roboto, and Helvetica), the framework scales instantly across all devices without causing layout shifts or font loading delays.</p>
          
          <!-- Flowchart layout -->
          <div class="d-flex flex-wrap align-items-center justify-content-between p-3 rounded-3 bg-light border my-4 gap-2 text-center text-md-start">
            <div class="p-2 rounded bg-white shadow-sm border flex-grow-1"><code class="text-primary">Headings</code></div>
            <div class="fs-4 text-muted">➔</div>
            <div class="p-2 rounded bg-white shadow-sm border flex-grow-1"><code class="text-success">Display Sizes</code></div>
            <div class="fs-4 text-muted">➔</div>
            <div class="p-2 rounded bg-white shadow-sm border flex-grow-1"><code class="text-warning">Lead Text</code></div>
            <div class="fs-4 text-muted">➔</div>
            <div class="p-2 rounded bg-white shadow-sm border flex-grow-1"><code class="text-purple">Inline Decorators</code></div>
          </div>
        </section>

        <!-- 2. LEARNING OBJECTIVES -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">2. Learning Objectives</h4>
          <div class="card p-3 bg-light">
            <p class="small mb-0">By completing this module, you will master heading hierarchies (h1-h6), dramatic hero display headings, paragraphs (.lead), alignments (.text-center), text transformations, decoration overrides, theme colors, responsive font scaling, line-height bounds, text wrapping, unstyled list formatting, blockquote citations, and A11Y contrast ratios.</p>
          </div>
        </section>

        <!-- 3. HEADINGS -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">3. Bootstrap Heading Classes (.h1 - .h6)</h4>
          <p>Bootstrap styles all native heading tags (<code>h1</code> through <code>h6</code>). Alternatively, you can apply matching class names to span elements to mimic headings without altering document structure.</p>
          
          <div class="card p-3 my-3">
            <div class="row align-items-center border-bottom pb-2 mb-2">
              <div class="col-md-3"><strong>Selector</strong></div>
              <div class="col-md-3"><strong>Font Size</strong></div>
              <div class="col-md-6"><strong>Visual Output Preview</strong></div>
            </div>
            <div class="row align-items-center border-bottom py-2">
              <div class="col-md-3"><code class="text-danger">&lt;h1&gt; / .h1</code></div>
              <div class="col-md-3"><span class="badge bg-secondary">2.5rem (40px)</span></div>
              <div class="col-md-6"><h1 class="m-0 text-dark">Heading 1</h1></div>
            </div>
            <div class="row align-items-center border-bottom py-2">
              <div class="col-md-3"><code class="text-danger">&lt;h3&gt; / .h3</code></div>
              <div class="col-md-3"><span class="badge bg-secondary">1.75rem (28px)</span></div>
              <div class="col-md-6"><h3 class="m-0 text-dark">Heading 3</h3></div>
            </div>
            <div class="row align-items-center py-2">
              <div class="col-md-3"><code class="text-danger">&lt;h6&gt; / .h6</code></div>
              <div class="col-md-3"><span class="badge bg-secondary">1rem (16px)</span></div>
              <div class="col-md-6"><h6 class="m-0 text-dark">Heading 6</h6></div>
            </div>
          </div>
        </section>

        <!-- 4. DISPLAY HEADINGS -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">4. Display Headings (.display-1 - .display-6)</h4>
          <p>When you need large, prominent headers for marketing landing page hero sections, use Display Headings. They are larger, lighter, and more editorial than standard headings.</p>
          
          <div class="bg-light p-3 rounded border my-3">
            <div class="display-1 text-primary">Display 1</div>
            <div class="display-4 text-secondary">Display 4</div>
            <div class="display-6 text-dark">Display 6</div>
          </div>
        </section>

        <!-- 5. LEAD PARAGRAPHS -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">5. Lead Paragraph (.lead)</h4>
          <p>Use the <code>.lead</code> class on paragraphs to make them stand out. It increases font-size slightly and decreases font-weight to create premium introductory text.</p>
          
          <div class="row g-3">
            <div class="col-md-6">
              <div class="card p-3 h-100 bg-white">
                <h6 class="text-muted small uppercase">Standard Paragraph</h6>
                <p class="mb-0">This is a standard body text paragraph rendering at 16px (1rem) base size with default line heights.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card p-3 h-100 bg-light border-primary" style="border: 1px solid var(--accent-blue) !important;">
                <h6 class="text-primary small uppercase">Featured Lead Paragraph</h6>
                <p class="lead mb-0">This is a featured lead paragraph using the .lead class. It stands out with a larger 1.25rem font sizing.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 6. TEXT ALIGNMENT -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">6. Text Alignment & Responsive Layouts</h4>
          <p>Easily align text to the left, center, or right across different screen breakpoints using text-alignment utilities.</p>
          
          <div class="card p-3 bg-white border">
            <div class="p-2 bg-light border rounded mb-2 text-start">Left Aligned: <code>.text-start</code></div>
            <div class="p-2 bg-light border rounded mb-2 text-center">Centered: <code>.text-center</code></div>
            <div class="p-2 bg-light border rounded mb-2 text-end">Right Aligned: <code>.text-end</code></div>
            <div class="p-2 bg-light border rounded text-center text-md-start">Centered on Mobile, Left-aligned on Desktop: <code>.text-center.text-md-start</code></div>
          </div>
        </section>

        <!-- 7. FONT WEIGHT -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">7. Font Weight Utilities</h4>
          <p>Adjust font weights dynamically to control hierarchy weight without writing custom styles.</p>
          
          <div class="card p-3">
            <div class="fw-bold mb-1">Bold Text (.fw-bold)</div>
            <div class="fw-semibold mb-1">Semibold Text (.fw-semibold)</div>
            <div class="fw-normal mb-1">Normal Text (.fw-normal)</div>
            <div class="fw-light mb-1">Light Text (.fw-light)</div>
          </div>
        </section>

        <!-- 8. FONT STYLE -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">8. Font Style</h4>
          <div class="card p-3 bg-light border">
            <div class="fst-normal mb-2">Standard Font Style: <code>.fst-normal</code></div>
            <div class="fst-italic">Italicized Font Style: <code>.fst-italic</code></div>
          </div>
        </section>

        <!-- 9. TEXT TRANSFORMATION -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">9. Text Transformation</h4>
          <div class="card p-3">
            <div class="text-uppercase mb-2">Uppercase: <code>.text-uppercase</code> (lowercase -> LOWERCASE)</div>
            <div class="text-lowercase mb-2">Lowercase: <code>.text-lowercase</code> (UPPERCASE -> lowercase)</div>
            <div class="text-capitalize">Capitalized: <code>.text-capitalize</code> (first letters capitalized)</div>
          </div>
        </section>

        <!-- 10. DECORATIONS -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">10. Text Decoration</h4>
          <div class="card p-3 bg-light border">
            <div class="text-decoration-underline mb-2">Underlined: <code>.text-decoration-underline</code></div>
            <div class="text-decoration-line-through mb-2">Strikethrough: <code>.text-decoration-line-through</code></div>
            <div class="text-decoration-none">No Decoration: <code>.text-decoration-none</code> (removes link underlines)</div>
          </div>
        </section>

        <!-- 11. TEXT COLORS -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">11. Text Colors</h4>
          <p>Bootstrap includes a semantic color palette that applies directly to text layout wrappers.</p>
          
          <div class="row g-2 text-center small fw-semibold">
            <div class="col-6 col-md-4"><div class="p-2 border rounded text-primary bg-light">.text-primary</div></div>
            <div class="col-6 col-md-4"><div class="p-2 border rounded text-secondary bg-light">.text-secondary</div></div>
            <div class="col-6 col-md-4"><div class="p-2 border rounded text-success bg-light">.text-success</div></div>
            <div class="col-6 col-md-4"><div class="p-2 border rounded text-danger bg-light">.text-danger</div></div>
            <div class="col-6 col-md-4"><div class="p-2 border rounded text-warning bg-light bg-dark-theme-dark">.text-warning</div></div>
            <div class="col-6 col-md-4"><div class="p-2 border rounded text-info bg-light bg-dark-theme-dark">.text-info</div></div>
          </div>
        </section>

        <!-- 12. LINE HEIGHT -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">12. Line Height</h4>
          <p>Control line spacing to adjust text tightness.</p>
          
          <div class="row g-3">
            <div class="col-md-6">
              <div class="card p-3 h-100 bg-white">
                <h6 class="text-muted small uppercase">Tight (.lh-1)</h6>
                <p class="lh-1 mb-0">This paragraph sets line height to 1. Words are packed close together, suited for multi-line display headers.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card p-3 h-100 bg-light border">
                <h6 class="text-muted small uppercase">Large (.lh-lg)</h6>
                <p class="lh-lg mb-0">This paragraph sets line height to 2. It introduces wide vertical space, increasing body copy legibility.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 13. TEXT WRAPPING -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">13. Text Wrapping</h4>
          <div class="card p-3 bg-white border">
            <div class="p-2 border rounded mb-2 text-wrap" style="width: 150px; background: #e2e8f0;">Wraps long words to next lines: <code>.text-wrap</code></div>
            <div class="p-2 border rounded mb-2 text-nowrap" style="width: 150px; overflow: hidden; background: #e2e8f0;">Forces no-wrapping overflow: <code>.text-nowrap</code></div>
            <div class="p-2 border rounded text-break" style="width: 150px; background: #e2e8f0;">Breaks-word long strings: supercalifragilisticexpialidocious <code>.text-break</code></div>
          </div>
        </section>

        <!-- 14. TEXT TRUNCATION -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">14. Text Truncation (.text-truncate)</h4>
          <p>Add ellipsis (...) to overflowing text. Useful for email headers, blog title lists, or product cards.</p>
          
          <div class="card p-3 bg-light border text-truncate" style="max-width: 320px;">
            Email Subject: This is a very long email subject line that will be truncated automatically by Bootstrap classes...
          </div>
        </section>

        <!-- 15. LISTS -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">15. Lists (.list-unstyled & .list-inline)</h4>
          <p>Override standard vertical bulleted list formatting easily.</p>
          
          <div class="row g-3">
            <div class="col-md-6">
              <div class="card p-3 h-100 bg-white">
                <h6 class="fw-bold mb-2">Unstyled list (<code>.list-unstyled</code>)</h6>
                <ul class="list-unstyled mb-0">
                  <li>✔ First child bullet cleared</li>
                  <li>✔ Margins reset to 0</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card p-3 h-100 bg-white">
                <h6 class="fw-bold mb-2">Inline List (<code>.list-inline</code>)</h6>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item badge bg-primary">Item 1</li>
                  <li class="list-inline-item badge bg-success">Item 2</li>
                  <li class="list-inline-item badge bg-danger">Item 3</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- 16. BLOCKQUOTES -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">16. Blockquotes</h4>
          <p>For quoting blocks of content from other sources in your document.</p>
          
          <blockquote class="blockquote p-3 border-start border-primary bg-light" style="border-left-width: 4px !important;">
            <p>"Simplicity is the ultimate sophistication."</p>
            <footer class="blockquote-footer mt-1">Leonardo da Vinci in <cite title="Source Title">Fine Art History</cite></footer>
          </blockquote>
        </section>

        <!-- 17. RESPONSIVE TYPOGRAPHY -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">17. Responsive Typography & Breakpoints</h4>
          <p>Responsive Font Sizes (RFS) automatically scale text sizes depending on the client viewport to prevent overflows on mobile screens.</p>
          
          <div class="table-responsive my-3">
            <table class="table border">
              <thead class="table-light">
                <tr>
                  <th>Breakpoint</th>
                  <th>Indicator</th>
                  <th>Heading Scale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mobile</td>
                  <td>XS (&lt;576px)</td>
                  <td>Compact size (Default)</td>
                </tr>
                <tr>
                  <td>Desktop</td>
                  <td>LG (&ge;992px)</td>
                  <td>Scales up automatically using CSS calc()</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- 18. ACCESSIBILITY -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">18. Accessibility (A11Y) & Reading Comfort</h4>
          <div class="card border-warning bg-warning-subtle p-3" style="border: 1px solid #ffc107 !important;">
            <h6 class="fw-bold text-warning-emphasis">✔ WCAG Typography Guidelines</h6>
            <ul class="small mb-0 ps-3">
              <li>Contrast ratio must be at least 4.5:1 for body copy.</li>
              <li>Base reading text size should never fall below 14px (preferably 16px).</li>
              <li>Set line-height to a readable proportion (.lh-base or .lh-lg).</li>
            </ul>
          </div>
        </section>

        <!-- 19. REAL WORLD EXAMPLES -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">19. Real-World Typography Layouts</h4>
          
          <div class="card p-3 my-3">
            <h5 class="gradient-text mb-2">Premium Blog Post Layout Example</h5>
            <div class="border p-3 rounded bg-white">
              <span class="badge bg-primary mb-2">Web Design</span>
              <h2 class="fw-bold text-dark mb-2">Mastering Responsive CSS Frameworks</h2>
              <p class="text-muted small mb-3">Published August 4, 2026 by Author</p>
              <p class="lead text-secondary">Bootstrap 5 makes structural layouts incredibly easy. Let's study how headings, paragraphs, and lists connect together to make a clean post.</p>
              <p class="text-dark">Web typography is a key factor in keeping bounce rates low. Always follow hierarchy best practices...</p>
            </div>
          </div>
        </section>

        <!-- 20. BEST PRACTICES -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">20. Typography Best Practices</h4>
          <div class="row g-3">
            <div class="col-md-6">
              <div class="card p-3 h-100 border-success bg-success-subtle" style="border: 1px solid #10b981 !important;">
                <h6 class="text-success fw-bold">✔ The Golden Rules</h6>
                <ul class="small mb-0 ps-3">
                  <li>Use exactly one H1 tag per page (for SEO title validation).</li>
                  <li>Maintain heading level sequences (H2 then H3, never H2 to H4 directly).</li>
                  <li>Use relative units (rem) for sizing to allow user-zoom scaling.</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card p-3 h-100 bg-light border">
                <h6 class="fw-bold">Mobile-First Typography</h6>
                <ul class="small mb-0 ps-3">
                  <li>Ensure line-height provides breathing room (.lh-base).</li>
                  <li>Adopt responsive alignments (.text-center .text-md-start).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- 21. COMMON MISTAKES -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-danger mb-3">21. Common Mistakes to Avoid</h4>
          <div class="card border-danger bg-danger-subtle p-3" style="border: 1px solid #ef4444 !important;">
            <h6 class="text-danger-emphasis fw-bold">❌ Critical Anti-Patterns</h6>
            <ul class="small mb-0 ps-3">
              <li>Using multiple H1 tags on a single page, which harms SEO ranking metrics.</li>
              <li>Skipping heading levels, violating semantic tree structures.</li>
              <li>Using dark gray text on black backgrounds, creating illegible low-contrast blocks.</li>
              <li>Formatting entire pages with excessive uppercase styling (.text-uppercase).</li>
            </ul>
          </div>
        </section>

        <!-- 22. INTERVIEW QUESTIONS -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">22. Typography Interview Questions</h4>
          
          <div class="accordion my-3" id="typoInterviewAccordion">
            <div class="card border mb-2">
              <div class="p-3 bg-light" style="cursor:pointer;" onclick="this.nextElementSibling.classList.toggle('d-none')">
                <strong>Q1: What is the difference between heading tags (&lt;h1&gt;) and heading utility classes (.h1)?</strong>
              </div>
              <div class="p-3 border-top d-none">
                <strong>Answer:</strong> Heading tags are semantic elements that define page hierarchy for search engines and screen readers. Heading utility classes (.h1 to .h6) are purely stylistic overrides that allow a span or paragraph to visually look like a heading without altering semantics.
              </div>
            </div>
            
            <div class="card border mb-2">
              <div class="p-3 bg-light" style="cursor:pointer;" onclick="this.nextElementSibling.classList.toggle('d-none')">
                <strong>Q2: How does Bootstrap 5 implement Responsive Font Sizes (RFS)?</strong>
              </div>
              <div class="p-3 border-top d-none">
                <strong>Answer:</strong> Bootstrap uses the RFS engine which scales heading sizes dynamically using CSS <code>calc()</code> rules and media queries, preventing horizontal text overflow on small viewports.
              </div>
            </div>
          </div>
        </section>

        <!-- 23. SUMMARY -->
        <section class="mb-5 border-top pt-4">
          <h4 class="text-primary mb-3">23. Summary & Key Takeaways</h4>
          <div class="card p-3 bg-light border-primary" style="border: 1px solid var(--accent-blue) !important;">
            <p class="mb-0"><strong>Recap:</strong> Bootstrap 5 typography is designed for legibility, hierarchy, and native-device speeds. By combining heading tags, display banners, lead introduction blocks, alignment utilities, and decoration controls, you can craft highly professional responsive copy that satisfies A11Y contrast audits out-of-the-box.</p>
          </div>
        </section>
      </div>
    `,
    commonMistakes: "Using heading elements like <h1> purely for visual scaling instead of semantic layout hierarchy; applying low contrast text colors that breach WCAG A11Y standards; neglecting line breaks (.text-break) which causes overflow bugs.",
    bestPractices: "Apply .lead to highlight introduction content; use responsive alignment utilities like .text-center .text-md-start; maintain a strict H1-H6 semantic document outline; set text-truncate to clip long user-generated titles.",
    playgroundCode: `<div class="container py-3">
  <!-- Interactive Sandbox Playground -->
  <h1 class="display-4 text-primary text-center fw-bold mb-3">Typography Sandbox</h1>
  <p class="lead text-center text-secondary lh-base">Edit this playground content dynamically. Try modifying classes below to test text sizes, alignments, and weights!</p>
  
  <div class="p-3 border rounded text-center bg-white my-3">
    <span class="h3 text-uppercase text-danger fw-semibold">Bootstrap 5 is awesome!</span>
  </div>
</div>`,
    tryYourselfTask: "Change class <code>text-primary</code> to <code>text-success</code> and class <code>text-center</code> to <code>text-end</code> to check visual hierarchy changes.",
    visualizer: "typography",
    quiz: [
      {
        question: "Which class is used to dramatically scale up header typography for landing pages (larger than normal h1)?",
        options: [
          ".display-h1",
          ".header-large",
          ".display-1",
          ".large-text"
        ],
        answerIndex: 2,
        explanation: "Bootstrap 5 display classes (.display-1 to .display-6) provide larger, more stylized heading fonts suited for hero banners and marketing pages."
      },
      {
        question: "What tag and class combination is used to style a featured introductory paragraph with larger font size?",
        options: [
          "<p class=\"lead\">",
          "<p class=\"intro\">",
          "<p class=\"first\">",
          "<p class=\"large\">"
        ],
        answerIndex: 0,
        explanation: "The '.lead' class increases standard body text font size to 1.25rem and reduces line-height slightly to signify editorial focus."
      },
      {
        question: "Which utility class removes the default browser margin and bullet points from unordered lists?",
        options: [
          ".list-flat",
          ".list-unstyled",
          ".list-inline",
          ".no-style"
        ],
        answerIndex: 1,
        explanation: "Applying '.list-unstyled' removes bullets and sets left margin to 0. It only applies to direct children lists."
      },
      {
        question: "How do you align text to the right on large desktop screens while maintaining default left alignment on mobile?",
        options: [
          ".text-end-lg",
          ".text-lg-end",
          ".text-lg-right",
          ".text-desktop-end"
        ],
        answerIndex: 1,
        explanation: "Bootstrap 5 grid breakpoints are embedded in the class name format '.text-{breakpoint}-{alignment}'. So '.text-lg-end' aligns text end/right on large (lg) viewports."
      },
      {
        question: "Which class applies a font weight of 600 in Bootstrap 5?",
        options: [
          ".fw-bold",
          ".fw-normal",
          ".fw-semibold",
          ".fw-medium"
        ],
        answerIndex: 2,
        explanation: "The '.fw-semibold' utility sets the css font-weight property to 600, while '.fw-bold' sets it to 700."
      },
      {
        question: "Which text color utility applies the secondary theme color (usually medium gray)?",
        options: [
          ".text-gray",
          ".text-secondary",
          ".text-muted",
          ".text-dark"
        ],
        answerIndex: 1,
        explanation: "The '.text-secondary' class maps to the theme's secondary color token, whereas '.text-muted' is historically a lighter gray used for tertiary captions."
      },
      {
        question: "How do you truncate long text that exceeds its container with an ellipsis (...)?",
        options: [
          ".text-clip",
          ".text-overflow",
          ".text-truncate",
          ".ellipsis"
        ],
        answerIndex: 2,
        explanation: "The '.text-truncate' utility requires 'display: inline-block' or 'block' and uses text-overflow: ellipsis to truncate text."
      },
      {
        question: "Which utility prevents text from wrapping to a new line, forcing it to overflow instead?",
        options: [
          ".text-nowrap",
          ".text-wrap",
          ".text-break",
          ".text-inline"
        ],
        answerIndex: 0,
        explanation: "The '.text-nowrap' utility applies 'white-space: nowrap' to lock text on a single line."
      },
      {
        question: "How can you style inline list elements (horizontal elements like navigation links) using Bootstrap?",
        options: [
          ".list-row",
          ".list-inline and .list-inline-item",
          ".list-flex",
          ".list-horizontal"
        ],
        answerIndex: 1,
        explanation: "The '.list-inline' container class and '.list-inline-item' child classes display list nodes horizontally using inline-block formatting."
      },
      {
        question: "Which class sets the line-height of a paragraph to a value of 1?",
        options: [
          ".lh-1",
          ".lh-sm",
          ".lh-base",
          ".lh-lg"
        ],
        answerIndex: 0,
        explanation: "The '.lh-1' utility sets line-height: 1, which is useful for tight headings."
      },
      {
        question: "Which blockquote sub-element represents the citation or author source of a quote?",
        options: [
          "<quote-footer>",
          "<footer class=\"blockquote-footer\">",
          "<span class=\"cite\">",
          "<cite>"
        ],
        answerIndex: 1,
        explanation: "Bootstrap styles citations using a footnote tag structure with class '.blockquote-footer'."
      },
      {
        question: "What text transformation class capitalizes the first letter of each word?",
        options: [
          ".text-uppercase",
          ".text-lowercase",
          ".text-capitalize",
          ".text-sentence"
        ],
        answerIndex: 2,
        explanation: "The '.text-capitalize' utility sets text-transform: capitalize, which formats the first letter of each word as uppercase."
      },
      {
        question: "Which class removes the default underline from links or anchors?",
        options: [
          ".text-decoration-none",
          ".link-unstyled",
          ".text-plain",
          ".link-plain"
        ],
        answerIndex: 0,
        explanation: "The '.text-decoration-none' class applies text-decoration: none, commonly used to clear anchor styles."
      },
      {
        question: "Which accessibility (A11Y) standard is critical for readers when using background text colors?",
        options: [
          "Font size scaling",
          "Color contrast ratio (WCAG AA)",
          "Font weight hierarchy",
          "Text-transform usage"
        ],
        answerIndex: 1,
        explanation: "The WCAG AA guidelines require a color contrast ratio of at least 4.5:1 for body text, ensuring readability."
      },
      {
        question: "What is the default base font size defined on the HTML body in Bootstrap 5?",
        options: [
          "14px",
          "16px (1rem)",
          "18px",
          "12px"
        ],
        answerIndex: 1,
        explanation: "Bootstrap 5 adopts a default font-size of 16px (1rem) on the body element, scaled down or up using relative rem units."
      }
    ]
  },
  // MODULE 5: Colors
  {
    id: 5,
    module: "M5: Colors & Backgrounds",
    title: "Colors & Theme Customization",
    subtitle: "Setting theme colors, background variables, gradients, and opacities",
    content: `
      <div class="slide-content">
        <h5>Default Theme Palette</h5>
        <p>Bootstrap includes core contextual themes: <code>primary</code> (blue), <code>success</code> (green), <code>danger</code> (red), and others.</p>
      </div>
    `,
    commonMistakes: "Combining light backgrounds with light text colors, which violates contrast requirements of web accessibility guidelines.",
    bestPractices: "Use theme utility classes for semantic actions instead of writing hardcoded custom HEX hex rules.",
    playgroundCode: `<div class="container py-3 text-center">
  <div class="p-3 mb-2 bg-primary bg-gradient text-white rounded">
    Primary Background with Gradient Overlay
  </div>
</div>`,
    tryYourselfTask: "Change the banner class to bg-success to make it green.",
    visualizer: "colors",
    quiz: [
      {
        question: "How do you apply a vertical color gradient overlay to a background class?",
        options: [
          "Use class '.bg-linear-gradient'",
          "Add class '.bg-gradient' alongside your standard '.bg-*' class",
          "Apply custom CSS in style sheets",
          "Use the '.gradient-color' token"
        ],
        answerIndex: 1,
        explanation: "In Bootstrap 5, appending '.bg-gradient' to any contextual background class adds a subtle gradient background image overlay."
      }
    ]
  },
  // MODULE 6: Buttons
  {
    id: 6,
    module: "M6: Buttons & Groups",
    title: "Button Components & Variants",
    subtitle: "Creating solid buttons, outline variations, sizes, and toolbar groups",
    content: `
      <div class="slide-content">
        <h5>Button Sizing and Styles</h5>
        <p>Buttons require the base <code>.btn</code> class, combined with modifier classes like solid colors or outlines.</p>
      </div>
    `,
    commonMistakes: "Using standard anchor buttons <code>&lt;a&gt;</code> with click scripts without setting role='button'.",
    bestPractices: "For loading buttons, use spinner borders inside buttons to inform users that an asynchronous operation is in progress.",
    playgroundCode: `<div class="container py-3 text-center">
  <button class="btn btn-primary btn-lg me-2">Large Action</button>
</div>`,
    tryYourselfTask: "Change the button class to btn-outline-danger to test outlines.",
    visualizer: "none",
    quiz: [
      {
        question: "Which class yields a button with a colored border but transparent background until hovered?",
        options: [".btn-outline-color", ".btn-border-only", ".btn-outline-primary", ".btn-ghost"],
        answerIndex: 2,
        explanation: "The '.btn-outline-*' family sets transparent backgrounds and solid borders, filling in background colors on mouse hover."
      }
    ]
  },
  // MODULE 7: Cards
  {
    id: 7,
    module: "M7: Cards",
    title: "Card Components",
    subtitle: "Designing content containers with headers, body copy, and footers",
    content: `
      <div class="slide-content">
        <h5>What is a Card?</h5>
        <p>A Card is a flexible, content-container widget. It supports images, headers, footers, contextual colors, and customizable alignment templates.</p>
      </div>
    `,
    commonMistakes: "Nesting content directly inside <code>.card</code> without a <code>.card-body</code>, which removes internal padding constraints.",
    bestPractices: "Apply shadow utility classes (<code>.shadow-sm</code>, <code>.shadow-lg</code>) to cards to give them elevation.",
    playgroundCode: `<div class="container py-3">
  <div class="card shadow-sm" style="max-width: 18rem; margin: 0 auto;">
    <div class="card-body">
      <h5 class="card-title">Card Title</h5>
      <p class="card-text text-muted">Some quick example text to build on the card title.</p>
    </div>
  </div>
</div>`,
    tryYourselfTask: "Add class text-center to the card container.",
    visualizer: "none",
    quiz: [
      {
        question: "Which class provides the default internal padding (margins) for content cards?",
        options: [".card-padding", ".card-body", ".card-inner", ".card-content"],
        answerIndex: 1,
        explanation: "'.card-body' applies padding and layout properties to group texts, buttons, and links within the card."
      }
    ]
  },
  // MODULE 8: Forms
  {
    id: 8,
    module: "M8: Forms & Inputs",
    title: "Forms & Input Controls",
    subtitle: "Setting up form text inputs, layout structures, and validation flags",
    content: `
      <div class="slide-content">
        <h5>Styling Form Elements</h5>
        <p>Inputs, textareas, and select menus use specific Bootstrap classes to apply standard styling.</p>
      </div>
    `,
    commonMistakes: "Omitting the <code>id</code> tag on inputs and matching <code>for</code> properties on labels.",
    bestPractices: "Use <code>.is-valid</code> and <code>.is-invalid</code> class modifiers to programmatically apply validation state coloring.",
    playgroundCode: `<div class="container py-3">
  <div class="mb-3">
    <label for="emailInput" class="form-label">Email Address</label>
    <input type="email" class="form-control" id="emailInput">
  </div>
</div>`,
    tryYourselfTask: "Add class is-invalid to the input tag.",
    visualizer: "none",
    quiz: [
      {
        question: "Which class must be applied to an input element to apply rounded corners, shadows, and focus borders?",
        options: [".input-styled", ".form-control", ".form-input", ".form-field"],
        answerIndex: 1,
        explanation: "'.form-control' is the primary class used to style standard form text inputs and textareas in Bootstrap."
      }
    ]
  },
  // MODULE 9: Tables
  {
    id: 9,
    module: "M9: Tables",
    title: "Responsive Data Tables",
    subtitle: "Designing tables with striped layouts, hover indicators, and scroll wraps",
    content: `
      <div class="slide-content">
        <h5>Bootstrap Table Styling</h5>
        <p>To style data layouts, add the base class <code>.table</code> to standard HTML table tags.</p>
      </div>
    `,
    commonMistakes: "Forgetting to wrap small-screen tables in a <code>.table-responsive</code> wrapper.",
    bestPractices: "Apply contextual alignment utility styles directly on table rows.",
    playgroundCode: `<div class="container py-3">
  <table class="table table-striped">
    <tbody>
      <tr><td>John Doe</td><td>Passed</td></tr>
    </tbody>
  </table>
</div>`,
    tryYourselfTask: "Add class table-hover to the table element.",
    visualizer: "none",
    quiz: [
      {
        question: "What parent wrapper class prevents tables from breaking page layouts on small mobile screen sizes?",
        options: [".table-scroll", ".table-responsive", ".table-fit", ".table-mobile"],
        answerIndex: 1,
        explanation: "Wrapping tables in a '.table-responsive' class applies absolute overflow parameters to scroll horizontally on small viewports."
      }
    ]
  },
  // MODULE 10: Navbar
  {
    id: 10,
    module: "M10: Navigation Bars",
    title: "Responsive Navbars",
    subtitle: "Creating branding headers, navigation menus, offcanvas, and toggles",
    content: `
      <div class="slide-content">
        <h5>Navbar Architecture</h5>
        <p>The Navbar is a responsive header module that includes branding links, search bars, and collapse toggles.</p>
      </div>
    `,
    commonMistakes: "Omitting the <code>data-bs-target</code> parameter on the toggler button, which breaks the mobile menu trigger.",
    bestPractices: "Add <code>.sticky-top</code> or <code>.fixed-top</code> to the navbar wrapper.",
    playgroundCode: `<nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MasterCourse</a>
  </div>
</nav>`,
    tryYourselfTask: "Change background color class to bg-primary.",
    visualizer: "none",
    quiz: [
      {
        question: "What class defines the width limits below which the navbar menu collapses behind a hamburger icon?",
        options: [".navbar-collapse", ".navbar-expand-* (e.g. navbar-expand-lg)", ".navbar-responsive", ".navbar-mobile-limit"],
        answerIndex: 1,
        explanation: "The '.navbar-expand-*' class targets specific screen breakpoint limits to switch layouts between collapsed mobile views and expanded desktop links."
      }
    ]
  },
  // MODULE 11: Main Components
  {
    id: 11,
    module: "M11: UI Components",
    title: "Common UI Components",
    subtitle: "Triggering modals, accordions, dismissible alerts, spinners, and carousels",
    content: `
      <div class="slide-content">
        <h5>Pre-Built JS Components</h5>
        <p>Bootstrap includes a suite of interactive JavaScript components that trigger actions using HTML5 <code>data-bs-*</code> attributes.</p>
      </div>
    `,
    commonMistakes: "Using identical target IDs for multiple modals or accordion panels.",
    bestPractices: "Set <code>data-bs-backdrop='static'</code> on modal triggers.",
    playgroundCode: `<div class="container py-3 text-center">
  <div class="spinner-border text-primary" role="status"></div>
</div>`,
    tryYourselfTask: "Change class to spinner-grow to test loader styling.",
    visualizer: "none",
    quiz: [
      {
        question: "Which data attribute is required to map a button action to toggle a Bootstrap Modal panel overlay?",
        options: ["data-bs-modal", "data-bs-toggle='modal'", "data-target='modal'", "href='#modal'"],
        answerIndex: 1,
        explanation: "Specifying 'data-bs-toggle=\"modal\"' hooks the trigger click to the Bootstrap JavaScript module to open the modal."
      }
    ]
  },
  // MODULE 12: Utilities
  {
    id: 12,
    module: "M12: Layout Utilities",
    title: "Spacing, Flexbox & Sizing",
    subtitle: "Setting padding margins, flex alignments, heights, and shadows",
    content: `
      <div class="slide-content">
        <h5>Bootstrap Utility Classes</h5>
        <p>Utility classes apply quick, single-purpose CSS rules directly to HTML elements.</p>
      </div>
    `,
    commonMistakes: "Using hardcoded CSS padding overrides alongside <code>p-*</code> classes.",
    bestPractices: "Use spacing utilities with breakpoint indicators.",
    playgroundCode: `<div class="d-flex justify-content-between bg-light p-3">
  <div class="bg-primary text-white p-2">Item 1</div>
</div>`,
    tryYourselfTask: "Add class flex-column to stack items vertically.",
    visualizer: "none",
    quiz: [
      {
        question: "What does the utility class helper 'mx-auto' achieve?",
        options: [
          "Sets absolute margins on the top and bottom",
          "Centers block-level elements horizontally inside parent boundaries",
          "Rotates layout grids by 90 degrees",
          "Scales width coordinates to match full page ratios"
        ],
        answerIndex: 1,
        explanation: "'mx-auto' sets margin-left and margin-right properties to auto, centering fixed-width block items horizontally."
      }
    ]
  },
  // MODULE 13: Icons
  {
    id: 13,
    module: "M13: Icons",
    title: "Bootstrap Icons & Integration",
    subtitle: "Using SVG vector symbols, icon fonts, and custom styling",
    content: `
      <div class="slide-content">
        <h5>Integrating SVG Icons</h5>
        <p>Bootstrap Icons is an open-source SVG icon library designed to work with Bootstrap.</p>
      </div>
    `,
    commonMistakes: "Forgetting to load the Bootstrap Icons CDN stylesheet.",
    bestPractices: "Style icon size and color using standard typography classes.",
    playgroundCode: `<div class="container py-3 text-center">
  <i class="bi bi-alarm" style="font-size: 2rem;"></i>
</div>`,
    tryYourselfTask: "Add text-danger class to color the icon red.",
    visualizer: "none",
    quiz: [
      {
        question: "How can you resize Bootstrap Icons that are loaded via web fonts?",
        options: [
          "Write custom height scripts in JavaScript",
          "Apply standard typography font-size utility classes (e.g. .fs-3)",
          "Recompile the SVG source files",
          "Icons cannot be resized"
        ],
        answerIndex: 1,
        explanation: "Font icons are treated as text by the browser, meaning they scale with standard typography styles like '.fs-*'."
      }
    ]
  },
  // MODULE 14: Customization
  {
    id: 14,
    module: "M14: Customization",
    title: "Customization & Theme Construction",
    subtitle: "Overriding CSS custom properties and using the SASS Utilities API",
    content: `
      <div class="slide-content">
        <h5>Customizing Theme Styles</h5>
        <p>Bootstrap is highly customizable. Professionals customize Sass variables before compiling or modify CSS variables at runtime.</p>
      </div>
    `,
    commonMistakes: "Editing core files directly inside the node_modules directory.",
    bestPractices: "Import only the specific Bootstrap Sass modules you need.",
    playgroundCode: `<div class="container py-3 text-center" style="--bs-primary: #7c3aed;">
  <button class="btn btn-primary">Custom Colored Button</button>
</div>`,
    tryYourselfTask: "Change primary variable color to green (#198754).",
    visualizer: "none",
    quiz: [
      {
        question: "What is the best way to customize Bootstrap's color palette at runtime?",
        options: [
          "Override CSS custom properties (variables) in your custom stylesheet",
          "Modify node_modules core files",
          "Write inline CSS styles on every element",
          "Use JavaScript timers"
        ],
        answerIndex: 0,
        explanation: "Overriding CSS variables in your stylesheet is the cleanest way to customize styling details without recompiling Sass source files."
      }
    ]
  },
  // MODULE 15: Best Practices
  {
    id: 15,
    module: "M15: Best Practices",
    title: "Best Practices & Optimization",
    subtitle: "Optimizing bundle size, accessibility (A11Y), and semantic HTML layout rules",
    content: `
      <div class="slide-content">
        <h5>Writing Production-Quality Code</h5>
        <p>Building professional sites with Bootstrap requires keeping code clean, accessible, and optimized.</p>
      </div>
    `,
    commonMistakes: "Using color combinations with poor contrast.",
    bestPractices: "Always organize your custom assets in a clean, modular folder structure.",
    playgroundCode: `<article class="card p-3 shadow-sm">
  <button class="btn btn-primary">Action</button>
</article>`,
    tryYourselfTask: "Add aria-label attribute to the button element.",
    visualizer: "none",
    quiz: [
      {
        question: "Which tool scans your project templates and removes unused CSS classes to reduce package size?",
        options: ["Sass compiler", "PurgeCSS", "Webpack optimizer", "Babel JS loader"],
        answerIndex: 1,
        explanation: "PurgeCSS parses your HTML templates and removes any CSS classes not actively declared in your code, keeping bundles small."
      }
    ]
  }
];
