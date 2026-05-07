
const STORAGE_KEY = "carrier_portal_records_v3";
const AGENT_KEY = "carrier_portal_agent_v3";
const CURRENT_KEY = "carrier_portal_current_v3";

const scenarios = [
  {
    id: "auto-easy-1",
    line: "Auto",
    difficulty: "Easy",
    title: "Standard Preferred Driver",
    description: "Clean household risk with continuous prior insurance and requested full coverage package.",
    facts: [
      "Applicant: Maria Santos, age 34, married, continuous prior insurance for 4 years.",
      "Vehicle: 2021 Toyota Corolla LE, owned, primary use commute, 11,000 annual miles.",
      "Garaging ZIP: 33511. Anti-theft device: Yes.",
      "Driving history: 0 accidents, 0 violations.",
      "Requested coverages: BI 100/300, PD 100, UM/UIM Yes, Comp 500, Collision 500, Rental Yes, Roadside Yes.",
      "Discounts: Paperless Yes, Paid in Full Yes, Bundle No."
    ],
    expected: {
      insuredName: "Maria Santos",
      maritalStatus: "Married",
      insuranceStatus: "Continuous",
      priorYears: 4,
      garagingZip: "33511",
      accidents: 0,
      violations: 0,
      annualMileage: 11000,
      vehicleYear: 2021,
      vehicleMake: "Toyota",
      vehicleModel: "Corolla LE",
      vehicleUse: "Commute",
      antiTheft: "Yes",
      bodilyInjury: "100/300",
      propertyDamage: "100",
      um: "Yes",
      compDeductible: 500,
      collisionDeductible: 500,
      rental: "Yes",
      roadside: "Yes",
      paperless: "Yes",
      paidInFull: "Yes",
      bundle: "No"
    }
  },
  {
    id: "auto-normal-1",
    line: "Auto",
    difficulty: "Normal",
    title: "Household With Teen Driver",
    description: "Preferred home-and-auto style risk with one teen driver and a higher liability request.",
    facts: [
      "Applicant: James Miller, age 46, married, continuous insurance for 7 years.",
      "Vehicle: 2023 Honda CR-V EX, financed, use mixed pleasure/commute, 16,500 annual miles.",
      "Garaging ZIP: 75052. Anti-theft device: Yes.",
      "Driving history: 0 accidents, 1 minor speeding violation.",
      "Requested coverages: BI 250/500, PD 100, UM/UIM Yes, Comp 250, Collision 500, Rental Yes, Roadside Yes.",
      "Discounts: Bundle Yes, Paperless Yes, Paid in Full No."
    ],
    expected: {
      insuredName: "James Miller",
      maritalStatus: "Married",
      insuranceStatus: "Continuous",
      priorYears: 7,
      garagingZip: "75052",
      accidents: 0,
      violations: 1,
      annualMileage: 16500,
      vehicleYear: 2023,
      vehicleMake: "Honda",
      vehicleModel: "CR-V EX",
      vehicleUse: "Mixed",
      antiTheft: "Yes",
      bodilyInjury: "250/500",
      propertyDamage: "100",
      um: "Yes",
      compDeductible: 250,
      collisionDeductible: 500,
      rental: "Yes",
      roadside: "Yes",
      paperless: "Yes",
      paidInFull: "No",
      bundle: "Yes"
    }
  },
  {
    id: "auto-hard-1",
    line: "Auto",
    difficulty: "Hard",
    title: "Prior Lapse With Adverse History",
    description: "Hard scenario with lapse, violation, and at-fault accident. Accuracy matters on every field.",
    facts: [
      "Applicant: Kevin Ramirez, age 29, single, prior insurance lapsed 21 days.",
      "Vehicle: 2019 Nissan Altima SV, owned, commute use, 18,000 annual miles.",
      "Garaging ZIP: 32824. Anti-theft device: No.",
      "Driving history: 1 at-fault accident, 1 speeding violation.",
      "Requested coverages: BI 50/100, PD 50, UM/UIM No, Comp 1000, Collision 1000, Rental No, Roadside Yes.",
      "Discounts: Bundle No, Paperless No, Paid in Full No."
    ],
    expected: {
      insuredName: "Kevin Ramirez",
      maritalStatus: "Single",
      insuranceStatus: "Lapse",
      priorYears: 0,
      garagingZip: "32824",
      accidents: 1,
      violations: 1,
      annualMileage: 18000,
      vehicleYear: 2019,
      vehicleMake: "Nissan",
      vehicleModel: "Altima SV",
      vehicleUse: "Commute",
      antiTheft: "No",
      bodilyInjury: "50/100",
      propertyDamage: "50",
      um: "No",
      compDeductible: 1000,
      collisionDeductible: 1000,
      rental: "No",
      roadside: "Yes",
      paperless: "No",
      paidInFull: "No",
      bundle: "No"
    }
  },
  {
    id: "home-easy-1",
    line: "Home",
    difficulty: "Easy",
    title: "Owner Occupied Standard Home",
    description: "Straightforward homeowner quote with favorable protection features and no losses.",
    facts: [
      "Applicant: Linda Carter.",
      "Property: Owner occupied single-family home, built 2018, 2,150 sq ft, masonry exterior.",
      "Roof: Composition, 6 years old. Protection class 3. Distance to fire station: Under 5 miles.",
      "Protection devices: Fire alarm Yes, Burglar alarm Yes, Sprinkler No.",
      "Loss history: 0 claims, continuous prior insurance.",
      "Requested coverages: Dwelling 360000, Liability 300000, Med Pay 5000, AOP 1000, Wind/Hail 2%, Pool No, Dog No."
    ],
    expected: {
      insuredName: "Linda Carter",
      occupancy: "Owner Occupied",
      insuranceStatus: "Continuous",
      yearBuilt: 2018,
      squareFootage: 2150,
      constructionType: "Masonry",
      roofType: "Composition",
      roofAge: 6,
      protectionClass: 3,
      distanceToFire: "Under 5 miles",
      fireAlarm: "Yes",
      burglarAlarm: "Yes",
      sprinkler: "No",
      priorClaims: 0,
      dwellingCoverage: 360000,
      liabilityCoverage: 300000,
      medicalPayments: 5000,
      allOtherPerilsDeductible: 1000,
      windHailDeductible: "2%",
      pool: "No",
      dog: "No"
    }
  },
  {
    id: "home-normal-1",
    line: "Home",
    difficulty: "Normal",
    title: "Bundled Home With Prior Water Claim",
    description: "Normal scenario with prior claim history, pool exposure, and higher dwelling limit.",
    facts: [
      "Applicant: Rebecca Hall.",
      "Property: Owner occupied home, built 2009, 2,780 sq ft, frame exterior.",
      "Roof: Architectural shingle, 10 years old. Protection class 5. Distance to fire station: 6 to 10 miles.",
      "Protection devices: Fire alarm Yes, Burglar alarm No, Sprinkler No.",
      "Loss history: 1 water claim 3 years ago, continuous insurance.",
      "Requested coverages: Dwelling 495000, Liability 500000, Med Pay 5000, AOP 2500, Wind/Hail 2%, Pool Yes, Dog No, Bundle Yes."
    ],
    expected: {
      insuredName: "Rebecca Hall",
      occupancy: "Owner Occupied",
      insuranceStatus: "Continuous",
      yearBuilt: 2009,
      squareFootage: 2780,
      constructionType: "Frame",
      roofType: "Architectural Shingle",
      roofAge: 10,
      protectionClass: 5,
      distanceToFire: "6 to 10 miles",
      fireAlarm: "Yes",
      burglarAlarm: "No",
      sprinkler: "No",
      priorClaims: 1,
      dwellingCoverage: 495000,
      liabilityCoverage: 500000,
      medicalPayments: 5000,
      allOtherPerilsDeductible: 2500,
      windHailDeductible: "2%",
      pool: "Yes",
      dog: "No",
      bundle: "Yes"
    }
  },
  {
    id: "home-hard-1",
    line: "Home",
    difficulty: "Hard",
    title: "Older Roof With Dog Exposure",
    description: "Hard homeowner risk with roof age, lapse, and added liability exposure.",
    facts: [
      "Applicant: Daniel Brooks.",
      "Property: Owner occupied home, built 1998, 2,420 sq ft, frame exterior.",
      "Roof: Composition, 17 years old. Protection class 7. Distance to fire station: 11+ miles.",
      "Protection devices: Fire alarm No, Burglar alarm Yes, Sprinkler No.",
      "Loss history: 1 wind claim 2 years ago, prior insurance lapsed 14 days.",
      "Requested coverages: Dwelling 410000, Liability 300000, Med Pay 1000, AOP 2500, Wind/Hail 5%, Pool No, Dog Yes."
    ],
    expected: {
      insuredName: "Daniel Brooks",
      occupancy: "Owner Occupied",
      insuranceStatus: "Lapse",
      yearBuilt: 1998,
      squareFootage: 2420,
      constructionType: "Frame",
      roofType: "Composition",
      roofAge: 17,
      protectionClass: 7,
      distanceToFire: "11+ miles",
      fireAlarm: "No",
      burglarAlarm: "Yes",
      sprinkler: "No",
      priorClaims: 1,
      dwellingCoverage: 410000,
      liabilityCoverage: 300000,
      medicalPayments: 1000,
      allOtherPerilsDeductible: 2500,
      windHailDeductible: "5%",
      pool: "No",
      dog: "Yes",
      bundle: "No"
    }
  }
];

