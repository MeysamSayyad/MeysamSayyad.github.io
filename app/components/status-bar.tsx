import { resume } from "../resume-data";
import { Icon, getGithubLink } from "./shared";

export function StatusBar() {
  const githubLink = getGithubLink();

  return (
    <footer className="status-bar">
      <div className="status-left">
        <Icon name="remote-window.svg" size={25} />
        {githubLink && (
          <a className="github-status-link" href={githubLink.href} target="_blank" rel="noreferrer" aria-label={`${resume.name} on GitHub`}>
            <Icon name="source-control-status.svg" size={11} />
            <span>main*</span>
            <span className="github-link-label">{githubLink.value}</span>
          </a>
        )}
        <span>
          <Icon name="error.svg" size={11} /> 0
        </span>
        <span>
          <Icon name="warning.svg" size={11} /> 0
        </span>
      </div>
      <div className="status-right">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 4</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>
          <Icon name="code.svg" size={10} /> TypeScript
        </span>
        <Icon name="bell.svg" size={10} />
      </div>
    </footer>
  );
}
