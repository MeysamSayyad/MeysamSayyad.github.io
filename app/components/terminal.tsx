import { useEffect, useRef, useState } from "react";
import type { ResumeSection } from "../resume-data";
import { Icon, parseTerminalCommand, type TerminalEntry } from "./shared";

export function Terminal({ onSelect, open, onToggle }: { onSelect: (section: ResumeSection) => void; open: boolean; onToggle: () => void }) {
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

  return (
    <div className={`terminal ${open ? "is-open" : ""}`}>
      <button className="terminal-toggle" aria-expanded={open} aria-controls="resume-terminal" onClick={onToggle}>
        <Icon name="custom-editor.svg" size={13} /> Terminal
      </button>
      {open && (
        <section id="resume-terminal" className="terminal-panel" aria-label="Resume terminal">
          <div className="terminal-heading">
            <strong>TERMINAL</strong>
            <span>in-app resume shell</span>
          </div>
          <div ref={outputRef} className="terminal-output" role="log" aria-live="polite">
            {history.map((entry, index) => (
              <div className="terminal-entry" key={`${entry.command ?? "ready"}-${index}`}>
                {entry.command !== undefined && (
                  <div>
                    <span className="terminal-prompt">$</span> {entry.command}
                  </div>
                )}
                <div className={entry.tone ? `terminal-${entry.tone}` : ""}>{entry.output}</div>
              </div>
            ))}
          </div>
          <form className="terminal-form" onSubmit={(event) => { event.preventDefault(); submit(); }}>
            <span className="terminal-prompt">$</span>
            <input
              ref={inputRef}
              aria-label="Terminal command"
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
                setHistoryIndex(-1);
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowUp") {
                  event.preventDefault();
                  navigateHistory(-1);
                }
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  navigateHistory(1);
                }
              }}
              placeholder="npm run help"
              autoComplete="off"
            />
          </form>
        </section>
      )}
    </div>
  );
}
