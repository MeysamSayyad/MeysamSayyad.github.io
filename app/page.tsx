"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { resume, ResumeSection, sectionLabels, sectionOrder } from "./resume-data";

const asset = (name: string) => `/figma/${name}`;
type ActivityPanel = "explorer" | "search" | "source-control";
const activityPanels: ActivityPanel[] = ["explorer", "search", "source-control"];
const activityLabels: Record<ActivityPanel, string> = { explorer: "Explorer", search: "Search", "source-control": "Source Control" };
type Menu = "account" | "settings" | null;
type Theme = "dark" | "light" | "contrast";
const themes: { id: Theme; label: string }[] = [{ id: "dark", label: "Figma Dark" }, { id: "light", label: "Light" }, { id: "contrast", label: "High Contrast" }];
type TerminalEntry = { command?: string; output: string; tone?: "error" | "success" };
const terminalCommands: { name: ResumeSection; description: string }[] = [
  { name: "resume", description: "View the introduction and current availability" },
  { name: "experience", description: "View professional experience" },
  { name: "projects", description: "View selected projects" },
  { name: "skills", description: "View technical skills" },
  { name: "certificates", description: "View certificates" },
  { name: "education", description: "View education" },
  { name: "contact", description: "View contact links" },
];

function terminalHelp() {
  return ["Available resume commands:", ...terminalCommands.map(({ name, description }) => `  npm run ${name}  -  ${description}`), "  npm run help    -  Show this help", "  help            -  Show this help"].join("\n");
}

function parseTerminalCommand(rawCommand: string): { section?: ResumeSection; output: string; tone?: TerminalEntry["tone"] } {
  const command = rawCommand.trim().replace(/\s+/g, " ");
  if (!command) return { output: "Enter a command, or type help to see available commands.", tone: "error" };
  if (command === "help" || command === "npm run help") return { output: terminalHelp() };
  const match = command.match(/^npm run (.+)$/);
  const section = match && terminalCommands.find((item) => item.name === match[1])?.name;
  if (section) return { section, output: `Opening ${sectionLabels[section]}...`, tone: "success" };
  return { output: `Command not found: ${command}\nType help to see available commands.`, tone: "error" };
}

function Icon({ name, size = 16 }: { name: string; size?: number }) {
  return <Image src={asset(name)} alt="" width={size} height={size} aria-hidden="true" />;
}

function TopBar() {
  return <header className="top-bar" aria-label="Window controls">
    <Image src={asset("window-buttons.svg")} alt="" width={45} height={11} aria-hidden="true" />
    <div className="top-center"><Image src={asset("back-forward.svg")} alt="" width={32} height={9} aria-hidden="true" /><div className="search-box"><Icon name="search-icon.png" size={12} /><span>meysam-sayyad-resume</span></div></div>
    <div className="top-actions" aria-hidden="true"><span className="grid-mark" /><Icon name="left-bar-icon.png" size={12} /><Icon name="sidebar-icon.png" size={12} /></div>
  </header>;
}

const activityIcons = ["explorer.svg", "files.svg", "source-control.svg", "run.svg", "extensions.svg", "custom-editor.svg"];
type MobileTool = "explorer" | "search" | "source-control" | "run" | "extensions" | "custom-editor";
const mobileTools: { id: MobileTool; label: string; icon: string }[] = [{ id: "explorer", label: "Explorer", icon: "explorer.svg" }, { id: "search", label: "Search", icon: "files.svg" }, { id: "source-control", label: "Source Control", icon: "source-control.svg" }, { id: "run", label: "Run", icon: "run.svg" }, { id: "extensions", label: "Extensions", icon: "extensions.svg" }, { id: "custom-editor", label: "Custom Editor", icon: "custom-editor.svg" }];

