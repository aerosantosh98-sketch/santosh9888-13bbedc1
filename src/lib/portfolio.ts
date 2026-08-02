export const profile = {
  name: "Santosh Yadav",
  title:
    "Civil Engineering Undergraduate | Quantity Surveying | Structural Engineering | GIS & Remote Sensing",
  longTitle:
    "Civil Engineering Undergraduate | Quantity Surveying & Estimation | GIS & Remote Sensing | Structural Engineering | Future Construction Project Engineer",
  bio: "I'm Santosh Yadav, a Civil Engineering undergraduate at Nitte Meenakshi Institute of Technology (NMIT), Bengaluru, with a strong passion for structural engineering, quantity surveying, construction management, GIS & Remote Sensing, surveying, and sustainable infrastructure. I enjoy solving real-world engineering challenges through technical analysis, innovation, and practical design solutions. My goal is to build a career with leading international engineering and construction firms, contributing to impactful infrastructure projects while continuously expanding my technical expertise.",
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
    slug: "survey-project-kalwaran",
    title: "Survey Project – Kalwaran",
    category: "Surveying & GIS",
    year: "2024",
    summary:
      "Performed Total Station survey, GIS processing, contour mapping, and Digital Elevation Model generation.",
    description: [
      "A detailed topographic survey of the Kalwaran site was carried out using a Total Station with control points established by GPS observation.",
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
    slug: "field-surveying-project",
    title: "Field Surveying Project",
    category: "Surveying & GIS",
    year: "2024",
    summary: "Conducted topographic surveys and infrastructure field measurements.",
    description: [
      "Field measurement campaign covering road alignment, existing structures and utility positions for an infrastructure study.",
      "Levelling, chainage marking and cross-section measurements were recorded and reduced into plotted longitudinal and cross-section drawings.",
      "The exercise strengthened practical instrument handling, booking discipline and error checking.",
    ],
    tools: ["Auto Level", "Total Station", "Chain & Tape", "AutoCAD"],
    drawings: [
      "Longitudinal section along alignment",
      "Cross-sections at 20 m chainage",
      "Site plan with existing features",
    ],
    calculations: [
      { label: "Alignment length", value: "≈ 1.2 km" },
      { label: "Cross-section interval", value: "20 m" },
      { label: "Levelling check", value: "Rise & fall verified" },
    ],
    boq: [
      { item: "Field survey crew", unit: "day", qty: "3", rate: "3,000", amount: "9,000" },
      { item: "Drafting & plotting", unit: "LS", qty: "1", rate: "6,500", amount: "6,500" },
    ],
    timeline: [
      { phase: "Planning", detail: "Alignment definition and station marking" },
      { phase: "Field work", detail: "Levelling and cross-section booking" },
      { phase: "Reduction", detail: "Level book reduction and checks" },
      { phase: "Drafting", detail: "L-section and cross-section drawings" },
    ],
    downloads: [
      { label: "Field Book Summary", type: "PDF" },
      { label: "L-Section Drawing", type: "DWG" },
    ],
  },
];

export const certifications = [
  { name: "ArcGIS Fundamentals", issuer: "Esri Learning", category: "GIS & Remote Sensing" },
  { name: "GIS Basics", issuer: "Online Certification", category: "GIS & Remote Sensing" },
  { name: "3D Printing Technology", issuer: "NMIT", category: "Technology" },
  { name: "Metro, Tunnel & Pile Engineering", issuer: "L&T EduTech", category: "Construction" },
  { name: "Project Management", issuer: "Infosys", category: "Management" },
  { name: "Project Risk Management & Mitigation", issuer: "Infosys", category: "Management" },
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
