import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  csharp,
  tailwind,
  netcore,
  next,
  git,
  python,
  sql,
  dia,
  elfo_logo,
  github
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: ".Net Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: ".Net Core",
    icon: netcore,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Python",
    icon: python,
  },
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
    name: "Next JS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: ".Net Developer",
    company_name: "Azerbaijan Presidental Academy",
    icon: dia,
    iconBg: "#383E56",
    date: "March 2022 - May 2022",
    points: [
      "Developing House Rental management system with C#.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Elfo Srl",
    icon: elfo_logo,
    iconBg: "#E6DEDD",
    date: "February 2023 - March 2023",
    points: [
      "Developing and maintaining web applications using .Net Core and other related technologies.",
    ],
  },
];



const projects = [
  {
    name: "Auction App",
    description:
      "Fully functional auction application has been written with microservice architecture.",
    tags: [
      {
        name: ".net core web api",
        color: "blue-text-gradient",
        
      },
      {
        name: "nextjs",
        color: "pink-text-gradient"
      },
      {
        name: "microservices",
        color: "green-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/MuradMT/AuctionApp",
  },
  {
    name: "Python Roadmap",
    description:
      "Includes everything about python in order to to solve programming problems and become a competitive programmer.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/MuradMT/Python-For-Coding-Challenge",
  },
  {
    name: "React Todo App",
    description:
      "To do app has been written with react.",
    tags: [
      {
        name: "reactjs",
        color: "pink-text-gradient"
      },
    ],
    image: github,
    source_code_link: "https://github.com/MuradMT/TodoReact",
  },
  {
    name: "Blog API",
    description:
      "Blog api has been written with .net web api.",
    tags: [
      {
        name: ".net core web api",
        color: "green-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/MuradMT/Blog",
  },
  {
    name: "Riode MVC",
    description:
      "The clone of riode web site has been written with .net web mvc.",
    tags: [
      {
        name: ".net core web mvc",
        color: "blue-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/MuradMT/Riode_ProjectMVC",
  },
  {
    name: "C# Course",
    description:
      "The comprehensive course includes as well as advanced topics in c#.This course have been taught by me when i am a volunteer teacher.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
    ],
    image: github,
    source_code_link: "https://github.com/MuradMT/Riode_ProjectMVC",
  },
];

export { services, technologies, experiences, projects };
