import { useState } from "react";
import { resume, sectionLabels, sectionOrder, type ResumeSection } from "../resume-data";
import { Icon, getSectionFileIcon, mobileTools, type MobileTool } from "./shared";

export function Explorer({ active, onSelect }: { active: ResumeSection; onSelect: (section: ResumeSection) => void }) {
  return (
    <aside className="explorer" aria-label="Resume explorer">
      <div className="explorer-heading">
        <span>EXPLORER</span>
        <Icon name="ellipsis.svg" size={12} />
      </div>
      <div className="workspace">
        <div className="workspace-title">
          <Icon name="chevron-down.svg" size={10} />
          <strong>MEYSAM-SAYYAD</strong>
        </div>
        <div className="file-tree">
          {sectionOrder.map((section) => (
            <button key={section} className={`  file-row ${active === section ? "is-selected" : ""}`} onClick={() => onSelect(section)} aria-current={active === section ? "page" : undefined}>
              <Icon name={getSectionFileIcon(section)} size={11} />
              <span>{sectionLabels[section]}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="explorer-bottom">
        <button>
          <Icon name="chevron-right.svg" size={8} /> OUTLINE
        </button>
        <button>
          <Icon name="chevron-right.svg" size={8} /> TIMELINE
        </button>
      </div>
    </aside>
  );
}

export function SearchPanel({ onSelect, inputId = "resume-search" }: { onSelect: (section: ResumeSection) => void; inputId?: string }) {
  const [query, setQuery] = useState("");
  const searchable = sectionOrder.map((section) => ({
    section,
    label: sectionLabels[section],
    text: `${sectionLabels[section]} ${JSON.stringify(section === "resume" ? resume : section === "experience" ? resume.experience : section === "projects" ? resume.projects : section === "skills" ? resume.skills : section === "certificates" ? resume.certificates : section === "education" ? resume.education : resume.links)}`,
  }));
  const results = searchable.filter((item) => !query.trim() || item.text.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <aside className="explorer" aria-label="Search resume">
      <div className="explorer-heading">
        <span>SEARCH</span>
        <Icon name="ellipsis.svg" size={12} />
      </div>
      <div className="panel-content">
        <label className="search-label" htmlFor={inputId}>Search resume</label>
        <input id={inputId} className="panel-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search" />
        {results.length ? (
          <div className="search-results">
            {results.map((result) => (
              <button className="search-result" key={result.section} onClick={() => onSelect(result.section)}>
                <Icon name={getSectionFileIcon(result.section)} size={11} />
                <span>{result.label}</span>
              </button>
            ))}
          </div>
        ) : (
          <p className="empty-state">No results found.</p>
        )}
      </div>
    </aside>
  );
}

export function SourceControlPanel() {
  const githubLink = resume.links.find((link) => link.label === "github");

  return (
    <aside className="explorer" aria-label="Source Control">
      <div className="explorer-heading">
        <span>SOURCE CONTROL</span>
        <Icon name="ellipsis.svg" size={12} />
      </div>
      <div className="panel-content source-panel">
        <p className="panel-kicker">CHANGES</p>
        <p className="source-status">
          <strong>main*</strong>
          <span>Working tree clean</span>
        </p>
        <p className="panel-kicker">REPOSITORY</p>
        {githubLink && (
          <a className="source-github" href={githubLink.href} target="_blank" rel="noreferrer">
            <Icon name="source-control-status.svg" size={11} />
            <span>{githubLink.value}</span>
          </a>
        )}
      </div>
    </aside>
  );
}

export function Sidebar({ panel, active, onSelect }: { panel: "explorer" | "search" | "source-control"; active: ResumeSection; onSelect: (section: ResumeSection) => void }) {
  if (panel === "search") return <SearchPanel onSelect={onSelect} />;
  if (panel === "source-control") return <SourceControlPanel />;
  return <Explorer active={active} onSelect={onSelect} />;
}

export function MobileActivityBar({ drawer, onToolChange }: { drawer: "explorer" | "search" | "source-control" | "run" | "extensions" | "custom-editor" | null; onToolChange: (tool: MobileTool, button: HTMLButtonElement) => void }) {
  return (
    <nav className="mobile-activity-bar" aria-label="Mobile activity bar">
      {mobileTools.map((tool) => (
        <button
          key={tool.id}
          className={`activity-button ${drawer === tool.id ? "is-active" : ""}`}
          aria-label={tool.label}
          aria-expanded={drawer === tool.id}
          onClick={(event) => onToolChange(tool.id, event.currentTarget)}
        >
          <Icon name={tool.icon} size={22} />
          {tool.id === "source-control" || tool.id === "extensions" ? <span className="badge">4</span> : null}
        </button>
      ))}
    </nav>
  );
}

export function ToolPlaceholder({ tool }: { tool: MobileTool }) {
  const label = mobileTools.find((item) => item.id === tool)?.label ?? "Tool";
  return (
    <div className="tool-placeholder" role="status">
      <Icon name={mobileTools.find((item) => item.id === tool)?.icon ?? "custom-editor.svg"} size={24} />
      <strong>{label}</strong>
      <span>{label} is available from this mobile drawer.</span>
    </div>
  );
}

export function MobileDrawer({
  tool,
  active,
  onSelect,
  onClose,
  closeRef,
}: {
  tool: MobileTool | null;
  active: ResumeSection;
  onSelect: (section: ResumeSection) => void;
  onClose: () => void;
  closeRef: React.RefObject<HTMLButtonElement | null>;
}) {
  if (!tool) return null;

  const label = mobileTools.find((item) => item.id === tool)?.label ?? "Tool";

  return (
    <div className="mobile-drawer-shell">
      <button className="drawer-scrim" aria-label="Close mobile drawer" onClick={onClose} />
      <aside className="mobile-drawer" aria-label={`${label} drawer`}>
        <div className="drawer-heading">
          <strong>{label}</strong>
          <button ref={closeRef} className="drawer-close" aria-label={`Close ${label} drawer`} onClick={onClose}>
            <Icon name="close.svg" size={12} />
          </button>
        </div>
        {tool === "explorer" && <Explorer active={active} onSelect={onSelect} />}
        {tool === "search" && <SearchPanel inputId="mobile-resume-search" onSelect={onSelect} />}
        {tool === "source-control" && <SourceControlPanel />}
        {tool !== "explorer" && tool !== "search" && tool !== "source-control" && <ToolPlaceholder tool={tool} />}
      </aside>
    </div>
  );
}
