/* =========================================================
   PSYCHOSCREEN
   PT 179 - Multimodal AI System for Pschological Disorder Prediction 
   Text-based educational screening prototype
   ========================================================= */


/* =========================
   1. GLOBAL HELPERS & STATE
   ========================= */

const $ = (selector, root = document) =>
  root.querySelector(selector);

const state = {
  view: "cover",
  input: "",
  report: null,
  isAnalysing: false,
  clockTimer: null
};


/* =========================
   2. MAIN RENDER FUNCTION
   ========================= */

function render() {

  const app = $("#app");

  if (!app) return;

  if (state.clockTimer) {
    clearInterval(state.clockTimer);
    state.clockTimer = null;
  }

  if (state.view === "cover") {
    app.innerHTML = coverView();
  }

  else if (state.view === "assessment") {
    app.innerHTML = assessmentView();
  }

  else if (state.view === "report") {
    app.innerHTML = reportView();
  }

  bindEvents();

  if (state.view !== "cover") {
    startClock();
  }
}


/* =========================
   3. EVENT HANDLERS
   ========================= */

function bindEvents() {

  /* Start project */

  document.querySelectorAll("[data-start]").forEach(button => {

    button.addEventListener("click", () => {

      state.view = "assessment";
      state.input = "";
      state.report = null;

      render();

    });

  });


  /* Back to home */

  document.querySelectorAll("[data-home]").forEach(button => {

    button.addEventListener("click", () => {

      state.view = "cover";
      state.report = null;

      render();

    });

  });


  /* Text input */

  const textarea = $("#user-input");

  if (textarea) {

    textarea.addEventListener("input", event => {

      state.input = event.target.value;

      const counter = $("#character-count");

      if (counter) {
        counter.textContent = `${state.input.length} characters`;
      }

    });

  }


  /* Analyse button */

  const analyseButton = $("#analyse-button");

  if (analyseButton) {

    analyseButton.addEventListener("click", analyseText);

  }


  /* Reset assessment */

  document.querySelectorAll("[data-reset]").forEach(button => {

    button.addEventListener("click", () => {

      state.input = "";
      state.report = null;
      state.view = "assessment";

      render();

    });

  });


  /* Print report */

  const printButton = $("#print-report");

  if (printButton) {

    printButton.addEventListener("click", () => {
      window.print();
    });

  }

}


/* =========================
   4. DIGITAL CLOCK
   ========================= */

function startClock() {

  const updateClock = () => {

    const clock = $("#digital-clock");

    if (!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });

  };

  updateClock();

  state.clockTimer = setInterval(updateClock, 1000);

}


/* =========================
   5. DASHBOARD HEADER
   ========================= */

function dashboardHeader() {

  return `

    <header class="dashboard-header">

      <div class="dashboard-brand">

        <div class="brand-icon">
          PS
        </div>

        <div>
          <strong>PSYCHOSCREEN</strong>
          <small>PROJECT PT 179</small>
        </div>

      </div>


      <div class="dashboard-status">

        <span class="status-dot"></span>

        LOCAL DEMO · PHRASE MATCHING

      </div>


      <div class="digital-clock" id="digital-clock">
        --:--:--
      </div>

    </header>

  `;

}


/* =========================
   6. COVER PAGE
   ========================= */

