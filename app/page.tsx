"use client";

import { useEffect, useRef, useState } from "react";
import { ActivityBar } from "./components/activity-bar";
import { ResumeDocument } from "./components/document-view";
import { MobileActivityBar, MobileDrawer, Sidebar } from "./components/sidebar-panels";
import { StatusBar } from "./components/status-bar";
import { Tabs } from "./components/tabs";
import { Terminal } from "./components/terminal";
import { TopBar } from "./components/top-bar";
import { activityPanels, type ActivityPanel, type Menu, type MobileTool, type Theme, themes } from "./components/shared";
import type { ResumeSection } from "./resume-data";

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

  useEffect(() => {
    if (mobileDrawer) drawerCloseRef.current?.focus();
  }, [mobileDrawer]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (mobileDrawer) {
          setMobileDrawer(null);
          mobileOpenerRef.current?.focus();
        } else {
          setMenu(null);
        }
        return;
      }

      if (!(event.ctrlKey || event.metaKey) || !event.shiftKey || event.key.toLowerCase() !== "e") return;
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;

      event.preventDefault();
      const index = activityPanels.indexOf(activePanel);
      setActivePanel(activityPanels[(index + 1) % activityPanels.length]);
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenu(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [activePanel, mobileDrawer]);

  const changeMobileTool = (tool: MobileTool, button: HTMLButtonElement) => {
    mobileOpenerRef.current = button;
    setMobileDrawer((current) => (current === tool ? null : tool));
  };

  const closeMobileDrawer = () => {
    setMobileDrawer(null);
    mobileOpenerRef.current?.focus();
  };

  const changeTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    try {
      window.localStorage.setItem("resume-theme", nextTheme);
    } catch {
      // storage is optional
    }
    setMenu(null);
  };

  return (
    <main className="page-stage" data-theme={theme} suppressHydrationWarning>
      <div className="vscode-window">
        <TopBar />
        <div className="window-middle">
          <ActivityBar
            activePanel={activePanel}
            onPanelChange={setActivePanel}
            menu={menu}
            onMenuChange={setMenu}
            theme={theme}
            onThemeChange={changeTheme}
            menuRef={menuRef}
          />
          <MobileActivityBar drawer={mobileDrawer} onToolChange={changeMobileTool} />
          <Sidebar panel={activePanel} active={active} onSelect={setActive} />
          <section className="editor-panel" aria-label="Resume editor">
            <Tabs active={active} onSelect={setActive} />
            <ResumeDocument active={active} />
            <Terminal onSelect={setActive} open={terminalOpen} onToggle={() => setTerminalOpen((current) => !current)} />
          </section>
          <MobileDrawer tool={mobileDrawer} active={active} onSelect={setActive} onClose={closeMobileDrawer} closeRef={drawerCloseRef} />
        </div>
        <StatusBar />
      </div>
    </main>
  );
}
