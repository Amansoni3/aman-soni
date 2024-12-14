import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";


import { RiJavascriptFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "AMAN SONI",
  greet: "Hello there! 👋🏻",
  description:
    "Proficient in crafting responsive web applications using HTML, CSS, JavaScript, React.js, and Next.js. Skilled in testing, debugging, and API integration for smooth frontend-backend interaction. Strong problem-solving capabilities and dedicated to continuous skill enhancement. Successfully collaborated on projects with managing directors and clients. Seeking to apply expertise within a dynamic team.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/Amansoni3/aman-soni",
    liveLink: ""
  },
  {
    id: 2,
    name: "Blog Application",
    description: "This project is a dynamic and user-friendly blog platform built with React.js, Redux Toolkit, Firebase, and ReactQuill. It enables users to securely sign up, log in, and manage their blog posts through Firebase Authentication. With full CRUD functionality, users can create, edit, view, and delete blog posts featuring a rich text editor for formatting content and cover image support. Redux Toolkit is utilized for centralized state management, ensuring the application is scalable and responsive. Styled with Tailwind CSS, the platform delivers a seamless experience across various devices, showcasing expertise in modern web development and state management practices.",
    image: projectImage5,
    github: "https://github.com/Amansoni3/blog",
    liveLink: "https://aman-soni.vercel.app/"
  },
  {
    id: 3,
    name: "Food Ordering App",
    description:
      "A food ordering app leveraging real-time restaurant data via the live Swiggy API, enabling users to search for their favorite restaurants and dishes with a robust search functionality. The app features a dynamic Add to Cart option powered by Redux Toolkit for state management, ensuring seamless user interaction. Comprehensive testing is implemented using the Jest testing library to guarantee reliability and performance.",
    image: projectImage2,
    githubLink: "https://github.com/Amansoni3/swiggyapp/tree/redux",
    liveLink: ""
  },
  {
    id: 4,
    name: "Movix App",
    description:
      "This project delivers accurate, up-to-date information about movies and TV shows using The Movie Database (TMDB) API, known for its reliability and fast response. Built with React.js, it features a user-friendly, responsive design compatible with all devices. Axios handles efficient data fetching via GET requests, and React-Redux Toolkit ensures seamless state management and performance.",
    image: projectImage3,
    githubLink: "https://github.com/Amansoni3/movieapp",
    liveLink: "https://movieapp-dusky.vercel.app/"
  },
  {
    id: 5,
    name: "100 Days Challenge In JavaScript",
    description:
      "I successfully completed a 100 Days Challenge in JavaScript, solving one coding question each day. This consistent practice allowed me to strengthen my problem-solving skills, deepen my understanding of JavaScript concepts, and build a disciplined approach to coding. The challenge not only enhanced my technical expertise but also fostered a habit of continuous learning and improvement.",
    image: projectImage4,
    githubLink: "https://github.com/Amansoni3/100DaysChallengeInJavaScript",
    liveLink: ""
  },
  // {
  //   id: 5,
  //   name: "Blog Platform",
  //   description:
  //     "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
  //   image: projectImage5,
  //   githubLink: "https://github.com/user/blog-platform",
  // },
  // {
  //   id: 6,
  //   name: "100 Days Challenge In JavaScript",
  //   description:
  //     "I successfully completed a 100 Days Challenge in JavaScript, solving one coding question each day. This consistent practice allowed me to strengthen my problem-solving skills, deepen my understanding of JavaScript concepts, and build a disciplined approach to coding. The challenge not only enhanced my technical expertise but also fostered a habit of continuous learning and improvement.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/Amansoni3/100DaysChallengeInJavaScript",
  // },
];

export const BIO = [
  "Aman Soni, a dedicated and dynamic frontend developer, holds a Bachelor of Technology in Computer Science Engineering from the ITM Group of Institutions, graduating in 2023 with a CGPA of 7.44. His journey into the world of technology began with a passion for building user-centric web applications.",

  "Aman’s professional career started with an internship at Numeric Infosystem Pvt. Ltd., where he worked as a Frontend Developer Intern from December 2022 to May 2023. Following this, he was promoted to a full-time Frontend Developer role from June 2023 to November 2023, where he further honed his skills in creating high-performance, reusable UI components and implementing efficient API integrations.",

  "He later joined Escale Solutions in December 2023 as a Software Developer Engineer, where he contributed for 8 months, working closely with clients and cross-functional teams to deliver impactful projects. His notable work includes TalenCred, Shubham.co, and CSRL, showcasing his expertise in React.js, Next.js, and state management tools like Redux and Redux Toolkit. Aman also implemented performance optimization techniques such as lazy loading and SEO enhancements, ensuring visually appealing and efficient designs.",

  "Aman’s technical arsenal extends to responsive UI design with tools like Tailwind CSS and Material-UI, as well as testing expertise, including manual, unit, and integration testing. His ability to combine performance optimization with creativity ensures that every project is both functional and memorable.",

  "In addition to his professional pursuits, Aman remains committed to continuous learning and exploring the latest advancements in web technologies, always striving to innovate and deliver exceptional user experiences."
];



export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1.8 years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "0.8 years",
  },
  {
    icon: <SiRedux className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Redux",
    experience: "1 years",
  },
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-600 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1.8 year",
  },
  {
    icon: <FaHtml5 className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Html",
    experience: "2+ years",
  },
  {
    icon: <FaCss3Alt className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Css",
    experience: "1.8 year",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Tailwind Css",
    experience: "1.8 year",
  }
];

export const EXPERIENCES = [
  {
    title: "React Developer",
    company: "Escale Solutions",
    duration: "December 2023 - July 2024",
    description:
      "Contributed to the development of responsive web applications using React.js and Next.js. Worked closely with clients and cross-functional teams to deliver projects like TalenCred, Shubham.co, and CSRL. Key responsibilities included implementing performance optimization techniques like lazy loading, managing state with Redux Toolkit, integrating APIs, and ensuring SEO compliance.",
  },
  {
    title: "Frontend Developer",
    company: "Numeric Infosystem Pvt. Ltd.",
    duration: "June 2023 - November 2023",
    description:
      "Worked as a full-time Frontend Developer, taking ownership of key modules for dynamic web applications. Designed and developed scalable, responsive web UIs using React.js, optimized performance, and ensured code quality. Collaborated with team members for API integration and implemented efficient state management using Redux.",
  },
  {
    title: "Frontend Developer Intern",
    company: "Numeric Infosystem Pvt. Ltd.",
    duration: "December 2022 - May 2023",
    description:
      "Started as an intern to build a strong foundation in frontend development. Developed reusable UI components with React.js, collaborated with the team to enhance application performance, and resolved bugs. Gained experience in state management with Redux and improving user experience through seamless API integration.",
  },
];



export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "ITM Group of Institutions",
    duration: "2019 - 2023",
    description:
      "Developed a strong foundation in computer science and software engineering principles. Focused on web development, frontend technologies, and state management. Graduated with a CGPA of 7.44.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Gwalior Public School (MP Board)",
    duration: "2017 - 2019",
    description:
      "Studied science with a focus on mathematics and computer science, laying the groundwork for a career in technology.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Pragati Vidya Peeth (CBSE Board)",
    duration: "2016 - 2017",
    description:
      "Completed foundational education with an emphasis on academics and extracurricular activities, developing key analytical and problem-solving skills.",
  },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/Amansoni3",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/reactamansoni/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
