const app = document.getElementById("app");

/* =========================================================
   GURUSETU BIHAR — PROFESSIONAL DEMO APP
   Local demo using localStorage
   ========================================================= */

/* -------------------------
   DISTRICTS
------------------------- */

const districts = [
  "Araria",
  "Arwal",
  "Aurangabad",
  "Banka",
  "Begusarai",
  "Bhagalpur",
  "Bhojpur",
  "Buxar",
  "Darbhanga",
  "East Champaran",
  "Gaya",
  "Gopalganj",
  "Jamui",
  "Jehanabad",
  "Kaimur",
  "Katihar",
  "Khagaria",
  "Kishanganj",
  "Lakhisarai",
  "Madhepura",
  "Madhubani",
  "Munger",
  "Muzaffarpur",
  "Nalanda",
  "Nawada",
  "Patna",
  "Purnia",
  "Rohtas",
  "Saharsa",
  "Samastipur",
  "Saran",
  "Sheikhpura",
  "Sheohar",
  "Sitamarhi",
  "Siwan",
  "Supaul",
  "Vaishali",
  "West Champaran"
];

/* -------------------------
   DEMO SCHOOLS
------------------------- */

const schools = [
  {
    name: "Kendriya Vidyalaya, Jehanabad",
    location: "Main Road, Jehanabad - 804408",
    management: "Central Government",
    district: "Jehanabad",
    udise: "",
    type: "Kendriya Vidyalaya"
  },
  {
    name: "Jawahar Navodaya Vidyalaya",
    location: "Nauru, Jehanabad",
    management: "Central Government / NVS",
    district: "Jehanabad",
    udise: "",
    type: "Residential School"
  },
  {
    name: "Magadh High School",
    location: "Mali",
    management: "Government",
    district: "Jehanabad",
    udise: "",
    type: "High School"
  },
  {
    name: "Upgraded High School (U.H.S.)",
    location: "Tuturkhi",
    management: "Government",
    district: "Jehanabad",
    udise: "",
    type: "High School"
  },
  {
    name: "Bhagwat High School",
    location: "Shahar Telpa",
    management: "Government",
    district: "Jehanabad",
    udise: "",
    type: "High School"
  },
  {
    name: "Korthu Higher Secondary School",
    location: "Modan Ganj, Telhara",
    management: "Government",
    district: "Jehanabad",
    udise: "",
    type: "Higher Secondary"
  },
  {
    name: "High School",
    location: "Akbarpur, Makhdumpur",
    management: "Government",
    district: "Jehanabad",
    udise: "",
    type: "High School"
  },
  {
    name: "Sonwan High School",
    location: "Makhdumpur",
    management: "Government",
    district: "Jehanabad",
    udise: "",
    type: "High School"
  },
  {
    name: "S.S. Girls Inter School",
    location: "Jehanabad",
    management: "Government",
    district: "Jehanabad",
    udise: "",
    type: "Inter School"
  }
];

/* -------------------------
   SUBJECTS
------------------------- */

const subjects = [
  "Hindi",
  "English",
  "Mathematics",
  "Science",
  "Social Science",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Sanskrit",
  "Urdu",
  "General Knowledge"
];

/* -------------------------
   DEMO NCERT-ALIGNED CHAPTERS
------------------------- */

const chapters = {
  Science: [
    "Crop Production and Management",
    "Microorganisms: Friend and Foe",
    "Coal and Petroleum",
    "Combustion and Flame",
    "Conservation of Plants and Animals",
    "Reproduction in Animals",
    "Force and Pressure",
    "Friction",
    "Sound",
    "Chemical Effects of Electric Current",
    "Some Natural Phenomena",
    "Light"
  ],

  Mathematics: [
    "Rational Numbers",
    "Linear Equations in One Variable",
    "Understanding Quadrilaterals",
    "Data Handling",
    "Squares and Square Roots",
    "Cubes and Cube Roots",
    "Comparing Quantities",
    "Algebraic Expressions",
    "Mensuration",
    "Exponents and Powers"
  ],

  Hindi: [
    "ध्वनि",
    "लाख की चूड़ियाँ",
    "बस की यात्रा",
    "भगवान के डाकिए",
    "क्या निराश हुआ जाए",
    "यह सबसे कठिन समय नहीं",
    "कबीर की साखियाँ"
  ],

  English: [
    "The Best Christmas Present in the World",
    "The Tsunami",
    "Glimpses of the Past",
    "Bepin Choudhury's Lapse of Memory",
    "The Summit Within",
    "This is Jody's Fawn"
  ]
};

/* -------------------------
   GLOBAL STATE
------------------------- */

const state = {
  role: null,
  selectedDistrict: "",
  selectedSchool: null,
  selectedChapter: null,
  principal: null,
  teacher: null
};

/* =========================================================
   NAVIGATION / COMMON UI
   ========================================================= */

function nav() {
  return `
    <div class="utility">
      <div>
        ☎ 1800-123-4567
        <span>•</span>
        support@gurusetubihar.in
      </div>

      <div>
        हिंदी
        <span>•</span>
        English
        <span>•</span>
        A+ A−
      </div>
    </div>

    <header class="header">

      <div class="brand" onclick="home()">
        <img src="assets/bihar-mark.svg">

        <div>
          <strong>GuruSetu <em>Bihar</em></strong>
          <small>Smart Teaching. Stronger Bihar.</small>
        </div>
      </div>

      <nav class="nav">
        <button onclick="home()">Home</button>
        <button onclick="about()">About</button>
        <button onclick="go('#features')">Features</button>
        <button onclick="go('#how')">How It Works</button>
        <button onclick="go('#resources')">Resources</button>
        <button onclick="go('#contact')">Contact</button>
      </nav>

      <div class="nav-actions">

        <!-- ADMIN BUTTON ADDED -->
        <button
          class="btn outline"
          onclick="adminLogin()">
          Admin
        </button>

        <button
          class="btn outline"
          onclick="principalLogin()">
          Login
        </button>

        <button
          class="btn primary"
          onclick="principalRegister()">
          Get Started <span>→</span>
        </button>

      </div>

    </header>
  `;
}

/* -------------------------
   FOOTER
------------------------- */

function footer() {
  return `
    <footer class="footer" id="contact">

      <div class="footer-main">

        <div class="footer-brand">
          <img src="assets/bihar-mark.svg">

          <div>
            <strong>GuruSetu <em>Bihar</em></strong>
            <p>Smart Teaching. Stronger Bihar.</p>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <button onclick="home()">Home</button>
          <button onclick="about()">About</button>
          <button onclick="go('#features')">Features</button>
        </div>

        <div>
          <h4>Teacher Support</h4>
          <button onclick="teacherLogin()">Teacher Login</button>
          <button onclick="teacherRegister()">Teacher Registration</button>
          <button onclick="showAI()">AI Assistant</button>
        </div>

        <div>
          <h4>For Schools</h4>

          <button onclick="principalLogin()">
            Principal Login
          </button>

          <button onclick="principalRegister()">
            Principal Registration
          </button>

          <!-- ADMIN LOGIN ADDED -->
          <button onclick="adminLogin()">
            Admin Login
          </button>

          <button onclick="go('#how')">
            How It Works
          </button>
        </div>

        <div>
          <h4>Contact</h4>
          <p>1800-123-4567</p>
          <p>support@gurusetubihar.in</p>
          <p>Bihar Education Support</p>
        </div>

      </div>

      <div class="footer-bottom">
        <span>
          © 2026 GuruSetu Bihar • Demo MVP for local testing
        </span>

        <span>
          Privacy • Terms • Accessibility
        </span>
      </div>

    </footer>
  `;
}

/* =========================================================
   HOME / LANDING PAGE
   ========================================================= */