const carrierProfiles = {
  Auto: [
    { name: "Harbor Casualty", factor: 1.0, fee: 25 },
    { name: "BluePeak Insurance", factor: 0.95, fee: 38 },
    { name: "Summit National", factor: 1.08, fee: 19 }
  ],
  Home: [
    { name: "Stonegate Property", factor: 0.94, fee: 42 },
    { name: "BluePeak Property", factor: 1.0, fee: 27 },
    { name: "Crescent Home", factor: 1.11, fee: 18 }
  ]
};

const baseForm = {
  insuredName: "",
  email: "",
  phone: "",
  effectiveDate: "",
  maritalStatus: "Single",
  garagingZip: "",
  insuranceStatus: "Continuous",
  priorCarrier: "",
  priorYears: 0,
  driverAge: 30,
  yearsLicensed: 10,
  accidents: 0,
  violations: 0,
  annualMileage: 12000,
  vehicleYear: new Date().getFullYear(),
  vehicleMake: "",
  vehicleModel: "",
  vin: "",
  ownership: "Owned",
  vehicleUse: "Commute",
  antiTheft: "Yes",
  bodilyInjury: "100/300",
  propertyDamage: "100",
  um: "Yes",
  compDeductible: 500,
  collisionDeductible: 500,
  rental: "Yes",
  roadside: "Yes",
  paperless: "Yes",
  paidInFull: "No",
  bundle: "No",
  address: "",
  city: "",
  state: "",
  occupancy: "Owner Occupied",
  yearBuilt: 2015,
  squareFootage: 2000,
  stories: 1,
  constructionType: "Frame",
  roofType: "Composition",
  roofAge: 8,
  foundationType: "Slab",
  protectionClass: 3,
  distanceToFire: "Under 5 miles",
  fireAlarm: "Yes",
  burglarAlarm: "No",
  sprinkler: "No",
  priorClaims: 0,
  dwellingCoverage: 350000,
  otherStructuresPct: 10,
  personalPropertyPct: 50,
  lossOfUsePct: 20,
  liabilityCoverage: 300000,
  medicalPayments: 5000,
  allOtherPerilsDeductible: 1000,
  windHailDeductible: "2%",
  pool: "No",
  dog: "No",
  trampoline: "No"
};

const autoSteps = ["Applicant", "Driver & Vehicle", "Coverage", "Review"];
const homeSteps = ["Applicant", "Property", "Coverage", "Review"];

const Q = (s, root = document) => root.querySelector(s);
const QA = (s, root = document) => Array.from(root.querySelectorAll(s));

function loadRecords() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); }
  catch { return []; }
}
function saveRecords(records) { localStorage.setItem(STORAGE_KEY, JSON.stringify(records)); }
function loadAgent() {
  try { return JSON.parse(localStorage.getItem(AGENT_KEY) || "null"); }
  catch { return null; }
}
function saveAgent(agent) { localStorage.setItem(AGENT_KEY, JSON.stringify(agent)); }
function getCurrentId() { return localStorage.getItem(CURRENT_KEY) || ""; }
function setCurrentId(id) { localStorage.setItem(CURRENT_KEY, id || ""); }
function uid() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }

function normalize(value) { return String(value ?? "").trim().toLowerCase(); }
function money(value) {
  return Number(value || 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });
}
function formatDate(value) {
  if (!value) return "—";
  const d = new Date(value);
  return isNaN(d) ? value : d.toLocaleString();
}
function scenarioById(id) { return scenarios.find(s => s.id === id); }

function ensureAgent(page) {
  const agent = loadAgent();
  if (!agent && page !== "login") {
    location.href = "index.html";
    return null;
  }
  return agent;
}

function navActive(page) {
  QA("[data-nav]").forEach(a => {
    if (a.getAttribute("data-nav") === page) a.classList.add("active");
  });
}

function setAgentChip() {
  const agent = loadAgent();
  const el = Q("[data-agent-name]");
  if (el && agent) el.textContent = `${agent.name} · ${agent.role}`;
}

function getStats(records) {
  const scored = records.filter(r => typeof r.accuracyScore === "number");
  return {
    total: records.length,
    drafts: records.filter(r => r.status === "Draft").length,
    completed: records.filter(r => r.status === "Completed").length,
    accuracy: scored.length ? Math.round(scored.reduce((sum, r) => sum + r.accuracyScore, 0) / scored.length) : 0
  };
}

function scoreAccuracy(expected, form) {
  const keys = Object.keys(expected || {});
  let matched = 0;
  const mismatches = [];
  keys.forEach(key => {
    if (normalize(form[key]) === normalize(expected[key])) matched += 1;
    else mismatches.push({ field: key, expected: expected[key], actual: form[key] ?? "Blank" });
  });
  return {
    score: keys.length ? Math.round((matched / keys.length) * 100) : 100,
    mismatches
  };
}

