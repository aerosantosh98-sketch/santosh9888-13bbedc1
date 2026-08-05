export const profile = {
  name: "Santosh Yadav",
  title:
    "Civil Engineering Undergraduate | Quantity Surveying | Structural Engineering | GIS & Remote Sensing",
  longTitle:
    "Civil Engineering Undergraduate | Quantity Surveying & Estimation | GIS & Remote Sensing | Structural Engineering | Future Construction Project Engineer",
  bio: "I'm Santosh Yadav, a Civil Engineering undergraduate at Nitte Meenakshi Institute of Technology (NMIT), Bengaluru, with a strong passion for site engineering, sustainable engineering, green technology, structural engineering, quantity surveying, construction management, GIS & Remote Sensing, and surveying. My ambition is to become a leader in the engineering and construction industry by delivering innovative and sustainable infrastructure solutions. I aspire to lead multidisciplinary teams, manage complex construction projects, and contribute to resilient, environmentally responsible infrastructure that creates lasting value. I am committed to continuously expanding my technical expertise, leadership capabilities, and professional skills while working with leading global engineering and construction organizations.",
  objective:
    "To become a highly skilled Civil Engineer specializing in Construction Management, Quantity Surveying, Structural Engineering, GIS & Remote Sensing, and Project Planning while contributing to world-class infrastructure projects that deliver long-term value to society.",
  email: "eng.santosh07@gmail.com",
  phone: "+91 7050899834",
  linkedin: "https://www.linkedin.com/in/santosh-yadav-k/",
  location: "Bengaluru, Karnataka, India",
};

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/gallery", label: "Gallery" },
  { to: "/downloads", label: "Downloads" },
  { to: "/contact", label: "Contact" },
] as const;

export const education = [
  {
    degree: "Bachelor of Engineering (Civil Engineering)",
    org: "Nitte Meenakshi Institute of Technology (NMIT), Bengaluru",
    period: "2023 – 2027",
    score: "Current CGPA: 9.26 / 10",
    detail:
      "Core focus on structural analysis, construction management, quantity surveying, surveying and geospatial engineering.",
  },
  {
    degree: "Higher Secondary (+2)",
    org: "National School of Sciences, Kathmandu, Nepal",
    period: "2020 – 2022",
    score: "Score: 70%",
    detail: "Physics, Chemistry and Mathematics stream.",
  },
  {
    degree: "Secondary School (SLC)",
    org: "Adarsha Yog Hari Secondary School, Kathmandu, Nepal",
    period: "2020",
    score: "Score: 98.75%",
    detail: "School topper level performance across all subjects.",
  },
];

export const skillGroups = [
  {
    title: "Design & BIM",
    icon: "PenTool",
    items: ["AutoCAD 2D/3D", "SketchUp", "SolidWorks", "Revit", "Navisworks"],
  },
  { title: "Structural Analysis", icon: "Building2", items: ["STAAD.Pro", "ETABS"] },
  { title: "Project Planning", icon: "CalendarRange", items: ["Primavera P6", "Microsoft Excel"] },
  {
    title: "Site Engineering",
    icon: "HardHat",
    items: [
      "Site Supervision",
      "Drawing Interpretation",
      "QA/QC",
      "Reinforcement & Concreting",
    ],
  },
  {
    title: "Surveying & Estimation",
    icon: "Ruler",
    items: [
      "Total Station",
      "Quantity Take-Offs",
      "BOQ Preparation",
      "Cost Estimation",
      "Rate Analysis",
    ],
  },
  {
    title: "GIS & Remote Sensing",
    icon: "Globe2",
    items: [
      "ArcGIS",
      "GIS Fundamentals",
      "GIS Basics",
      "GPS Survey",
      "Remote Sensing",
      "Topographic Mapping",
      "DEM",
      "Contour Mapping",
      "Spatial Analysis",
    ],
  },
  {
    title: "Soft Skills",
    icon: "Users",
    items: ["Leadership", "Teamwork", "Communication", "Problem Solving", "Time Management"],
  },
];

