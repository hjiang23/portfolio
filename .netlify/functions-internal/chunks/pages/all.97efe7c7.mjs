/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, f as renderHead } from '../astro.c5076c6a.mjs';
import 'html-escaper';

const info = {
  baseUrl: "",
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
        "• Devised a modular and scalable OOP design to support price, date, and time formatting comparisons for all 400+ available CLDR locales"
      ]
    },
    {
      name: "CapTech Consulting | Elevate Software Engineering/Consulting Intern",
      location: "Remote",
      startDate: "May 2021",
      endDate: "Jul 2021",
      description: [
        "• Used React, Material UI, and AWS to construct front-end for smart fridge website, allowing users to receive recipe recommendations and manage their refrigerator inventory",
        "• Participated in daily standup meetings and weekly client presentations as part of an Agile software development cycle"
      ]
    },
    {
      name: "University of North Carolina at Chapel Hill | Residential Computing Consultant",
      location: "Chapel Hill, NC",
      startDate: "Aug 2019",
      endDate: "Mar 2020",
      description: [
        "• Provided essential technological support (WiFi, ethernet, device registration, general troubleshooting, etc.) to 50+ campus residents",
        "• Assisted in planning and providing technological setup for various campus fairs, outdoor activities, and gaming events"
      ]
    }
  ],
  education: [
    {
      name: "University of North Carolina at Chapel Hill",
      location: "Chapel Hill, NC",
      startDate: "Jan 2022",
      endDate: "May 2023",
      description: [
        "M.S. Computer Science"
      ]
    },
    {
      name: "University of North Carolina at Chapel Hill",
      location: "Chapel Hill, NC",
      startDate: "Aug 2019",
      endDate: "Dec 2021",
      description: ["B.S. Computer Science, Minor in Data Science"]
    }
  ],
  socialMedia: {
    github: "https://github.com/hjiang23",
    email: "https://docs.google.com/document/d/14qPaiYym26trAR8OMgD9KHFDmIDrOQFc3focsrTSNqI/edit?usp=sharing",
    linkedin: "https://www.linkedin.com/in/howardjiang4133/"
  },
  projects: [
    {
      title: "This Portfolio",
      isFeatured: true,
      thumbnail: "/assets/images/1.png",
      liveUrl: "https://github.com/hjiang23/portfolio"
    },
    {
      title: "Flappy Bird Using Nexys 4 Board and MIPS",
      isFeatured: true,
      thumbnail: "/assets/images/2.png",
      liveUrl: "https://youtu.be/Fmz9F03vR-I "
    },
    {
      title: "Panoramic Stitching Implemented in MATLAB",
      isFeatured: true,
      thumbnail: "/assets/images/3.png",
      liveUrl: "https://youtu.be/NLzeeyE0X-s"
    },
    {
      title: "VR Cooking Game: Order Up",
      isFeatured: true,
      thumbnail: "/assets/images/4.png",
      liveUrl: "https://github.com/hjiang23/VRFinalProject"
    },
    {
      title: "LiquidHacks Winner: Did Liquid Win?",
      isFeatured: true,
      thumbnail: "/assets/images/5.png",
      liveUrl: "https://github.com/postse/DidLiquidWin"
    },
    {
      title: "Operation Breakout Case Study Data Visualization",
      isFeatured: true,
      thumbnail: "/assets/images/6.png",
      liveUrl: "https://github.com/COMP790-InfoVis/final-project-lduan11"
    }
  ]
};