function autoPremium(form) {
  let premium = 720;
  const age = +form.driverAge || 0;
  const licensed = +form.yearsLicensed || 0;
  const accidents = +form.accidents || 0;
  const violations = +form.violations || 0;
  const annualMileage = +form.annualMileage || 0;
  const vehicleYear = +form.vehicleYear || 0;
  const priorYears = +form.priorYears || 0;

  if (age < 21) premium += 540;
  else if (age < 25) premium += 280;
  else if (age > 70) premium += 100;
  else premium += 35;

  if (licensed < 3) premium += 160;
  premium += accidents * 290;
  premium += violations * 170;

  if (form.insuranceStatus === "Lapse") premium += 180;
  if (priorYears >= 3) premium -= 70;
  if (form.maritalStatus === "Married") premium -= 50;

  if (annualMileage > 15000) premium += 120;
  else if (annualMileage < 8000) premium -= 40;

  if (form.vehicleUse === "Commute") premium += 75;
  if (form.vehicleUse === "Business") premium += 160;
  if (form.vehicleUse === "Mixed") premium += 55;

  if (vehicleYear >= 2023) premium += 85;
  else if (vehicleYear <= 2016) premium += 45;

  if (form.ownership === "Financed") premium += 40;
  if (form.antiTheft === "Yes") premium -= 25;

  premium += ({ "25/50": 0, "50/100": 55, "100/300": 115, "250/500": 230 }[form.bodilyInjury] || 0);
  premium += ({ "25": 0, "50": 35, "100": 75 }[form.propertyDamage] || 0);

  if (form.um === "Yes") premium += 58;
  if (+form.compDeductible === 250) premium += 52;
  if (+form.compDeductible === 1000) premium -= 38;
  if (+form.collisionDeductible === 250) premium += 70;
  if (+form.collisionDeductible === 1000) premium -= 55;
  if (form.rental === "Yes") premium += 36;
  if (form.roadside === "Yes") premium += 18;
  if (form.bundle === "Yes") premium -= 85;
  if (form.paperless === "Yes") premium -= 12;
  if (form.paidInFull === "Yes") premium -= 28;

  return Math.max(420, Math.round(premium));
}

function homePremium(form) {
  let premium = 640;
  const yearBuilt = +form.yearBuilt || 0;
  const squareFootage = +form.squareFootage || 0;
  const roofAge = +form.roofAge || 0;
  const priorClaims = +form.priorClaims || 0;
  const dwellingCoverage = +form.dwellingCoverage || 0;
  const protectionClass = +form.protectionClass || 0;

  premium += Math.round(dwellingCoverage / 1100);
  premium += Math.round(squareFootage / 18);

  if (form.occupancy !== "Owner Occupied") premium += 260;
  if (yearBuilt < 2000) premium += 125;
  if (yearBuilt < 1985) premium += 95;

  if (form.constructionType === "Frame") premium += 70;
  if (form.constructionType === "Masonry") premium -= 30;

  if (roofAge >= 15) premium += 240;
  else if (roofAge >= 10) premium += 95;
  else premium -= 20;

  if (protectionClass >= 7) premium += 160;
  else if (protectionClass >= 5) premium += 85;

  if (form.distanceToFire === "11+ miles") premium += 135;
  if (form.distanceToFire === "6 to 10 miles") premium += 65;

  if (form.fireAlarm === "Yes") premium -= 25;
  if (form.burglarAlarm === "Yes") premium -= 18;
  if (form.sprinkler === "Yes") premium -= 32;

  premium += priorClaims * 145;
  if (form.insuranceStatus === "Lapse") premium += 180;
  if (+form.liabilityCoverage >= 500000) premium += 55;
  if (+form.medicalPayments >= 5000) premium += 12;
  if (+form.allOtherPerilsDeductible >= 2500) premium -= 70;
  if (form.windHailDeductible === "5%") premium -= 42;
  if (form.pool === "Yes") premium += 95;
  if (form.dog === "Yes") premium += 120;
  if (form.trampoline === "Yes") premium += 90;
  if (form.bundle === "Yes") premium -= 80;

  return Math.max(650, Math.round(premium));
}

function buildQuotes(line, form) {
  const base = line === "Auto" ? autoPremium(form) : homePremium(form);
  return carrierProfiles[line]
    .map(carrier => {
      const annual = Math.round(base * carrier.factor + carrier.fee);
      return {
        carrier: carrier.name,
        annualPremium: annual,
        monthlyPremium: Math.round((annual / 12) * 100) / 100
      };
    })
    .sort((a, b) => a.annualPremium - b.annualPremium);
}

function createRecord(scenario) {
  return {
    id: uid(),
    scenarioId: scenario.id,
    scenarioTitle: scenario.title,
    description: scenario.description,
    line: scenario.line,
    difficulty: scenario.difficulty,
    step: 0,
    status: "Draft",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    accuracyScore: null,
    quoteOptions: [],
    mismatches: [],
    form: structuredClone(baseForm)
  };
}

function updateRecord(id, patch) {
  const records = loadRecords();
  const next = records.map(r => r.id === id ? { ...r, ...patch, updatedAt: new Date().toISOString() } : r);
  saveRecords(next);
  return next.find(r => r.id === id);
}

function patchForm(id, patch) {
  const records = loadRecords();
  const next = records.map(r => r.id === id ? { ...r, form: { ...r.form, ...patch }, updatedAt: new Date().toISOString() } : r);
  saveRecords(next);
  return next.find(r => r.id === id);
}

function removeRecord(id) {
  const filtered = loadRecords().filter(r => r.id !== id);
  saveRecords(filtered);
  if (getCurrentId() === id) setCurrentId("");
}

function pdfForRecord(record) {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("PDF library did not load.");
    return;
  }
  const scenario = scenarioById(record.scenarioId);
  const best = (record.quoteOptions || [])[0];
  const doc = new window.jspdf.jsPDF();
  let y = 18;

  doc.setFontSize(20);
  doc.text("Carrier Training Quote Summary", 14, y);
  y += 8;
  doc.setFontSize(10);
  doc.text(`Generated: ${new Date().toLocaleString()}`, 14, y); y += 6;
  doc.text(`Scenario: ${record.scenarioTitle}`, 14, y); y += 6;
  doc.text(`Line: ${record.line}`, 14, y); y += 6;
  doc.text(`Difficulty: ${record.difficulty}`, 14, y); y += 6;
  doc.text(`Status: ${record.status}`, 14, y); y += 10;

  doc.setFontSize(13);
  doc.text("Applicant Summary", 14, y);
  y += 7;
  doc.setFontSize(10);
  doc.text(`Named Insured: ${record.form.insuredName || "—"}`, 14, y); y += 6;
  doc.text(`Effective Date: ${record.form.effectiveDate || "—"}`, 14, y); y += 6;
  doc.text(`Insurance Status: ${record.form.insuranceStatus || "—"}`, 14, y); y += 8;

  if (record.line === "Auto") {
    doc.text(`Vehicle: ${(record.form.vehicleYear || "")} ${(record.form.vehicleMake || "")} ${(record.form.vehicleModel || "")}`.trim(), 14, y); y += 6;
    doc.text(`Mileage / Use: ${record.form.annualMileage || 0} / ${record.form.vehicleUse || "—"}`, 14, y); y += 6;
    doc.text(`Coverage: BI ${record.form.bodilyInjury}, PD ${record.form.propertyDamage}, Comp ${record.form.compDeductible}, Coll ${record.form.collisionDeductible}`, 14, y); y += 8;
  } else {
    doc.text(`Property: ${record.form.address || "—"}`, 14, y); y += 6;
    doc.text(`Home: ${record.form.squareFootage || 0} sq ft, built ${record.form.yearBuilt || "—"}, roof age ${record.form.roofAge || "—"}`, 14, y); y += 6;
    doc.text(`Coverage: Dwelling ${money(record.form.dwellingCoverage)}, Liability ${money(record.form.liabilityCoverage)}, AOP ${money(record.form.allOtherPerilsDeductible)}`, 14, y); y += 8;
  }

  doc.setFontSize(13);
  doc.text("Quote Options", 14, y);
  y += 7;
  doc.setFontSize(10);
  (record.quoteOptions || []).forEach((q, i) => {
    doc.text(`${i + 1}. ${q.carrier} — Annual ${money(q.annualPremium)} | Monthly ${money(q.monthlyPremium)}`, 14, y);
    y += 6;
  });

  if (best) {
    y += 4;
    doc.setFontSize(13);
    doc.text("Recommended Result", 14, y);
    y += 7;
    doc.setFontSize(10);
    doc.text(`Best Carrier: ${best.carrier}`, 14, y); y += 6;
    doc.text(`Annual: ${money(best.annualPremium)}`, 14, y); y += 6;
    doc.text(`Monthly: ${money(best.monthlyPremium)}`, 14, y); y += 8;
  }

  doc.setFontSize(13);
  doc.text("Accuracy Review", 14, y);
  y += 7;
  doc.setFontSize(10);
  doc.text(`Score: ${record.accuracyScore ?? 0}%`, 14, y);
  y += 6;

  const mismatches = record.mismatches || [];
  if (!mismatches.length) {
    doc.text("No mismatches found.", 14, y);
    y += 6;
  } else {
    mismatches.slice(0, 10).forEach(m => {
      if (y > 275) { doc.addPage(); y = 20; }
      const lines = doc.splitTextToSize(`• ${m.field}: expected ${m.expected}, entered ${m.actual}`, 180);
      lines.forEach(line => {
        doc.text(line, 14, y);
        y += 5;
      });
    });
  }

  if (scenario && scenario.facts) {
    if (y > 240) { doc.addPage(); y = 20; }
    else y += 8;
    doc.setFontSize(13);
    doc.text("Scenario Reference", 14, y);
    y += 7;
    doc.setFontSize(10);
    scenario.facts.forEach(fact => {
      const lines = doc.splitTextToSize(`• ${fact}`, 180);
      lines.forEach(line => {
        if (y > 275) { doc.addPage(); y = 20; }
        doc.text(line, 14, y);
        y += 5;
      });
    });
  }

  doc.save(`${record.line.toLowerCase()}-quote-${(record.form.insuredName || "training").replace(/\s+/g, "-").toLowerCase()}.pdf`);
}

