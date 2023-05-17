export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Howard Jiang",
  jobDescription: "Web Developer",
  about: `I am a software engineer currently based in Cary, NC. I recently graduated with an MS in Computer Science from the University of North Carolina at Chapel Hill. 
  So far, I have had the privilege of working at Amazon as a Software Development Engineer Intern and at CapTech as a Software Engineering/Consulting Intern. I am currently seeking full-time opportunities in software engineering
  or other related fields! Some tools/frameworks and languages I feel comfortable using include Git, Spring, React, Node.js, Unity, AWS, SQL, JSP, Java, Python, JavaScript,
  C, C#, and Python. Below, you will find my work experience, education, and projects I have completed!
  `,

  experience: [
    {
      name: "Amazon | Software Development Engineer Intern",
      location: "Seattle, WA",
      startDate: "May 2022",
      endDate: "Aug 2022",
      description: [
        "• Used Java and JSP in the Spring framework to create a page on the Amazon internationalization demo portal that allows for the comparison of formatting between two locales",
        "• Devised a modular and scalable OOP design to support price, date, and time formatting comparisons for all 400+ available CLDR locales",
      ],
    },

    {
      name: "CapTech Consulting | Elevate Software Engineering/Consulting Intern",
      location: "Remote",
      startDate: "May 2021",
      endDate: "Jul 2021",
      description: [
        "• Used React, Material UI, and AWS to construct front-end for smart fridge website, allowing users to receive recipe recommendations and manage their refrigerator inventory",
        "• Participated in daily standup meetings and weekly client presentations as part of an Agile software development cycle"
      ],
    },

    {
      name: "University of North Carolina at Chapel Hill | Residential Computing Consultant",
      location: "Chapel Hill, NC",
      startDate: "Aug 2019",
      endDate: "Mar 2020",
      description: [
        "• Provided essential technological support (WiFi, ethernet, device registration, general troubleshooting, etc.) to 50+ campus residents",
        "• Assisted in planning and providing technological setup for various campus fairs, outdoor activities, and gaming events",
      ],
    },
  ],

  education: [
    {
      name: "University of North Carolina at Chapel Hill",
      location: "Chapel Hill, NC",
      startDate: "Jan 2022",
      endDate: "May 2023",
      description: [
        "M.S. Computer Science",
      ],
    },
    {
      name: "University of North Carolina at Chapel Hill",
      location: "Chapel Hill, NC",
      startDate: "Aug 2019",
      endDate: "Dec 2021",
      description: ["B.S. Computer Science, Minor in Data Science"],
    }
  ],

  socialMedia: {
    github: "https://github.com/hjiang23",
    email: "https://docs.google.com/document/d/14qPaiYym26trAR8OMgD9KHFDmIDrOQFc3focsrTSNqI/edit?usp=sharing",
    linkedin: "https://www.linkedin.com/in/howardjiang4133/",
  },

  projects: [
    {
      title: "This Portfolio",
      isFeatured: true,
      thumbnail: "/assets/images/1.png",
      liveUrl: "https://astro-portfolio-uzair.vercel.app/",
    },
    {
      title: "Flappy Bird Using Nexys 4 Board and MIPS",
      isFeatured: true,
      thumbnail: "/assets/images/2.png",
      liveUrl: "https://youtu.be/Fmz9F03vR-I ",
    },
    {
      title: "Panoramic Stitching Implemented in MATLAB",
      isFeatured: true,
      thumbnail: "/assets/images/3.png",
      liveUrl: "https://youtu.be/NLzeeyE0X-s",
    },
    {
      title: "VR Cooking Game: Order Up",
      isFeatured: true,
      thumbnail: "/assets/images/4.png",
      liveUrl: "https://github.com/hjiang23/VRFinalProject",
    },
    {
      title: "LiquidHacks Winner: Did Liquid Win?",
      isFeatured: true,
      thumbnail: "/assets/images/5.png",
      liveUrl: "https://github.com/postse/DidLiquidWin",
    },
    {
      title: "Operation Breakout Case Study Data Visualization",
      isFeatured: true,
      thumbnail: "/assets/images/6.png",
      liveUrl: "https://github.com/COMP790-InfoVis/final-project-lduan11",
    },
  ],
};