function coverView() {

  const teamMarkup = TEAM.length

    ? TEAM.map((person, index) => {

        const nameParts = person.name.trim().split(/\s+/);

        const initials = (
          nameParts[0][0] +
          nameParts[nameParts.length - 1][0]
        ).toUpperCase();

        return `

          <article class="member-card">

            <div class="member-top">

              <span class="member-number">
                TEAM MEMBER 0${index + 1}
              </span>

              <span class="member-symbol">
                ${escapeHtml(initials)}
              </span>

            </div>


            <div class="member-info">

              <h3>
                ${escapeHtml(person.name)}
              </h3>

              <p>
                ${escapeHtml(person.id || "")}
              </p>

            </div>

          </article>

        `;

      }).join("")

    : `<p>School of Computer Science & Engineering</p>`;


  return `

    <main class="cover page-wrap showcase-cover">


      <!-- NAVIGATION -->

      <header class="showcase-nav">

        <div class="showcase-brand">

          <span class="brand-icon">
            PS
          </span>

          <div>

            <strong>PSYCHOSCREEN</strong>

            <small>PROJECT PT 179</small>

          </div>

        </div>


        <span class="session-label">
          B.TECH MAJOR PROJECT · 2026–27
        </span>

      </header>



      <!-- HERO SECTION -->

      <section class="showcase-hero">

        <div class="hero-badge">

          <span class="hero-dot"></span>

          SCHOOL OF COMPUTER SCIENCE & ENGINEERING

        </div>


        <p class="showcase-kicker">
          AN EDUCATIONAL RESEARCH PROTOTYPE
        </p>


        <h1>

          Psychological Disorder

          <span>Prediction System</span>

        </h1>


        <p class="showcase-description">

          A text-based research prototype exploring
          psychological screening through language
          patterns and educational insights.

        </p>


        <button class="primary showcase-button" data-start>

          Explore the Project

          <span>→</span>

        </button>


        <p class="showcase-disclaimer">

          Screening support only · Not a clinical diagnosis

        </p>

      </section>



      <!-- PROJECT HIGHLIGHTS -->

      <section class="project-highlights">


        <article>

          <span>25</span>

          <p>Reference Categories</p>

        </article>


        <article>

          <span>TEXT</span>

          <p>Input Modality</p>

        </article>


        <article>

          <span>PT 179</span>

          <p>Project Identification</p>

        </article>


      </section>



      <!-- TEAM SECTION -->

      <section class="team-showcase">


        <div class="team-heading">

          <div>

            <p class="showcase-kicker">
              THE PEOPLE BEHIND THE PROJECT
            </p>

            <h2>
              Meet Our <span>Team.</span>
            </h2>

          </div>


          <p class="team-caption">

            A collaborative B.Tech major project
            by the School of Computer Science
            & Engineering.

          </p>

        </div>



        <div class="team-showcase-grid">

          ${teamMarkup}

        </div>


      </section>



      <!-- PROJECT WORKFLOW -->

      <section class="showcase-process">


        <p class="showcase-kicker">
          PROJECT OVERVIEW
        </p>


        <div class="process-grid">


          <article>

            <span>01 / EXPRESS</span>

            <h3>Written Input</h3>

            <p>

              Users describe their thoughts
              and feelings in their own words.

            </p>

          </article>



          <article>

            <span>02 / EXPLORE</span>

            <h3>Text Analysis</h3>

            <p>

              The prototype checks for
              predefined language patterns.

            </p>

          </article>



          <article>

            <span>03 / REFLECT</span>

            <h3>Screening Summary</h3>

            <p>

              Relevant educational information
              and reflection topics are presented.

            </p>

          </article>


        </div>

      </section>



      <!-- PROJECT GUIDE -->

      <footer class="showcase-guide">


        <div>

          <span class="guide-label">
            PROJECT GUIDE
          </span>

          <h3>Mr. Sushant Kumar</h3>

          <p>
            Department of Computer Science & Engineering
          </p>

        </div>


        <div class="guide-mark">

          IILM UNIVERSITY

          <span>SESSION 2026–27</span>

        </div>


      </footer>


    </main>

  `;

}


/* =========================
   7. ASSESSMENT PAGE
   ========================= */

function assessmentView() {

  return `

    <main class="inner-page">

      ${dashboardHeader()}


      <section class="assessment-container">


        <div class="assessment-heading">

          <p class="eyebrow">
            PT 179 / TEXT ANALYSIS
          </p>

          <h1 class="inner-title">
            Express your thoughts.
          </h1>

          <p class="lead">

            Write about what has been on your mind.
            This prototype will look for predefined
            language patterns and present educational
            information.

          </p>

        </div>



        <div class="assessment-card">


          <div class="card-heading">

            <div>

              <span class="small-label">
                STEP 01
              </span>

              <h2>Your written reflection</h2>

            </div>


            <span class="input-tag">
              TEXT INPUT
            </span>

          </div>



          <textarea

            id="user-input"

            placeholder="Start writing here... Describe your thoughts, feelings, or experiences in your own words."

            maxlength="5000"

          >${escapeHtml(state.input)}</textarea>



          <div class="textarea-footer">

            <span>
              Your reflection is processed in this local demo.
            </span>

            <span id="character-count">
              ${state.input.length} characters
            </span>

          </div>



          <div class="assessment-actions">


            <button
              class="secondary"
              data-home
              type="button"
            >
              Back to Home
            </button>


            <button
              class="primary"
              id="analyse-button"
              type="button"
            >
              Analyse Text →
            </button>


          </div>


          <p class="privacy-note">

            Educational prototype only.
            It does not provide a medical diagnosis.

          </p>


        </div>



        <div class="reflection-section">

          <p class="small-label">
            REFLECTION AREAS
          </p>

          <div class="reflection-grid">

            ${REFLECTION_AREAS.map((area, index) => `

              <article class="reflection-item">

                <span>0${index + 1}</span>

                <h3>
                  ${escapeHtml(area.name || area.title || "Reflection")}
                </h3>

                <p>
                  ${escapeHtml(area.description || area.text || "")}
                </p>

              </article>

            `).join("")}

          </div>

        </div>


      </section>

    </main>

  `;

}


