export const profile = {
  name: "Amit Kumar",
  title: "Electronics Researcher & VLSI Engineer",
  tagline: "UGC-NET Qualified | Thin Film Spintronics | VLSI Design | Embedded Systems",
  email: "amitkrbsc26@gmail.com",
  location: "New Delhi, India",
  resume: "https://amitkumar26.netlify.app/resume.pdf",
  github: "https://github.com/Amitkr26",
  linkedin: "https://linkedin.com/in/amitkr26",
  twitter: "https://x.com/Amitkrr26",
  instagram: "https://www.instagram.com/amit.kr26",
  facebook: "https://www.facebook.com/amitk26",
  blog: "https://amitkr26.blogspot.com",
  medium: "https://medium.com/@amitkr26",
  stackoverflow: "https://stackoverflow.com/users/32375999/amitkr26",
  behance: "https://www.behance.net/amitkr26",
  bio: [
    "M.Sc. Electronics graduate from University of Delhi with UGC-NET qualification. Research focused on FeCo alloy thin films for spintronic applications using DC magnetron sputtering.",
    "Hands-on experience in magnetic characterization techniques including XRD, VSM, and FMR spectroscopy. Passionate about bridging material science with semiconductor device engineering.",
    "Skilled in VLSI design with Verilog/VHDL, FPGA development, and embedded systems programming. Experienced in circuit design using BJTs, op-amps, and microcontroller-based automation.",
    "Open to Ph.D. opportunities, VLSI design roles, and semiconductor R&D positions."
  ],
  ugcnet: {
    qualified: true,
    subject: "Electronic Science",
    percentile: 77.77,
    score: "136/300",
    examDate: "Dec 2025"
  },
  research: {
    title: "FeCo Alloy Thin Films — Fabrication & Magnetic Characterization for Spintronic Applications",
    domain: "Thin Film Technology & Spintronics",
    techniques: [
      "DC Magnetron Sputtering",
      "X-Ray Diffraction (XRD)",
      "Vibrating Sample Magnetometry (VSM)",
      "Ferromagnetic Resonance (FMR)",
      "Atomic Force Microscopy (AFM)"
    ],
    description: "Fabrication and characterization of FeCo alloy thin films deposited on silicon and flexible substrates using DC magnetron sputtering. The research investigates magnetic anisotropy, saturation magnetization, and damping constants through comprehensive XRD, VSM, and FMR analysis — targeting applications in next-generation spintronic devices and flexible magnetic sensors."
  }
};

export const navigation = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Credentials" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" }
];

export const skills = [
  {
    category: "Thin Film Research",
    items: [
      "DC Sputtering",
      "XRD Analysis",
      "VSM Measurement",
      "FMR Spectroscopy",
      "AFM Characterization",
      "Thin Film Deposition"
    ]
  },
  {
    category: "VLSI Design",
    items: [
      "Verilog HDL",
      "VHDL",
      "FPGA Development",
      "8051 Microcontroller",
      "Digital Logic Design",
      "ModelSim"
    ]
  },
  {
    category: "Embedded Systems",
    items: [
      "Arduino",
      "ESP32",
      "Embedded C/C++",
      "Sensor Interfacing",
      "IoT",
      "Proteus"
    ]
  },
  {
    category: "Circuit Design",
    items: [
      "BJT / Op-Amp Circuits",
      "Analog & Digital Design",
      "Multisim",
      "PSpice",
      "Signal Processing"
    ]
  },
  {
    category: "Programming",
    items: [
      "MATLAB",
      "Python",
      "C / Embedded C",
      "HTML / CSS / JS"
    ]
  }
];

export const projects = [
  {
    id: "feco-dissertation",
    title: "FeCo Thin Films — M.Sc. Dissertation",
    category: "Research",
    year: "2025",
    description: "Magnetic anisotropy and damping constants in DC sputtered FeCo alloy thin films. Comprehensive characterization using XRD for structural analysis, VSM for magnetic hysteresis, and FMR for dynamic property extraction.",
    technologies: ["DC Sputtering", "XRD", "VSM", "FMR", "MATLAB"],
    links: {
      github: null,
      demo: null,
      article: "https://amitkr26.blogspot.com"
    }
  },
  {
    id: "flexible-spintronics",
    title: "Flexible Spintronics Study",
    category: "Research",
    year: "2025",
    description: "Investigating mechanical strain effects on sputtered magnetic thin films for next-generation flexible sensors and wearable spintronic devices. Analysis of strain-induced magnetic anisotropy in FeCo films on polymeric substrates.",
    technologies: ["DC Sputtering", "VSM", "FMR", "Flexible Substrates"],
    links: {
      github: null,
      demo: null,
      article: "https://amitkr26.blogspot.com"
    }
  },
  {
    id: "ezdry",
    title: "EzDry — Laundry Service Platform",
    category: "Web",
    year: "2024",
    description: "Modern web platform for on-demand laundry services. Features include booking management, order tracking, real-time status updates, and secure payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    links: {
      github: null,
      demo: "https://www.ezdry.in"
    }
  },
  {
    id: "scrapco",
    title: "ScrapCo — Scrap Collection Platform",
    category: "Web",
    year: "2024",
    description: "Digital platform connecting users with scrap collectors. Features real-time tracking, pricing calculator, scheduling system, and user dashboard for collection management.",
    technologies: ["React", "Node.js", "MongoDB", "Real-time Tracking"],
    links: {
      github: null,
      demo: "https://www.scrapco.app"
    }
  },
  {
    id: "esp32-microscope",
    title: "ESP32-CAM Digital Microscope",
    category: "Embedded",
    year: "2024",
    description: "WiFi-enabled digital imaging system for real-time microscopy streaming. Features adjustable LED illumination, motorized focus control via stepper motor, and wireless image capture at 1600x1200 resolution.",
    technologies: ["ESP32-CAM", "Arduino", "WiFi", "Stepper Motor", "IoT"],
    links: {
      github: "https://github.com/Amitkr26",
      demo: null
    }
  },
  {
    id: "line-follower",
    title: "Line Follower Robot",
    category: "Embedded",
    year: "2023",
    description: "Autonomous robotic system with IR sensor array and PID control algorithm. Optimized for high-speed path detection with precise motor synchronization using register-level GPIO programming.",
    technologies: ["Arduino", "IR Sensors", "PID Control", "Motor Drivers", "C"],
    links: {
      github: "https://github.com/Amitkr26",
      demo: null
    }
  }
];

