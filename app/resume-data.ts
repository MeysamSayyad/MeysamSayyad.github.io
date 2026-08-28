export type ResumeSection = "resume" | "experience" | "projects" | "skills" | "certificates" | "education" | "contact";

export type Experience = { role: string; company: string; period: string; summary: string; highlights: string[]; link?: string };
export type Project = { name: string; description: string; stack: string[]; source?: string; link?: string };
export type ResumeData = {
  name: string;
  role: string;
  location: string;
  availability: string;
  summary: string;
  email: string;
  links: { label: string; value: string; href: string }[];
  experience: Experience[];
  projects: Project[];
  skills: string[];
  certificates: { name: string; highlights: string[] ,link?: string}[];
  education: { school: string; program: string; period: string; details: string;  }[];
};

export const resume: ResumeData = {
  name: "Meysam Sayyad Talayi",
  role: "Front End Developer",
  location: "Iran, Bandar-e-Anzali",
  availability: "Front-end developer with 3 years of experience",
  summary: "Front-end developer with 3 years of experience and passionate about continuous improvement and skill development in the field. Proficient in HTML/CSS, React, Redux, Next.js, and TypeScript.",
  email: "meysamsayyadtala@gmail.com",
  links: [
    { label: "github", value: "github.com/MeysamSayyad", href: "https://github.com/MeysamSayyad" },
    { label: "linkedin", value: "linkedin.com/in/meysam-sayyad", href: "https://linkedin.com/in/meysam-sayyad" },
    { label: "phone", value: "+989022563932", href: "tel:+989022563932" },
  ],
  experience: [
    { role: "Front End Developer", company: "Amin Daghigh Samaneh Company", period: "12/2023 - Present", summary: "Developing custom websites and dashboards for known companies such as Day Insurance and Tehran Traffic Control Company.", highlights: ["Developing custom website and dashboards for known companies such as Day Insurance, Tehran Traffic control company.", "Utilizing Next.js, TanStack Query, and Material UI."], link: "https://amindaghigh.ir" },
    { role: "Front End Developer", company: "Pouletta Company", period: "10/2023 - 11/2024", summary: "Built monitoring dashboards for aviculture management.", highlights: ["Implemented monitoring dashboards for aviculture management.", "Using React, Chart.js, and AgCharts for creating desired monitoring options.", "Using Material UI and Tailwind for better design."], link: "https://pouletta.ir" },
  ],
  projects: [
    { name: "Quera Task-Manager", description: "Worked as a front-end developer on a React-based task management application that included creating workspaces, projects, boards, and tasks, as well as sharing them with other users.", stack: ["Tailwind", "React", "Vite", "React Hook Form", "Axios"], source: "https://github.com/Quera-Spring-Front-end-Bootcamp/Group2-406.git" },
    { name: "Rakiano Website", description: "Contributed to a group project focused on revamping the old Rakiano website into a fully responsive online shop for mobiles, laptops, accessories, and more.", stack: ["Next.js 14", "TypeScript", "Tailwind", "Material UI", "Axios"], source: "https://rakiano.com" },
    { name: "Store It - Google Drive Clone", description: "A cloud storage web application inspired by Google Drive, built for seamless file management.", stack: ["Next.js 15", "Tailwind CSS", "ShadCN", "Appwrite"], source: "https://store-it-wine-seven.vercel.app/sign-in",link:"https://github.com/MeysamSayyad/store_it" },
    { name: "World Cup Ticket Booking Website - FFIRI", description: "Worked as a front-end developer for a ticket booking website requested by the Football Federation of Islamic Republic of Iran for the 2026 World Cup.", stack: ["Next.js 16", "Tailwind CSS", "Server Actions", "Custom Components"], link: "https://store-it-wine-seven.vercel.app/sign-in" },
  ],
  skills: ["JavaScript", "HTML & CSS", "React", "Next.js 14 & 15", "ApexCharts", "Chart.js", "Redux Toolkit", "Material UI", "Ant Design", "Tailwind CSS", "TypeScript", "Axios", "Git", "Restful API", "Socket.io", "Creativity", "Adaptability", "Time Management"],
  certificates: [{ name: "Quera Front-End Internship Certificate", highlights: ["Achieved perfect score upon finishing the internship.", "Learning Redux, Next.js, and TypeScript.", "Working with Tailwind CSS, Git, and React on large-scale projects.", "Using Material UI for style and React Query for API requests.", "Doing teamwork to acquire better soft skills."], link:"https://quera.org/certificate/oWqPn5O6/"}],
  education: [{ school: "Shahrood University of Technology", program: "Masters of Science in Computer Engineering - Software Engineering", period: "2025 - Present", details: "Expected Graduation: 2026" }],
};

export const sectionLabels: Record<ResumeSection, string> = { resume: "README.md", experience: "experience.ts", projects: "projects.ts", skills: "skills.json", certificates: "certificates.md", education: "education.md", contact: "contact.ts" };
export const sectionOrder: ResumeSection[] = ["resume", "experience", "projects", "skills", "certificates", "education", "contact"];