function pageHeader(title, copy) {
  return `
    <div class="hero-card">
      <div class="hero-eyebrow">Carrier Portal Training</div>
      <div class="hero-title">${title}</div>
      <div class="hero-copy">${copy}</div>
    </div>
  `;
}

function shell(page, content) {
  return `
    <div class="page-shell">
      <aside class="sidebar">
        <div class="brand-block">
          <div class="brand-logo">CP</div>
          <div>
            <div class="brand-title">Carrier Portal</div>
            <div class="brand-sub">Training environment</div>
          </div>
        </div>
        <div class="side-group-title">Workspace</div>
        <nav class="side-nav">
          <a class="side-link" data-nav="dashboard" href="dashboard.html"><div class="side-icon">⌂</div><div>Dashboard</div></a>
          <a class="side-link" data-nav="scenarios" href="scenario-center.html"><div class="side-icon">◫</div><div>Scenario Center</div></a>
          <a class="side-link" data-nav="quote" href="quote-form.html"><div class="side-icon">✎</div><div>Quote Form</div></a>
          <a class="side-link" data-nav="history" href="quote-history.html"><div class="side-icon">☰</div><div>Quote History</div></a>
        </nav>
        <div class="side-group-title">Utilities</div>
        <nav class="side-nav">
          <a class="side-link" href="#" data-action="logout"><div class="side-icon">⇦</div><div>Sign Out</div></a>
        </nav>
        <div class="sidebar-foot">Portal-inspired training UI for Auto and Home quoting.</div>
      </aside>
      <main class="main">
        <div class="topbar">
          <div class="searchbar">
            <span>🔎</span>
            <input type="text" placeholder="Search quotes, insured names, or scenario IDs" readonly />
          </div>
          <div class="topbar-actions">
            <div class="agent-chip" data-agent-name>Agent</div>
            <div class="ghost-chip">${new Date().toLocaleDateString()}</div>
          </div>
        </div>
        ${content}
      </main>
    </div>
  `;
}

function renderField(name, label, type = "text", help = "", options = null, value = "") {
  if (options) {
    return `
      <div class="field">
        <label>${label}</label>
        ${help ? `<small>${help}</small>` : ""}
        <select name="${name}">
          ${options.map(opt => `<option value="${opt}" ${String(opt) === String(value) ? "selected" : ""}>${opt}</option>`).join("")}
        </select>
      </div>
    `;
  }

  return `
    <div class="field">
      <label>${label}</label>
      ${help ? `<small>${help}</small>` : ""}
      <input type="${type}" name="${name}" value="${value ?? ""}" />
    </div>
  `;
}

function renderActions(record) {
  const steps = record.line === "Auto" ? autoSteps : homeSteps;
  const isLast = record.step === steps.length - 1;
  return `
    <div class="form-actions">
      <div class="inline-actions">
        <button type="button" class="btn btn-outline" id="prevStep" ${record.step === 0 ? "disabled" : ""}>Back</button>
        <button type="button" class="btn btn-outline" id="saveDraft">Save draft</button>
      </div>
      <div class="inline-actions">
        ${isLast
          ? `<button type="button" class="btn btn-primary" id="generateQuote">Generate quote</button>`
          : `<button type="button" class="btn btn-primary" id="nextStep">Next step</button>`
        }
      </div>
    </div>
  `;
}

function renderReviewDetails(record) {
  const f = record.form;
  const leftData = record.line === "Auto"
    ? {
        "Named insured": f.insuredName || "—",
        "Effective date": f.effectiveDate || "—",
        "Insurance status": f.insuranceStatus,
        "Garaging ZIP": f.garagingZip || "—",
        "Vehicle": `${f.vehicleYear || ""} ${f.vehicleMake || ""} ${f.vehicleModel || ""}`.trim() || "—",
        "Mileage / use": `${f.annualMileage || 0} / ${f.vehicleUse}`
      }
    : {
        "Named insured": f.insuredName || "—",
        "Effective date": f.effectiveDate || "—",
        "Insurance status": f.insuranceStatus,
        "Property": f.address || "—",
        "Year built": f.yearBuilt,
        "Square footage": f.squareFootage
      };

  const rightData = record.line === "Auto"
    ? {
        "BI / PD": `${f.bodilyInjury} / ${f.propertyDamage}`,
        "UM/UIM": f.um,
        "Comp / Coll": `${f.compDeductible} / ${f.collisionDeductible}`,
        "Rental / Roadside": `${f.rental} / ${f.roadside}`,
        "Discounts": `Bundle ${f.bundle}, Paperless ${f.paperless}, Paid in Full ${f.paidInFull}`
      }
    : {
        "Dwelling": money(f.dwellingCoverage),
        "Liability": money(f.liabilityCoverage),
        "Med Pay": money(f.medicalPayments),
        "AOP / Wind": `${money(f.allOtherPerilsDeductible)} / ${f.windHailDeductible}`,
        "Exposures": `Pool ${f.pool}, Dog ${f.dog}, Trampoline ${f.trampoline}`
      };

  const rows = data => Object.entries(data).map(([k, v]) => `<div class="review-row"><span>${k}</span><strong>${v}</strong></div>`).join("");

  return `
    <div class="review-grid">
      <div class="review-box">
        <h4>Applicant and risk details</h4>
        ${rows(leftData)}
      </div>
      <div class="review-box">
        <h4>Coverage selection</h4>
        ${rows(rightData)}
      </div>
    </div>
    <div class="notice" style="margin-top:16px">Click <strong>Generate quote</strong> to rate the risk, score the entry against the scenario, and unlock PDF export.</div>
    ${renderActions(record)}
  `;
}