function ActivityBar({ activePanel, onPanelChange, menu, onMenuChange, theme, onThemeChange, menuRef }: { activePanel: ActivityPanel; onPanelChange: (panel: ActivityPanel) => void; menu: Menu; onMenuChange: (menu: Menu) => void; theme: Theme; onThemeChange: (theme: Theme) => void; menuRef: React.RefObject<HTMLDivElement | null> }) {
  const githubLink = resume.links.find((link) => link.label === "github");
  return <nav className="activity-bar" aria-label="Activity bar"><div className="activity-top">{activityIcons.map((icon, index) => { const panel = activityPanels[index]; return <button className={`activity-button ${panel && activePanel === panel ? "is-active" : ""}`} key={icon} aria-label={panel ? activityLabels[panel] : `Activity ${index + 1}`} aria-pressed={panel ? activePanel === panel : undefined} onClick={() => panel && onPanelChange(panel)}><Icon name={icon} size={22} />{(index === 2 || index === 4) && <span className="badge">4</span>}</button>; })}</div><div className="activity-bottom" ref={menuRef}><button className={`activity-button ${menu === "account" ? "is-active" : ""}`} aria-label="Account" aria-expanded={menu === "account"} aria-controls="account-menu" onClick={() => onMenuChange(menu === "account" ? null : "account")}><Icon name="account.svg" size={18} /></button>{menu === "account" && <div className="activity-menu account-menu" id="account-menu" role="menu" aria-label="Account menu"><strong>{resume.name}</strong><span>{resume.role}</span>{githubLink && <a href={githubLink.href} target="_blank" rel="noreferrer" role="menuitem"><Icon name="source-control-status.svg" size={11} /> {githubLink.value}</a>}</div>}<button className={`activity-button ${menu === "settings" ? "is-active" : ""}`} aria-label="Settings" aria-expanded={menu === "settings"} aria-controls="settings-menu" onClick={() => onMenuChange(menu === "settings" ? null : "settings")}><Icon name="settings.svg" size={18} /></button>{menu === "settings" && <div className="activity-menu settings-menu" id="settings-menu" role="menu" aria-label="Theme menu"><strong>Theme</strong>{themes.map((option) => <button key={option.id} role="menuitemradio" aria-checked={theme === option.id} className={theme === option.id ? "is-selected" : ""} onClick={() => onThemeChange(option.id)}><span className={`theme-swatch theme-${option.id}`} />{option.label}</button>)}</div>}</div></nav>;
}

function Explorer({ active, onSelect }: { active: ResumeSection; onSelect: (section: ResumeSection) => void }) {
  return <aside className="explorer" aria-label="Resume explorer"><div className="explorer-heading"><span>EXPLORER</span><Icon name="ellipsis.svg" size={12} /></div><div className="workspace"><div className="workspace-title"><Icon name="chevron-down.svg" size={10} /><strong>MEYSAM-SAYYAD</strong></div><div className="file-tree">{sectionOrder.map((section) => <button key={section} className={`file-row ${active === section ? "is-selected" : ""}`} onClick={() => onSelect(section)} aria-current={active === section ? "page" : undefined}><Icon name={section === "resume" ? "chevron-down.svg" : "chevron-right.svg"} size={8} /><span>{sectionLabels[section]}</span></button>)}</div></div><div className="explorer-bottom"><button><Icon name="chevron-right.svg" size={8} /> OUTLINE</button><button><Icon name="chevron-right.svg" size={8} /> TIMELINE</button></div></aside>;
}

function SearchPanel({ onSelect, inputId = "resume-search" }: { onSelect: (section: ResumeSection) => void; inputId?: string }) {
  const [query, setQuery] = useState("");
  const searchable = sectionOrder.map((section) => ({ section, label: sectionLabels[section], text: `${sectionLabels[section]} ${JSON.stringify(section === "resume" ? resume : section === "experience" ? resume.experience : section === "projects" ? resume.projects : section === "skills" ? resume.skills : section === "certificates" ? resume.certificates : section === "education" ? resume.education : resume.links)}` }));
  const results = searchable.filter((item) => !query.trim() || item.text.toLowerCase().includes(query.trim().toLowerCase()));
  return <aside className="explorer" aria-label="Search resume"><div className="explorer-heading"><span>SEARCH</span><Icon name="ellipsis.svg" size={12} /></div><div className="panel-content"><label className="search-label" htmlFor={inputId}>Search resume</label><input id={inputId} className="panel-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search" />{results.length ? <div className="search-results">{results.map((result) => <button className="search-result" key={result.section} onClick={() => onSelect(result.section)}><Icon name="typescript.svg" size={11} /><span>{result.label}</span></button>)}</div> : <p className="empty-state">No results found.</p>}</div></aside>;
}