function home() {

  app.innerHTML =
    nav() +

    `
    <main>

      <section class="hero">

        <div class="hero-copy">

          <div class="eyebrow">
            SMART TEACHING. STRONGER BIHAR.
          </div>

          <h1>
            GuruSetu <span>Bihar</span>
          </h1>

          <h2>
            AI-Powered Digital Platform for Bihar Teachers
          </h2>

          <p>
            Plan lessons, create engaging classroom resources,
            and make everyday teaching simpler — for Classes 1 to 12
            and every major subject.
          </p>

          <div class="hero-actions">

            <button
              class="btn primary big"
              onclick="principalRegister()">
              Get Started Now <span>→</span>
            </button>

            <button
              class="btn outline big"
              onclick="about()">
              Know More <span>◉</span>
            </button>

          </div>

          <div class="hero-trust">
            <span>✓ Verified School Access</span>
            <span>✓ Classes 1–12</span>
            <span>✓ AI Teaching Support</span>
          </div>

        </div>

        <div class="hero-visual">

          <img
            src="assets/hero-portrait.jpg"
            alt="GuruSetu Bihar campaign visual">

          <div class="leader-card">
            <b>Shri Smrat Chaudhry</b>
            <span>Education Department, Bihar</span>
          </div>

          <div class="heritage-ring"></div>

        </div>

      </section>

      <section class="impact">

        <div>
          <span class="impact-icon">👥</span>
          <div>
            <b>2.80 Lakh+</b>
            <small>Teachers Empowered</small>
          </div>
        </div>

        <div>
          <span class="impact-icon">🎓</span>
          <div>
            <b>1.70 Crore+</b>
            <small>Students Benefited</small>
          </div>
        </div>

        <div>
          <span class="impact-icon">🏫</span>
          <div>
            <b>75,000+</b>
            <small>Schools Connected</small>
          </div>
        </div>

        <div>
          <span class="impact-icon">📖</span>
          <div>
            <b>1,000+</b>
            <small>AI Learning Resources</small>
          </div>
        </div>

      </section>

      <section
        class="section about-section"
        id="about">

        <div class="about-image">
          <img
            src="assets/about-heritage.jpg"
            alt="Bihar heritage">
        </div>

        <div class="about-copy">

          <div class="eyebrow">
            ABOUT GURUSETU BIHAR
          </div>

          <h2>
            Building Bihar’s Future Through Smart Education
          </h2>

          <p>
            GuruSetu Bihar is a teacher-first digital platform
            designed to support lesson planning, content creation,
            classroom activities, assessments and continuous learning.
          </p>

          <p>
            One simple place for teachers to find class-wise,
            subject-wise and chapter-wise resources — with AI assistance
            when they need it.
          </p>

          <button
            class="btn outline"
            onclick="about()">
            Read More <span>→</span>
          </button>

        </div>

      </section>

      <section
        class="section feature-section"
        id="features">

        <div class="section-head">

          <div>

            <div class="eyebrow">
              APP HIGHLIGHTS
            </div>

            <h2>
              Everything a Teacher Needs, in One Place
            </h2>

          </div>

          <p>
            Choose your class, open the chapter,
            and get ready-to-use teaching support.
          </p>

        </div>

        <div class="feature-grid">

          <div class="feature-card">
            <div class="ficon orange">✦</div>
            <h3>AI-Powered Tools</h3>
            <p>
              Lesson Plan, PPT, Mind Map, Activity,
              Experiment & more.
            </p>
          </div>

          <div class="feature-card">
            <div class="ficon purple">↥</div>
            <h3>Upload & Generate</h3>
            <p>
              Upload PDF or image and get teaching resources from it.
            </p>
          </div>

          <div class="feature-card">
            <div class="ficon gold">▣</div>
            <h3>Class 1 to 12</h3>
            <p>
              Class-wise and subject-wise NCERT-aligned
              content structure.
            </p>
          </div>

          <div class="feature-card">
            <div class="ficon teal">☷</div>
            <h3>Assessment</h3>
            <p>
              Create quizzes, worksheets, questions and quick checks.
            </p>
          </div>

          <div class="feature-card">
            <div class="ficon green">●</div>
            <h3>AI Chat Assistant</h3>
            <p>
              Ask for explanations, examples,
              activities or classroom ideas.
            </p>
          </div>

        </div>

      </section>

      <section
        class="benefits"
        id="how">

        <div class="section-head centered">

          <div class="eyebrow">
            HOW IT WORKS
          </div>

          <h2>
            From School Verification to Smarter Teaching
          </h2>

        </div>

        <div class="workflow">

          <div class="workflow-card">
            <span>01</span>
            <b>Principal Registers</b>
            <p>
              Select district → search school →
              verify school → submit details.
            </p>
          </div>

          <div class="workflow-card">
            <span>02</span>
            <b>Admin Approves</b>
            <p>
              Administrator verifies the Principal
              before dashboard access.
            </p>
          </div>

          <div class="workflow-card">
            <span>03</span>
            <b>Teacher Joins</b>
            <p>
              Teacher registers under the approved school
              and waits for Principal approval.
            </p>
          </div>

          <div class="workflow-card">
            <span>04</span>
            <b>Teach with AI</b>
            <p>
              Open class → subject → chapter
              and generate classroom-ready resources.
            </p>
          </div>

        </div>

      </section>

      <section
        class="teacher-cta"
        id="resources">

        <div>

          <div class="eyebrow">
            FOR BIHAR GOVERNMENT-SCHOOL TEACHERS
          </div>

          <h2>
            Less time preparing. More time teaching.
          </h2>

          <p>
            Turn a chapter into a lesson plan, PPT,
            mind map, activity, experiment or short-video concept.
          </p>

        </div>

        <div class="cta-actions">

          <button
            class="btn primary big"
            onclick="teacherRegister()">
            Teacher Registration
          </button>

          <button
            class="btn light big"
            onclick="teacherLogin()">
            Teacher Login
          </button>

        </div>

      </section>

      <section class="secure-strip">

        <div>
          <b>🔐 Verified Access</b>
          <span>School-based Principal & Teacher approval</span>
        </div>

        <div>
          <b>📱 Daily Lesson</b>
          <span>Dashboard + WhatsApp/SMS integration ready</span>
        </div>

        <div>
          <b>🤖 AI Ready</b>
          <span>Production APIs can be connected later</span>
        </div>

        <div>
          <b>🌐 Bihar First</b>
          <span>Built for local school workflows</span>
        </div>

      </section>

    </main>

    ${footer()}
  `;
}

/* =========================================================
   BASIC HELPERS
   ========================================================= */

function about() {
  alert(
    "GuruSetu Bihar is a demo concept for a Bihar-focused teacher platform. Phase 1 demonstrates school verification, approval and role-based dashboards."
  );
}

function go(id) {
  document
    .querySelector(id)
    ?.scrollIntoView({ behavior: "smooth" });
}

/* =========================================================
   PRINCIPAL REGISTRATION
   ========================================================= */

function principalRegister() {

  app.innerHTML =
    nav() +

    `
    <div class="auth-wrap">

      <div class="auth">

        <div class="eyebrow">
          Principal Onboarding
        </div>

        <h1>
          Bring your school into GuruSetu
        </h1>

        <p class="muted">
          Every registration begins with a district
          and verified school selection.
        </p>

        <div class="notice">
          Step 1 of 3 — Select your district
        </div>

        <div class="field">

          <label>District</label>

          <select id="district">

            <option value="">
              Select district
            </option>

            ${[...new Set(districts)]
              .sort()
              .map(
                d => `<option value="${d}">${d}</option>`
              )
              .join("")}

          </select>

        </div>

        <div class="actions">

          <button
            class="btn primary"
            onclick="schoolStep()">
            Continue →
          </button>

        </div>

      </div>

    </div>

    ${footer()}
  `;
}

/* =========================================================
   SCHOOL SEARCH
   ========================================================= */

function schoolStep() {

  const d =
    document
      .getElementById("district")
      .value;

  if (!d) {
    return alert("Please select a district.");
  }

  state.selectedDistrict = d;

  app.innerHTML =
    nav() +

    `
    <div class="auth-wrap">

      <div class="auth">

        <div class="eyebrow">
          Step 2
        </div>

        <h1>
          Find your school
        </h1>

        <p class="muted">
          Search by school name or UDISE code.
          Demo records are local test data.
        </p>

        <div class="field">

          <label>Search</label>

          <div class="searchrow">

            <input
              id="schoolq"
              placeholder="e.g. Magadh, Girls Inter, Navodaya">

            <button
              class="btn primary"
              onclick="searchSchools()">
              Search
            </button>

          </div>

        </div>

        <div id="results"></div>

        <div class="actions">

          <button
            class="btn outline"
            onclick="principalRegister()">
            ← Back
          </button>

        </div>

      </div>

    </div>

    ${footer()}
  `;
}

/* =========================================================
   SEARCH SCHOOLS
   ========================================================= */

function searchSchools() {

  const q =
    document
      .getElementById("schoolq")
      .value
      .trim()
      .toLowerCase();

  const rs =
    schools.filter(
      s =>
        s.district === state.selectedDistrict &&
        (
          !q ||
          s.name.toLowerCase().includes(q) ||
          (
            s.udise &&
            s.udise.includes(q)
          )
        )
    );

  document.getElementById("results").innerHTML =
    rs.length
      ? rs
          .map(
            (s, i) => `
            <div class="school">

              <div>

                <b>${s.name}</b>

                <div class="muted">
                  ${s.location}
                </div>

                <span class="badge">
                  ${s.management}
                </span>

              </div>

              <button
                class="btn primary"
                onclick="verifySchool(${schools.indexOf(s)})">
                Select
              </button>

            </div>
          `
          )
          .join("")
      :
        `
        <div class="notice error">
          No matching school found.
        </div>
        `;
}

/* =========================================================
   VERIFY SCHOOL
   ========================================================= */

function verifySchool(i) {

  const s = schools[i];

  state.selectedSchool = s;

  app.innerHTML =
    nav() +

    `
    <div class="auth-wrap">

      <div class="auth">

        <div class="eyebrow">
          Step 3
        </div>

        <h1>
          Verify your school
        </h1>

        <div class="notice success">
          ✓ School found in the
          ${s.district}
          demo directory.
        </div>

        <div
          class="grid"
          style="grid-template-columns:1fr 1fr">

          <div class="card">
            <b>School</b>
            <p>${s.name}</p>
          </div>

          <div class="card">
            <b>District</b>
            <p>${s.district}</p>
          </div>

          <div class="card">
            <b>Location</b>
            <p>${s.location}</p>
          </div>

          <div class="card">
            <b>Management</b>
            <p>${s.management}</p>
          </div>

        </div>

        <p class="muted">
          UDISE:
          ${s.udise || "Not available in demo directory"}
        </p>

        <div class="actions">

          <button
            class="btn outline"
            onclick="schoolStep()">
            ← Back
          </button>

          <button
            class="btn primary"
            onclick="principalDetails()">
            Confirm School →
          </button>

        </div>

      </div>

    </div>

    ${footer()}
  `;
}