function renderStepForm(record) {
  const f = record.form;

  if (record.line === "Auto") {
    if (record.step === 0) {
      return `
        <div class="form-grid">
          ${renderField("insuredName", "Named insured", "text", "", null, f.insuredName)}
          ${renderField("effectiveDate", "Effective date", "date", "", null, f.effectiveDate)}
          ${renderField("email", "Email", "email", "", null, f.email)}
          ${renderField("phone", "Phone", "text", "", null, f.phone)}
          ${renderField("maritalStatus", "Marital status", "text", "", ["Single", "Married", "Divorced", "Widowed"], f.maritalStatus)}
          ${renderField("garagingZip", "Garaging ZIP", "text", "", null, f.garagingZip)}
          ${renderField("insuranceStatus", "Insurance status", "text", "", ["Continuous", "Lapse"], f.insuranceStatus)}
          ${renderField("priorYears", "Years with prior carrier", "number", "", null, f.priorYears)}
          ${renderField("priorCarrier", "Prior carrier", "text", "", null, f.priorCarrier)}
          ${renderField("driverAge", "Driver age", "number", "", null, f.driverAge)}
        </div>
        ${renderActions(record)}
      `;
    }

    if (record.step === 1) {
      return `
        <div class="form-grid">
          ${renderField("yearsLicensed", "Years licensed", "number", "", null, f.yearsLicensed)}
          ${renderField("accidents", "Accidents", "number", "", null, f.accidents)}
          ${renderField("violations", "Violations", "number", "", null, f.violations)}
          ${renderField("annualMileage", "Annual mileage", "number", "", null, f.annualMileage)}
          ${renderField("vehicleYear", "Vehicle year", "number", "", null, f.vehicleYear)}
          ${renderField("vehicleMake", "Vehicle make", "text", "", null, f.vehicleMake)}
          ${renderField("vehicleModel", "Vehicle model", "text", "", null, f.vehicleModel)}
          ${renderField("vin", "VIN", "text", "", null, f.vin)}
          ${renderField("ownership", "Ownership", "text", "", ["Owned", "Financed", "Leased"], f.ownership)}
          ${renderField("vehicleUse", "Vehicle use", "text", "", ["Commute", "Pleasure", "Business", "Mixed"], f.vehicleUse)}
          ${renderField("antiTheft", "Anti-theft device", "text", "", ["Yes", "No"], f.antiTheft)}
        </div>
        ${renderActions(record)}
      `;
    }

    if (record.step === 2) {
      return `
        <div class="form-grid">
          ${renderField("bodilyInjury", "Bodily injury", "text", "", ["25/50", "50/100", "100/300", "250/500"], f.bodilyInjury)}
          ${renderField("propertyDamage", "Property damage", "text", "", ["25", "50", "100"], f.propertyDamage)}
          ${renderField("um", "UM/UIM", "text", "", ["Yes", "No"], f.um)}
          ${renderField("compDeductible", "Comprehensive deductible", "text", "", ["250", "500", "1000"], f.compDeductible)}
          ${renderField("collisionDeductible", "Collision deductible", "text", "", ["250", "500", "1000"], f.collisionDeductible)}
          ${renderField("rental", "Rental reimbursement", "text", "", ["Yes", "No"], f.rental)}
          ${renderField("roadside", "Roadside assistance", "text", "", ["Yes", "No"], f.roadside)}
          ${renderField("bundle", "Bundle discount", "text", "", ["Yes", "No"], f.bundle)}
          ${renderField("paperless", "Paperless", "text", "", ["Yes", "No"], f.paperless)}
          ${renderField("paidInFull", "Paid in full", "text", "", ["Yes", "No"], f.paidInFull)}
        </div>
        ${renderActions(record)}
      `;
    }

    return renderReviewDetails(record);
  }

  if (record.step === 0) {
    return `
      <div class="form-grid">
        ${renderField("insuredName", "Named insured", "text", "", null, f.insuredName)}
        ${renderField("effectiveDate", "Effective date", "date", "", null, f.effectiveDate)}
        ${renderField("email", "Email", "email", "", null, f.email)}
        ${renderField("phone", "Phone", "text", "", null, f.phone)}
        ${renderField("address", "Property address", "text", "", null, f.address)}
        ${renderField("city", "City", "text", "", null, f.city)}
        ${renderField("state", "State", "text", "", null, f.state)}
        ${renderField("occupancy", "Occupancy", "text", "", ["Owner Occupied", "Seasonal", "Tenant Occupied"], f.occupancy)}
        ${renderField("insuranceStatus", "Insurance status", "text", "", ["Continuous", "Lapse"], f.insuranceStatus)}
        ${renderField("priorCarrier", "Prior carrier", "text", "", null, f.priorCarrier)}
      </div>
      ${renderActions(record)}
    `;
  }

  if (record.step === 1) {
    return `
      <div class="form-grid">
        ${renderField("yearBuilt", "Year built", "number", "", null, f.yearBuilt)}
        ${renderField("squareFootage", "Square footage", "number", "", null, f.squareFootage)}
        ${renderField("stories", "Stories", "number", "", null, f.stories)}
        ${renderField("constructionType", "Construction type", "text", "", ["Frame", "Masonry", "Superior"], f.constructionType)}
        ${renderField("roofType", "Roof type", "text", "", ["Composition", "Architectural Shingle", "Metal", "Tile"], f.roofType)}
        ${renderField("roofAge", "Roof age", "number", "", null, f.roofAge)}
        ${renderField("foundationType", "Foundation", "text", "", ["Slab", "Crawlspace", "Basement"], f.foundationType)}
        ${renderField("protectionClass", "Protection class", "number", "", null, f.protectionClass)}
        ${renderField("distanceToFire", "Distance to fire", "text", "", ["Under 5 miles", "6 to 10 miles", "11+ miles"], f.distanceToFire)}
        ${renderField("fireAlarm", "Fire alarm", "text", "", ["Yes", "No"], f.fireAlarm)}
        ${renderField("burglarAlarm", "Burglar alarm", "text", "", ["Yes", "No"], f.burglarAlarm)}
        ${renderField("sprinkler", "Sprinkler", "text", "", ["Yes", "No"], f.sprinkler)}
        ${renderField("priorClaims", "Prior claims", "number", "", null, f.priorClaims)}
      </div>
      ${renderActions(record)}
    `;
  }

  if (record.step === 2) {
    return `
      <div class="form-grid">
        ${renderField("dwellingCoverage", "Dwelling coverage", "number", "", null, f.dwellingCoverage)}
        ${renderField("otherStructuresPct", "Other structures %", "number", "", null, f.otherStructuresPct)}
        ${renderField("personalPropertyPct", "Personal property %", "number", "", null, f.personalPropertyPct)}
        ${renderField("lossOfUsePct", "Loss of use %", "number", "", null, f.lossOfUsePct)}
        ${renderField("liabilityCoverage", "Liability coverage", "text", "", ["100000", "300000", "500000"], f.liabilityCoverage)}
        ${renderField("medicalPayments", "Medical payments", "text", "", ["1000", "5000"], f.medicalPayments)}
        ${renderField("allOtherPerilsDeductible", "AOP deductible", "text", "", ["1000", "2500", "5000"], f.allOtherPerilsDeductible)}
        ${renderField("windHailDeductible", "Wind/Hail deductible", "text", "", ["1%", "2%", "5%"], f.windHailDeductible)}
        ${renderField("pool", "Pool", "text", "", ["Yes", "No"], f.pool)}
        ${renderField("dog", "Dog", "text", "", ["Yes", "No"], f.dog)}
        ${renderField("trampoline", "Trampoline", "text", "", ["Yes", "No"], f.trampoline)}
        ${renderField("bundle", "Bundle discount", "text", "", ["Yes", "No"], f.bundle)}
      </div>
      ${renderActions(record)}
    `;
  }

  return renderReviewDetails(record);
}

