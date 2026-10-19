import portraitTall from '../assets/Image/MySelf-1-no-bg.webp';
import portraitSquare from '../assets/Image/MySelf-2-no-bg.webp';

import rncLogo from '../assets/Logo/RNC-Logo.png';
import dctLogo from '../assets/Logo/DCT-Academy-Logo.png';
import media247Logo from '../assets/Logo/Media247-Logo.png';
import wecanLogo from '../assets/Logo/Wecan-Logo.png';
import ktuLogo from '../assets/Logo/KTU-Logo.png';
import keralaLogo from '../assets/Logo/Kerala-Board-Logo.png';

import qsports from '../assets/Portfolio/Custom-Dynamic-Website/Q-Sports.webp';
import samLuxury from '../assets/Portfolio/Custom-Dynamic-Website/Sam-Luxury-Tourism.webp';
import crunche from '../assets/Portfolio/Custom-E-Commerce/Crunchie-Cravings.webp';
import elitePaws from '../assets/Portfolio/Custom-React-Websites/123-Elite-Paws.webp';
import orangeAds from '../assets/Portfolio/Custom-React-Websites/Orange Advertising.webp';
import tridentOne from '../assets/Portfolio/Custom-React-Websites/Trident-Luxury-1.webp';
import tridentTwo from '../assets/Portfolio/Custom-React-Websites/Trident-Luxury-2.webp';
import reactReel from '../assets/Portfolio/Custom-React-Websites/Portfolio-2.mp4';
import azizi from '../assets/Portfolio/Landing-Pages/Azizi-Landing Page.webp';
import homeSecurity from '../assets/Portfolio/Landing-Pages/Home-Security-Line.webp';
import dineOne from '../assets/Portfolio/Saas-Product/Dine-OS-1.webp';
import dineTwo from '../assets/Portfolio/Saas-Product/Dine-OS-2.webp';
import biopharma from '../assets/Portfolio/Wordpress-Websites/BioPharma.webp';
import darAlAjab from '../assets/Portfolio/Wordpress-Websites/Dar-al-Ajab.webp';
import dotArts from '../assets/Portfolio/Wordpress-Websites/Dot-Arts.webp';
import elizabeth from '../assets/Portfolio/Wordpress-Websites/Elizabeth-and-Ali-Interios.webp';
import melty from '../assets/Portfolio/Wordpress-Websites/Melty.webp';
import moorfield from '../assets/Portfolio/Wordpress-Websites/Moorfield.webp';
import orla from '../assets/Portfolio/Wordpress-Websites/Orla Properties.webp';

import { CONTACT } from '../Constants/site';

export const PROFILE = {
  name: 'Mohamed Sinan',
  role: 'Full-stack web developer',
  location: CONTACT.location,
  email: CONTACT.email,
  phone: CONTACT.phone,
  phoneHref: CONTACT.phoneHref,
  whatsapp: CONTACT.whatsapp,
  portraitTall,
  portraitSquare,
  lead:
    'I build web products with React, Node.js, Express, and MongoDB. The public site, the admin screens, and the API usually ship together.',
};

export const ORGANIZATIONS = [
  { id: 'rnc', name: 'Rabbit and Carrot', logo: rncLogo },
  { id: 'dct', name: 'DCT Academy', logo: dctLogo },
  { id: 'media247', name: 'Media 247', logo: media247Logo },
  { id: 'wecan', name: 'weCAN', logo: wecanLogo },
  { id: 'ktu', name: 'KTU', logo: ktuLogo },
  { id: 'kerala', name: 'Kerala Board', logo: keralaLogo },
];

