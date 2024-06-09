export type Project = {
  link: string
  name: string
  year: number
  platform: string
  techs?: string[]
  role: string
  status: string
  info: string
}

export type ProjectStats = {
  label: string
  value: number
  caption?: string
}

const projects: Project[] = [
  {
    "link": "/",
    "name": "bourdel et associés",
    "year": 2024,
    "platform": "WordPress",
    "role": "Full Stack",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "evras",
    "year": 2024,
    "platform": "WordPress",
    "role": "Full Stack",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Transfertsways",
    "year": 2024,
    "platform": "Symfony",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "myseelver",
    "year": 2024,
    "platform": "React",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "DUNFORCE",
    "year": 2024,
    "platform": "React",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "What if",
    "year": 2024,
    "platform": "MERN stack",
    "role": "Full Stack, Design",
    "status": "PLAYGROUND",
    "info": ""
  },
  {
    "techs": ["ReactJS (NextJS)", "TypeScript"],
    "link": "/",
    "name": "Kinesil",
    "year": 2024,
    "platform": "WordPress",
    "role": "Full Stack",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Arganpalace",
    "year": 2024,
    "platform": "Symfony",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Top global music",
    "year": 2024,
    "platform": "Vite.js",
    "role": "Frontend, Design",
    "status": "PLAYGROUND",
    "info": ""
  },
  {
    "link": "/",
    "name": "my portfolio",
    "year": 2024,
    "platform": "Astro",
    "role": "Full Stack, Design",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Freshmania",
    "year": 2024,
    "platform": "Symfony theme",
    "role": "Frontend",
    "status": "UNRELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Evrys",
    "year": 2024,
    "platform": "React Native",
    "role": "Frontend",
    "status": "UNRELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Islamic pomodoro",
    "year": 2024,
    "platform": "React",
    "role": "Frontend, Design",
    "status": "UNRELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "SysGlad",
    "year": 2023,
    "platform": "Symfony/Angular",
    "role": "Full Stack, Design",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "CDF",
    "year": 2023,
    "platform": "WordPress",
    "role": "Full Stack",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Personal Notebook",
    "year": 2023,
    "platform": "vitejs/firebase",
    "role": "Full Stack",
    "status": "PLAYGROUND",
    "info": ""
  },
  {
    "link": "/",
    "name": "CDE",
    "year": 2023,
    "platform": "WordPress",
    "role": "Full Stack",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Congres",
    "year": 2023,
    "platform": "Prestashop theme",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "AGOF tickets",
    "year": 2023,
    "platform": "Vanilla Webpack",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "IGolf",
    "year": 2023,
    "platform": "Vanilla Webpack",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Golf market",
    "year": 2023,
    "platform": "Sylius theme",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "AGOF App",
    "year": 2023,
    "platform": "React Native",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "LDB",
    "year": 2023,
    "platform": "Prestashop theme",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "The Movie Vault",
    "year": 2023,
    "platform": "-",
    "role": "Design",
    "status": "STUDY CASE",
    "info": ""
  },
  {
    "link": "/",
    "name": "LSDM",
    "year": 2022,
    "platform": "Prestashop theme",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "INZEE",
    "year": 2022,
    "platform": "Prestashop",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "TOTS",
    "year": 2022,
    "platform": "Pure PHP",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "AGOF",
    "year": 2022,
    "platform": "WordPress",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "PICAXEL",
    "year": 2022,
    "platform": "GSAP",
    "role": "Frontend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "MFF",
    "year": 2022,
    "platform": "Prestashop theme",
    "role": "-",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Plantery facts",
    "year": 2021,
    "platform": "Three.js",
    "role": "Frontend, Design",
    "status": "PLAYGROUND",
    "info": ""
  },
  {
    "link": "/",
    "name": "HIFI",
    "year": 2021,
    "platform": "WordPress",
    "role": "Backend",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Oceamic",
    "year": 2021,
    "platform": "WordPress",
    "role": "Full Stack",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Marquis",
    "year": 2021,
    "platform": "WordPress",
    "role": "Full Stack",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Yesbox",
    "year": 2021,
    "platform": "Symfony",
    "role": "Full Stack",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "nTask",
    "year": 2020,
    "platform": "laravel",
    "role": "Full Stack",
    "status": "RELEASED",
    "info": ""
  },
  {
    "link": "/",
    "name": "Elhadeg lawfirm",
    "year": 2020,
    "platform": "pure php",
    "role": "Full Stack",
    "status": "RELEASED",
    "info": ""
  },
];

const projectStats: ProjectStats[] = [
  {
    label: 'Codecraft Mastery',
    value: 4,
    caption: 'Years',
  },
  {
    label: 'Completed Projects',
    value: 19,
  },
  {
    label: 'Contributed projects',
    value: 16,
  },
  {
    label: 'Supervised projects',
    value: 10,
  },
]

export { projects, projectStats }
