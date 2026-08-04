document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const asideEl = document.querySelector("aside");
  const mainEl = document.querySelector("main");
  const backdropEl = document.getElementById("mobile-backdrop");
  
  const tabTheoryBtn = document.getElementById("tab-theory");
  const tabVisualizerBtn = document.getElementById("tab-visualizer");
  const tabPlaygroundBtn = document.getElementById("tab-playground");
  const tabQuizBtn = document.getElementById("tab-quiz");
  const tabNotesBtn = document.getElementById("tab-notes");

  const paneTheory = document.getElementById("pane-theory");
  const paneVisualizer = document.getElementById("pane-visualizer");
  const panePlayground = document.getElementById("pane-playground");
  const paneQuiz = document.getElementById("pane-quiz");
  const paneNotes = document.getElementById("pane-notes");

  const slideTitleEl = document.getElementById("slide-title");
  const slideSubtitleEl = document.getElementById("slide-subtitle");
  const slideIndicatorEl = document.getElementById("slide-indicator");

  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnThemeToggle = document.getElementById("btn-theme-toggle");
  const btnToggleSidebar = document.getElementById("btn-toggle-sidebar");
  const btnFullscreen = document.getElementById("btn-fullscreen");

  const searchInput = document.getElementById("search-input");
  const sidebarNav = document.getElementById("sidebar-nav");

  const theoryContentEl = document.getElementById("theory-content");
  const codeEditor = document.getElementById("code-editor");
  const previewIframe = document.getElementById("preview-iframe");
  const btnRunCode = document.getElementById("btn-run-code");
  const progressBarFillEl = document.querySelector(".progress-bar-fill");
  const visualizerWorkspace = document.getElementById("visualizer-workspace");

  // State
  let currentSlideIndex = 0;
  let activeTab = "theory";
  let searchVal = "";
  let completedSlides = new Set([0]);

  // Quiz State
  let activeQuizQuestionIndex = 0;
  let quizScore = 0;
  let quizAnswersTrack = [];

  // Safe Lucide icon initializer
  function safeCreateIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      try {
        lucide.createIcons();
      } catch (err) {
        console.warn("Lucide failed to render icons:", err);
      }
    }
  }

  // --- THEME HANDLERS ---
  function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    updateThemeToggleUI();
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeToggleUI();
  }

  function updateThemeToggleUI() {
    const isDark = document.body.classList.contains("dark-theme");
    if (isDark) {
      btnThemeToggle.innerHTML = `<i data-lucide="sun"></i> <span>Light Mode</span>`;
    } else {
      btnThemeToggle.innerHTML = `<i data-lucide="moon"></i> <span>Dark Mode</span>`;
    }
    safeCreateIcons();
  }

  // --- SIDEBAR NAVIGATION CONTROLS ---
  function renderSidebarNav() {
    sidebarNav.innerHTML = "";

    const modules = {};
    slidesData.forEach((slide, idx) => {
      if (!modules[slide.module]) {
        modules[slide.module] = [];
      }
      modules[slide.module].push({ slide, idx });
    });

    Object.keys(modules).forEach(moduleName => {
      const header = document.createElement("div");
      header.className = "nav-section-title";
      header.innerText = moduleName;
      sidebarNav.appendChild(header);

      modules[moduleName].forEach(({ slide, idx }) => {
        if (searchVal && 
            !slide.title.toLowerCase().includes(searchVal.toLowerCase()) && 
            !slide.subtitle.toLowerCase().includes(searchVal.toLowerCase())) {
          return;
        }

        const btn = document.createElement("button");
        btn.className = `nav-item-btn ${idx === currentSlideIndex ? "active" : ""}`;
        
        let icon = "book-open";
        if (slide.visualizer !== "none") icon = "sliders";
        if (slide.quiz && slide.quiz.length > 0) icon = "help-circle";
        
        btn.innerHTML = `<i data-lucide="${icon}" style="width: 14px; height: 14px;"></i> ${slide.title}`;
        btn.addEventListener("click", () => {
          loadSlide(idx);
        });
        sidebarNav.appendChild(btn);
      });
    });
    safeCreateIcons();
  }

  // --- SLIDE LOADING PROCESSOR ---
  function loadSlide(index) {
    if (index < 0 || index >= slidesData.length) return;
    
    currentSlideIndex = index;
    completedSlides.add(index);
    
    const slide = slidesData[index];
    
    // Auto-close mobile navigation drawer
    if (window.innerWidth < 992) {
      asideEl.classList.remove("open");
      backdropEl.classList.remove("active");
    }

    toggleTabAvailability(slide);
    switchTab("theory");

    // Title bindings
    slideTitleEl.innerText = slide.title;
    slideSubtitleEl.innerText = slide.subtitle;
    slideIndicatorEl.innerText = `${index + 1} / ${slidesData.length}`;

    // Highlight sidebar items
    document.querySelectorAll(".nav-item-btn").forEach((btn, idx) => {
      btn.classList.toggle("active", idx === index);
    });

    theoryContentEl.innerHTML = slide.content;
    renderNotesPane(slide);

    activeQuizQuestionIndex = 0;
    quizScore = 0;
    quizAnswersTrack = [];

    btnPrev.disabled = index === 0;
    btnNext.disabled = index === slidesData.length - 1;

    codeEditor.value = slide.playgroundCode.trim();
    runPlaygroundCode();

    if (slide.visualizer !== "none") {
      setupVisualizer(slide.visualizer);
    }

    updateProgress();
  }

  function toggleTabAvailability(slide) {
    tabVisualizerBtn.style.display = slide.visualizer === "none" ? "none" : "flex";
    tabQuizBtn.style.display = (!slide.quiz || slide.quiz.length === 0) ? "none" : "flex";
  }

  function switchTab(tabId) {
    activeTab = tabId;
    
    tabTheoryBtn.classList.toggle("active", tabId === "theory");
    tabVisualizerBtn.classList.toggle("active", tabId === "visualizer");
    tabPlaygroundBtn.classList.toggle("active", tabId === "playground");
    tabQuizBtn.classList.toggle("active", tabId === "quiz");
    tabNotesBtn.classList.toggle("active", tabId === "notes");

    paneTheory.classList.toggle("active", tabId === "theory");
    paneVisualizer.classList.toggle("active", tabId === "visualizer");
    panePlayground.classList.toggle("active", tabId === "playground");
    paneQuiz.classList.toggle("active", tabId === "quiz");
    paneNotes.classList.toggle("active", tabId === "notes");

    if (tabId === "playground") {
      setTimeout(() => codeEditor.focus(), 50);
    }
    if (tabId === "quiz") {
      renderQuiz();
    }
  }

  function updateProgress() {
    const percent = Math.round((completedSlides.size / slidesData.length) * 100);
    progressBarFillEl.style.width = `${percent}%`;
    document.getElementById("progress-percent").innerText = `${percent}%`;
  }

  // --- NOTES & BEST PRACTICES PANE ---
  function renderNotesPane(slide) {
    if (slide.notesData) {
      const data = slide.notesData;
      
      let keyPointsLi = "";
      data.keyPoints.forEach(pt => {
        keyPointsLi += `<li class="mb-2">🔹 ${pt}</li>`;
      });

      let interviewMarkup = "";
      data.interviewQuestions.forEach((q, index) => {
        interviewMarkup += `
          <details class="mb-3 border rounded p-3 bg-light" style="cursor: pointer; background: var(--bg-dark) !important; border-color: var(--border-color) !important;">
            <summary class="fw-bold text-primary">Q${index+1}: ${q.q}</summary>
            <p class="text-muted mt-2 mb-0 small">${q.a}</p>
          </details>
        `;
      });

      paneNotes.innerHTML = `
        <div class="notes-pane-container" style="animation: fadeIn 0.3s ease;">
          <!-- Quick Summary -->
          <div class="info-banner-card border-primary" style="border-left: 4px solid var(--accent-blue);">
            <h5 class="text-primary"><i data-lucide="info"></i> Quick Summary</h5>
            <p>${data.summary}</p>
          </div>

          <!-- Key Points -->
          <div class="info-banner-card">
            <h5><i data-lucide="list"></i> Key Points to Remember</h5>
            <ul class="list-unstyled mt-2">
              ${keyPointsLi}
            </ul>
          </div>

          <!-- Try Yourself Exercise -->
          <div class="info-banner-card try-task-box">
            <h5><i data-lucide="award"></i> TRY YOURSELF EXERCISE</h5>
            <p>${slide.tryYourselfTask}</p>
            <div class="mt-3 p-3 border rounded small bg-white text-dark">
              <strong>Mini Challenge:</strong> ${data.miniChallenge}
            </div>
          </div>

          <!-- Common Mistakes & Best Practices -->
          <div class="row g-4 mb-4">
            <div class="col-md-6">
              <div class="info-banner-card banner-mistakes h-100 mb-0">
                <h5><i data-lucide="alert-triangle"></i> Common Mistakes</h5>
                <p>${slide.commonMistakes}</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="info-banner-card banner-practices h-100 mb-0">
                <h5><i data-lucide="check-circle-2"></i> Best Practices</h5>
                <p>${slide.bestPractices}</p>
              </div>
            </div>
          </div>

          <!-- Real World Usage -->
          <div class="info-banner-card">
            <h5><i data-lucide="globe"></i> Real-World Usage</h5>
            <p>${data.realWorldUsage}</p>
          </div>

          <!-- Interview Questions -->
          <div class="info-banner-card">
            <h5><i data-lucide="help-circle"></i> Interview Questions</h5>
            <div class="mt-3">
              ${interviewMarkup}
            </div>
          </div>

          <!-- Next Lesson Preview -->
          <div class="info-banner-card border-success" style="background: rgba(25, 135, 84, 0.04); border-left: 4px solid var(--color-success);">
            <h5 class="text-success"><i data-lucide="arrow-right-circle"></i> Next Lesson Preview</h5>
            <p>${data.nextLessonPreview}</p>
          </div>
        </div>
      `;
    } else {
      paneNotes.innerHTML = `
        <div class="notes-pane-container" style="animation: fadeIn 0.3s ease;">
          <div class="info-banner-card try-task-box">
            <h5><i data-lucide="award"></i> TRY YOURSELF EXERCISE</h5>
            <p>${slide.tryYourselfTask}</p>
          </div>
          <div class="info-banner-card banner-mistakes">
            <h5><i data-lucide="alert-triangle"></i> COMMON BEGINNER MISTAKES</h5>
            <p>${slide.commonMistakes}</p>
          </div>
          <div class="info-banner-card banner-practices">
            <h5><i data-lucide="check-circle-2"></i> BEST PRACTICES</h5>
            <p>${slide.bestPractices}</p>
          </div>
        </div>
      `;
    }
    safeCreateIcons();
  }

  // --- PLAYGROUND RUNNER ---
  function runPlaygroundCode() {
    try {
      const userCode = codeEditor.value;
      
      const docHtml = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
            <style>
              body {
                padding: 20px;
                background-color: #fafbfc;
                font-family: system-ui, -apple-system, sans-serif;
                overflow: hidden !important;
              }
              .grid-vis-row {
                background: rgba(0,0,0,0.02);
                border: 1px dashed rgba(13, 110, 253, 0.3);
                margin-bottom: 10px;
              }
              .grid-vis-col {
                background: rgba(13, 110, 253, 0.1);
                border: 1px solid #0d6efd;
                color: #0d6efd;
                text-align: center;
                padding: 10px 0;
                font-weight: bold;
              }
            </style>
          </head>
          <body>
            ${userCode}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
          </body>
        </html>
      `;
      
      const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(docHtml);
        iframeDoc.close();

        // Resize iframe after content loads and stylesheet elements render
        const resizeIframe = () => {
          try {
            const h = iframeDoc.documentElement.scrollHeight || iframeDoc.body.scrollHeight;
            previewIframe.style.setProperty('height', (h + 35) + 'px', 'important');
          } catch(e) {}
        };
        
        previewIframe.onload = resizeIframe;
        setTimeout(resizeIframe, 100);
        setTimeout(resizeIframe, 500);
      }
    } catch (err) {
      console.error("Playground sandbox rendering failed:", err);
    }
  }

  // --- QUIZ HANDLERS ---
  function renderQuiz() {
    const slide = slidesData[currentSlideIndex];
    if (!slide.quiz || slide.quiz.length === 0) {
      paneQuiz.innerHTML = `<div class="p-5 text-center text-muted">No quiz available for this module.</div>`;
      return;
    }

    const q = slide.quiz[activeQuizQuestionIndex];
    const answeredRecord = quizAnswersTrack[activeQuizQuestionIndex];

    let optionsMarkup = "";
    q.options.forEach((opt, idx) => {
      let cssClass = "";
      if (answeredRecord) {
        if (idx === q.answerIndex) cssClass = "correct";
        else if (idx === answeredRecord.selectedIdx) cssClass = "incorrect";
      }
      
      optionsMarkup += `
        <button class="quiz-option-btn ${cssClass}" data-index="${idx}" ${answeredRecord ? "disabled" : ""}>
          <div class="option-marker">${String.fromCharCode(65 + idx)}</div>
          <span>${opt}</span>
        </button>
      `;
    });

    let nextBtnMarkup = "";
    if (answeredRecord) {
      const isLast = activeQuizQuestionIndex === slide.quiz.length - 1;
      nextBtnMarkup = `
        <div class="quiz-explanation mb-4">
          <strong>Explanation:</strong> ${q.explanation}
        </div>
        <div class="quiz-action-bar">
          <button class="quiz-next-btn" id="btn-quiz-next">
            ${isLast ? "View Scorecard" : "Next Question ➡️"}
          </button>
        </div>
      `;
    }

    paneQuiz.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-card">
          <div class="quiz-header">
            <span>KNOWLEDGE CHECKPOINT</span>
            <span>Question ${activeQuizQuestionIndex + 1} of ${slide.quiz.length}</span>
          </div>
          <div class="quiz-question">${q.question}</div>
          <div class="quiz-options">${optionsMarkup}</div>
          ${nextBtnMarkup}
        </div>
      </div>
    `;

    // Bind selection clicks
    paneQuiz.querySelectorAll(".quiz-option-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const selectedIdx = parseInt(e.currentTarget.getAttribute("data-index"));
        checkQuizAnswer(selectedIdx);
      });
    });

    if (answeredRecord) {
      paneQuiz.querySelector("#btn-quiz-next").addEventListener("click", () => {
        if (activeQuizQuestionIndex < slide.quiz.length - 1) {
          activeQuizQuestionIndex++;
          renderQuiz();
        } else {
          renderQuizScoreCard();
        }
      });
    }
  }

  function checkQuizAnswer(selectedIdx) {
    const slide = slidesData[currentSlideIndex];
    const q = slide.quiz[activeQuizQuestionIndex];
    const isCorrect = selectedIdx === q.answerIndex;

    if (isCorrect) quizScore++;

    quizAnswersTrack[activeQuizQuestionIndex] = { selectedIdx, isCorrect };
    renderQuiz();
  }

  function renderQuizScoreCard() {
    const slide = slidesData[currentSlideIndex];
    const totalQuestions = slide.quiz.length;
    const isSuccess = quizScore === totalQuestions;

    paneQuiz.innerHTML = `
      <div class="quiz-container text-center">
        <div class="quiz-card quiz-score-card">
          <div class="score-badge">${quizScore} / ${totalQuestions}</div>
          <h3 class="fw-bold mb-3">${isSuccess ? "🎉 Perfect Score!" : "👍 Nice Attempt!"}</h3>
          <p class="text-muted mb-4">You have completed the module quiz checkpoint.</p>
          
          <div class="d-flex justify-content-center gap-3">
            <button class="header-btn" id="btn-quiz-retry">Retry Quiz</button>
            ${isSuccess ? `<button class="header-btn primary-action text-white" id="btn-quiz-cert" style="background:var(--accent-blue);">Claim Certificate</button>` : ""}
          </div>
        </div>
      </div>
    `;

    paneQuiz.querySelector("#btn-quiz-retry").addEventListener("click", () => {
      activeQuizQuestionIndex = 0;
      quizScore = 0;
      quizAnswersTrack = [];
      renderQuiz();
    });

    if (isSuccess) {
      paneQuiz.querySelector("#btn-quiz-cert").addEventListener("click", renderCompletionCertificate);
    }
  }

  function renderCompletionCertificate() {
    paneQuiz.innerHTML = `
      <div class="quiz-container text-center" style="max-width: 650px;">
        <div class="certificate-preview-card border-double border-8 p-5 rounded">
          <div class="certificate-logo">B</div>
          <h2 class="fw-bold uppercase mb-4" style="font-family: var(--font-title); letter-spacing: 1px;">Certificate of Completion</h2>
          <p class="text-muted mb-1 small">THIS IS PROUDLY PRESENTED TO</p>
          
          <input type="text" class="form-control text-center fs-4 fw-bold mx-auto mb-4 bg-transparent border-bottom border-top-0 border-start-0 border-end-0 rounded-0" id="student-cert-name" placeholder="Enter Your Full Name" style="max-width: 320px;">
          
          <p class="text-muted small mb-4">for successfully completing the advanced master presentation course module</p>
          <h5 class="fw-bold mb-4">${slidesData[currentSlideIndex].title}</h5>
          
          <div class="d-flex justify-content-between mt-5 pt-3 border-top small text-muted">
            <span>Verified Course Program</span>
            <span>Date: ${new Date().toLocaleDateString()}</span>
          </div>
        </div>
        
        <div class="d-flex justify-content-center gap-2 mt-4">
          <button class="header-btn" id="btn-print-cert">🖨️ Print / Save PDF</button>
          <button class="header-btn" id="btn-cert-back">Back to Score</button>
        </div>
      </div>
    `;

    document.getElementById("btn-print-cert").addEventListener("click", () => {
      const studentName = document.getElementById("student-cert-name").value || "Successful Graduate";
      document.getElementById("student-cert-name").outerHTML = `<h3 class="fw-bold text-primary mb-3">${studentName}</h3>`;
      window.print();
    });

    document.getElementById("btn-cert-back").addEventListener("click", renderQuizScoreCard);
  }

  // --- SWITCH BETWEEN INTERACTIVE TOOLS (VISUALIZER LAB) ---
  function setupVisualizer(type) {
    visualizerWorkspace.innerHTML = `
      <div class="vis-lab-container">
        <!-- Visualizer Lab Selection Sidebar -->
        <div class="vis-lab-sidebar">
          <h6 class="vis-lab-title">Interactive Visual Labs</h6>
          <div class="d-flex flex-column gap-1" id="vis-lab-menu" style="width: 100%;">
            <button class="lab-menu-btn" data-lab="breakpoints"><i data-lucide="monitor" style="width: 14px; height: 14px;"></i> Breakpoints</button>
            <button class="lab-menu-btn" data-lab="grid"><i data-lucide="layout" style="width: 14px; height: 14px;"></i> Grid System</button>
            <button class="lab-menu-btn" data-lab="container"><i data-lucide="maximize-2" style="width: 14px; height: 14px;"></i> Container Width</button>
            <button class="lab-menu-btn" data-lab="flexbox"><i data-lucide="shuffle" style="width: 14px; height: 14px;"></i> Flexbox</button>
            <button class="lab-menu-btn" data-lab="spacing"><i data-lucide="move" style="width: 14px; height: 14px;"></i> Spacing</button>
            <button class="lab-menu-btn" data-lab="colors"><i data-lucide="palette" style="width: 14px; height: 14px;"></i> Color Explorer</button>
            <button class="lab-menu-btn" data-lab="typography"><i data-lucide="type" style="width: 14px; height: 14px;"></i> Typography</button>
            <button class="lab-menu-btn" data-lab="buttons"><i data-lucide="toggle-left" style="width: 14px; height: 14px;"></i> Button Builder</button>
            <button class="lab-menu-btn" data-lab="cards"><i data-lucide="credit-card" style="width: 14px; height: 14px;"></i> Card Builder</button>
            <button class="lab-menu-btn" data-lab="navbars"><i data-lucide="menu" style="width: 14px; height: 14px;"></i> Navbar Builder</button>
          </div>
        </div>
        
        <!-- Lab Active Workspace -->
        <div class="vis-lab-workspace" id="vis-lab-workspace">
          <!-- Active lab renders here -->
        </div>
      </div>
    `;

    // Inline style injections for the lab selector button elements
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .lab-menu-btn {
        width: 100%;
        text-align: left;
        border: none;
        background: transparent;
        padding: 10px 14px;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-muted);
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .lab-menu-btn:hover {
        background: rgba(0, 0, 0, 0.04);
        color: var(--text-main);
      }
      .dark-theme .lab-menu-btn:hover {
        background: rgba(255, 255, 255, 0.04);
        color: white;
      }
      .lab-menu-btn.active {
        background: var(--accent-blue) !important;
        color: white !important;
      }
    `;
    document.head.appendChild(styleTag);

    safeCreateIcons();

    // Attach click listeners to lab buttons
    const labButtons = visualizerWorkspace.querySelectorAll("[data-lab]");
    labButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const labId = e.currentTarget.getAttribute("data-lab");
        
        // Highlight active lab button
        labButtons.forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        // Load active lab in the vis-lab-workspace
        const labWorkspace = document.getElementById("vis-lab-workspace");
        loadLab(labId, labWorkspace);
      });
    });

    // Default load corresponding to slide.visualizer
    const defaultLab = type === "none" ? "breakpoints" : type;
    const defaultBtn = visualizerWorkspace.querySelector(`[data-lab="${defaultLab}"]`);
    if (defaultBtn) {
      defaultBtn.click();
    } else {
      labButtons[0].click();
    }
  }

  function loadLab(labId, targetEl) {
    targetEl.innerHTML = "";

    switch (labId) {
      case "breakpoints":
        renderBreakpointVisualizer(targetEl);
        break;
      case "grid":
        renderGridSimulator(targetEl);
        break;
      case "container":
        renderContainerWidthSimulator(targetEl);
        break;
      case "flexbox":
        renderFlexboxPlayground(targetEl);
        break;
      case "spacing":
        renderSpacingGenerator(targetEl);
        break;
      case "colors":
        renderColorExplorer(targetEl);
        break;
      case "typography":
        renderTypographyVisualizer(targetEl);
        break;
      case "buttons":
        renderButtonBuilder(targetEl);
        break;
      case "cards":
        renderCardBuilder(targetEl);
        break;
      case "navbars":
        renderNavbarBuilder(targetEl);
        break;
    }
    safeCreateIcons();
  }

  // Breakpoint Visualizer
  function renderBreakpointVisualizer(targetEl) {
    targetEl.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-card">
          <h4 class="mb-3">Responsive Breakpoints Chart</h4>
          <p class="text-muted small">Resize your browser viewport width, or select mock viewport targets below to observe active breakpoint targets.</p>
          
          <div class="visualizer-controls justify-content-center flex-wrap gap-2">
            <button class="header-btn" data-width="480">Mobile (XS)</button>
            <button class="header-btn" data-width="680">Landscape Phone (SM)</button>
            <button class="header-btn" data-width="850">Tablet (MD)</button>
            <button class="header-btn" data-width="1100">Laptop (LG)</button>
            <button class="header-btn" data-width="1350">Desktop (XL)</button>
            <button class="header-btn" data-width="1500">Ultrawide (XXL)</button>
          </div>

          <div class="breakpoint-bar-chart mt-4" id="bp-chart-list">
            <div class="bp-bar-row" id="bp-row-xs" data-min="0" data-max="575">
              <span>Extra Small (XS)</span>
              <span>&lt; 576px</span>
            </div>
            <div class="bp-bar-row" id="bp-row-sm" data-min="576" data-max="767">
              <span>Small (SM)</span>
              <span>&ge; 576px</span>
            </div>
            <div class="bp-bar-row" id="bp-row-md" data-min="768" data-max="991">
              <span>Medium (MD)</span>
              <span>&ge; 768px</span>
            </div>
            <div class="bp-bar-row" id="bp-row-lg" data-min="992" data-max="1199">
              <span>Large (LG)</span>
              <span>&ge; 992px</span>
            </div>
            <div class="bp-bar-row" id="bp-row-xl" data-min="1200" data-max="1399">
              <span>Extra Large (XL)</span>
              <span>&ge; 1200px</span>
            </div>
            <div class="bp-bar-row" id="bp-row-xxl" data-min="1400" data-max="9999">
              <span>Extra Extra Large (XXL)</span>
              <span>&ge; 1400px</span>
            </div>
          </div>
          
          <div class="text-center mt-3 text-primary fw-bold" id="bp-active-readout">Active Breakpoint: XS</div>
        </div>
      </div>
    `;

    targetEl.querySelectorAll("[data-width]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const testWidth = parseInt(e.currentTarget.getAttribute("data-width"));
        evaluateBreakpointRowHighlight(targetEl, testWidth);
      });
    });

    evaluateBreakpointRowHighlight(targetEl, window.innerWidth);
  }

  function evaluateBreakpointRowHighlight(targetEl, w) {
    const rows = targetEl.querySelectorAll(".bp-bar-row");
    let activeKey = "XS";

    rows.forEach(row => {
      const min = parseInt(row.getAttribute("data-min"));
      const max = parseInt(row.getAttribute("data-max"));
      const isActive = w >= min && w <= max;
      row.classList.toggle("active", isActive);
      if (isActive) {
        activeKey = row.querySelector("span").innerText;
      }
    });

    const readout = targetEl.querySelector("#bp-active-readout");
    if (readout) {
      readout.innerText = `Active Viewport: ${w}px (${activeKey})`;
    }
  }

  // Grid Simulator
  function renderGridSimulator(targetEl) {
    targetEl.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-card">
          <h4 class="mb-3">Interactive Grid Simulator</h4>
          
          <div class="visualizer-controls">
            <div class="control-group">
              <label>Breakpoints Weight</label>
              <select class="control-select" id="g-bp-select">
                <option value="xs">XS (&lt;576px)</option>
                <option value="sm">SM (&ge;576px)</option>
                <option value="md" selected>MD (&ge;768px)</option>
                <option value="lg">LG (&ge;992px)</option>
                <option value="xl">XL (&ge;1200px)</option>
              </select>
            </div>
            
            <div class="control-group">
              <label>Grid Wrapper Container</label>
              <select class="control-select" id="g-container-select">
                <option value="container">Fixed (.container)</option>
                <option value="container-fluid">Fluid (.container-fluid)</option>
              </select>
            </div>

            <div class="control-group">
              <label>Row Gutters (g-* class)</label>
              <select class="control-select" id="g-gutter-select">
                <option value="g-0">g-0 (No Gutters)</option>
                <option value="g-1">g-1 (4px)</option>
                <option value="g-2">g-2 (8px)</option>
                <option value="g-3" selected>g-3 (16px)</option>
                <option value="g-4">g-4 (24px)</option>
                <option value="g-5">g-5 (48px)</option>
              </select>
            </div>

            <div class="control-group">
              <label>Vertical Align (align-items-*)</label>
              <select class="control-select" id="g-align-select">
                <option value="align-items-start">Align Start</option>
                <option value="align-items-center" selected>Align Center</option>
                <option value="align-items-end">Align End</option>
              </select>
            </div>

            <div class="control-group">
              <label>Column Template Setup</label>
              <select class="control-select" id="g-layout-select">
                <option value="equal-4">Equal Sized (4 Columns: .col)</option>
                <option value="unequal-2">Sidebar Style (col-3 + col-9)</option>
                <option value="offset-2">Offsets (col-4 + offset-md-4)</option>
                <option value="nesting-2">Nested grid template</option>
              </select>
            </div>
          </div>

          <div class="grid-preview-box mt-3">
            <div class="sim-container" id="grid-vis-container" style="border: 1px dashed rgba(15, 98, 254, 0.3); margin: 0 auto; transition: max-width 0.2s ease;">
              <div class="sim-row" id="grid-vis-row" style="min-height: 120px; background: rgba(0,0,0,0.02); display: flex; flex-wrap: wrap;">
                <!-- Dynamic grid elements loaded -->
              </div>
            </div>
          </div>
          
          <div class="small text-muted mt-2 text-center" id="grid-vis-readout">Active Grid: container-md (720px max-width)</div>
        </div>
      </div>
    `;

    const inputs = ["g-bp-select", "g-container-select", "g-gutter-select", "g-align-select", "g-layout-select"];
    inputs.forEach(id => {
      targetEl.querySelector(`#${id}`).addEventListener("change", () => runGridSimulatorCalculation(targetEl));
    });

    runGridSimulatorCalculation(targetEl);
  }

  function runGridSimulatorCalculation(targetEl) {
    const bp = targetEl.querySelector("#g-bp-select").value;
    const cont = targetEl.querySelector("#g-container-select").value;
    const gutter = targetEl.querySelector("#g-gutter-select").value;
    const align = targetEl.querySelector("#g-align-select").value;
    const layout = targetEl.querySelector("#g-layout-select").value;

    const containerBox = targetEl.querySelector("#grid-vis-container");
    const rowBox = targetEl.querySelector("#grid-vis-row");
    const readout = targetEl.querySelector("#grid-vis-readout");

    containerBox.className = "sim-container";
    rowBox.className = `sim-row d-flex flex-wrap ${align}`;

    const sizes = {
      xs: { max: "100%", text: "Fluid XS" },
      sm: { max: "540px", text: "540px Max (sm)" },
      md: { max: "720px", text: "720px Max (md)" },
      lg: { max: "960px", text: "960px Max (lg)" },
      xl: { max: "1140px", text: "1140px Max (xl)" }
    };

    if (cont === "container") {
      containerBox.style.maxWidth = sizes[bp].max;
      readout.innerText = `Container Boundary Size: ${sizes[bp].text}`;
    } else {
      containerBox.style.maxWidth = "100%";
      readout.innerText = "Container Boundary Size: 100% width (.container-fluid)";
    }

    const padSize = { "g-0": "0px", "g-1": "4px", "g-2": "8px", "g-3": "12px", "g-4": "16px", "g-5": "24px" }[gutter];

    rowBox.innerHTML = "";

    if (layout === "equal-4") {
      for (let i = 1; i <= 4; i++) {
        createGridSimNode(rowBox, 3, "col-3", padSize);
      }
    } else if (layout === "unequal-2") {
      createGridSimNode(rowBox, 3, "col-3", padSize);
      createGridSimNode(rowBox, 9, "col-9", padSize);
    } else if (layout === "offset-2") {
      createGridSimNode(rowBox, 4, "col-4", padSize);
      createGridSimNode(rowBox, 4, `col-4 offset-${bp}-4`, padSize, `margin-left: 33.33%`);
    } else if (layout === "nesting-2") {
      const colParent = createGridSimNode(rowBox, 12, "col-12 Parent Layout", padSize);
      colParent.querySelector(".sim-col-inner").innerHTML = `
        <div class="mb-2 text-primary small fw-bold">Parent col-12</div>
        <div class="sim-row" style="margin-left: -5px; margin-right: -5px; display:flex;">
          <div style="width: 50%; padding: 0 5px;"><div class="bg-success text-white small p-2 rounded">Nested col-6</div></div>
          <div style="width: 50%; padding: 0 5px;"><div class="bg-dark text-white small p-2 rounded">Nested col-6</div></div>
        </div>
      `;
    }
  }

  function createGridSimNode(rowEl, units, label, paddingVal, customStyle = "") {
    const col = document.createElement("div");
    col.className = "sim-col";
    col.style.width = `${(units / 12) * 100}%`;
    col.style.paddingLeft = paddingVal;
    col.style.paddingRight = paddingVal;
    col.style.marginBottom = paddingVal;

    if (customStyle) {
      col.style.cssText += `; ${customStyle}`;
    }

    col.innerHTML = `<div class="sim-col-inner" style="background: rgba(15, 98, 254, 0.1); border: 2px solid var(--accent-blue); color: var(--accent-blue); padding: 16px 8px; border-radius: 6px; text-align: center; font-family: var(--font-mono); font-size: 0.8rem; font-weight:600;">${label}</div>`;
    rowEl.appendChild(col);
    return col;
  }

  // Container Width Simulator
  function renderContainerWidthSimulator(targetEl) {
    targetEl.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-card">
          <h4 class="mb-3">Responsive Container Width Simulator</h4>
          <p class="text-muted small">Select a container class to visualize its snapping max-width threshold relative to the viewport size.</p>
          
          <div class="visualizer-controls justify-content-center flex-wrap gap-2">
            <button class="header-btn" data-cont="container">.container (Responsive)</button>
            <button class="header-btn" data-cont="container-sm">.container-sm</button>
            <button class="header-btn" data-cont="container-md">.container-md</button>
            <button class="header-btn" data-cont="container-lg">.container-lg</button>
            <button class="header-btn" data-cont="container-xl">.container-xl</button>
            <button class="header-btn" data-cont="container-xxl">.container-xxl</button>
            <button class="header-btn" data-cont="container-fluid">.container-fluid (100%)</button>
          </div>

          <div class="mt-4 p-3 border rounded text-center" style="background: rgba(0,0,0,0.02);">
            <label class="fw-bold mb-2">Simulate Screen Viewport Width: <span id="cont-viewport-val" class="text-primary">1200px</span></label>
            <input type="range" class="form-range" id="cont-viewport-slider" min="360" max="1600" value="1200" style="width: 100%;">
          </div>

          <div class="mt-4 p-4 border rounded position-relative d-flex justify-content-center align-items-center bg-dark" id="cont-screen-mock" style="min-height: 200px; transition: all 0.2s ease;">
            <div id="cont-element" style="background: rgba(13, 110, 253, 0.2); border: 2px solid #0d6efd; color: #0d6efd; border-radius: 8px; font-weight: 700; text-align: center; padding: 24px; transition: all 0.2s ease; width: 100%;">
              .container
            </div>
          </div>
          
          <div class="mt-3 p-3 border rounded text-center bg-light dark-theme-bg">
            <code class="text-success fw-bold" id="cont-explanation" style="font-size: 0.95rem;">Width details</code>
          </div>
        </div>
      </div>
    `;

    const slider = targetEl.querySelector("#cont-viewport-slider");
    const buttons = targetEl.querySelectorAll("[data-cont]");
    let selectedCont = "container";

    buttons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        buttons.forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        selectedCont = e.currentTarget.getAttribute("data-cont");
        calculateContainerWidth(targetEl, slider.value, selectedCont);
      });
    });

    slider.addEventListener("input", (e) => {
      targetEl.querySelector("#cont-viewport-val").innerText = `${e.target.value}px`;
      calculateContainerWidth(targetEl, e.target.value, selectedCont);
    });

    buttons[0].click();
  }

  function calculateContainerWidth(targetEl, viewport, type) {
    const contEl = targetEl.querySelector("#cont-element");
    const explainEl = targetEl.querySelector("#cont-explanation");
    const screenMock = targetEl.querySelector("#cont-screen-mock");

    const scale = 0.55; 
    screenMock.style.width = `${viewport * scale}px`;
    screenMock.style.margin = "0 auto";

    let widthText = "100%";
    let explainText = "";

    const w = parseInt(viewport);

    if (type === "container-fluid") {
      widthText = "100%";
      explainText = "Container Fluid is always 100% width at all breakpoints.";
    } else {
      let activeMaxWidth = "100%";
      const isSmLimit = w >= 576;
      const isMdLimit = w >= 768;
      const isLgLimit = w >= 992;
      const isXlLimit = w >= 1200;
      const isXxlLimit = w >= 1400;

      if (type === "container") {
        if (isXxlLimit) activeMaxWidth = "1320px";
        else if (isXlLimit) activeMaxWidth = "1140px";
        else if (isLgLimit) activeMaxWidth = "960px";
        else if (isMdLimit) activeMaxWidth = "720px";
        else if (isSmLimit) activeMaxWidth = "540px";
      } else if (type === "container-sm") {
        if (isXxlLimit) activeMaxWidth = "1320px";
        else if (isXlLimit) activeMaxWidth = "1140px";
        else if (isLgLimit) activeMaxWidth = "960px";
        else if (isMdLimit) activeMaxWidth = "720px";
        else if (isSmLimit) activeMaxWidth = "540px";
      } else if (type === "container-md") {
        if (isXxlLimit) activeMaxWidth = "1320px";
        else if (isXlLimit) activeMaxWidth = "1140px";
        else if (isLgLimit) activeMaxWidth = "960px";
        else if (isMdLimit) activeMaxWidth = "720px";
      } else if (type === "container-lg") {
        if (isXxlLimit) activeMaxWidth = "1320px";
        else if (isXlLimit) activeMaxWidth = "1140px";
        else if (isLgLimit) activeMaxWidth = "960px";
      } else if (type === "container-xl") {
        if (isXxlLimit) activeMaxWidth = "1320px";
        else if (isXlLimit) activeMaxWidth = "1140px";
      } else if (type === "container-xxl") {
        if (isXxlLimit) activeMaxWidth = "1320px";
      }

      widthText = activeMaxWidth;
      explainText = `At viewport ${viewport}px, class "${type}" yields a max-width of ${activeMaxWidth}.`;
    }

    contEl.innerText = `${type} (${widthText})`;
    if (widthText === "100%") {
      contEl.style.width = "100%";
    } else {
      contEl.style.width = `${parseInt(widthText) * scale}px`;
    }
    explainEl.innerText = explainText;
  }

  // Flexbox Playground
  function renderFlexboxPlayground(targetEl) {
    targetEl.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-card">
          <h4 class="mb-3">Interactive Flexbox Playground</h4>
          
          <div class="visualizer-controls">
            <div class="control-group">
              <label>Flex Direction</label>
              <select class="control-select" id="fl-dir-select">
                <option value="flex-row">Row (.flex-row)</option>
                <option value="flex-row-reverse">Row Reverse (.flex-row-reverse)</option>
                <option value="flex-column">Column (.flex-column)</option>
              </select>
            </div>

            <div class="control-group">
              <label>Justify Content</label>
              <select class="control-select" id="fl-justify-select">
                <option value="justify-content-start">Start (default)</option>
                <option value="justify-content-center">Center</option>
                <option value="justify-content-end">End</option>
                <option value="justify-content-between">Between</option>
                <option value="justify-content-around">Around</option>
              </select>
            </div>

            <div class="control-group">
              <label>Align Items</label>
              <select class="control-select" id="fl-align-select">
                <option value="align-items-start">Start</option>
                <option value="align-items-center" selected>Center</option>
                <option value="align-items-end">End</option>
                <option value="align-items-stretch">Stretch</option>
              </select>
            </div>

            <div class="control-group">
              <label>Row/Col Gap spacing</label>
              <select class="control-select" id="fl-gap-select">
                <option value="gap-0">Gap 0 (none)</option>
                <option value="gap-1">Gap 1 (4px)</option>
                <option value="gap-2">Gap 2 (8px)</option>
                <option value="gap-3" selected>Gap 3 (16px)</option>
                <option value="gap-4">Gap 4 (24px)</option>
              </select>
            </div>
          </div>

          <div class="p-3 border rounded mb-3 bg-light d-flex" id="flex-vis-container" style="min-height: 200px; transition: all 0.2s ease; background: var(--bg-dark) !important;">
            <div class="flex-sim-item">1</div>
            <div class="flex-sim-item" style="background:var(--accent-purple);">2</div>
            <div class="flex-sim-item" style="background:var(--color-success);">3</div>
          </div>
          
          <div class="p-3 border rounded text-center" style="background: var(--color-bg-code);">
            <code class="text-success" style="font-size: 1rem; font-family: var(--font-mono)" id="flex-vis-code">class="d-flex flex-row justify-content-start align-items-center gap-3"</code>
          </div>
        </div>
      </div>
    `;

    const inputs = ["fl-dir-select", "fl-justify-select", "fl-align-select", "fl-gap-select"];
    inputs.forEach(id => {
      targetEl.querySelector(`#${id}`).addEventListener("change", () => runFlexboxPlaygroundCalculation(targetEl));
    });

    runFlexboxPlaygroundCalculation(targetEl);
  }

  function runFlexboxPlaygroundCalculation(targetEl) {
    const dir = targetEl.querySelector("#fl-dir-select").value;
    const justify = targetEl.querySelector("#fl-justify-select").value;
    const align = targetEl.querySelector("#fl-align-select").value;
    const gap = targetEl.querySelector("#fl-gap-select").value;

    const flexBox = targetEl.querySelector("#flex-vis-container");
    const code = targetEl.querySelector("#flex-vis-code");

    flexBox.className = `p-3 border rounded d-flex ${dir} ${justify} ${align} ${gap}`;
    code.innerText = `class="d-flex ${dir} ${justify} ${align} ${gap}"`;
  }

  // Spacing Generator
  function renderSpacingGenerator(targetEl) {
    targetEl.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-card">
          <h4 class="mb-3">Spacing Utility Builder</h4>
          <p class="text-muted small">Configure margin and padding rules. Visual padding ranges are highlighted in purple, margins are in transparent overlays.</p>
          
          <div class="visualizer-controls">
            <div class="control-group">
              <label>Property Rule</label>
              <select class="control-select" id="sp-prop-select">
                <option value="p">Padding (p)</option>
                <option value="m">Margin (m)</option>
              </select>
            </div>

            <div class="control-group">
              <label>Sides modifier</label>
              <select class="control-select" id="sp-sides-select">
                <option value="">All sides</option>
                <option value="t">Top side (t)</option>
                <option value="b">Bottom side (b)</option>
                <option value="x">Horizontal sides (x)</option>
                <option value="y">Vertical sides (y)</option>
              </select>
            </div>

            <div class="control-group">
              <label>Spacing Scale Coefficient</label>
              <select class="control-select" id="sp-coef-select">
                <option value="0">0 (none)</option>
                <option value="1">1 (4px)</option>
                <option value="2">2 (8px)</option>
                <option value="3" selected>3 (16px)</option>
                <option value="4">4 (24px)</option>
                <option value="5">5 (48px)</option>
              </select>
            </div>
          </div>

          <div class="p-5 text-center border rounded mb-3 bg-light d-flex align-items-center justify-content-center" style="min-height: 180px; background: var(--bg-dark) !important;">
            <div class="spacing-block-sim" id="sp-vis-block" style="transition: all 0.15s ease;">
              <div class="spacing-block-inner">
                Inner Content Box
              </div>
            </div>
          </div>
          
          <div class="p-3 border rounded text-center" style="background: var(--color-bg-code);">
            <code class="text-success" style="font-size: 1.1rem; font-family: var(--font-mono)" id="sp-vis-code">class="p-3"</code>
          </div>
        </div>
      </div>
    `;

    const inputs = ["sp-prop-select", "sp-sides-select", "sp-coef-select"];
    inputs.forEach(id => {
      targetEl.querySelector(`#${id}`).addEventListener("change", () => runSpacingGeneratorCalculation(targetEl));
    });

    runSpacingGeneratorCalculation(targetEl);
  }

  function runSpacingGeneratorCalculation(targetEl) {
    const prop = targetEl.querySelector("#sp-prop-select").value;
    const sides = targetEl.querySelector("#sp-sides-select").value;
    const coef = targetEl.querySelector("#sp-coef-select").value;

    const block = targetEl.querySelector("#sp-vis-block");
    const code = targetEl.querySelector("#sp-vis-code");

    block.style.padding = "";
    block.style.margin = "";
    block.style.paddingTop = "";
    block.style.paddingBottom = "";
    block.style.paddingLeft = "";
    block.style.paddingRight = "";
    block.style.marginTop = "";
    block.style.marginBottom = "";
    block.style.marginLeft = "";
    block.style.marginRight = "";

    const sizes = { "0": 0, "1": 4, "2": 8, "3": 16, "4": 24, "5": 48 };
    const sizeVal = `${sizes[coef]}px`;
    const targetProp = prop === "p" ? "padding" : "margin";

    if (sides === "") {
      block.style[targetProp] = sizeVal;
    } else if (sides === "t") {
      block.style[targetProp + "Top"] = sizeVal;
    } else if (sides === "b") {
      block.style[targetProp + "Bottom"] = sizeVal;
    } else if (sides === "x") {
      block.style[targetProp + "Left"] = sizeVal;
      block.style[targetProp + "Right"] = sizeVal;
    } else if (sides === "y") {
      block.style[targetProp + "Top"] = sizeVal;
      block.style[targetProp + "Bottom"] = sizeVal;
    }

    const classLabel = `${prop}${sides}-${coef}`;
    code.innerText = `class="${classLabel}"`;
  }

  // Color Explorer
  function renderColorExplorer(targetEl) {
    targetEl.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-card">
          <h4 class="mb-3">Interactive Color Explorer</h4>
          
          <div class="visualizer-controls">
            <div class="control-group">
              <label>Styling Target Rule</label>
              <select class="control-select" id="c-target-select">
                <option value="bg">Background (.bg-*)</option>
                <option value="text">Text color (.text-*)</option>
                <option value="border">Border color (.border-*)</option>
              </select>
            </div>
            
            <div class="control-group">
              <label>Theme Context</label>
              <select class="control-select" id="c-theme-select">
                <option value="primary">Primary (Blue)</option>
                <option value="secondary">Secondary (Gray)</option>
                <option value="success">Success (Green)</option>
                <option value="danger">Danger (Red)</option>
                <option value="warning">Warning (Yellow)</option>
                <option value="info">Info (Cyan)</option>
                <option value="light">Light (Off-white)</option>
                <option value="dark">Dark (Dark Gray)</option>
              </select>
            </div>

            <div class="control-group">
              <label>Background Opacity Modifier</label>
              <select class="control-select" id="c-opacity-select">
                <option value="100">100% Opacity</option>
                <option value="75">75% Opacity</option>
                <option value="50">50% Opacity</option>
                <option value="25">25% Opacity</option>
              </select>
            </div>
          </div>

          <div class="p-5 text-center rounded border mb-3 d-flex align-items-center justify-content-center" id="color-vis-demobox" style="min-height: 140px; transition: all 0.2s ease;">
            <strong style="font-size: 1.15rem;" id="color-vis-label">Styled Demo Element</strong>
          </div>
          
          <div class="p-3 border rounded text-center" style="background: var(--color-bg-code);">
            <code class="text-success" style="font-size: 1rem; font-family: var(--font-mono)" id="color-vis-code">class="bg-primary bg-opacity-100"</code>
          </div>
        </div>
      </div>
    `;

    const inputs = ["c-target-select", "c-theme-select", "c-opacity-select"];
    inputs.forEach(id => {
      targetEl.querySelector(`#${id}`).addEventListener("change", () => runColorExplorerCalculation(targetEl));
    });

    runColorExplorerCalculation(targetEl);
  }

  function runColorExplorerCalculation(targetEl) {
    const target = targetEl.querySelector("#c-target-select").value;
    const theme = targetEl.querySelector("#c-theme-select").value;
    const opacity = targetEl.querySelector("#c-opacity-select").value;

    const demoBox = targetEl.querySelector("#color-vis-demobox");
    const codeLine = targetEl.querySelector("#color-vis-code");
    const label = targetEl.querySelector("#color-vis-label");

    demoBox.style.background = "";
    demoBox.style.color = "";
    demoBox.style.borderColor = "";
    demoBox.className = "p-5 text-center rounded border d-flex align-items-center justify-content-center";

    const colors = {
      primary: "rgb(13, 110, 253)",
      secondary: "rgb(108, 117, 125)",
      success: "rgb(25, 135, 84)",
      danger: "rgb(220, 53, 69)",
      warning: "rgb(255, 193, 7)",
      info: "rgb(13, 202, 240)",
      light: "rgb(248, 249, 250)",
      dark: "rgb(33, 37, 41)"
    };

    const isLightText = theme === "warning" || theme === "info" || theme === "light";
    const selectedColor = colors[theme];
    let classStr = "";

    if (target === "bg") {
      const alphaVal = parseInt(opacity) / 100;
      demoBox.style.backgroundColor = selectedColor.replace("rgb", "rgba").replace(")", `, ${alphaVal})`);
      demoBox.style.color = isLightText && alphaVal > 0.4 ? "#000" : "#fff";
      classStr = `bg-${theme}`;
      if (opacity !== "100") {
        classStr += ` bg-opacity-${opacity}`;
      }
    } else if (target === "text") {
      demoBox.style.color = selectedColor;
      demoBox.style.backgroundColor = theme === "light" ? "#212529" : "#fafafa";
      classStr = `text-${theme}`;
    } else if (target === "border") {
      demoBox.style.borderColor = selectedColor;
      demoBox.style.borderWidth = "3px";
      demoBox.style.backgroundColor = "#fafafa";
      demoBox.style.color = "#161616";
      classStr = `border border-3 border-${theme}`;
    }

    codeLine.innerText = `class="${classStr}"`;
    label.innerText = `Bootstrap class="${classStr}"`;
  }

  // Typography Visualizer
  function renderTypographyVisualizer(targetEl) {
    targetEl.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-card">
          <h4 class="mb-3">Interactive Typography Builder</h4>
          
          <div class="component-builder-grid">
            <!-- Controls Pane -->
            <div class="comp-controls-pane">
              <div class="control-group">
                <label>Heading / Text Class</label>
                <select class="control-select" id="t-font-select">
                  <option value="h1">Heading 1 (.h1)</option>
                  <option value="h2">Heading 2 (.h2)</option>
                  <option value="h3">Heading 3 (.h3)</option>
                  <option value="h4">Heading 4 (.h4)</option>
                  <option value="h5">Heading 5 (.h5)</option>
                  <option value="h6">Heading 6 (.h6)</option>
                  <option value="display-1">Display 1 (Huge)</option>
                  <option value="display-2">Display 2</option>
                  <option value="display-3">Display 3</option>
                  <option value="display-4">Display 4</option>
                  <option value="display-5">Display 5</option>
                  <option value="display-6">Display 6</option>
                  <option value="lead" selected>Lead Paragraph (.lead)</option>
                  <option value="p">Normal Paragraph (&lt;p&gt;)</option>
                  <option value="small">Small Text (.small)</option>
                </select>
              </div>

              <div class="control-group">
                <label>Text Align (.text-*)</label>
                <select class="control-select" id="t-align-select">
                  <option value="text-start" selected>Left (text-start)</option>
                  <option value="text-center">Centered (text-center)</option>
                  <option value="text-end">Right (text-end)</option>
                </select>
              </div>

              <div class="control-group">
                <label>Font Weight (.fw-*)</label>
                <select class="control-select" id="t-weight-select">
                  <option value="fw-light">Light (fw-light)</option>
                  <option value="fw-lighter">Lighter (fw-lighter)</option>
                  <option value="fw-normal" selected>Normal (fw-normal)</option>
                  <option value="fw-semibold">Semibold (fw-semibold)</option>
                  <option value="fw-bold">Bold (fw-bold)</option>
                  <option value="fw-bolder">Bolder (fw-bolder)</option>
                </select>
              </div>

              <div class="control-group">
                <label>Font Style (.fst-*)</label>
                <select class="control-select" id="t-style-select">
                  <option value="fst-normal" selected>Normal (fst-normal)</option>
                  <option value="fst-italic">Italic (fst-italic)</option>
                </select>
              </div>

              <div class="control-group">
                <label>Text Color (.text-*)</label>
                <select class="control-select" id="t-color-select">
                  <option value="text-primary" selected>Primary (Blue)</option>
                  <option value="text-secondary">Secondary (Gray)</option>
                  <option value="text-success">Success (Green)</option>
                  <option value="text-danger">Danger (Red)</option>
                  <option value="text-warning">Warning (Yellow)</option>
                  <option value="text-info">Info (Cyan)</option>
                  <option value="text-dark">Dark (Charcoal)</option>
                  <option value="text-muted">Muted (Light Gray)</option>
                </select>
              </div>

              <div class="control-group">
                <label>Text Transform (.text-*)</label>
                <select class="control-select" id="t-transform-select">
                  <option value="" selected>None</option>
                  <option value="text-uppercase">Uppercase</option>
                  <option value="text-lowercase">Lowercase</option>
                  <option value="text-capitalize">Capitalize</option>
                </select>
              </div>

              <div class="control-group">
                <label>Line Height (.lh-*)</label>
                <select class="control-select" id="t-lh-select">
                  <option value="lh-1">Tight (lh-1)</option>
                  <option value="lh-sm">Small (lh-sm)</option>
                  <option value="lh-base" selected>Base (lh-base)</option>
                  <option value="lh-lg">Large (lh-lg)</option>
                </select>
              </div>
            </div>

            <!-- Preview Pane -->
            <div class="comp-preview-pane">
              <h6 class="text-muted small fw-bold mb-3 uppercase" style="letter-spacing: 0.5px; font-size: 0.72rem;">Live Output Preview</h6>
              <div class="p-4 border rounded mb-3 bg-light dark-theme-bg" style="min-height: 180px; display: flex; align-items: center; justify-content: stretch;">
                <div id="typo-vis-preview" style="width: 100%; transition: all 0.15s ease;">
                  Bootstrap typography makes web text look extremely professional, clean, and highly readable!
                </div>
              </div>
              
              <div class="position-relative">
                <pre class="bg-dark text-white rounded p-3 mb-2" style="font-size: 0.85rem; font-family: var(--font-mono); overflow-x: auto; white-space: pre-wrap;"><code class="text-success" id="typo-vis-code"></code></pre>
                <button class="btn btn-sm btn-outline-light position-absolute" id="btn-typo-copy" style="top: 10px; right: 10px; font-size: 0.75rem; background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.15);">📋 Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const selectIds = [
      "t-font-select",
      "t-align-select",
      "t-weight-select",
      "t-style-select",
      "t-color-select",
      "t-transform-select",
      "t-lh-select"
    ];
    
    selectIds.forEach(id => {
      targetEl.querySelector(`#${id}`).addEventListener("change", () => runTypographyCalculation(targetEl));
    });

    targetEl.querySelector("#btn-typo-copy").addEventListener("click", () => {
      const codeText = targetEl.querySelector("#typo-vis-code").innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        const copyBtn = targetEl.querySelector("#btn-typo-copy");
        copyBtn.innerText = "Copied! ✔";
        setTimeout(() => {
          copyBtn.innerText = "📋 Copy";
        }, 1500);
      });
    });

    runTypographyCalculation(targetEl);
  }

  function runTypographyCalculation(targetEl) {
    const size = targetEl.querySelector("#t-font-select").value;
    const align = targetEl.querySelector("#t-align-select").value;
    const weight = targetEl.querySelector("#t-weight-select").value;
    const style = targetEl.querySelector("#t-style-select").value;
    const color = targetEl.querySelector("#t-color-select").value;
    const transform = targetEl.querySelector("#t-transform-select").value;
    const lh = targetEl.querySelector("#t-lh-select").value;

    const preview = targetEl.querySelector("#typo-vis-preview");
    const code = targetEl.querySelector("#typo-vis-code");

    let tag = "p";
    if (size.startsWith("h") && size.length === 2) {
      tag = size;
    }

    let classes = [];
    if (size && !size.startsWith("h")) classes.push(size);
    if (align) classes.push(align);
    if (weight) classes.push(weight);
    if (style && style !== "fst-normal") classes.push(style);
    if (color) classes.push(color);
    if (transform) classes.push(transform);
    if (lh && lh !== "lh-base") classes.push(lh);

    const classStr = classes.join(" ");
    const classAttr = classStr ? ` class="${classStr}"` : "";

    preview.innerHTML = `<${tag}${classAttr}>Bootstrap typography makes web text look extremely professional, clean, and highly readable!</${tag}>`;
    code.innerText = `<${tag}${classAttr}>Bootstrap Typography</${tag}>`;
  }

  // Button Builder
  function renderButtonBuilder(targetEl) {
    targetEl.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-card">
          <h4 class="mb-3">Interactive Button Builder</h4>
          
          <div class="component-builder-grid">
            <div class="comp-controls-pane">
              <div class="control-group">
                <label>Variant Theme</label>
                <select class="control-select" id="btn-variant-select">
                  <option value="primary">Primary (Blue)</option>
                  <option value="success">Success (Green)</option>
                  <option value="danger">Danger (Red)</option>
                  <option value="warning">Warning (Yellow)</option>
                  <option value="dark">Dark (Dark Gray)</option>
                  <option value="info">Info (Cyan)</option>
                </select>
              </div>

              <div class="control-group">
                <label>Button Size</label>
                <select class="control-select" id="btn-size-select">
                  <option value="default">Default size</option>
                  <option value="btn-sm">Small (btn-sm)</option>
                  <option value="btn-lg">Large (btn-lg)</option>
                </select>
              </div>

              <div class="control-group">
                <label>Modifier classes</label>
                <div class="d-flex flex-column gap-2 text-start small">
                  <label><input type="checkbox" id="btn-chk-outline"> Outline Option (.btn-outline-*)</label>
                  <label><input type="checkbox" id="btn-chk-shadow" checked> Add shadow (.shadow-sm)</label>
                  <label><input type="checkbox" id="btn-chk-pill"> Pill shape (.rounded-pill)</label>
                  <label><input type="checkbox" id="btn-chk-sharp"> Sharp edges (.rounded-0)</label>
                </div>
              </div>
            </div>

            <div class="comp-preview-pane">
              <div id="btn-render-output" class="mb-4">
                <!-- Renders button visually -->
              </div>
            </div>
          </div>

          <div class="p-3 mt-3 border rounded d-flex justify-content-between align-items-center" style="background: var(--color-bg-code);">
            <pre class="m-0 p-0 border-0" style="background:transparent !important;"><code class="text-success" style="font-size: 0.9rem;" id="btn-code-output">&lt;button class="btn btn-primary"&gt;Action&lt;/button&gt;</code></pre>
            <button class="header-btn" id="btn-copy-action">📋 Copy</button>
          </div>
        </div>
      </div>
    `;

    const triggers = ["btn-variant-select", "btn-size-select", "btn-chk-outline", "btn-chk-shadow", "btn-chk-pill", "btn-chk-sharp"];
    triggers.forEach(id => {
      targetEl.querySelector(`#${id}`).addEventListener("change", () => runButtonBuilderCalculation(targetEl));
    });

    targetEl.querySelector("#btn-copy-action").addEventListener("click", () => {
      const codeText = targetEl.querySelector("#btn-code-output").innerText;
      navigator.clipboard.writeText(codeText);
      const copyBtn = targetEl.querySelector("#btn-copy-action");
      copyBtn.innerText = "✅ Copied!";
      setTimeout(() => copyBtn.innerText = "📋 Copy", 1500);
    });

    runButtonBuilderCalculation(targetEl);
  }

  function runButtonBuilderCalculation(targetEl) {
    const variant = targetEl.querySelector("#btn-variant-select").value;
    const size = targetEl.querySelector("#btn-size-select").value;
    const outline = targetEl.querySelector("#btn-chk-outline").checked;
    const shadow = targetEl.querySelector("#btn-chk-shadow").checked;
    const pill = targetEl.querySelector("#btn-chk-pill").checked;
    const sharp = targetEl.querySelector("#btn-chk-sharp").checked;

    const renderBox = targetEl.querySelector("#btn-render-output");
    const codeBox = targetEl.querySelector("#btn-code-output");

    let classes = ["btn"];
    if (outline) {
      classes.push(`btn-outline-${variant}`);
    } else {
      classes.push(`btn-${variant}`);
    }
    if (size !== "default") classes.push(size);
    if (shadow) classes.push("shadow-sm");
    if (pill) classes.push("rounded-pill");
    if (sharp) classes.push("rounded-0");

    const classStr = classes.join(" ");
    const finalHtml = `<button class="${classStr}">Action Button</button>`;

    renderBox.innerHTML = finalHtml;
    codeBox.innerText = finalHtml;
  }

  // Card Builder
  function renderCardBuilder(targetEl) {
    targetEl.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-card">
          <h4 class="mb-3">Interactive Card Component Builder</h4>
          
          <div class="component-builder-grid">
            <div class="comp-controls-pane">
              <div class="control-group">
                <label>Card Elements</label>
                <div class="d-flex flex-column gap-2 text-start small">
                  <label><input type="checkbox" id="card-chk-img" checked> Include Image (.card-img-top)</label>
                  <label><input type="checkbox" id="card-chk-hdr"> Include Header (.card-header)</label>
                  <label><input type="checkbox" id="card-chk-footer"> Include Footer (.card-footer)</label>
                  <label><input type="checkbox" id="card-chk-btn" checked> Include Button inside body</label>
                  <label><input type="checkbox" id="card-chk-badge"> Include Badges</label>
                  <label><input type="checkbox" id="card-chk-overlay"> Image Overlay mode (.card-img-overlay)</label>
                </div>
              </div>

              <div class="control-group">
                <label>Shadow Depth</label>
                <select class="control-select" id="card-shadow-select">
                  <option value="shadow-none">No shadow</option>
                  <option value="shadow-sm" selected>Small shadow (.shadow-sm)</option>
                  <option value="shadow">Medium shadow (.shadow)</option>
                  <option value="shadow-lg">Large shadow (.shadow-lg)</option>
                </select>
              </div>
            </div>

            <div class="comp-preview-pane" style="background:#cbd5e1; align-items:center; justify-content:center;">
              <div id="card-render-output" style="width: 280px;">
                <!-- Card renders dynamically -->
              </div>
            </div>
          </div>

          <div class="p-3 mt-3 border rounded d-flex justify-content-between align-items-center" style="background: var(--color-bg-code);">
            <pre class="m-0 p-0 border-0" style="background:transparent !important; overflow-x: auto; max-width: 80%;"><code class="text-success" style="font-size: 0.85rem;" id="card-code-output">Generating code...</code></pre>
            <button class="header-btn" id="btn-card-copy">📋 Copy</button>
          </div>
        </div>
      </div>
    `;

    const inputs = ["card-chk-img", "card-chk-hdr", "card-chk-footer", "card-chk-btn", "card-chk-badge", "card-chk-overlay", "card-shadow-select"];
    inputs.forEach(id => {
      targetEl.querySelector(`#${id}`).addEventListener("change", () => runCardBuilderCalculation(targetEl));
    });

    targetEl.querySelector("#btn-card-copy").addEventListener("click", () => {
      const codeText = targetEl.querySelector("#card-code-output").innerText;
      navigator.clipboard.writeText(codeText);
      const copyBtn = targetEl.querySelector("#btn-card-copy");
      copyBtn.innerText = "✅ Copied!";
      setTimeout(() => copyBtn.innerText = "📋 Copy", 1500);
    });

    runCardBuilderCalculation(targetEl);
  }

  function runCardBuilderCalculation(targetEl) {
    const showImg = targetEl.querySelector("#card-chk-img").checked;
    const showHdr = targetEl.querySelector("#card-chk-hdr").checked;
    const showFooter = targetEl.querySelector("#card-chk-footer").checked;
    const showBtn = targetEl.querySelector("#card-chk-btn").checked;
    const showBadge = targetEl.querySelector("#card-chk-badge").checked;
    const overlay = targetEl.querySelector("#card-chk-overlay").checked;
    const shadow = targetEl.querySelector("#card-shadow-select").value;

    const renderBox = targetEl.querySelector("#card-render-output");
    const codeBox = targetEl.querySelector("#card-code-output");

    let cardHtml = `<div class="card ${shadow}">\n`;
    if (showHdr && !overlay) {
      cardHtml += `  <div class="card-header fw-bold">Card Header</div>\n`;
    }
    if (showImg) {
      cardHtml += `  <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=320&auto=format&fit=crop&q=60" class="card-img-top" alt="Card Header Image">\n`;
    }

    if (overlay && showImg) {
      cardHtml += `  <div class="card-img-overlay text-white d-flex flex-column justify-content-end bg-dark bg-opacity-25">\n`;
      cardHtml += `    <h5 class="card-title fw-bold">Card Title Overlay</h5>\n`;
      cardHtml += `    <p class="card-text small">This text sits on top of images.</p>\n`;
      if (showBtn) cardHtml += `    <button class="btn btn-sm btn-primary">Overlay Action</button>\n`;
      cardHtml += `  </div>\n`;
    } else {
      cardHtml += `  <div class="card-body">\n`;
      if (showBadge) cardHtml += `    <span class="badge bg-primary mb-2">Featured</span>\n`;
      cardHtml += `    <h5 class="card-title fw-bold">Standard Card Title</h5>\n`;
      cardHtml += `    <p class="card-text text-muted small">Standard responsive content description goes here.</p>\n`;
      if (showBtn) cardHtml += `    <a href="#" class="btn btn-primary w-100">Go Somewhere</a>\n`;
      cardHtml += `  </div>\n`;
    }

    if (showFooter && !overlay) {
      cardHtml += `  <div class="card-footer text-muted small">2 days ago</div>\n`;
    }
    cardHtml += `</div>`;

    renderBox.innerHTML = cardHtml;
    codeBox.innerText = cardHtml;
  }

  // Navbar Builder
  function renderNavbarBuilder(targetEl) {
    targetEl.innerHTML = `
      <div class="visualizer-container">
        <div class="visualizer-card">
          <h4 class="mb-3">Interactive Navbar Component Builder</h4>
          
          <div class="visualizer-controls">
            <div class="control-group">
              <label>Navbar Brand Name</label>
              <input type="text" class="control-select p-2" id="nav-brand-val" value="BootstrapMaster" style="border: 1px solid var(--border-color); border-radius: 6px;">
            </div>

            <div class="control-group">
              <label>Color Theme</label>
              <select class="control-select" id="nav-theme-select">
                <option value="navbar-dark bg-dark" selected>Dark Theme (navbar-dark bg-dark)</option>
                <option value="navbar-light bg-light">Light Theme (navbar-light bg-light)</option>
                <option value="navbar-dark bg-primary">Primary Theme (navbar-dark bg-primary)</option>
              </select>
            </div>

            <div class="control-group">
              <label>Expand Viewport Width</label>
              <select class="control-select" id="nav-expand-select">
                <option value="navbar-expand-lg" selected>Desktop LG (.navbar-expand-lg)</option>
                <option value="navbar-expand-md">Tablet MD (.navbar-expand-md)</option>
                <option value="navbar-expand-sm">Mobile SM</option>
              </select>
            </div>

            <div class="control-group">
              <label>Layout Position</label>
              <select class="control-select" id="nav-pos-select">
                <option value="" selected>Default (Inline Flow)</option>
                <option value="sticky-top">Sticky Top (.sticky-top)</option>
                <option value="fixed-top">Fixed Top (.fixed-top)</option>
              </select>
            </div>
          </div>

          <div class="p-3 border rounded mb-3 bg-light dark-theme-bg" style="min-height: 100px; display: flex; align-items: center; justify-content: stretch;">
            <div id="nav-render-output" style="width: 100%;">
              <!-- Navbar renders visually -->
            </div>
          </div>
          
          <div class="p-3 border rounded d-flex justify-content-between align-items-center" style="background: var(--color-bg-code);">
            <pre class="m-0 p-0 border-0" style="background:transparent !important; overflow-x: auto; max-width: 80%;"><code class="text-success" style="font-size: 0.85rem;" id="nav-code-output">Generating code...</code></pre>
            <button class="header-btn" id="btn-nav-copy">📋 Copy</button>
          </div>
        </div>
      </div>
    `;

    const inputs = ["nav-brand-val", "nav-theme-select", "nav-expand-select", "nav-pos-select"];
    inputs.forEach(id => {
      targetEl.querySelector(`#${id}`).addEventListener("input", () => runNavbarBuilderCalculation(targetEl));
      targetEl.querySelector(`#${id}`).addEventListener("change", () => runNavbarBuilderCalculation(targetEl));
    });

    targetEl.querySelector("#btn-nav-copy").addEventListener("click", () => {
      const codeText = targetEl.querySelector("#nav-code-output").innerText;
      navigator.clipboard.writeText(codeText);
      const copyBtn = targetEl.querySelector("#btn-nav-copy");
      copyBtn.innerText = "✅ Copied!";
      setTimeout(() => copyBtn.innerText = "📋 Copy", 1500);
    });

    runNavbarBuilderCalculation(targetEl);
  }

  function runNavbarBuilderCalculation(targetEl) {
    const brand = targetEl.querySelector("#nav-brand-val").value || "Brand";
    const theme = targetEl.querySelector("#nav-theme-select").value;
    const expand = targetEl.querySelector("#nav-expand-select").value;
    const pos = targetEl.querySelector("#nav-pos-select").value;

    const renderBox = targetEl.querySelector("#nav-render-output");
    const codeBox = targetEl.querySelector("#nav-code-output");

    let posClass = pos ? ` ${pos}` : "";
    let navbarHtml = `<nav class="navbar ${expand} ${theme}${posClass} rounded p-2">\n`;
    navbarHtml += `  <div class="container-fluid d-flex justify-content-between align-items-center">\n`;
    navbarHtml += `    <a class="navbar-brand fw-bold" href="#">${brand}</a>\n`;
    navbarHtml += `    <button class="navbar-toggler" type="button" aria-label="Toggle navigation" style="border: 1px solid rgba(255,255,255,0.15); padding: 4px 8px; border-radius: 4px; background: transparent;">\n`;
    navbarHtml += `      <span class="navbar-toggler-icon" style="filter: ${theme.includes("navbar-dark") ? "invert(1)" : "none"}; display: inline-block; width: 1.5em; height: 1.5em; vertical-align: middle; background-image: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.55)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e&quot;); background-repeat: no-repeat; background-position: center; background-size: 100%;"></span>\n`;
    navbarHtml += `    </button>\n`;
    navbarHtml += `  </div>\n`;
    navbarHtml += `</nav>`;

    renderBox.innerHTML = navbarHtml;
    codeBox.innerText = navbarHtml;
  }

  // --- RESPONSIVE SIDEBAR TOGGLE HELPERS ---
  function toggleSidebar() {
    const isMobile = window.innerWidth < 992;
    if (isMobile) {
      asideEl.classList.toggle("open");
      backdropEl.classList.toggle("active");
    } else {
      asideEl.classList.toggle("collapsed");
    }
    updateSidebarToggleButtonText();
  }

  function updateSidebarToggleButtonText() {
    const isMobile = window.innerWidth < 992;
    const isCollapsed = asideEl.classList.contains("collapsed");
    
    if (isMobile) {
      btnToggleSidebar.innerHTML = `<i data-lucide="menu"></i> <span>Menu</span>`;
    } else {
      if (isCollapsed) {
        btnToggleSidebar.innerHTML = `<i data-lucide="eye"></i> <span>Show Menu</span>`;
      } else {
        btnToggleSidebar.innerHTML = `<i data-lucide="eye-off"></i> <span>Hide Menu</span>`;
      }
    }
    safeCreateIcons();
  }

  // --- GENERAL APP EVENT LISTENERS ---
  function setupEventListeners() {
    // Navigation tabs
    tabTheoryBtn.addEventListener("click", () => switchTab("theory"));
    tabVisualizerBtn.addEventListener("click", () => switchTab("visualizer"));
    tabPlaygroundBtn.addEventListener("click", () => switchTab("playground"));
    tabQuizBtn.addEventListener("click", () => switchTab("quiz"));
    tabNotesBtn.addEventListener("click", () => switchTab("notes"));

    // Code execution
    btnRunCode.addEventListener("click", runPlaygroundCode);

    // Responsive Simulator size selectors
    document.querySelectorAll(".sim-size-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const size = e.currentTarget.getAttribute("data-size");
        document.querySelectorAll(".sim-size-btn").forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        previewIframe.className = `preview-iframe device-${size}`;
      });
    });

    // Code editor tab-indent support
    codeEditor.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = codeEditor.selectionStart;
        const end = codeEditor.selectionEnd;
        codeEditor.value = codeEditor.value.substring(0, start) + "  " + codeEditor.value.substring(end);
        codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
      }
    });

    // Left/Right pagination
    btnPrev.addEventListener("click", () => {
      if (currentSlideIndex > 0) {
        loadSlide(currentSlideIndex - 1);
      }
    });

    btnNext.addEventListener("click", () => {
      if (currentSlideIndex < slidesData.length - 1) {
        loadSlide(currentSlideIndex + 1);
      }
    });

    // Theme toggler
    btnThemeToggle.addEventListener("click", toggleTheme);

    // Sidebar search filter
    searchInput.addEventListener("input", (e) => {
      searchVal = e.target.value;
      renderSidebarNav();
    });

    // Mobile drawer sidebar toggle
    btnToggleSidebar.addEventListener("click", toggleSidebar);
    
    backdropEl.addEventListener("click", () => {
      asideEl.classList.remove("open");
      backdropEl.classList.remove("active");
    });

    // Fullscreen control
    btnFullscreen.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
          alert(`Error attempting to enable fullscreen mode: ${err.message}`);
        });
        btnFullscreen.innerHTML = `<i data-lucide="minimize"></i> <span>Windowed</span>`;
      } else {
        document.exitFullscreen();
        btnFullscreen.innerHTML = `<i data-lucide="maximize"></i> <span>Fullscreen</span>`;
      }
      safeCreateIcons();
    });

    // Window resize handler
    window.addEventListener("resize", () => {
      updateSidebarToggleButtonText();
      if (window.innerWidth >= 992) {
        asideEl.classList.remove("open");
        backdropEl.classList.remove("active");
      }
    });

    // Keyboard controls
    document.addEventListener("keydown", (e) => {
      if (document.activeElement === codeEditor || document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === "Space") {
        e.preventDefault();
        if (currentSlideIndex < slidesData.length - 1) {
          loadSlide(currentSlideIndex + 1);
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (currentSlideIndex > 0) {
          loadSlide(currentSlideIndex - 1);
        }
      }
    });

    // Resize preview iframe dynamically on screen resizing
    window.addEventListener("resize", () => {
      if (activeTab === "playground") {
        try {
          const iframe = document.getElementById("preview-iframe");
          if (iframe) {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const h = iframeDoc.documentElement.scrollHeight || iframeDoc.body.scrollHeight;
            iframe.style.setProperty('height', (h + 35) + 'px', 'important');
          }
        } catch(e) {}
      }
    });
  }

  function initApp() {
    initTheme();
    renderSidebarNav();
    loadSlide(0);
    setupEventListeners();
    updateProgress();
    updateSidebarToggleButtonText();
  }

  initApp();
});