export const EXPERIENCE = [
  {
    id: 'rabbit-and-carrot',
    logo: rncLogo,
    logoAlt: 'Rabbit and Carrot',
    role: 'Full-stack web developer',
    org: 'Rabbit and Carrot LLC',
    place: 'Dubai, UAE',
    dates: 'Jul 2023 – Present',
    summary:
      'I joined as an intern and was promoted to developer within two months. The role covers the company site and client platforms.',
    points: [
      'Rebuilt the company website in React after WordPress, including search setup and tracking pixels for Meta and Google.',
      'Qsports needed separate dashboards for a super admin, a venue admin, and a member, plus live filtering, so that is what I built.',
      'Six campaign pages cover services such as 2D and 3D animation and web development. The forms pass leads into a CRM.',
      'Client pages for TAD and VPFX use a responsive layout, with forms handled through Popuform and EmailJS.',
      'Interface work on these builds uses Redux, SCSS, Swiper, and Framer Motion.',
    ],
  },
  {
    id: 'dct-academy',
    logo: dctLogo,
    logoAlt: 'DCT Academy',
    role: 'Full-stack web development intern',
    org: 'DCT Academy',
    place: 'Bangalore, India',
    dates: 'Aug 2023 – Jul 2024',
    summary:
      'Project work on the MERN stack, running across the same year as the Dubai role. React for the screens, Express and MongoDB for the data.',
    points: [
      'I wired REST endpoints and handled create, read, update, and delete against MongoDB.',
      'Source lived on Git and GitHub. I checked the APIs in Postman before they were treated as done.',
    ],
  },
];

export const EDUCATION = [
  {
    id: 'btech',
    logo: ktuLogo,
    logoAlt: 'APJ Abdul Kalam Technological University',
    program: 'Bachelor of Technology, Computer Science and Engineering',
    school: 'LBS College of Engineering',
    board: 'APJ Abdul Kalam Technological University, Kerala, India',
    dates: 'Aug 2019 – May 2023',
    note: 'GPA 7.2',
  },
  {
    id: 'higher-secondary',
    logo: keralaLogo,
    logoAlt: 'Kerala Board of Public Examinations',
    program: 'Higher Secondary, Computer Science',
    school: 'Kerala Board of Public Examinations',
    board: 'Kerala, India',
    dates: 'Jul 2017 – Apr 2019',
  },
  {
    id: 'high-school',
    logo: keralaLogo,
    logoAlt: 'Kerala Board of Public Examinations',
    program: 'High School, Computer Science',
    school: 'Kerala Board of Public Examinations',
    board: 'Kerala, India',
    dates: 'Jul 2016 – Apr 2017',
  },
];

export const SKILL_GROUPS = [
  {
    id: 'languages',
    title: 'Languages',
    text: 'JavaScript, including ES6 and later, and TypeScript.',
  },
  {
    id: 'front-end',
    title: 'Front end',
    text: 'HTML, CSS, SCSS, React, Redux, and Bootstrap. Client builds have also used Vue, Swiper, Splide, and Framer Motion.',
  },
  {
    id: 'back-end',
    title: 'Back end and data',
    text: 'Node.js, Express, MongoDB, and Mongoose. Auth on these projects has used JWT.',
  },
  {
    id: 'practice',
    title: 'How the work gets shipped',
    text: 'Git, GitHub, REST APIs, and JSON. I keep VS Code, Postman, and Balsamiq open. Payments and mail on client work have gone through Paymob, Stripe, and EmailJS.',
  },
];

export const WORK_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'dynamic', label: 'Dynamic websites' },
  { id: 'react', label: 'Custom React' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'saas', label: 'SaaS' },
  { id: 'landing', label: 'Landing pages' },
  { id: 'wordpress', label: 'WordPress' },
];