/* =========================================================
   PRINCIPAL DETAILS
   ========================================================= */

function principalDetails() {

  const s = state.selectedSchool;

  app.innerHTML =
    nav() +

    `
    <div class="auth-wrap">

      <div class="auth">

        <div class="eyebrow">
          Principal Registration
        </div>

        <h1>
          Your details
        </h1>

        <div class="notice">
          School:
          <b>${s.name}</b>
          • ${s.district}
        </div>

        <div class="formgrid">

          <div class="field">
            <label>
              Full Name
              <span style="color:#d93d4f">*</span>
            </label>

            <input
              id="pn"
              required
              placeholder="Principal name">
          </div>

          <div class="field">
            <label>
              Mobile Number
              <span style="color:#d93d4f">*</span>
            </label>

            <input
              id="pm"
              required
              inputmode="numeric"
              placeholder="10-digit mobile">
          </div>

          <div class="field">
            <label>
              Email Address
              <span style="color:#d93d4f">*</span>
            </label>

            <input
              id="pe"
              required
              type="email"
              placeholder="principal@example.com">
          </div>

          <div class="field">
            <label>Date of Birth</label>

            <input
              id="pd"
              type="date">
          </div>

          <div class="field">
            <label>
              Date of Joining This School
            </label>

            <input
              id="pj"
              type="date">
          </div>

          <div class="field">
            <label>
              Total Work Experience (years)
            </label>

            <input
              id="pw"
              type="number"
              min="0"
              placeholder="e.g. 8">
          </div>

          <div class="field">
            <label>Designation</label>

            <select id="pdes">
              <option>Principal</option>
              <option>Headmaster</option>
              <option>In-charge Principal</option>
            </select>
          </div>

          <div class="field">
            <label>
              Password
              <span style="color:#d93d4f">*</span>
            </label>

            <input
              id="pp"
              required
              type="password"
              placeholder="Create a password">
          </div>

        </div>

        <div class="actions">

          <button
            class="btn outline"
            onclick="verifySchool(${schools.indexOf(s)})">
            ← Back
          </button>

          <button
            class="btn primary"
            onclick="submitPrincipal()">
            Submit Registration
          </button>

        </div>

      </div>

    </div>

    ${footer()}
  `;
}

/* =========================================================
   SUBMIT PRINCIPAL
   ========================================================= */

function submitPrincipal() {

  const name =
    document
      .getElementById("pn")
      .value
      .trim();

  const mobile =
    document
      .getElementById("pm")
      .value
      .trim();

  const email =
    document
      .getElementById("pe")
      .value
      .trim();

  const password =
    document
      .getElementById("pp")
      .value;

  if (
    !name ||
    !mobile ||
    !email ||
    !password
  ) {
    return alert(
      "Please fill all required fields: Name, Mobile, Email and Password."
    );
  }

  /* CORRECT EMAIL VALIDATION */
  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return alert(
      "Please enter a valid email address."
    );
  }

  const principals =
    JSON.parse(
      localStorage.getItem("principals") || "[]"
    );

  if (
    principals.some(
      p =>
        p.school === state.selectedSchool.name &&
        p.status !== "REJECTED"
    )
  ) {
    return alert(
      "This school already has a pending/approved Principal in this demo."
    );
  }

  const p = {
    id: Date.now(),
    name,
    mobile,
    email,
    school: state.selectedSchool.name,
    district: state.selectedDistrict,
    joining:
      document.getElementById("pj").value,
    experience:
      document.getElementById("pw").value,
    status: "PENDING_ADMIN_APPROVAL",
    password
  };

  principals.push(p);

  localStorage.setItem(
    "principals",
    JSON.stringify(principals)
  );

  state.principal = p;

  app.innerHTML =
    nav() +

    `
    <div class="auth-wrap">

      <div class="auth">

        <div class="eyebrow">
          Registration Submitted
        </div>

        <h1>
          Application received ✓
        </h1>

        <div class="notice success">
          Your Principal account is
          <b>PENDING ADMIN APPROVAL</b>.
        </div>

        <p>
          School:
          <b>${p.school}</b>
          <br>

          District:
          <b>${p.district}</b>
        </p>

        <p class="muted">
          For the demo, open Admin Login
          to approve this application.
        </p>

        <div class="actions">

          <button
            class="btn primary"
            onclick="adminLogin()">
            Admin Login
          </button>

          <button
            class="btn outline"
            onclick="home()">
            Home
          </button>

        </div>

      </div>

    </div>

    ${footer()}
  `;
}

/* =========================================================
   PRINCIPAL LOGIN
   ========================================================= */

function principalLogin() {

  app.innerHTML =
    nav() +

    `
    <div class="auth-wrap">

      <div class="auth">

        <div class="eyebrow">
          Principal Login
        </div>

        <h1>
          Welcome back
        </h1>

        <div class="field">

          <label>Email</label>

          <input
            id="le"
            type="email"
            placeholder="principal@example.com">

        </div>

        <div
          class="field"
          style="margin-top:15px">

          <label>Password</label>

          <input
            id="lp"
            type="password"
            placeholder="Your password">

        </div>

        <div class="actions">

          <button
            class="btn primary"
            onclick="doPrincipalLogin()">
            Login
          </button>

        </div>

        <p class="muted">
          Demo: approve the Principal first
          from Admin Login.
        </p>

      </div>

    </div>

    ${footer()}
  `;
}

/* =========================================================
   PRINCIPAL LOGIN PROCESS
   ========================================================= */

function doPrincipalLogin() {

  const e =
    document
      .getElementById("le")
      .value
      .trim();

  const pw =
    document
      .getElementById("lp")
      .value;

  const ps =
    JSON.parse(
      localStorage.getItem("principals") || "[]"
    );

  const p =
    ps.find(
      x =>
        x.email.toLowerCase() ===
        e.toLowerCase()
    );

  if (!p) {
    return alert(
      "Principal not found."
    );
  }

  if (p.status !== "APPROVED") {
    return alert(
      "Your registration is awaiting Admin approval."
    );
  }

  if (p.password !== pw) {
    return alert(
      "Incorrect password."
    );
  }

  state.principal = p;
  state.role = "PRINCIPAL";

  principalDashboard();
}

/* =========================================================
   ADMIN LOGIN
   ========================================================= */

function adminLogin() {

  app.innerHTML =
    nav() +

    `
    <div class="auth-wrap">

      <div class="auth">

        <div class="eyebrow">
          Administration
        </div>

        <h1>
          Admin Login
        </h1>

        <div class="field">

          <label>Email</label>

          <input
            id="ae"
            value="admin@gurusetu.local">

        </div>

        <div
          class="field"
          style="margin-top:15px">

          <label>Password</label>

          <input
            id="ap"
            type="password"
            value="admin123">

        </div>

        <div class="actions">

          <button
            class="btn primary"
            onclick="doAdminLogin()">
            Login
          </button>

        </div>

        <p class="muted">
          Local demo credentials:
          admin@gurusetu.local / admin123
        </p>

      </div>

    </div>

    ${footer()}
  `;
}

/* =========================================================
   ADMIN LOGIN PROCESS
   ========================================================= */

function doAdminLogin() {

  const email =
    document.getElementById("ae").value;

  const password =
    document.getElementById("ap").value;

  if (
    email === "admin@gurusetu.local" &&
    password === "admin123"
  ) {

    state.role = "ADMIN";

    adminDashboard();

  } else {

    alert(
      "Use the demo admin credentials shown."
    );

  }
}

/* =========================================================
   ADMIN DASHBOARD
   ========================================================= */

function adminDashboard() {

  const ps =
    JSON.parse(
      localStorage.getItem("principals") || "[]"
    );

  app.innerHTML =
    nav() +

    `
    <div class="dashboard">

      <div class="dashhead">

        <div>

          <div class="eyebrow">
            Administrator
          </div>

          <h1>
            GuruSetu Control Centre
          </h1>

          <p class="muted">
            Approve verified-school
            Principal applications.
          </p>

        </div>

        <button
          class="btn outline"
          onclick="home()">
          Logout
        </button>

      </div>

      <div class="grid">

        <div class="card">
          <div class="stat">
            ${districts.length}
          </div>
          <b>Districts</b>
        </div>

        <div class="card">
          <div class="stat">
            ${schools.length}
          </div>
          <b>Demo Schools</b>
        </div>

        <div class="card">
          <div class="stat">
            ${ps.length}
          </div>
          <b>Principal Applications</b>
        </div>

        <div class="card">
          <div class="stat">
            ${
              ps.filter(
                p => p.status === "APPROVED"
              ).length
            }
          </div>
          <b>Approved</b>
        </div>

      </div>

      <div
        class="card"
        style="margin-top:20px">

        <h2>
          Principal Approval Requests
        </h2>

        ${
          ps.length
            ? `
              <table class="table">

                <thead>

                  <tr>
                    <th>Principal</th>
                    <th>School</th>
                    <th>District</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>

                </thead>

                <tbody>

                  ${ps
                    .map(
                      p => `
                        <tr>

                          <td>
                            ${p.name}
                            <br>
                            <span class="muted">
                              ${p.email}
                            </span>
                          </td>

                          <td>
                            ${p.school}
                          </td>

                          <td>
                            ${p.district}
                          </td>

                          <td>
                            <span class="badge">
                              ${p.status}
                            </span>
                          </td>

                          <td>

                            ${
                              p.status ===
                              "PENDING_ADMIN_APPROVAL"
                                ? `
                                  <button
                                    class="btn primary"
                                    onclick="approvePrincipal(${p.id})">
                                    Approve
                                  </button>

                                  <button
                                    class="btn danger"
                                    onclick="rejectPrincipal(${p.id})">
                                    Reject
                                  </button>
                                `
                                : "—"
                            }

                          </td>

                        </tr>
                      `
                    )
                    .join("")}

                </tbody>

              </table>
            `
            : `
              <div class="notice">
                No Principal registrations yet.
                Register a Principal from the landing page.
              </div>
            `
        }

      </div>

    </div>
  `;
}

