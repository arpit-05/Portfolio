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
    infogain,
    sbs,
    lakehead,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Programmer Analyst",
      company_name: "Lakehead University",
      icon: lakehead,
      iconBg: "#383E56",
      date: "Sept 2023 - Present",
      points: [
        "Migrated a legacy multi-page app to a React-Redux SPA, reducing page load times by 40% and boosting user experience by 25%.", 
        "Reduced page load times by 60% and optimized database queries to handle a 3x increase in traffic during peak usage.",
        "Implemented CI/CD pipelines and integrated testing tools like Jest and Enzyme, reducing bugs in production by 20%.",
      ],
    },
    {
      title: "Library Operations Supervisor",
      company_name: "Lakehead University",
      icon: lakehead,
      iconBg: "#383E56",
      date: "Oct 2022 - April 2023",
      points: [
        "Supervised a team of 13 student library assistants and oversaw daily library operations, while maintaining a budget of $300,000.",
        "Led the operational transformation of library services, implementing new workflows and digital tools that improved staff efficiency by 20% and reduced operational costs by 15%."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Infogain India Pvt Ltd",
      icon: infogain,
      iconBg: "#383E56",
      date: "Oct 2018 - Aug 2021",
      points: [
        "Collaborated with cross-functional teams to design, develop and manage software architecture across front-end and back-end of web applications using React, Redux, JavaScript, Node.js, Express ensuring efficient and scalable solutions.",
        "Increased 24% faster loading time by implementing code optimization, image and resource caching, and server-side rendering.",
        "Build and test applications using agile methodologies, helping other engineers via mentorship, engaged in scrum ceremonies, code reviews, and implemented automated and manual testing frameworks to ensure quality and performance."
      ],
    },
    {
      title: "Software Engineer Trainee",
      company_name: "Infogain India Pvt Ltd",
      icon: infogain,
      iconBg: "#E6DEDD",
      date: "Jan 2018 - Oct 2018",
      points: [
        "Developed features and products throughout the software development cycle stages (SDLC), leveraging technologies such as Bootstrap, HTML, CSS, AJAX, jQuery, and JavaScript to create engaging front-end for web applications.",
        "Redesigning web pages, automated technological processes, and assisted clients with bug fixes and continuous improvement.",
        "Extracted data from SQL for application development."
      ],
    },
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
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
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
      name: "Car Rent ",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      //source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      //source_code_link: "https://github.com/",
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
      //source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };