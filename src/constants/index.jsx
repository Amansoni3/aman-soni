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
    liveLink : ""
  },
  {
    id: 2,
    name: "Food Ordering App",
    description:
      "A food ordering app leveraging real-time restaurant data via the live Swiggy API, enabling users to search for their favorite restaurants and dishes with a robust search functionality. The app features a dynamic Add to Cart option powered by Redux Toolkit for state management, ensuring seamless user interaction. Comprehensive testing is implemented using the Jest testing library to guarantee reliability and performance.",
    image: projectImage2,
    githubLink: "https://github.com/Amansoni3/swiggyapp/tree/redux",
    liveLink : ""
  },
  {
    id: 3,
    name: "Movix App",
    description:
      "This project delivers accurate, up-to-date information about movies and TV shows using The Movie Database (TMDB) API, known for its reliability and fast response. Built with React.js, it features a user-friendly, responsive design compatible with all devices. Axios handles efficient data fetching via GET requests, and React-Redux Toolkit ensures seamless state management and performance.",
    image: projectImage3,
    githubLink: "https://github.com/Amansoni3/movieapp",
    liveLink : ""
  },
  {
    id: 4,
    name: "100 Days Challenge In JavaScript",
    description:
      "I successfully completed a 100 Days Challenge in JavaScript, solving one coding question each day. This consistent practice allowed me to strengthen my problem-solving skills, deepen my understanding of JavaScript concepts, and build a disciplined approach to coding. The challenge not only enhanced my technical expertise but also fostered a habit of continuous learning and improvement.",
    image: projectImage4,
    githubLink: "https://github.com/Amansoni3/100DaysChallengeInJavaScript",
    liveLink : ""
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
  "Aman Soni discovered his passion for technology early on, which led him to pursue a Bachelor of Technology in Computer Science Engineering from the ITM Group of Institutions, graduating in 2023. During his academic journey, he began building his expertise in frontend development and crafting user-centric web applications.",
  
  "Following his graduation, Aman embarked on his professional journey with a 1-year internship at Numeric Infosystem Pvt. Ltd., where he refined his skills in React.js and reusable component development. He then contributed as a React Developer at Escale Solutions for 8 months, where he collaborated with clients and cross-functional teams on impactful projects.",
  
  "By 2024, Aman had already established himself as a versatile frontend developer, proficient in React.js, Next.js, and state management tools like Redux Toolkit. His projects, such as TalenCred, Shubham.co, and CSRL, showcased his ability to merge performance optimization techniques like lazy loading with visually engaging and SEO-optimized designs.",
  
  "Driven by his commitment to delivering exceptional user experiences, Aman brings a multi-disciplinary approach to his work. From developing dynamic UIs using Tailwind CSS and Material-UI to conducting meticulous manual, unit, and integration testing, Aman ensures every project is polished and impactful.",
  
  "Outside of his professional endeavors, Aman continues to explore the latest in web technologies, combining innovation with creativity to craft unforgettable digital experiences."
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
    title: "React Developer Intern",
    company: "Numeric Infosystem Pvt. Ltd.",
    duration: "December 2022 - November 2023",
    description:
      "Gained hands-on experience in building user-friendly UIs using React.js. Developed reusable components, managed state with Redux, and resolved bugs to improve application performance. Collaborated with the team to deliver high-quality projects and ensure seamless frontend-backend communication.",
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