const $$Astro$9 = createAstro("https://astro-portfolio-uzair.vercel.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="container flex sm:flex-row flex-col justify-center items-center mb-8 sm:mb-4">
    <a aria-label="Social Media"${addAttribute(info.socialMedia.github, "href")} target="_blank" class="footer-icons">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </a>
    <a aria-label="Social Media"${addAttribute(info.socialMedia.linkedin, "href")} target="_blank" class="footer-icons">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>
    <a aria-label="Social Media"${addAttribute(info.socialMedia.email, "href")} target="_blank" class="footer-icons">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </a>
  
</footer>`;
}, "D:/CodingProjects/ossified-graham/src/components/general/Footer.astro");

const createLogo = (name) => name.split(" ").map((word) => word[0]).join("").toUpperCase();

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$8 = createAstro("https://astro-portfolio-uzair.vercel.app");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate(_a || (_a = __template(["", '<header class="container flex items-center justify-between h-[80px] sm:h-[123px]">\n  <a class="text-2xl dark:text-light font-semibold dark:font-semibold font-outfit" href="/">', '.\n  </a>\n  <nav>\n    <ul class="flex items-center">\n      <li>\n        <button aria-label="theme-button" id="theme-button" class="dark:text-light rounded-lg p-4 ml-2 bg-slate-100 dark:bg-[#202020]"></button>\n      </li>\n    </ul>\n  </nav>\n</header>\n\n<script>\n  const moon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;\n  const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;\n  const themeButton = document.getElementById("theme-button");\n  const browserTheme = document.querySelector(\'[name="theme-color"]\');\n  let isDark;\n  const theme = (() => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.setAttribute("data-theme", "light");\n    isDark = true;\n    themeButton.innerHTML = moon;\n    browserTheme.content = "#FFFFFF";\n  } else {\n    document.documentElement.setAttribute("data-theme", "dark");\n    isDark = false;\n    themeButton.innerHTML = sun;\n    browserTheme.content = "#111111";\n  }\n  window.localStorage.setItem("theme", theme);\n\n  const darkModeHandler = () => {\n    if (isDark) {\n      document.documentElement.setAttribute("data-theme", "dark");\n      localStorage.theme = "dark";\n      isDark = false;\n      themeButton.innerHTML = sun;\n      browserTheme.content = "#111111";\n    } else {\n      document.documentElement.setAttribute("data-theme", "light");\n      localStorage.theme = "light";\n      isDark = true;\n      themeButton.innerHTML = moon;\n      browserTheme.content = "#FFFFFF";\n    }\n  };\n\n  themeButton.addEventListener("click", darkModeHandler);\n<\/script>'], ["", '<header class="container flex items-center justify-between h-[80px] sm:h-[123px]">\n  <a class="text-2xl dark:text-light font-semibold dark:font-semibold font-outfit" href="/">', '.\n  </a>\n  <nav>\n    <ul class="flex items-center">\n      <li>\n        <button aria-label="theme-button" id="theme-button" class="dark:text-light rounded-lg p-4 ml-2 bg-slate-100 dark:bg-[#202020]"></button>\n      </li>\n    </ul>\n  </nav>\n</header>\n\n<script>\n  const moon = \\`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>\\`;\n  const sun = \\`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>\\`;\n  const themeButton = document.getElementById("theme-button");\n  const browserTheme = document.querySelector(\'[name="theme-color"]\');\n  let isDark;\n  const theme = (() => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n\n  if (theme === "light") {\n    document.documentElement.setAttribute("data-theme", "light");\n    isDark = true;\n    themeButton.innerHTML = moon;\n    browserTheme.content = "#FFFFFF";\n  } else {\n    document.documentElement.setAttribute("data-theme", "dark");\n    isDark = false;\n    themeButton.innerHTML = sun;\n    browserTheme.content = "#111111";\n  }\n  window.localStorage.setItem("theme", theme);\n\n  const darkModeHandler = () => {\n    if (isDark) {\n      document.documentElement.setAttribute("data-theme", "dark");\n      localStorage.theme = "dark";\n      isDark = false;\n      themeButton.innerHTML = sun;\n      browserTheme.content = "#111111";\n    } else {\n      document.documentElement.setAttribute("data-theme", "light");\n      localStorage.theme = "light";\n      isDark = true;\n      themeButton.innerHTML = moon;\n      browserTheme.content = "#FFFFFF";\n    }\n  };\n\n  themeButton.addEventListener("click", darkModeHandler);\n<\/script>'])), maybeRenderHead($$result), createLogo(info.name));
}, "D:/CodingProjects/ossified-graham/src/components/general/Navbar.astro");

const $$Astro$7 = createAstro("https://astro-portfolio-uzair.vercel.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}
${maybeRenderHead($$result)}<main class="container">
  ${renderSlot($$result, $$slots["default"])}
</main>
${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "D:/CodingProjects/ossified-graham/src/layouts/Layout.astro");

const $$Astro$6 = createAstro("https://astro-portfolio-uzair.vercel.app");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, about } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section>
  <p class="dark:text-light mt-[50px]" id="heyim">Hey, I’m</p>
  <h1 class="big">${name}</h1>
  <p class="dark:text-light text-lg mb-16">
    ${about}
  </p>
</section>`;
}, "D:/CodingProjects/ossified-graham/src/components/home/Hero.astro");

const $$Astro$5 = createAstro("https://astro-portfolio-uzair.vercel.app");
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Experience;
  const { title, details } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex items-start justify-between flex-col sm:flex-row dark:text-light">
  <h2 class="w-[15rem] mt-16">${title}</h2>
  <div class="w-full">
    ${details.map((item) => renderTemplate`<div class="my-16">
          <div class="flex justify-between items-center flex-wrap">
            <h3 class="text-xl font-semibold">${item.name}</h3>
            <p class="text-sm dark:text-gray">
              ${item.startDate} - ${item.endDate}
            </p>
          </div>
          <p class="text-sm mt-3 text-amber-400">${item.location}</p>
          <ul class="mt-3">
            ${item.description.map((item2) => renderTemplate`<li class="dark:text-gray">${item2}</li>`)}
          </ul>
        </div>`)}
  </div>