export const certifications = [
  {
    title: "UGC-NET Qualified",
    issuer: "National Testing Agency",
    subject: "Electronic Science",
    date: "Dec 2025",
    detail: "77.77 percentile | Score: 136/300"
  },
  {
    title: "VLSI for Beginners",
    issuer: "NIELIT Calicut",
    date: "2024",
    detail: "Semiconductor & VLSI Fundamentals"
  },
  {
    title: "FPGA Development",
    issuer: "LinkedIn Learning",
    date: "2024",
    detail: "Verilog & FPGA Architecture"
  },
  {
    title: "Embedded System Design",
    issuer: "LinkedIn Learning",
    date: "2024",
    detail: "Hardware-Software Co-design"
  },
  {
    title: "Electronics Foundations",
    issuer: "LinkedIn Learning",
    date: "2024",
    detail: "Semiconductor Devices"
  },
  {
    title: "Cloud Computing",
    issuer: "LinkedIn Learning",
    date: "2024",
    detail: "Cloud Infrastructure Basics"
  }
];

export const experience = [
  {
    id: 0,
    role: "Technical Support Trainee",
    organization: "Sony India — Consumer Electronics",
    period: "Sep 2025 - Nov 2025",
    description: "Remote technical support for Sony Bravia display ecosystem. Troubleshooting display calibration, connectivity issues, and firmware updates for consumer television products.",
    highlights: [
      "Resolved 40+ display calibration and connectivity tickets",
      "Documented troubleshooting workflows for common firmware issues",
      "Collaborated with engineering team on recurring defect reporting"
    ]
  },
  {
    id: 1,
    role: "Research Dissertation",
    organization: "University of Delhi — UDSC",
    period: "Jan 2025 - May 2025",
    description: "FeCo thin film research using DC magnetron sputtering. Comprehensive magnetic characterization with XRD, VSM, and FMR techniques targeting spintronic device applications.",
    highlights: [
      "Fabricated FeCo thin films with controlled thickness (20-100nm) via DC sputtering",
      "Performed XRD analysis for crystallographic orientation determination",
      "Extracted magnetic anisotropy and damping constants from VSM/FMR data using MATLAB"
    ]
  },
  {
    id: 2,
    role: "Electronics Intern",
    organization: "Sagedel Tech LLP",
    period: "Jul 2023 - Dec 2023",
    description: "Circuit design and validation using BJT, op-amps, and Arduino. Developed autonomous robotic systems with closed-loop control for industrial automation prototypes.",
    highlights: [
      "Designed and tested analog signal conditioning circuits with op-amps",
      "Built Arduino-based closed-loop control system for robotic prototype",
      "Created PCB layouts and validated designs with Proteus simulation"
    ]
  }
];

export const education = [
  {
    id: 0,
    institution: "University of Delhi South Campus",
    degree: "M.Sc. Electronics",
    period: "2023 - 2025",
    grade: "CGPA: 7.2",
    description: "Advanced study in Semiconductor Physics, VLSI Design, and Thin Film Technology. Research focused on magnetic thin film fabrication and characterization for spintronic applications.",
    highlights: [
      "Research dissertation on FeCo thin films using DC sputtering",
      "Coursework: Solid State Devices, VLSI Design, Embedded Systems, Thin Film Technology"
    ]
  },
  {
    id: 1,
    institution: "Acharya Narendra Dev College, University of Delhi",
    degree: "B.Sc. (Hons.) Electronic Science",
    period: "2020 - 2023",
    grade: "CGPA: 7.4",
    description: "Core electronics curriculum covering Analog and Digital Circuits, Microprocessors, Signal Processing, and Communication Systems with hands-on laboratory experience.",
    highlights: [
      "Comprehensive lab work in analog/digital circuit design",
      "Microprocessor programming and interfacing projects",
      "Foundation in communication systems and signal processing"
    ]
  }
];
