// All portfolio content lives here so the render components stay presentational.

export const profile = {
  name: "Aditya Sawant",
  roles: [
    { label: "MS CS", org: "University at Buffalo", href: "https://www.buffalo.edu/" },
    { label: "Software Development Intern", org: "Channel Core", href: "https://www.channelcore.io/" },
    { label: "Ex — SDE", org: "CarTrade Tech", href: "https://www.cartradetech.com/" },
  ],
  tagline: "Full-stack engineer. Production-minded, systems-first.",
  status: "Open to full-time SDE roles",
  location: "Buffalo, New York",
  headshot: "/headshot.jpg",
  resume: "https://resume.adityasawant.dev/pdf",
  email: "arsawant09@gmail.com",
};

export const about =
  "I like taking systems from whiteboard to production. That's meant building a 68-component design system used by 80M+ people at CarTrade, an EHS job board now in beta with 4,000+ users, and analytics pipelines at ChannelCore syncing hundreds of creator records a day. I'm currently finishing my MS in Computer Science at the University at Buffalo, and I still find time to teach and build side projects like bro-cli, a Rust CLI tool.";

export const work = [
  {
    date: "May 2026 — Aug 2026",
    title: "Software Development Intern",
    company: "Channel Core",
    location: "Irvine, California",
    titleLink: "https://www.channelcore.io/",
    tags: ["OAuth", "Node.js", "PostgreSQL", "Neon", "AWS S3", "CI/CD"],
    body: [
      "Integrating 6 social platforms (Instagram, YouTube, TikTok, LinkedIn, Snapchat, X) via OAuth with automatic token refresh and credential rotation, syncing 500+ creator records daily with 0 data loss.",
      "Architecting separate dev/prod environments on Neon with automated S3 backups and branch protection — serving 150+ creators with zero risk of dev changes affecting live users.",
      "Built a video-level analytics pipeline using YouTube Data API v3 + Analytics API v2, modelled with a Drizzle ORM schema. Debugged a Neon HTTP driver vs. standard Postgres discrepancy in .returning() behavior that silently dropped insert results.",
      "Worked around LinkedIn OAuth's r_dma_portability_3rd_party scope being EEA-only — restructured the token exchange flow so non-EEA users don't hit a silent auth failure.",
    ],
  },
  {
    date: "Jan 2026 — May 2026",
    title: "Software Development Intern",
    company: "Safety Knights",
    location: "Buffalo, New York",
    titleLink: "https://www.safetyknights.com/",
    tags: ["Express", "Node.js", "Angular", "MongoDB", "GridFS", "node-cron", "CI/CD"],
    body: [
      "Shipped a production EHS job board with 4,000 beta users: Express/Node.js API (75+ endpoints, AES-256 encryption), Angular v17 SSR frontend, and a standalone admin console — three independently deployable codebases.",
      "Modelled the data layer with 4 Mongoose schemas — compound, geospatial, and full-text indexes. Multi-axis job search and hourly listing expiration via node-cron.",
      "Built full candidate pipeline — GridFS document storage, 5-stage status tracking, 3 automated email flows — with admin filtering by location, experience, and certification.",
    ],
  },
  {
    date: "Sep 2024 — Jun 2025",
    title: "Software Development Engineer",
    company: "Carwale [CarTrade Tech]",
    location: "Mumbai, India",
    titleLink: "https://www.carwale.com/",
    tags: ["React", "Redux", "JavaScript", ".NET", "MySQL", "CI/CD"],
    body: [
      "Shipped a 68-component Oxygen Design System — improved accessibility and performance for a user base in the millions.",
      "Built React/Redux frontends across multiple product verticals; cut page load times via DOM restructuring, lazy loading, and image-rendering improvements.",
      "Built developer tooling (unused-CSS detection, import management, build optimization) and a modular Template Engine for ad generation; led responsive micro-site and dynamic UI development.",
    ],
  },
  {
    date: "2024",
    title: "Full Stack Web Developer Intern",
    company: "Kutchi Printers & Allied Industries Association",
    location: "Mumbai, India",
    tags: ["NextJS", "MySQL", "CI/CD", "VPS"],
    body: [
      "Built an inquiry routing portal for a printers' association — clients submit inquiries by printing category, automatically distributed to matching members via email. Included member advertisement placements and a scalable admin interface.",
    ],
  },
  // {
  //   date: "2023",
  //   title: "Full Stack Web Developer Intern",
  //   location: "Event Management Startup — Mumbai & Remote",
  //   tags: [],
  //   body: [
  //     "Co-built a real-time collaborative agenda builder for remote event teams — drag-and-drop section management, task assignment, scheduling, and document sharing in a shared hub.",
  //   ],
  // },
  {
    date: "2022 — 2023",
    title: "Full Stack Web Developer Intern",
    company: "Indian Development Foundation",
    location: "Mumbai, India",
    tags: ["NodeJS", "ReactJS", "MySQL", "VPS"],
    body: [
      "Developed a role-based web portal (teachers, students, administrators) for Balgurukul school management. Replaced manual Google Forms grading with a custom UI that eliminated redundant data entry and significantly reduced teacher workload.",
    ],
  },
];