/* =========================================================
   PRINCIPAL DASHBOARD
   ========================================================= */

function principalDashboard() {

  const p = state.principal;

  const ts =
    JSON.parse(
      localStorage.getItem("teachers") || "[]"
    ).filter(
      t => t.school === p.school
    );

  const approved =
    ts.filter(
      t => t.status === "APPROVED"
    );

  app.innerHTML =
    nav() +

    `
    <div class="dashboard">

      <div class="dashhead">

        <div>

          <div class="eyebrow">
            Principal Workspace
          </div>

          <h1>
            School Dashboard
          </h1>

          <p class="muted">
            Manage your school's staff and approvals.
          </p>

        </div>

        <button
          class="btn outline"
          onclick="home()">
          Logout
        </button>

      </div>

      <div class="grid">

        <div class="card">
          <div class="stat">
            ${ts.length}
          </div>
          <b>Total Teachers</b>
        </div>

        <div class="card">
          <div class="stat">
            ${approved.length}
          </div>
          <b>Approved Teachers</b>
        </div>

        <div class="card">
          <div class="stat">
            ${
              ts.filter(
                t =>
                  t.status ===
                  "PENDING_PRINCIPAL_APPROVAL"
              ).length
            }
          </div>
          <b>Pending Teachers</b>
        </div>

        <div class="card">
          <div class="stat">
            1–12
          </div>
          <b>Classes</b>
        </div>

      </div>

      <div
        class="card"
        style="margin-top:22px">

        <h2>
          Pending Teacher Approvals
        </h2>

        ${
          ts.filter(
            t =>
              t.status ===
              "PENDING_PRINCIPAL_APPROVAL"
          ).length
            ? `
              <table class="table">

                <thead>
                  <tr>
                    <th>Teacher</th>
                    <th>Subject</th>
                    <th>Classes</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  ${ts
                    .filter(
                      t =>
                        t.status ===
                        "PENDING_PRINCIPAL_APPROVAL"
                    )
                    .map(
                      t => `
                        <tr>

                          <td>
                            <b>${t.name}</b>
                            <br>
                            <span class="muted">
                              ${t.email}
                            </span>
                          </td>

                          <td>
                            ${t.subject}
                          </td>

                          <td>
                            ${t.classes}
                          </td>

                          <td>

                            <button
                              class="btn primary"
                              onclick="approveTeacher(${t.id})">
                              Approve
                            </button>

                            <button
                              class="btn danger"
                              onclick="rejectTeacher(${t.id})">
                              Reject
                            </button>

                          </td>

                        </tr>
                      `
                    )
                    .join("")}

                </tbody>

              </table>
            `
            : `
              <div class="notice">
                No pending teacher applications
                for this school.
              </div>
            `
        }

      </div>

      <div
        class="card"
        style="margin-top:18px">

        <h2>
          School Profile
        </h2>

        <p>
          <b>${p.school}</b>
        </p>

        <p class="muted">
          ${p.district}
          • Principal: ${p.name}
        </p>

        <span class="badge">
          APPROVED
        </span>

      </div>

    </div>
  `;
}

/* =========================================================
   APPROVE / REJECT PRINCIPAL
   ========================================================= */

function approvePrincipal(id) {

  let ps =
    JSON.parse(
      localStorage.getItem("principals") || "[]"
    );

  ps =
    ps.map(
      p =>
        p.id === id
          ? {
              ...p,
              status: "APPROVED"
            }
          : p
    );

  localStorage.setItem(
    "principals",
    JSON.stringify(ps)
  );

  adminDashboard();
}

function rejectPrincipal(id) {

  const reason =
    prompt(
      "Reason for rejection:",
      "Please provide additional verification."
    );

  if (reason === null) {
    return;
  }

  let ps =
    JSON.parse(
      localStorage.getItem("principals") || "[]"
    );

  ps =
    ps.map(
      p =>
        p.id === id
          ? {
              ...p,
              status: "REJECTED",
              reason
            }
          : p
    );

  localStorage.setItem(
    "principals",
    JSON.stringify(ps)
  );

  adminDashboard();
}

/* =========================================================
   TEACHER REGISTRATION
   ========================================================= */

function teacherRegister() {

  const approvedPrincipals =
    JSON.parse(
      localStorage.getItem("principals") || "[]"
    ).filter(
      p => p.status === "APPROVED"
    );

  app.innerHTML =
    nav() +

    `
    <div class="auth-wrap">

      <div class="auth">

        <div class="eyebrow">
          Teacher Registration
        </div>

        <h1>
          Join your school on GuruSetu
        </h1>

        <p class="muted">
          Select the school where your Principal
          has already been approved.
        </p>

        <div class="notice">
          Teacher registers → Principal reviews →
          Principal approves → Teacher can login.
        </div>

        <div class="formgrid">

          <div class="field full">

            <label>
              Approved School
            </label>

            <select id="tschool">

              <option value="">
                Select school
              </option>

              ${
                approvedPrincipals.length
                  ? approvedPrincipals
                      .map(
                        p =>
                          `
                          <option value="${p.school}">
                            ${p.school} — ${p.district}
                          </option>
                          `
                      )
                      .join("")
                  : `
                    <option value="">
                      No approved Principal school yet
                    </option>
                  `
              }

            </select>

          </div>

          <div class="field">

            <label>
              Full Name *
            </label>

            <input
              id="tn"
              placeholder="Teacher name">

          </div>

          <div class="field">

            <label>
              Mobile Number *
            </label>

            <input
              id="tm"
              inputmode="numeric"
              placeholder="10-digit mobile">

          </div>

          <div class="field">

            <label>
              Email Address *
            </label>

            <input
              id="tem"
              type="email"
              placeholder="teacher@example.com">

          </div>

          <div class="field">

            <label>
              Work Experience (years)
            </label>

            <input
              id="tw"
              type="number"
              min="0"
              placeholder="e.g. 5">

          </div>

          <div class="field">

            <label>
              Primary Subject
            </label>

            <select id="tsub">

              ${subjects
                .map(
                  s =>
                    `<option>${s}</option>`
                )
                .join("")}

            </select>

          </div>

          <div class="field">

            <label>
              Classes You Teach
            </label>

            <input
              id="tcls"
              placeholder="e.g. 8–12">

          </div>

          <div class="field">

            <label>
              Password *
            </label>

            <input
              id="tpass"
              type="password"
              placeholder="Create a password">

          </div>

        </div>

        <div class="actions">

          <button
            class="btn outline"
            onclick="home()">
            Cancel
          </button>

          <button
            class="btn primary"
            onclick="submitTeacher()">
            Submit Registration
          </button>

        </div>

      </div>

    </div>

    ${footer()}
  `;
}

/* =========================================================
   SUBMIT TEACHER
   ========================================================= */

function submitTeacher() {

  const school =
    document
      .getElementById("tschool")
      .value;

  const name =
    document
      .getElementById("tn")
      .value
      .trim();

  const mobile =
    document
      .getElementById("tm")
      .value
      .trim();

  const email =
    document
      .getElementById("tem")
      .value
      .trim();

  const password =
    document
      .getElementById("tpass")
      .value;

  if (!school) {
    return alert(
      "Select an approved Principal school first."
    );
  }

  if (
    !name ||
    !mobile ||
    !email ||
    !password
  ) {
    return alert(
      "Please fill all required fields."
    );
  }

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return alert(
      "Please enter a valid email address."
    );
  }

  let ts =
    JSON.parse(
      localStorage.getItem("teachers") || "[]"
    );

  if (
    ts.some(
      t =>
        t.email.toLowerCase() ===
        email.toLowerCase()
    )
  ) {
    return alert(
      "A teacher with this email is already registered."
    );
  }

  const principal =
    JSON.parse(
      localStorage.getItem("principals") || "[]"
    ).find(
      p =>
        p.school === school &&
        p.status === "APPROVED"
    );

  const t = {

    id: Date.now(),

    name,

    mobile,

    email,

    school,

    district:
      principal
        ? principal.district
        : "",

    subject:
      document
        .getElementById("tsub")
        .value,

    classes:
      document
        .getElementById("tcls")
        .value ||
      "8–12",

    experience:
      document
        .getElementById("tw")
        .value ||
      "0",

    password,

    status:
      "PENDING_PRINCIPAL_APPROVAL"
  };

  ts.push(t);

  localStorage.setItem(
    "teachers",
    JSON.stringify(ts)
  );

  app.innerHTML =
    nav() +

    `
    <div class="auth-wrap">

      <div class="auth">

        <div class="eyebrow">
          Registration Submitted
        </div>

        <h1>
          Teacher application received ✓
        </h1>

        <div class="notice success">

          Your Teacher account is
          <b>
            PENDING PRINCIPAL APPROVAL
          </b>.

        </div>

        <p>
          School:
          <b>${t.school}</b>
          <br>

          District:
          <b>${t.district}</b>
          <br>

          Subject:
          <b>${t.subject}</b>
          <br>

          Classes:
          <b>${t.classes}</b>
        </p>

        <p class="muted">
          Open Principal Login and approve
          this teacher from the Principal Dashboard.
        </p>

        <div class="actions">

          <button
            class="btn primary"
            onclick="principalLogin()">
            Principal Login
          </button>

          <button
            class="btn outline"
            onclick="home()">
            Home
          </button>

        </div>

      </div>

    </div>

    ${footer()}
  `;
}

