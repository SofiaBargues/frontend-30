"use client";

import Image from "next/image";

import {
  Book,
  Camera,
  Cat,
  Fish,
  IterationCcw,
  Languages,
  PhoneCallIcon,
  Star,
} from "lucide-react";
import { cn } from "mxcn";
import { text } from "stream/consumers";
import { themeChange } from "theme-change";
import { useEffect } from "react";

import Typewriter from "typewriter-effect";
import Link from "next/link";

type Item = {
  name: string;
  completed: boolean;
  description: string;
  type: string;
  statementUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  tutorialUrl?: string;
  imgSource?: string;
};

const HTMLCSS: Item[] = [
  {
    name: "QR code component",
    description: "Here the desciption",
    type: "start",
    completed: true,
    tutorialUrl: "https://www.youtube.com/watch?v=5BBYPntB-GY&t=7s",
    statementUrl:
      "https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H",
    githubUrl: "https://github.com/SofiaBargues/qr-code-component",
    demoUrl: "https://qr-code-component-liart.vercel.app/",
    imgSource: "/qr-code-component.jpg",
  },
  {
    name: "Blog Preview Card",
    description: "Here the desciption",
    type: "start",
    completed: true,
    tutorialUrl: "https://www.youtube.com/watch?v=3n22cowxoKU",
    statementUrl:
      "https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS",
    githubUrl: "https://github.com/SofiaBargues/blog-preview-card",
    demoUrl: "https://blog-preview-card-xi-gules.vercel.app/",
    imgSource: "/blog-preview-card.jpg",
  },
  {
    name: "Social links profile",
    description: "Here the desciption",
    type: "start",
    completed: true,
    tutorialUrl: "https://www.youtube.com/watch?v=PlUOMi23qAc",
    statementUrl:
      "https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ",
    githubUrl: "https://github.com/SofiaBargues/social-links-profile-main",
    demoUrl: "https://social-links-profile-main-yycc.vercel.app/",
    imgSource: "/social-links-profile.jpg",
  },
  {
    name: "Recipe page",
    description: "Here the desciption",
    type: "start",
    completed: true,
    tutorialUrl: "https://www.youtube.com/watch?v=wF2DLQGeJS0&t=185s",
    statementUrl:
      "https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm",
    githubUrl: "https://github.com/SofiaBargues/recipe-page",
    demoUrl: "https://recipe-page-alpha-ten.vercel.app/",
    imgSource: "/recipe-page.jpg",
  },
  {
    name: "Testimonials grid section",
    description: "Here the desciption",
    type: "start",
    completed: true,
    tutorialUrl:
      "https://www.youtube.com/watch?v=0TiIJjC7Olw&list=PLrVXEY3WfL-39_2q2HiKkuyNxelQI1XeV",
    statementUrl:
      "https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7",
    githubUrl: "https://github.com/SofiaBargues/testimonialsgrid-section",
    demoUrl:
      "https://testimonialsgrid-section-git-main-sofiabargues-projects.vercel.app/",
    imgSource: "/testimonials-grid-section.jpg",
  },
  {
    name: "Article preview component",
    description: "Here the desciption",
    type: "start",
    completed: true,
    tutorialUrl:
      "https://www.youtube.com/watch?v=SKhZ0IBk1_A&list=PLrVXEY3WfL-39_2q2HiKkuyNxelQI1XeV&index=2",
    statementUrl:
      "https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-/steps/665e1b4e6ec3887a3b142b16/challenge/start",
    githubUrl: "https://github.com/SofiaBargues/article-preview-component",
    demoUrl: "https://article-preview-component-sable.vercel.app/",
    imgSource: "/article-preview.jpg",
  },
];

