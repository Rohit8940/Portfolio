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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    // carrent,
    zomato,
    weather,
    // jobit,
    // tripguide,
    threejs,
    car,
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
      title: "Mern Stack",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "React.js Developer",
      icon: backend,
    },
    {
      title: "Data Structures And Algorithms",
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
      title: "React.js Developer",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Have built many projects and collaborated with others in the same",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "This is one of the projects built in React.js",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Have built many projects and collaborated with others in the same",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Zomato Clone and My weather are some of the projects made",
      ],
    },
    {
      title: "MERN STACK Developer",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "Developing and maintaining web application Using MERN Stack",
        "Currently in training to build seamless websites including both backend and the fronend",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Yet to Build Projects on MERN",
      ],
    },
    {
      title: "Data Structures And Algorithms",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Skills in Data Structures and Algorithms",
        "Solid foundation in Object Oriented Programming",
        "Solving questions on Leetcode and Geeks for Geeks",
        "Participating in competetive programming in CodeChef and HackerRank ",
      ],
    },
    {
      title: "IEEE  - Electronics Branch Representative in BVM",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Dec 2022",
      points: [
        "Served as an Electronics Branch Representative in IEEE BVM",
        "Collaborated and Conducted activitied related to IT and Electronics in college",
        "Conducted Workshops and Events throughout the year",
        "Won Best Student Branch award in Sampark-2023 in IEEE Gujarat Section",
        ,
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rohit does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Weather App",
      description:
        "An App Showing real time weather created using React Native and Google Firebase.It uses the OpenWeatherMap API to fetch the weather information in real time.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "weather",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/Rohit8940/My-Weather/tree/main/My-Weather-main",
    },
    {
      name: "Zomato Clone",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "clone",
          color: "green-text-gradient",
        },
        {
          name: "authentication",
          color: "pink-text-gradient",
        },
      ],
      image: zomato,
      source_code_link: "https://github.com/Rohit8940/zomato-clone",
    },
    {
      name: "Surveillance Car",
      description:
        "Implemented the former with Arduino and the latter with ESP 32 CAM.Operates over Wifi providing real time streaming over the local network. Also uses image processing for identification of objects.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "machine learning",
          color: "green-text-gradient",
        },
        {
          name: "image processing",
          color: "pink-text-gradient",
        },
      ],
      image: car,
      source_code_link: "https://github.com/Rohit8940/Surveillance_Car",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };