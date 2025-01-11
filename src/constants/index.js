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

    zomato,
    weather,
    
    threejs,
    car,
    react,
    mern,
    dsa,
    react_native,
    IEEE,
    linkedin,
    Chat,
    Aimtron,
    ISRO
    
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
    {
      title: "Flutter",
      icon: web,
    },
    {
      title: "Machine and Deep Learning",
      icon: mobile,
    },
    {
      title: "TensorFlow,PyTorch",
      icon: backend,
    },
    {
      title: "CNN,YOLO",
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
      title: "Researcher",
      company_name: "ISRO - Space Applications Centre",
      icon: ISRO,
      iconBg: "#383E56",
      date: "1/1/2025-Present",
      points: [
        "Research Intern at SAC-ISRO Ahmedabad",
        "Working On Deep Learning and App Developement",
      ],
    },
    {
      title: "MERN Developer",
      company_name: "Coding Cloud Ahmedabad",
      icon: mern,
      iconBg: "#E6DEDD",
      date: "1/6/2023-1/7/2024",
      points: [
        "Internship at Coding Cloud Ahmedabad",
        "Worked on my Portfoloio and developed an Ecommerce Website",
      ],
    },
    {
      title: "Internship",
      company_name: "Aimtron Electronics Pvt.Ltd",
      icon: Aimtron,
      iconBg: "#383E56",
      date: "",
      points: [
        "Learned production line for PCB from Design to AOI(Automatic Optical Inspection)",
        "Got an insight about Computer Networks,Cybersecurity and AI",
      ],
    },
    {
      title: "IEEE  - Electronics Branch Representative in BVM",
      company_name: "",
      icon: IEEE,
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
        "I think it's possible for ordinary people to be extraordinary",
      name: "Elon Musk",
      designation: "CEO",
      company: "Space X and Tesla",
      image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8_p9wZBhtI8/v0/-1x-1.jpg",
    },
    {
      testimonial:
        "Man need's his difficulties because they are necessary to enjoy success",
      name: "DR APJ Abdul Kalam",
      designation: "Scientist from ",
      company: "ISRO",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/800px-A._P._J._Abdul_Kalam.jpg",
    },
    {
      testimonial:
        "To raise new questions,new possibilities,to regard old problems from a new angle,requires creative imagination and marks real advance in science",
      name: "Albert Einstien",
      designation: "Scientist from ",
      company: "Germany",
      image: "https://assets.weforum.org/article/image/responsive_large_-ytU8aFc7NXOVyhZ2HjKvs2CDIRFPYxBqgtKIJd9V-s.png",
    },
  ];
  
  const projects = [
    {
      name: " My Linkedin Profile",
      description:
        "Here's the link to my linkedin profile.It gives brief intro about me,my education,work experiences and my personal projects ",
      tags: [
        {
          name: "introduction",
          color: "blue-text-gradient",
        },
        {
          name: "education",
          color: "green-text-gradient",
        },
        {
          name: "experience",
          color: "pink-text-gradient",
        },
      ],
      image: linkedin,
      source_code_link: "https://www.linkedin.com/in/rohit-baruah/",
    },
    {
      name: "Live Chatting and Article App",
      description:
        "User Authentication using JWT,Real time Chat using Socket.io,Article viewing with pagination,Mongo schema for user,chat and articles",
      tags: [
        {
          name: "socket.io",
          color: "blue-text-gradient",
        },
        {
          name: "jwt",
          color: "green-text-gradient",
        },
        {
          name: "mongo schema",
          color: "pink-text-gradient",
        },
      ],
      image: Chat,
      source_code_link:"https://github.com/Rohit8940/pilotchatapp",
    },
    
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
        "A Replica of the popular food delivering Indian app built using React Native and Firebase.It supports Authentication and sends OTP with the help of google firebase and have basic UI of the home page",
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