function renderResults(record) {
  const best = (record.quoteOptions || [])[0];
  return `
    <section class="card" style="margin-top:18px;padding:18px">
      <div class="card-head">
        <div>
          <h3 class="card-title">Rating results</h3>
          <p class="card-sub">Carrier match results, best premium option, and scenario accuracy review.</p>
        </div>
        <div class="inline-actions">
          <button class="btn btn-outline" id="downloadPdf">Download PDF</button>
        </div>
      </div>
      ${best ? `<div class="notice">Recommended result: <strong>${best.carrier}</strong> at <strong>${money(best.annualPremium)}</strong> annual premium.</div>` : ""}
      <div class="result-grid">
        ${(record.quoteOptions || []).map((q, idx) => `
          <div class="result-option ${idx === 0 ? "best" : ""}">
            <div>
              <strong>${q.carrier}</strong>
              <div class="small">Monthly ${money(q.monthlyPremium)}</div>
            </div>
            <div style="font-size:24px;font-weight:800">${money(q.annualPremium)}</div>
          </div>
        `).join("")}
      </div>
      <div class="card" style="margin-top:16px;background:#fff;border:1px solid var(--line);box-shadow:none">
        <div class="card-head">
          <div>
            <h3 class="card-title">Accuracy review</h3>
            <p class="card-sub">Score based on whether the entered quote matches the scenario sheet.</p>
          </div>
          <span class="tag done">${record.accuracyScore ?? 0}%</span>
        </div>
        ${(record.mismatches || []).length
          ? `<div class="mismatch-list">${record.mismatches.map(m => `<div class="mismatch-item"><strong>${m.field}</strong>: expected ${m.expected}, entered ${m.actual}</div>`).join("")}</div>`
          : `<div class="notice" style="background:#edf8f1;border-color:#d4ecdf;color:#14643c">No mismatches found. The quote matches the scenario details.</div>`
        }
      </div>
    </section>
  `;
}

function getFormPatch(formEl) {
  const fd = new FormData(formEl);
  const out = {};
  for (const [k, v] of fd.entries()) out[k] = v;

  [
    "priorYears", "driverAge", "yearsLicensed", "accidents", "violations", "annualMileage", "vehicleYear",
    "yearBuilt", "squareFootage", "stories", "roofAge", "protectionClass", "priorClaims", "dwellingCoverage",
    "otherStructuresPct", "personalPropertyPct", "lossOfUsePct", "liabilityCoverage", "medicalPayments",
    "allOtherPerilsDeductible", "compDeductible", "collisionDeductible"
  ].forEach(key => {
    if (key in out) out[key] = Number(out[key]);
  });

  return out;
}

function bindCommonActions() {
  setAgentChip();

  QA("[data-action='logout']").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      localStorage.removeItem(AGENT_KEY);
      location.href = "index.html";
    });
  });

  QA("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => {
      setCurrentId(btn.dataset.open);
      location.href = `quote-form.html?id=${btn.dataset.open}`;
    });
  });

  QA("[data-pdf]").forEach(btn => {
    btn.addEventListener("click", () => {
      const record = loadRecords().find(r => r.id === btn.dataset.pdf);
      if (record) pdfForRecord(record);
    });
  });

  QA("[data-delete]").forEach(btn => {
    btn.addEventListener("click", () => {
      const record = loadRecords().find(r => r.id === btn.dataset.delete);
      if (!record) return;
      if (confirm(`Delete ${record.scenarioTitle}?`)) {
        removeRecord(record.id);
        if (location.pathname.endsWith("quote-form.html")) location.href = "dashboard.html";
        else location.reload();
      }
    });
  });

  QA("[data-duplicate]").forEach(btn => {
    btn.addEventListener("click", () => {
      const record = loadRecords().find(r => r.id === btn.dataset.duplicate);
      if (!record) return;
      const copy = structuredClone(record);
      copy.id = uid();
      copy.status = "Draft";
      copy.accuracyScore = null;
      copy.quoteOptions = [];
      copy.mismatches = [];
      copy.createdAt = new Date().toISOString();
      copy.updatedAt = new Date().toISOString();
      const records = loadRecords();
      records.unshift(copy);
      saveRecords(records);
      setCurrentId(copy.id);
      location.href = `quote-form.html?id=${copy.id}`;
    });
  });
}

function loginPage() {
  const agent = loadAgent();
  if (agent) {
    location.href = "dashboard.html";
    return;
  }

  document.body.className = "portal-body";
  document.body.innerHTML = `
    <div class="auth-shell">
      <div class="auth-card">
        <section class="auth-showcase">
          <div class="hero-eyebrow">Carrier Portal Simulator</div>
          <h1>Auto and Home quoting training in a real portal-style experience.</h1>
          <p>This standalone training site is designed to feel like a modern insurance carrier portal: dashboard, multi-step quote intake, scenario sheets, rating results, draft management, and downloadable quote PDFs.</p>
          <div class="auth-badges">
            <span>Auto quoting</span>
            <span>Home quoting</span>
            <span>Draft save</span>
            <span>PDF output</span>
            <span>Scenario scoring</span>
          </div>
        </section>
        <section class="auth-form">
          <div class="section-title">Enter the portal</div>
          <p class="section-copy">Use your training name and role to open the carrier dashboard.</p>
          <form id="loginForm" class="layout-grid">
            <div class="field">
              <label>Agent / VA Name</label>
              <input name="name" required placeholder="Enter your name" />
            </div>
            <div class="field">
              <label>Role</label>
              <select name="role">
                <option>VA Trainee</option>
                <option>Trainer</option>
                <option>Admin Reviewer</option>
              </select>
            </div>
            <div class="field">
              <label>Training Desk / Team</label>
              <input name="desk" placeholder="Example: Personal Lines Batch 1" />
            </div>
            <button class="btn btn-primary" type="submit">Launch Portal</button>
          </form>
          <div class="portal-note">
            This is a carrier-portal-inspired training environment. It is designed to simulate common quoting workflow patterns without copying any real carrier brand, logo, or proprietary system.
          </div>
        </section>
      </div>
    </div>
  `;

  Q("#loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    saveAgent({
      name: fd.get("name"),
      role: fd.get("role"),
      desk: fd.get("desk") || ""
    });
    location.href = "dashboard.html";
  });
}

