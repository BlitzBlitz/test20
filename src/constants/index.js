import {
  //change here
  mobile,
  backend,
  creator,
  web,
  
  software,
  carrent,
  jobit,
  tripguide,
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
    title: "Junior Coder",
    icon: creator,
  },
  {
    title: "Front End Basics",
    icon: mobile,
  },
  {
    title: "Front End Advanced",
    icon: web,
  },
  {
    title: "Back End Basics",
    icon: software,
  },
];


const experiences = [
  {
    title: "Junior Coder",
    company_name: "Designed for the youth",
    icon: creator,
    iconBg: "#383E56",
    date: "20 Weeks",
    points: [
      "Interactive learning: Use hands-on activities & coding projects to develop coding skills and problem-solving abilities.",
      "Project-based approach: Focus on relevant, practical projects to allow learners to apply HTML, CSS, and JavaScript concepts.",
      "Collaborative work: Encourage teamwork and communication skills by having learners work in pairs or small groups.",
    ],
    price: 899,
  },
  {
    title: "Front End Basics",
    company_name: "Great for starters",
    icon: mobile,
    iconBg: "#383E56",
    date: "15 Weeks",
    points: [
      "Introduction to HTML and CSS: This course will cover all you need to know about HTML and CSS",
      "Interactive Web Pages with JavaScript: This course will teach students how to add interactivity to their web pages using JavaScript. ",
      "Responsive Design: This course will teach students how to make their websites responsive, ensuring they work well on different devices and screen sizes. ",
    ],
    price: 999,
  },
  {
    title: "Front End Advanced",
    company_name: "Elevating Your Front-End Skills",
    icon: web,
    iconBg: "#E6DEDD",
    date: "20 Weeks",
    points: [
      "Advanced JavaScript Concepts: This course will cover advanced JavaScript topics like closures, promises, async/await, and functional programming techniques.",
      "React Fundamentals: This course will introduce students to React, a popular front-end library for building web applications.",
      "Advanced React Concepts: This course will cover more advanced React topics like context, hooks, and Redux.",
      "Building Web Applications: This course will teach students how to build full-stack web applications using React and other front-end tools.",
    ],
    price: 1199,
  },
  {
    title: "Back End Basics",
    company_name: "Explore the backend universe.",
    icon: software,
    iconBg: "#383E56",
    date: "15 Weeks",
    points: [
      "Introduction to Node.js: This course will cover the basics of Node.js, including the event loop, non-blocking I/O, and modules. ",
      "Database Fundamentals: This course will introduce students to databases and teach them how to work with them in a Node.js environment",
      "Building Web APIs: This course will teach students how to build web APIs using Node.js and Express, a popular Node.js framework.",
      "GIT Version Control: This course will teach students how to use GIT, a popular version control system used by developers to manage code changes. ",
    ],
    price: 999,
  },
  {
    title: "Back End Advanced",
    company_name: "Power your apps with your knowledge",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "20 Weeks",
    points: [
      "Advanced Database Concepts: This course will cover more advanced database concepts like indexing, normalization, transactions, and scaling.",
      "Students will also learn how to work with ORMs and query builders.",
      "API Security: This course will cover best practices for securing APIs, including authentication and authorization, rate limiting, encryption, and validation.",
      "Collaburation: Participating in code reviews and providing constructive feedback to other developers.",
    ],
    price: 1199,
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
const registerSteps = [
  {
    title: "Book",
    desc: "Book a meeting with one of our teachers to get an overview of Pakashum",
  },
  {
    title: "Schedule",
    desc: "Schedule two free demo classes to experience PakaShum` learning style",
  },

  {
    title: "Join",
    desc: "  Join one of our courses and enhance your coding skills to the next level",
  },
];
const joinReasons = [
  {
    title: "Speed UP",
    desc: "Speed up your learning with the support of our tutors",
  },
  {
    title: "Collaburate",
    desc: "Collaburate with other students to build your portfolio",
  },

  {
    title: "Get Support",
    desc: "Be job-ready and have lifetime career counseling",
  },
];
const upworkTestemonials = [
  {
    title: "Full stack development tutor needed",
    review: "5.00",
    period: "Jan 21, 2023 - Mar 25, 2023",
    desc: "Klement is one of the best instructors I have ever had. He knows his stuff and communicates with his students well. His project based way of teaching is very effective as it makes one learn quicker. I was able to go from zero to fluent in HTML and CSS in a week of training. I would highly recommend any aspiring full stack student to give him a try.",
    totalPrice: "860.00",
    pricePerHour: "20.00",
    totalHours: "43",
  },
  {
    title: "Java Leetcode help",
    review: "5.00",
    period: "Dec 30, 2022 - Apr 22, 2023",
    desc: "A great teach who explains things very well, best freelancer I have worked with one learning coding material.",
    totalPrice: "156.00",
    pricePerHour: "12.00",
    totalHours: "13",
  },
  {
    title: "Java - guidance",
    review: "5.00",
    period: "Jul 31, 2021 - Sep 8, 2021 ",
    desc: "Second time to cooperate with Klement. Job well done, again. Thx!",
    totalPrice: "155.00",
    pricePerHour: "15.00",
    totalHours: "10",
  },
];
const courses = [
  {
    title: "Junior Coder",
    company_name: "Designed for the youth",
    icon: creator,
    date: "20 Weeks",
    learning: [
      "Build multiple high quality website & UI projects",
      "HTML5 semantic layout & CSS fundamentals.",
      "Website Hosting & Deployment With FTP & Git",
      "CSS variables, transitions, dropdowns, overlays & more",
      "Flexbox & CSS grid projects",
      "Learn Sass, including variables, nesting, mixins and more",
    ],
    next: "Build 10 games in 10 sessions with PakaShum`",
    price: 899.99,
  },
  {
    title: "Junior Coder",
    company_name: "Designed for the youth",
    icon: creator,
    date: "20 Weeks",
    learning: [
      "Build multiple high quality website & UI projects",
      "HTML5 semantic layout & CSS fundamentals.",
      "Website Hosting & Deployment With FTP & Git",
      "CSS variables, transitions, dropdowns, overlays & more",
      "Flexbox & CSS grid projects",
      "Learn Sass, including variables, nesting, mixins and more",
    ],
    next: "Build 10 games in 10 sessions with PakaShum`",
    price: 899.99,
  },
  {
    title: "Junior Coder",
    company_name: "Designed for the youth",
    icon: creator,
    date: "20 Weeks",
    learning: [
      "Build multiple high quality website & UI projects",
      "HTML5 semantic layout & CSS fundamentals.",
      "Website Hosting & Deployment With FTP & Git",
      "CSS variables, transitions, dropdowns, overlays & more",
      "Flexbox & CSS grid projects",
      "Learn Sass, including variables, nesting, mixins and more",
    ],
    next: "Build 10 games in 10 sessions with PakaShum`",
    price: 899.99,
  },
  {
    title: "Junior Coder",
    company_name: "Designed for the youth",
    icon: creator,
    date: "20 Weeks",
    learning: [
      "Build multiple high quality website & UI projects",
      "HTML5 semantic layout & CSS fundamentals.",
      "Website Hosting & Deployment With FTP & Git",
      "CSS variables, transitions, dropdowns, overlays & more",
      "Flexbox & CSS grid projects",
      "Learn Sass, including variables, nesting, mixins and more",
    ],
    next: "Build 10 games in 10 sessions with PakaShum`",
    price: 899.99,
  },
  {
    title: "Junior Coder",
    company_name: "Designed for the youth",
    icon: creator,
    date: "20 Weeks",
    learning: [
      "Build multiple high quality website & UI projects",
      "HTML5 semantic layout & CSS fundamentals.",
      "Website Hosting & Deployment With FTP & Git",
      "CSS variables, transitions, dropdowns, overlays & more",
      "Flexbox & CSS grid projects",
      "Learn Sass, including variables, nesting, mixins and more",
    ],
    next: "Build 10 games in 10 sessions with PakaShum`",
    price: 899.99,
  },
];
export {
  services,
  experiences,
  testimonials,
  projects,
  registerSteps,
  joinReasons,
  upworkTestemonials,
  courses,
};