const HTMLCSSJS: Item[] = [
  {
    name: "Time tracking dashboard",
    description: "Here the desciption",
    type: "start",
    completed: true,
    tutorialUrl: "https://www.youtube.com/watch?v=l9Qw8y3LfCY",
    statementUrl:
      "https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw",
    githubUrl: "https://github.com/SofiaBargues/time-tracking-dashboard",
    demoUrl: "https://time-tracking-dashboard-pied.vercel.app/",
    imgSource: "/time-tracking-dashboard.jpg",
  },
  {
    name: "Newsletter sign-up form with success message",
    description: "Here the desciption",
    type: "start",
    completed: true,
    tutorialUrl:
      "https://www.youtube.com/watch?v=abdsoVJsWzQ&list=PLrVXEY3WfL-39_2q2HiKkuyNxelQI1XeV&index=3",
    statementUrl:
      "https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv/hub",
    githubUrl: "https://github.com/SofiaBargues/newsletter-sign-up",
    demoUrl: "https://frontend-mentor-newsletter-signup-form-ruby.vercel.app/",
    imgSource: "/newsletter-singup-form.jpg",
  },
  {
    name: "Expenses chart component",
    description: "Here the desciption",
    type: "start",
    completed: true,
    tutorialUrl: "https://www.youtube.com/watch?v=s9CHPlY8J8I",
    statementUrl:
      "https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt",
    githubUrl: "https://github.com/SofiaBargues/expensesChartComponent",
    demoUrl: "https://expenses-chart-component-rho-amber.vercel.app/",
    imgSource: "/expenses-chart-component.jpg",
  },
  {
    name: "Tip calculator",
    description: "Here the desciption",
    type: "start",
    completed: true,
    tutorialUrl: "https://www.youtube.com/watch?v=FYCauVeo8OY",
    statementUrl:
      "https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX",
    githubUrl: "https://github.com/SofiaBargues/tip-calculator-app-main",
    demoUrl: "https://tip-calculator-app-main-ivory.vercel.app/",
    imgSource: "/tip-calculator-app.jpg",
  },
  {
    name: "Pricing component with toggle",
    description: "Here the desciption",
    type: "start",
    completed: true,
    tutorialUrl: "https://www.youtube.com/watch?v=3n22cowxoKU",
    statementUrl:
      "https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC",
    githubUrl: "https://github.com/SofiaBargues/pricing-component-with-toggle",
    demoUrl: "https://pricing-component-with-toggle-two-phi.vercel.app/",
    imgSource: "/pricing-component-with-toggle.jpg",
  },
  {
    name: "Age calculator app",
    description: "Here the desciption",
    type: "start",
    completed: false,
    tutorialUrl: "https://www.youtube.com/watch?v=3n22cowxoKU",
    statementUrl:
      "https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q",
    githubUrl: "https://github.com/SofiaBargues/blog-preview-card",
    demoUrl: "https://blog-preview-card-xi-gules.vercel.app/",
    imgSource: "/age-calculator-app.jpg",
  },
  {
    name: "Interactive pricing component",
    description: "Here the desciption",
    type: "start",
    completed: false,
    tutorialUrl: "https://www.youtube.com/watch?v=3n22cowxoKU",
    statementUrl:
      "https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8",
    githubUrl: "https://github.com/SofiaBargues/blog-preview-card",
    demoUrl: "https://blog-preview-card-xi-gules.vercel.app/",
    imgSource: "/interactive-pricing-component.jpg",
  },
  {
    name: "Social media dashboard",
    description: "Here the desciption",
    type: "start",
    completed: false,
    tutorialUrl: "https://www.youtube.com/watch?v=3n22cowxoKU",
    statementUrl:
      "https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H",
    githubUrl: "https://github.com/SofiaBargues/blog-preview-card",
    demoUrl: "https://blog-preview-card-xi-gules.vercel.app/",
    imgSource:
      "https://res.cloudinary.com/dz209s6jk/image/upload/v1703155661/Challenges/iyh3uk6keluskixx8pz6.jpg",
  },
  {
    name: "Advice generator app",
    description: "Here the desciption",
    type: "start",
    completed: false,
    tutorialUrl: "https://www.youtube.com/watch?v=3n22cowxoKU",
    statementUrl:
      "https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db",
    githubUrl: "https://github.com/SofiaBargues/blog-preview-card",
    demoUrl: "https://blog-preview-card-xi-gules.vercel.app/",
    imgSource:
      "https://res.cloudinary.com/dz209s6jk/image/upload/v1703155661/Challenges/iyh3uk6keluskixx8pz6.jpg",
  },
  {
    name: "Weather App",
    description: "Here the desciption",
    type: "start",
    completed: false,
    tutorialUrl: "https://www.youtube.com/watch?v=3n22cowxoKU",
    statementUrl:
      "https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS",
    githubUrl: "https://github.com/SofiaBargues/blog-preview-card",
    demoUrl: "https://blog-preview-card-xi-gules.vercel.app/",
    imgSource:
      "https://res.cloudinary.com/dz209s6jk/image/upload/v1703155661/Challenges/iyh3uk6keluskixx8pz6.jpg",
  },
];