/* =========================
   8. TEXT ANALYSIS
   ========================= */

async function analyseText() {

  if (state.isAnalysing) return;


  const text = normalize(state.input);


  if (text.length < 20) {

    alert("Please enter a little more text before continuing.");

    return;

  }


  state.isAnalysing = true;


  const button = $("#analyse-button");

  if (button) {

    button.disabled = true;

    button.textContent = "Analysing...";

  }


  /*
    This is a local phrase-matching demonstration.
    It does not use a trained AI or machine-learning model.
  */


  await new Promise(resolve => setTimeout(resolve, 400));


  const matches = [];


  CATEGORIES.forEach(category => {

    const terms = category.terms || [];


    const matchedTerms = terms.filter(term => {

      return containsPhrase(text, term);

    });


    if (matchedTerms.length > 0) {

      matches.push({

        id: category.id,

        name: category.name,

        group: category.group || "General",

        about: category.about || "",

        signs: category.signs || [],

        support: category.support || "",

        matchedTerms: matchedTerms,

        matchCount: matchedTerms.length

      });

    }

  });


  /*
    Keep safety-related results first.
    Do not display matched sensitive phrases.
  */

  matches.sort((a, b) => {

    if (a.id === "suicidal-thoughts") return -1;

    if (b.id === "suicidal-thoughts") return 1;

    return b.matchCount - a.matchCount;

  });


  state.report = {

    input: state.input,

    matches: matches,

    totalMatches: matches.length,

    analysedAt: new Date().toLocaleString("en-IN"),

    method: "Local predefined phrase matching"

  };


  state.isAnalysing = false;

  state.view = "report";

  render();

}


/* =========================
   9. REPORT PAGE
   ========================= */

