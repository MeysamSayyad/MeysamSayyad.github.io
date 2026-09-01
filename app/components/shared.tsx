import Image from "next/image";
import { resume, type ResumeSection, sectionLabels } from "../resume-data";

export type ActivityPanel = "explorer" | "search" | "source-control";
export type Menu = "account" | "settings" | null;
export type Theme = "dark" | "light" | "contrast";
export type MobileTool = "explorer" | "search" | "source-control" | "run" | "extensions" | "custom-editor";
export type TerminalEntry = { command?: string; output: string; tone?: "error" | "success" };

export const asset = (name: string) => `/figma/${name}`;

export const activityPanels: ActivityPanel[] = ["explorer", "search", "source-control"];
export const activityLabels: Record<ActivityPanel, string> = {
  explorer: "Explorer",
  search: "Search",
  "source-control": "Source Control",
};

export const themes: { id: Theme; label: string }[] = [
  { id: "dark", label: "Figma Dark" },
  { id: "light", label: "Light" },
  { id: "contrast", label: "High Contrast" },
];

export const mobileTools: { id: MobileTool; label: string; icon: string }[] = [
  { id: "explorer", label: "Explorer", icon: "explorer.svg" },
  { id: "search", label: "Search", icon: "files.svg" },
  { id: "source-control", label: "Source Control", icon: "source-control.svg" },
  { id: "run", label: "Run", icon: "run.svg" },
  { id: "extensions", label: "Extensions", icon: "extensions.svg" },
  { id: "custom-editor", label: "Custom Editor", icon: "custom-editor.svg" },
];

export const terminalCommands: { name: ResumeSection; description: string }[] = [
  { name: "resume", description: "View the introduction and current availability" },
  { name: "experience", description: "View professional experience" },
  { name: "projects", description: "View selected projects" },
  { name: "skills", description: "View technical skills" },
  { name: "certificates", description: "View certificates" },
  { name: "education", description: "View education" },
  { name: "contact", description: "View contact links" },
];

export function Icon({ name, size = 16 }: { name: string; size?: number }) {
  return <Image src={asset(name)} alt="" width={size} height={size} aria-hidden="true" />;
}

export function terminalHelp() {
  return [
    "Available resume commands:",
    ...terminalCommands.map(({ name, description }) => `  npm run ${name}  -  ${description}`),
    "  npm run help    -  Show this help",
    "  help            -  Show this help",
  ].join("\n");
}

export function parseTerminalCommand(rawCommand: string): { section?: ResumeSection; output: string; tone?: TerminalEntry["tone"] } {
  const command = rawCommand.trim().replace(/\s+/g, " ");
  if (!command) return { output: "Enter a command, or type help to see available commands.", tone: "error" };
  if (command === "help" || command === "npm run help") return { output: terminalHelp() };
  const match = command.match(/^npm run (.+)$/);
  const section = match && terminalCommands.find((item) => item.name === match[1])?.name;
  if (section) return { section, output: `Opening ${sectionLabels[section]}...`, tone: "success" };
  return { output: `Command not found: ${command}\nType help to see available commands.`, tone: "error" };
}

export function getFileIconName(name: string) {
  const normalized = name.toLowerCase().trim();
  const extension = normalized.includes(".") ? normalized.split(".").pop() ?? "" : "";

  const iconByExtension: Record<string, string> = {
    ts: "typescript.svg",
    tsx: "typescript.svg",
    js: "code.svg",
    jsx: "code.svg",
    json: "code.svg",
    yaml: "code.svg",
    yml: "code.svg",
    md: "markdown.svg",
    mdx: "files.svg",
    txt: "files.svg",
    rst: "files.svg",
    png: "custom-editor.svg",
    jpg: "custom-editor.svg",
    jpeg: "custom-editor.svg",
    gif: "custom-editor.svg",
    webp: "custom-editor.svg",
    svg: "custom-editor.svg",
  };

  return iconByExtension[extension] ?? "code.svg";
}

export function getSectionFileIcon(section: ResumeSection) {
  const sectionByExtension: Record<ResumeSection, string> = {
    resume: "README.md",
    experience: "experience.ts",
    projects: "projects.ts",
    skills: "skills.json",
    certificates: "certificates.ts",
    education: "education.md",
    contact: "contact.ts",
  };

  return getFileIconName(sectionByExtension[section]);
}

export const activityIcons = ["explorer.svg", "files.svg", "source-control.svg"];

export function getGithubLink() {
  return resume.links.find((link) => link.label === "github");
}