</section>`;
}, "D:/CodingProjects/ossified-graham/src/components/home/Experience.astro");

const $$Astro$4 = createAstro("https://astro-portfolio-uzair.vercel.app");
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { projectDetail } = Astro2.props;
  const { title, thumbnail, liveUrl, githubUrl } = projectDetail;
  return renderTemplate`${maybeRenderHead($$result)}<article class="w-full max-h-[25rem] overflow-hidden relative group">
  <div class="flex items-center absolute right-4 top-4 z-10">

    ${liveUrl && renderTemplate`<a${addAttribute(liveUrl, "href")} class="text-white p-3 bg-black/50 rounded-full backdrop-blur-md ml-1" aria-label="Social Media" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link-2">
            <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </a>`}
  </div>
  <a${addAttribute(liveUrl, "href")} target="_blank">
    <img${addAttribute(thumbnail, "src")} class="w-full h-auto scale-100 hover:scale-110 transition duration-[1.5s]" loading="lazy" width="100%" height="100%" alt="featureImage">
  </a>
  <div class="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700">
    <h3 class="mr-2 text-xl">${title}</h3>
  </div>
</article>`;
}, "D:/CodingProjects/ossified-graham/src/components/general/ProjectCard.astro");

const $$Astro$3 = createAstro("https://astro-portfolio-uzair.vercel.app");
const $$ProjectsWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectsWrapper;
  const { projects } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="grid md:grid-cols-2 grid-cols-1 gap-4 my-16">
  ${projects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "projectDetail": project })}`)}
</div>`;
}, "D:/CodingProjects/ossified-graham/src/components/general/ProjectsWrapper.astro");

const $$Astro$2 = createAstro("https://astro-portfolio-uzair.vercel.app");
const $$MetaHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MetaHead;
  const { title, description, ogImageUrl } = Astro2.props;
  return renderTemplate`<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">

<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Primary Meta Tags -->
${title && renderTemplate`<link rel="canonical"${addAttribute(`${info.baseUrl}${Astro2.url.pathname}`, "href")}>`}
${title && renderTemplate`<title>${`${title} - ${info.name}`}</title>`}
${title && renderTemplate`<meta name="title"${addAttribute(`${title} - ${info.name}`, "content")}>`}
${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}

<!-- preload assests -->
<link rel="preload" href="/assets/fonts/Inter/Inter-Light.ttf" as="font" crossorigin>
<link rel="preload" href="/assets/fonts/Outfit/Outfit-SemiBold.ttf" as="font" crossorigin>`;
}, "D:/CodingProjects/ossified-graham/src/components/general/MetaHead.astro");

const $$Astro$1 = createAstro("https://astro-portfolio-uzair.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const featureProjects = info.projects.reduce((accumulator, project) => {
    if (accumulator.length < 6 && project.isFeatured) {
      accumulator.push(project);
    }
    return accumulator;
  }, []);
  return renderTemplate`<html lang="en">
  <head>
    ${renderComponent($$result, "MetaHead", $$MetaHead, { "title": "Portfolio", "description": info.about, "ogImageUrl": "/assets/images/profile.png" })}
  ${renderHead($$result)}</head>

  <body>
    ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`
      ${renderComponent($$result2, "Hero", $$Hero, { "name": info.name, "about": info.about })}
      ${renderComponent($$result2, "Experience", $$Experience, { "title": "EXPERIENCE", "details": info.experience })}
      ${renderComponent($$result2, "Experience", $$Experience, { "title": "EDUCATION", "details": info.education })}
      <section>
        <h2 class="w-[15rem] dark:text-light mt-16">PROJECTS</h2>
        ${renderComponent($$result2, "ProjectsWrapper", $$ProjectsWrapper, { "projects": featureProjects })}
      </section>
    ` })}
  </body></html>`;
}, "D:/CodingProjects/ossified-graham/src/pages/index.astro");

const $$file$1 = "D:/CodingProjects/ossified-graham/src/pages/index.astro";
const $$url$1 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://astro-portfolio-uzair.vercel.app");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const Projects = info.projects.map((project) => project);
  return renderTemplate`<html lang="en">
  <head>
    ${renderComponent($$result, "MetaHead", $$MetaHead, { "title": "Projects", "description": "All projects are available in this page.", "ogImageUrl": "/assets/images/profile.png" })}
  ${renderHead($$result)}</head>

  <body>
    ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`
      <h1 style="line-height: 1.2;">Projects</h1>
      ${renderComponent($$result2, "ProjectsWrapper", $$ProjectsWrapper, { "projects": Projects })}
    ` })}
  </body></html>`;
}, "D:/CodingProjects/ossified-graham/src/pages/projects.astro");

const $$file = "D:/CodingProjects/ossified-graham/src/pages/projects.astro";
const $$url = "/projects";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a };