/* =========================================================
   TEACHER LOGIN
   ========================================================= */

function teacherLogin() {

  app.innerHTML =
    nav() +

    `
    <div class="auth-wrap">

      <div class="auth">

        <div class="eyebrow">
          Teacher Login
        </div>

        <h1>
          Welcome back
        </h1>

        <div class="notice">
          A Teacher can login only after
          Principal approval.
        </div>

        <div class="field">

          <label>Email</label>

          <input
            id="te"
            type="email"
            placeholder="teacher@example.com">

        </div>

        <div
          class="field"
          style="margin-top:15px">

          <label>Password</label>

          <input
            id="tp"
            type="password"
            placeholder="Your password">

        </div>

        <div class="actions">

          <button
            class="btn primary"
            onclick="doTeacherLogin()">
            Login
          </button>

          <button
            class="btn outline"
            onclick="teacherRegister()">
            Register
          </button>

        </div>

        <p class="muted">
          Demo shortcut:
          teacher@gurusetu.local / teacher123
        </p>

      </div>

    </div>

    ${footer()}
  `;
}

/* =========================================================
   TEACHER LOGIN PROCESS
   ========================================================= */

function doTeacherLogin() {

  const e =
    document
      .getElementById("te")
      .value
      .trim();

  const pw =
    document
      .getElementById("tp")
      .value;

  /* DEMO TEACHER */

  if (
    e === "teacher@gurusetu.local" &&
    pw === "teacher123"
  ) {

    state.role = "TEACHER";

    state.teacher = {

      name: "Demo Science Teacher",

      email: e,

      school: "Demo School",

      district: "Jehanabad",

      subject: "Science",

      classes: "8–12"

    };

    teacherDashboard();

    return;
  }

  const ts =
    JSON.parse(
      localStorage.getItem("teachers") || "[]"
    );

  const t =
    ts.find(
      x =>
        x.email.toLowerCase() ===
        e.toLowerCase()
    );

  if (!t) {
    return alert(
      "Teacher not found. Please register first."
    );
  }

  if (
    t.status !== "APPROVED"
  ) {
    return alert(
      "Your Teacher registration is awaiting Principal approval."
    );
  }

  if (t.password !== pw) {
    return alert(
      "Incorrect password."
    );
  }

  state.role = "TEACHER";
  state.teacher = t;

  teacherDashboard();
}

/* =========================================================
   TEACHER DASHBOARD
   ========================================================= */

function teacherDashboard() {

  const t = state.teacher || {};

  const cls =
    (t.classes || "8–12").includes("–")
      ? (t.classes || "8–12").split("–")[0]
      : "8";

  const subject =
    t.subject || "Science";

  app.innerHTML = `

    <div class="diksha-shell">

      <aside class="diksha-sidebar">

        <div
          class="diksha-brand"
          onclick="home()">

          <div class="brand-mark">

            <img
              src="assets/bihar-mark.svg">

          </div>

          <div>
            <b>GuruSetu</b>
            <span>BIHAR</span>
          </div>

        </div>

        <div class="sidebar-section">

          <small>TEACHING</small>

          <button
            class="side-active"
            onclick="teacherDashboard()">

            <i>⌂</i>
            Home

          </button>

          <button
            onclick="goTeacherCurriculum()">

            <i>▤</i>
            My Classes

          </button>

          <button
            onclick="showAI()">

            <i>✦</i>
            AI Assistant

          </button>

          <button
            onclick="showTeacherProfile()">

            <i>◯</i>
            My Profile

          </button>

        </div>

        <div class="sidebar-section">

          <small>RESOURCES</small>

          <button
            onclick="goTeacherCurriculum()">

            <i>▣</i>
            NCERT Library

          </button>

          <button
            onclick="showNotifications()">

            <i>◷</i>
            Notifications
            <em class="side-dot">2</em>

          </button>

          <button
            onclick="openModal(
              'Saved Resources',
              '<div class=\\'notice success\\'>Your generated lesson plans, PPT outlines and activities will appear here.</div>'
            )">

            <i>♡</i>
            Saved

          </button>

        </div>

        <div class="sidebar-bottom">

          <div class="teacher-mini">

            <div class="avatar">
              ${(t.name || "D")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>

              <b>
                ${t.name || "DIPSHIKHA"}
              </b>

              <small>
                ${subject}
                • Class
                ${t.classes || "8–12"}
              </small>

            </div>

          </div>

          <button
            class="logout-side"
            onclick="home()">

            ↪ Logout

          </button>

        </div>

      </aside>

      <section class="diksha-main">

        <header class="diksha-header">

          <div class="header-title">

            <b>
              Teacher Workspace
            </b>

            <span>
              Bihar Government Schools
            </span>

          </div>

          <div class="curriculum-selects">

            <label>
              Class

              <select
                id="classSel"
                onchange="loadSubjects()">

                ${Array.from(
                  { length: 12 },
                  (_, i) =>
                    `
                    <option
                      value="${i + 1}"
                      ${
                        String(i + 1) ===
                        String(cls)
                          ? "selected"
                          : ""
                      }>
                      Class ${i + 1}
                    </option>
                    `
                ).join("")}

              </select>

            </label>

            <label>
              Subject

              <select
                id="subSel"
                onchange="loadChapters()">

                ${subjects
                  .map(
                    s =>
                      `
                      <option
                        ${
                          s === subject
                            ? "selected"
                            : ""
                        }>
                        ${s}
                      </option>
                      `
                  )
                  .join("")}

              </select>

            </label>

            <label>
              Chapter

              <select
                id="chapterSelect"
                onchange="selectChapterFromTop()">

                <option value="">
                  Select chapter
                </option>

              </select>

            </label>

          </div>

          <div class="header-icons">

            <button
              onclick="showNotifications()">
              🔔
            </button>

            <button
              onclick="showTeacherProfile()">

              ${(t.name || "D")
                .charAt(0)
                .toUpperCase()}

            </button>

          </div>

        </header>

        <main class="diksha-workspace">

          <div class="welcome-row">

            <div>

              <div class="crumb">
                HOME / TEACHER AI WORKSPACE
              </div>

              <h1>
                Namaste,
                ${t.name || "DIPSHIKHA"} 👋
              </h1>

              <p>
                What are you teaching today?
              </p>

            </div>

            <div class="ai-ready">

              <span></span>
              AI Assistant Ready

            </div>

          </div>

          <section class="today-card">

            <div>

              <span class="today-label">
                TODAY'S TEACHING SPACE
              </span>

              <h2>
                ${subject}
                • Class
                ${t.classes || "8–12"}
              </h2>

              <p>
                Select a chapter to unlock
                personalised teaching resources.
              </p>

            </div>

            <button
              class="btn dk-primary"
              onclick="showAI(
                state.selectedChapter ||
                'your selected chapter'
              )">

              Ask GuruSetu AI
              <span>→</span>

            </button>

          </section>

          <section class="quick-section">

            <div class="section-title">

              <div>

                <small>
                  AI TEACHING TOOLS
                </small>

                <h2>
                  Prepare your class in minutes
                </h2>

              </div>

              <span>
                Chapter-aware tools
              </span>

            </div>

            <div class="quick-grid">

              ${aiTile(
                "✎",
                "Lesson Plan",
                "Objectives + 5E flow",
                "gold",
                "generateLesson(state.selectedChapter||'selected chapter')"
              )}

              ${aiTile(
                "▥",
                "Build PPT",
                "Ready-to-present slides",
                "blue",
                "generatePPT(state.selectedChapter||'selected chapter')"
              )}

              ${aiTile(
                "⌘",
                "Mind Map",
                "Visual chapter summary",
                "purple",
                "generateMindMap(state.selectedChapter||'selected chapter')"
              )}

              ${aiTile(
                "♧",
                "Class Activity",
                "Low-tech, hands-on",
                "green",
                "generateActivity(state.selectedChapter||'selected chapter')"
              )}

              ${aiTile(
                "⚗",
                "Experiment",
                "Safe classroom demo",
                "teal",
                "generateExperiment(state.selectedChapter||'selected chapter')"
              )}

              ${aiTile(
                "▶",
                "Short Video",
                "30–40 sec concept",
                "pink",
                "generateVideo(state.selectedChapter||'selected chapter')"
              )}

              ${aiTile(
                "↑",
                "Upload PDF",
                "Ask AI from your PDF",
                "gray",
                "uploadDemo('PDF')"
              )}

              ${aiTile(
                "▧",
                "Upload Image",
                "Explain a textbook image",
                "gray",
                "uploadDemo('Image')"
              )}

            </div>

          </section>

          <section class="curriculum-area">

            <div class="chapter-box">

              <div class="section-title">

                <div>

                  <small>
                    NCERT-ALIGNED CURRICULUM
                  </small>

                  <h2>
                    Choose a chapter
                  </h2>

                </div>

                <span>
                  Class ${cls}
                  • ${subject}
                </span>

              </div>

              <div
                id="chapters"
                class="diksha-chapters">
              </div>

            </div>

            <div class="assistant-box">

              <div class="section-title">

                <div>

                  <small>
                    GURUSETU AI
                  </small>

                  <h2>
                    Teaching Assistant
                  </h2>

                </div>

                <button
                  class="text-btn"
                  onclick="showAI()">

                  Open full chat →

                </button>

              </div>

              <div class="assistant-prompt">

                💡 Try asking:
                <b>
                  “Explain this topic with a lemon example.”
                </b>

              </div>

              <div
                class="mini-chat diksha-chat"
                id="miniChat">

                <div class="mini-msg bot">

                  Namaste!
                  Select a chapter and I’ll help
                  you explain it in simple,
                  student-friendly language.

                </div>

              </div>

              <div class="chat-input">

                <input
                  id="miniChatQ"
                  placeholder="Ask anything about your lesson...">

                <button
                  onclick="miniChatSend()">
                  ➤
                </button>

              </div>

            </div>

          </section>

          <section class="daily-strip">

            <div>

              <b>
                📚 Today's Lesson Plan
              </b>

              <span>
                ${
                  state.selectedChapter ||
                  "Choose a chapter to generate today's plan"
                }
              </span>

            </div>

            <button
              onclick="generateLesson(
                state.selectedChapter ||
                'today’s topic'
              )">

              Generate / View →

            </button>

          </section>

        </main>

      </section>

    </div>
  `;

  loadChapters();
}

