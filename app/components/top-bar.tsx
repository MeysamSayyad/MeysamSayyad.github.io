import Image from "next/image";
import { Icon, asset } from "./shared";

export function TopBar() {
  return (
    <header className="top-bar" aria-label="Window controls">
      <Image src={asset("window-buttons.svg")} alt="" width={45} height={11} aria-hidden="true" />
      <div className="top-center">
        <Image src={asset("back-forward.svg")} alt="" width={32} height={9} aria-hidden="true" />
        <div className="search-box">
          <Icon name="search-icon.png" size={12} />
          <span>meysam-sayyad-resume</span>
        </div>
      </div>
      <div className="top-actions" aria-hidden="true">
        <span className="grid-mark" />
        <Icon name="left-bar-icon.png" size={12} />
        <Icon name="sidebar-icon.png" size={12} />
      </div>
    </header>
  );
}
