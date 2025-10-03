const resumeData = {
  personal: {
    name: "Parveen Kumar",
    title: "Software Engineer",
    phone: "+91 (901) 584 8590",
    email: "praveent696@gmail.com",
    location: "Delhi",
    websites: [
        {
            name: 'portfolio',
            url: "https://praveent696.github.io/my-portfolio"
        },
        {
            name: 'linkedin',
            url: "https://www.linkedin.com/in/iamparveen"
        },
        {
            name: 'github',
            url: "https://github.com/praveent696"
        }
    ]
  },
  summary:
    "Accomplished Software Engineer with 10+ years of experience delivering scalable, secure web applications using .NET Core and React. Expert in API design, cloud solutions, and leading cross-functional teams. Known for translating business needs into robust technical solutions, optimizing performance, and driving continuous improvement. Passionate about mentoring, clean architecture, and delivering real business value.",
  technologies: {
    frameworks: "C#, SQL, JavaScript, EJS, React, Redux, .NET MVC, .NET Core, Microservices, Azure",
    tools: "Visual Studio, Microsoft SQL Server, Visual Studio Code, JIRA, GIT, Azure DevOps"
  },
  experience: [
    {
      company: "Harbinger Group.",
      role: "Tech Specialist",
      location: "Pune, India (Remote)",
      duration: "Nov. 2024 to present (10 months)",
      details: [
        "Led backend development using .NET Core, focusing on designing clean, secure, and scalable REST APIs that power complex frontend applications.",
        "Championed Test-Driven Development (TDD) and built reusable components in React to ensure code quality and reduce maintenance overhead.",
        "Refactored key backend modules to improve response times... resulting in up to 50% performance improvement.",
        "Provided technical leadership as a Team Lead, mentoring developers, conducting code reviews, and managing sprint deliveries in Agile environments.",
        "Translated business requirements into well-structured APIs, integrating with databases, third-party services, and authentication/authorization frameworks."
      ]
    },
    {
      company: "S&P Global Inc.",
      role: "Software Engineer",
      location: "Noida, India",
      duration: "Mar. 2022 to Nov. 2024 (2 years 8 months)",
      details: [
        "Utilized Test-Driven Development (TDD) methodology to craft reusable React components, ensuring code reliability and maintainability.",
        "Enhanced module performance by up to 50% through strategic code refactoring.",
        "Implemented optimizations in React applications by analyzing code flows, addressing issues such as redundant network calls and unnecessary component re-renders.",
        "Played a pivotal role in analyzing the existing system, identifying technical debt, and executing solutions to enhance system efficiency and stability."
      ]
    },
    {
      company: "GlobalLogic India Pvt. Ltd.",
      role: "Senior Software Engineer",
      location: "Noida, India",
      duration: "Feb. 2020 to Mar. 2022 (2 years 1 month)",
      details: [
        "Developed .NET Core, Microservices, and cloud-based applications, leveraging NoSQL databases and implementing event-driven programming using Azure Message Bus and Kafka.",
        "Extensive practical experience in .NET Core and microservice-based development.",
        "Collaborated seamlessly with peers to architect optimal solutions using the .NET framework and Microsoft technology stack."
      ]
    },
    {
      company: "Inficare Software Technologies Pvt. Ltd.",
      role: "Software Developer",
      location: "Noida, India",
      duration: "Oct. 2015 to Feb. 2020 (4 years 4 months)",
      details: [
        "Designed, developed, and maintained full-stack internet-scale web applications on AWS with a heavy focus on RESTful APIs.",
        "Expert in .NET Framework, MSSQL, and MySQL.",
        "Revised, modularized, and updated old code bases to modern standards, reducing operating costs by 30%."
      ]
    }
  ],
  projects: [
    {
      title: "Safetychain Software (Harbinger Group)",
      dates: "2024 to present",
      techStack: ".NET Core, Azure, JavaScript, React, Redux, HTML5, CSS, Storybook, Web Components, E2E testing, Unit testing frameworks",
      details: [
        "Played a core team role in designing and developing mission-critical modules for real-time plant monitoring, production analytics, and downtime tracking",
        "Participated in architectural decisions, including microservices design, message queues (e.g., RabbitMQ), and containerization using Docker."
      ]
    },
    {
      title: "Financial Application (S&P Global)",
      dates: "2022 to 2024",
      techStack: ".NET, JavaScript, React, Redux, HTML5, CSS, Storybook, Web Components, E2E testing, Unit testing frameworks",
      details: [
        "Contributed to the development of a stock research app with real-time market data visualization, personalized watchlists, and advanced technical analysis tools.",
        "Ensured broad compatibility through responsive design, allowing seamless access across devices."
      ]
    },
    {
      title: "Internal Knowledge Base Portal (GlobalLogic)",
      dates: "2021 to 2022",
      techStack: ".NET Core, React, Redux, SQL Server, Azure, REST API, Bootstrap",
      details: [
        "Developed a secure internal portal for knowledge sharing and documentation, used by 200+ engineers across multiple teams.",
        "Integrated Azure Active Directory for SSO and role-based access control.",
        "Implemented advanced search and tagging features to improve discoverability of technical articles."
      ]
    }
  ],
  education: {
    institution: "GGSIPU University, Delhi",
    degree: "B.Tech. (Computer Science & Engineering)",
    duration: "May 2011 to May 2015",
    gpa: "8.1/10.0",
    coursework:
      "Software Foundations, Computer Architecture, Algorithms, Artificial Intelligence, Comparison of Learning Algorithms, Computational Theory, Cloud Computing, Distributed Systems, Web Security"
  },
  awards: [
    {
      title: "SuperStar Award",
      organization: "Harbinger Group",
      year: 2025,
      month: 4,
      priority: 1,
      sourceText: "SuperStar Award at Harbinger Group: April 2025"
    },
    {
      title: "Spotlight Award",
      organization: "S&P Global",
      year: 2022,
      month: 11,
      priority: 2,
      sourceText: "Spotlight Award at S&P Global: October and November 2022"
    },
    {
      title: "Team Excellence Award",
      organization: "Inficare Software Technologies Pvt. Ltd.",
      year: 2019,
      month: 7,
      priority: 4,
      sourceText: "Team Excellence Award at Inficare Software Technologies: July 2019"
    },
    {
      title: "Spotlight Award",
      organization: "GlobalLogic",
      year: 2021,
      month: 11,
      priority: 3,
      sourceText: "Spotlight Award at GlobalLogic: November 2021"
    }
  ]
};

export default resumeData; 