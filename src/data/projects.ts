export type Project = {
  link?: string | { [key: string]: string }
  name: string
  year?: number
  platform?: string
  techs?: string[]
  images?: string[]
  role: string
  status: string
  industry?: string
  subtitle?: string
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
  // SysGlad-hta
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
  // Marrakech Fine Food
  {
    name: 'Marrakech Fine Food',
    link: 'ma.marrakechfinefood.com',
    year: 2022,
    platform: 'Prestashop',
    status: 'RELEASED',
    role: 'Frontend',
    images: ['47', '25', 'mff', '7'],//, '16'
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
  // Agadir Oufella
  {
    name: 'Agadir Oufella',
    link: {
      'Website': 'agadir-oufella.ma',
      'History': 'https://www.agadir-oufella.ma/fr/histoire-et-heritage/',
      'Tickets': 'tickets.agadir-oufella.ma',
      'App store': 'https://apps.apple.com/fr/app/agadir-oufella/id6450891651',
      'Google play': 'https://play.google.com/store/apps/details?id=com.agadiroufella.app204353&pli=1'
    },
    year: 2023,
    platform: 'Multi-platform',
    status: 'RELEASED',
    role: 'Frontend',
    images: ['64', '63', '62', '61'],
    industry: 'Tourism',
    techs: ['WordPress', "Symfony", "React Native", 'GSAP', 'OpenSeadragon'],
    description: 'Developed a multi-platform project for Agadir Oufella, a historical touristic site. The project includes a WordPress website for general information, a Symfony-based platform for ticket sales, and a React Native app for an audio guide',
    challenges: [
      "Implementing smooth animations and interactive elements",
      "Coordinating development across WordPress, Symfony, and React Native for seamless integration"
    ],
    solutions: [
      "Using the GSAP library for dynamic and engaging historical content",
      "Integrating OpenSeadragon for an interactive 3D map experience",
      "Ensuring seamless multi-language support and RTL functionality for Arabic"
    ],
  },
  // Tots
  {
    name: 'Tots',
    link: 'tots.fr',
    year: 2022,
    platform: 'Php',
    status: 'RELEASED',
    role: 'Frontend',
    images: ['43', '27', '18', 'tots', '9'],
    industry: 'E-commerce (Bathroom Furniture and Accessories)',
    techs: ['PHP', 'Webpack', 'Algolia'],
    description: 'tots.fr is an e-commerce website specializing in the online sales of bathroom furniture, and all accessories needed to create or renovate bathroom.',
    challenges: [
      "Complex Product Page Requirements",
      "Handling a Very Large Products Database",
      "Building from Scratch with Scalability in Mind",
      "Managing Extensive Features Leading to Website Size",
    ],
    solutions: [
      "Developed Custom Product Pages with Interactive Features",
      "Integrated Algolia for Efficient Search Functionality",
      "Implemented SEO Best Practices, Including Optimized Image Handling",
    ],
  },
  // Picaxel
  {
    name: 'Picaxel',
    link: 'picaxel.com',
    year: 2022,
    platform: 'Wordpress',
    status: 'RELEASED',
    role: 'Frontend',
    images: ['3', '21', '12', '40'],
    industry: 'Digital Agency',
    techs: ['GSAP', 'webpack'],
    description: "A digital agency website showcasing web development, digital strategy, and consulting services",
    challenges: [
      "Ensuring Smooth Animations",
      "Optimizing Website Performance",
      "Ensured consistent experience across different browsers"
    ],
    solutions: [
      "Used GSAP for high-performance animations",
      "Employed caching, image optimization, and code minification",
      "Followed SEO best practices and WCAG guidelines"
    ],
  },
  // Dunforce
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
  // Yesbox
  {
    name: 'Yesbox',
    link: 'yes-box.fr',
    year: 2021,
    platform: 'Symfony',
    status: 'RELEASED',
    role: 'Full Stack',
    images: ['45', '22', '13', '4'],
    industry: 'Self-Storage, Real Estate',
    techs: ['Symfony'],
    description: 'Yesbox is a self-storage company located in Hauts-de-France. The website provides information about their storage units and automates the process of requesting quotes and checking box availability.',
    challenges: [
      'Automating the process of checking storage unit availability and requesting quotes',
      'Integrating a real-time system to provide accurate rental estimates',
      'Designing a user-friendly customer area to enhance customer relationship management',
    ],
    solutions: [
      'Developed a dynamic catalog of storage units by center, allowing sales reps to manage current rentals efficiently',
      'Implemented a 3-step quote request process that provides real-time estimates, streamlining the process for customers and sales reps',
      'Created a comprehensive customer area that offers a personalized experience, making it easy for customers to manage their rentals and interact with the company'
    ],
  },
  // IGolf Morocco
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
  // Hifi Filter
  {
    name: 'HIFI FILTER',
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
  // Laboratoires de Biarritz
  {
    name: 'Laboratoires de Biarritz',
    link: 'laboratoires-biarritz.com',
    year: 2023,
    platform: 'Prestashop',
    status: 'RELEASED',
    role: 'Frontend',
    images: ['ldb', '50', '38', '36', '35'],
    techs: ['Prestashop'],
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
  // Fryvy
  {
    name: 'Fryvy',
    year: 2024,
    platform: 'React Native',
    status: 'UNRELEASED',
    role: 'Frontend',
    images: ['28', '19', '10', '49'],
    industry: 'Construction, Renovation',
    techs: ['React Native'],
    description: "A French app that connects individuals and businesses with professionals in the construction, renovation, and home improvement sectors. The platform allows users to find and hire experts such as builders, plumbers, electricians, painters, and other tradespeople for various projects. Key features include service listings, project showcases, and customer reviews, helping users make informed decisions when selecting contractors.",
    challenges: [
      "Developing the app to work seamlessly across iOS, Android, and web platforms",
      "Ensuring a consistent user experience and performance across all platforms",
      "Integrating comprehensive features like service listings, project showcases, and customer reviews"
    ],
    solutions: [
      "Utilizing React Native for cross-platform development, ensuring compatibility with iOS, Android, and web",
      "Implementing responsive design and adaptive features to maintain a consistent experience across devices",
      "Building robust components and leveraging third-party libraries for features like listings and reviews"
    ],
  },
  // todo 🏁
  {
    name: 'Portfolio',
    link: 'saidalachgar.site',
    year: 2024,
    platform: 'Astro',
    status: 'RELEASED',
    role: 'Full Stack, Design',
    // images: ['xx', 'xx', 'xx', 'xx'],
    industry: 'xx',
    techs: ['xx'],
    description: '',
    challenges: [],
    solutions: [],
  },
  // Les Sens de Marrakech
  {
    name: 'Les Sens de Marrakech',
    link: 'lessensdemarrakech.fr',
    year: 2022,
    platform: 'Prestashop',
    status: 'RELEASED',
    role: 'Frontend',
    // images: ['47', 'xx', 'xx', 'xx'],
    industry: 'Cosmetics & Home Products',
    techs: ['Prestashop'],
    description: 'Les Sens de Marrakech is a French brand based in Morocco, specializing in cosmetics and home products with natural ingredients. The project involves developing a custom PrestaShop theme to enhance the online store’s visibility, navigation, and user experience. The custom theme, designed based on a Figma mockup, aims to reflect the brand’s colors and streamline the ordering process.',
    challenges: [
      'Enhancing user navigation and overall experience',
      'Personalizing the ordering process while maintaining site performance'
    ],
    solutions: [
      'Developed a custom theme that reflects the brand\'s aesthetic',
      "Streamlining the checkout process with intuitive UI elements and personalization options",
      "Ensuring the theme’s performance and responsiveness across devices"
    ],
  },
  // Evras déménagement
  {
    name: 'Evras déménagement',
    link: 'evrasdemenagements.fr',
    year: 2024,
    platform: 'WordPress',
    status: 'RELEASED',
    role: 'Full Stack',
    // images: ['xx', 'xx', 'xx', 'xx'],
    industry: 'Removals & Relocations',
    techs: ['Wordpress'],
    description: "It's a company specialized in national and international removals for individuals as well as companies",
    challenges: [
      "Customizing the Enfold Theme to match the brand's colors and design specifications",
      "Ensuring the website effectively highlights various removal services and improves online visibility",
      "Making the website user-friendly for non-developers to manage content",
    ],
    solutions: [
      "Pixel-perfect customization of the Enfold Theme based on the Figma mockup",
      "Implementing SEO best practices to enhance online visibility",
      "Configuring theme settings and content management features to facilitate easy updates by non-developers",
    ],
  },
  // Kinesil
  {
    name: 'Kinesil',
    link: 'Kinesil.com',
    year: 2024,
    platform: 'WordPress',
    status: 'RELEASED',
    role: 'Full Stack',
    // images: ['xx', 'xx', 'xx', 'xx'],
    industry: 'Physiotherapy',
    techs: ['Wordpress'],
    description: 'Website for a local physiotherapist to showcase services and provide contact information',
    challenges: [
      "Implementing a user-friendly layout to effectively present physiotherapy services",
      "Ensuring the website is accessible in multiple languages"
    ],
    solutions: [
      "Configuring contact forms and location maps for enhanced client interaction",
      "Developing intuitive navigation and clear calls-to-action to enhance user experience"
    ],
  },
  // Bourdel et associés
  {
    name: 'Bourdel et associés',
    link: 'bourdel-associes.fr',
    year: 2024,
    platform: 'WordPress',
    status: 'RELEASED',
    role: 'Full Stack',
    // images: ['xx', 'xx', 'xx', 'xx'],
    industry: 'Accounting',
    techs: ['Wordpress', "OpenStreetMap", "Enfold"],
    description: 'Accounting firm providing expert support in accounting, tax, social, and legal management. The site features their services and methods',
    challenges: [
      "Customizing a theme to align with the firm's brand and presentation needs",
      "Ensuring the site offers clear information about their methods and support"
    ],
    solutions: [
      "Tailoring the Enfold Theme to match the firm’s branding and service offerings",
      "Implementing features to facilitate easy navigation and access to key information"
    ],
  },
  // Arganpalace
  {
    name: 'Arganpalace',
    link: 'arganpalace.com',
    year: 2024,
    platform: 'Symfony',
    status: 'RELEASED',
    role: 'Frontend',
    // images: ['xx', 'xx', 'xx', 'xx'],
    industry: 'Wellness and Spa',
    techs: ['Symfony', 'SonataAdmin'],
    description: 'A reservation website for a local Moroccan Hammam and Massage Center',
    challenges: [
      "Developing a reservation system that integrates with the center’s scheduling",
      "Creating an intuitive user interface that highlights services and pricing",
    ],
    solutions: [
      "Building a custom reservation system",
      "Designing a user-friendly interface that effectively showcases services and pricing"
    ],
  },
  // {
  //   name: 'Myseelver',
  //   link: 'myseelver.com/diapo/098',
  //   year: 2024,
  //   platform: 'React',
  //   status: 'RELEASED',
  //   role: 'Frontend',
  // images: ['xx','xx','xx','xx'],
  //   industry: 'xx',
  //   techs: ['xx'],
  //   description: '',
  //   challenges: [],
  //   solutions: [],
  // },
  // Centre dentaire founty
  {
    name: 'Centre dentaire founty',
    link: 'centredentairefounty.ma',
    year: 2023,
    platform: 'WordPress',
    status: 'RELEASED',
    role: 'Full Stack',
    images: ['65', '66', '67', '68'],
    industry: 'Dental',
    techs: ['WordPress', 'GSAP', 'Google maps'],
    description: "A local dental clinic. The site showcases the dentist's specialties and provides detailed information about the doctor and her office",
    challenges: [
      "Integrating GSAP for smooth animations without compromising site performance",
      "Implementing multi-language support, including preparation for RTL languages"
    ],
    solutions: [
      "Configuring contact forms and location maps for enhanced client interaction",
      "Developing intuitive navigation and clear calls-to-action to enhance user experience"
    ],
  },
  // Centre Dentaire Essaoui
  {
    name: 'Centre Dentaire Essaoui',
    link: 'centredentaireessaoui.ma',
    year: 2023,
    platform: 'WordPress',
    status: 'RELEASED',
    role: 'Full Stack',
    images: ['60', '37', '59', '58'],
    industry: 'Dental',
    techs: ['WordPress', 'Google maps'],
    description: "A local dental clinic. The site showcases the dentist's specialties and provides detailed information about the doctor and her office",
    challenges: [
      "Creating a minimalist design that effectively highlights the doctor's specialties and office information",
      "Implementing multi-language support, including RTL languages"
    ],
    solutions: [
      "Configuring contact forms and location maps for enhanced client interaction",
      "Developing intuitive navigation and clear calls-to-action to enhance user experience"
    ],
  },
  // Golf market place todo
  {
    name: 'Golf market place',
    link: 'golfmarketplace.com',
    year: 2023,
    platform: 'Sylius',
    status: 'RELEASED',
    role: 'Frontend',
    // images: ['xx', 'xx', 'xx', 'xx'],
    industry: 'eCommerce',
    techs: ['Sylius', 'Symfony', 'Stripe'],
    description: 'European platform for online golf equipment sales, featuring a unique catalog with exclusive brands',
    challenges: [
      "Overriding Sylius to create a highly customized and unique interface",
      "Ensuring the platform can handle a diverse and exclusive product catalog",
      "Implementing multi-language support for various European languages"
    ],
    solutions: [
      "Customizing Sylius extensively to meet the specific design and functionality requirements",
      "Optimizing the platform for a seamless user experience with an exclusive product catalog",
      "Integrating multi-language support to cater to a European audience"
    ],
  },
  // Inzee.Care
  {
    name: 'Inzee.Care',
    link: 'inzee.care',
    year: 2022,
    platform: 'Wordpress',
    status: 'RELEASED',
    role: 'Frontend',
    // images: ['xx', 'xx', 'xx', 'xx'],
    industry: 'Healthcare',
    techs: ['xx'],
    description: 'A platform connecting patients seeking home healthcare with independent nurses, physiotherapists, and speech therapists. The WordPress site provides comprehensive information about the Inzee Care platform, detailing services, solutions, and pricing for professionals, establishments, and patients.',
    challenges: [
      "Creating a wide range of custom Gutenberg components that align with the brand's design",
      "Ensuring the website maintains high performance and SEO standards",
      "Providing a user-friendly interface with detailed information about services and solutions",
    ],
    solutions: [
      "Developing custom JS and CSS for each component to minimize asset file sizes",
      "Achieving a high Google PageSpeed score by optimizing the site’s performance"
    ],
  },
  // OCEAMIC II
  // congres
  // Marquis Transports et Logistique
  // nTask
  // Otman Elhadeg Law-firm
]

const playground: Project[] = [
  // The Movie Vault 🏁
  {
    name: 'The Movie Vault',
    status: 'STUDY CASE',
    role: 'Design',
    images: ['xx', 'xx', 'xx', 'playground-the-movie-vault'],
    industry: 'xx',
    techs: ['xx'],
    subtitle: 'Shows and movies filter and more (study case)',
    description: '',
    challenges: [],
    solutions: [],
  },
  // Planetary facts
  {
    name: 'Planetary facts',
    link: 'planetary-facts.netlify.app',
    year: 2021,
    platform: 'Three.js',
    status: 'PLAYGROUND',
    role: 'Frontend, Design',
    images: ['42', '26', '17', '8', 'playground-planetary-facts'],
    industry: 'Interactive Learning, Astronomy',
    techs: ['JavaScript', 'Three.js', 'nPoint'],
    subtitle: 'Infos about the planets in our solar system',
    description: 'Planetary Facts is an interactive website that provides information about the planets in our solar system. The standout feature of this site is the use of Three.js to create realistic 3D models of the planets. Each planet is textured and rendered on a 3D canvas that allows users to rotate and explore the planets, offering a visually engaging and immersive learning experience',
    challenges: [
      'Integrating Three.js for realistic 3D planet rendering',
      'Balancing educational content with interactivity to keep users engaged without overwhelming them'
    ],
    solutions: [
      'Leveraged the Three.js library to create and animate the 3D models',
      'Implemented lazy loading and optimized the rendering pipeline to ensure smooth performance'
    ],
  },
  // What if
  {
    name: 'What if',
    link: 'whatif-app.vercel.app',
    year: 2024,
    platform: 'MERN stack',
    status: 'PLAYGROUND',
    role: 'Full Stack, Design',
    images: ['41', '53', '1', '2', 'playground-what-if'],
    industry: 'Innovation and Creativity',
    techs: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Vercel'],
    subtitle: 'Websites and app ideas platform',
    description: 'A playground website where people can share their ideas for websites and apps, fostering creativity and innovation. It serves as a valuable resource for developers and entrepreneurs looking for new project ideas or opportunities to improve existing platforms. ',
    challenges: [
      "Designing an intuitive UI that encourages user engagement and idea sharing",
      "Implementing real-time updates and interactions for a dynamic user experience",
      "Managing and moderating content to maintain a positive and constructive community"
    ],
    solutions: [
      "Utilizing the MERN stack to build a responsive, real-time web application",
      "Using MongoDB for flexible data storage and efficient querying of user submissions",
    ],
  },
  // Personal Notebook
  {
    name: 'Personal Notebook',
    year: 2023,
    platform: 'Vite.js/Firebase',
    status: 'PLAYGROUND',
    role: 'Full Stack',
    images: ['46', '14', '23', '5', 'playground-notes'],
    industry: 'Productivity',
    techs: ['Vite.js', 'Firebase', 'Markdown', 'CSS'],
    subtitle: 'Personal minimalistic notes taking app',
    description: 'A minimalistic notes taking application designed for personal use, featuring a clean interface with a markdown editor and preview',
    challenges: [
      "Ensuring a smooth and responsive user interface with minimal latency",
      "Managing user authentication and data storage securely in Firebase",
    ],
    solutions: [
      "Utilizing Vite.js for fast and efficient front-end development and hot module replacement",
      "Implementing Firebase Firestore for real-time database capabilities and seamless data synchronization",
      "Designing a simple and intuitive user interface with CSS, focusing on usability and minimalism",
    ],
  },
  // Top global music 🏁
  {
    name: 'Top global music',
    link: 'top-global.netlify.app',
    year: 2024,
    platform: 'Vite.js',
    status: 'PLAYGROUND',
    role: 'Frontend, Design',
    images: ['playground-top-global-music'],
    industry: 'xx',
    techs: ['xx'],
    subtitle: 'Top songs right now on spotify',
    description: '',
    challenges: [],
    solutions: [],
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
    value: projects.length + playground.length,
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

export { projects, playground, projectStats }
