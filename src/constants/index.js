import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  csharp,
  tailwind,
  netcore,
  git,
  python,
  sql,
  angular,
  blazor,
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Blazor",
    icon: blazor,
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
    name: "Design Patterns",
    description:
      "Design Patterns are written with python.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
        
      }
    ],
    image: github,
    source_code_link: "https://github.com/MuradMT/Nike_Clone",
  },
  {
    name: "Tailwind Master",
    description:
      "Includes all fundamentals of tailwind,are published by myself.",
    tags: [
      {
        name: "tailwind",
        color: "blue-text-gradient",
        
      },
      {
        name: "nextjs",
        color: "pink-text-gradient"
      },
    ],
    image: github,
    source_code_link: "https://github.com/MuradMT/TailwindMaster",
  },
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
    name: "C# Course",
    description:
      "The comprehensive course includes as well as advanced topics in c#.This course have been taught by me when i am a volunteer teacher.",
    tags: [
      {
        name: "csharp",
        color: "pink-text-gradient"
      },
    ],
    image: github,
    source_code_link: "https://github.com/MuradMT/CSharpCourse",
  },
];

export { services, technologies, experiences, projects };
