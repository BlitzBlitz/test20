import {
  //change here
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  software,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "start",
    title: "Start Today",
  },
  {
    id: "courses",
    title: "Courses",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Junior Coder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End Basics",
    company_name: "Great for starters",
    icon: mobile,
    iconBg: "#383E56",
    date: "15 Weeks",
    points: [
      "Introduction to HTML: This section will cover the basics of HTML including tags, attributes, and elements.",
      "Fundamentals of CSS: This section will introduce students to CSS and teach them how to style their HTML pages.",
      "Interactive Web Pages with JavaScript: This section will teach students how to add interactivity to their web pages using JavaScript. ",
      "Responsive Design: This section will teach students how to make their websites responsive, ensuring they work well on different devices and screen sizes. ",
      "Project-based Learning: Throughout the course, students will work on a series of projects to reinforce the concepts learned.",
    ],
  },
  {
    title: "Front End Advanced",
    company_name: "Elevating Your Front-End Skills",
    icon: web,
    iconBg: "#E6DEDD",
    date: "20 Weeks",
    points: [
      "Advanced JavaScript Concepts: This section will cover advanced JavaScript topics like closures, promises, async/await, and functional programming techniques.",
      "React Fundamentals: This section will introduce students to React, a popular front-end library for building web applications.",
      "Advanced React Concepts: This section will cover more advanced React topics like context, hooks, and Redux.",
      "Building Web Applications: This section will teach students how to build full-stack web applications using React and other front-end tools.",
      "Real-World Projects: Throughout the course, students will work on a series of projects that simulate real-world scenarios. ",
    ],
  },
  {
    title: "Back End Basics",
    company_name: "Explore the backend universe.",
    icon: software,
    iconBg: "#383E56",
    date: "15 Weeks",
    points: [
      "Introduction to Node.js: This section will cover the basics of Node.js, including the event loop, non-blocking I/O, and modules. ",
      "Database Fundamentals: This section will introduce students to databases and teach them how to work with them in a Node.js environment",
      "Building Web APIs: This section will teach students how to build web APIs using Node.js and Express, a popular Node.js framework.",
      "GIT Version Control: This section will teach students how to use GIT, a popular version control system used by developers to manage code changes. ",
    ],
  },
  {
    title: "Back End Advanced",
    company_name: "Power your apps with your knowledge",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "20 Weeks",
    points: [
      "Advanced Database Concepts: This section will cover more advanced database concepts like indexing, normalization, transactions, and scaling.",
      "Students will also learn how to work with ORMs and query builders.",
      "API Security: This section will cover best practices for securing APIs, including authentication and authorization, rate limiting, encryption, and validation.",
      "Collaburation: Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "After studing JAVA at PakaShum` I managed to get a new job as Senior HR in the tech industry. I had no previous programming experience but I managed to pass OCA Java Certification. ",
    name: "Victoria Suarez",
    designation: "Senior HR",
    company: "Alpha Omega",
    linkedin: "https://www.linkedin.com/in/victoria-suarez-stmp/",
  },
  {
    testimonial:
      "My 11-year-old son's programming skills have greatly improved since he started taking classes at PakaShum`. I am proud of his accomplishments and grateful for the opportunities provided. ",
    name: "Iraj Khaliqi",
    designation: "Senior Marketing Manager",
    company: "CloudPassage",
    linkedin: "https://www.linkedin.com/in/ikhaliqi/",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
  },
];

const projects = [
  {
    name: "Landing Page",
    description:
      "This is a landing page build by our 11-year-old student Kurosh Khaliqi, from Texas.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kuroshKhaliqi/landing-page",
    page_url: "https://kuroshkhaliqi.github.io/landing-page/",
  },
  {
    name: "Restaurant App",
    description:
      "Web application built by Rasiol Isufaj, Front End Developer form Albania.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rasiolisufaj",
    page_url: "https://blueberrysnmb.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    page_url: "https://kuroshkhaliqi.github.io/landing-page/",
  },
];

export { services, technologies, experiences, testimonials, projects };
