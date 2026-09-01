import { sectionOrder, sectionLabels, type ResumeSection } from "../resume-data";
import { Icon, getSectionFileIcon } from "./shared";

export function Tabs({ active, onSelect }: { active: ResumeSection; onSelect: (section: ResumeSection) => void }) {
  return (
    <div className="tab-manager">
      <div className="tabs" role="tablist" aria-label="Open resume files">
        {sectionOrder.slice(0, 5).map((section) => (
          <button key={section} className={`tab ${active === section ? "is-active" : ""}`} role="tab" aria-selected={active === section} onClick={() => onSelect(section)}>
            <Icon name={getSectionFileIcon(section)} size={11} />
            <span>{sectionLabels[section]}</span>
            {active === section && <Icon name="close.svg" size={9} />}
          </button>
        ))}
      </div>
      <div className="tab-actions" aria-label="Editor actions">
        <Icon name="compare.svg" size={14} />
        <Icon name="split-view.svg" size={13} />
        <Icon name="ellipsis.svg" size={12} />
      </div>
    </div>
  );
}