// const StaticSiteItems: Item[] = [
//   {
//     name: "Website 1",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
//   {
//     name: "Website 2",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
//   {
//     name: "Website 3",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
//   {
//     name: "Portfolio",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
// ];

// const GitItems: Item[] = [
//   {
//     name: "Video Course",
//     description: "Empty",
//     type: "start",
//     completed: false,
//   },
//   {
//     name: "Basic",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
//   {
//     name: "Practice 1",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
//   {
//     name: "Practice 2",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
// ];

// const JSItems: Item[] = [
//   {
//     name: "Video Course JS",
//     description: "Empty 1",
//     type: "course",
//     completed: true,
//   },
//   {
//     name: "Basic JavaScript",
//     description: "Empty  2",
//     type: "course",
//     completed: true,
//   },
// ];
// const ReactItems: Item[] = [
//   {
//     name: "Video Course",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
//   {
//     name: "Basic React",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
// ];

// const IntAppItems: Item[] = [
//   {
//     name: "App 1",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
//   {
//     name: "App 2",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
//   {
//     name: "App 3",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
// ];

// const JobItems: Item[] = [
//   {
//     name: "Job search",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
//   {
//     name: "Job search",
//     description: "Empty",
//     type: "course",
//     completed: false,
//   },
// ];

var alignments = [
  "left-0",
  "left-11",
  "left-16",
  "left-11",
  "left-0",
  "right-11",
  "right-16",
  "right-11",
];

const themes = [
  { id: "light" },
  { id: "dark" },
  { id: "cupcake" },
  { id: "bumblebee" },
  { id: "emerald" },
  { id: "corporate" },
  { id: "synthwave" },
  { id: "retro" },
  { id: "cyberpunk" },
  { id: "valentine" },
  { id: "halloween" },
  { id: "garden" },
  { id: "forest" },
  { id: "aqua" },
  { id: "lofi" },
  { id: "pastel" },
  { id: "fantasy" },
  { id: "wireframe" },
  { id: "black" },
  { id: "luxury" },
  { id: "dracula" },
  { id: "cmyk" },
  { id: "autumn" },
  { id: "business" },
  { id: "acid" },
  { id: "lemonade" },
  { id: "night" },
  { id: "coffee" },
  { id: "winter" },
];