/* =========================================================
   TEACHER CURRICULUM
   ========================================================= */

function aiTile(
  icon,
  title,
  sub,
  kind,
  action
) {
  return `
    <button
      class="ai-tile"
      onclick="${action}">

      <span class="tile-icon ${kind}">
        ${icon}
      </span>

      <span>

        <b>${title}</b>

        <small>${sub}</small>

      </span>

      <strong>›</strong>

    </button>
  `;
}

function goTeacherCurriculum() {

  document
    .querySelector(".chapter-box")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}

function selectChapterFromTop() {

  const v =
    document
      .getElementById("chapterSelect")
      ?.value;

  if (v) {

    state.selectedChapter = v;

    const hint =
      document.getElementById(
        "aiChapterHint"
      );

    if (hint) {
      hint.innerHTML =
        `✓ <b>${v}</b> selected — AI tools are now contextual to this chapter.`;
    }

    loadChapters();
  }
}

function quickTool(type) {

  const ch =
    state.selectedChapter ||
    document.getElementById("chapterSelect")
      ?.value ||
    "selected chapter";

  if (type === "approach") {

    openModal(
      "Teaching Approach — " + ch,
      `
      <h3>3 simple strategies</h3>

      <ol>
        <li>
          Start with a familiar real-life example.
        </li>

        <li>
          Ask students to predict or discuss.
        </li>

        <li>
          Finish with a quick hands-on task.
        </li>
      </ol>

      <p class="muted">
        AI can personalize these strategies by
        class level, learning level and available
        classroom resources.
      </p>
      `
    );

  } else if (type === "quiz") {

    openModal(
      "Quick Quiz — " + ch,
      `
      <h3>
        Questions to ask
      </h3>

      <ol>
        <li>
          What is the main idea of this topic?
        </li>

        <li>
          Can you give one example from daily life?
        </li>

        <li>
          What would happen if the condition changed?
        </li>
      </ol>

      <button
        class="btn primary"
        onclick="generateLesson('${escapeJs(ch)}')">
        Use in Lesson
      </button>
      `
    );

  } else {

    generateActivity(ch);

  }
}

/* =========================================================
   MINI CHAT
   ========================================================= */

function miniChatSend() {

  const input =
    document.getElementById(
      "miniChatQ"
    );

  const chat =
    document.getElementById(
      "miniChat"
    );

  if (
    !input ||
    !input.value.trim()
  ) {
    return;
  }

  const q =
    input.value.trim();

  const ch =
    state.selectedChapter ||
    "this topic";

  chat.innerHTML +=
    `
    <div class="mini-msg user">
      ${q}
    </div>

    <div class="mini-msg bot">

      ${aiAnswer(q, ch)}

      <button
        class="small-link"
        onclick="showAI('${escapeJs(ch)}')">

        Open full AI Chat →

      </button>

    </div>
    `;

  input.value = "";

  chat.scrollTop =
    chat.scrollHeight;
}

/* =========================================================
   CHAPTERS
   ========================================================= */

function loadSubjects() {
  loadChapters();
}

function loadChapters() {

  const sub =
    document
      .getElementById("subSel")
      ?.value ||
    "Science";

  const cs =
    chapters[sub] ||
    [
      "Chapter 1 — Introduction",
      "Chapter 2 — Core Concepts",
      "Chapter 3 — Practice and Applications"
    ];

  const el =
    document.getElementById(
      "chapters"
    );

  const top =
    document.getElementById(
      "chapterSelect"
    );

  if (top) {

    top.innerHTML =
      `<option value="">Chapter</option>` +

      cs
        .map(
          c =>
            `
            <option
              value="${c.replace(
                /"/g,
                "&quot;"
              )}"
              ${
                state.selectedChapter === c
                  ? "selected"
                  : ""
              }>

              ${c}

            </option>
            `
        )
        .join("");
  }

  if (!el) {
    return;
  }

  el.innerHTML =
    cs
      .map(
        c =>
          `
          <button
            class="ai-chapter"
            onclick="chapterTools('${c.replace(
              /'/g,
              "\\'"
            )}')">

            <span class="chapter-num">
              ${String(
                cs.indexOf(c) + 1
              ).padStart(2, "0")}
            </span>

            <span>

              <b>${c}</b>

              <small>
                Open chapter resources →
              </small>

            </span>

          </button>
          `
      )
      .join("");
}

/* =========================================================
   CHAPTER TOOLS
   ========================================================= */

function chapterTools(ch) {

  state.selectedChapter = ch;

  const top =
    document.getElementById(
      "chapterSelect"
    );

  if (top) {
    top.value = ch;
  }

  const hint =
    document.getElementById(
      "aiChapterHint"
    );

  if (hint) {
    hint.innerHTML =
      `✓ <b>${ch}</b> selected — AI tools are now contextual to this chapter.`;
  }

  const el =
    document.getElementById(
      "chapters"
    );

  if (!el) {
    return;
  }

  el.innerHTML =
    `
    <div class="notice success">

      ✓ Selected Chapter:
      <b>${ch}</b>

    </div>

    <div class="toolgrid">

      ${tool(
        "📝",
        "Lesson Plan",
        `generateLesson('${escapeJs(ch)}')`
      )}

      ${tool(
        "📊",
        "Build PPT",
        `generatePPT('${escapeJs(ch)}')`
      )}

      ${tool(
        "🧠",
        "Mind Map",
        `generateMindMap('${escapeJs(ch)}')`
      )}

      ${tool(
        "🧪",
        "Classroom Activity",
        `generateActivity('${escapeJs(ch)}')`
      )}

      ${tool(
        "🔬",
        "Experiment",
        `generateExperiment('${escapeJs(ch)}')`
      )}

      ${tool(
        "🎬",
        "Short Video Concept",
        `generateVideo('${escapeJs(ch)}')`
      )}

      ${tool(
        "💬",
        "AI Chatbot",
        `showAI('${escapeJs(ch)}')`
      )}

      ${tool(
        "📄",
        "Upload PDF",
        `uploadDemo('PDF')`
      )}

      ${tool(
        "🖼️",
        "Upload Image",
        `uploadDemo('Image')`
      )}

    </div>
    `;
}

function escapeJs(s) {

  return s
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'");
}

function tool(
  icon,
  title,
  fn
) {

  return `
    <div class="tool">

      <div style="font-size:28px">
        ${icon}
      </div>

      <h3>
        ${title}
      </h3>

      <p class="muted">
        Demo generator
      </p>

      <button
        class="btn primary"
        onclick="${fn}">

        Open

      </button>

    </div>
  `;
}

/* =========================================================
   MODAL
   ========================================================= */

function openModal(
  title,
  body
) {

  const m =
    document.createElement("div");

  m.className = "modal";

  m.innerHTML =
    `
    <div class="modalbox">

      <div
        style="
          display:flex;
          justify-content:space-between;
          gap:20px
        ">

        <h2>
          ${title}
        </h2>

        <button
          class="btn outline"
          onclick="this.closest('.modal').remove()">

          Close

        </button>

      </div>

      ${body}

    </div>
    `;

  document.body.appendChild(m);
}