export const PROJECTS = [
  {
    id: 'qsports',
    title: 'Qsports',
    category: 'dynamic',
    wide: true,
    images: [qsports],
    summary:
      'A booking product for clubs, bars, and events, built with React, Node.js, Express, and MongoDB.',
    points: [
      'Three sign-in types: super admin, club or bar admin, and member. Each one opens a different dashboard.',
      'Venues are listed with a location search, and events are created from the admin side.',
      'Members can register, filter the listings, and book.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 'sam-luxury-tourism',
    title: 'SAM Luxury Tourism',
    category: 'dynamic',
    wide: true,
    images: [samLuxury],
    summary:
      'A tour site for Dubai and Abu Dhabi with more than 200 activities. Visitors sort the list, filter it, and pay for a booking.',
    points: [
      'Activities can be filtered by name, city, and price, and they are grouped into categories.',
      'The cart checks out with Paymob.',
      'Enquiry forms send mail through EmailJS. About and Contact are written so they can be found in search.',
    ],
    stack: ['React', 'Vue', 'SCSS', 'Swiper', 'Splide', 'Framer Motion', 'Paymob', 'EmailJS'],
  },
  {
    id: 'dine-os',
    title: 'Dine OS',
    category: 'saas',
    images: [dineOne, dineTwo],
    summary: 'A SaaS product. Both screens are from the same build.',
    stack: ['SaaS'],
  },
  {
    id: 'crunche-cravings',
    title: 'Crunchie Cravings',
    category: 'ecommerce',
    images: [crunche],
    summary: 'A custom online shop for Crunchie Cravings, built as its own storefront.',
    stack: ['E-commerce'],
  },
  {
    id: 'trident-luxury',
    title: 'Trident Luxury',
    category: 'react',
    images: [tridentOne, tridentTwo],
    summary: 'A React website for Trident Luxury. The second image is another view of the same site.',
    stack: ['React'],
  },
  {
    id: 'orange-advertising',
    title: 'Orange Advertising',
    category: 'react',
    images: [orangeAds],
    summary: 'The Orange Advertising website, built in React.',
    stack: ['React'],
  },
  {
    id: 'elite-paws',
    title: '123 Elite Paws',
    category: 'react',
    images: [elitePaws],
    video: reactReel,
    summary: 'A React site for 123 Elite Paws. The recording is a walkthrough of this same build.',
    stack: ['React'],
  },
  {
    id: 'azizi',
    title: 'Azizi',
    category: 'landing',
    images: [azizi],
    summary: 'A landing page for Azizi.',
    stack: ['Landing page'],
  },
  {
    id: 'home-security-line',
    title: 'Home Security Line',
    category: 'landing',
    images: [homeSecurity],
    summary: 'A landing page for Home Security Line.',
    stack: ['Landing page'],
  },
  {
    id: 'biopharma',
    title: 'BioPharma',
    category: 'wordpress',
    images: [biopharma],
    summary: 'BioPharma’s public site, built in WordPress.',
    stack: ['WordPress'],
  },
  {
    id: 'dar-al-ajab',
    title: 'Dar al Ajab',
    category: 'wordpress',
    images: [darAlAjab],
    summary: 'Dar al Ajab’s website, delivered on WordPress.',
    stack: ['WordPress'],
  },
  {
    id: 'dot-arts',
    title: 'Dot Arts',
    category: 'wordpress',
    images: [dotArts],
    summary: 'Dot Arts, set up as a WordPress site.',
    stack: ['WordPress'],
  },
  {
    id: 'elizabeth-ali',
    title: 'Elizabeth and Ali Interiors',
    category: 'wordpress',
    images: [elizabeth],
    summary: 'The website for Elizabeth and Ali Interiors.',
    stack: ['WordPress'],
  },
  {
    id: 'melty',
    title: 'Melty',
    category: 'wordpress',
    images: [melty],
    summary: 'Melty’s WordPress website.',
    stack: ['WordPress'],
  },
  {
    id: 'moorfield',
    title: 'Moorfield',
    category: 'wordpress',
    images: [moorfield],
    summary: 'Moorfield, built on WordPress.',
    stack: ['WordPress'],
  },
  {
    id: 'orla-properties',
    title: 'Orla Properties',
    category: 'wordpress',
    images: [orla],
    summary: 'Orla Properties, a WordPress site.',
    stack: ['WordPress'],
  },
];

export const FEATURED_IDS = [
  'dine-os',
  'crunche-cravings',
  'elite-paws',
  'home-security-line',
  'dot-arts',
  'elizabeth-ali',
];

export const FEATURED_PROJECTS = FEATURED_IDS.map((id) =>
  PROJECTS.find((project) => project.id === id),
).filter(Boolean);

export const SEE_ALL_IMAGE = orangeAds;

export function categoryLabel(id) {
  return WORK_CATEGORIES.find((item) => item.id === id)?.label ?? id;
}
