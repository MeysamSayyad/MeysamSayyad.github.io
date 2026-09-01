import { resume } from "../resume-data";
import { Icon, activityIcons, activityLabels, activityPanels, getGithubLink, type ActivityPanel, type Menu, type Theme, themes } from "./shared";

export function ActivityBar({
  activePanel,
  onPanelChange,
  menu,
  onMenuChange,
  theme,
  onThemeChange,
  menuRef,
}: {
  activePanel: ActivityPanel;
  onPanelChange: (panel: ActivityPanel) => void;
  menu: Menu;
  onMenuChange: (menu: Menu) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
}) {
  const githubLink = getGithubLink();

  return (
    <nav className="activity-bar" aria-label="Activity bar">
      <div className="activity-top">
        {activityIcons.map((icon, index) => {
          const panel = activityPanels[index];
          return (
            <button
              className={`activity-button ${panel && activePanel === panel ? "is-active" : ""}`}
              key={icon}
              aria-label={panel ? activityLabels[panel] : `Activity ${index + 1}`}
              aria-pressed={panel ? activePanel === panel : undefined}
              onClick={() => panel && onPanelChange(panel)}
            >
              <Icon name={icon} size={22} />
              {(index === 2 || index === 4) && <span className="badge">4</span>}
            </button>
          );
        })}
      </div>

      <div className="activity-bottom" ref={menuRef}>
        <button
          className={`activity-button ${menu === "account" ? "is-active" : ""}`}
          aria-label="Account"
          aria-expanded={menu === "account"}
          aria-controls="account-menu"
          onClick={() => onMenuChange(menu === "account" ? null : "account")}
        >
          <Icon name="account.svg" size={18} />
        </button>
        {menu === "account" && (
          <div className="activity-menu account-menu" id="account-menu" role="menu" aria-label="Account menu">
            <strong>{resume.name}</strong>
            <span>{resume.role}</span>
            {githubLink && (
              <a href={githubLink.href} target="_blank" rel="noreferrer" role="menuitem">
                <Icon name="source-control-status.svg" size={11} /> {githubLink.value}
              </a>
            )}
          </div>
        )}

        <button
          className={`activity-button ${menu === "settings" ? "is-active" : ""}`}
          aria-label="Settings"
          aria-expanded={menu === "settings"}
          aria-controls="settings-menu"
          onClick={() => onMenuChange(menu === "settings" ? null : "settings")}
        >
          <Icon name="settings.svg" size={18} />
        </button>
        {menu === "settings" && (
          <div className="activity-menu settings-menu" id="settings-menu" role="menu" aria-label="Theme menu">
            <strong>Theme</strong>
            {themes.map((option) => (
              <button
                key={option.id}
                role="menuitemradio"
                aria-checked={theme === option.id}
                className={theme === option.id ? "is-selected" : ""}
                onClick={() => onThemeChange(option.id)}
              >
                <span className={`theme-swatch theme-${option.id}`} />
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