/* =========================================================
   AI LESSON PLAN
   ========================================================= */

function generateLesson(ch) {

  openModal(
    "AI Lesson Plan — " + ch,

    `
    <div class="notice success">
      ✓ Personalised demo lesson generated
      for your selected chapter.
    </div>

    <h3>
      Learning Objective
    </h3>

    <p>
      Students will understand the key idea of
      <b>${ch}</b>
      and connect it with something they see
      in everyday life.
    </p>

    <h3>
      5E Lesson Flow
    </h3>

    <ol>

      <li>
        <b>Engage (5 min):</b>
        start with a familiar object/situation
        and ask “Why does this happen?”
      </li>

      <li>
        <b>Explore (8 min):</b>
        students predict, discuss and observe.
      </li>

      <li>
        <b>Explain (10 min):</b>
        teacher gives the concept in simple language
        with one board diagram.
      </li>

      <li>
        <b>Elaborate (10 min):</b>
        pair activity using a low-cost/local example.
      </li>

      <li>
        <b>Evaluate (5 min):</b>
        3-question exit ticket.
      </li>

    </ol>

    <div class="ai-example">

      <b>Easy connection:</b>

      Use a lemon, bicycle, water bottle,
      fan, shadow or another familiar object
      whenever it naturally connects to the concept.

      The AI will suggest the most suitable example
      in the production version.

    </div>

    <h3>
      Homework
    </h3>

    <p>
      Write two real-life examples related to
      <b>${ch}</b>.
    </p>
    `
  );
}

/* =========================================================
   PPT
   ========================================================= */

function generatePPT(ch) {

  openModal(
    "PPT Generator — " + ch,

    `
    <div class="notice">

      Demo PPT outline generated.
      A real PPT export can be connected
      to a document-generation service later.

    </div>

    <ol>

      <li>
        Title & learning objective
      </li>

      <li>
        Prior knowledge check
      </li>

      <li>
        Core concept
      </li>

      <li>
        Real-life example
      </li>

      <li>
        Classroom activity
      </li>

      <li>
        Quick assessment
      </li>

      <li>
        Homework
      </li>

    </ol>

    <button
      class="btn primary"
      onclick="downloadText(
        'GuruSetu-PPT-${ch.replace(
          /\W+/g,
          "-"
        )}.txt',

        'PPT Outline\\n\\nChapter: ${ch}\\n\\n1. Learning Objective\\n2. Core Concept\\n3. Real-life Example\\n4. Activity\\n5. Assessment'
      )">

      Download Demo Outline

    </button>
    `
  );
}

/* =========================================================
   MIND MAP
   ========================================================= */

function generateMindMap(ch) {

  openModal(
    "Mind Map — " + ch,

    `
    <div
      style="
        display:grid;
        place-items:center;
        padding:25px
      ">

      <div
        style="
          padding:20px 30px;
          border-radius:50%;
          background:#eaf0ff;
          border:2px solid #1749c6;
          font-weight:800
        ">

        ${ch}

      </div>

      <div
        style="
          margin-top:20px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:15px;
          width:100%
        ">

        <div class="card">
          Key Concepts
        </div>

        <div class="card">
          Examples
        </div>

        <div class="card">
          Activity
        </div>

        <div class="card">
          Assessment
        </div>

      </div>

    </div>
    `
  );
}

/* =========================================================
   ACTIVITY
   ========================================================= */

function generateActivity(ch) {

  openModal(
    "Classroom Activity — " + ch,

    `
    <h3>
      Think–Pair–Share
    </h3>

    <p>
      Ask students to identify one example of
      <b>${ch}</b>
      from their home or surroundings.

      Give pairs 3 minutes to compare answers
      and then invite two pairs to explain.
    </p>

    <h3>
      Materials
    </h3>

    <p>
      Notebook, board, locally available objects.
    </p>

    <h3>
      Duration
    </h3>

    <p>
      10–15 minutes.
    </p>
    `
  );
}

/* =========================================================
   EXPERIMENT
   ========================================================= */

function generateExperiment(ch) {

  openModal(
    "Experiment — " + ch,

    `
    <h3>
      Safe classroom demonstration
    </h3>

    <p>
      Use simple, non-hazardous classroom materials
      to demonstrate one concept from
      <b>${ch}</b>.

      Students predict the result,
      observe, record it, and explain why it happened.
    </p>

    <div class="notice">

      Teacher supervision required.
      Replace materials with age-appropriate
      safe alternatives.

    </div>
    `
  );
}

/* =========================================================
   SHORT VIDEO
   ========================================================= */

function generateVideo(ch) {

  openModal(
    "30–40 sec Teaching Video Concept — " + ch,

    `
    <div class="notice success">
      Demo storyboard generated
    </div>

    <ol>

      <li>
        0–5 sec:
        Show a familiar daily-life situation.
      </li>

      <li>
        5–15 sec:
        Ask a curiosity question.
      </li>

      <li>
        15–28 sec:
        Explain the concept in simple language.
      </li>

      <li>
        28–35 sec:
        Show a quick example.
      </li>

      <li>
        35–40 sec:
        End with a student question.
      </li>

    </ol>

    <p>

      <b>Example:</b>

      “Why does this happen in our daily life?”

      → connect the answer to
      <b>${ch}</b>.

    </p>
    `
  );
}

/* =========================================================
   UPLOAD PDF / IMAGE DEMO
   ========================================================= */

function uploadDemo(type) {

  openModal(
    "Upload " + type + " → Ask GuruSetu AI",

    `
    <div class="upload-zone">

      <div class="upload-icon">

        ${
          type === "PDF"
            ? "📄"
            : "🖼️"
        }

      </div>

      <h3>
        Upload your
        ${type.toLowerCase()}
      </h3>

      <p class="muted">

        Choose a textbook page,
        worksheet or notes.

        This demo keeps the file local.

      </p>

      <input
        id="uploadInput"
        type="file"
        accept="${
          type === "PDF"
            ? ".pdf"
            : "image/*"
        }"
        onchange="fileChosen(this,'${type}')">

      <div
        id="filemsg"
        class="notice"
        style="margin-top:15px">

        Waiting for file…

      </div>

    </div>

    <div class="ai-suggestions">

      <button
        onclick="
          openModal(
            'What AI can do',
            '<h3>After upload, AI can:</h3><ul><li>Explain the content in simple language</li><li>Create a lesson plan</li><li>Generate questions and activities</li><li>Create a PPT outline and mind map</li></ul><div class=\\'notice success\\'>Production version: connect a document/vision AI API here.</div>'
          )
        ">

        See AI actions

      </button>

    </div>
    `
  );
}

function fileChosen(
  input,
  type
) {

  const msg =
    document.getElementById(
      "filemsg"
    );

  if (!msg) {
    return;
  }

  msg.innerHTML =
    input.files[0]
      ? `
        ✓ ${type} selected:
        <b>${input.files[0].name}</b>

        <br>

        <span class="muted">
          Demo upload complete (local only).
        </span>
        `
      :
        "No file selected.";
}

/* =========================================================
   AI CHAT
   ========================================================= */

function showAI(ch) {

  const chapter =
    ch ||
    state.selectedChapter ||
    "the selected chapter";

  openModal(
    "GuruSetu AI Teaching Assistant",

    `
    <p class="muted">

      Ask about
      <b>${chapter}</b>.

      This is a local demo assistant;
      connect a real AI API later.

    </p>

    <div
      class="chat"
      id="chat">

      <div class="msg bot">

        Namaste!

        I can help you prepare a lesson for
        <b>${chapter}</b>.

        Ask me for an explanation,
        activity or assessment.

      </div>

    </div>

    <div
      class="searchrow"
      style="margin-top:10px">

      <input
        id="chatq"
        placeholder="e.g. Explain this for Class 8 students">

      <button
        class="btn primary"
        onclick="chatSend('${escapeJs(chapter)}')">

        Send

      </button>

    </div>
    `
  );
}

/* =========================================================
   AI RESPONSE ENGINE
   ========================================================= */

