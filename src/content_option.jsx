import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiNextdotjs,
  SiPython,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import dp from "./assets/images/Afridi_Image.png.jpeg";

const logotext = "Shaheed Afridi";

const meta = {
  title: "Shaheed Afridi",
  description: "I’m Shaheed Afridi, a Full-Stack Developer",
};

const introdata = {
  title: "I’m Shaheed Afridi Mohammed",
  animated: {
    first: "React.js, Next.js & Node.js Developer",
    second: "Building Cross-Platform Modern Web Apps",
    third: "Crafting Scalable Backend APIs",
  },
  description:
    "Passionate full-stack developer specializing in React and Next.js, crafting high-performance web applications that solve real-world problems.",
  your_img_url: dp,
};

const dataabout = {
  title: "About myself",
  aboutme: `
Hello there 👋 I’m Shaheed Afridi Mohammed, a Full-Stack Developer specializing in React.js, Next.js, and Node.js, with a passion for TypeScript.

I’ve honed my skills at Mindtree and Société Générale . My key projects include:
- HealthCare Compass: a app with geolocation & cost-based recommendations  
- Chat Friendly: a real-time chat platform powered by Socket.io  
- E-commerce Platform: An AI-powered e-commerce platform (in progress), featuring smart recommendations and an admin dashboard  

I hold a Master’s in Information Systems from Saint Louis University, I focused on data-driven decision support and crafting modern web applications with intuitive UI's.

When I’m not coding:
- I’m debugging with a hot cup of coffee in hand ☕  
- Perfecting my signature spicy biryani recipe 🥘  
- Exploring new hiking trails (and sometimes taking the scenic detour) 🏞️  

I believe in writing clean, maintainable, and purpose-driven code preferably before my coffee goes cold!
`,
};

const worktimeline = [
  {
    jobtitle: "Frontend Developer",
    where: "Société Générale",
    date: "Oct 2021- Aug-2022",
    Stack: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiRedux />, name: "Redux" },
    ],
  },
  {
    jobtitle: "Software Engineer",
    where: "Mindtree",
    date: "Sep 2022 – July 2023",
    Stack: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <FaNode />, name: "Node.js" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <DiMongodb />, name: "MongoDB" },
    ],
  },
];

const skills = [
  { name: "JavaScript", value: 85, icon: <SiJavascript /> },
  { name: "React.js", value: 85, icon: <FaReact /> },
  { name: "Next.js", value: 80, icon: <SiNextdotjs /> },
  { name: "Node.js", value: 75, icon: <FaNode /> },
  { name: "MongoDB", value: 70, icon: <DiMongodb /> },
  { name: "Python", value: 65, icon: <SiPython /> },
];

const services = [
  {
    title: "Real-Time & Dynamic Apps",
    description:
      "Building WebSocket-powered dashboards and chat platforms with Socket.io and Redux, enabling instant updates and interactive user experiences.",
  },
  {
    title: "Secure Authentication & Authorization",
    description:
      "Implementing JWT-based authentication and OAuth flows in Node.js and Express.js to enforce robust access control and safeguard user data.",
  },
  {
    title: "REST API Design & Optimization",
    description:
      "Designing scalable RESTful APIs with Node.js and Express, optimizing endpoints to cut average response times by 30% and ensure reliable back-end services.",
  },
];

const dataportfolio = [
  /* Your portfolio items here */
];

const contactConfig = {
  YOUR_EMAIL: "afreedsonu@gmail.com",
  YOUR_FONE: "314-445-8932",
  description:
    "Let’s build something great together! Feel free to reach out about collaborations or questions.",
  YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
  YOUR_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
  YOUR_USER_ID: process.env.REACT_APP_PUBLIC_ID,
};

const socialprofils = {
  github: "https://github.com/Afreedsonu0786",
  linkedin: "https://linkedin.com/in/shaheed-afridi-3602a8202",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=afreedsonu0786@gmail.com",
};

export {
  logotext,
  meta,
  introdata,
  dataabout,
  worktimeline,
  skills,
  services,
  dataportfolio,
  contactConfig,
  socialprofils,
};