function dashboardPage() {
  const agent = ensureAgent("dashboard");
  if (!agent) return;

  const records = loadRecords();
  const stats = getStats(records);
  const recent = [...records].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 5);

  document.body.className = "portal-body";
  document.body.innerHTML = shell("dashboard", `
    ${pageHeader("Carrier dashboard", "Manage active drafts, launch new quote scenarios, track completed rating results, and practice the same intake-to-quote rhythm commonly seen in digital carrier portals and quoting systems.")}
    <div class="cards-4" style="margin-top:18px">
      <div class="stat-card"><div class="stat-head"><div class="stat-label">Total quotes</div><div>📄</div></div><div class="stat-value">${stats.total}</div><div class="stat-foot">All drafts and completed quotes</div></div>
      <div class="stat-card"><div class="stat-head"><div class="stat-label">Drafts</div><div>💾</div></div><div class="stat-value">${stats.drafts}</div><div class="stat-foot">Saved and editable in portal</div></div>
      <div class="stat-card"><div class="stat-head"><div class="stat-label">Completed</div><div>✅</div></div><div class="stat-value">${stats.completed}</div><div class="stat-foot">Quotes rated and review-ready</div></div>
      <div class="stat-card"><div class="stat-head"><div class="stat-label">Average accuracy</div><div>🎯</div></div><div class="stat-value">${stats.accuracy}%</div><div class="stat-foot">Scenario matching score</div></div>
    </div>

    <div class="two-col" style="margin-top:18px">
      <section class="card">
        <div class="card-head">
          <div>
            <h2 class="card-title">Quick actions</h2>
            <p class="card-sub">Use the same major workflow blocks you'd expect in a portal: start quote, resume draft, review results, and export PDF.</p>
          </div>
        </div>
        <div class="quick-list">
          <div class="quick-item">
            <h4>Start a new quote scenario</h4>
            <p>Open the scenario center and launch Auto or Home training quotes with easy, normal, or hard complexity.</p>
            <div style="margin-top:12px"><a class="btn btn-primary" href="scenario-center.html">Open Scenario Center</a></div>
          </div>
          <div class="quick-item">
            <h4>Resume active draft</h4>
            <p>Continue an unfinished quote. Drafts are automatically saved inside the browser-based portal dashboard.</p>
            <div style="margin-top:12px"><a class="btn btn-outline" href="quote-form.html">Open Quote Workspace</a></div>
          </div>
          <div class="quick-item">
            <h4>View all quote history</h4>
            <p>Filter and manage every draft and completed quote, duplicate existing work, or delete older records.</p>
            <div style="margin-top:12px"><a class="btn btn-outline" href="quote-history.html">Open History</a></div>
          </div>
        </div>
      </section>

      <section class="card">
        <div class="card-head">
          <div>
            <h2 class="card-title">Workspace summary</h2>
            <p class="card-sub">Training agent and session overview.</p>
          </div>
        </div>
        <div class="kv">
          <div class="mini-kv"><div class="mini-label">Logged in as</div><div class="mini-value">${agent.name}</div></div>
          <div class="mini-kv"><div class="mini-label">Role</div><div class="mini-value">${agent.role}</div></div>
          <div class="mini-kv"><div class="mini-label">Desk</div><div class="mini-value">${agent.desk || "Training Desk"}</div></div>
          <div class="mini-kv"><div class="mini-label">Current quote</div><div class="mini-value">${getCurrentId() ? "Open" : "None"}</div></div>
        </div>
        <div class="notice" style="margin-top:16px">
          This static version uses browser storage, so drafts and history stay on the same browser/device.
          A truly shared dashboard across users would require Supabase or another backend.
        </div>
      </section>
    </div>

    <section class="card" style="margin-top:18px">
      <div class="card-head">
        <div>
          <h2 class="card-title">Recent quote activity</h2>
          <p class="card-sub">Portal-style activity table with open, delete, and PDF options.</p>
        </div>
        <a class="btn btn-outline" href="quote-history.html">View full history</a>
      </div>
      ${recent.length ? `
        <div class="table-wrap">
          <table class="portal-table">
            <thead>
              <tr><th>Scenario</th><th>Line</th><th>Status</th><th>Updated</th><th>Accuracy</th><th>Actions</th></tr>
            </thead>
            <tbody>
              ${recent.map(r => `
                <tr>
                  <td><strong>${r.scenarioTitle}</strong><div class="small">${r.form.insuredName || "Untitled quote"}</div></td>
                  <td><span class="tag ${r.line.toLowerCase()}">${r.line}</span></td>
                  <td><span class="tag ${r.status === "Completed" ? "done" : "draft"}">${r.status}</span></td>
                  <td>${formatDate(r.updatedAt)}</td>
                  <td>${typeof r.accuracyScore === "number" ? `${r.accuracyScore}%` : "—"}</td>
                  <td>
                    <div class="inline-actions">
                      <button class="btn btn-outline" data-open="${r.id}">Open</button>
                      ${r.status === "Completed" ? `<button class="btn btn-outline" data-pdf="${r.id}">PDF</button>` : ""}
                      <button class="btn btn-danger" data-delete="${r.id}">Delete</button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>` : `<div class="empty-state">No quote activity yet. Start with an Auto or Home scenario to populate the dashboard.</div>`}
    </section>
  `);

  navActive("dashboard");
  bindCommonActions();
}

function scenarioCenterPage() {
  const agent = ensureAgent("scenarios");
  if (!agent) return;

  document.body.className = "portal-body";
  document.body.innerHTML = shell("scenarios", `
    ${pageHeader("Scenario center", "Choose an Auto or Home quoting scenario and launch a multi-step carrier-style workflow. Each scenario includes a fact sheet to train attention to detail and quoting accuracy.")}
    <div class="action-row" style="margin-top:18px">
      <div>
        <h2 class="section-title">Available scenarios</h2>
        <p class="section-copy">Easy, normal, and hard training paths for both personal auto and homeowners.</p>
      </div>
      <div class="filter-row">
        <select class="select-lite" id="lineFilter">
          <option value="All">All lines</option>
          <option value="Auto">Auto</option>
          <option value="Home">Home</option>
        </select>
        <select class="select-lite" id="difficultyFilter">
          <option value="All">All difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Normal">Normal</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
    </div>
    <div id="scenarioTiles" class="tile-grid" style="margin-top:10px"></div>
  `);

  navActive("scenarios");
  bindCommonActions();

  function renderTiles() {
    const line = Q("#lineFilter").value;
    const difficulty = Q("#difficultyFilter").value;
    const filtered = scenarios.filter(s => (line === "All" || s.line === line) && (difficulty === "All" || s.difficulty === difficulty));

    Q("#scenarioTiles").innerHTML = filtered.map(s => `
      <article class="scenario-tile">
        <div class="action-row">
          <span class="tag ${s.line.toLowerCase()}">${s.line}</span>
          <span class="tag ${s.difficulty.toLowerCase()}">${s.difficulty}</span>
        </div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
        <div class="scenario-facts">
          ${s.facts.slice(0, 4).map(f => `<div>${f}</div>`).join("")}
        </div>
        <div class="inline-actions">
          <button class="btn btn-primary" data-start="${s.id}">Start quote</button>
        </div>
      </article>
    `).join("");

    QA("[data-start]").forEach(btn => {
      btn.addEventListener("click", () => {
        const scenario = scenarioById(btn.dataset.start);
        const record = createRecord(scenario);
        const records = loadRecords();
        records.unshift(record);
        saveRecords(records);
        setCurrentId(record.id);
        location.href = `quote-form.html?id=${record.id}`;
      });
    });
  }

  renderTiles();
  Q("#lineFilter").addEventListener("change", renderTiles);
  Q("#difficultyFilter").addEventListener("change", renderTiles);
}

function quoteHistoryPage() {
  const agent = ensureAgent("history");
  if (!agent) return;

  document.body.className = "portal-body";
  document.body.innerHTML = shell("history", `
    ${pageHeader("Quote history", "Review every saved draft and completed quote, continue work in progress, export PDFs, and manage your training record set from one portal table.")}
    <div class="action-row" style="margin-top:18px">
      <div>
        <h2 class="section-title">All quotes</h2>
        <p class="section-copy">Filter your training records by line or status.</p>
      </div>
      <div class="filter-row">
        <select id="historyLine" class="select-lite">
          <option value="All">All lines</option>
          <option value="Auto">Auto</option>
          <option value="Home">Home</option>
        </select>
        <select id="historyStatus" class="select-lite">
          <option value="All">All status</option>
          <option value="Draft">Draft</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
    <section class="card" style="margin-top:16px">
      <div id="historyTable"></div>
    </section>
  `);

  navActive("history");
  bindCommonActions();

  function renderHistory() {
    const line = Q("#historyLine").value;
    const status = Q("#historyStatus").value;
    const records = loadRecords()
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .filter(r => (line === "All" || r.line === line) && (status === "All" || r.status === status));

    Q("#historyTable").innerHTML = records.length ? `
      <div class="table-wrap">
        <table class="portal-table">
          <thead>
            <tr><th>Insured / Scenario</th><th>Line</th><th>Difficulty</th><th>Status</th><th>Updated</th><th>Quote Result</th><th>Actions</th></tr>
          </thead>
          <tbody>
            ${records.map(r => {
              const best = (r.quoteOptions || [])[0];
              return `
                <tr>
                  <td><strong>${r.form.insuredName || "Untitled quote"}</strong><div class="small">${r.scenarioTitle}</div></td>
                  <td><span class="tag ${r.line.toLowerCase()}">${r.line}</span></td>
                  <td><span class="tag ${r.difficulty.toLowerCase()}">${r.difficulty}</span></td>
                  <td><span class="tag ${r.status === "Completed" ? "done" : "draft"}">${r.status}</span></td>
                  <td>${formatDate(r.updatedAt)}</td>
                  <td>${best ? `${best.carrier} · ${money(best.annualPremium)}` : "Not rated"}</td>
                  <td>
                    <div class="inline-actions">
                      <button class="btn btn-outline" data-open="${r.id}">Open</button>
                      ${r.status === "Completed" ? `<button class="btn btn-outline" data-pdf="${r.id}">PDF</button><button class="btn btn-warning" data-duplicate="${r.id}">Duplicate</button>` : ""}
                      <button class="btn btn-danger" data-delete="${r.id}">Delete</button>
                    </div>
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>` : `<div class="empty-state">No quotes match the current filters.</div>`;

    bindCommonActions();
  }

  renderHistory();
  Q("#historyLine").addEventListener("change", renderHistory);
  Q("#historyStatus").addEventListener("change", renderHistory);
}

function quoteFormPage() {
  const agent = ensureAgent("quote");
  if (!agent) return;

  const url = new URL(location.href);
  const recordId = url.searchParams.get("id") || getCurrentId();
  const record = loadRecords().find(r => r.id === recordId);

  document.body.className = "portal-body";

  if (!record) {
    document.body.innerHTML = shell("quote", `
      ${pageHeader("Quote workspace", "Launch a scenario first, then continue the quote from this page.")}
      <div class="empty-state" style="margin-top:18px">
        No active quote found. Start from the scenario center.
        <div style="margin-top:14px"><a href="scenario-center.html" class="btn btn-primary">Go to Scenario Center</a></div>
      </div>
    `);
    navActive("quote");
    bindCommonActions();
    return;
  }

  setCurrentId(record.id);
  const scenario = scenarioById(record.scenarioId);
  const steps = record.line === "Auto" ? autoSteps : homeSteps;

  document.body.innerHTML = shell("quote", `
    ${pageHeader("Quote workspace", "Complete a full carrier-style intake flow: applicant details, risk information, coverage selection, review, rate, accuracy scoring, and PDF export.")}
    <div class="form-shell" style="margin-top:18px">
      <aside class="scenario-panel">
        <div class="hero-eyebrow">Scenario sheet</div>
        <h2>${record.scenarioTitle}</h2>
        <p>${record.description}</p>
        <div class="inline-actions" style="margin-top:12px">
          <span class="tag ${record.line.toLowerCase()}">${record.line}</span>
          <span class="tag ${record.difficulty.toLowerCase()}">${record.difficulty}</span>
          <span class="tag ${record.status === "Completed" ? "done" : "draft"}">${record.status}</span>
        </div>
        <div class="fact-list">
          ${scenario.facts.map(f => `<div class="fact-item">${f}</div>`).join("")}
        </div>
      </aside>
      <section>
        <div class="step-bar">
          ${steps.map((step, idx) => `<div class="step-pill ${record.step === idx ? "active" : record.step > idx || (record.status === "Completed" && idx <= record.step) ? "done" : ""}">${idx + 1}. ${step}</div>`).join("")}
        </div>
        <div class="form-card">
          <div class="action-row" style="margin-bottom:16px">
            <div>
              <h2 class="section-title" style="margin-bottom:0">${steps[record.step]}</h2>
              <p class="section-copy" style="margin-top:6px">${record.line} quote intake and underwriting details.</p>
            </div>
            <div class="inline-actions">
              <button class="btn btn-outline" id="backDashboard">Back to dashboard</button>
            </div>
          </div>
          <form id="quoteForm">${renderStepForm(record)}</form>
          ${record.status === "Completed" ? renderResults(record) : ""}
        </div>
      </section>
    </div>
  `);

  navActive("quote");
  bindCommonActions();

  const formEl = Q("#quoteForm");
  const selector = "input[name], select[name]";
  QA(selector, formEl).forEach(el => {
    el.addEventListener("change", () => patchForm(record.id, getFormPatch(formEl)));
    el.addEventListener("input", () => patchForm(record.id, getFormPatch(formEl)));
  });

  Q("#backDashboard").addEventListener("click", () => { location.href = "dashboard.html"; });

  Q("#saveDraft")?.addEventListener("click", () => {
    updateRecord(record.id, { form: { ...record.form, ...getFormPatch(formEl) }, status: "Draft" });
    alert("Draft saved.");
    location.href = "dashboard.html";
  });

  Q("#prevStep")?.addEventListener("click", () => {
    patchForm(record.id, getFormPatch(formEl));
    updateRecord(record.id, {
      step: Math.max(0, record.step - 1),
      status: record.status === "Completed" ? "Draft" : record.status,
      quoteOptions: [],
      mismatches: [],
      accuracyScore: null
    });
    location.reload();
  });

  Q("#nextStep")?.addEventListener("click", () => {
    patchForm(record.id, getFormPatch(formEl));
    updateRecord(record.id, {
      step: Math.min(steps.length - 1, record.step + 1),
      status: "Draft",
      quoteOptions: [],
      mismatches: [],
      accuracyScore: null
    });
    location.reload();
  });

  Q("#generateQuote")?.addEventListener("click", () => {
    const latest = patchForm(record.id, getFormPatch(formEl));
    const quoteOptions = buildQuotes(record.line, latest.form);
    const accuracy = scoreAccuracy(scenario.expected, latest.form);
    updateRecord(record.id, {
      quoteOptions,
      mismatches: accuracy.mismatches,
      accuracyScore: accuracy.score,
      status: "Completed",
      step: steps.length - 1
    });
    location.reload();
  });

  Q("#downloadPdf")?.addEventListener("click", () => {
    const current = loadRecords().find(r => r.id === record.id);
    if (current) pdfForRecord(current);
  });
}

function init() {
  const page = document.body.dataset.page;
  if (page === "login") loginPage();
  else if (page === "dashboard") dashboardPage();
  else if (page === "scenarios") scenarioCenterPage();
  else if (page === "history") quoteHistoryPage();
  else if (page === "quote") quoteFormPage();
}

document.addEventListener("DOMContentLoaded", init);