function aiAnswer(
  question,
  chapter
) {

  const q =
    (question || "")
      .toLowerCase();

  const c =
    chapter ||
    "this chapter";

  if (
    q.includes("lemon") ||
    q.includes("easy example") ||
    q.includes("simple example") ||
    q.includes("real life")
  ) {

    return `
      <b>
        Easy classroom explanation
      </b>

      <p>
        Start with something students
        already know.

        For <b>${c}</b>,
        first ask:

        <i>
          “Where have you seen this
          in your daily life?”
        </i>
      </p>

      <div class="ai-example">

        <b>Teacher example:</b>

        Take a lemon as the familiar object.

        Show it, ask students what they notice,
        then connect their answers to
        the chapter concept.

        Keep the first explanation
        to one idea at a time.

      </div>

      <p>

        <b>Ask students:</b>

        “Can you give one more example
        from home or school?”

      </p>

      <p>

        <b>Quick activity:</b>

        Think → Pair → Share for 3 minutes.

      </p>
    `;
  }

  if (
    q.includes("teach") ||
    q.includes("explain") ||
    q.includes("understand")
  ) {

    return `
      <b>
        Teach ${c} in 4 steps
      </b>

      <ol>

        <li>
          <b>Connect:</b>
          begin with a familiar situation.
        </li>

        <li>
          <b>Explain:</b>
          give one short definition
          in simple language.
        </li>

        <li>
          <b>Show:</b>
          use a board diagram,
          object or quick demonstration.
        </li>

        <li>
          <b>Check:</b>
          ask one “why/how” question
          and one example question.
        </li>

      </ol>

      <div class="ai-example">

        <b>Classroom tip:</b>

        Avoid explaining the whole chapter
        at once.

        Teach one concept,
        ask a question,
        then move to the next.

      </div>
    `;
  }

  if (
    q.includes("quiz") ||
    q.includes("question")
  ) {

    return `
      <b>
        Quick questions for ${c}
      </b>

      <ol>

        <li>
          What is the main idea of this topic?
        </li>

        <li>
          Explain it in your own words.
        </li>

        <li>
          Give one example from daily life.
        </li>

        <li>
          What would happen if one condition changed?
        </li>

      </ol>

      <p>

        <b>Exit ticket:</b>

        “One thing I understood +
        one question I still have.”

      </p>
    `;
  }

  if (
    q.includes("activity") ||
    q.includes("experiment")
  ) {

    return `
      <b>
        Low-cost classroom activity
      </b>

      <p>

        Put students in pairs.

        Give them a simple observation/task
        related to <b>${c}</b>.

        Let them predict the result,
        discuss for 3 minutes,
        observe, and share one conclusion.

      </p>

      <div class="ai-example">

        <b>Materials:</b>

        notebook, board and safe locally
        available objects.

        <b>Time:</b>
        10–15 minutes.

      </div>
    `;
  }

  if (
    q.includes("ppt") ||
    q.includes("presentation")
  ) {

    return `
      <b>
        7-slide PPT plan — ${c}
      </b>

      <ol>

        <li>
          Title + learning objective
        </li>

        <li>
          What students already know
        </li>

        <li>
          Core concept
        </li>

        <li>
          Simple real-life example
        </li>

        <li>
          Diagram / activity
        </li>

        <li>
          3-question check
        </li>

        <li>
          Homework / recap
        </li>

      </ol>

      <p>
        Keep each slide visual
        and use short sentences.
      </p>
    `;
  }

  return `
    <b>
      GuruSetu AI — ${c}
    </b>

    <p>

      I can help you with a

      <b>
        simple explanation,
        real-life example,
        lesson plan,
        quiz,
        activity,
        experiment,
        PPT or mind map
      </b>.

    </p>

    <div class="ai-suggestions">

      <button
        onclick="
          quickAsk(
            'Explain this with a simple real-life example',
            '${escapeJs(c)}'
          )
        ">

        💡 Easy example

      </button>

      <button
        onclick="
          quickAsk(
            'How should I teach this topic?',
            '${escapeJs(c)}'
          )
        ">

        👩‍🏫 How to teach

      </button>

      <button
        onclick="
          quickAsk(
            'Give me a quick quiz',
            '${escapeJs(c)}'
          )
        ">

        ❓ Quiz

      </button>

      <button
        onclick="
          quickAsk(
            'Give me a classroom activity',
            '${escapeJs(c)}'
          )
        ">

        👥 Activity

      </button>

    </div>
  `;
}

/* =========================================================
   FULL CHAT
   ========================================================= */

function chatSend(ch) {

  const input =
    document.getElementById(
      "chatq"
    );

  const q =
    input?.value.trim();

  if (!q) {
    return;
  }

  const chat =
    document.getElementById(
      "chat"
    );

  chat.innerHTML +=
    `
    <div class="msg user">
      ${q}
    </div>

    <div class="msg bot">
      ${aiAnswer(q, ch)}
    </div>
    `;

  input.value = "";

  chat.scrollTop =
    chat.scrollHeight;
}

function quickAsk(
  q,
  ch
) {

  const input =
    document.getElementById(
      "chatq"
    );

  if (input) {

    input.value = q;

    chatSend(ch);
  }
}

/* =========================================================
   TEACHER PROFILE
   ========================================================= */

function showTeacherProfile() {

  const t =
    state.teacher || {};

  openModal(
    "My Profile",

    `
    <div class="card">

      <b>Teacher</b>

      <p>
        ${t.name || "Demo Science Teacher"}
      </p>

      <b>Classes</b>

      <p>
        ${t.classes || "8–12"}
      </p>

      <b>Subjects</b>

      <p>
        ${t.subject || "Science"}
      </p>

      <b>Status</b>

      <p>

        <span class="badge">
          APPROVED
        </span>

      </p>

    </div>
    `
  );
}

/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function showNotifications() {

  openModal(
    "Notifications",

    `
    <div class="notice success">

      📚 Today's lesson plan is ready.

    </div>

    <div class="notice">

      WhatsApp/SMS demo notification
      prepared for registered mobile number.

    </div>
    `
  );
}

/* =========================================================
   DOWNLOAD TEXT
   ========================================================= */

function downloadText(
  name,
  text
) {

  const a =
    document.createElement("a");

  a.href =
    URL.createObjectURL(
      new Blob(
        [text],
        {
          type: "text/plain"
        }
      )
    );

  a.download = name;

  a.click();

  setTimeout(
    () =>
      URL.revokeObjectURL(a.href),
    1000
  );
}

/* =========================================================
   START APP
   ========================================================= */

home();

/* =========================================================
   PRINCIPAL TEACHER APPROVAL - DEMO FIX
   ========================================================= */

document.addEventListener("click", function (e) {
  const target = e.target.closest("button");
  if (!target) return;

  const buttonText = target.textContent.trim().toLowerCase();

  // Only handle Approve / Reject buttons
  if (buttonText !== "approve" && buttonText !== "reject") return;

  e.preventDefault();
  e.stopPropagation();

  // Find the teacher row
  const row = target.closest("tr");

  if (!row) {
    alert("Teacher record could not be found.");
    return;
  }

  const teacherName =
    row.querySelector("td:first-child")?.innerText
      ?.split("\n")[0]
      ?.trim() || "Teacher";

  if (buttonText === "approve") {
    // Save approved teacher
    const approvedTeachers =
      JSON.parse(localStorage.getItem("gurusetu_approved_teachers") || "[]");

    if (!approvedTeachers.includes(teacherName)) {
      approvedTeachers.push(teacherName);
    }

    localStorage.setItem(
      "gurusetu_approved_teachers",
      JSON.stringify(approvedTeachers)
    );

    // Remove from pending list
    row.remove();

    updateTeacherApprovalCounts();

    showDemoMessage(
      `${teacherName} has been approved successfully.`,
      "success"
    );

  } else if (buttonText === "reject") {

    const rejectedTeachers =
      JSON.parse(localStorage.getItem("gurusetu_rejected_teachers") || "[]");

    if (!rejectedTeachers.includes(teacherName)) {
      rejectedTeachers.push(teacherName);
    }

    localStorage.setItem(
      "gurusetu_rejected_teachers",
      JSON.stringify(rejectedTeachers)
    );

    // Remove from pending list
    row.remove();

    updateTeacherApprovalCounts();

    showDemoMessage(
      `${teacherName} has been rejected.`,
      "error"
    );
  }
});


/* ---------------------------------------------------------
   UPDATE DASHBOARD COUNTERS
   --------------------------------------------------------- */

function updateTeacherApprovalCounts() {

  const pendingRows = document.querySelectorAll(
    "table tbody tr"
  );

  const pendingCount = [...pendingRows].filter(row => {
    return row.querySelector("button");
  }).length;

  const approvedTeachers =
    JSON.parse(
      localStorage.getItem("gurusetu_approved_teachers") || "[]"
    );

  // Find dashboard cards by text
  document.querySelectorAll("*").forEach(el => {

    if (el.children.length > 0) return;

    const text = el.textContent.trim();

    if (text === "Pending Teachers") {
      const number = el.previousElementSibling;
      if (number) number.textContent = pendingCount;
    }

    if (text === "Approved Teachers") {
      const number = el.previousElementSibling;
      if (number) number.textContent = approvedTeachers.length;
    }
  });
}


/* ---------------------------------------------------------
   DEMO NOTIFICATION
   --------------------------------------------------------- */

function showDemoMessage(message, type) {

  const old = document.querySelector(".gurusetu-demo-message");
  if (old) old.remove();

  const box = document.createElement("div");

  box.className = "gurusetu-demo-message";

  box.textContent = message;

  box.style.position = "fixed";
  box.style.top = "90px";
  box.style.right = "30px";
  box.style.zIndex = "99999";
  box.style.padding = "16px 22px";
  box.style.borderRadius = "12px";
  box.style.fontWeight = "600";
  box.style.fontSize = "15px";
  box.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";
  box.style.background =
    type === "success" ? "#e8f7ee" : "#fff0f0";
  box.style.color =
    type === "success" ? "#176b3a" : "#a22b2b";
  box.style.border =
    type === "success"
      ? "1px solid #9ad5b2"
      : "1px solid #efaaaa";

  document.body.appendChild(box);

  setTimeout(() => {
    box.remove();
  }, 3000);
}