export default function Home() {
  return (
    <div className=" min-h-screen text-base-content bg-base-100 ">
      <nav className="navbar z-10 text-base-content bg-base-300 justify-between fixed top-0 border-b-primary border-b-2">
        <Link href="/">
          <div id="group1 " className="btn btn-ghost ml-2 flex gap-2">
            <div>
              <label className="avatar">
                <div className="w-10 rounded-full border-2 ">
                  <img src="/avatarColor.png" alt=" " />
                </div>
              </label>
            </div>
            <div>
              <p className=" font-bold normal-case text-xl ">Frontend 30</p>
            </div>
          </div>
        </Link>

        <div id="group2" className="flex gap-2">
          <GitHub />
          <LinkedIn />
          <ThemeChange dropdownClasses="..." />
        </div>
      </nav>
      <main className="flex flex-col items-center w-full  pb-24">
        <Hero />
        <div className="flex flex-col items-center w-full ">
          <Section name="HTML + CSS" items={HTMLCSS} />
          <Section name="HTML + CSS + JS" items={HTMLCSSJS} />
        </div>
      </main>
      <footer className="footer footer-center p-4 bg-primary text-primary-content mt-20 fixed bottom-0">
        <div>
          <p>
            Sofia Bargues - 2024 -
            <a
              className="link hover:text-primary-content/80"
              target="_blank"
              href="mailto: barguessofia@gmail.com"
            >
              barguessofia@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function ThemeChange({
  dropdownClasses = "",
  btnClasses = "btn-ghost",
  contentClasses = "mt-16 border-2 border-primary",
}) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div
      title="Change Theme"
      className={`dropdown dropdown-end ${dropdownClasses}`}
    >
      <div tabIndex={0} className={`btn normal-case ${btnClasses}`}>
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <span className="hidden font-normal md:inline">
          {/* {t("change-theme-btn")} */}
        </span>
        <svg
          width="12px"
          height="12px"
          className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </div>
      <div
        tabIndex={0}
        className={`dropdown-content z-[1] menu bg-base-200 text-base-content rounded-box top-px  p-3 shadow ${contentClasses}`}
      >
        <div className="overflow-y-auto h-[70vh] max-h-96 w-56">
          <div className="grid grid-cols-1 gap-3 pr-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className="outline-base-content overflow-hidden rounded-lg text-left"
                data-set-theme={theme.id}
                data-act-class="[&_svg]:visible"
              >
                <div
                  data-theme={theme.id}
                  className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                >
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="invisible h-3 w-3 shrink-0"
                      >
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                      </svg>
                      <div className="flex-grow text-sm">{theme.id}</div>
                      <div className="flex h-full flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded" />
                        <div className="bg-secondary w-2 rounded" />
                        <div className="bg-accent w-2 rounded" />
                        <div className="bg-neutral w-2 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LinkedIn() {
  return (
    <span
      className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
      data-tip="LinkedIn"
    >
      <div className="flex-none items-center ">
        <a
          aria-label="LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/sofia-bargues/"
          rel="noopener, noreferrer"
          className="btn btn-ghost drawer-button btn-square normal-case"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 5 1036 990"
            fill="currentColor"
          >
            <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" />
          </svg>
        </a>
      </div>
    </span>
  );
}
function GitHub() {
  return (
    <span
      className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
      data-tip="GitHub"
    >
      <div className="flex-none items-center">
        <a
          aria-label="Github"
          target="_blank"
          href="https://github.com/SofiaBargues/roadmap"
          rel="noopener, noreferrer"
          className="btn btn-ghost drawer-button btn-square normal-case"
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="inline-block h-5 w-5 fill-current md:h-6 md:w-6"
          >
            <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
          </svg>
        </a>
      </div>
    </span>
  );
}

let statementImg = (
  <svg
    fill="#000000"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M12.17 1.272a.732.732 0 0 0-.718.732v13.914a.732.732 0 0 0 .732.732.732.732 0 0 0 .732-.732V2.004a.732.732 0 0 0-.745-.732zM23.246 5.44a.734.734 0 0 0-.277.063l-6.282 2.804a.733.733 0 0 0 0 1.336l6.282 2.813a.738.738 0 0 0 .3.065.732.732 0 0 0 .297-1.4L18.78 8.976l4.786-2.137a.734.734 0 0 0 .37-.966.734.734 0 0 0-.69-.433zm-22.5 5.032a.732.732 0 0 0-.722.915c1.736 6.677 7.775 11.341 14.683 11.341a.732.732 0 0 0 0-1.464A13.706 13.706 0 0 1 1.44 11.02a.732.732 0 0 0-.694-.547z"></path>
    </g>
  </svg>
);

function MyButton({ url, name }: { url: any; name: string }) {
  return (
    <a
      aria-label="Github"
      target="_blank"
      href={url}
      rel="noopener, noreferrer"
      className="btn btn-ghost drawer-button  normal-case"
    >
      <div className="flex-none items-center">{name}</div>
    </a>
  );
}

function Section({ name, items }: { name: string; items: Item[] }) {
  return (
    <section className="flex flex-col  w-full items-stretch">
      <SectionHeader text={name} />
      <div className="flex flex-col items-center pb-8 gap-8">
        {items.map(itemToStep)}
      </div>
    </section>
  );
}

function itemToStep(item: Item, index: number, items: Item[]) {
  const alignmentIndex =
    index === items.length - 1 ? 0 : index % alignments.length;
  return (
    <Step
      name={item.name}
      type={item.type}
      githubUrl={item.githubUrl}
      demoUrl={item.demoUrl}
      description={item.description}
      alignment={alignments[alignmentIndex]}
      statementUrl={item.statementUrl}
      tutorialUrl={item.tutorialUrl}
      disabled={!item.completed}
      key={item.name}
      item={item}
      imgSource={item.imgSource}
    ></Step>
  );
}

function SectionHeader({ text }: { text: string }) {
  return (
    <header className=" mt-6 mb-6 bg-secondary p-4 md:mx-10 md:rounded-xl ">
      <h2 className="text-center text-secondary-content font-semibold text-2xl sm:text-3xl lg:text-4xl ">
        {text}
      </h2>
    </header>
  );
}

function Hero({}: {}) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="flex flex-col items-center">
          <h1 className="max-w-2xl text-5xl sm:text-7xl lg:text-8xl font-bold">
            My
            <br />
            <div className="h-12 sm:h-[4.5rem] lg:h-24">
              <Typewriter
                options={{
                  wrapperClassName: "text-primary",
                  strings: ["Web Dev", "Learning", "Exploring", "Programming"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <span>Adventure</span>
          </h1>
          <p className="max-w-xl py-6 sm:text-xl lg:text-2xl mt-2">
            {
              "Let's create awesome websites together! I'll share the courses and projects I'm working on. I hope it inspires other beginners while showing my growth. Let's explore web development together!"
            }
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}

interface StepProps {
  name: string;
  description: string;
  alignment: string;
  disabled?: boolean;
  type: string;
  item: Item;
  statementUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  tutorialUrl?: string;
  imgSource?: string;
}

function Step({ alignment, disabled = false, item }: StepProps) {
  let icon = <></>;

  if (item.type == "course") {
    icon = <Book size={32} />;
  } else if (item.type == "start") {
    icon = <Star size={32} />;
  } else {
    icon = <Cat size={32} />;
  }

  return (
    <div className={cn("relative", alignment)}>
      <div className="flex flex-col items-center">
        <button
          className={cn(
            "mb-2 btn btn-circle  btn-lg border-4 border-primary",
            disabled && "btn-disabled border-primary/20"
          )}
          onClick={() =>
            (
              document.getElementById(item.name) as HTMLDialogElement
            ).showModal()
          }
        >
          {icon}
        </button>
        <p
          className={cn(
            " text-lg font-semibold  sm:text-xl",
            disabled && "text-base-content/20"
          )}
        >
          {item.name}
        </p>
        <dialog id={item.name} className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">{item.name}</h3>

            <img src={item.imgSource} alt="" />
            <p className="py-4">{item.description}</p>
            <div className=" flex w-full justify-between ">
              <MyButton url={item.statementUrl} name="Statement" />
              <MyButton url={item.githubUrl} name="GitHub" />
              <MyButton url={item.demoUrl} name="Demo" />
              <MyButton url={item.tutorialUrl} name="Tutorial" />
            </div>

            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
}