function SourceControlPanel() {
  const githubLink = resume.links.find((link) => link.label === "github");
  return <aside className="explorer" aria-label="Source Control"><div className="explorer-heading"><span>SOURCE CONTROL</span><Icon name="ellipsis.svg" size={12} /></div><div className="panel-content source-panel"><p className="panel-kicker">CHANGES</p><p className="source-status"><strong>main*</strong><span>Working tree clean</span></p><p className="panel-kicker">REPOSITORY</p>{githubLink && <a className="source-github" href={githubLink.href} target="_blank" rel="noreferrer"><Icon name="source-control-status.svg" size={11} /><span>{githubLink.value}</span></a>}</div></aside>;
}

function Sidebar({ panel, active, onSelect }: { panel: ActivityPanel; active: ResumeSection; onSelect: (section: ResumeSection) => void }) {
  if (panel === "search") return <SearchPanel onSelect={onSelect} />;
  if (panel === "source-control") return <SourceControlPanel />;
  return <Explorer active={active} onSelect={onSelect} />;
}

function MobileActivityBar({ drawer, onToolChange }: { drawer: MobileTool | null; onToolChange: (tool: MobileTool, button: HTMLButtonElement) => void }) {
  return <nav className="mobile-activity-bar" aria-label="Mobile activity bar">{mobileTools.map((tool) => <button key={tool.id} className={`activity-button ${drawer === tool.id ? "is-active" : ""}`} aria-label={tool.label} aria-expanded={drawer === tool.id} onClick={(event) => onToolChange(tool.id, event.currentTarget)}><Icon name={tool.icon} size={22} />{tool.id === "source-control" || tool.id === "extensions" ? <span className="badge">4</span> : null}</button>)}</nav>;
}

function ToolPlaceholder({ tool }: { tool: MobileTool }) {
  const label = mobileTools.find((item) => item.id === tool)?.label ?? "Tool";
  return <div className="tool-placeholder" role="status"><Icon name={mobileTools.find((item) => item.id === tool)?.icon ?? "custom-editor.svg"} size={24} /><strong>{label}</strong><span>{label} is available from this mobile drawer.</span></div>;
}

function MobileDrawer({ tool, active, onSelect, onClose, closeRef }: { tool: MobileTool | null; active: ResumeSection; onSelect: (section: ResumeSection) => void; onClose: () => void; closeRef: React.RefObject<HTMLButtonElement | null> }) {
  if (!tool) return null;
  const label = mobileTools.find((item) => item.id === tool)?.label ?? "Tool";
  return <div className="mobile-drawer-shell"><button className="drawer-scrim" aria-label="Close mobile drawer" onClick={onClose} /><aside className="mobile-drawer" aria-label={`${label} drawer`}><div className="drawer-heading"><strong>{label}</strong><button ref={closeRef} className="drawer-close" aria-label={`Close ${label} drawer`} onClick={onClose}><Icon name="close.svg" size={12} /></button></div>{tool === "explorer" && <Explorer active={active} onSelect={onSelect} />}{tool === "search" && <SearchPanel inputId="mobile-resume-search" onSelect={onSelect} />}{tool === "source-control" && <SourceControlPanel />}{tool !== "explorer" && tool !== "search" && tool !== "source-control" && <ToolPlaceholder tool={tool} />}</aside></div>;
}

