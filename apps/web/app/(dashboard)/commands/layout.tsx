import type { ReactNode } from "react";
import { NavTabs } from "./components/nav-tabs";

interface CommandsLayoutProps {
  children: ReactNode;
}

export default function CommandsLayout({ children }: CommandsLayoutProps) {
  return (
    <div>
      <NavTabs />
      {children}
    </div>
  );
}
