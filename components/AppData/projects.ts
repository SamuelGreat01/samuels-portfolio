const PROJECTS_DATA = [
  {
    title: 'DesignFlow',
    description: 'Streamline your design workflow with intelligent automation',
    about:
      'DesignFlow is a comprehensive design management platform that helps creative teams collaborate, iterate, and deliver exceptional design work. Built with modern web technologies, it provides real-time collaboration, version control, and automated design system generation.',
    link: 'https://designflow.app',
    imageUrl: '/img/pics (1).webp',
    type: ['project', 'open-source', 'tools'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
  {
    title: 'Brave Labs',
    description: 'Product Design',
    link: '#',
    imageUrl: '/img/pics (2).webp',
    type: ['project', 'tools'],
    technologies: ['Figma', 'User research', 'Canva'],
  },
  {
    title: 'Collabix',
    description: 'Manage your team and projects',
    about:
      'Collab Flow is a platform that allows you to create and manage your own flow.',
    link: '#',
    imageUrl: '/img/pics (3).webp',
    type: ['project', 'open-source'],
    technologies: ['Figma', 'User research', 'Canva'],
  },
  {
    title: 'Get Talky ',
    description: 'Effortless scheduling for healthcare ',
    about:
      'Get Talky is a platform that allows you to schedule your appointments with your healthcare provider.',
    link: 'https://taskmaster.app',
    imageUrl: '/img/pics (4).webp',
    type: ['project', 'tools'],
    technologies: ['Figma', 'User research', 'Canva'],
  },
  {
    title: 'CodeCraft',
    description: 'AI-powered image generation and optimization platform',
   link: 'https://codecraft.dev',
   imageUrl: '/img/pics (5).webp',
    type: ['project', 'open-source', 'tools'],
    technologies: ['Figma', 'User research', 'Canva'],
  },
  {
    title: 'Clear Vision Clinic',
    description: 'Eye care and vision correction services',
    about:
      'Clear Vision Clinic is a clinic that provides eye care and vision correction services.',
    link: 'https://ecotrack.green',
    imageUrl: '/img/pics (6).webp',
    type: ['project', 'others'],
    technologies: ['Figma', 'User research', 'Canva'],
  },
  {
    title: 'Piggment',
    description: 'The Gradients and colors for the next smart creator',
    about:
      'Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place.',
    link: 'https://piggment.co',
    imageUrl: 'https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif',
   
    type: ['project', 'open-source', 'tools'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
  {
    title: 'Scoutbar',
    about: 'Spotlight experience for your App',
    description:
      'Navigation tool that significantly increases efficiency by reducing the number of clicks it takes you to navigate the web.',
    link: 'https://scoutbar.co',
 
    imageUrl: 'https://i.ibb.co/txPxtCP/Frame-21-1.png',
    type: ['project', 'open-source', 'tools'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
  {
    title: 'Shoprrr',
    description: 'An E-commerce Application For Buying Cotton Products.',
    about:
      'Shoprrr is an e-commerce platform catered towards giving the best and fast experience for customers to buy cotton products, we call it a frictionless process from start to finish.',
    link: 'https://shoprrr.netlify.com',
    imageUrl: 'https://i.ibb.co/T0XwFsQ/Screen-Recording-2020-05-06-at-3.gif',
    type: ['project'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
 
  {
    title: '54gene',
    description: 'Discover Yourself Through Your Genes.',
    about:
      'Africans house the most genetically diverse DNA in comparison to all other world populations combined. In gathering insights from the African genome, we could power medical breakthroughs and discoveries that will change the entire landscape of healthcare, globally. We fully recognize the tremendous potential that this presents. Presently, most genomic data used for development research is from Europe, the United Kingdom, and North America with African genomic data only accounting for less than 3%. This is where we come in. We exist to close this gap by increasing access to highly curated genomic data from African populations.',
    link: 'https://54gene.com',
    imageUrl:
      'https://i.ibb.co/6gZckMz/Screenshot-2020-05-04-at-4-34-31-AM.png',
    type: ['others', 'project'],
    technologies: ['Figma', 'Javascript', 'User research', 'Canva'],
  },
  {
    title: 'Piggment Chrome Extension',
   description: 'The gradient you have always wanted in a new tab',
    about:
      'Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, and save, easy CSS cross-browser gradient codes all in a new tab.',
    link:
      'https://chrome.google.com/webstore/detail/piggment-crafted-to-inspi/eifkhhlfjplpakoddkndkgjhfajnhffg',
    imageUrl: 'https://i.ibb.co/Pxm6yzy/Screenshot-2020-07-28-at-02-48-43.png',
    type: ['project', 'open-source', 'tools'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
  {
    title: 'Magic',
    description: 'Delightful auth for Web3 onboarding',
    about:      "Onboard users new to crypto with just an email, phone number, or social login. One SDK for auth, wallet creation, and key management.",
    link:
      'https://magic.link',
    imageUrl: 'https://i.ibb.co/1Q3331D/Screenshot-2023-08-02-at-8-21-59-PM.png',
     type: ['others', 'project'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
  {
    title: 'Fast',
    description: 'The fastest way to buy the things you love.',
    about:
      "One click. No passwords. The world's fastest checkout. Forget passwords. Skip long entry forms. Shop online and securely check out with a single click. It's safe, easy, and yep, fast.",
    link: 'https://fastasf.netlify.app/',
    imageUrl: 'https://i.ibb.co/KsnZhLP/Screenshot-2020-06-11-at-15-10-06.png',
    type: ['others', 'project'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },

  {
    title: 'Zeedas',
    description: 'Engineering Team On Steroid.',
    about:
      'Zeedas is an advanced product management tool that allows you to manage and track the speed and accuracy of developers from anywhere in the world to meet your software needs.',
    link: 'https://zeedas.com',
    imageUrl:
      'https://i.ibb.co/bXTCNhY/Screen-Shot-2019-11-23-at-2-15-47-PM.png',
    type: ['others', 'project'],
    technologies: ['Figma', 'Javascript', 'User research', 'Canva'],
  },
  {
    title: 'Nester Verify',
    description:
      'An online web application for address and guarantor verification',
    about:
      'Nester Verify independently verifies the address a customer provides by matching two alternate addresses found in our consumer database. The matched addresses come from sources independent of the customer in question, and can be applied as per a specified date.',
    link: 'https://nesterverify.com',
    imageUrl:
      'https://i.ibb.co/5K2pY54/Screen-Shot-2019-11-23-at-2-16-30-PM.png',
    type: ['project'],
    technologies: ['Figma', 'Javascript', 'User research', 'Canva'],
  },
  {
    title: 'Clinified',
    description: 'Accessing healthcare will never be the same again',
    about:
      'Clinified is your personal assistant working for you 24/7. Better manage your practice and build your online reputation. With our integrated end-to-end solution, you are able to improve your online presence and devote time to what really matters: your patients. Today, the entire healthcare system in Africa is fundamentally broken, complicated, and frustrating. Clinified wants to change this by transforming how you access and experience healthcare, with a focus on high quality and improved outcomes.',
    link: 'https://clinified.com/',
    imageUrl:
      'https://i.ibb.co/ZhmzLdv/Screenshot-2020-05-04-at-4-26-10-AM.png',
    type: ['project'],
    technologies: ['Figma', 'Javascript', 'User research', 'Canva'],
  },
  {
    title: 'Bloverse',
    description:
      'A content creation platform fostering a global community of engaged and insightful individuals.',
    link: 'https://www.crunchbase.com/organization/bloverse/signals_and_news',
    about:
      'Bloverse is a content creation platform fostering a global community of engaged and insightful individuals. A global community of engaged and insightful individuals revolutionizing the creation and consumption of content ',
    imageUrl:
      'https://i.ibb.co/s5ppyjx/Screen-Shot-2019-11-23-at-2-17-57-PM.png',
    type: ['others'],
    technologies: ['Figma', 'Javascript', 'User research', 'Canva'],
  },
  {
    title: 'Opus Insights',
    description:
      'A forecasting platform for farmers  that bring intelligent insights to agricultural supply chains.',
    about:
      'Opus Insights is a forecasting platform for farmers that bring intelligent insights to agricultural supply chains, and automated alerts on weather changing. AI-powered and smart map.',
    link: 'https://opusinsight.netlify.app',
  imageUrl: 'https://i.ibb.co/zFT3HQR/Screen-Recording-2020-05-06-at-1.gif',
    type: ['others', 'project'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },

  {
    title: 'SCITY.CO',
    description: 'SCITY.CO is a platform that allows you to create and manage your fashion business.',
    about:
      'SCITY.CO is an ecommerce platform that allows you to create and manage your fashion business. ',
    link: 'https://www.figma.com/design/6AEtxiEJ9jGdRR0XIp4kPH/SCITY.CO?node-id=97-2438&p=f',
    imageUrl:
      '/img/shops.png',
    type: [ 'project'],
    technologies: ['Figma', 'User research', 'Canva'],
  },

  {
    title: 'Weather Cards',
    description: 'Weather Cards is a design project that showcases a collection of weather cards in different styles and layouts.',
   link: 'https://www.figma.com/design/YgTc8F6CJEe3Edpt2vH6dS/weather-cards?node-id=0-1&p=f',
    imageUrl:
      '/img/weathers.png',
    type: ['project'],
    technologies: ['Figma', 'User research', 'Canva'],
  },
  
  {
    title: 'Freespace',
    description: '100% Anonymously tell the world your mind.',
    about:
      'Freespace can be utilized as your own safe place where you can freely un-conceal your thoughts and emotions without any apprehensions. Freespace requires no log-in, your IP address is not tracked and we do not leave any cache files on your browser or SERVER.  This is to assure our users that we give utmost importance to their privacy and anonymity.  Keeping this in mind, we have also ensured that no comment section is available for the posts.  This is to further protect the writer of the post and to ensure no negative interactions or cyberbullying takes place.  We are hopeful that this will further encourage our users to share openly and to read stories of others, who are just like them or might be different but can still connect and learn at a certain level.',
    link: 'https://freespaace.com',
    imageUrl: 'https://i.ibb.co/Q9fYs4c/ezgif-2-0b55cd56fe.gif',
    type: ['others', 'project'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
  {
    title: 'Rating Cards',
    description: 'Rating Cards showcases a collection of rating cards.',
    about:
      'Rating Cards is a design project that showcases a collection of rating cards in different styles and layouts.',
    link: 'https://www.figma.com/design/O4ksJ76VfCxK72rqdJHL0i/rating-modal?node-id=2-192&p=f',
    imageUrl:
      '/img/ratings.png',
    type: ['others', 'project'],
    technologies: ['Figma', 'User research', 'Canva'],
  },
  {
    title: 'Paw Hub',
    description: 'Because Every Paw deserves a home.',
    link: 'https://www.figma.com/design/zuV1vbBTBQsFljouqrPBKl/pet-adoption-landing-page?node-id=0-1&p=f',
   about:
      'Because Every Paw deserves a home Paw Hub is a platform that allows you to find and adopt a pet.',
    imageUrl: '/img/pets.png',
    type: ['open-source', 'tools'],
    technologies: ['Figma', 'User research', 'Canva'],
  },
  {
    title: 'Golden Earth Trash Hauling',
    description: 'Transform waste materials into functional products.',
    about:
      'Golden Earth Trash Hauling is a company that transforms waste materials into functional products.',
    link: 'https://www.figma.com/design/sSJVVaOF8yFBal6bBHd4IF/trash-services-landing-page?node-id=0-1&p=f',
    imageUrl: '/img/trash.png',
    type: ['others', 'project'],
    technologies: ['Figma', 'User research', 'Canva'],
  },

  {
    title: 'Nex AI',
    description:
      'The new way to tell stories',
    about:
      "NEX builds new tools for digital media creation. We're on a mission to augment human storytelling-- try our newest AI tools now!",
    link: 'https://nex.art',
    imageUrl:
      'https://i.ibb.co/GtLWcwC/Screenshot-2024-01-16-at-7-55-21-PM.png',
    type: ['others', 'project'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },

  {
    title: 'Bellza',
    description:
      'Discover & access to on-demand Information leisure and utility over the world from your chrome.',
    about:
      'Bellza, a chrome extension, will open up an era of high customization for the new tab pages of your Chrome and Firefox. Common websites can be added to Speed Dial in one step and displayed with icons; the customizable search engines, select HD wallpapers and widgets like Weather, Notes, Bookmarks, To-do List, History, Gmail Notifier, etc. can increase your productivity.',
    link: 'https://chrome.google.com/webstore/detail/bellza-always-informed/fhnmdmmmdclgjnjlbodahlcmabjnngde',
    imageUrl: 'https://i.ibb.co/W6859mc/ezgif-com-optimize.gif',
    type: ['tools'],
    technologies: ['Figma', 'Javascript', 'User research', 'Canva'],
  },
  {
    title: 'Urley',
    description: 'A cross-platform utility library to work with URLs',
    link: 'https://urley.netlify.com',
    about:
      'Urley, A cross-platform utility library to work with URLs. Urely has a collection of handy helpers to use when working with URLs, with just a few imports you are set.',
    imageUrl: 'https://i.ibb.co/FDh7T07/image.png',
    type: ['open-source', 'tools'],
    technologies: ['Figma', 'Javascript', 'User research', 'Canva'],
  },

  {
    title: 'DrugStoc',
    description: 'Empowering Pharmacies Toward a Healthier Africa.',
    link:
      'https://techcrunch.com/2021/11/14/nigerian-e-health-pharmaceutical-distribution-startup-drugstoc-secures-4-4-million-series-a-funding-embarks-on-expansion-drive/',
    about:
      'Drugstoc makes use of unmatched technology, supply chain innovation, financial solutions, and product knowledge to unlock access to medications in emerging Economies.',
    imageUrl:
      'https://i.ibb.co/mC4z0c4/Screenshot-2021-11-30-at-3-12-33-AM.png',
    type: ['project', 'others'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
  
  

  {
    title: 'Developp by Tunga',
    description: 'Test engineers on their skills and competence.',
    link: 'https://testing.tunga.io',
    about: 'Test Engineers on their skills and competence.',
    imageUrl:
      'https://i.ibb.co/PQXmbwK/Screenshot-2021-11-30-at-3-22-24-AM.png',
    type: ['project', 'others'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },

  
  {
    title: 'Unit Css',
    description: '💪 A CLI tool to convert units in your CSS file',
    about:
      'Unitcss A CLI tool to convert CSS units in your file helps you swiftly convert units/measurements in your file or folders. Using unitcss on files provides an easy way of changing measurement from px to rem or rem to px or even px to em with only a few commands in your terminal.',
    link: 'https://www.npmjs.com/package/unitcss',
   imageUrl: 'https://i.ibb.co/X2f8nWf/unitcsss.png',
    type: ['open-source', 'tools'],
    technologies: ['Figma', 'Javascript', 'User research', 'Canva'],
  },
  {
    title: 'Helix',
    description:
      '🌄 A minimal monochrome theme for Vscode ~ 🎑 A light notion like theme for VScode.',
    about:
      'A Visual Studio Code theme for the notion and silent cool theme lovers out there. Fine-tuned for those of us who like to have the article creation feel. ✨The light theme of this color theme was inspired by notion and the dark theme was inspired by Sarah Drasner. cool right ?',
    link:
      'https://marketplace.visualstudio.com/items?itemName=codewonders.helix&ssr=false',
    imageUrl:
      'https://i.ibb.co/kxKY97y/Screen-Shot-2019-11-24-at-9-00-13-PM.png',
    type: ['open-source', 'tools'],
    technologies: ['Figma', 'User research', 'Canva', 'Blender'],
  },
 
  {
    title: 'Overstateful',
    description:
      'A small state management with less setup and super scalability in your react app.',
    about:
      'A small state management with less setup and super scalability in your react app. with over-stateful, all you need is this, less documentation required to get you going',
    link: 'https://www.npmjs.com/package/over-stateful',
   imageUrl:
      'https://i.ibb.co/YT6fXLB/Screenshot-2020-05-04-at-4-41-05-AM.png',
    type: ['open-source', 'tools'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
  {
    title: 'Broadstate',
    about:
      'Have you ever tried to move the value of a state from a child to the parent without using large state management tools like Redux, Mobx e.t.c? Broadstate is an easy state manager for state values from one component to the other with useState and React Hooks in < 1KB!',
    description:
      'Easy state manager for state values from one component to the other with useState and React Hooks in < 1KB!',
    link: 'https://www.npmjs.com/package/broad-state',
  imageUrl: 'https://i.ibb.co/GVdt9Jq/Dribbble-Shot-HD-3broad.png',
    type: ['open-source', 'tools'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
  {
    title: 'Aim Scroll',
    about:
      'Have you ever tried to add a feature to an element when the user scrolls to a certain extent ? or even tried the popular scroll aesthetic of adding a box-shadow to your navbar when the user scrolls up? Aimscroll is a painless utility library to handle scroll positions and methods in React.',
    description:
      'Painless utility library to handle scroll positions and methods in react.',
    link: 'https://www.npmjs.com/package/aimscroll',
   imageUrl: 'https://i.ibb.co/1X27zFt/Group-6.png',
    type: ['open-source', 'tools'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
  {
    title: 'Use Responsive Query',
    about:
      ' An extremely powerful but easy-to-use hook for listening to media events in React. URQ creates an experience of a javascript-like reactive accommodation for your react application.',
    description:
      'An extremely powerful but easy to use hook for listening to media events in react.',
    link: 'https://www.npmjs.com/package/use-responsive-query',
   imageUrl: 'https://i.ibb.co/CPK4YzL/Group-38dd.png',
    type: ['open-source', 'tools'],
    technologies: ['Figma', 'Javascript', 'React', 'User research'],
  },
];

export default PROJECTS_DATA;