export const projects = [
  {
    date: "2026",
    title: "bro-cli",
    titleLink: "https://bro.adityasawant.dev",
    location: "Personal — systems tooling",
    tags: ["Rust", "TOML", "clap", "🚧 In Progress"],
    body: [
      "A CLI tool built around an emit-and-eval pattern for shell-stateful commands — the shell emits a command string, the CLI evaluates and reacts to it, rather than trying to mutate shell state directly. Flat-file TOML backend; subcommands via clap.",
    ],
  },
  {
    date: "2023 — 2024",
    title: "S3A-Net: Spatial-Spectral Self-Attention Network for Hyperspectral Image Classification",
    location: "Final-year major project",
    tags: ["Python", "PyTorch", "Few-Shot Learning", "Remote Sensing"],
    body: [
      "Implemented and co-researched S3A-Net, a self-attention network for few-shot hyperspectral image classification, under Dr. Manimala Mahato and Prof. Biplab Banerjee. Built the architecture to capture joint spatial and spectral features and ran classification experiments showing strong accuracy with limited labeled data.",
    ],
  },
  {
    date: "2022 — 2023",
    title: "Plan It",
    location: "Third-year minor project",
    tags: ["NLP"],
    body: [
      "Task-management app with NLP for natural-language task input and smart suggestions. Tuned parsing accuracy through framework selection, iterative training, and testing. Supports personal and team-level organization with collaboration.",
    ],
  },
  {
    date: "2021 — 2022",
    title: "Project Gallery",
    location: "Second-year minor project",
    tags: [],
    body: [
      "Platform for SAKEC students to showcase and discover projects — tackled third-party image hosting and session security. Fosters collaboration and knowledge sharing across the college.",
    ],
  },
  {
    date: "2020 — 2023",
    title: "Mini Projects in P5.js",
    titleLink: "https://p5.adityasawant.dev",
    location: "Personal — creative coding",
    tags: ["JavaScript", "P5.js", "Creative Coding"],
    body: [
      "A collection of visual experiments and game remakes: ray tracing (2D & 3D), fractal-tree animations, Flappy Bird, Game of Life, Minesweeper, Snake. Also A*, 8 Queens, K-means, Epsilon-NFA simulation. Each one a hands-on excuse to understand something deeply.",
    ],
  },
  // {
  //   date: "2018 — 2020",
  //   title: "Green Light for Emergency Vehicles",
  //   location: "NES Ratnam & WMJC",
  //   tags: ["Arduino", "Bluetooth"],
  //   body: [
  //     "Arduino transponder system that talks to traffic signals to grant green-light priority to emergency vehicles. Built in junior college; designed to extend to WiFi-connected signals.",
  //   ],
  // },
  // {
  //   date: "2018",
  //   title: "Salary Management Software",
  //   location: "First real project",
  //   tags: ["Python"],
  //   body: [
  //     "First full-fledged software project — a Python app to calculate and manage employee salaries. Built under mentorship to learn data handling, calculations, and basic UI design.",
  //   ],
  // },
];

export const education = [
  {
    date: "Aug 2025 — Dec 2026 (exp.)",
    title: "University at Buffalo — MS Computer Science",
    location: "Buffalo, New York · GPA 3.83",
    titleLink: "https://www.buffalo.edu/",
    tags: [],
    body: [
      "Relevant coursework: Database Systems, Operating Systems, Analysis of Algorithms, Software Security.",
    ],
  },
  {
    date: "Aug 2020 — Jun 2024",
    title: "Shah & Anchor Kutchhi Engineering College — B.E., University of Mumbai",
    location: "Chembur, Mumbai",
    titleLink: "https://www.sakec.ac/",
    tags: [],
    body: [],
  },
];

export const talks = [
  {
    date: "05 Aug 2023",
    title: "Mastering the Web",
    titleLink: "https://www.sakec.ac.in/csi-sakec/mastering-the-web/",
    location: "SAKEC, Mumbai",
    tags: [],
    body: [
      "Taught HTML, CSS, JavaScript, Node.js, and database connectivity to 100+ junior students. Attendees shipped mini-projects on full web stacks by the end of the session.",
    ],
  },
  {
    date: "20 Jan 2023",
    title: "Level Up Creative Coding with P5.js",
    titleLink: "https://www.sakec.ac.in/csi-sakec/level-up-creative-coding-with-p5-js/",
    location: "SAKEC, Mumbai",
    tags: [],
    body: [
      "Ran a hands-on creative-coding workshop on JavaScript fundamentals and P5.js. Participants built generative designs, wall art, and interactive sketches.",
    ],
  },
];

export const contacts = [
  { label: "Email", href: "mailto:arsawant09@gmail.com", value: "arsawant09@gmail.com" },
  { label: "GitHub", href: "https://github.com/AdityaSawant0912", value: "AdityaSawant0912" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adityasawant09/", value: "adityasawant09" },
  { label: "X (Twitter)", href: "https://www.x.com/adzzhere/", value: "adzzhere" },
  { label: "Résumé", href: "https://resume.adityasawant.dev/pdf", value: "resume.adityasawant.dev/pdf" },
];