function reportView() {

  const report = state.report;


  if (!report) {

    state.view = "assessment";

    return assessmentView();

  }


  const matches = report.matches || [];


  const safetyMatch = matches.some(
    item => item.id === "suicidal-thoughts"
  );


  const matchMarkup = matches.length

    ? matches.map((item, index) => {

        const isSafety =
          item.id === "suicidal-thoughts";


        return `

          <article class="result-card ${isSafety ? "safety-result" : ""}">


            <div class="result-card-header">


              <span class="result-group">

                ${escapeHtml(item.group)}

              </span>


              <span class="result-number">

                MATCH 0${index + 1}

              </span>


            </div>



            <h3>

              ${escapeHtml(item.name)}

            </h3>



            ${
              isSafety

                ? `

                  <p>

                    Your text includes language that may
                    indicate a need for additional support.
                    Please consider speaking with a trusted
                    adult or qualified mental-health professional.

                  </p>

                `

                : `

                  <p>

                    ${escapeHtml(item.about)}

                  </p>

                `

            }



            ${
              !isSafety && item.signs.length

                ? `

                  <div class="result-details">

                    <span class="small-label">
                      GENERAL INFORMATION
                    </span>

                    <ul>

                      ${item.signs.map(sign => `

                        <li>
                          ${escapeHtml(sign)}
                        </li>

                      `).join("")}

                    </ul>

                  </div>

                `

                : ""

            }



            ${
              !isSafety && item.support

                ? `

                  <div class="support-box">

                    <span class="small-label">
                      SUPPORT INFORMATION
                    </span>

                    <p>
                      ${escapeHtml(item.support)}
                    </p>

                  </div>

                `

                : ""

            }


            <div class="match-indicator">

              <span>
                Predefined phrase match
              </span>

              <span>
                ${item.matchCount} match(es)
              </span>

            </div>


          </article>

        `;

      }).join("")


    : `

      <div class="no-results">

        <div class="no-results-icon">
          ✓
        </div>

        <h3>No predefined patterns matched</h3>

        <p>

          The prototype did not identify any
          matching phrases from its reference
          categories in this text.

        </p>

        <p>

          This does not establish that a person
          has or does not have a psychological condition.

        </p>

      </div>

    `;



  return `

    <main class="inner-page">

      ${dashboardHeader()}


      <section class="report-container">


        <div class="report-heading">

          <p class="eyebrow">
            PT 179 / ANALYSIS REPORT
          </p>

          <h1 class="inner-title">
            Screening Summary
          </h1>

          <p class="lead">

            A summary of predefined language patterns
            identified in the submitted text.

          </p>

        </div>



        <!-- SUMMARY CARDS -->

        <div class="report-summary">


          <article class="summary-card">

            <span class="small-label">
              REFERENCE MATCHES
            </span>

            <strong>
              ${report.totalMatches}
            </strong>

            <p>
              Categories with matching phrases
            </p>

          </article>



          <article class="summary-card">

            <span class="small-label">
              INPUT TYPE
            </span>

            <strong>
              TEXT
            </strong>

            <p>
              Written reflection
            </p>

          </article>



          <article class="summary-card">

            <span class="small-label">
              ANALYSIS METHOD
            </span>

            <strong>
              LOCAL
            </strong>

            <p>
              Predefined phrase matching
            </p>

          </article>


        </div>



        <!-- MATCH RESULTS -->

        <section class="results-section">


          <div class="section-heading">

            <div>

              <span class="small-label">
                ANALYSIS OUTPUT
              </span>

              <h2>Identified Patterns</h2>

            </div>


            <span class="result-count">
              ${matches.length} RESULT(S)
            </span>

          </div>



          <div class="results-list">

            ${matchMarkup}

          </div>


        </section>



        <!-- SAFETY INFORMATION -->

        ${
          safetyMatch

            ? `

              <section class="safety-alert">

                <h2>Additional Support</h2>

                <p>

                  You deserve support, and you do not
                  have to manage difficult feelings alone.
                  Consider reaching out to a trusted adult,
                  family member, counsellor, or qualified
                  mental-health professional.

                </p>

                <p>

                  If you feel unsafe or need immediate help,
                  contact local emergency services or ask
                  a trusted adult to help you access support.

                </p>

              </section>

            `

            : ""

        }



        <!-- LIMITATIONS -->

        <section class="limitations-card">


          <span class="small-label">
            IMPORTANT INFORMATION
          </span>


          <h2>Understanding this report</h2>


          <ul>

            <li>
              This is an educational research prototype.
            </li>

            <li>
              Results are based on predefined phrase matching.
            </li>

            <li>
              A phrase match does not confirm a psychological disorder.
            </li>

            <li>
              No match does not mean that a person has no concerns.
            </li>

            <li>
              The prototype is not clinically validated and
              does not replace professional evaluation.
            </li>

          </ul>


        </section>



        <!-- REPORT FOOTER -->

        <div class="report-footer">


          <div class="report-meta">

            <span>
              ANALYSED ON
            </span>

            <strong>
              ${escapeHtml(report.analysedAt)}
            </strong>

          </div>



          <div class="report-actions">


            <button
              class="secondary"
              data-home
              type="button"
            >
              Home
            </button>


            <button
              class="secondary"
              data-reset
              type="button"
            >
              New Assessment
            </button>


            <button
              class="primary"
              id="print-report"
              type="button"
            >
              Print Report
            </button>


          </div>


        </div>


      </section>

    </main>

  `;

}


/* =========================
   10. TEXT NORMALIZATION
   ========================= */

function normalize(value) {

  return String(value || "")

    .toLowerCase()

    .replace(/[’‘]/g, "'")

    .replace(/[^\w\s']/g, " ")

    .replace(/\s+/g, " ")

    .trim();

}


/* =========================
   11. PHRASE MATCHING
   ========================= */

function containsPhrase(text, phrase) {

  const normalizedText = normalize(text);

  const normalizedPhrase = normalize(phrase);


  if (!normalizedText || !normalizedPhrase) {
    return false;
  }


  const escapedPhrase = normalizedPhrase.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );


  const pattern = new RegExp(
    `(^|\\s)${escapedPhrase}(?=\\s|$)`,
    "i"
  );


  return pattern.test(normalizedText);

}


/* =========================
   12. HTML ESCAPING
   ========================= */

function escapeHtml(value) {

  return String(value ?? "").replace(
    /[&<>"']/g,
    character => {

      const entities = {

        "&": "&amp;",

        "<": "&lt;",

        ">": "&gt;",

        '"': "&quot;",

        "'": "&#39;"

      };

      return entities[character];

    }

  );

}


/* =========================
   13. INITIALIZE APPLICATION
   ========================= */

render();