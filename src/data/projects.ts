export type Project = {
  link?: string
  name: string
  year: number
  platform: string
  techs?: string[]
  images?: string[]
  role: string
  status: string
  industry?: string
  description?: string
  challenges?: string[]
  solutions?: string[]
}

export type ProjectStats = {
  label: string
  value: number
  caption?: string
}

const projects: Project[] = [
  {
    name: 'SysGlad-hta',
    year: 2023,
    platform: 'Symfony/Angular',
    status: 'RELEASED',
    images: ['39', '54', '31', '30'],
    role: 'Full Stack, Design',
    industry: 'Electricity control, ONEE',
    techs: ['Symfony', 'Angular', 'API Platform', 'Chart.js'],
    description: 'Electric Power Quality Monitoring System, facilitating the tracking and management of electricity production, transmission, and distribution. It employs an algorithm for anomaly detection and network performance analysis.',
    challenges: [
      'Designing a database schema to accurately represent the electricity distribution network',
      'Migrating client data from Excel sheets to an SQL database',
      'Integrating Angular frontend with Symfony backend',
    ],
    solutions: [
      'Integrating the Breadth-First Search (BFS) algorithm',
      'Implementing efficient caching strategies',
      'Using Angular\'s powerful data-binding and visualization libraries for clear, interactive dashboards',
    ]
  },
  {
    name: 'Dunforce',
    link: 'dunforce.com',
    year: 2024,
    platform: 'React',
    status: 'RELEASED',
    images: ['57', '56', '52', '32'],
    role: 'Frontend',
    industry: 'Social housing',
    techs: ['Symfony', 'React', 'API Platform', 'AWS'],
    description: 'An application focused on big data solutions for social housing. It uses machine learning to predict invoice payment timelines, automates collection processes, integrates with ERPs, and supports various financial services through an open architecture.',
    challenges: [
      'Coordinating frontend changes with backend updates during the migration from v1 to v2',
      'Maintaining consistent UI/UX across a large-scale application with diverse feature sets',
      'Adapting to and implementing SCRUM methodologies alongside remote international team members',
    ],
    solutions: [
      'Collaborating with backend developers to synchronize API changes with frontend updates',
      'Utilizing Git-flow for efficient version control and collaborative development',
      'Conducting regular code reviews and using standardized coding practices to maintain code quality',
    ],
  },
  {
    name: 'Hifi Filter',
    link: 'hifi-filter.com',
    year: 2021,
    platform: 'WordPress',
    status: 'RELEASED',
    images: ['48', '24', '15', '6'],
    role: 'Backend',
    industry: 'Filtration and separation solutions',
    techs: ['Wordpress', 'ACF', 'WPML', 'Gutenberg', 'WPRocket'],
    description: 'A dynamic website for HIFI FILTER, specializing in filtration and separation solutions.',
    challenges: [
      "Managing a multi-language website with 7 different languages",
      "Developing dynamic content blocks with unique designs",
      "Handling a complex image-rich multi-level menu",
    ],
    solutions: [
      "Using WordPress's ACF plugin for component-based block development",
      "Creating a custom menu walker to handle the intricate menu structure",
      "Implementing SEO best practices for efficient image handling",
    ],
  },
  {
    name: 'IGolf Morocco',
    link: 'igolfmorocco.com',
    year: 2023,
    platform: 'Symfony',
    status: 'RELEASED',
    role: 'Frontend',
    images: ['51', '55', '34', '33'],
    industry: 'Golf',
    techs: ['Symfony', 'Webpack', 'SCSS', 'Google map API'],
    description: 'A website dedicated to promoting golf tourism in Morocco. The website provides information about various golf courses, travel packages, accommodation options, and related services.',
    challenges: [
      "Implement interfaces for customizing golf trip packages",
      "Create booking forms and calendars for professional golfers",
      "Support multilingual and multi-currency options",
    ],
    solutions: [
      "Develop interactive maps and location-based features for showcasing golf courses.",
      "Integrate intuitive navigation and user flows for seamless booking experiences",
      "Implement advanced search and filtering options for golf courses and accommodation",
    ],
  },
  {
    name: 'Marrakech Fine Food',
    link: 'ma.marrakechfinefood.com',
    year: 2022,
    platform: 'Prestashop',
    status: 'RELEASED',
    role: 'Frontend',
    images: ['47', '25', '16', '7'],
    industry: 'Food',
    techs: ['Prestashop'],
    description: 'An e-commerce platform. It offers a diverse range of items such as fragrant teas, carefully roasted coffees, crispy shortbread and wafers, and more..',
    challenges: [
      "Convert Figma designs into a custom PrestaShop theme",
      "Customizing product listing layouts and filters",
      "Implementing interactive product swatches for variant selection",
    ],
    solutions: [
      "Implementing cross-selling product recommendation",
      "Customizing checkout process for usability and conversion",
      "Designing flexible homepage sections for promotions",
      "Developing a customizable mega menu for navigation",
    ],
  },
  {
    name: 'Tots',
    year: 2022,
    platform: 'Php',
    role: 'Frontend',
    status: 'RELEASED',
  },
  {
    name: 'Picaxel',
    year: 2022,
    platform: 'Wordpress',
    role: 'Frontend',
    status: 'RELEASED',
    techs: ['GSAP', 'webpack'],
  },
  {
    name: 'Laboratoires de Biarritz',
    images: ['39', '54', '31', '30'],
    year: 2023,
    platform: 'Prestashop',
    role: 'Frontend',
    status: 'RELEASED',
    techs: [],
    challenges: [
      "Customizing checkout process to improve user experience",
      "Integrating third-party modules with custom frontend",
      "Maintaining SEO best practices with dynamic content",
    ],
    solutions: [
      "Ensuring smooth integration of the custom live cart plugin",
      "Achieving full customization of the frontend UI while maintaining performance",
      "Making the website fully editable by non-developers",
    ],
  },
  {
    name: 'Fryvy',
    year: 2024,
    platform: 'React Native',
    role: 'Frontend',
    status: 'UNRELEASED',
  },
  {
    name: 'Personal Notebook',
    year: 2023,
    platform: 'Vite.js/Firebase',
    role: 'Full Stack',
    status: 'PLAYGROUND',
  },
  {
    name: 'Portfolio',
    year: 2024,
    platform: 'Astro',
    role: 'Full Stack, Design',
    status: 'RELEASED',
  },
  {
    name: 'What if',
    year: 2024,
    platform: 'MERN stack',
    role: 'Full Stack, Design',
    status: 'PLAYGROUND',
  },
  {
    name: 'Yesbox',
    year: 2021,
    platform: 'Symfony',
    role: 'Full Stack',
    status: 'RELEASED',
  },
  {
    name: 'Planetary facts',
    year: 2021,
    platform: 'Three.js',
    role: 'Frontend, Design',
    status: 'PLAYGROUND',
  },
  {
    name: 'Les Sens de Marrakech',
    year: 2022,
    platform: 'Prestashop',
    role: 'Frontend',
    status: 'RELEASED',
  },
  {
    name: 'Evras déménagement',
    year: 2024,
    platform: 'WordPress',
    role: 'Full Stack',
    status: 'RELEASED',
  },
  {
    name: 'Kinesil',
    year: 2024,
    platform: 'WordPress',
    role: 'Full Stack',
    status: 'RELEASED',
  },
  {
    name: 'Bourdel et associés',
    year: 2024,
    platform: 'WordPress',
    role: 'Full Stack',
    status: 'RELEASED',
  },
  {
    name: 'Arganpalace',
    year: 2024,
    platform: 'Symfony',
    role: 'Frontend',
    status: 'RELEASED',
  },
  // {
  //   name: 'Top global music',
  //   year: 2024,
  //   platform: 'Vite.js',
  //   role: 'Frontend, Design',
  //   status: 'PLAYGROUND',
  // },
  {
    name: 'Freshmania',
    year: 2024,
    platform: 'Symfony',
    role: 'Frontend',
    status: 'UNRELEASED',
  },
  {
    name: 'Transfertsways',
    year: 2024,
    platform: 'Symfony',
    role: 'Frontend',
    status: 'RELEASED',
  },
  {
    name: 'Myseelver',
    year: 2024,
    platform: 'React',
    role: 'Frontend',
    status: 'RELEASED',
  },
  // {
  //   name: 'Islamic pomodoro',
  //   year: 2024,
  //   platform: 'React',
  //   role: 'Frontend, Design',
  //   status: 'UNRELEASED',
  // },
  {
    name: 'Centre dentaire founty',
    year: 2023,
    platform: 'WordPress',
    role: 'Full Stack',
    status: 'RELEASED',
  },

  {
    name: 'Centre Dentaire Essaoui',
    year: 2023,
    platform: 'WordPress',
    role: 'Full Stack',
    status: 'RELEASED',
  },
  // {
  //   name: 'Congres',
  //   year: 2023,
  //   platform: 'Prestashop theme',
  //   role: 'Frontend',
  //   status: 'RELEASED',
  // },
  {
    name: 'AGOF tickets',
    year: 2023,
    platform: 'Symfony',
    role: 'Frontend',
    status: 'RELEASED',
  },
  {
    name: 'Golf market place',
    year: 2023,
    platform: 'Sylius',
    role: 'Frontend',
    status: 'RELEASED',
  },
  {
    name: 'AGOF App',
    year: 2023,
    platform: 'React Native',
    role: 'Frontend',
    status: 'RELEASED',
  },

  // {
  //   name: 'The Movie Vault',
  //   year: 2023,
  //   platform: '-',
  //   role: 'Design',
  //   status: 'STUDY CASE',
  // },

  {
    name: 'Inzee.Care',
    year: 2022,
    platform: 'Wordpress',
    role: 'Frontend',
    status: 'RELEASED',
  },

  {
    name: 'Agadir Oufella',
    year: 2022,
    platform: 'WordPress',
    role: 'Frontend',
    status: 'RELEASED',
  },

  {
    name: 'OCEAMIC II',
    year: 2021,
    platform: 'WordPress',
    role: 'Full Stack',
    status: 'RELEASED',
  },
  {
    name: 'Marquis Transports et Logistique',
    year: 2021,
    platform: 'WordPress',
    role: 'Full Stack',
    status: 'RELEASED',
  },
  {
    name: 'nTask',
    year: 2020,
    platform: 'Laravel',
    role: 'Full Stack',
    status: 'RELEASED',
  },
  {
    name: 'Otman Elhadeg Law-firm',
    year: 2020,
    platform: 'Php',
    role: 'Full Stack',
    status: 'RELEASED',
  },
]

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