function Tabs({ active, onSelect }: { active: ResumeSection; onSelect: (section: ResumeSection) => void }) {
  return <div className="tab-manager"><div className="tabs" role="tablist" aria-label="Open resume files">{sectionOrder.slice(0, 5).map((section) => <button key={section} className={`tab ${active === section ? "is-active" : ""}`} role="tab" aria-selected={active === section} onClick={() => onSelect(section)}><Icon name="typescript.svg" size={11} /><span>{sectionLabels[section]}</span>{active === section && <Icon name="close.svg" size={9} />}</button>)}</div><div className="tab-actions" aria-label="Editor actions"><Icon name="compare.svg" size={14} /><Icon name="split-view.svg" size={13} /><Icon name="ellipsis.svg" size={12} /></div></div>;
}

function documentLines(active: ResumeSection) {
  if (active === "resume") return [<span key="hello"><span className="comment">{"// Hello, I am"}</span> <strong>{resume.name}</strong></span>, <span key="role"><span className="keyword">const</span> <span className="property">role</span> = <span className="string">&quot;{resume.role}&quot;</span>;</span>, "", <span key="export"><span className="keyword">export default</span> <span className="function">resume</span>;</span>, "", <span key="about" className="comment">{"// About"}</span>, resume.summary, "", <span key="currently"><span className="comment">{"// Currently"}</span> {resume.availability}</span>];
  if (active === "experience") return resume.experience.flatMap((item, itemIndex) => [<span key={`${item.company}-name`}><span className="keyword">const</span> <span className="property">{item.company.toLowerCase().replaceAll(" ", "_")}</span> = &#123;</span>, <span key={`${item.company}-role`} className="indent"><span className="property">role</span>: <span className="string">&quot;{item.role}&quot;</span>,</span>, <span key={`${item.company}-period`} className="indent"><span className="property">period</span>: <span className="string">&quot;{item.period}&quot;</span>,</span>, <span key={`${item.company}-summary`} className="indent">{item.summary}</span>, ...item.highlights.map((highlight, index) => <span key={`${item.company}-highlight-${index}`} className="indent"><span className="comment">{"//"}</span> {highlight}</span>), item.link ? <span key={`${item.company}-link`} className="indent"><span className="property">website</span>: <a className="document-link" href={item.link} target="_blank" rel="noreferrer">{item.link}</a></span> : "", "", <span key={`${item.company}-close`}>&#125;;</span>, itemIndex === 0 ? "" : ""]);
  if (active === "projects") return resume.projects.flatMap((project) => [<span key={`${project.name}-name`}><span className="keyword">export const</span> <span className="property">{project.name.toLowerCase().replaceAll(" ", "_")}</span> = <span className="string">&quot;{project.description}&quot;</span>;</span>, ...project.stack.map((technology) => <span key={`${project.name}-${technology}`} className="indent"><span className="comment">{"// Tech:"}</span> {technology}</span>), project.source ? <span key={`${project.name}-source`}><span className="property">source</span>: <a className="document-link" href={project.source} target="_blank" rel="noreferrer">{project.source}</a></span> : "", project.link ? <span key={`${project.name}-link`}><span className="property">website</span>: <a className="document-link" href={project.link} target="_blank" rel="noreferrer">{project.link}</a></span> : "", ""]);
  if (active === "skills") return [<span key="skills-start"><span className="keyword">export default</span> [</span>, ...resume.skills.map((skill) => <span key={skill} className="string">&quot;{skill}&quot;,</span>), <span key="skills-end">&#93;;</span>];
  if (active === "certificates") return resume.certificates.flatMap((certificate) => [<span key={`${certificate.name}-name`}><span className="keyword">const</span> <span className="property">certificate</span> = <span className="string">&quot;{certificate.name}&quot;</span>;</span>, ...certificate.highlights.map((highlight, index) => <span key={`${certificate.name}-${index}`} className="indent"><span className="comment">{"//"}</span> {highlight}</span>),certificate.link ? <span key={`${certificate.name}-link`}><span className="property">Link</span>: <a className="document-link" href={certificate.link} target="_blank" rel="noreferrer">{certificate.link}</a></span> : ""]);
  if (active === "education") return resume.education.flatMap((item) => [<span key={`${item.school}-name`}><span className="keyword">const</span> <span className="property">education</span> = <span className="string">&quot;{item.school}&quot;</span>;</span>, <span key={`${item.school}-program`}>{item.program} <span className="comment">{"// "}{item.period}</span></span>, <span key={`${item.school}-details`} className="comment">{"// "}{item.details}</span> ]);
  return [<span key="contact"><span className="keyword">export const</span> <span className="property">contact</span> = <span className="string">&quot;{resume.email}&quot;</span>;</span>, "", ...resume.links.map((link) => <span key={link.label}><span className="property">{link.label}</span>: <a className="document-link" href={link.href} target="_blank" rel="noreferrer">{link.value}</a>,</span>)];
}

function ResumeDocument({ active }: { active: ResumeSection }) {
  const lines = documentLines(active);
  return <article className="editor-document" aria-labelledby="document-title"><div className="line-numbers" aria-hidden="true">{lines.map((_, index) => <span key={index}>{index + 1}</span>)}</div><div className="code-content"><h1 id="document-title" className="sr-only">{sectionLabels[active]}</h1>{lines.map((line, index) => <p key={index} className={line === "" ? "blank-line" : undefined}>{line}</p>)}</div></article>;
}

function StatusBar() {
  const githubLink = resume.links.find((link) => link.label === "github");
  return <footer className="status-bar"><div className="status-left"><Icon name="remote-window.svg" size={25} />{githubLink && <a className="github-status-link" href={githubLink.href} target="_blank" rel="noreferrer" aria-label={`${resume.name} on GitHub`}><Icon name="source-control-status.svg" size={11} /> <span>main*</span><span className="github-link-label">{githubLink.value}</span></a>}<span><Icon name="error.svg" size={11} /> 0</span><span><Icon name="warning.svg" size={11} /> 0</span></div><div className="status-right"><span>Ln 1, Col 1</span><span>Spaces: 4</span><span>UTF-8</span><span>LF</span><span><Icon name="code.svg" size={10} /> TypeScript</span><Icon name="bell.svg" size={10} /></div></footer>;
}

export default function Home() {
  const [active, setActive] = useState<ResumeSection>("resume");
  const [activePanel, setActivePanel] = useState<ActivityPanel>("explorer");
  const [mobileDrawer, setMobileDrawer] = useState<MobileTool | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [menu, setMenu] = useState<Menu>(null);
  const [theme, setTheme] = useState<Theme>(() => {
      if (typeof window === "undefined") return "dark"; 
    try {
      const stored = window.localStorage.getItem("resume-theme") as Theme | null;
      return stored && themes.some((option) => option.id === stored) ? stored : "dark";
    } catch {
      return "dark";
    }
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileOpenerRef = useRef<HTMLButtonElement>(null);
  const drawerCloseRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (mobileDrawer) drawerCloseRef.current?.focus(); }, [mobileDrawer]);
  useEffect(() => { const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { if (mobileDrawer) { setMobileDrawer(null); mobileOpenerRef.current?.focus(); } else setMenu(null); return; } if (!(event.ctrlKey || event.metaKey) || !event.shiftKey || event.key.toLowerCase() !== "e") return; if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return; event.preventDefault(); const index = activityPanels.indexOf(activePanel); setActivePanel(activityPanels[(index + 1) % activityPanels.length]); }; const handlePointerDown = (event: PointerEvent) => { if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenu(null); }; window.addEventListener("keydown", handleKeyDown); window.addEventListener("pointerdown", handlePointerDown); return () => { window.removeEventListener("keydown", handleKeyDown); window.removeEventListener("pointerdown", handlePointerDown); }; }, [activePanel, mobileDrawer]);
  const changeMobileTool = (tool: MobileTool, button: HTMLButtonElement) => { mobileOpenerRef.current = button; setMobileDrawer((current) => current === tool ? null : tool); };
  const closeMobileDrawer = () => { setMobileDrawer(null); mobileOpenerRef.current?.focus(); };
  const changeTheme = (nextTheme: Theme) => { setTheme(nextTheme); try { window.localStorage.setItem("resume-theme", nextTheme); } catch { /* storage is optional */ } setMenu(null); };
  return <main className="page-stage" data-theme={theme} suppressHydrationWarning><div className="vscode-window"><TopBar /><div className="window-middle"><ActivityBar activePanel={activePanel} onPanelChange={setActivePanel} menu={menu} onMenuChange={setMenu} theme={theme} onThemeChange={changeTheme} menuRef={menuRef} /><MobileActivityBar drawer={mobileDrawer} onToolChange={changeMobileTool} /><Sidebar panel={activePanel} active={active} onSelect={setActive} /><section className="editor-panel" aria-label="Resume editor"><Tabs active={active} onSelect={setActive} /><ResumeDocument active={active} /><Terminal onSelect={setActive} open={terminalOpen} onToggle={() => setTerminalOpen((current) => !current)} /></section><MobileDrawer tool={mobileDrawer} active={active} onSelect={setActive} onClose={closeMobileDrawer} closeRef={drawerCloseRef} /></div><StatusBar /></div></main>;
}

function Terminal({ onSelect, open, onToggle }: { onSelect: (section: ResumeSection) => void; open: boolean; onToggle: () => void }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalEntry[]>([{ output: "Resume terminal ready. Type help to see available commands." }]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);
  useEffect(() => {
    if (open && outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [history, open]);

  const submit = () => {
    const result = parseTerminalCommand(input);
    if (result.section) onSelect(result.section);
    setHistory((current) => [...current, { command: input, output: result.output, tone: result.tone }]);
    if (input.trim()) setCommandHistory((current) => [...current, input.trim().replace(/\s+/g, " ")]);
    setHistoryIndex(-1);
    setInput("");
  };
  const navigateHistory = (direction: 1 | -1) => {
    if (!commandHistory.length) return;
    const nextIndex = direction === -1
      ? historyIndex === -1 ? commandHistory.length - 1 : Math.max(-1, historyIndex - 1)
      : historyIndex === -1 ? -1 : Math.min(commandHistory.length - 1, historyIndex + 1);
    setHistoryIndex(nextIndex);
    setInput(nextIndex === -1 ? "" : commandHistory[nextIndex]);
  };

  return <div className={`terminal ${open ? "is-open" : ""}`}>
    <button className="terminal-toggle" aria-expanded={open} aria-controls="resume-terminal" onClick={onToggle}><Icon name="custom-editor.svg" size={13} /> Terminal</button>
    {open && <section id="resume-terminal" className="terminal-panel" aria-label="Resume terminal">
      <div className="terminal-heading"><strong>TERMINAL</strong><span>in-app resume shell</span></div>
      <div ref={outputRef} className="terminal-output" role="log" aria-live="polite">{history.map((entry, index) => <div className="terminal-entry" key={`${entry.command ?? "ready"}-${index}`}>{entry.command !== undefined && <div><span className="terminal-prompt">$</span> {entry.command}</div>}<div className={entry.tone ? `terminal-${entry.tone}` : ""}>{entry.output}</div></div>)}</div>
      <form className="terminal-form" onSubmit={(event) => { event.preventDefault(); submit(); }}><span className="terminal-prompt">$</span><input ref={inputRef} aria-label="Terminal command" value={input} onChange={(event) => { setInput(event.target.value); setHistoryIndex(-1); }} onKeyDown={(event) => { if (event.key === "ArrowUp") { event.preventDefault(); navigateHistory(-1); } if (event.key === "ArrowDown") { event.preventDefault(); navigateHistory(1); } }} placeholder="npm run help" autoComplete="off" /></form>
    </section>}
  </div>;
}