export const experience = [
  {
    role: "Civil Site Engineer Intern",
    org: "Lolang Construction",
    location: "Kathmandu, Nepal",
    period: "February 2025 – March 2025",
    points: [
      "Supervised construction activities.",
      "Coordinated with contractors and engineers.",
      "Ensured work followed approved drawings and specifications.",
      "Maintained quality standards.",
      "Assisted in site execution and documentation.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string[];
  tools: string[];
  drawings: string[];
  calculations: { label: string; value: string }[];
  boq: { item: string; unit: string; qty: string; rate: string; amount: string }[];
  timeline: { phase: string; detail: string }[];
  downloads: { label: string; type: string }[];
};

export const projects: Project[] = [
  {
    slug: "piezoelectric-concrete-block",
    title: "Embedded Piezoelectric Sensors in Multi-Layered Concrete Block",
    category: "Smart Infrastructure",
    year: "2025",
    summary:
      "Designed a smart concrete system integrating piezoelectric sensors for energy harvesting and structural health monitoring.",
    description: [
      "A multi-layered concrete block was designed with embedded piezoelectric transducers positioned at the strain-critical interface between layers, enabling both energy harvesting from traffic loading and continuous structural health monitoring.",
      "Layer composition, sensor depth and protective encapsulation were studied to balance mechanical strength with electrical output, and the block was evaluated under repeated compressive load cycles.",
      "The work demonstrates a practical pathway for self-sensing pavements and smart footpaths in urban infrastructure.",
    ],
    tools: ["AutoCAD", "Concrete Mix Design", "Load Testing", "Data Logging"],
    drawings: [
      "Layered block section with sensor embedment depth",
      "Sensor wiring and encapsulation detail",
      "Load test setup arrangement",
    ],
    calculations: [
      { label: "Block size", value: "300 × 300 × 150 mm" },
      { label: "Target grade", value: "M30" },
      { label: "Sensor depth", value: "50 mm from top layer" },
      { label: "Peak output (indicative)", value: "~ 8–14 V per impact cycle" },
    ],
    boq: [
      { item: "Cement (OPC 53)", unit: "bag", qty: "4", rate: "420", amount: "1,680" },
      { item: "Fine aggregate", unit: "cum", qty: "0.12", rate: "1,800", amount: "216" },
      { item: "Coarse aggregate 20 mm", unit: "cum", qty: "0.22", rate: "1,650", amount: "363" },
      { item: "Piezoelectric discs", unit: "nos", qty: "8", rate: "350", amount: "2,800" },
      { item: "Wiring & encapsulation", unit: "LS", qty: "1", rate: "1,200", amount: "1,200" },
    ],
    timeline: [
      { phase: "Literature review", detail: "Piezoelectric harvesting and SHM case studies" },
      { phase: "Design & detailing", detail: "Layer configuration and sensor placement" },
      { phase: "Casting", detail: "Multi-layer casting with embedded sensors" },
      { phase: "Testing", detail: "Compression and cyclic load response" },
      { phase: "Reporting", detail: "Results, output charts and conclusions" },
    ],
    downloads: [
      { label: "Project Report", type: "PDF" },
      { label: "Sensor Layout Drawing", type: "DWG" },
      { label: "Test Data Sheet", type: "XLSX" },
    ],
  },
  {
    slug: "earthquake-resistant-building",
    title: "Earthquake Resistant Building Structure",
    category: "Structural Engineering",
    year: "2025",
    summary:
      "Designed and analyzed a multi-storey earthquake-resistant structure according to IS Codes.",
    description: [
      "A multi-storey RCC framed structure was modelled and analysed for seismic loading using equivalent static and response spectrum approaches in accordance with IS 1893, IS 456 and IS 13920.",
      "Column and beam sizes, shear wall placement and ductile detailing were iterated to control storey drift and torsional irregularity.",
      "The final configuration satisfies code drift limits while keeping reinforcement quantities economical.",
    ],
    tools: ["STAAD.Pro", "ETABS", "AutoCAD", "IS 1893 / IS 456 / IS 13920"],
    drawings: [
      "Typical floor framing plan",
      "Column schedule and shear wall layout",
      "Beam-column joint ductile detailing",
    ],
    calculations: [
      { label: "Seismic zone", value: "Zone III, Z = 0.16" },
      { label: "Importance factor", value: "I = 1.2" },
      { label: "Response reduction", value: "R = 5 (SMRF)" },
      { label: "Max storey drift", value: "< 0.004 h (code compliant)" },
    ],
    boq: [
      { item: "RCC M25 in columns", unit: "cum", qty: "86", rate: "6,200", amount: "5,33,200" },
      { item: "RCC M25 in beams & slabs", unit: "cum", qty: "142", rate: "5,900", amount: "8,37,800" },
      { item: "Reinforcement Fe500D", unit: "MT", qty: "24.5", rate: "68,000", amount: "16,66,000" },
      { item: "Formwork", unit: "sqm", qty: "1,850", rate: "310", amount: "5,73,500" },
    ],
    timeline: [
      { phase: "Architectural input", detail: "Grid, floor heights, load path study" },
      { phase: "Load calculation", detail: "Dead, live, seismic and load combinations" },
      { phase: "Analysis", detail: "ETABS / STAAD.Pro modelling and iterations" },
      { phase: "Design & detailing", detail: "Ductile detailing to IS 13920" },
      { phase: "Estimation", detail: "Quantity take-off and BOQ" },
    ],
    downloads: [
      { label: "Structural Design Report", type: "PDF" },
      { label: "Framing Plan", type: "DWG" },
      { label: "BOQ & Estimate", type: "XLSX" },
    ],
  },
  {
    slug: "survey-project-kaiwara",
    title: "Survey Project – Kaiwara",
    category: "Surveying & GIS",
    year: "2024",
    summary:
      "Performed Total Station survey, GIS processing, contour mapping, and Digital Elevation Model generation.",
    description: [
      "A detailed topographic survey of the Kaiwara site was carried out using a Total Station with control points established by GPS observation.",
      "Field data was processed in ArcGIS to produce contour maps, a Digital Elevation Model and slope/aspect derivatives supporting site planning decisions.",
      "Deliverables included a georeferenced base map, contour drawings and a terrain analysis note.",
    ],
    tools: ["Total Station", "ArcGIS", "GPS Survey", "AutoCAD", "DEM Processing"],
    drawings: [
      "Control point network plan",
      "Contour map at 1 m interval",
      "DEM and slope analysis raster",
    ],
    calculations: [
      { label: "Area surveyed", value: "≈ 4.2 hectares" },
      { label: "Contour interval", value: "1.0 m" },
      { label: "Control points", value: "6 GPS-referenced stations" },
      { label: "Closing error", value: "Within permissible limit" },
    ],
    boq: [
      { item: "Total Station survey", unit: "day", qty: "4", rate: "3,500", amount: "14,000" },
      { item: "GPS control establishment", unit: "point", qty: "6", rate: "1,200", amount: "7,200" },
      { item: "GIS processing & mapping", unit: "LS", qty: "1", rate: "18,000", amount: "18,000" },
    ],
    timeline: [
      { phase: "Reconnaissance", detail: "Site walk-over and control planning" },
      { phase: "Field survey", detail: "Total Station detailing and levelling" },
      { phase: "Data processing", detail: "Coordinate reduction and quality checks" },
      { phase: "GIS mapping", detail: "Contours, DEM and spatial analysis" },
      { phase: "Deliverables", detail: "Maps, drawings and terrain report" },
    ],
    downloads: [
      { label: "Survey Report", type: "PDF" },
      { label: "Contour Drawing", type: "DWG" },
      { label: "Coordinate Data", type: "XLSX" },
    ],
  },
  {
    slug: "estimation-project-wakefit-kaiwara",
    title: "Estimation Project – Wakefit.co",
    category: "Quantity Surveying & Estimation",
    year: "2024",
    summary:
      "Detailed quantity take-off, rate analysis and cost estimation carried out for Wakefit.co on the Kaiwara project.",
    description: [
      "Estimation work completed for Wakefit.co on their Kaiwara project, covering measurement of civil works from approved drawings and preparation of a consolidated cost estimate.",
      "Quantities were taken off item-wise for excavation, RCC, masonry, plastering and finishing works, then priced through rate analysis using prevailing material, labour and machinery rates.",
      "Deliverables included the quantity take-off sheets, a rate-analysis workbook and a summarised BOQ with abstract of cost for client review.",
    ],
    tools: ["Quantity Take-Off", "Rate Analysis", "BOQ Preparation", "Microsoft Excel", "AutoCAD"],
    drawings: [
      "Marked-up drawings used for measurement",
      "Item-wise measurement sheets",
      "Abstract of cost summary",
    ],
    calculations: [
      { label: "Scope", value: "Civil works estimation – Kaiwara" },
      { label: "Client", value: "Wakefit.co" },
      { label: "Basis of rates", value: "Prevailing market + SR rates" },
      { label: "Output", value: "BOQ with abstract of cost" },
    ],
    boq: [
      { item: "Earthwork in excavation", unit: "cum", qty: "310", rate: "260", amount: "80,600" },
      { item: "PCC 1:4:8 bed", unit: "cum", qty: "26", rate: "5,400", amount: "1,40,400" },
      { item: "RCC M25 in footings & columns", unit: "cum", qty: "48", rate: "6,200", amount: "2,97,600" },
      { item: "Brick masonry 230 mm", unit: "cum", qty: "94", rate: "6,800", amount: "6,39,200" },
      { item: "Internal & external plastering", unit: "sqm", qty: "1,240", rate: "290", amount: "3,59,600" },
    ],
    timeline: [
      { phase: "Drawing study", detail: "Review of architectural and structural drawings" },
      { phase: "Quantity take-off", detail: "Item-wise measurement and measurement sheets" },
      { phase: "Rate analysis", detail: "Material, labour and machinery rate build-up" },
      { phase: "BOQ & abstract", detail: "Consolidated BOQ with abstract of cost" },
      { phase: "Review", detail: "Cross-checking and client submission" },
    ],
    downloads: [
      { label: "Estimation Report", type: "PDF" },
      { label: "BOQ & Rate Analysis", type: "XLSX" },
    ],
  },
];

/** Local resume PDF (served from /public). */
export const resumeFile = "/documents/resume.pdf";

export type Certification = {
  name: string;
  issuer: string;
  category: string;
  /** Local PDF path under /public. Leave undefined until the file is added. */
  file?: string;
};

/**
 * To add a future certificate: drop the PDF in
 * public/documents/certificates/ and append an entry here with its path.
 * View + Download actions are wired automatically.
 */
export const certifications: Certification[] = [
  {
    name: "Additive Manufacturing Designer and Industry 4.0",
    issuer: "Nitte Meenakshi Institute of Technology (External Tutor)",
    category: "Technology",
    file: "/documents/certificates/additive-manufacturing-industry-4-0.pdf",
  },
  {
    name: "AEC Project Review & Coordination – Navisworks",
    issuer: "EDSCA",
    category: "BIM & Digital Construction",
    file: "/documents/certificates/navisworks-aec-project-review.pdf",
  },
  {
    name: "Project Planning and Management – Primavera P6",
    issuer: "EDSCA",
    category: "Management",
    file: "/documents/certificates/primavera-p6-project-planning.pdf",
  },
  {
    name: "Project Time Management Training",
    issuer: "Infosys",
    category: "Management",
    file: "/documents/certificates/project-time-management.pdf",
  },
  {
    name: "MATLAB Onramp",
    issuer: "MathWorks",
    category: "Technology",
    file: "/documents/certificates/matlab-onramp.pdf",
  },
  {
    name: "Airport and Seaports Engineering",
    issuer: "L&T EduTech",
    category: "Construction",
    file: "/documents/certificates/airport-and-seaports-engineering.pdf",
  },
  {
    name: "BIM – Building Information Modeling",
    issuer: "L&T EduTech",
    category: "BIM & Digital Construction",
    file: "/documents/certificates/bim-building-information-modeling.pdf",
  },
  {
    name: "Project on Time Series Analysis: Future Climatic Change Scenarios",
    issuer: "Infosys",
    category: "Technology",
    file: "/documents/certificates/time-series-analysis-climate.pdf",
  },
  {
    name: "AutoCAD 3D",
    issuer: "EDSCA",
    category: "Technology",
  },
];

export const achievements = [
  "President – Technical Club (INNOVEX), NMIT",
  "2nd Prize – Shark Tank, Survekshan 2026",
  "National Taekwondo Championship Participant",
  "Captain – School Football Team",
  "Multiple Inter-School Football Tournament Winner",
];

export const interests = [
  "Construction Management",
  "Structural Engineering",
  "Quantity Surveying",
  "Project Planning",
  "Cost Estimation",
  "QA/QC",
  "Site Engineering",
  "GIS & Mapping",
  "Smart Infrastructure",
  "Environmental Conservation",
];

export const languages = ["English", "Hindi", "Nepali", "Maithili"];

export const downloads = [
  { label: "Resume / CV", desc: "Latest one-page engineering resume", type: "PDF", size: "320 KB" },
  { label: "Certificates Bundle", desc: "All six certifications in one file", type: "PDF", size: "2.4 MB" },
  { label: "BOQ – Earthquake Resistant Building", desc: "Quantity take-off and rate analysis", type: "XLSX", size: "180 KB" },
  { label: "Estimation Workbook", desc: "Rate analysis templates and sample estimates", type: "XLSX", size: "240 KB" },
  { label: "Survey Drawings – Kalwaran", desc: "Contour map and DEM outputs", type: "DWG", size: "1.1 MB" },
  { label: "Project Report – Piezoelectric Concrete", desc: "Full technical report", type: "PDF", size: "3.2 MB" },
];
